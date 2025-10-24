import { User, AuthState, LoginCredentials, CreateUserData } from '../types';
import { apiService } from './ApiService';
import { firebaseService } from './FirebaseService';
import { useFirebase } from '../config/firebase';

export class AuthService {
  private static readonly STORAGE_KEY = 'splitwise_auth';

  constructor() {
    // No need to initialize data - server handles this
  }

  async login(credentials: LoginCredentials): Promise<AuthState> {
    try {
      let user: User | null = null;
      
      if (useFirebase) {
        // Use Firebase
        user = await firebaseService.authenticateUser(credentials.username, credentials.password);
        if (!user) {
          throw new Error('Invalid credentials');
        }
      } else {
        // Use localStorage fallback (for GitHub Pages)
        user = this.authenticateWithLocalStorage(credentials);
        if (!user) {
          throw new Error('Invalid username or password');
        }
      }

      if (!user) {
        throw new Error('User not found');
      }

      const authState: AuthState = {
        isAuthenticated: true,
        currentUser: {
          id: user.id,
          name: user.name,
          username: user.username,
          role: (user as any).isAdmin ? 'admin' : 'user',
          createdAt: new Date(user.createdAt || Date.now()),
          isActive: true,
          avatar: user.avatar,
          qrCode: user.qrCode
        },
        token: this.generateToken()
      };
      
      localStorage.setItem(AuthService.STORAGE_KEY, JSON.stringify(authState));
      return authState;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Login failed');
    }
  }

  logout(): void {
    localStorage.removeItem(AuthService.STORAGE_KEY);
  }

  getCurrentAuth(): AuthState {
    const stored = localStorage.getItem(AuthService.STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    
    return {
      isAuthenticated: false,
      currentUser: null
    };
  }

  async createUser(userData: CreateUserData): Promise<User> {
    try {
      if (useFirebase) {
        // Use Firebase
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
      } else {
        // Use localStorage fallback
        const users = this.getLocalUsers();
        
        // Check if username exists
        if (users.some(u => u.username === userData.username)) {
          throw new Error('Username already exists');
        }

        const newUser: User & { password: string } = {
          id: `user-${Date.now()}`,
          name: userData.name,
          username: userData.username,
          role: 'user',
          createdAt: new Date(),
          isActive: true,
          password: userData.password
        } as any;

        users.push(newUser);
        this.saveLocalUsers(users);

        const { password, ...userWithoutPassword } = newUser;
        return userWithoutPassword;
      }
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to create user');
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      if (useFirebase) {
        // Use Firebase
        const users = await firebaseService.getUsers();
        return users.map(user => ({
          ...user,
          role: (user as any).isAdmin ? 'admin' : 'user',
          isActive: true
        }));
      } else {
        // Use localStorage fallback
        return this.getLocalUsers();
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
      return this.getLocalUsers(); // Always fallback to localStorage
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

      const response = await apiService.updateUser(userId, apiUpdates);
      
      if (response.success) {
        const updatedUser = {
          ...response.user,
          role: response.user.isAdmin ? 'admin' : 'user',
          createdAt: new Date(response.user.createdAt || Date.now()),
          isActive: true
        };

        // Update current user in localStorage if it's the same user
        const currentAuth = this.getCurrentAuth();
        if (currentAuth.currentUser?.id === userId) {
          const newAuthState = {
            ...currentAuth,
            currentUser: updatedUser
          };
          localStorage.setItem(AuthService.STORAGE_KEY, JSON.stringify(newAuthState));
        }

        return updatedUser;
      } else {
        throw new Error(response.message || 'Failed to update user');
      }
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to update user');
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      await apiService.deleteUser(userId);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to delete user');
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

  // Local storage fallback methods
  private authenticateWithLocalStorage(credentials: LoginCredentials): User | null {
    console.log('Authenticating with localStorage:', credentials);
    
    // Check admin credentials
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      console.log('Admin login successful');
      return {
        id: 'admin-1',
        name: 'Administrator',
        username: 'admin',
        role: 'admin',
        createdAt: new Date(),
        isActive: true
      };
    }

    // Check stored users
    const users = this.getLocalUsers();
    console.log('Stored users:', users);
    
    const user = users.find(u => 
      u.username === credentials.username && 
      (u as any).password === credentials.password
    );

    console.log('Found user:', user);
    return user || null;
  }

  private getLocalUsers(): User[] {
    const stored = localStorage.getItem('splitwise_users');
    if (stored) {
      return JSON.parse(stored).map((user: any) => ({
        ...user,
        createdAt: new Date(user.createdAt),
        role: user.isAdmin ? 'admin' : 'user'
      }));
    }
    return [];
  }

  private saveLocalUsers(users: User[]): void {
    const usersToSave = users.map(user => ({
      ...user,
      isAdmin: user.role === 'admin',
      password: (user as any).password // Keep password for localStorage
    }));
    localStorage.setItem('splitwise_users', JSON.stringify(usersToSave));
  }
}