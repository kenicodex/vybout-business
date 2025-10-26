// src/components/ui/modal.tsx
"use client";
import { useState } from "react";
import { Button } from "./Button";

export const Modal = ({
  title,
  children,
  trigger,
}: {
  title: string;
  children: React.ReactNode;
  trigger: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>{trigger}</Button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            {children}
            <div className="mt-4 text-right">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
