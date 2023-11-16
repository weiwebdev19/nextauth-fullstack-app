## Next.js 13 全棧身份認證實作 Full Stack Authentication With Next.js 13
使用 Next.js 13、NextAuth、MongoDB 和 TypeScript 實現全棧認證
A demo project using Next-Auth for authentication. It connects to MongoDB via Mongoose and supports Google OAuth and email/password logins.

## 功能特點 Features
- OAuth: 可透過 Google 帳號進行登錄。
- OAuth: Log in with Google.

- 註冊功能: 可以用名稱、電子郵件、密碼註冊帳戶。
- SignUp: Register with name, email, password.

- 憑證登入: 使用電子郵件和密碼進行登入。
- Credential Login: Use email and password.

- 個人資料編輯: 變更用戶資料。
- Profile Edit: Change user details.

- 修改密碼: 安全地更新密碼。
- Password Change: Safely update passwords.

- 安全路由: 僅供已登入的用戶或管理員存取。
- Secure Routes: Access only for logged-in users / admins.

## 設定環境變數 Setting Up Environment Variables
在根目錄下建立.env檔案並加入以下變數：
Create a .env file in the root directory and add the following variables:

```env
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"

GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"

MONGODB_URI="YOUR_MONGODB_URI"
```

## 運行專案 Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```