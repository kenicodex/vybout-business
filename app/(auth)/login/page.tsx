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
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginPage() {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    formState: { isSubmitting, isValid },
  } = methods

  const onSubmit = async (data: { email: string; password: string }) => {
    // Handle login logic here
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Text variant="p" className="mb-6 text-center text-gray-600">
        Welcome back! Please sign in to your account.
      </Text>
      <Card title="Login" className="w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={methods.handleSubmit(onSubmit)} noValidate {...methods}>
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            {...methods.register("email")}
            error={methods.formState.errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            autoComplete="current-password"
            {...methods.register("password")}
            error={methods.formState.errors.password?.message}
          />
          <Button
            type="submit"
            className="w-full mt-2"
            disabled={isSubmitting || !isValid}
            loading={isSubmitting}
          >
            Sign In
          </Button>
          <div className="flex flex-col items-center mt-4 gap-2">
            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            <span className="text-xs text-gray-500">Don&apos;t have an account?
              <a href="/register" className="ml-1 text-blue-600 hover:underline">Create account</a>
            </span>
          </div>
        </form>
      </Card>
    </div>
  );
}
