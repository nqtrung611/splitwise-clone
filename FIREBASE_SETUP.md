# 🔥 Firebase Setup Guide

## Bước 1: Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** hoặc **"Create a project"**
3. Đặt tên project: `splitwise-clone` (hoặc tên bạn thích)
4. **Disable Google Analytics** (không cần thiết cho project này)
5. Click **"Create project"**

## Bước 2: Setup Web App

1. Trong Firebase Console, click **⚙️ Settings** → **Project settings**
2. Scroll xuống phần **"Your apps"**
3. Click **</> Web** icon
4. Đặt App nickname: `splitwise-web`
5. **Không** check **"Also set up Firebase Hosting"** (làm sau)
6. Click **"Register app"**

## Bước 3: Copy Firebase Config

Sau khi register app, bạn sẽ thấy code như này:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

## Bước 4: Setup Environment Variables

1. Copy file `.env.example` thành `.env`:
```bash
copy .env.example .env
```

2. Mở file `.env` và thay thế các giá trị:

```env
VITE_FIREBASE_API_KEY=AIzaSyC...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123def456

VITE_USE_FIREBASE=true
```

## Bước 5: Setup Firestore Database

1. Trong Firebase Console, click **"Firestore Database"**
2. Click **"Create database"**
3. Chọn **"Start in test mode"** (cho development)
4. Chọn location gần nhất (ví dụ: `asia-southeast1`)
5. Click **"Done"**

## Bước 6: Setup Firebase Hosting (Optional)

1. Cài Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize Firebase Hosting:
```bash
cd d:\work\test-money
firebase init hosting
```

Chọn:
- **Use an existing project** → chọn project vừa tạo
- **Public directory**: `dist`
- **Single-page app**: `Yes`
- **Set up automatic builds**: `No`

## Bước 7: Test & Deploy

1. **Build project**:
```bash
npm run build
```

2. **Test locally**:
```bash
npm run dev
```

3. **Deploy to Firebase Hosting**:
```bash
firebase deploy
```

## 🔧 Database Rules (Production)

Khi ready cho production, cập nhật Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Expenses collection  
    match /expenses/{expenseId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 🎯 Lợi ích Firebase

- ✅ **Real-time sync**: Dữ liệu đồng bộ ngay lập tức
- ✅ **Free tier**: 1GB storage, 20K reads/day
- ✅ **Global CDN**: Tốc độ cao trên toàn thế giới
- ✅ **Automatic scaling**: Tự động scale theo traffic
- ✅ **Security**: Built-in security rules
- ✅ **Offline support**: App hoạt động offline
- ✅ **Easy hosting**: Firebase Hosting miễn phí

Với Firebase, bạn không cần maintain server nào cả! 🚀