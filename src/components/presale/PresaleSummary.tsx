import summaryImage from "@/assets/brand/product-summary.webp";
import { CARDS_PER_TRIMESTER } from "@/lib/hapiklan";

/**
 * Section 4 — product summary. What the game is, what's in the box, the core
 * value prop in a few lines. Facts are real (from the site); the framing
 * sentence is a working draft for the founder.
 */
const specs = [
  "100 cartes réparties sur 4 trimestres (25 par trimestre)",
  `${CARDS_PER_TRIMESTER.questions} cartes Question, ${CARDS_PER_TRIMESTER.papa} cartes Papa et ${CARDS_PER_TRIMESTER.complices} cartes Complices par trimestre`,
  "Un livret d'accompagnement",
  "Des vidéos de professionnels accessibles par QR code, en français",
  "Format boîte, à jouer à deux en 10 minutes",
];

export function PresaleSummary() {
  return (
    <section className="section-y bg-background">
      <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="overflow-hidden rounded-3xl shadow-soft">
          <img
            src={summaryImage}
            alt="Le contenu du jeu Hapiklan"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">Le jeu en bref</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Une préparation structurée, pas un jeu de plus
          </h2>
          <p className="mt-3 text-muted-foreground">
            Hapiklan met sur la table, au bon moment, les sujets que l'on repousse : le projet de
            naissance, le rôle du partenaire, le postpartum. Chaque carte a été relue par des
            professionnels de la périnatalité.
          </p>

          <ul className="mt-5 space-y-2 text-sm">
            {specs.map((s) => (
              <li key={s} className="flex gap-2.5">
                <span className="mt-0.5 text-primary" aria-hidden>
                  ✔
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
