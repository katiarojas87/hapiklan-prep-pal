import type { ReactNode } from "react";

/**
 * Block-level marker for copy the founder still needs to write / review.
 * Final French wording is never invented here — only structure and intent.
 */
export function CopyPlaceholder({ label, children }: { label: string; children?: ReactNode }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 p-4">
      <p className="font-display text-xs font-bold uppercase tracking-wider text-primary">
        FR copy needed — {label}
      </p>
      {children ? <div className="mt-2 text-sm text-muted-foreground">{children}</div> : null}
    </div>
  );
}
