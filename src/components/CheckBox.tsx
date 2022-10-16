import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckBoxProps {
  text?: string;
  className?: string;
}

export const CheckBox = ({ text, className }: CheckBoxProps) => (
  <div className="flex justify-center">
    <CheckboxPrimitive.Root
      id="c1"
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" size={20} className="text-cyan-300" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <label className={className} htmlFor="c1">
      {text}
    </label>
  </div>
);
