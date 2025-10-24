// Script để update admin document với password field
// Chạy trong Developer Console

console.log('🔥 Updating admin user with password field...');

async function updateAdminPassword() {
  try {
    // Import Firebase functions
    const { doc, updateDoc } = await import('firebase/firestore');
    const { db } = await import('./src/config/firebase.js');
    
    // Reference to admin document
    const adminDocRef = doc(db, 'user', 'admin-001'); // Thay 'admin-001' bằng document ID thực tế
    
    // Update document với password field
    await updateDoc(adminDocRef, {
      password: 'admin123'
    });
    
    console.log('✅ Admin password updated successfully!');
    console.log('✅ Now try login with admin/admin123');
    
  } catch (error) {
    console.error('❌ Failed to update admin password:', error);
    console.log('💡 Try adding password field manually in Firebase Console');
  }
}

updateAdminPassword();