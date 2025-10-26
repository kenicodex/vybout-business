"use client";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function ResetPasswordPage() {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data: { password: string; confirmPassword: string }) => {
    // Handle reset password logic here
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Text variant="h2" className="mb-2 text-center text-gray-800 font-bold">vybout admin</Text>
      <Text variant="p" className="mb-6 text-center text-gray-600">
        Enter your new password below to reset your account password.
      </Text>
      <Card title="Reset Password" className="w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Input
            label="New Password"
            type="password"
            autoComplete="new-password"
            {...methods.register("password")}
            error={methods.formState.errors.password?.message}
          />
          <Input
            label="Confirm New Password"
            type="password"
            autoComplete="new-password"
            {...methods.register("confirmPassword")}
            error={methods.formState.errors.confirmPassword?.message}
          />
          <Button
            type="submit"
            className="w-full mt-2"
            disabled={isSubmitting || !isValid}
            loading={isSubmitting}
          >
            Reset Password
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
