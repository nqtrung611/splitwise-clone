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
          isActive: userData.isActive !== false,
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
      
      // Debug: Show all documents if no match
      if (snapshot.empty) {
        console.log('🔥 FirebaseService: No documents found. Fetching all documents for debug...');
        const allDocs = await getDocs(this.usersCollection);
        console.log('🔥 FirebaseService: All documents in collection:', allDocs.size);
        allDocs.forEach(doc => {
          console.log('🔥 FirebaseService: Document:', doc.id, doc.data());
        });
      }
      
      if (snapshot.empty) {
        console.log('🔥 FirebaseService: No user found with username:', username);
        return null;
      }
      
      const userDoc = snapshot.docs[0];
      const userData = userDoc.data();
      
      console.log('🔥 FirebaseService: Raw user data from Firestore:', userData);
      
      const processedUser = {
        id: userDoc.id,
        name: userData.name,
        username: userData.username,
        avatar: userData.avatar,
        role: userData.isAdmin === true ? 'admin' : (userData.role || 'user'),
        createdAt: userData.createdAt?.toDate() || new Date(),
        isActive: userData.isActive !== false,
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
      console.log('🔥 FirebaseService: authenticateUser called with:', { username, password });
      
      const user = await this.getUserByUsername(username);
      console.log('🔥 FirebaseService: getUserByUsername returned:', user);
      
      if (user) {
        console.log('🔥 FirebaseService: Found user, comparing passwords...');
        console.log('🔥 FirebaseService: Input password:', password);
        console.log('🔥 FirebaseService: Stored password:', (user as any).password);
        console.log('🔥 FirebaseService: Password match:', (user as any).password === password);
        
        if ((user as any).password === password) {
          console.log('🔥 FirebaseService: Password match SUCCESS');
          
          // Check if user is active
          if ((user as any).isActive === false) {
            console.log('🔥 FirebaseService: User is INACTIVE, login blocked');
            throw new Error('Tài khoản đã bị vô hiệu hóa. Vui lòng liên hệ quản trị viên.');
          }
          
          console.log('🔥 FirebaseService: User is active, returning user');
          const { password: _, ...userWithoutPassword } = user as any;
          return userWithoutPassword as User;
        } else {
          console.log('🔥 FirebaseService: Password MISMATCH');
          return null;
        }
      } else {
        console.log('🔥 FirebaseService: No user found with username:', username);
        return null;
      }
    } catch (error) {
      console.error('🔥 FirebaseService: Error authenticating user:', error);
      throw error;
    }
  }
}

export const firebaseService = new FirebaseService();