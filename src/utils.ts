import { User, Expense, Balance } from './types';

/**
 * Calculate balances for all users based on expenses
 */
export function calculateBalances(expenses: Expense[], users: User[]): Record<string, Balance> {
  const balances: Record<string, Balance> = {};

  // Initialize balances for all users
  users.forEach(user => {
    balances[user.id] = {
      userId: user.id,
      owes: {},
      owedBy: {},
      totalOwes: 0,
      totalOwed: 0
    };
  });

  // Calculate balances from expenses
  expenses.forEach(expense => {
    const payerId = expense.paidBy;
    
    expense.splitBetween.forEach(split => {
      const userId = split.userId;
      let splitAmount: number;
      
      if (expense.splitType === 'equal') {
        splitAmount = expense.amount / expense.splitBetween.length;
      } else {
        // Custom split - use the amount specified
        splitAmount = split.amount || 0;
      }

      if (userId !== payerId) {
        // This user owes the payer
        if (!balances[userId].owes[payerId]) {
          balances[userId].owes[payerId] = 0;
        }
        if (!balances[payerId].owedBy[userId]) {
          balances[payerId].owedBy[userId] = 0;
        }

        balances[userId].owes[payerId] += splitAmount;
        balances[payerId].owedBy[userId] += splitAmount;
      }
    });
  });

  // Calculate totals
  Object.values(balances).forEach(balance => {
    balance.totalOwes = Object.values(balance.owes).reduce((sum, amount) => sum + amount, 0);
    balance.totalOwed = Object.values(balance.owedBy).reduce((sum, amount) => sum + amount, 0);
  });

  // Simplify debts (net out mutual debts)
  users.forEach(user1 => {
    users.forEach(user2 => {
      if (user1.id !== user2.id) {
        const debt1to2 = balances[user1.id].owes[user2.id] || 0;
        const debt2to1 = balances[user2.id].owes[user1.id] || 0;

        if (debt1to2 > 0 && debt2to1 > 0) {
          const netDebt = debt1to2 - debt2to1;
          
          if (netDebt > 0) {
            // User1 owes User2 the net amount
            balances[user1.id].owes[user2.id] = netDebt;
            balances[user2.id].owedBy[user1.id] = netDebt;
            delete balances[user2.id].owes[user1.id];
            delete balances[user1.id].owedBy[user2.id];
          } else if (netDebt < 0) {
            // User2 owes User1 the net amount
            balances[user2.id].owes[user1.id] = Math.abs(netDebt);
            balances[user1.id].owedBy[user2.id] = Math.abs(netDebt);
            delete balances[user1.id].owes[user2.id];
            delete balances[user2.id].owedBy[user1.id];
          } else {
            // They're even
            delete balances[user1.id].owes[user2.id];
            delete balances[user2.id].owes[user1.id];
            delete balances[user1.id].owedBy[user2.id];
            delete balances[user2.id].owedBy[user1.id];
          }
        }
      }
    });
  });

  // Recalculate totals after simplification
  Object.values(balances).forEach(balance => {
    balance.totalOwes = Object.values(balance.owes).reduce((sum, amount) => sum + amount, 0);
    balance.totalOwed = Object.values(balance.owedBy).reduce((sum, amount) => sum + amount, 0);
  });

  return balances;
}

/**
 * Format currency amount to Vietnamese Dong
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Generate a simple random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Get the display name for an expense category
 */
export function getCategoryDisplayName(category: string): string {
  const categories: Record<string, string> = {
    food: 'Ăn uống',
    transportation: 'Di chuyển',
    accommodation: 'Lưu trú',
    entertainment: 'Giải trí',
    shopping: 'Mua sắm',
    utilities: 'Tiện ích',
    other: 'Khác'
  };
  return categories[category] || 'Khác';
}

/**
 * Validate expense data
 */
export function validateExpense(expense: Partial<Expense>): string[] {
  const errors: string[] = [];

  if (!expense.description || expense.description.trim().length === 0) {
    errors.push('Mô tả chi phí không được để trống');
  }

  if (!expense.amount || expense.amount <= 0) {
    errors.push('Số tiền phải lớn hơn 0');
  }

  if (!expense.paidBy) {
    errors.push('Vui lòng chọn người trả tiền');
  }

  if (!expense.splitBetween || expense.splitBetween.length === 0) {
    errors.push('Vui lòng chọn ít nhất một người để chia chi phí');
  }

  if (!expense.category) {
    errors.push('Vui lòng chọn danh mục chi phí');
  }

  // Validate custom split amounts
  if (expense.splitType === 'custom' && expense.splitBetween) {
    const totalCustomAmount = expense.splitBetween.reduce((sum, split) => sum + (split.amount || 0), 0);
    if (Math.abs(totalCustomAmount - (expense.amount || 0)) > 1) { // Allow 1 VND tolerance for rounding
      errors.push('Tổng số tiền chia phải bằng tổng chi phí');
    }
  }

  return errors;
}

/**
 * Calculate how much each person should pay/receive to settle all debts
 */
export function calculateSettlements(balances: Record<string, Balance>): Array<{from: string, to: string, amount: number}> {
  const settlements: Array<{from: string, to: string, amount: number}> = [];
  
  // Get net balances (positive = owed money, negative = owes money)
  const netBalances: Array<{userId: string, netAmount: number}> = Object.values(balances).map(balance => ({
    userId: balance.userId,
    netAmount: balance.totalOwed - balance.totalOwes
  }));

  // Separate creditors (positive) and debtors (negative)
  const creditors = netBalances.filter(b => b.netAmount > 0).sort((a, b) => b.netAmount - a.netAmount);
  const debtors = netBalances.filter(b => b.netAmount < 0).sort((a, b) => a.netAmount - b.netAmount);

  let i = 0, j = 0;
  
  while (i < creditors.length && j < debtors.length) {
    const creditor = creditors[i];
    const debtor = debtors[j];
    
    const settlementAmount = Math.min(creditor.netAmount, Math.abs(debtor.netAmount));
    
    if (settlementAmount > 0) {
      settlements.push({
        from: debtor.userId,
        to: creditor.userId,
        amount: settlementAmount
      });
    }
    
    creditor.netAmount -= settlementAmount;
    debtor.netAmount += settlementAmount;
    
    if (creditor.netAmount === 0) i++;
    if (debtor.netAmount === 0) j++;
  }

  return settlements;
}

/**
 * Convert old expense format to new format with ExpenseSplit
 */
export function convertLegacyExpense(expense: any): Expense {
  if (Array.isArray(expense.splitBetween) && typeof expense.splitBetween[0] === 'string') {
    // Convert old string array format to new ExpenseSplit format
    return {
      ...expense,
      splitType: 'equal' as const,
      splitBetween: expense.splitBetween.map((userId: string) => ({
        userId,
        amount: expense.amount / expense.splitBetween.length
      }))
    };
  }
  return expense;
}
