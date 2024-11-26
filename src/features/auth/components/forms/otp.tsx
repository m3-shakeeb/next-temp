"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { OtpStyledInput } from "@/components/ui/otp-styled-input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  otp: z.string().min(1, {
    message: "OTP is required.",
  }),
});

export default function OTPVerify() {
  const router = useRouter();
  // State for loading
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: { otp: string }) => {
    try {
      setLoading(true);
      const response = {
        token: data.otp,
      };
      setLoading(false);

      if (response.token) {
        toast.success("Your email is verified");
        router.push(`/recover/reset-password?token=${response.token}`);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <OtpStyledInput numInputs={6} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Loading..." : "Verify OTP"}
        </Button>
      </form>
    </Form>
  );
}
