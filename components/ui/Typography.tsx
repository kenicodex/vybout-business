// src/components/ui/typography.tsx
import { JSX } from "react";
import { cn } from "../system/cn";

export function Text({
  variant = "p",
  children,
  className,
}: {
  variant?: "h1" | "h2" | "h3" | "p" | "small";
  children: React.ReactNode;
  className?: string;
}) {
  const Tag = variant as keyof JSX.IntrinsicElements;
  const styles: Record<string, string> = {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-medium",
    p: "text-base",
    small: "text-sm text-gray-500",
  };
  return <Tag className={cn(styles[variant], className)}>{children}</Tag>;
}
