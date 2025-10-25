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
      <div class="card mb-4 hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center space-x-2 mb-2">
              <h3 class="font-medium text-gray-900 text-lg">${this.expense.description}</h3>
              <span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                ${this.getCategoryName(this.expense.category)}
              </span>
              ${this.expense.splitType === 'custom' ? `
                <span class="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                  🧮 Tùy chỉnh
                </span>
              ` : ''}
            </div>
            
            <div class="space-y-1">
              <p class="text-sm text-gray-600">
                <span class="font-medium">${paidByUser?.name}</span> đã trả 
                <span class="font-semibold text-gray-900">${formatCurrency(this.expense.amount)}</span>
              </p>
              
              <p class="text-xs text-gray-500">
                📅 ${this.expense.date.toLocaleDateString('vi-VN', { 
                  weekday: 'short', 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
              
              <div class="flex items-center space-x-2 text-xs text-gray-500">
                <span>👥 Chia cho ${this.expense.splitBetween.length} người</span>
                ${this.expense.splitType === 'equal' ? `
                  <span>•</span>
                  <span>${formatCurrency(this.expense.amount / this.expense.splitBetween.length)}/người</span>
                ` : ''}
              </div>
              
              <div class="mt-2">
                <details class="text-xs text-gray-500">
                  <summary class="cursor-pointer hover:text-gray-700">Chi tiết chia tiền</summary>
                  <div class="mt-2 pl-4 space-y-1">
                    ${this.expense.splitBetween.map(split => {
                      const user = this.users.find(u => u.id === split.userId);
                      return `
                        <div class="flex justify-between">
                          <span>${user?.name}</span>
                          <span>${formatCurrency(split.amount || 0)}</span>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </details>
              </div>
            </div>
          </div>
          
          <div class="text-right ml-4">
            <div class="font-bold text-xl text-gray-900 mb-1">
              ${formatCurrency(this.expense.amount)}
            </div>
            ${isCurrentUserInvolved ? this.renderUserInvolvement() : ''}
          </div>
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
        <div class="text-sm space-y-1">
          <div class="text-splitwise-green font-medium">
            💰 Bạn được nợ ${formatCurrency(netAmount)}
          </div>
          <div class="text-xs text-gray-500">
            (Trả ${formatCurrency(this.expense.amount)} - Nợ ${formatCurrency(splitAmount)})
          </div>
        </div>
      `;
    } else if (isCurrentUserPayer) {
      return `
        <div class="text-sm text-splitwise-green font-medium">
          💰 Bạn được nợ ${formatCurrency(this.expense.amount)}
        </div>
      `;
    } else if (isCurrentUserSplitter) {
      return `
        <div class="text-sm text-splitwise-red font-medium">
          💳 Bạn nợ ${formatCurrency(splitAmount)}
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
}