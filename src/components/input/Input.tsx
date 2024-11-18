import { createElement } from "react";
import { twMerge } from "tailwind-merge";

import { InputProps } from "@/lib/types";

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

export default Input;
