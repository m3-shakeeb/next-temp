import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/features/auth/components/forms/login";
import Link from "next/link";

export default function Login() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />

        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="./resister" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
