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

document.title = 'Splitwise Clone v5.0.0-NO-DELETE';
(window as any).NUCLEAR_VERSION = 'v5.0.0-NO-DELETE';

class SplitwiseApp {
  private users: User[] = [];
  private expenses: Expense[] = [];
  private settlements: Settlement[] = [];

  private currentUser: User | null = null;
  private addExpenseModal!: AddExpenseModal;
  private authService: AuthService;
  // private firebaseService = firebaseService; // Not used directly
  private currentFilter = '';
  private currentDateFilter = 'last7days'; // Default: 7 ngày gần nhất
  private customStartDate: string | null = null;
  private customEndDate: string | null = null;

  constructor() {
    this.authService = new AuthService();
    this.initializeAuth();
  }

  private async initializeAuth() {
    const authState = this.authService.getCurrentAuth();
    
    if (authState.isAuthenticated && authState.currentUser) {
      // Validate session to ensure user is still active and token is valid
      const isValidSession = await this.authService.validateSession();
      
      if (isValidSession) {
        this.currentUser = authState.currentUser;
        await this.initializeData();
      } else {
        // Session invalid, redirect to login
        this.currentUser = null;
      }
    }
    
    // Re-render after auth check
    this.addExpenseModal = new AddExpenseModal(this.users, this.currentUser, (expense: Expense) => this.addExpense(expense));
    this.render();
    this.setupEventListeners();
    
    // Add global edit user function
    (window as any).editUser = (userId: string) => this.editUser(userId);
    
    // Add global confirm settlement function
    (window as any).confirmSettlement = (settlementId: string) => {
      this.confirmSettlement(settlementId).catch(error => {
        alert('❌ Lỗi khi xác nhận thanh toán: ' + (error instanceof Error ? error.message : error));
      });
    };

    // Add global confirm multiple settlements function
    (window as any).confirmMultipleSettlements = (settlementIds: string) => {
      this.confirmMultipleSettlements(settlementIds).catch(error => {
        alert('❌ Lỗi khi xác nhận thanh toán: ' + (error instanceof Error ? error.message : error));
      });
    };
  }

  private async initializeData(): Promise<void> {
    try {
      // Load users from API
      this.users = await this.authService.getAllUsers();
      this.users = this.users.filter((u: User) => u.isActive);
      
      // Load expenses from API
      this.expenses = await this.loadExpenses();
      
      // Load settlements from Firebase
      this.settlements = await this.loadSettlements();
    } catch (error) {
      // No fallback - Firebase only
      throw error;
    }
  }

  private async loadExpenses(): Promise<Expense[]> {
    try {
      return await firebaseService.getExpenses();
    } catch (error) {
      throw error;
    }
  }

  private async loadSettlements(): Promise<Settlement[]> {
    try {
      return await firebaseService.getSettlements();
    } catch (error) {
      return [];
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
                  No Delete v1.0
                </span>
              </div>
              <div class="flex items-center space-x-4">
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
                  <div class="flex flex-col sm:flex-row gap-3">
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
                      
                      <select id="filterDate" class="input-field w-auto text-sm">
                        <option value="all">📅 Tất cả thời gian</option>
                        <option value="today">📆 Hôm nay</option>
                        <option value="yesterday">📆 Hôm qua</option>
                        <option value="last7days" selected>📅 7 ngày gần nhất</option>
                        <option value="last30days">📅 30 ngày gần nhất</option>
                        <option value="thisMonth">📅 Tháng này</option>
                        <option value="lastMonth">📅 Tháng trước</option>
                        <option value="custom">📅 Tùy chỉnh</option>
                      </select>
                    </div>
                    
                    <div id="customDateRange" class="flex items-center space-x-2 ${this.currentDateFilter === 'custom' ? '' : 'hidden'}">
                      <input type="date" id="startDate" class="input-field w-auto text-sm" placeholder="Từ ngày">
                      <span class="text-gray-500">đến</span>
                      <input type="date" id="endDate" class="input-field w-auto text-sm" placeholder="Đến ngày">
                    </div>
                    
                    <button id="clearAllFilters" class="text-sm text-gray-500 hover:text-gray-700 ${this.currentFilter || this.currentDateFilter !== 'last7days' ? '' : 'hidden'}">
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
            <p class="text-sm text-blue-600 mt-2">✨ Tính năng xóa đã bị gỡ bỏ để bảo vệ dữ liệu</p>
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
            <p>🛡️ Dữ liệu được bảo vệ - không thể xóa</p>
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
    
    const balances = this.calculateBalancesWithSettlements();
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
    const settlementCard = new SettlementCard(this.users, this.settlements, this.currentUser);
    return settlementCard.render();
  }

  private renderExpensesList(): string {
    const filteredExpenses = this.getFilteredExpenses();
    
    if (filteredExpenses.length === 0) {
      return `
        <div class="text-center py-12">
          <div class="text-4xl mb-4">📝</div>
          <h3 class="text-lg font-medium text-gray-800 mb-2">
            ${this.getEmptyStateTitle()}
          </h3>
          <p class="text-gray-500 mb-4">
            ${this.getEmptyStateDescription()}
          </p>
          <button onclick="document.getElementById('addExpenseBtn').click()" class="btn-primary">
            ➕ Thêm chi phí ngay
          </button>
        </div>
      `;
    }

    return filteredExpenses.map(expense => {
      const expenseCard = new ExpenseCard(expense, this.users, this.currentUser);
      return expenseCard.render();
    }).join('');
  }

  private getFilteredExpenses(): Expense[] {
    let filtered = [...this.expenses];

    // Filter by category
    if (this.currentFilter) {
      filtered = filtered.filter(expense => expense.category === this.currentFilter);
    }

    // Filter by date
    filtered = this.filterByDate(filtered);

    return filtered;
  }

  private filterByDate(expenses: Expense[]): Expense[] {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    switch (this.currentDateFilter) {
      case 'all':
        return expenses;
        
      case 'today':
        return expenses.filter(expense => {
          const expenseDate = new Date(expense.date);
          const expenseDay = new Date(expenseDate.getFullYear(), expenseDate.getMonth(), expenseDate.getDate());
          return expenseDay.getTime() === today.getTime();
        });
        
      case 'yesterday':
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        return expenses.filter(expense => {
          const expenseDate = new Date(expense.date);
          const expenseDay = new Date(expenseDate.getFullYear(), expenseDate.getMonth(), expenseDate.getDate());
          return expenseDay.getTime() === yesterday.getTime();
        });
        
      case 'last7days':
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        return expenses.filter(expense => {
          const expenseDate = new Date(expense.date);
          return expenseDate >= sevenDaysAgo && expenseDate <= now;
        });
        
      case 'last30days':
        const thirtyDaysAgo = new Date(today);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return expenses.filter(expense => {
          const expenseDate = new Date(expense.date);
          return expenseDate >= thirtyDaysAgo && expenseDate <= now;
        });
        
      case 'thisMonth':
        const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const thisMonthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
        return expenses.filter(expense => {
          const expenseDate = new Date(expense.date);
          return expenseDate >= thisMonthStart && expenseDate <= thisMonthEnd;
        });
        
      case 'lastMonth':
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59);
        return expenses.filter(expense => {
          const expenseDate = new Date(expense.date);
          return expenseDate >= lastMonthStart && expenseDate <= lastMonthEnd;
        });
        
      case 'custom':
        if (!this.customStartDate || !this.customEndDate) return expenses;
        const startDate = new Date(this.customStartDate);
        const endDate = new Date(this.customEndDate);
        endDate.setHours(23, 59, 59, 999); // End of day
        return expenses.filter(expense => {
          const expenseDate = new Date(expense.date);
          return expenseDate >= startDate && expenseDate <= endDate;
        });
        
      default:
        return expenses;
    }
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

    // Filter by date
    document.getElementById('filterDate')?.addEventListener('change', (e) => {
      this.currentDateFilter = (e.target as HTMLSelectElement).value;
      this.updateExpensesList();
      this.updateFilterControls();
      this.toggleCustomDateRange();
    });

    // Custom date range inputs
    document.getElementById('startDate')?.addEventListener('change', (e) => {
      this.customStartDate = (e.target as HTMLInputElement).value;
      this.updateExpensesList();
    });

    document.getElementById('endDate')?.addEventListener('change', (e) => {
      this.customEndDate = (e.target as HTMLInputElement).value;
      this.updateExpensesList();
    });

    // Clear all filters
    document.getElementById('clearAllFilters')?.addEventListener('click', () => {
      this.currentFilter = '';
      this.currentDateFilter = 'last7days';
      this.customStartDate = null;
      this.customEndDate = null;
      
      const categorySelect = document.getElementById('filterCategory') as HTMLSelectElement;
      const dateSelect = document.getElementById('filterDate') as HTMLSelectElement;
      const startDateInput = document.getElementById('startDate') as HTMLInputElement;
      const endDateInput = document.getElementById('endDate') as HTMLInputElement;
      
      if (categorySelect) categorySelect.value = '';
      if (dateSelect) dateSelect.value = 'last7days';
      if (startDateInput) startDateInput.value = '';
      if (endDateInput) endDateInput.value = '';
      
      this.updateExpensesList();
      this.updateFilterControls();
      this.toggleCustomDateRange();
    });
  }

  private async addExpense(expense: Expense) {
    try {
      const newExpense = await firebaseService.createExpense(expense);
      this.expenses.unshift(newExpense);
      
      // Tạo settlements từ expense mới
      await this.createSettlementsFromExpense(newExpense);
      
      // Reload settlements from Firebase để hiển thị mới
      this.settlements = await this.loadSettlements();
      
      this.updateAll();
    } catch (error) {
      alert('❌ Lỗi khi lưu expense: ' + (error instanceof Error ? error.message : error));
      throw error; // Don't fallback
    }
  }

  private async createSettlementsFromExpense(expense: Expense) {
    try {
      
      const paidByUser = expense.paidBy;
      
      // Tạo settlement cho mỗi người nợ tiền
      for (const split of expense.splitBetween) {
        // Bỏ qua nếu người trả và người nợ là cùng 1 người
        if (split.userId === paidByUser) {
          continue;
        }
        
        const settlement: Settlement = {
          id: `settlement_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          from: split.userId, // Người nợ tiền
          to: paidByUser, // Người đã trả
          amount: split.amount || 0,
          description: `Thanh toán cho: ${expense.description}`,
          isSettled: false,
          createdAt: new Date(),
          relatedExpenses: [expense.id || '']
        };
        
        await firebaseService.saveSettlement(settlement);
      }
      
    } catch (error) {
      throw error;
    }
  }

  // Note: Method deleteExpense đã bị gỡ bỏ hoàn toàn để bảo vệ dữ liệu
  
  private calculateBalancesWithSettlements() {
    const balances = calculateBalances(this.expenses, this.users);
    
    // Adjust balances based on confirmed settlements
    this.settlements.forEach(settlement => {
      if (settlement.isSettled) {
        const fromBalance = balances[settlement.from];
        const toBalance = balances[settlement.to];
        
        if (fromBalance && toBalance) {
          fromBalance.totalOwes -= settlement.amount;
          toBalance.totalOwed -= settlement.amount;
        }
      }
    });
    
    return balances;
  }

  private async confirmSettlement(settlementId: string) {
    try {
      const settlement = this.settlements.find(s => s.id === settlementId);
      if (!settlement) {
        throw new Error('Settlement not found');
      }

      // Only the receiver can confirm
      if (!this.currentUser || settlement.to !== this.currentUser.id) {
        throw new Error('Chỉ người nhận tiền mới có thể xác nhận thanh toán');
      }

      // Update settlement as confirmed
      settlement.isSettled = true;
      await firebaseService.saveSettlement(settlement);
      
      // Update local data
      this.settlements = await this.loadSettlements();
      this.updateAll();
      
      alert('✅ Đã xác nhận thanh toán thành công!');
    } catch (error) {
      throw error;
    }
  }

  private async confirmMultipleSettlements(settlementIds: string) {
    try {
      
      const ids = settlementIds.split(',');
      let confirmedCount = 0;
      
      
      for (const id of ids) {
        const settlement = this.settlements.find(s => s.id === id.trim());
        
        if (!settlement) {
          continue;
        }

        // Only the receiver can confirm
        if (!this.currentUser || settlement.to !== this.currentUser.id) {
          continue;
        }

        
        // Update settlement as confirmed
        settlement.isSettled = true;
        settlement.settledAt = new Date();
        settlement.settledBy = this.currentUser.id;
        
        await firebaseService.saveSettlement(settlement);
        confirmedCount++;
      }
      
      
      // Reload all data to ensure consistency
      this.settlements = await this.loadSettlements();
      
      this.updateAll();
      
      if (confirmedCount > 0) {
        alert(`✅ Đã xác nhận ${confirmedCount} thanh toán thành công!`);
      } else {
        alert('⚠️ Không có thanh toán nào được xác nhận');
      }
    } catch (error) {
      alert('❌ Có lỗi xảy ra khi xác nhận thanh toán');
      throw error;
    }
  }

  private updateAll() {
    this.updateExpensesList();
    this.updateBalanceSection();
    this.updateSettlementSection();
    this.updateStatsCards();
  }

  private updateExpensesList() {
    const container = document.getElementById('expensesList');
    if (container) {
      container.innerHTML = this.renderExpensesList();
    }
  }

  private updateBalanceSection() {
    const container = document.getElementById('balanceSection');
    if (container) {
      container.innerHTML = this.renderBalanceSection();
    }
  }

  private updateSettlementSection() {
    const container = document.getElementById('settlementSection');
    if (container) {
      container.innerHTML = this.renderSettlementSection();
    }
  }

  private updateStatsCards() {
    const statsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3');
    if (statsContainer) {
      statsContainer.innerHTML = this.renderStatsCards();
    }
  }

  private updateFilterControls() {
    const clearBtn = document.getElementById('clearAllFilters');
    if (clearBtn) {
      const hasAnyFilter = this.currentFilter || this.currentDateFilter !== 'last7days';
      clearBtn.classList.toggle('hidden', !hasAnyFilter);
    }
  }

  private toggleCustomDateRange() {
    const customDateRange = document.getElementById('customDateRange');
    if (customDateRange) {
      customDateRange.classList.toggle('hidden', this.currentDateFilter !== 'custom');
    }
  }

  private getEmptyStateTitle(): string {
    const hasFilters = this.currentFilter || this.currentDateFilter !== 'last7days';
    if (hasFilters) {
      return 'Không có chi phí nào phù hợp với bộ lọc';
    }
    return 'Chưa có chi phí nào';
  }

  private getEmptyStateDescription(): string {
    const hasFilters = this.currentFilter || this.currentDateFilter !== 'last7days';
    if (hasFilters) {
      return 'Thử thay đổi bộ lọc hoặc thêm chi phí mới';
    }
    return 'Bắt đầu bằng cách thêm chi phí đầu tiên';
  }

  private async editUser(userId: string) {
    if (!this.currentUser || this.currentUser.role !== 'admin') {
      alert('⚠️ Chỉ admin mới có thể chỉnh sửa user!');
      return;
    }

    const user = this.users.find(u => u.id === userId);
    if (!user) {
      alert('❌ Không tìm thấy user!');
      return;
    }

    // Create modal for editing user
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-white rounded-lg p-6 w-96">
        <h2 class="text-xl font-bold mb-4">✏️ Chỉnh sửa User</h2>
        <form id="editUserForm">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Tên:</label>
              <input type="text" id="userName" value="${user.name}" class="input-field w-full" required>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Email:</label>
              <input type="text" id="userEmail" value="${user.id}" class="input-field w-full" readonly>
            </div>
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="userActive" ${user.isActive ? 'checked' : ''} class="rounded">
              <label for="userActive" class="text-sm">Kích hoạt tài khoản</label>
            </div>
          </div>
          <div class="flex space-x-3 mt-6">
            <button type="submit" class="btn-primary flex-1">💾 Lưu</button>
            <button type="button" id="cancelEdit" class="btn-secondary flex-1">❌ Hủy</button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(modal);

    // Handle form submission
    modal.querySelector('#editUserForm')!.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const nameInput = modal.querySelector('#userName') as HTMLInputElement;
      const activeInput = modal.querySelector('#userActive') as HTMLInputElement;

      try {
        await this.authService.updateUser(userId, {
          name: nameInput.value,
          isActive: activeInput.checked
        });

        // Update local users list
        this.users = await this.authService.getAllUsers();
        this.users = this.users.filter((u: User) => u.isActive);
        
        // Update UI
        this.addExpenseModal = new AddExpenseModal(this.users, this.currentUser, (expense: Expense) => this.addExpense(expense));
        this.render();
        this.setupEventListeners();
        
        document.body.removeChild(modal);
        alert('✅ Đã cập nhật user thành công!');
      } catch (error) {
        alert('❌ Lỗi khi cập nhật user: ' + (error instanceof Error ? error.message : error));
      }
    });

    // Handle cancel
    modal.querySelector('#cancelEdit')!.addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    // Handle click outside modal
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
  }

  private showUserManagementModal() {
    const userManagementModal = new UserManagementModal(
      this.users,
      async (userData) => {
        return await this.authService.createUser(userData);
      },
      async (userId: string, isActive: boolean) => {
        await this.authService.updateUser(userId, { isActive });
        document.getElementById('user-management-modal')?.remove();
      },
      () => {
        document.getElementById('user-management-modal')?.remove();
        // Refresh users list after modal closes
        this.authService.getAllUsers().then(users => {
          this.users = users.filter((u: User) => u.isActive);
          this.addExpenseModal = new AddExpenseModal(this.users, this.currentUser, (expense: Expense) => this.addExpense(expense));
          this.render();
          this.setupEventListeners();
        });
      },
      this.authService
    );

    // Add modal to DOM
    document.body.insertAdjacentHTML('beforeend', userManagementModal.render());
    userManagementModal.setupEventListeners();
  }

  private showLoginModal() {
    const loginModal = new LoginModal(
      async (credentials) => {
        try {
          const authState = await this.authService.login(credentials);
          
          // TRIPLE CHECK in main.ts
          
          if (authState.currentUser?.isActive !== true) {
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
    this.authService.logout();
    this.currentUser = null;
    this.users = [];
    this.expenses = [];
    this.settlements = [];
    this.render();
    
    // Re-setup event listeners after DOM updates
    setTimeout(() => {
      this.setupEventListeners();
    }, 0);
  }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  new SplitwiseApp();
});
