import heroImage from "@/assets/generated/hero-couple-placeholder.jpg";
import { PlaceholderTag } from "./PlaceholderTag";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid gap-8 pb-12 pt-8 md:pb-20 md:pt-16 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Précommandes ouvertes · Édition limitée</p>
          <h1 className="mt-3 text-[2rem] font-bold leading-[1.1] md:text-5xl lg:text-[3.4rem]">
            Reprenez le contrôle de votre accouchement, à deux.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            100 cartes et des vidéos de professionnels de la périnatalité pour comprendre votre
            grossesse, préparer votre accouchement et traverser le postpartum — trimestre par
            trimestre, en couple.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#packs"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lift transition hover:opacity-90"
            >
              Précommander — 54,98 €
            </a>
            <span className="text-sm text-muted-foreground">
              Livraison juin 2026 · 500 jeux seulement
            </span>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <PlaceholderTag note="visuel IA, à remplacer par une photo sous licence" />
            <img
              src={heroImage}
              alt="Un couple découvre une carte Hapiklan à la maison pendant la grossesse"
              width={1600}
              height={1200}
              className="aspect-[16/10] w-full object-cover md:aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
