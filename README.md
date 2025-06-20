## How to Reproduce

1. Run `npm install`
2. Run `npm run dev`
3. Visit `http://localhost:3000`
4. See the Clerk middleware error in the console (auth() called but middleware not detected)

## Files to Look At
- `src/middleware.ts`
- `components/Sidebar.tsx`