import { SignInButton, SignOutButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div> 
      <SignInButton />
      <SignOutButton />
    </div>
  );
}
