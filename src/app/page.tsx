import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
export default function Home() {
  return (
    <div> 
      <ClerkProvider>
        <SignedOut>
           <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
          </SignedIn>
        </ClerkProvider>
    </div>
  );
}
