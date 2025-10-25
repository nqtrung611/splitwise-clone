// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "demo-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

console.log('🔥🔥🔥 FIREBASE CONFIG COMPREHENSIVE DEBUG 🔥🔥🔥');
console.log('🔥 Raw firebaseConfig object:', firebaseConfig);
console.log('🔥 Project ID:', firebaseConfig.projectId);
console.log('🔥 Auth Domain:', firebaseConfig.authDomain);
console.log('🔥 API Key (masked):', firebaseConfig.apiKey?.substring(0, 10) + '...');
console.log('🔥 Environment variables check:');
console.log('🔥 - VITE_FIREBASE_PROJECT_ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID);
console.log('🔥 - VITE_FIREBASE_API_KEY exists:', !!import.meta.env.VITE_FIREBASE_API_KEY);
console.log('🔥 - VITE_FIREBASE_AUTH_DOMAIN:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);

// Check if using demo values
if (firebaseConfig.projectId === "demo-project") {
  console.log('⚠️⚠️⚠️ WARNING: Using demo Firebase config! This will NOT work with real data.');
  console.log('⚠️ All Firebase calls will fail. Set environment variables!');
} else {
  console.log('✅ Using real Firebase config for project:', firebaseConfig.projectId);
}

// FIREBASE ONLY MODE - NO ENVIRONMENT VARIABLES
export const useFirebase = true;

console.log('✅ FIREBASE-ONLY MODE ACTIVATED ✅');
console.log('🔥 Firebase app object:', app);
console.log('🔥 Firestore db object:', db);

// Test Firebase connection immediately
import('../services/FirebaseService').then(module => {
  console.log('🔥 Testing Firebase connection...');
  module.firebaseService.getUsers()
    .then((users: any) => console.log('🔥 Firebase works! Users found:', users.length))
    .catch((err: any) => console.error('🔥 Firebase connection failed:', err));
}).catch((err: any) => console.error('🔥 Failed to load FirebaseService:', err));

export default app;