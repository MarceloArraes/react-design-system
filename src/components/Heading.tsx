import React, { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
  size?: "lg" | "xl" | "2xl";
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = "lg", children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("text-gray-800 font-sans font-bold", {
        "text-lg": size == "lg",
        "text-xl": size == "xl",
        "text-2xl": size == "2xl",
      })}
    >
      {children}
    </Comp>
  );
}
