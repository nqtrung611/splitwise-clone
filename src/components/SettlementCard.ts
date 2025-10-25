import { User, Balance } from '../types';
import { formatCurrency, calculateSettlements } from '../utils';

export class SettlementCard {
  private users: User[];
  private allBalances: Record<string, Balance>;

  constructor(
    users: User[], 
    allBalances: Record<string, Balance>
  ) {
    this.users = users;
    this.allBalances = allBalances;
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
            
            return `
              <div class="p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${fromUser?.name.charAt(0).toUpperCase()}
                    </div>
                    <span class="text-xl">💸</span>
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ${toUser?.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div class="font-bold text-lg text-blue-600">
                    ${formatCurrency(settlement.amount)}
                  </div>
                </div>
                <div class="text-xs text-gray-600">
                  <strong>${fromUser?.name}</strong> cần chuyển cho <strong>${toUser?.name}</strong>
                </div>
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

}