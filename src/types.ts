// Types for our Splitwise clone
export interface User {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt: Date;
  isActive: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
  token?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface CreateUserData {
  name: string;
  username: string;
  password: string;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  currency: string;
  paidBy: string; // User ID
  splitBetween: ExpenseSplit[];
  category: string;
  date: Date;
  splitType: 'equal' | 'custom'; // New field to track split type
}

export interface ExpenseSplit {
  userId: string;
  amount?: number; // Optional for custom splits
  percentage?: number; // Optional for percentage splits
}

export interface Group {
  id: string;
  name: string;
  description?: string;
  members: string[]; // Array of User IDs
  expenses: string[]; // Array of Expense IDs
  createdAt: Date;
}

export interface Balance {
  userId: string;
  owes: Record<string, number>; // userId -> amount
  owedBy: Record<string, number>; // userId -> amount
  totalOwes: number;
  totalOwed: number;
}

export interface Settlement {
  id: string; // Unique settlement ID
  from: string; // User ID - người chuyển tiền
  to: string; // User ID - người nhận tiền
  amount: number;
  description?: string;
  isSettled: boolean; // Đã thanh toán hay chưa
  settledAt?: Date; // Thời gian thanh toán (nếu đã thanh toán)
  settledBy?: string; // User ID của người xác nhận thanh toán
  createdAt: Date; // Thời gian tạo gợi ý
  relatedExpenses: string[]; // Array of expense IDs that contributed to this settlement
}

export type ExpenseCategory = 
  | 'food'
  | 'transportation'
  | 'accommodation'
  | 'entertainment'
  | 'shopping'
  | 'utilities'
  | 'other';
