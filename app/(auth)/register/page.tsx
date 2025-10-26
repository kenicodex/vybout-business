"use client";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Text } from "@/components/ui/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function RegisterPage() {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const {
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data: { name: string; email: string; password: string; confirmPassword: string }) => {
    // Handle registration logic here
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Text variant="p" className="mb-6 text-center text-gray-600">
        Create your account to get started.
      </Text>
      <Card title="Register" className="w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={methods.handleSubmit(onSubmit)} noValidate {...methods}>
          <Input
            label="Name"
            type="text"
            autoComplete="name"
            {...methods.register("name")}
            error={methods.formState.errors.name?.message}
          />
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
            autoComplete="new-password"
            {...methods.register("password")}
            error={methods.formState.errors.password?.message}
          />
          <Input
            label="Confirm Password"
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
            Create Account
          </Button>
          <div className="flex flex-col items-center mt-4 gap-2">
            <span className="text-xs text-gray-500">Already have an account?
              <a href="/login" className="ml-1 text-blue-600 hover:underline">Sign In</a>
            </span>
          </div>
        </form>
      </Card>
    </div>
  );
}
