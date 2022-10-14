import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="focus:ring-2 ring-cyan-300 outline-none placeholder:text-gray-400 font-sans py-4 px-3 bg-gray-800 rounded text-gray-100 text-xs w-full">
      {children}
    </div>
  );
};

export function TextInput({ ...props }: TextInputProps) {
  return (
    <div className="focus:ring-2 ring-cyan-300 outline-none placeholder:text-gray-400 font-sans py-4 px-3 bg-gray-800 rounded text-gray-100 text-xs w-full">
      <input className={clsx("")} {...props} />
    </div>
  );
}
