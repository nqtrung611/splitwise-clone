import { User, Settlement } from '../types';
import { formatCurrency } from '../utils';

export class SettlementCard {
  private users: User[];
  private settlements: Settlement[];
  private currentUser: User | null;

  constructor(
    users: User[], 
    settlements: Settlement[],
    currentUser: User | null
  ) {
    this.users = users;
    this.settlements = settlements;
    this.currentUser = currentUser;
  }

  render(): string {
    console.log('🔥🔥🔥 SettlementCard: render() called');
    console.log('🔥 Total settlements:', this.settlements.length);
    console.log('🔥 All settlements:', this.settlements);
    
    // Lọc settlements chưa thanh toán
    const pendingSettlements = this.settlements.filter(s => !s.isSettled);
    console.log('🔥 Pending settlements:', pendingSettlements.length);
    console.log('🔥 Pending settlements data:', pendingSettlements);
    
    if (pendingSettlements.length === 0) {
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
          ${pendingSettlements.map((settlement) => {
            const fromUser = this.users.find(u => u.id === settlement.from);
            const toUser = this.users.find(u => u.id === settlement.to);
            
            // Chỉ người nhận tiền mới thấy nút "Đã chuyển"
            const canConfirmPayment = this.currentUser && this.currentUser.id === settlement.to;
            
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
                <div class="text-xs text-gray-600 mb-2">
                  <strong>${fromUser?.name}</strong> cần chuyển cho <strong>${toUser?.name}</strong>
                </div>
                <div class="text-xs text-gray-500 mb-2">
                  ${settlement.description}
                </div>
                ${canConfirmPayment ? `
                  <div class="flex justify-end">
                    <button 
                      onclick="window.confirmSettlement('${settlement.id}')"
                      class="text-xs text-green-600 hover:text-green-800 bg-green-100 hover:bg-green-200 px-3 py-1 rounded-full transition-colors"
                      title="Xác nhận đã nhận tiền"
                    >
                      ✅ Đã chuyển
                    </button>
                  </div>
                ` : `
                  <div class="text-center">
                    <span class="text-xs text-gray-400">
                      🔒 Chỉ ${toUser?.name} mới có thể xác nhận
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
            <p>• <strong>Tối ưu:</strong> Chỉ ${pendingSettlements.length} giao dịch</p>
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