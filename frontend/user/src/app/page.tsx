
"use client";

import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Dormamu from "@/components/dormamu";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !loading && !user) {
      router.push("/login");
    }
  }, [isMounted, user, loading, router]);

  if (!isMounted || loading || !user) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-background">
      <div className="w-full max-w-6xl space-y-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome, {user.displayName || "User"}!
        </h1>
        <Dormamu />
      </div>
    </div>
  );
}
