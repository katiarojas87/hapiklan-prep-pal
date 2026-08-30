import logoFlower from "@/assets/brand/logo-flower.webp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-page flex flex-col gap-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          {/* Logo kept unmodified: placed on a white chip so it never sits directly on a coloured band. */}
          <span className="grid h-10 w-10 place-items-center rounded-full bg-card p-1.5">
            <img src={logoFlower} alt="" width={28} height={28} loading="lazy" className="h-7 w-7" />
          </span>
          <span className="font-display text-base font-semibold">hapiklan</span>
        </div>
        <p className="max-w-md text-primary-foreground/70">
          Le jeu de préparation à la grossesse, à l'accouchement et au postpartum. Édition limitée à
          500 exemplaires — livraison prévue en juin 2026.
        </p>
        <p className="text-primary-foreground/60">© {new Date().getFullYear()} Hapiklan · Bruxelles</p>
      </div>
    </footer>
  );
}
