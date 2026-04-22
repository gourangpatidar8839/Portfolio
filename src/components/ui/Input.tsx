import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-2xl border border-line bg-bg/60 px-4 py-3 text-ink placeholder:text-ink/50 outline-none focus:border-ink focus:bg-bg transition";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn(fieldBase, className)} {...props} />;
});

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(fieldBase, "min-h-32 resize-y", className)}
      {...props}
    />
  );
});

export function Label({
  children,
  htmlFor,
  className,
}: {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-sm font-bold text-ink uppercase tracking-tight", className)}
    >
      {children}
    </label>
  );
}
