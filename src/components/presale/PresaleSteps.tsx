import { CopyPlaceholder } from "./CopyPlaceholder";

/**
 * Section 6 — step-by-step usage explainer. Sells the *experience* of using
 * the game across the 4 trimesters (Dropbottle's "add fruits → pour → enjoy →
 * refill" pattern, adapted). Draft verbs are from the current site; exact
 * steps to be confirmed with the founder.
 */
const steps = [
  {
    label: "Trimestre 1",
    verb: "Tirez une carte",
    body: "Une seule, quand vous avez dix minutes ensemble. Pas de devoirs, pas de programme.",
  },
  {
    label: "Trimestre 2",
    verb: "Discutez à deux",
    body: "La réponse est au dos : de l'info vérifiée, pas des avis de forum.",
  },
  {
    label: "Trimestre 3",
    verb: "Scannez le QR code",
    body: "Sur certaines cartes, un pro de la périnatalité vous répond en vidéo.",
  },
  {
    label: "Postpartum",
    verb: "Avancez ensemble",
    body: "Vous notez vos choix : projet de naissance, plan B, organisation du postpartum.",
  },
];

export function PresaleSteps() {
  return (
    <section id="fonctionnement" className="section-y bg-background">
      <div className="container-page">
        <p className="eyebrow">Comment ça se joue</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold md:text-4xl">
          Dix minutes par semaine, un trimestre à la fois
        </h2>

        <div className="mt-5 max-w-2xl">
          <CopyPlaceholder label="step-by-step explainer">
            Confirmer les 4 étapes avec la fondatrice et écrire un texte qui fait ressentir
            l'expérience (pas seulement la décrire). Les verbes ci-dessous sont repris du site
            actuel comme point de départ.
          </CopyPlaceholder>
        </div>

        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.verb}
              className="relative rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold">{s.verb}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              <span
                className="absolute inset-x-5 bottom-0 h-1 rounded-full bg-gold/60 md:hidden"
                aria-hidden
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
