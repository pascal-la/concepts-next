import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const ModalOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
  );
};

const Modal = ({
  className,
  ...props
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <>
      <ModalOverlay />
      <div
        className={twMerge(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-zinc-500 p-6 shadow-lg sm:rounded-lg",
          className
        )}
        {...props}
      />
    </>
  );
};

export { Modal };
