import { User, Balance, Expense } from '../types';
import { formatCurrency, calculateSettlements } from '../utils';

export class SettlementCard {
  private users: User[];
  private allBalances: Record<string, Balance>;
  private currentUser: User | null;
  private expenses: Expense[];

  constructor(
    users: User[], 
    allBalances: Record<string, Balance>, 
    currentUser: User | null,
    expenses: Expense[] = []
  ) {
    this.users = users;
    this.allBalances = allBalances;
    this.currentUser = currentUser;
    this.expenses = expenses;
  }

  render(): string {
    const settlements = calculateSettlements(this.allBalances);
    // Debug with alerts instead of console.log
    
    if (settlements.length === 0) {
      return `
        <div class="card">
          <h2 class="text-lg font-semibold mb-4 flex items-center">
            🎯 Gợi ý thanh toán
          </h2>
          <div class="text-center py-8">
            <div class="text-4xl mb-4">🎉</div>
            <h3 class="text-lg font-medium text-gray-800 mb-2">Tất cả đã thanh toán!</h3>
            <p class="text-gray-500">Không có khoản nợ nào cần thanh toán</p>
          </div>
        </div>
      `;
    }

    return `
      <div class="card">
        <h2 class="text-lg font-semibold mb-4 flex items-center">
          🎯 Gợi ý thanh toán
        </h2>
        
        <div class="space-y-3 mb-4">
          ${settlements.map((settlement) => {
            const fromUser = this.users.find(u => u.id === settlement.from);
            const toUser = this.users.find(u => u.id === settlement.to);
            
            // Kiểm tra xem settlement này đã được hoàn thành chưa bằng cách check status trong expenses
            const isCompleted = this.isSettlementCompleted(settlement.from, settlement.to, settlement.amount);
            
            // Chỉ người nhận tiền mới thấy nút "Đã trả"
            const canMarkAsSettled = this.currentUser && this.currentUser.id === settlement.to;
            console.log('🔥 Settlement check:', {
              from: fromUser?.name,
              to: toUser?.name,
              currentUser: this.currentUser?.name,
              canMarkAsSettled,
              settlementTo: settlement.to,
              currentUserId: this.currentUser?.id
            });
            
            return `
              <div class="p-3 ${isCompleted ? 'bg-gradient-to-r from-green-50 to-green-100 border-green-300' : 'bg-gradient-to-r from-blue-50 to-green-50'} rounded-lg border ${isCompleted ? 'border-green-300' : 'border-blue-200'}">
                ${isCompleted ? `
                  <div class="flex items-center justify-center mb-2">
                    <span class="text-green-600 font-bold text-sm">✅ Đã thanh toán</span>
                  </div>
                ` : ''}
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${fromUser?.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xl">${isCompleted ? '✅' : '💸'}</span>
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${toUser?.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div class="font-bold text-lg ${isCompleted ? 'text-green-600' : 'text-blue-600'}">
                    ${formatCurrency(settlement.amount)}
                  </div>
                </div>
                <div class="text-xs text-gray-600 mb-2">
                  <strong>${fromUser?.name}</strong> chuyển cho <strong>${toUser?.name}</strong>
                </div>
                ${!isCompleted ? `
                  <div class="flex items-center justify-end">
                    ${canMarkAsSettled ? `
                      <button 
                        onclick="window.updatePaymentStatus('${settlement.from}', '${settlement.to}', ${settlement.amount})"
                        class="text-xs text-green-600 hover:text-green-800 bg-green-100 px-2 py-1 rounded"
                        title="Đánh dấu đã nhận tiền"
                      >
                        ✅ Đã nhận
                      </button>
                    ` : `
                      <span class="text-xs text-gray-400">
                        🔒 Chỉ ${toUser?.name} mới có thể xác nhận
                      </span>
                    `}
                  </div>
                ` : `
                  <div class="text-center">
                    <span class="text-xs text-green-600">
                      💚 Giao dịch đã hoàn tất
                    </span>
                  </div>
                `}
              </div>
            `;
          }).join('')}
        </div>

        <div class="bg-gray-50 p-3 rounded-lg">
          <h3 class="font-semibold text-gray-700 mb-2 text-sm flex items-center">
            💡 Tại sao thanh toán theo cách này?
          </h3>
          <div class="text-xs text-gray-600 space-y-1">
            <p>• <strong>Tối ưu:</strong> Chỉ ${settlements.length} giao dịch</p>
            <p>• <strong>Công bằng:</strong> Không ai nợ ai</p>
            <p>• <strong>Đơn giản:</strong> Ít giao dịch nhất</p>
          </div>
        </div>

        <div class="mt-3 text-xs text-gray-500">
          💡 <strong>Mẹo:</strong> Banking, ví điện tử hoặc tiền mặt
        </div>
      </div>
    `;
  }

  private isSettlementCompleted(from: string, to: string, amount: number): boolean {
    // Tìm tất cả expenses có liên quan đến settlement này
    for (const expense of this.expenses) {
      // Kiểm tra nếu expense được trả bởi 'to' (người nhận tiền)
      if (expense.paidBy === to) {
        // Tìm split của người 'from' (người chuyển tiền) trong expense này
        const fromSplit = expense.splitBetween.find(split => split.userId === from);
        if (fromSplit && fromSplit.amount && Math.abs(fromSplit.amount - amount) < 0.01) {
          // Nếu status là 'paid', settlement đã hoàn thành
          return fromSplit.status === 'paid';
        }
      }
    }
    return false;
  }
}