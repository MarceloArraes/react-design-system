import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  size = "md",
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(
        "focus:ring-2 ring-black font-sans py-3 px-4 bg-cyan-500 rounded hover:bg-cyan-300 font-semibold text-black text-sm w-full transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
