import logoVub from "@/assets/brand/logo-vub-solvay.webp";
import logoStartlab from "@/assets/brand/logo-startlab.webp";

/**
 * Section 9 — authority / credibility logos. Hapiklan's own validation wall:
 * VUB Solvay and startLab.
 */
const logos = [
  { src: logoVub, alt: "VUB Solvay Business School" },
  { src: logoStartlab, alt: "startLab" },
];

export function PresaleAuthority() {
  return (
    <section className="section-y bg-background">
      <div className="container-page text-center">
        <p className="eyebrow">Accompagnés et soutenus par</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((l) => (
            <li key={l.alt} className="rounded-lg bg-logo-plate px-2 py-1">
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="h-10 w-auto opacity-80 md:h-12"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
