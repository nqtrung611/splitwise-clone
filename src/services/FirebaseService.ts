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
  private usersCollection = collection(db, 'users');
  private expensesCollection = collection(db, 'expenses');

  // Users
  async getUsers(): Promise<User[]> {
    try {
      const snapshot = await getDocs(this.usersCollection);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
      })) as User[];
    } catch (error) {
      console.error('Error getting users:', error);
      throw error;
    }
  }

  async getUserByUsername(username: string): Promise<User | null> {
    try {
      const q = query(this.usersCollection, where('username', '==', username));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        return null;
      }
      
      const userDoc = snapshot.docs[0];
      return {
        id: userDoc.id,
        ...userDoc.data(),
        createdAt: userDoc.data().createdAt?.toDate() || new Date(),
      } as User;
    } catch (error) {
      console.error('Error getting user by username:', error);
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
      const docRef = await addDoc(this.expensesCollection, {
        ...expenseData,
        date: new Date(expenseData.date),
      });
      
      return {
        id: docRef.id,
        ...expenseData,
      };
    } catch (error) {
      console.error('Error creating expense:', error);
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
      const user = await this.getUserByUsername(username);
      
      if (user && (user as any).password === password) {
        // Don't return password in the user object
        const { password: _, ...userWithoutPassword } = user as any;
        return userWithoutPassword as User;
      }
      
      return null;
    } catch (error) {
      console.error('Error authenticating user:', error);
      throw error;
    }
  }
}

export const firebaseService = new FirebaseService();