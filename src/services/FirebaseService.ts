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
          isActive: userData.isActive === true, // STRICT: Only true is active
          qrCode: userData.qrCode
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
        qrCode: userData.qrCode,
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
      
      // Clean data - remove undefined values
      const cleanData = {
        description: expenseData.description || '',
        amount: expenseData.amount || 0,
        currency: expenseData.currency || 'VND',
        paidBy: expenseData.paidBy || '',
        splitBetween: expenseData.splitBetween || [],
        splitType: expenseData.splitType || 'equal',
        category: expenseData.category || 'other',
        date: new Date(expenseData.date),
        notes: expenseData.notes || null, // Use null instead of undefined
      };
      
      console.log('🔥 FirebaseService: Clean data:', cleanData);
      
      const docRef = await addDoc(this.expensesCollection, cleanData);
      
      console.log('🔥 FirebaseService: addDoc successful, docRef.id:', docRef.id);
      
      const result = {
        id: docRef.id,
        ...expenseData,
        notes: expenseData.notes || undefined, // Restore original for return
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
        isActive: rawUserData.isActive, // PRESERVE ORIGINAL - NO FORCE
        qrCode: rawUserData.qrCode
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
}

export const firebaseService = new FirebaseService();