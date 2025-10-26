// src/components/ui/input.tsx
"use client";
import { cn } from "../system/cn";
import React, { useState } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = "text", className, ...props }, ref) => {
    const [show, setShow] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (show ? "text" : "password") : type;
    return (
      <div className={cn("flex flex-col gap-1 relative")}> 
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
        <input
          ref={ref}
          type={inputType}
          className={cn(
            "px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
            error ? "border-red-500" : "border-gray-300",
            isPassword && "pr-10",
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className={cn("absolute right-3 top-8 text-gray-500 focus:outline-none")}
            onClick={() => setShow((prev) => !prev)}
            tabIndex={-1}
          >
            {show ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3C5 3 1.73 7.11 1.05 10.29a1 1 0 000 .42C1.73 12.89 5 17 10 17s8.27-4.11 8.95-7.29a1 1 0 000-.42C18.27 7.11 15 3 10 3zm0 12c-3.86 0-7.13-3.13-7.82-6C2.87 7.13 6.14 4 10 4s7.13 3.13 7.82 6c-.69 2.87-3.96 6-7.82 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4.03 3.97a.75.75 0 011.06 0l10.94 10.94a.75.75 0 01-1.06 1.06l-1.2-1.2C12.45 16.16 11.26 17 10 17c-5 0-8.27-4.11-8.95-7.29a1 1 0 010-.42C1.73 7.11 5 3 10 3c1.26 0 2.45.84 3.68 2.23l-1.2 1.2a4 4 0 00-5.65 5.65l-1.2 1.2a.75.75 0 010-1.06zM10 15c3.86 0 7.13-3.13 7.82-6-.69-2.87-3.96-6-7.82-6-1.26 0-2.45.84-3.68 2.23l1.2 1.2a4 4 0 005.65 5.65l1.2 1.2C12.45 16.16 11.26 17 10 17z" />
              </svg>
            )}
          </button>
        )}
        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
