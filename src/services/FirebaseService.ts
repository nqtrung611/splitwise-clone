import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { User, Expense } from '../types';

export class FirebaseService {
  // Collections
  private usersCollection = collection(db, 'user'); // Match Firebase collection name
  private expensesCollection = collection(db, 'expenses');
  private settlementsCollection = collection(db, 'settlements');

  constructor() {
    console.log('🔥🔥🔥 FirebaseService constructor called');
    console.log('🔥 Database object:', db);
    console.log('🔥 Users collection:', this.usersCollection);
    console.log('🔥 Expenses collection:', this.expensesCollection);
    console.log('🔥 Settlements collection:', this.settlementsCollection);
    console.log('🔥 FirebaseService initialized successfully');
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
      console.error('Error getting users:', error);
      throw error;
    }
  }

  async getUserByUsername(username: string): Promise<User | null> {
    try {
      console.log('🔥 FirebaseService: Querying Firestore for username:', username);
      console.log('🔥 FirebaseService: Collection name:', 'user');
      console.log('🔥 FirebaseService: Query field:', 'username');
      
      const q = query(this.usersCollection, where('username', '==', username));
      const snapshot = await getDocs(q);
      
      console.log('🔥 FirebaseService: Query result - empty:', snapshot.empty, 'size:', snapshot.size);
      
      // Debug: Show all documents AND the found ones
      console.log('🔥 FirebaseService: Query result - empty:', snapshot.empty, 'size:', snapshot.size);
      const allDocs = await getDocs(this.usersCollection);
      console.log('🔥 FirebaseService: ALL DOCUMENTS in collection:', allDocs.size);
      allDocs.forEach(doc => {
        const docData = doc.data();
        console.log('🔥 FirebaseService: Document:', doc.id, 'username:', docData.username, 'isActive:', docData.isActive);
      });
      
      if (snapshot.empty) {
        console.log('🔥 FirebaseService: No documents found with query');
      } else {
        console.log('🔥 FirebaseService: Found documents with query:');
        snapshot.forEach(doc => {
          console.log('🔥 FirebaseService: Query result doc:', doc.id, doc.data());
        });
      }
      
      if (snapshot.empty) {
        console.log('🔥 FirebaseService: No user found with username:', username);
        return null;
      }
      
      const userDoc = snapshot.docs[0];
      const userData = userDoc.data();
      
      console.log('🔥 FirebaseService: Raw user data from Firestore:', userData);
      console.log('🔥🔥🔥 CRITICAL DEBUG 🔥🔥🔥');
      console.log('🔥 RAW userData.isActive:', userData.isActive);
      console.log('🔥 RAW userData.isActive TYPE:', typeof userData.isActive);
      console.log('🔥 RAW userData.isActive === true:', userData.isActive === true);
      console.log('🔥 RAW userData.isActive === false:', userData.isActive === false);
      
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
      
      console.log('🔥 FirebaseService: Processed user:', processedUser);
      console.log('🔥 FirebaseService: Password field exists:', !!processedUser.password);
      return processedUser;
      
    } catch (error) {
      console.error('🔥 FirebaseService: Error getting user by username:', error);
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
      console.error('Error creating user:', error);
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
      console.error('Error updating user:', error);
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      const userRef = doc(this.usersCollection, userId);
      await deleteDoc(userRef);
    } catch (error) {
      console.error('Error deleting user:', error);
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
      console.error('Error getting expenses:', error);
      throw error;
    }
  }

  async createExpense(expenseData: Omit<Expense, 'id'>): Promise<Expense> {
    try {
      console.log('🔥🔥🔥 FirebaseService: createExpense called with:', expenseData);
      console.log('🔥 FirebaseService: Collection name:', 'expenses');
      console.log('🔥 FirebaseService: About to call addDoc...');
      
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
      
      console.log('🔥 FirebaseService: Original data:', expenseData);
      console.log('🔥 FirebaseService: Clean data:', cleanData);
      console.log('🔥 FirebaseService: Clean data keys:', Object.keys(cleanData));
      
      const docRef = await addDoc(this.expensesCollection, cleanData);
      
      console.log('🔥 FirebaseService: addDoc successful, docRef.id:', docRef.id);
      
      const result = {
        id: docRef.id,
        ...expenseData
      };
      
      console.log('🔥 FirebaseService: Returning expense:', result);
      return result;
    } catch (error) {
      console.error('❌ FirebaseService: Error creating expense:', error);
      throw error;
    }
  }

  async deleteExpense(expenseId: string): Promise<void> {
    try {
      const expenseRef = doc(this.expensesCollection, expenseId);
      await deleteDoc(expenseRef);
    } catch (error) {
      console.error('Error deleting expense:', error);
      throw error;
    }
  }

  async updateExpense(expenseId: string, expenseData: Expense): Promise<void> {
    try {
      console.log('🔥🔥🔥 FirebaseService: updateExpense called');
      console.log('🔥 Expense ID:', expenseId);
      console.log('🔥 Full expenseData:', expenseData);
      console.log('🔥 splitBetween array:', expenseData.splitBetween);
      
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
      
      console.log('🔥 Data to send to Firebase:', firebaseData);
      console.log('🔥 splitBetween with status:', firebaseData.splitBetween);
      
      await updateDoc(expenseRef, firebaseData);
      console.log('✅✅✅ FirebaseService: Expense updated successfully with status fields!');
    } catch (error) {
      console.error('❌ FirebaseService: Error updating expense:', error);
      throw error;
    }
  }

  // Auth helper
  async authenticateUser(username: string, password: string): Promise<User | null> {
    try {
      console.log('🔥🔥🔥 AUTHENTICATION ATTEMPT 🔥🔥🔥');
      console.log('🔥 FirebaseService: authenticateUser called with:', { username, password });
      
      // BYPASS getUserByUsername - Check RAW Firebase data directly
      console.log('🔥 FirebaseService: Checking RAW Firebase data directly...');
      
      const q = query(this.usersCollection, where('username', '==', username));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        console.log('🔥 FirebaseService: No user found with username:', username);
        return null;
      }
      
      const userDoc = snapshot.docs[0];
      const rawUserData = userDoc.data();
      
      console.log('🔥🔥🔥 RAW FIREBASE DATA 🔥🔥🔥');
      console.log('🔥 RAW rawUserData:', rawUserData);
      console.log('🔥 RAW rawUserData.isActive:', rawUserData.isActive);
      console.log('🔥 RAW rawUserData.isActive TYPE:', typeof rawUserData.isActive);
      console.log('🔥 RAW rawUserData.password:', rawUserData.password);
      
      // Check password first
      if (rawUserData.password !== password) {
        console.log('🔥 FirebaseService: Password MISMATCH');
        return null;
      }
      
      console.log('🔥 FirebaseService: Password match SUCCESS');
      
      // ABSOLUTE CHECK: Direct from Firebase
      if (rawUserData.isActive !== true) {
        console.error('🚫🚫🚫 FIREBASE RAW DATA SHOWS USER INACTIVE 🚫🚫🚫');
        console.error('� RAW isActive value:', rawUserData.isActive);
        console.error('🚫 RAW isActive === true:', rawUserData.isActive === true);
        alert('🚫 TÀI KHOẢN BỊ VÔ HIỆU HÓA - Firebase data: ' + rawUserData.isActive);
        throw new Error('Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.');
      }
      
      console.log('🔥 FirebaseService: RAW Firebase confirms user is active, proceeding...');
      
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
        console.error('🚨🚨🚨 PARANOID CHECK: About to return user with isActive !== true 🚨🚨🚨');
        alert('🚨 PARANOID: Blocking return of inactive user: ' + userToReturn.isActive);
        throw new Error('PARANOID CHECK: Cannot return inactive user');
      }
      
      return userToReturn;
      
    } catch (error) {
      console.error('🔥 FirebaseService: Error authenticating user:', error);
      throw error;
    }
  }

  // Settlements
  async getSettlements(): Promise<any[]> {
    try {
      console.log('🔥🔥🔥 FirebaseService: Getting settlements from Firestore...');
      const q = query(this.settlementsCollection, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      
      const settlements = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        settledAt: doc.data().settledAt?.toDate() || new Date(),
      }));
      
      console.log('🔥 FirebaseService: Retrieved settlements:', settlements.length);
      return settlements;
    } catch (error) {
      console.error('❌ FirebaseService: Error getting settlements:', error);
      throw error;
    }
  }

  async saveSettlement(settlement: any): Promise<void> {
    try {
      console.log('🔥🔥🔥 FirebaseService: Saving settlement to Firestore...');
      console.log('🔥 Original settlement object:', settlement);
      console.log('🔥 Firebase db object:', db);
      console.log('🔥 Settlements collection:', this.settlementsCollection);
      
      const settlementData = {
        from: settlement.from,
        to: settlement.to,
        amount: settlement.amount,
        isSettled: settlement.isSettled || true,
        createdAt: new Date(settlement.createdAt),
        settledAt: new Date(settlement.settledAt || new Date())
      };
      
      console.log('🔥 Clean settlement data:', settlementData);
      console.log('🔥 About to call addDoc...');
      
      const docRef = await addDoc(this.settlementsCollection, settlementData);
      
      console.log('🔥 ✅ SUCCESS! Settlement saved with ID:', docRef.id);
      console.log('🔥 Document reference:', docRef);
      
      // Verify by reading back
      console.log('🔥 Attempting to verify document was saved...');
      const savedDoc = await getDoc(docRef);
      if (savedDoc.exists()) {
        console.log('🔥 ✅ VERIFIED! Document exists:', savedDoc.data());
      } else {
        console.log('🔥 ❌ WARNING: Document not found after save!');
      }
      
    } catch (error) {
      console.error('❌❌❌ FirebaseService: CRITICAL ERROR saving settlement:');
      console.error('❌ Error type:', typeof error);
      console.error('❌ Error message:', error instanceof Error ? error.message : error);
      console.error('❌ Full error object:', error);
      console.error('❌ Stack trace:', error instanceof Error ? error.stack : 'No stack');
      throw error;
    }
  }
}

export const firebaseService = new FirebaseService();