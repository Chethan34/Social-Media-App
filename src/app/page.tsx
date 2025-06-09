import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
      <div className="m-4">
        <SignedOut>
          <SignInButton mode="modal">
            <Button>
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <Button variant={"secondary"}>Click me</Button>
      </div>
    </ClerkProvider>
  );
}
