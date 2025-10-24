import { User, AuthState, LoginCredentials, CreateUserData } from '../types';
import { apiService } from './ApiService';
import { firebaseService } from './FirebaseService';

export class AuthService {
  private static readonly STORAGE_KEY = 'splitwise_auth';

  constructor() {
    // No need to initialize data - server handles this
  }

  async login(credentials: LoginCredentials): Promise<AuthState> {
    try {
      // Only use Firebase
      const user = await firebaseService.authenticateUser(credentials.username, credentials.password);
      if (!user) {
        throw new Error('Invalid credentials');
      }

      const authState: AuthState = {
        isAuthenticated: true,
        currentUser: {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role || ((user as any).isAdmin ? 'admin' : 'user'),
          createdAt: new Date(user.createdAt || Date.now()),
          isActive: true,
          avatar: user.avatar,
          qrCode: user.qrCode
        },
        token: this.generateToken()
      };
      
      // Only store auth token, not full state
      sessionStorage.setItem('auth_token', authState.token || '');
      return authState;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Login failed');
    }
  }

  logout(): void {
    sessionStorage.removeItem('auth_token');
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
        role: (user as any).isAdmin ? 'admin' : 'user',
        isActive: true
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

  // Firebase only - no localStorage fallback
}