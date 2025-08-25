"use client";

import { SignUp } from "@stackframe/stack";
export default function Login() {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
      {/* Centered Sign In */}
      <div className="w-full max-w-md px-4 sm:px-6 lg:px-8">
        <SignUp />
      </div>
    </div>
  );
}
