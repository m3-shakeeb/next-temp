"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import { toast } from "sonner"; // Update to sonner for toast notifications
import { z } from "zod";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[a-zA-Z0-9]/, { message: "Password must be alphanumeric" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const ResetPassword = () => {
  const router = useRouter();

  // State for loading
  const [loading, setLoading] = useState(false);

  // Use form handling with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async () => {
    // data: z.infer<typeof formSchema>
    setLoading(true);
    try {
      toast.success("Password change successfully done");
      router.push(`/login`);
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel htmlFor="password">New Password</FormLabel>
              <FormControl>
                <PasswordInput
                  id="password"
                  placeholder="******"
                  autoComplete="new-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password Field */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput
                  id="confirmPassword"
                  placeholder="******"
                  autoComplete="new-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <div className="flex items-center justify-center gap-3">
              <span>
                <VscLoading className="animate-spin" />
              </span>
              Processing Next Step
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ResetPassword;
