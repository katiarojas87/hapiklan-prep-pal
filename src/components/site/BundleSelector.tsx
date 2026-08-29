import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  BUNDLES,
  bundleFullPriceCents,
  bundleTotalCents,
  bundleUnitCents,
  formatEur,
} from "@/lib/hapiklan";
import boxSingle from "@/assets/brand/box-booklet.webp";
import boxDouble from "@/assets/brand/boxes-trio.webp";
import boxQuad from "@/assets/brand/boxes-multi.webp";

const images: Record<string, string> = {
  couple: boxSingle,
  copines: boxDouble,
  village: boxQuad,
};

export function BundleSelector() {
  const [selectedId, setSelectedId] = useState(BUNDLES[0].id);
  const navigate = useNavigate();
  const selected = BUNDLES.find((b) => b.id === selectedId)!;
  const total = bundleTotalCents(selected);
  const full = bundleFullPriceCents(selected);

  return (
    <section id="packs" className="section-y bg-cream">
      <div className="container-page">
        <p className="eyebrow">Choisissez votre pack</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold md:text-4xl">
          Un seul jeu. Trois façons de le partager.
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Pour vous deux, pour vous et votre copine enceinte, ou pour tout votre village. Plus vous
          partagez, moins vous payez.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {BUNDLES.map((b) => {
            const active = b.id === selectedId;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setSelectedId(b.id)}
                aria-pressed={active}
                className={[
                  "relative flex w-full items-center gap-4 rounded-2xl border-2 bg-card p-4 text-left transition lg:flex-col lg:items-start lg:p-5",
                  active
                    ? "border-primary shadow-lift ring-4 ring-accent/35"
                    : "border-border hover:border-primary/40 hover:shadow-soft",
                ].join(" ")}
              >
                {b.discount > 0 && (
                  <span className="absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-gold-foreground">
                    −{Math.round(b.discount * 100)} %
                  </span>
                )}
                <img
                  src={images[b.id]}
                  alt={`Pack ${b.name}`}
                  loading="lazy"
                  className="h-20 w-24 shrink-0 rounded-xl bg-secondary object-contain lg:h-36 lg:w-full"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={[
                        "grid h-5 w-5 shrink-0 place-items-center rounded-full border-2",
                        active ? "border-primary bg-primary" : "border-border",
                      ].join(" ")}
                      aria-hidden
                    >
                      {active && <span className="h-2 w-2 rounded-full bg-primary-foreground" />}
                    </span>
                    <h3 className="font-display text-base font-semibold pr-14 lg:pr-0">
                      {b.units}× {b.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{b.blurb}</p>
                  <p className="mt-2 font-display text-lg font-bold">
                    {formatEur(bundleTotalCents(b))}
                    {b.discount > 0 && (
                      <span className="ml-2 text-sm font-normal text-muted-foreground line-through">
                        {formatEur(bundleFullPriceCents(b))}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    soit {formatEur(bundleUnitCents(b))} le jeu
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="sticky bottom-3 z-30 mt-6 rounded-2xl border border-border bg-card p-4 shadow-lift md:static md:mt-8 md:flex md:items-center md:justify-between md:gap-6 md:p-6">
          <div>
            <p className="text-sm text-muted-foreground">
              Pack sélectionné : <span className="font-semibold text-foreground">{selected.name}</span>{" "}
              · {selected.units} jeu{selected.units > 1 ? "x" : ""}
            </p>
            <p className="font-display text-3xl font-bold tabular-nums">
              {formatEur(total)}
              {total < full && (
                <span className="ml-2 text-base font-normal text-muted-foreground line-through">
                  {formatEur(full)}
                </span>
              )}
            </p>
            <p className="text-xs text-muted-foreground">TVA incluse · livraison prévue juin 2026</p>
          </div>
          <button
            type="button"
            onClick={() => navigate({ to: "/checkout", search: { pack: selected.id } })}
            className="mt-3 inline-flex h-14 w-full items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition hover:opacity-90 md:mt-0 md:w-auto"
          >
            Précommander
          </button>
        </div>
      </div>
    </section>
  );
}
