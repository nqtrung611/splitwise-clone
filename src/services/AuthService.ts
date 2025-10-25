import { User, AuthState, LoginCredentials, CreateUserData } from '../types';
import { firebaseService } from './FirebaseService';

export class AuthService {
  constructor() {
    // Firebase-only service - no localStorage
    console.log('🔥 AuthService: Initialized with Firebase-only mode');
  }

  async login(credentials: LoginCredentials): Promise<AuthState> {
    try {
      console.log('🚀 AuthService: Starting Firebase-only login');
      // Force Firebase only - no environment check
      const user = await firebaseService.authenticateUser(credentials.username, credentials.password);
      if (!user) {
        throw new Error('Invalid credentials');
      }

      console.log('🔥 User from Firebase:', user);
      console.log('🔥 User role:', user.role);
      console.log('🔥 User isAdmin:', (user as any).isAdmin);

      // NUCLEAR CHECK: Double check isActive in AuthService
      console.log('🔥🔥🔥 AUTHSERVICE NUCLEAR CHECK 🔥🔥🔥');
      console.log('🔥 AuthService: user.isActive:', user.isActive);
      console.log('🔥 AuthService: user.isActive type:', typeof user.isActive);
      (window as any).LAST_LOGIN_ATTEMPT = { username: credentials.username, isActive: user.isActive, timestamp: Date.now() };
      
      if (user.isActive !== true) {
        console.error('🚫🚫🚫 AUTHSERVICE BLOCKS LOGIN - USER NOT ACTIVE 🚫🚫🚫');
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
          isActive: user.isActive, // PRESERVE ORIGINAL VALUE - DO NOT FORCE
          avatar: user.avatar,
          qrCode: user.qrCode
        },
        token: this.generateToken()
      };
      
      // FINAL FAIL-SAFE CHECK
      if (authState.currentUser?.isActive !== true) {
        console.error('🚨🚨🚨 FINAL FAIL-SAFE TRIGGERED 🚨🚨🚨');
        console.error('🚨 AuthState has isActive:', authState.currentUser?.isActive);
        (window as any).FINAL_FAILSAFE_TRIGGERED = true;
        alert('🚨 FINAL FAIL-SAFE: Blocking login with isActive = ' + authState.currentUser?.isActive);
        throw new Error('FINAL FAIL-SAFE: User not active in final auth state.');
      }
      
      console.log('🔥 Final auth state:', authState);
      return authState;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Login failed');
    }
  }

  logout(): void {
    // No storage to clear in Firebase-only mode
  }

  getCurrentAuth(): AuthState {
    // For now, always require fresh login (stateless)
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
      console.error('Failed to fetch users from Firebase:', error);
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

      console.log('🔥 AuthService: Updating user via Firebase:', userId, apiUpdates);
      
      const updatedUser = await firebaseService.updateUser(userId, apiUpdates);
      
      console.log('🔥 AuthService: User updated successfully via Firebase:', updatedUser);
      return updatedUser;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to update user');
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      console.log('🔥 AuthService: Deleting user via Firebase:', userId);
      await firebaseService.deleteUser(userId);
      console.log('🔥 AuthService: User deleted successfully from Firebase');
    } catch (error) {
      console.error('🔥 AuthService: Failed to delete user:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to delete user from Firebase');
    }
  }

  async updateQRCode(userId: string, qrCode: string | null): Promise<void> {
    try {
      await this.updateUser(userId, { qrCode: qrCode || undefined });
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to update QR code');
    }
  }

  private generateToken(): string {
    return `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  isAdmin(user?: User | null): boolean {
    return user?.role === 'admin';
  }

  // Firebase only - no localStorage fallback
}