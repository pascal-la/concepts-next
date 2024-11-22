import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  ...props
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "w-full px-4 py-6 sm:p-12 bg-slate-100 border rounded-md",
        className
      )}
      {...props}
    />
  );
};

const CardTitle = ({
  className,
  ...props
}: PropsWithChildren<{ className?: string }>) => (
  <h2 className={twMerge("text-2xl font-semibold", className)} {...props} />
);

const CardDescription = ({
  className,
  ...props
}: PropsWithChildren<{ className?: string }>) => (
  <div
    className={twMerge("text-sm text-muted-foreground", className)}
    {...props}
  />
);

export { Card, CardTitle, CardDescription };
