import { CARDS_PER_TRIMESTER, COMPLICE_TYPES, TRIMESTERS } from "@/lib/hapiklan";
import cardQuestion from "@/assets/brand/cards-question-set.webp";
import cardPapa from "@/assets/brand/card-papa.webp";
import cardAction from "@/assets/brand/card-action.webp";
import cardDiscussion from "@/assets/brand/card-discussion.webp";
import cardSouvenir from "@/assets/brand/card-souvenir.webp";
import cardTendresse from "@/assets/brand/card-tendresse.webp";
import cardCoquine from "@/assets/brand/card-coquine.webp";
import infographic from "@/assets/brand/box-contents-infographic.webp";

const compliceAccents: Record<string, string> = {
  Action: "bg-card-action",
  Discussion: "bg-card-discussion",
  Souvenir: "bg-card-souvenir",
  Tendresse: "bg-card-tendresse",
  Coquine: "bg-card-coquine",
};

const compliceImages: Record<string, string> = {
  Action: cardAction,
  Discussion: cardDiscussion,
  Souvenir: cardSouvenir,
  Tendresse: cardTendresse,
  Coquine: cardCoquine,
};

export function InTheBox() {
  return (
    <section id="contenu" className="section-y bg-background">
      <div className="container-page">
        <p className="eyebrow">Dans la boîte</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold md:text-4xl">
          Plus rien à chercher : les 100 cartes suivent votre grossesse
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          4 trimestres × 25 cartes. Chaque trimestre contient {CARDS_PER_TRIMESTER.questions} cartes
          Question, {CARDS_PER_TRIMESTER.papa} cartes Papa et {CARDS_PER_TRIMESTER.complices} cartes
          Complices. Vous jouez au bon moment, jamais trop tôt, jamais trop tard.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {TRIMESTERS.map((t) => (
            <article key={t.key} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{t.label}</h3>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold">
                  25 cartes
                </span>
              </div>
              <p className="mt-1 font-display text-base text-muted-foreground">{t.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.focus}</p>

              <div className="mt-4 flex gap-1.5" aria-hidden>
                {Array.from({ length: 25 }).map((_, i) => (
                  <span
                    key={i}
                    className={[
                      "h-6 flex-1 rounded-sm",
                      i < 15 ? "bg-card-question" : i < 20 ? "bg-card-papa" : "bg-card-coquine",
                    ].join(" ")}
                  />
                ))}
              </div>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-card-question" /> 15 Questions
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-card-papa" /> 5 Papa
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-card-coquine" /> 5 Complices
                </li>
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h3 className="font-display text-xl font-semibold">Les 5 cartes Complices</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Cinq types, toujours les mêmes, dans chaque trimestre.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {COMPLICE_TYPES.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
                >
                  <img
                    src={compliceImages[c.name]}
                    alt={`Carte ${c.name}`}
                    loading="lazy"
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div>
                    <p className="flex items-center gap-2 font-display text-sm font-bold">
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${compliceAccents[c.name]}`}
                        aria-hidden
                      />
                      Carte {c.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src={cardQuestion}
              alt="Cartes Question Hapiklan"
              loading="lazy"
              className="col-span-2 w-full rounded-2xl object-cover"
            />
            <img
              src={cardPapa}
              alt="Cartes spéciales Papa"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
            <img
              src={infographic}
              alt="Répartition des 100 cartes et du livret"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
