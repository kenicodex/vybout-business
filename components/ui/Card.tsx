// src/components/ui/card.tsx
import { cn } from "../system/cn";

export function Card({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border border-gray-300 rounded-lg shadow-sm p-4 bg-white", className)}>
      {title && <h2 className="font-semibold text-lg mb-2">{title}</h2>}
      {children}
    </div>
  );
}
