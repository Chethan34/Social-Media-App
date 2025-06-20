## How to Reproduce

### Prerequisites

* Node.js **v18+**
* PostgreSQL database (local or hosted)
* Clerk account credentials

---

###  1. Install Dependencies

```bash
npm install
```

---

### 2. Configure Environment

Create a `.env.local` file in the project root with the following variables:

```env
# Clerk credentials
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# PostgreSQL (required)
DATABASE_URL=""
```

---

### 3. Setup Database

```bash
npx prisma generate
npx prisma db push
```

---

### 🚀 4. Run the App

```bash
npm run dev
```

---

### Reproduce the Bug

1. Complete all setup steps above
2. Run the dev server
3. Visit `http://localhost:3000`
4. Open browser console and/or check the terminal
5. You'll see this error:

```
Clerk: auth() was called but Clerk can't detect usage of clerkMiddleware()
```

---

### Review

* `src/middleware.ts` – Clerk middleware configuration
* `src/components/Sidebar.tsx` – Calls `auth()` and triggers the error , try to SignIn or SignOut if error doesn't persists on terminal 

---

### Technical Details

| Item          | Version  |
| ------------- | -------- |
| Node.js       | v20.11.0 |
| npm           | 10.8.1   |
| Next.js       | v14.2.25 |
| @clerk/nextjs | v6.22.0  |
