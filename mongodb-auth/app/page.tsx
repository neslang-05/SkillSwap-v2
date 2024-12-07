"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const handleSignOut = () => {
    signOut({ redirect: false }).then(() => {
      router.push("/");
    });
  };

  const renderAuthButton = () => {
    switch (status) {
      case "authenticated":
        return (
          <button
            className="border border-solid border-black rounded px-4 py-2 hover:bg-black hover:text-white transition duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        );
      case "loading":
        return (
          <span className="text-[#888] text-sm mt-7">Loading...</span>
        );
      default:
        return (
          <Link
            href="/login"
            className="border border-solid border-black rounded px-4 py-2 hover:bg-black hover:text-white transition duration-300"
          >
            Sign In
          </Link>
        );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Home</h1>
      {renderAuthButton()}
    </main>
  );
}