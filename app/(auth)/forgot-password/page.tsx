"use client";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function ForgotPasswordPage() {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data: { email: string }) => {
    // Handle forgot password logic here
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Text variant="h2" className="mb-2 text-center text-gray-800 font-bold">vybout admin</Text>
      <Text variant="p" className="mb-6 text-center text-gray-600">
        Enter your email address and we&apos;ll send you a link to reset your password.
      </Text>
      <Card title="Forgot Password" className="w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={methods.handleSubmit(onSubmit)} noValidate {...methods}>
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            {...methods.register("email")}
            error={methods.formState.errors.email?.message}
          />
          <Button
            type="submit"
            className="w-full mt-2"
            disabled={isSubmitting || !isValid}
            loading={isSubmitting}
          >
            Send Reset Link
          </Button>
          <div className="flex flex-col items-center mt-4 gap-2">
            <span className="text-xs text-gray-500">Remembered your password?
              <a href="/login" className="ml-1 text-blue-600 hover:underline">Sign In</a>
            </span>
          </div>
        </form>
      </Card>
    </div>
  );
}
