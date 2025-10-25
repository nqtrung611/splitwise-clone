import { User, Expense, ExpenseCategory, ExpenseSplit } from '../types';
import { validateExpense, generateId } from '../utils';

export class AddExpenseModal {
  private users: User[];
  private currentUser: User | null;
  private onAddExpense: (expense: Expense) => void;

  constructor(users: User[], currentUser: User | null, onAddExpense: (expense: Expense) => void) {
    this.users = users;
    this.currentUser = currentUser;
    this.onAddExpense = onAddExpense;
  }

  show() {
    this.render();
    const modal = document.getElementById('addExpenseModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      // Focus on first input
      const firstInput = modal.querySelector('input[type="text"]') as HTMLInputElement;
      if (firstInput) firstInput.focus();
    }
  }

  hide() {
    const modal = document.getElementById('addExpenseModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
    this.resetForm();
  }

  render(): string {
    return `
      <div id="addExpenseModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
        <div class="bg-white rounded-xl p-6 w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold text-gray-800 flex items-center">
              💰 Thêm chi phí mới
            </h3>
            <button id="closeModal" class="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>
          
          <form id="addExpenseForm" class="space-y-5">
            <!-- Description -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                📝 Mô tả chi phí *
              </label>
              <input 
                type="text" 
                id="expenseDescription" 
                class="input-field" 
                placeholder="Ví dụ: Ăn tối tại nhà hàng Sushi"
                autocomplete="off"
                required
              >
            </div>

            <!-- Amount -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                💵 Số tiền (VND) *
              </label>
              <input 
                type="number" 
                id="expenseAmount" 
                class="input-field" 
                placeholder="500000"
                min="1"
                step="1000"
                autocomplete="off"
                required
              >
            </div>

            <!-- Paid by -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                👤 Ai đã trả? *
              </label>
              ${this.currentUser ? `
                <div class="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border">
                  <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ${this.currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span class="font-medium text-blue-800">${this.currentUser.name} (Bạn)</span>
                  <input type="hidden" id="expensePaidBy" value="${this.currentUser.id}">
                </div>
              ` : `
                <select id="expensePaidBy" class="input-field" required>
                  ${this.users.map(user => `
                    <option value="${user.id}">${user.name}</option>
                  `).join('')}
                </select>
              `}
            </div>

            <!-- Split between -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">
                👥 Chia cho những ai? *
              </label>
              
              <!-- Split Type Selection -->
              <div class="mb-3">
                <label class="block text-sm font-medium text-gray-600 mb-2">
                  🧮 Cách chia tiền:
                </label>
                <div class="flex space-x-4">
                  <label class="flex items-center">
                    <input type="radio" name="splitType" value="equal" class="mr-2" checked>
                    <span class="text-sm">Chia đều</span>
                  </label>
                  <label class="flex items-center">
                    <input type="radio" name="splitType" value="custom" class="mr-2">
                    <span class="text-sm">Tùy chỉnh</span>
                  </label>
                </div>
              </div>

              <!-- Equal Split -->
              <div id="equalSplitContainer" class="space-y-2 max-h-32 overflow-y-auto border border-gray-200 rounded-lg p-3">
                ${this.users.map(user => `
                  <label class="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded cursor-pointer">
                    <input 
                      type="checkbox" 
                      value="${user.id}" 
                      class="splitBetween w-4 h-4 text-splitwise-green border-gray-300 rounded focus:ring-splitwise-green" 
                      checked
                    >
                    <span class="text-sm">${user.name}</span>
                  </label>
                `).join('')}
              </div>

              <!-- Custom Split -->
              <div id="customSplitContainer" class="hidden space-y-2 max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-3">
                ${this.users.map(user => `
                  <div class="flex items-center space-x-3 p-2 border-b border-gray-100 last:border-b-0">
                    <input 
                      type="checkbox" 
                      value="${user.id}" 
                      class="customSplitUser w-4 h-4 text-splitwise-green border-gray-300 rounded focus:ring-splitwise-green" 
                    >
                    <span class="text-sm w-20">${user.name}</span>
                    <input 
                      type="number" 
                      placeholder="0" 
                      class="customSplitAmount flex-1 input-field text-sm py-1 px-2" 
                      data-user-id="${user.id}"
                      min="0"
                      step="1000"
                      autocomplete="off"
                    >
                    <span class="text-xs text-gray-500">VND</span>
                  </div>
                `).join('')}
                <div id="customSplitTotal" class="text-sm text-gray-600 pt-2 border-t">
                  Tổng: 0 VND
                </div>
              </div>

              <p class="text-xs text-gray-500 mt-1">
                💡 Mặc định tất cả mọi người đều chia tiền. Bỏ tick để loại trừ.
              </p>
            </div>

            <!-- Category -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                🏷️ Danh mục *
              </label>
              <select id="expenseCategory" class="input-field" required>
                <option value="food">🍽️ Ăn uống</option>
                <option value="transportation">🚗 Di chuyển</option>
                <option value="accommodation">🏠 Lưu trú</option>
                <option value="entertainment">🎉 Giải trí</option>
                <option value="shopping">🛍️ Mua sắm</option>
                <option value="utilities">⚡ Tiện ích</option>
                <option value="other">📦 Khác</option>
              </select>
            </div>

            <!-- Split preview -->
            <div id="splitPreview" class="bg-gray-50 p-3 rounded-lg">
              <h4 class="text-sm font-medium text-gray-700 mb-2">🧮 Xem trước chia tiền:</h4>
              <div id="splitPreviewContent" class="text-sm text-gray-600">
                Nhập số tiền để xem chi tiết chia tiền
              </div>
            </div>

            <!-- Action buttons -->
            <div class="flex justify-end space-x-3 pt-4 border-t">
              <button type="button" id="cancelBtn" class="btn-secondary">
                ❌ Hủy
              </button>
              <button type="submit" class="btn-primary">
                ✅ Thêm chi phí
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    // Close modal
    document.getElementById('closeModal')?.addEventListener('click', () => this.hide());
    document.getElementById('cancelBtn')?.addEventListener('click', () => this.hide());

    // Form submission
    document.getElementById('addExpenseForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    // Split type change
    document.querySelectorAll('input[name="splitType"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const splitType = (e.target as HTMLInputElement).value;
        this.toggleSplitMode(splitType);
        this.updatePreview();
      });
    });

    // Split preview updates
    const amountInput = document.getElementById('expenseAmount') as HTMLInputElement;
    const splitCheckboxes = document.querySelectorAll('.splitBetween');
    const customSplitInputs = document.querySelectorAll('.customSplitAmount');
    const customSplitCheckboxes = document.querySelectorAll('.customSplitUser');
    
    const updatePreview = () => this.updatePreview();

    amountInput?.addEventListener('input', updatePreview);
    splitCheckboxes.forEach(cb => cb.addEventListener('change', updatePreview));
    customSplitInputs.forEach(input => input.addEventListener('input', updatePreview));
    customSplitCheckboxes.forEach(cb => cb.addEventListener('change', updatePreview));

    // ESC key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.hide();
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Select all/none buttons
    this.addSelectAllControls();
  }

  private toggleSplitMode(splitType: string) {
    const equalContainer = document.getElementById('equalSplitContainer');
    const customContainer = document.getElementById('customSplitContainer');

    if (splitType === 'equal') {
      equalContainer?.classList.remove('hidden');
      customContainer?.classList.add('hidden');
    } else {
      equalContainer?.classList.add('hidden');
      customContainer?.classList.remove('hidden');
    }
  }

  private addSelectAllControls() {
    const splitContainer = document.querySelector('.space-y-2.max-h-32');
    if (splitContainer) {
      const controls = document.createElement('div');
      controls.className = 'flex space-x-2 text-xs mb-2';
      controls.innerHTML = `
        <button type="button" id="selectAll" class="text-blue-600 hover:text-blue-800">Chọn tất cả</button>
        <span class="text-gray-400">•</span>
        <button type="button" id="selectNone" class="text-blue-600 hover:text-blue-800">Bỏ chọn tất cả</button>
      `;
      
      splitContainer.parentNode?.insertBefore(controls, splitContainer);

      document.getElementById('selectAll')?.addEventListener('click', () => {
        document.querySelectorAll('.splitBetween').forEach(cb => {
          (cb as HTMLInputElement).checked = true;
        });
        this.updatePreview();
      });

      document.getElementById('selectNone')?.addEventListener('click', () => {
        document.querySelectorAll('.splitBetween').forEach(cb => {
          (cb as HTMLInputElement).checked = false;
        });
        this.updatePreview();
      });
    }
  }

  private updatePreview() {
    const amountInput = document.getElementById('expenseAmount') as HTMLInputElement;
    const amount = parseFloat(amountInput?.value || '0');
    const splitType = (document.querySelector('input[name="splitType"]:checked') as HTMLInputElement)?.value;
    const previewContent = document.getElementById('splitPreviewContent');
    
    if (!previewContent) return;

    if (amount <= 0) {
      previewContent.innerHTML = 'Nhập số tiền để xem chi tiết chia tiền';
      return;
    }

    if (splitType === 'equal') {
      const checkedBoxes = document.querySelectorAll('.splitBetween:checked');
      
      if (checkedBoxes.length === 0) {
        previewContent.innerHTML = 'Chọn ít nhất một người để chia tiền';
        return;
      }

      const splitAmount = amount / checkedBoxes.length;
      let content = `<div class="space-y-1">`;
      content += `<div class="font-medium">Tổng: ${this.formatCurrency(amount)} ÷ ${checkedBoxes.length} người = ${this.formatCurrency(splitAmount)}/người</div>`;
      
      checkedBoxes.forEach(checkbox => {
        const userId = (checkbox as HTMLInputElement).value;
        const user = this.users.find(u => u.id === userId);
        content += `<div class="flex justify-between"><span>${user?.name}</span><span>${this.formatCurrency(splitAmount)}</span></div>`;
      });
      
      content += `</div>`;
      previewContent.innerHTML = content;
    } else {
      // Custom split preview
      const checkedBoxes = document.querySelectorAll('.customSplitUser:checked');
      
      if (checkedBoxes.length === 0) {
        previewContent.innerHTML = 'Chọn ít nhất một người để chia tiền';
        return;
      }

      let content = `<div class="space-y-1">`;
      let totalCustomAmount = 0;
      
      checkedBoxes.forEach(checkbox => {
        const userId = (checkbox as HTMLInputElement).value;
        const user = this.users.find(u => u.id === userId);
        const amountInput = document.querySelector(`input[data-user-id="${userId}"]`) as HTMLInputElement;
        const customAmount = parseFloat(amountInput?.value || '0');
        totalCustomAmount += customAmount;
        
        content += `<div class="flex justify-between"><span>${user?.name}</span><span>${this.formatCurrency(customAmount)}</span></div>`;
      });
      
      const remaining = amount - totalCustomAmount;
      content += `<div class="border-t pt-1 mt-1">`;
      content += `<div class="flex justify-between font-medium"><span>Tổng đã chia:</span><span>${this.formatCurrency(totalCustomAmount)}</span></div>`;
      content += `<div class="flex justify-between ${remaining === 0 ? 'text-green-600' : remaining > 0 ? 'text-orange-600' : 'text-red-600'}">`;
      content += `<span>Còn lại:</span><span>${this.formatCurrency(remaining)}</span></div>`;
      content += `</div></div>`;
      
      previewContent.innerHTML = content;

      // Update custom split total
      const customTotalElement = document.getElementById('customSplitTotal');
      if (customTotalElement) {
        customTotalElement.innerHTML = `Tổng: ${this.formatCurrency(totalCustomAmount)} (Còn lại: ${this.formatCurrency(remaining)})`;
        customTotalElement.className = `text-sm pt-2 border-t ${remaining === 0 ? 'text-green-600' : 'text-orange-600'}`;
      }
    }
  }

  private handleSubmit() {
    const description = (document.getElementById('expenseDescription') as HTMLInputElement).value;
    const amount = parseFloat((document.getElementById('expenseAmount') as HTMLInputElement).value);
    const paidBy = (document.getElementById('expensePaidBy') as HTMLSelectElement).value;
    const category = (document.getElementById('expenseCategory') as HTMLSelectElement).value as ExpenseCategory;
    const splitType = (document.querySelector('input[name="splitType"]:checked') as HTMLInputElement)?.value as 'equal' | 'custom';

    let splitBetween: ExpenseSplit[] = [];

    if (splitType === 'equal') {
      // Equal split
      const checkedBoxes = document.querySelectorAll('.splitBetween:checked');
      if (checkedBoxes.length === 0) {
        alert('Vui lòng chọn ít nhất một người để chia chi phí!');
        return;
      }
      
      const splitAmount = amount / checkedBoxes.length;
      checkedBoxes.forEach(checkbox => {
        splitBetween.push({
          userId: (checkbox as HTMLInputElement).value,
          amount: splitAmount,
          status: 'pending' // Default status is pending
        });
      });
    } else {
      // Custom split
      const customCheckboxes = document.querySelectorAll('.customSplitUser:checked') as NodeListOf<HTMLInputElement>;
      
      if (customCheckboxes.length === 0) {
        alert('Vui lòng chọn ít nhất một người để chia chi phí!');
        return;
      }

      let totalCustomAmount = 0;
      customCheckboxes.forEach(checkbox => {
        const userId = checkbox.value;
        const amountInput = document.querySelector(`input[data-user-id="${userId}"]`) as HTMLInputElement;
        const customAmount = parseFloat(amountInput?.value || '0');
        
        if (customAmount <= 0) {
          alert(`Vui lòng nhập số tiền cho ${this.users.find(u => u.id === userId)?.name}!`);
          return;
        }
        
        splitBetween.push({
          userId,
          amount: customAmount,
          status: 'pending' // Default status is pending
        });
        totalCustomAmount += customAmount;
      });

      // Check if total custom amounts match expense amount
      if (Math.abs(totalCustomAmount - amount) > 1) {
        alert(`Tổng số tiền chia (${this.formatCurrency(totalCustomAmount)}) phải bằng tổng chi phí (${this.formatCurrency(amount)})!`);
        return;
      }
    }

    const expenseData = {
      description: description.trim(),
      amount,
      paidBy,
      category,
      splitBetween,
      splitType
    };

    const errors = validateExpense(expenseData);
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    const newExpense: Expense = {
      id: generateId(),
      description: expenseData.description,
      amount: expenseData.amount,
      currency: 'VND',
      paidBy: expenseData.paidBy,
      splitBetween: expenseData.splitBetween,
      splitType: expenseData.splitType,
      category: expenseData.category,
      date: new Date()
    };

    console.log('🔥🔥🔥 AddExpenseModal: Calling onAddExpense with:', newExpense);
    this.onAddExpense(newExpense);
    this.hide();
  }

  private resetForm() {
    const form = document.getElementById('addExpenseForm') as HTMLFormElement;
    if (form) {
      form.reset();
      // Check all split checkboxes by default
      document.querySelectorAll('.splitBetween').forEach(cb => {
        (cb as HTMLInputElement).checked = true;
      });
    }
  }

  private formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
}