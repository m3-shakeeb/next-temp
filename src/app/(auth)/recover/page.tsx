import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RecoverForm from "@/features/auth/components/forms/recover";

import Link from "next/link";

export default function Page() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Forgot Password?</CardTitle>
        <CardDescription>
          Enter your email below to receive an OTP for password reset.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RecoverForm />
        <div className="mt-4 text-center text-sm">
          Remember your password?{" "}
          <Link href="../login" className="underline">
            Back to login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
