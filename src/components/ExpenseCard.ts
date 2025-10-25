import { User, Expense } from '../types';
import { formatCurrency } from '../utils';

export class ExpenseCard {
  private expense: Expense;
  private users: User[];
  private currentUser: User | null;
  constructor(expense: Expense, users: User[], currentUser: User | null) {
    this.expense = expense;
    this.users = users;
    this.currentUser = currentUser;
  }

  render(): string {
    const paidByUser = this.users.find(u => u.id === this.expense.paidBy);
    const currentUserId = this.currentUser?.id || '';
    const isCurrentUserInvolved = this.expense.splitBetween.some(s => s.userId === currentUserId) || this.expense.paidBy === currentUserId;
    
    return `
      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-4 hover:shadow-lg hover:border-gray-200 transition-all duration-200">
        <!-- Header with title, category and amount -->
        <div class="flex items-start justify-between mb-3">
          <div class="flex-1 min-w-0">
            <div class="flex items-center flex-wrap gap-2 mb-2">
              <h3 class="font-semibold text-gray-900 text-lg truncate">${this.expense.description}</h3>
              <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200">
                ${this.getCategoryName(this.expense.category)}
              </span>
              ${this.expense.splitType === 'custom' ? `
                <span class="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border border-purple-200">
                  🧮 Tùy chỉnh
                </span>
              ` : ''}
            </div>
          </div>
          
          <div class="text-right ml-4 flex-shrink-0">
            <div class="font-bold text-2xl text-gray-900 mb-1">
              ${formatCurrency(this.expense.amount)}
            </div>
          </div>
        </div>

        <!-- Payment info and date -->
        <div class="flex items-center justify-between mb-3 p-3 bg-gray-50 rounded-lg">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-green-600 text-sm">💰</span>
            </div>
            <div>
              <p class="text-sm text-gray-700">
                <span class="font-medium text-gray-900">${paidByUser?.name}</span> đã thanh toán
              </p>
              <p class="text-xs text-gray-500">📅 ${this.formatDate(this.expense.date)}</p>
            </div>
          </div>
          
          <div class="text-right">
            ${isCurrentUserInvolved ? this.renderUserInvolvement() : ''}
          </div>
        </div>

        <!-- Split info -->
        <div class="flex items-center justify-between mb-3 text-sm">
          <div class="flex items-center space-x-3 text-gray-600">
            <span class="flex items-center space-x-1">
              <span class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-xs">👥</span>
              <span>Chia cho ${this.expense.splitBetween.length} người</span>
            </span>
            ${this.expense.splitType === 'equal' ? `
              <span class="text-gray-400">•</span>
              <span class="font-medium text-gray-700">${formatCurrency(this.expense.amount / this.expense.splitBetween.length)}/người</span>
            ` : ''}
          </div>
        </div>

        <!-- Split details (expandable) -->
        <div class="border-t border-gray-100 pt-3">
          <details class="text-sm">
            <summary class="cursor-pointer hover:text-blue-600 text-gray-600 font-medium flex items-center space-x-2 transition-colors">
              <span>🔍 Xem chi tiết chia tiền</span>
            </summary>
            <div class="mt-3 p-3 bg-gray-50 rounded-lg">
              <div class="space-y-2">
                ${this.expense.splitBetween.map(split => {
                  const user = this.users.find(u => u.id === split.userId);
                  const isCurrentUser = split.userId === this.currentUser?.id;
                  return `
                    <div class="flex justify-between items-center py-1 ${isCurrentUser ? 'bg-blue-50 px-2 rounded font-medium text-blue-900' : ''}">
                      <span class="flex items-center space-x-2">
                        ${isCurrentUser ? '<span class="text-blue-600">👤</span>' : '<span class="text-gray-400">👤</span>'}
                        <span>${user?.name}${isCurrentUser ? ' (Bạn)' : ''}</span>
                      </span>
                      <span class="font-medium">${formatCurrency(split.amount || 0)}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </details>
        </div>
      </div>
    `;
  }

  private renderUserInvolvement(): string {
    const currentUserId = this.currentUser?.id || '';
    const currentUserSplit = this.expense.splitBetween.find(s => s.userId === currentUserId);
    const splitAmount = currentUserSplit?.amount || 0;
    const isCurrentUserPayer = this.expense.paidBy === currentUserId;
    const isCurrentUserSplitter = !!currentUserSplit;

    if (isCurrentUserPayer && isCurrentUserSplitter) {
      const netAmount = this.expense.amount - splitAmount;
      return `
        <div class="text-right">
          <div class="inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
            <div class="text-sm space-y-1">
              <div class="text-green-700 font-semibold flex items-center space-x-1">
                <span class="text-green-600">💰</span>
                <span>+${formatCurrency(netAmount)}</span>
              </div>
              <div class="text-xs text-green-600">
                Bạn được nợ
              </div>
            </div>
          </div>
          <div class="text-xs text-gray-500 mt-1">
            (Trả ${formatCurrency(this.expense.amount)} - Nợ ${formatCurrency(splitAmount)})
          </div>
        </div>
      `;
    } else if (isCurrentUserPayer) {
      return `
        <div class="inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
          <div class="text-sm text-center">
            <div class="text-green-700 font-semibold flex items-center space-x-1">
              <span class="text-green-600">💰</span>
              <span>+${formatCurrency(this.expense.amount)}</span>
            </div>
            <div class="text-xs text-green-600">
              Bạn được nợ
            </div>
          </div>
        </div>
      `;
    } else if (isCurrentUserSplitter) {
      return `
        <div class="inline-flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-red-50 to-rose-50 border border-red-200">
          <div class="text-sm text-center">
            <div class="text-red-700 font-semibold flex items-center space-x-1">
              <span class="text-red-600">💳</span>
              <span>-${formatCurrency(splitAmount)}</span>
            </div>
            <div class="text-xs text-red-600">
              Bạn nợ
            </div>
          </div>
        </div>
      `;
    }
    return '';
  }

  private getCategoryName(category: string): string {
    const categories: Record<string, string> = {
      food: '🍽️ Ăn uống',
      transportation: '🚗 Di chuyển',
      accommodation: '🏠 Lưu trú',
      entertainment: '🎉 Giải trí',
      shopping: '🛍️ Mua sắm',
      utilities: '⚡ Tiện ích',
      other: '📦 Khác'
    };
    return categories[category] || '📦 Khác';
  }

  private formatDate(date: Date): string {
    const now = new Date();
    const expenseDate = new Date(date);
    
    // Check if it's today
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const expenseDay = new Date(expenseDate.getFullYear(), expenseDate.getMonth(), expenseDate.getDate());
    
    if (expenseDay.getTime() === today.getTime()) {
      return 'Hôm nay';
    }
    
    // Check if it's yesterday
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (expenseDay.getTime() === yesterday.getTime()) {
      return 'Hôm qua';
    }
    
    // Check if it's within this week
    const daysDiff = Math.floor((today.getTime() - expenseDay.getTime()) / (1000 * 60 * 60 * 24));
    if (daysDiff >= 0 && daysDiff < 7) {
      const weekdays = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
      return weekdays[expenseDate.getDay()];
    }
    
    // Format as dd/mm/yyyy
    return expenseDate.toLocaleDateString('vi-VN');
  }
}