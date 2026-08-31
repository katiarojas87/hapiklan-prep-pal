import { createFileRoute } from "@tanstack/react-router";

import { PRESALE_LIMIT } from "@/lib/hapiklan";
import { Footer } from "@/components/site/Footer";
import { Faq } from "@/components/site/Faq";
import { PresaleHeader } from "@/components/presale/PresaleHeader";
import { PresaleHero } from "@/components/presale/PresaleHero";
import { PresaleBundleSelector } from "@/components/presale/PresaleBundleSelector";
import { PresaleProgress } from "@/components/presale/PresaleProgress";
import { PresaleSummary } from "@/components/presale/PresaleSummary";
import { PresaleBenefit } from "@/components/presale/PresaleBenefit";
import { PresaleSteps } from "@/components/presale/PresaleSteps";
import { PresaleQuote } from "@/components/presale/PresaleQuote";
import { PresaleAuthority } from "@/components/presale/PresaleAuthority";

const title = "Précommander le jeu Hapiklan — lancement limité à 200 précommandes";
const description =
  "Précommandez le jeu Hapiklan : 100 cartes pour préparer votre grossesse, votre accouchement et votre postpartum à deux. Paiement à la commande, livraison juin 2026, lancement limité à 200 précommandes.";

export const Route = createFileRoute("/productpage")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Precommande,
});

function Precommande() {
  return (
    <>
      <PresaleHeader />
      <main>
        {/* 1 — single-SKU hero */}
        <PresaleHero />

        {/* 2 — interactive bundle selector (with a compact reused progress bar) */}
        <PresaleBundleSelector />

        {/* 3 — live presale-progress indicator, framed as "go faster" */}
        <PresaleProgress variant="band" />

        {/* 4 — product summary */}
        <PresaleSummary />

        {/* 5 — benefit deep-dive (founder copy) */}
        <PresaleBenefit />

        {/* 6 — step-by-step usage explainer (founder copy) */}
        <PresaleSteps />

        {/* 7 — credibility quote (professional-validation, no celebrity) */}
        <PresaleQuote />

        {/* 8 — FAQ: objection-handling before the decision point.
            Reuses the site FAQ — already founder-reviewed and covers delivery,
            bundles, France vs Belgium, cancellation and content reliability. */}
        <Faq />

        {/* 9 — authority / credibility logos */}
        <PresaleAuthority />

        {/* Repeat CTA + progress near the end of the page */}
        <section className="section-y bg-cream">
          <div className="container-page max-w-2xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Prête à réserver votre exemplaire ?</h2>
            <p className="mt-3 text-muted-foreground">
              Lancement limité à {PRESALE_LIMIT} précommandes · paiement à la commande · livraison
              prévue juin 2026 · annulation possible jusqu'à l'expédition.
            </p>
            <a
              href="#packs"
              className="mt-6 inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lift transition hover:opacity-90"
            >
              Précommander
            </a>
            <div className="mx-auto mt-6 max-w-sm">
              <PresaleProgress variant="inline" />
            </div>
          </div>
        </section>

        {/* 10 — reviews: NOT applicable yet (pre-launch, no real customers).
            Activate this block once real reviews exist post-launch — e.g. a
            photo-review widget. Do not fabricate testimonials. */}
        {/* <PresaleReviews /> */}
      </main>
      <Footer />
    </>
  );
}
