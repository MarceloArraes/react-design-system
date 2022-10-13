import { ReactNode } from "react";
import { clsx } from "clsx";

export interface TextInputProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function TextInput({ size = "md", children }: TextInputProps) {
  return (
    <input
      className={clsx(
        "placeholder:text-gray-400 focus:ring-2 ring-black font-sans py-4 px-3 bg-gray-800 rounded text-gray-100 text-xs w-full",
        {
          "text-xs": size == "sm",
          "text-sm": size == "md",
          "text-md": size == "lg",
        }
      )}
    />
  );
}
