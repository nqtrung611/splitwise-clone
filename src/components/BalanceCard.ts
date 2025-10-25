import { Balance, User } from '../types';
import { formatCurrency, calculateSettlements } from '../utils';

export class BalanceCard {
  private balance: Balance;
  private users: User[];
  private allBalances: Record<string, Balance>;

  constructor(balance: Balance, users: User[], allBalances: Record<string, Balance>) {
    this.balance = balance;
    this.users = users;
    this.allBalances = allBalances;
  }

  render(): string {
    const totalOwed = this.balance.totalOwed;
    const totalOwes = this.balance.totalOwes;
    const netBalance = totalOwed - totalOwes;

    return `
      <div class="card">
        <h2 class="text-lg font-semibold mb-4 flex items-center">
          💰 Tổng quan số dư
        </h2>
        
        ${this.renderBalanceSummary(totalOwed, totalOwes, netBalance)}
        
        ${Object.keys(this.balance.owedBy).length > 0 || Object.keys(this.balance.owes).length > 0 
          ? this.renderDetailedBalances() 
          : '<p class="text-gray-500 text-center py-4">🎉 Bạn đã thanh toán hết!</p>'
        }
        
        ${this.renderSettlementSuggestions()}
      </div>
    `;
  }

  private renderBalanceSummary(totalOwed: number, totalOwes: number, netBalance: number): string {
    return `
      <div class="space-y-3 mb-6">
        <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
          <span class="text-green-700 font-medium">💚 Được nợ:</span>
          <span class="font-bold text-green-700 text-lg">+${formatCurrency(totalOwed)}</span>
        </div>
        
        <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
          <span class="text-red-700 font-medium">💔 Bạn nợ:</span>
          <span class="font-bold text-red-700 text-lg">-${formatCurrency(totalOwes)}</span>
        </div>
        
        <div class="flex justify-between items-center p-4 ${netBalance >= 0 ? 'bg-green-100' : 'bg-red-100'} rounded-lg border-2 ${netBalance >= 0 ? 'border-green-300' : 'border-red-300'}">
          <span class="font-bold ${netBalance >= 0 ? 'text-green-800' : 'text-red-800'}">
            ${netBalance >= 0 ? '🎯' : '⚠️'} Tổng cộng:
          </span>
          <span class="font-bold text-xl ${netBalance >= 0 ? 'text-green-800' : 'text-red-800'}">
            ${netBalance >= 0 ? '+' : ''}${formatCurrency(netBalance)}
          </span>
        </div>
      </div>
    `;
  }

  private renderDetailedBalances(): string {
    let html = '<div class="space-y-3 mb-6">';
    
    // Who owes you
    const owedEntries = Object.entries(this.balance.owedBy).filter(([_, amount]) => amount > 0);
    if (owedEntries.length > 0) {
      html += '<h3 class="font-semibold text-green-700 text-sm mb-2">💚 Ai nợ bạn:</h3>';
      owedEntries.forEach(([userId, amount]) => {
        const user = this.users.find(u => u.id === userId);
        html += `
          <div class="flex justify-between items-center p-2 bg-green-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-green-700">${user?.name}</span>
            </div>
            <span class="font-semibold text-green-700">+${formatCurrency(amount)}</span>
          </div>
        `;
      });
    }

    // Who you owe
    const owesEntries = Object.entries(this.balance.owes).filter(([_, amount]) => amount > 0);
    if (owesEntries.length > 0) {
      html += '<h3 class="font-semibold text-red-700 text-sm mb-2 mt-4">💔 Bạn nợ ai:</h3>';
      owesEntries.forEach(([userId, amount]) => {
        const user = this.users.find(u => u.id === userId);
        html += `
          <div class="flex justify-between items-center p-2 bg-red-50 rounded text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-red-700">${user?.name}</span>
            </div>
            <span class="font-semibold text-red-700">-${formatCurrency(amount)}</span>
          </div>
        `;
      });
    }

    html += '</div>';
    return html;
  }

  private renderSettlementSuggestions(): string {
    const settlements = calculateSettlements(this.allBalances);
    const currentUserSettlements = settlements.filter(s => 
      s.from === this.balance.userId || s.to === this.balance.userId
    );

    if (currentUserSettlements.length === 0) {
      return '';
    }

    let html = `
      <div class="border-t pt-4">
        <h3 class="font-semibold text-gray-700 text-sm mb-3 flex items-center">
          🔄 Gợi ý thanh toán
        </h3>
        <div class="space-y-2">
    `;

    currentUserSettlements.forEach(settlement => {
      const fromUser = this.users.find(u => u.id === settlement.from);
      const toUser = this.users.find(u => u.id === settlement.to);
      
      if (settlement.from === this.balance.userId) {
        html += `
          <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg text-sm">
            <span class="text-orange-700">
              💸 Chuyển cho <strong>${toUser?.name}</strong>
            </span>
            <span class="font-bold text-orange-700">${formatCurrency(settlement.amount)}</span>
          </div>
        `;
      } else {
        html += `
          <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg text-sm">
            <span class="text-blue-700">
              💰 Nhận từ <strong>${fromUser?.name}</strong>
            </span>
            <span class="font-bold text-blue-700">${formatCurrency(settlement.amount)}</span>
          </div>
        `;
      }
    });

    html += `
        </div>
        <p class="text-xs text-gray-500 mt-2">
          💡 Đây là cách tối ưu để thanh toán tất cả các khoản nợ
        </p>
      </div>
    `;

    return html;
  }
}
