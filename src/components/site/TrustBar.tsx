import expertPortrait from "@/assets/generated/expert-portrait-placeholder.jpg";
import logoVub from "@/assets/brand/logo-vub-solvay.webp";
import logoStartit from "@/assets/brand/logo-startit.webp";
import logoWomenpreneur from "@/assets/brand/logo-womenpreneur.webp";
import logoStartlab from "@/assets/brand/logo-startlab.webp";
import logoHighher from "@/assets/brand/logo-highher.webp";
import { PlaceholderTag } from "./PlaceholderTag";

const logos = [
  { src: logoVub, alt: "VUB Solvay Business School" },
  { src: logoStartit, alt: "Start it @KBC" },
  { src: logoWomenpreneur, alt: "Womenpreneur Initiative" },
  { src: logoStartlab, alt: "StartLab Brussels" },
  { src: logoHighher, alt: "HighHer" },
];

export function TrustBar() {
  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <figure className="relative mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-soft md:p-9">
          <PlaceholderTag note="citation et portrait à remplacer par l'experte réelle" />
          <blockquote className="mt-4 font-display text-xl leading-snug md:text-2xl">
            « Chaque question et chaque réponse ont été relues par des professionnels de la
            périnatalité. Ce n'est pas un jeu de plus : c'est une préparation structurée, fiable, et
            qui met enfin le partenaire dans la conversation. »
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <img
              src={expertPortrait}
              alt=""
              width={800}
              height={800}
              loading="lazy"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-semibold">[Nom de l'experte]</p>
              <p className="text-muted-foreground">
                Sage-femme · [titre et institution à confirmer]
              </p>
            </div>
          </figcaption>
        </figure>

        <p className="mt-10 text-center eyebrow">Accompagnés et soutenus par</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {logos.map((l) => (
            <li key={l.alt}>
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="h-8 w-auto opacity-70 md:h-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
