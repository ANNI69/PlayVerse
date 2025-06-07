import Profile from "@/pages/ChooseProfile";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedIn>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <Profile />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-lg text-center">You must be signed in to view this page.</p>
          <SignInButton />
        </div>
      </SignedOut>
    </>
  );
}
