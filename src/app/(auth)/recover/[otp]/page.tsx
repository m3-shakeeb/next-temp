import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import OTPVerify from "@/features/auth/components/forms/otp";

export default function Page() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Verify OTP</CardTitle>
        <CardDescription>
          Enter the OTP sent to your email address below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <OTPVerify />
        <div className="mt-4 text-center text-sm">
          Didn&apos;t receive the OTP?{" "}
          <Link href="/recover" className="underline">
            Resend OTP
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
