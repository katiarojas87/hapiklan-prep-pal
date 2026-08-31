import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { BundleSelector } from "@/components/site/BundleSelector";
import { GoalCounter } from "@/components/site/GoalCounter";
import { InTheBox } from "@/components/site/InTheBox";
import { HowItWorks } from "@/components/site/HowItWorks";
import { QrFeature } from "@/components/site/QrFeature";
import { StatBlock } from "@/components/site/StatBlock";
import { Faq } from "@/components/site/Faq";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { VoucherPopup } from "@/components/site/VoucherPopup";

const title = "Hapiklan — Le jeu de préparation à l'accouchement et au postpartum";
const description =
  "100 cartes et des vidéos de professionnels pour préparer votre grossesse, votre accouchement et votre postpartum à deux. Précommandes ouvertes, lancement limité à 200 précommandes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <BundleSelector />
        <GoalCounter />
        <InTheBox />
        <HowItWorks />
        <QrFeature />
        <StatBlock />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
      <VoucherPopup />
    </>
  );
}
