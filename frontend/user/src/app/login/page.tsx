
"use client";

import { auth, database } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, signOut } from "firebase/auth";
import { ref, set, get } from "firebase/database";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/auth-context";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { user, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Redirect a logged-in and verified user to the dashboard.
    if (isMounted && !loading && user && user.emailVerified) {
      router.push("/");
    }
  }, [user, loading, router, isMounted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        if (userCredential.user.emailVerified) {
          const loggedInUser = userCredential.user;
          // Check if user exists in RTDB, if not, create them.
          const userRef = ref(database, 'device-users/' + loggedInUser.uid);
          const snapshot = await get(userRef);
          if (!snapshot.exists()) {
            await set(userRef, {
              name: loggedInUser.displayName,
              email: loggedInUser.email
            });
          }
          toast({
            title: "Login Successful",
            description: "You have successfully logged in.",
          });
          router.push("/");
        } else {
          await signOut(auth); // Sign out the user
          toast({
            variant: "destructive",
            title: "Email Not Verified",
            description: "Please check your inbox and verify your email address to log in.",
          });
        }
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
        if (newUser) {
          await sendEmailVerification(newUser);
          // Update the user's profile
          await updateProfile(newUser, {
            displayName: fullName,
          });
        }
        toast({
          title: "Registration Successful",
          description: "A verification email has been sent. Please check your inbox.",
        });
        setFullName("");
        setEmail("");
        setPassword("");
        setIsLogin(true); // Switch to login view after registration
      }
    } catch (error: any) {
      if (isLogin && (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential')) {
        toast({
          variant: "destructive",
          title: "User Not Found",
          description: "This email is not registered. Please sign up.",
        });
        setIsLogin(false); // Switch to signup form
        setPassword(""); // Clear password field
      } else {
         console.error(`${isLogin ? 'Login' : 'Registration'} error:`, error);
        toast({
          variant: "destructive",
          title: `${isLogin ? 'Login' : 'Registration'} Failed`,
          description: error.message || "An unexpected error occurred.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted || loading || (user && user.emailVerified)) {
    // Show a loading spinner while we check auth status or if we are about to redirect.
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{isLogin ? "Welcome Back" : "Create an Account"}</CardTitle>
          <CardDescription>{isLogin ? "Sign in to access the dashboard." : "Enter your details to register."}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Cruz"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (isLogin ? 'Logging in...' : 'Creating account...') : (isLogin ? "Login" : "Create Account")}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="p-0 h-auto">
              {isLogin ? "Sign up" : "Login"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
