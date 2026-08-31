import cardsImage from "@/assets/brand/cards-fan.webp";
import { CopyPlaceholder } from "./CopyPlaceholder";

/**
 * Section 5 — benefit deep-dive. Expands on Hapiklan's core benefit angle.
 * Founder owns this copy; the scaffold below shows the intended shape
 * (one strong claim + 3 supporting beats + a visual).
 */
export function PresaleBenefit() {
  return (
    <section className="section-y bg-cream">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">Pourquoi ça marche</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            <span className="text-muted-foreground">
              [FR COPY NEEDED] Le bénéfice central, en une phrase
            </span>
          </h2>

          <div className="mt-5">
            <CopyPlaceholder label="benefit deep-dive">
              Développer l'angle de positionnement de la fondatrice — p. ex. se préparer aux
              bascules émotionnelles et pratiques de chaque trimestre, mettre le partenaire dans la
              conversation, arriver aux rendez-vous médicaux avec les bonnes questions. Prévoir 1
              claim fort + 3 points d'appui.
            </CopyPlaceholder>
          </div>

          <ul className="mt-5 grid gap-3 sm:grid-cols-1">
            {[1, 2, 3].map((n) => (
              <li
                key={n}
                className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
              >
                <span className="font-display font-bold text-foreground">Point d'appui {n} — </span>
                [FR COPY NEEDED]
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-soft">
          <img
            src={cardsImage}
            alt="Éventail de cartes Hapiklan"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
