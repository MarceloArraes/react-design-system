import React, { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ size = "md", children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(
        "focus:ring-2 ring-black font-sans py-4 px-3 bg-cyan-500 rounded hover:bg-cyan-300 font-semibold text-black text-sm w-full transition-colors",
        {}
      )}
    >
      {children}
    </Comp>
  );
}
