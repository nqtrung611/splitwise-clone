// Script để test Firestore rules
// Nếu vẫn lỗi permissions, chạy script này trong Console

console.log('🔥 Testing Firestore permissions...');

// Import Firebase functions
import { db } from './src/config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

async function testFirestoreAccess() {
  try {
    console.log('🔥 Attempting to read user collection...');
    
    const userCollection = collection(db, 'user');
    const snapshot = await getDocs(userCollection);
    
    console.log('✅ Firestore access successful!');
    console.log('✅ Documents found:', snapshot.size);
    
    snapshot.forEach(doc => {
      console.log('📄 Document:', doc.id, doc.data());
    });
    
  } catch (error) {
    console.error('❌ Firestore access failed:', error);
    console.error('❌ Error code:', error.code);
    console.error('❌ Error message:', error.message);
    
    if (error.code === 'permission-denied') {
      console.log('💡 Solution: Update Firestore Security Rules in Firebase Console');
      console.log('💡 Go to: https://console.firebase.google.com/project/splitwiseclone-d9135/firestore/rules');
    }
  }
}

testFirestoreAccess();