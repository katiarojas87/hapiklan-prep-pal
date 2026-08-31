import heroProduct from "@/assets/brand/box-hero-product.webp";
import { EDITION_STOCK } from "@/lib/hapiklan";
import { CopyPlaceholder } from "./CopyPlaceholder";

/**
 * Section 1 — single-SKU hero. One product, one image, no carousel.
 * Headline value prop + one primary CTA. Scarcity line sits here.
 */
export function PresaleHero() {
  return (
    <section className="bg-cream">
      <div className="container-page grid gap-8 pb-12 pt-8 md:pb-16 md:pt-14 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Précommandes ouvertes · Édition limitée</p>

          {/* Working draft below is extracted from www.hapiklan.com — founder to confirm final wording. */}
          <h1 className="mt-3 text-[2rem] font-bold leading-[1.1] md:text-5xl lg:text-[3.3rem]">
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
              Précommander
            </a>
            <span className="text-sm font-medium text-muted-foreground">
              Précommandes ouvertes — stock limité à {EDITION_STOCK} exemplaires.
            </span>
          </div>

          <div className="mt-6">
            <CopyPlaceholder label="hero headline & sub">
              Angle de la landing : bénéfice émotionnel principal + preuve « validé par des pros ».
              Le titre ci-dessus est repris du site actuel en attendant la version finale.
            </CopyPlaceholder>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={heroProduct}
              alt="La boîte du jeu Hapiklan et ses cartes"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
