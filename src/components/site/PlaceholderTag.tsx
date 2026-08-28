/**
 * Visible marker for any visual that is NOT real Hapiklan brand material.
 * Everything without this badge was extracted from www.hapiklan.com.
 */
export function PlaceholderTag({ note }: { note: string }) {
  return (
    <span className="pointer-events-none absolute left-2 top-2 z-10 max-w-[85%] rounded-full bg-destructive/90 px-2.5 py-1 text-[10px] font-semibold uppercase leading-tight tracking-wide text-destructive-foreground shadow-soft">
      Placeholder — {note}
    </span>
  );
}
