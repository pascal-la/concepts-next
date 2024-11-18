import { twMerge } from "tailwind-merge";

import { InputWithLabelProps } from "@/lib/types";

import Input from "./Input";

const InputWithLabel = ({
  label,
  labelClassName,
  inputClassName,
  ...props
}: InputWithLabelProps) => {
  return (
    <fieldset className="grid gap-1">
      <label
        htmlFor={props.id}
        className={twMerge(
          "block text-sm/6 font-medium text-gray-900",
          labelClassName
        )}
      >
        {label}
      </label>
      <Input {...props} className={inputClassName} />
    </fieldset>
  );
};

export default InputWithLabel;
