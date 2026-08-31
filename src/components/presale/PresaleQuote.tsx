import expertPortrait from "@/assets/generated/expert-portrait-placeholder.jpg";
import { PlaceholderTag } from "@/components/site/PlaceholderTag";

/**
 * Section 7 — credibility quote. Hapiklan has no celebrity endorsement, so
 * this pull-quote carries the "validated by perinatal professionals" claim,
 * given the same visual weight a launch page gives its hero testimonial.
 */
export function PresaleQuote() {
  return (
    <section className="section-y bg-primary text-primary-foreground">
      <div className="container-page">
        <figure className="relative mx-auto max-w-3xl text-center">
          <PlaceholderTag note="citation et portrait à remplacer par l'experte réelle" />
          <p className="eyebrow text-primary-foreground/60">Validé par des professionnels</p>
          <blockquote className="mt-4 font-display text-2xl leading-snug md:text-3xl lg:text-4xl">
            « Chaque question et chaque réponse ont été relues par des professionnels de la
            périnatalité. Ce n'est pas un jeu de plus : c'est une préparation structurée, fiable, et
            qui met enfin le partenaire dans la conversation. »
          </blockquote>
          <figcaption className="mt-7 flex items-center justify-center gap-4">
            <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-card">
              <img
                src={expertPortrait}
                alt=""
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-left text-sm">
              <span className="block font-semibold">[Nom de l'experte]</span>
              <span className="block text-primary-foreground/70">
                Sage-femme · [titre et institution à confirmer]
              </span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
