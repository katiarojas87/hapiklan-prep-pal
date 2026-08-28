import { Link } from "@tanstack/react-router";
import logoFlower from "@/assets/brand/logo-flower.webp";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between md:h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoFlower} alt="Hapiklan" width={32} height={32} className="h-8 w-8" />
          <span className="font-display text-lg font-semibold tracking-tight">hapiklan</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#contenu" className="hover:text-accent-foreground/70">
            Le jeu
          </a>
          <a href="#fonctionnement" className="hover:text-accent-foreground/70">
            Comment ça marche
          </a>
          <a href="#faq" className="hover:text-accent-foreground/70">
            Questions
          </a>
        </nav>
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
