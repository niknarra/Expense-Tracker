import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

function Auth() {
  return (
    <div className="sign-in-container">
      <SignedOut>
        <SignUpButton mode="modal"></SignUpButton>
        <SignInButton mode="modal"></SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  );
}

export default Auth;
