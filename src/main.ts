import './style.css';
import { User, Expense, Settlement } from './types';
import { calculateBalances, formatCurrency } from './utils';
import { ExpenseCard } from './components/ExpenseCard';
import { BalanceCard } from './components/BalanceCard';
import { AddExpenseModal } from './components/AddExpenseModal';
import { SettlementCard } from './components/SettlementCard';
import { LoginModal } from './components/LoginModal';
import { UserManagementModal } from './components/UserManagementModal';
import { AuthService } from './services/AuthService';
import { firebaseService } from './services/FirebaseService';

// Debug: Check if main.ts loads
console.log('🚀🚀🚀 NUCLEAR VERSION v5.0.0-ISACTIVE-BLOCK 🚀🚀🚀');
console.log('🚀 MAIN.TS LOADED SUCCESSFULLY');
console.log('🚀 Date:', new Date().toISOString());
document.title = 'Splitwise Clone v5.0.0-NUCLEAR'; // VISUAL INDICATOR

// Firebase-only mode - no localStorage fallback
console.log('=== FIREBASE ONLY MODE - NUCLEAR ISACTIVE CHECK ===');
console.log('🔥 Build timestamp:', new Date().toISOString());
(window as any).NUCLEAR_VERSION = 'v5.0.0-ISACTIVE-BLOCK'; // GLOBAL INDICATOR
console.log('🔥 Version: v3.0.0-apiservice-disabled');
console.log('🔥 Force new build hash:', Math.random());
console.log('All data stored in Firestore');
console.log('============================');

class SplitwiseApp {
  private users: User[] = [];
  private expenses: Expense[] = [];
  private completedSettlements: Settlement[] = [];
  private currentUser: User | null = null;
  private addExpenseModal: AddExpenseModal;
  private authService: AuthService;
  private firebaseService = firebaseService;
  private currentFilter = '';

  constructor() {
    this.authService = new AuthService();
    const authState = this.authService.getCurrentAuth();
    
    if (authState.isAuthenticated && authState.currentUser) {
      this.currentUser = authState.currentUser;
      this.initializeData();
    }
    
    this.addExpenseModal = new AddExpenseModal(this.users, this.currentUser, (expense: Expense) => this.addExpense(expense));
    this.render();
    this.setupEventListeners();
    
    // Add global delete function for expense cards
    (window as any).deleteExpense = (expenseId: string) => this.deleteExpense(expenseId);
    
    // Add global settlement complete function
    (window as any).markSettlementComplete = (from: string, to: string, amount: number) => {
      console.log('🔥🔥🔥 ===== GLOBAL markSettlementComplete TRIGGERED =====');
      console.log('🔥 Parameters:', { from, to, amount });
      console.log('🔥 Current user:', this.currentUser);
      console.log('🔥 This context:', this);
      
      // Nuclear alert to confirm function is called
      alert('🔥 markSettlementComplete function called! Check console for details.');
      
      this.markSettlementComplete(from, to, amount).catch(error => {
        console.error('❌❌❌ CRITICAL ERROR in markSettlementComplete:', error);
        alert('❌ CRITICAL ERROR: ' + (error instanceof Error ? error.message : error));
      });
    };
    
    // Add global edit user function
    (window as any).editUser = (userId: string) => this.editUser(userId);
  }

  private async initializeData(): Promise<void> {
    try {
      // Load users from API
      this.users = await this.authService.getAllUsers();
      this.users = this.users.filter((u: User) => u.isActive);
      
      // Load expenses from API
      this.expenses = await this.loadExpenses();
      
      // Load settlements from Firebase
      this.completedSettlements = await this.loadCompletedSettlements();
    } catch (error) {
      console.error('Failed to initialize data:', error);
      // No fallback - Firebase only
      throw error;
    }
  }

  private async loadExpenses(): Promise<Expense[]> {
    try {
      return await firebaseService.getExpenses();
    } catch (error) {
      console.error('Failed to load expenses from Firebase:', error);
      throw error; // Force Firebase usage only
    }
  }



  private async loadCompletedSettlements(): Promise<Settlement[]> {
    try {
      console.log('🔥🔥🔥 Main.ts: Loading settlements from Firebase...');
      const settlements = await this.firebaseService.getSettlements();
      console.log('🔥 Main.ts: Loaded settlements:', settlements.length);
      return settlements;
    } catch (error) {
      console.error('❌ Failed to load settlements from Firebase:', error);
      return [];
    }
  }

  private async saveCompletedSettlements(): Promise<void> {
    try {
      console.log('🔥🔥🔥 Main.ts: saveCompletedSettlements() called');
      console.log('🔥 Current completedSettlements length:', this.completedSettlements.length);
      console.log('🔥 All settlements:', this.completedSettlements);
      console.log('🔥 Firebase service object:', this.firebaseService);
      
      // Save only the last settlement (the one just added)
      if (this.completedSettlements.length > 0) {
        const lastSettlement = this.completedSettlements[this.completedSettlements.length - 1];
        console.log('🔥 Last settlement to save:', lastSettlement);
        console.log('🔥 About to call firebaseService.saveSettlement...');
        
        await this.firebaseService.saveSettlement(lastSettlement);
        
        console.log('🔥 ✅ Main.ts: Settlement saved successfully to Firebase');
      } else {
        console.log('🔥 ⚠️ No settlements to save (length = 0)');
      }
    } catch (error) {
      console.error('❌❌❌ CRITICAL ERROR in saveCompletedSettlements:');
      console.error('❌ Error type:', typeof error);
      console.error('❌ Error message:', error instanceof Error ? error.message : error);
      console.error('❌ Full error object:', error);
      alert('Lỗi khi lưu trạng thái thanh toán: ' + (error instanceof Error ? error.message : error));
      throw error; // Re-throw để debug
    }
  }

  private render() {
    const app = document.getElementById('app')!;
    
    if (!this.currentUser) {
      app.innerHTML = this.renderLoginScreen();
      return;
    }
    
    app.innerHTML = `
      <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <header class="bg-white shadow-sm border-b sticky top-0 z-40">
          <div class="max-w-6xl mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <h1 class="text-3xl font-bold text-splitwise-green">💰 Splitwise Clone</h1>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  Beta v1.0
                </span>
              </div>
              <div class="flex items-center space-x-4">
                <!-- DEBUG: Test Firebase Button -->
                <button id="testFirebaseBtn" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                  🔥 Test Firebase
                </button>
                ${this.currentUser.role === 'admin' ? `
                  <button id="userManagementBtn" class="btn-secondary flex items-center space-x-2">
                    <span>👥</span>
                    <span>Quản lý User</span>
                  </button>
                ` : ''}
                <div class="text-right">
                  <div class="text-sm text-gray-500">Xin chào,</div>
                  <div class="font-semibold text-gray-800">${this.currentUser.name}</div>
                  ${this.currentUser.role === 'admin' ? '<div class="text-xs text-red-600">👑 Admin</div>' : ''}
                </div>
                <button id="addExpenseBtn" class="btn-primary flex items-center space-x-2">
                  <span>➕</span>
                  <span>Thêm chi phí</span>
                </button>
                <button id="logoutBtn" class="btn-secondary flex items-center space-x-2">
                  <span>🚪</span>
                  <span>Đăng xuất</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div class="max-w-6xl mx-auto px-4 py-8">
          <!-- Stats Overview -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            ${this.renderStatsCards()}
          </div>

          <div class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-6">
            <!-- Balance Summary -->
            <div class="lg:col-span-1">
              <div id="balanceSection">
                ${this.renderBalanceSection()}
              </div>
            </div>

            <!-- Settlement Suggestions -->
            <div class="lg:col-span-1">
              <div id="settlementSection">
                ${this.renderSettlementSection()}
              </div>
            </div>

            <!-- Expenses List - Takes full width on smaller screens -->
            <div class="xl:col-span-2 lg:col-span-2 col-span-1">
              <div class="card">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h2 class="text-xl font-semibold flex items-center">
                    📋 Danh sách chi phí
                    <span class="ml-2 text-sm font-normal text-gray-500">
                      (${this.getFilteredExpenses().length} chi phí)
                    </span>
                  </h2>
                  <div class="flex items-center space-x-3">
                    <select id="filterCategory" class="input-field w-auto text-sm">
                      <option value="">🏷️ Tất cả danh mục</option>
                      <option value="food">🍽️ Ăn uống</option>
                      <option value="transportation">🚗 Di chuyển</option>
                      <option value="accommodation">🏠 Lưu trú</option>
                      <option value="entertainment">🎉 Giải trí</option>
                      <option value="shopping">🛍️ Mua sắm</option>
                      <option value="utilities">⚡ Tiện ích</option>
                      <option value="other">📦 Khác</option>
                    </select>
                    <button id="clearFilter" class="text-sm text-gray-500 hover:text-gray-700 ${this.currentFilter ? '' : 'hidden'}">
                      ❌ Xóa bộ lọc
                    </button>
                  </div>
                </div>
                <div id="expensesList">
                  ${this.renderExpensesList()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Add Expense Modal -->
        ${this.addExpenseModal.render()}
      </div>
    `;

    // Setup modal event listeners after rendering
    this.addExpenseModal.setupEventListeners();
  }

  private renderLoginScreen(): string {
    return `
      <div class="min-h-screen bg-gray-50 flex items-center justify-center">
        <div class="max-w-md w-full mx-4">
          <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-splitwise-green mb-2">💰 Splitwise Clone</h1>
            <p class="text-gray-600">Ứng dụng chia sẻ chi phí thông minh</p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold text-center mb-6">🔐 Đăng nhập để tiếp tục</h2>
            
            <div class="space-y-4">
              <button id="showLoginBtn" class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Đăng nhập
              </button>
            </div>
          </div>
          
          <div class="mt-6 text-center text-sm text-gray-500">
            <p>✨ Chia sẻ chi phí dễ dàng cùng bạn bè</p>
            <p>📊 Theo dõi số dư và thanh toán thông minh</p>
          </div>
        </div>
      </div>
    `;
  }

  private renderStatsCards(): string {
    if (!this.currentUser) return '';
    
    const totalExpenses = this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const userExpenses = this.expenses.filter(exp => exp.paidBy === this.currentUser!.id);
    const userPaidTotal = userExpenses.reduce((sum, exp) => sum + exp.amount, 0);
    const balances = calculateBalances(this.expenses, this.users);
    const currentBalance = balances[this.currentUser.id];
    const netBalance = currentBalance ? currentBalance.totalOwed - currentBalance.totalOwes : 0;

    return `
      <div class="card text-center">
        <div class="text-2xl mb-2">💰</div>
        <div class="text-2xl font-bold text-gray-800">${formatCurrency(totalExpenses)}</div>
        <div class="text-sm text-gray-600">Tổng chi phí</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">🎯</div>
        <div class="text-2xl font-bold text-gray-800">${formatCurrency(userPaidTotal)}</div>
        <div class="text-sm text-gray-600">Bạn đã trả</div>
      </div>
      
      <div class="card text-center">
        <div class="text-2xl mb-2">${netBalance >= 0 ? '💚' : '💔'}</div>
        <div class="text-2xl font-bold ${netBalance >= 0 ? 'text-green-600' : 'text-red-600'}">
          ${netBalance >= 0 ? '+' : ''}${formatCurrency(netBalance)}
        </div>
        <div class="text-sm text-gray-600">Số dư của bạn</div>
      </div>
    `;
  }

  private renderBalanceSection(): string {
    if (!this.currentUser) return '';
    
    const balances = calculateBalances(this.expenses, this.users);
    const currentUserBalance = balances[this.currentUser.id];

    if (!currentUserBalance) {
      return `
        <div class="card text-center py-8">
          <div class="text-4xl mb-4">🎉</div>
          <h2 class="text-xl font-semibold mb-2">Chưa có giao dịch nào</h2>
          <p class="text-gray-500">Thêm chi phí đầu tiên để bắt đầu!</p>
        </div>
      `;
    }

    const balanceCard = new BalanceCard(currentUserBalance, this.users, balances);
    return balanceCard.render();
  }

  private renderSettlementSection(): string {
    const balances = calculateBalances(this.expenses, this.users);
    const settlementCard = new SettlementCard(this.users, balances, this.currentUser, this.completedSettlements);
    return settlementCard.render();
  }

  private renderExpensesList(): string {
    const filteredExpenses = this.getFilteredExpenses();
    
    if (filteredExpenses.length === 0) {
      return `
        <div class="text-center py-12">
          <div class="text-4xl mb-4">📝</div>
          <h3 class="text-lg font-medium text-gray-800 mb-2">
            ${this.currentFilter ? 'Không có chi phí nào trong danh mục này' : 'Chưa có chi phí nào'}
          </h3>
          <p class="text-gray-500 mb-4">
            ${this.currentFilter ? 'Thử chọn danh mục khác hoặc thêm chi phí mới' : 'Bắt đầu bằng cách thêm chi phí đầu tiên'}
          </p>
          <button onclick="document.getElementById('addExpenseBtn').click()" class="btn-primary">
            ➕ Thêm chi phí ngay
          </button>
        </div>
      `;
    }

    return filteredExpenses.map(expense => {
      const expenseCard = new ExpenseCard(expense, this.users, this.currentUser, () => this.deleteExpense(expense.id));
      return expenseCard.render();
    }).join('');
  }

  private getFilteredExpenses(): Expense[] {
    if (!this.currentFilter) return this.expenses;
    return this.expenses.filter(expense => expense.category === this.currentFilter);
  }

  private setupEventListeners() {
    // Login button (if not authenticated)
    document.getElementById('showLoginBtn')?.addEventListener('click', () => {
      this.showLoginModal();
    });

    // Logout button (if authenticated)
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
      this.logout();
    });

    // User management button (admin only)
    document.getElementById('userManagementBtn')?.addEventListener('click', () => {
      this.showUserManagementModal();
    });

    // Test Firebase button
    document.getElementById('testFirebaseBtn')?.addEventListener('click', async () => {
      console.log('🔥🔥🔥 TEST FIREBASE BUTTON CLICKED!');
      alert('🔥 Testing Firebase connection...');
      
      try {
        console.log('🔥 Testing direct Firebase call...');
        const testSettlement = {
          id: `test_${Date.now()}`,
          from: 'test-user-1',
          to: 'test-user-2',
          amount: 50000,
          isSettled: true,
          createdAt: new Date(),
          settledAt: new Date()
        };
        
        console.log('🔥 Test settlement object:', testSettlement);
        await this.firebaseService.saveSettlement(testSettlement);
        
        alert('✅ Firebase test successful! Check console for details.');
        console.log('✅ Firebase test completed successfully');
      } catch (error) {
        console.error('❌ Firebase test failed:', error);
        alert('❌ Firebase test failed: ' + (error instanceof Error ? error.message : error));
      }
    });

    // Add expense button
    document.getElementById('addExpenseBtn')?.addEventListener('click', () => {
      this.addExpenseModal.show();
    });

    // Filter expenses
    document.getElementById('filterCategory')?.addEventListener('change', (e) => {
      this.currentFilter = (e.target as HTMLSelectElement).value;
      this.updateExpensesList();
      this.updateFilterControls();
    });

    // Clear filter
    document.getElementById('clearFilter')?.addEventListener('click', () => {
      this.currentFilter = '';
      const filterSelect = document.getElementById('filterCategory') as HTMLSelectElement;
      if (filterSelect) filterSelect.value = '';
      this.updateExpensesList();
      this.updateFilterControls();
    });
  }

  private async addExpense(expense: Expense) {
    try {
      console.log('🔥🔥🔥 Main.ts: addExpense called with:', expense);
      console.log('🔥 Main.ts: Calling firebaseService.createExpense...');
      const newExpense = await firebaseService.createExpense(expense);
      console.log('🔥 Main.ts: Firebase returned:', newExpense);
      this.expenses.unshift(newExpense);
      this.updateAll();
      console.log('🔥 Main.ts: Expense added successfully');
    } catch (error) {
      console.error('❌ Failed to add expense to Firebase:', error);
      alert('❌ Lỗi khi lưu expense: ' + (error instanceof Error ? error.message : error));
      throw error; // Don't fallback
    }
  }

  private async deleteExpense(expenseId: string) {
    // Kiểm tra quyền admin
    if (!this.currentUser || this.currentUser.role !== 'admin') {
      alert('⚠️ Chỉ admin mới có thể xóa chi phí!');
      return;
    }

    if (confirm('🗑️ Bạn có chắc chắn muốn xóa chi phí này không?')) {
      try {
        await firebaseService.deleteExpense(expenseId);
        this.expenses = this.expenses.filter(exp => exp.id !== expenseId);
        this.updateAll();
      } catch (error) {
        console.error('Failed to delete expense from Firebase:', error);
        alert('❌ Không thể xóa chi phí. Vui lòng thử lại!');
      }
    }
  }

  private showLoginModal() {
    const loginModal = new LoginModal(
      async (credentials) => {
        try {
          const authState = await this.authService.login(credentials);
          
          // TRIPLE CHECK in main.ts
          console.log('🔥🔥🔥 MAIN.TS FINAL CHECK 🔥🔥🔥');
          console.log('🔥 Main.ts: authState.currentUser?.isActive:', authState.currentUser?.isActive);
          
          if (authState.currentUser?.isActive !== true) {
            console.error('🚫🚫🚫 MAIN.TS FINAL BLOCK 🚫🚫🚫');
            alert('🚫 MAIN.TS BLOCK: User not active');
            throw new Error('User not active in main.ts check');
          }
          
          this.currentUser = authState.currentUser;
          await this.initializeData();
          this.addExpenseModal = new AddExpenseModal(this.users, this.currentUser, (expense: Expense) => this.addExpense(expense));
          this.render();
          this.setupEventListeners();
          
          // Remove login modal
          document.getElementById('login-modal')?.remove();
        } catch (error) {
          throw error; // Let LoginModal handle the error display
        }
      },
      () => {
        // Close modal
        document.getElementById('login-modal')?.remove();
      }
    );

    // Add modal to DOM
    document.body.insertAdjacentHTML('beforeend', loginModal.render());
    loginModal.setupEventListeners();
  }

  private logout() {
    if (confirm('🚪 Bạn có chắc chắn muốn đăng xuất không?')) {
      this.authService.logout();
      this.currentUser = null;
      this.users = [];
      this.expenses = [];
      this.render();
      this.setupEventListeners();
    }
  }

  private async showUserManagementModal() {
    const users = await this.authService.getAllUsers();
    const userManagementModal = new UserManagementModal(
      users,
      async (userData) => {
        return await this.authService.createUser(userData);
      },
      async (userId, isActive) => {
        await this.authService.updateUser(userId, { isActive });
        // Update local users list
        await this.initializeData();
        this.addExpenseModal = new AddExpenseModal(this.users, this.currentUser, (expense: Expense) => this.addExpense(expense));
      },
      () => {
        // Close modal
        document.getElementById('user-management-modal')?.remove();
      },
      this.authService
    );

    // Add modal to DOM
    document.body.insertAdjacentHTML('beforeend', userManagementModal.render());
    userManagementModal.setupEventListeners();
  }

  private async editUser(userId: string) {
    // Find the currently open user management modal
    const userManagementModal = document.querySelector('#user-management-modal');
    if (userManagementModal) {
      // Get the UserManagementModal instance from the modal's data attribute or create a new one
      const users = await this.authService.getAllUsers();
      const modal = new UserManagementModal(
        users,
        async (userData) => await this.authService.createUser(userData),
        async (userId, isActive) => {
          await this.authService.updateUser(userId, { isActive });
        },
        () => {},
        this.authService
      );
      modal.editUser(userId);
    }
  }

  private updateAll() {
    this.updateBalanceSection();
    this.updateSettlementSection();
    this.updateExpensesList();
    this.updateStatsCards();
  }

  private updateBalanceSection() {
    const balanceSection = document.getElementById('balanceSection');
    if (balanceSection) {
      balanceSection.innerHTML = this.renderBalanceSection();
    }
  }

  private updateSettlementSection() {
    const settlementSection = document.getElementById('settlementSection');
    if (settlementSection) {
      settlementSection.innerHTML = this.renderSettlementSection();
    }
  }

  private updateExpensesList() {
    const expensesList = document.getElementById('expensesList');
    if (expensesList) {
      expensesList.innerHTML = this.renderExpensesList();
    }
  }

  private updateStatsCards() {
    const statsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3');
    if (statsContainer) {
      statsContainer.innerHTML = this.renderStatsCards();
    }
  }

  private updateFilterControls() {
    const clearFilterBtn = document.getElementById('clearFilter');
    if (clearFilterBtn) {
      if (this.currentFilter) {
        clearFilterBtn.classList.remove('hidden');
      } else {
        clearFilterBtn.classList.add('hidden');
      }
    }
  }



  private async markSettlementComplete(from: string, to: string, amount: number): Promise<void> {
    console.log('🔥🔥🔥 markSettlementComplete called with:', { from, to, amount });
    
    // Kiểm tra quyền - chỉ người nhận tiền mới được đánh dấu hoàn thành
    if (!this.currentUser || this.currentUser.id !== to) {
      console.log('❌ Permission denied. Current user:', this.currentUser?.id, 'Expected user:', to);
      alert('Chỉ người nhận tiền mới có thể xác nhận thanh toán!');
      return;
    }

    console.log('✅ Permission check passed. Creating settlement...');

    // Tạo settlement object
    const settlement: Settlement = {
      id: `settlement_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      from,
      to,
      amount,
      isSettled: true,
      createdAt: new Date(),
      settledAt: new Date()
    };

    console.log('🔥 Settlement object created:', settlement);

    // Thêm vào danh sách completed settlements
    this.completedSettlements.push(settlement);
    console.log('🔥 Added to local completedSettlements. Total:', this.completedSettlements.length);
    
    // Lưu vào Firebase
    console.log('🔥 Calling saveCompletedSettlements...');
    await this.saveCompletedSettlements();
    
    // Re-render để cập nhật UI
    console.log('🔥 Re-rendering UI...');
    this.render();

    // Hiển thị thông báo thành công
    const fromUser = this.users.find(u => u.id === from);
    const toUser = this.users.find(u => u.id === to);
    console.log('🔥 Showing success message...');
    alert(`✅ Đã xác nhận nhận tiền từ ${fromUser?.name} cho ${toUser?.name}: ${formatCurrency(amount)}`);
  }


}

// Initialize the app
new SplitwiseApp();