import { User, AuthState, LoginCredentials, CreateUserData } from '../types';
import { firebaseService } from './FirebaseService';

export class AuthService {
  constructor() {
    // Firebase-only service - no localStorage
  }

  async login(credentials: LoginCredentials): Promise<AuthState> {
    try {
      
      // NUCLEAR APPROACH: Check Firebase directly BEFORE authenticateUser
      const directCheck = await firebaseService.getUserByUsername(credentials.username);
      if (directCheck) {
        if ((directCheck as any).isActive !== true) {
          (window as any).NUCLEAR_BLOCKED_AT_START = true;
          alert('🚫 NUCLEAR BLOCK: User inactive at start - ' + (directCheck as any).isActive);
          throw new Error('User blocked at login start - isActive: ' + (directCheck as any).isActive);
        }
      }
      
      // Force Firebase only - no environment check
      const user = await firebaseService.authenticateUser(credentials.username, credentials.password);
      if (!user) {
        throw new Error('Invalid credentials');
      }


      // NUCLEAR CHECK: Double check isActive in AuthService
      (window as any).LAST_LOGIN_ATTEMPT = { username: credentials.username, isActive: user.isActive, timestamp: Date.now() };
      
      if (user.isActive !== true) {
        (window as any).BLOCKED_BY_AUTHSERVICE = true;
        alert('🚫 AUTHSERVICE BLOCK: isActive = ' + user.isActive);
        throw new Error('Tài khoản đã bị vô hiệu hóa trong AuthService.');
      }

      // NEVER REACH HERE if user.isActive !== true (should have thrown above)
      const authState: AuthState = {
        isAuthenticated: true,
        currentUser: {
          id: user.id,
          name: user.name,
          username: user.username,
          role: (user as any).isAdmin === true ? 'admin' : (user.role || 'user'),
          createdAt: new Date(user.createdAt || Date.now()),
          isActive: user.isActive,
          // do not persist isActive in localStorage; we will verify against Firebase on each startup
          avatar: user.avatar
        },
        token: this.generateToken()
      };

      // FINAL FAIL-SAFE CHECK (use live isActive from Firebase response)
      if (user.isActive !== true) {
        (window as any).FINAL_FAILSAFE_TRIGGERED = true;
        alert('🚨 FINAL FAIL-SAFE: Blocking login with isActive = ' + user.isActive);
        throw new Error('FINAL FAIL-SAFE: User not active in final auth state.');
      }

      // Persist only minimal auth info (token + essential currentUser fields) to localStorage
      const persist = {
        isAuthenticated: true,
        token: authState.token,
        currentUser: {
          id: authState.currentUser!.id,
          username: authState.currentUser!.username,
          name: authState.currentUser!.name,
          role: authState.currentUser!.role,
          avatar: authState.currentUser!.avatar,
          createdAt: authState.currentUser!.createdAt
        }
      };

      localStorage.setItem('splitwise_auth', JSON.stringify(persist));

      return authState;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Login failed');
    }
  }

  logout(): void {
    // Clear stored auth state
    localStorage.removeItem('splitwise_auth');
  }

  getCurrentAuth(): AuthState {
    try {
      const stored = localStorage.getItem('splitwise_auth');
      if (stored) {
        const persisted = JSON.parse(stored);

        if (persisted.isAuthenticated && persisted.currentUser) {
          // Build a full AuthState in-memory (isActive set optimistically true)
          const currentUser = {
            id: persisted.currentUser.id,
            username: persisted.currentUser.username,
            name: persisted.currentUser.name,
            role: persisted.currentUser.role,
            avatar: persisted.currentUser.avatar,
            createdAt: persisted.currentUser.createdAt ? new Date(persisted.currentUser.createdAt) : new Date(),
            isActive: true // will be validated on startup via validateSession
          } as User;

          const authState: AuthState = {
            isAuthenticated: true,
            currentUser,
            token: persisted.token
          };

          return authState;
        }
      }
    } catch (error) {
      console.error('Failed to parse stored auth state:', error);
      localStorage.removeItem('splitwise_auth');
    }

    return {
      isAuthenticated: false,
      currentUser: null
    };
  }

  async createUser(userData: CreateUserData): Promise<User> {
    try {
      const newUser = await firebaseService.createUser({
        name: userData.name,
        username: userData.username,
        role: 'user',
        isActive: true,
        createdAt: new Date(),
        password: userData.password, // In real app, this should be hashed
        isAdmin: false
      } as any);
      
      return {
        id: newUser.id,
        name: newUser.name,
        username: newUser.username,
        role: 'user',
        createdAt: newUser.createdAt,
        isActive: true
      };
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to create user in Firebase');
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await firebaseService.getUsers();
      return users.map(user => ({
        ...user,
        role: (user as any).isAdmin ? 'admin' : 'user'
        // REMOVED: isActive override - keep Firebase value
      }));
    } catch (error) {
      throw error; // Force Firebase usage only
    }
  }

  async updateUser(userId: string, updates: Partial<User & { password?: string }>): Promise<User> {
    try {
      // Convert role back to isAdmin for API
      const apiUpdates = {
        ...updates,
        isAdmin: updates.role === 'admin'
      };
      delete apiUpdates.role;

      
      const updatedUser = await firebaseService.updateUser(userId, apiUpdates);
      
      return updatedUser;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to update user');
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      await firebaseService.deleteUser(userId);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to delete user from Firebase');
    }
  }



  private generateToken(): string {
    return `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private isTokenValid(token?: string): boolean {
    if (!token || !token.startsWith('token_')) return false;
    
    try {
      const timestamp = parseInt(token.split('_')[1]);
      const now = Date.now();
      const tokenAge = now - timestamp;
      
      // Token expires after 24 hours (86400000 ms)
      return tokenAge < 86400000;
    } catch {
      return false;
    }
  }

  async validateSession(): Promise<boolean> {
    const authState = this.getCurrentAuth();
    
    if (!authState.isAuthenticated || !authState.currentUser || !authState.token) {
      return false;
    }
    
    // Check if token is still valid
    if (!this.isTokenValid(authState.token)) {
      this.logout();
      return false;
    }
    
    // Optionally: verify user still exists and is active in Firebase
    try {
      const user = await firebaseService.getUserByUsername(authState.currentUser.username);
      if (!user || !user.isActive) {
        this.logout();
        return false;
      }
    } catch (error) {
      console.error('Session validation failed:', error);
      this.logout();
      return false;
    }
    
    return true;
  }

  isAdmin(user?: User | null): boolean {
    return user?.role === 'admin';
  }

  // Firebase only - no localStorage fallback
}
