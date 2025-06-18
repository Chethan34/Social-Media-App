import Image from "next/image";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import ModeToggle from "@/components/ModeToggle";

export default async function Home() {
  return (
    // <ClerkProvider>
    //   <div className="m-4">
    //     {/* <SignedOut>
    //       <SignInButton mode="modal">
    //         <Button>
    //           Sign In
    //         </Button>
    //       </SignInButton>
    //     </SignedOut>

    //     <SignedIn>
    //       <UserButton />
    //     </SignedIn>
    //     <ModeToggle/>
    //     <Button variant={"secondary"}>Click me</Button> */}
    //   </div>
    // </ClerkProvider>

    <div className="m-4">
      home page
    </div>
  );
}
