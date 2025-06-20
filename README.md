## How to Reproduce

1. Run `npm install`
2. Run `npm run dev`
3. Visit `http://localhost:3000`
4. See the Clerk middleware error in the console (auth() called but middleware not detected)

## Files to Look At
- `src/middleware.ts`
- `components/Sidebar.tsx`

## note - .env file has ur clerk credentials 
1. NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xyz
2. CLERK_SECRET_KEY=xyz
