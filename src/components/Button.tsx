import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export function Button({
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "focus:ring-2 ring-black font-sans py-3 px-4 bg-cyan-500 rounded hover:bg-cyan-300 font-semibold text-black text-sm w-full transition-colors select-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
