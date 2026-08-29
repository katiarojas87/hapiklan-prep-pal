import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GoalCounter } from "@/components/site/GoalCounter";

const title = "Merci pour votre précommande — Hapiklan";
const description =
  "Votre précommande Hapiklan est enregistrée. Livraison prévue en juin 2026, annulation possible jusqu'à l'expédition.";

export const Route = createFileRoute("/merci")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Merci,
});

function Merci() {
  return (
    <>
      <Header />
      <main>
        <section className="container-page py-16 text-center md:py-24">
          <h1 className="text-3xl font-bold md:text-4xl">Merci, votre exemplaire est réservé.</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Vous recevez un e-mail de confirmation. Nous vous tenons informée de la production et de
            l'expédition, prévue en juin 2026. Un doute, un changement d'adresse, une annulation ?
            Répondez simplement à cet e-mail.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex h-13 items-center justify-center rounded-full bg-primary px-7 font-semibold text-primary-foreground"
          >
            Retour à l'accueil
          </Link>
        </section>
        <GoalCounter />
      </main>
      <Footer />
    </>
  );
}
