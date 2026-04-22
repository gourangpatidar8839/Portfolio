import { cn } from "@/lib/utils";

export function MustardBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full bg-brand", className)}
    />
  );
}

export function PeachBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full bg-peach", className)}
    />
  );
}

export function MintBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full bg-mint", className)}
    />
  );
}

export function DashedDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto h-px w-full max-w-6xl border-t border-dashed border-ink/20",
        className
      )}
    />
  );
}

export function HandArrow({ className }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className={cn("text-ink/60", className)}
    >
      <path
        d="M8 12c10 6 18 16 22 28M30 40l3 6m-3-6l-6 3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
