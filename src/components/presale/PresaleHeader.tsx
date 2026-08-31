import logoFlower from "@/assets/brand/logo-flower.webp";

/**
 * Stripped header for cold ad traffic: brand mark + one action, no nav links,
 * nothing that competes with the single path to purchase.
 */
export function PresaleHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between md:h-16">
        <span className="flex items-center gap-2">
          <img src={logoFlower} alt="Hapiklan" width={32} height={32} className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight">hapiklan</span>
        </span>
        <a
          href="#packs"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Précommander
        </a>
      </div>
    </header>
  );
}
