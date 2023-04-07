// Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header: React.FC = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  const chooseButton = () => {
    if (!session) {
      <button onClick={() => signIn()}>sign in</button>;
    } else {
      <button onClick={() => signOut()}>sign out</button>;
    }
  };
  console.log("sesh", signIn, status);
  return (
    <button onClick={() => (session ? signOut() : signIn())}>
      {session ? "sign out" : "sign in"}
    </button>
  );
};
