// DEPRECATED: ApiService disabled for Firebase-only mode
const API_BASE_URL = 'DISABLED_FIREBASE_ONLY';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    console.error('🚫 ApiService called but disabled! Endpoint:', endpoint);
    console.error('🚫 Options:', options);
    console.error('🚫 Stack trace:', new Error().stack);
    console.error('🚫 Use FirebaseService instead');
    throw new Error(`ApiService disabled: ${endpoint}`);
    
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Auth API
  async login(username: string, password: string): Promise<any> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  }

  // Users API
  async getUsers(): Promise<any[]> {
    return this.request('/users');
  }

  async createUser(userData: { name: string; username: string; password: string }): Promise<any> {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async updateUser(id: string, userData: any): Promise<any> {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async deleteUser(id: string): Promise<void> {
    return this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  // Expenses API
  async getExpenses(): Promise<any[]> {
    return this.request('/expenses');
  }

  async createExpense(expenseData: any): Promise<any> {
    return this.request('/expenses', {
      method: 'POST',
      body: JSON.stringify(expenseData),
    });
  }

  async deleteExpense(id: string): Promise<void> {
    return this.request(`/expenses/${id}`, {
      method: 'DELETE',
    });
  }

  // Health check
  async healthCheck(): Promise<any> {
    return this.request('/health');
  }
}

export const apiService = new ApiService();