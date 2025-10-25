import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  setDoc,
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { User, Expense, Settlement } from '../types';

export class FirebaseService {
  // Collections
  private usersCollection = collection(db, 'user'); // Match Firebase collection name
  private expensesCollection = collection(db, 'expenses');
  private settlementsCollection = collection(db, 'settlements');

  constructor() {
  }

  // Users
  async getUsers(): Promise<User[]> {
    try {
      const snapshot = await getDocs(this.usersCollection);
      return snapshot.docs.map(doc => {
        const userData = doc.data();
        return {
          id: doc.id,
          name: userData.name,
          username: userData.username,
          avatar: userData.avatar,
          role: userData.isAdmin === true ? 'admin' : (userData.role || 'user'),
          createdAt: userData.createdAt?.toDate() || new Date(),
          isActive: userData.isActive === true // STRICT: Only true is active
        } as User;
      });
    } catch (error) {
      throw error;
    }
  }

  async getUserByUsername(username: string): Promise<User | null> {
    try {
      
      const q = query(this.usersCollection, where('username', '==', username));
      const snapshot = await getDocs(q);
      
      
      // Debug: Show all documents AND the found ones

      
      if (snapshot.empty) {
        return null;
      }
      
      const userDoc = snapshot.docs[0];
      const userData = userDoc.data();
      
      
      // ALERT if Firebase has false
      if (userData.isActive === false) {
        alert('🔥 FIREBASE RAW DATA SHOWS isActive = FALSE for user: ' + userData.username);
      }
      
      const processedUser = {
        id: userDoc.id,
        name: userData.name,
        username: userData.username,
        avatar: userData.avatar,
        role: userData.isAdmin === true ? 'admin' : (userData.role || 'user'),
        createdAt: userData.createdAt?.toDate() || new Date(),
        isActive: userData.isActive === true, // STRICT: Only true is active
        password: userData.password  // Include password for authentication
      } as User & { password: string };
      
      return processedUser;
      
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    try {
      const docRef = await addDoc(this.usersCollection, {
        ...userData,
        createdAt: new Date(),
      });
      
      return {
        id: docRef.id,
        ...userData,
        createdAt: new Date(),
      };
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userId: string, updates: Partial<User>): Promise<User> {
    try {
      const userRef = doc(this.usersCollection, userId);
      await updateDoc(userRef, updates);
      
      const updatedDoc = await getDoc(userRef);
      return {
        id: updatedDoc.id,
        ...updatedDoc.data(),
        createdAt: updatedDoc.data()?.createdAt?.toDate() || new Date(),
      } as User;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      const userRef = doc(this.usersCollection, userId);
      await deleteDoc(userRef);
    } catch (error) {
      throw error;
    }
  }

  // Expenses
  async getExpenses(): Promise<Expense[]> {
    try {
      const q = query(this.expensesCollection, orderBy('date', 'desc'));
      const snapshot = await getDocs(q);
      
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date?.toDate() || new Date(),
      })) as Expense[];
    } catch (error) {
      throw error;
    }
  }

  async createExpense(expenseData: Omit<Expense, 'id'>): Promise<Expense> {
    try {
      
      // SAFE CLEAN: Handle all fields properly
      const cleanData: any = {
        description: expenseData.description || 'Expense',
        amount: expenseData.amount || 0,
        currency: expenseData.currency || 'VND',
        paidBy: expenseData.paidBy || '',
        splitBetween: Array.isArray(expenseData.splitBetween) ? expenseData.splitBetween : [],
        splitType: expenseData.splitType || 'equal',
        category: expenseData.category || 'other',
        date: new Date(expenseData.date),
      };

      
      // Remove ONLY undefined values (keep empty strings and arrays)
      Object.keys(cleanData).forEach(key => {
        if (cleanData[key] === undefined) {
          delete cleanData[key];
        }
      });
      
      
      const docRef = await addDoc(this.expensesCollection, cleanData);
      
      
      const result = {
        id: docRef.id,
        ...expenseData
      };
      
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteExpense(expenseId: string): Promise<void> {
    const maxRetries = 3;
    let lastError: any;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        
        const expenseRef = doc(this.expensesCollection, expenseId);
        
        // Kiểm tra document có tồn tại không trước khi xóa
        const docSnapshot = await getDoc(expenseRef);
        if (!docSnapshot.exists()) {
          return; // Coi như thành công
        }
        
        
        await deleteDoc(expenseRef);
        
        return; // Thành công, thoát khỏi loop
        
      } catch (error) {
        lastError = error;
        
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, attempt * 1000));
        }
      }
    }

    // Nếu tất cả attempts đều fail
    throw lastError;
  }

  async updateExpense(expenseId: string, expenseData: Expense): Promise<void> {
    try {
      
      const expenseRef = doc(this.expensesCollection, expenseId);
      
      // Convert expense data for Firebase
      const firebaseData = {
        description: expenseData.description,
        amount: expenseData.amount,
        currency: expenseData.currency,
        paidBy: expenseData.paidBy,
        splitBetween: expenseData.splitBetween,
        category: expenseData.category,
        date: expenseData.date,
        splitType: expenseData.splitType
      };
      
      
      await updateDoc(expenseRef, firebaseData);
    } catch (error) {
      throw error;
    }
  }

  // Auth helper
  async authenticateUser(username: string, password: string): Promise<User | null> {
    try {
      
      // BYPASS getUserByUsername - Check RAW Firebase data directly
      
      const q = query(this.usersCollection, where('username', '==', username));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        return null;
      }
      
      const userDoc = snapshot.docs[0];
      const rawUserData = userDoc.data();
      
      
      // Check password first
      if (rawUserData.password !== password) {
        return null;
      }
      
      
      // ABSOLUTE CHECK: Direct from Firebase
      if (rawUserData.isActive !== true) {
        alert('🚫 TÀI KHOẢN BỊ VÔ HIỆU HÓA - Firebase data: ' + rawUserData.isActive);
        throw new Error('Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.');
      }
      
      
      // SHOULD NEVER REACH HERE if isActive !== true (error thrown above)
      // But preserve original value just in case
      const userToReturn = {
        id: userDoc.id,
        name: rawUserData.name,
        username: rawUserData.username,
        avatar: rawUserData.avatar,
        role: rawUserData.isAdmin === true ? 'admin' : 'user',
        createdAt: rawUserData.createdAt?.toDate() || new Date(),
        isActive: rawUserData.isActive // PRESERVE ORIGINAL - NO FORCE
      } as User;
      
      // FINAL PARANOID CHECK BEFORE RETURN
      if (userToReturn.isActive !== true) {
        alert('🚨 PARANOID: Blocking return of inactive user: ' + userToReturn.isActive);
        throw new Error('PARANOID CHECK: Cannot return inactive user');
      }
      
      return userToReturn;
      
    } catch (error) {
      throw error;
    }
  }

  // Settlements will be handled by new methods below

  async saveSettlement(settlement: Settlement): Promise<void> {
    try {
      
      const settlementData = {
        from: settlement.from,
        to: settlement.to,
        amount: settlement.amount,
        description: settlement.description || '',
        isSettled: settlement.isSettled,
        settledAt: settlement.settledAt || null,
        settledBy: settlement.settledBy || null,
        createdAt: settlement.createdAt,
        relatedExpenses: settlement.relatedExpenses || []
      };
      
      
      // Use setDoc to update existing document instead of creating new one
      const docRef = doc(this.settlementsCollection, settlement.id);
      await setDoc(docRef, settlementData, { merge: true });
      
      
      // Verify by reading back
      const savedDoc = await getDoc(docRef);
      if (savedDoc.exists()) {
      } else {
      }
      
    } catch (error) {
      throw error;
    }
  }

  // Get all settlements
  async getSettlements(): Promise<Settlement[]> {
    try {
      const snapshot = await getDocs(this.settlementsCollection);
      return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          from: data.from,
          to: data.to,
          amount: data.amount,
          description: data.description || '',
          isSettled: data.isSettled || false,
          settledAt: data.settledAt?.toDate() || null,
          settledBy: data.settledBy || null,
          createdAt: data.createdAt?.toDate() || new Date(),
          relatedExpenses: data.relatedExpenses || []
        } as Settlement;
      });
    } catch (error) {
      throw error;
    }
  }

  // Update settlement status
  async updateSettlementStatus(settlementId: string, isSettled: boolean): Promise<void> {
    try {
      const settlementRef = doc(this.settlementsCollection, settlementId);
      const updateData: any = {
        isSettled: isSettled
      };
      
      if (isSettled) {
        updateData.settledAt = new Date();
      } else {
        updateData.settledAt = null;
      }
      
      await updateDoc(settlementRef, updateData);
    } catch (error) {
      throw error;
    }
  }

  // Delete settlement
  async deleteSettlement(settlementId: string): Promise<void> {
    try {
      const settlementRef = doc(this.settlementsCollection, settlementId);
      await deleteDoc(settlementRef);
    } catch (error) {
      throw error;
    }
  }
}

export const firebaseService = new FirebaseService();
