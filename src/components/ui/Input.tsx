import { createElement } from "react";
import { twMerge } from "tailwind-merge";

import { InputProps, InputWithLabelProps } from "@/lib/types";

const Input = ({ type = "text", className, rows, ...props }: InputProps) => {
  const isTextArea = type === "textarea";

  const input = createElement(isTextArea ? "textarea" : "input", {
    ...props,
    type: !isTextArea ? type : undefined,
    rows: isTextArea ? rows : undefined,
    className: twMerge(
      "block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",
      className
    ),
  });

  return input;
};

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

export { Input, InputWithLabel };
