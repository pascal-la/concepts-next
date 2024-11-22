import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  type?: "submit" | "reset" | "button";
  variant?: "primary" | "secondary" | "third";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariant = {
  primary:
    "from-emerald-500 to-emerald-700 hover:from-emerald-700 hover:to-emerald-500 focus-visible:outline-emerald-600",
  secondary:
    "from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-500 focus-visible:outline-sky-600",
  third:
    "from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 focus-visible:outline-yellow-600",
};

const Button = ({
  type = "button",
  variant = "primary",
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={type}
      className={twMerge(
        "rounded-md px-3 py-2 text-sm font-semibold text-white bg-gradient-to-br shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60  disabled:pointer-events-none",
        buttonVariant[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
