import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { BUNDLES, bundleTotalCents, formatEur, getBundle } from "@/lib/hapiklan";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const title = "Précommande — Hapiklan";
const description =
  "Finalisez votre précommande du jeu Hapiklan. Lancement limité à 200 précommandes, livraison prévue en juin 2026.";

export const Route = createFileRoute("/checkout")({
  validateSearch: (search: Record<string, unknown>): { pack: string } => ({
    pack: typeof search["pack"] === "string" ? (search["pack"] as string) : "couple",
  }),
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
  component: Checkout,
});

const fieldClass =
  "mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Checkout() {
  const { pack } = Route.useSearch();
  const navigate = useNavigate();
  const [bundleId, setBundleId] = useState(getBundle(pack).id);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bundle = getBundle(bundleId);
  const total = bundleTotalCents(bundle);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    const { error: err } = await supabase.from("preorders").insert({
      first_name: String(fd.get("first_name") ?? ""),
      last_name: String(fd.get("last_name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      address: String(fd.get("address") ?? ""),
      postal_code: String(fd.get("postal_code") ?? ""),
      city: String(fd.get("city") ?? ""),
      country: String(fd.get("country") ?? "Belgique"),
      bundle_id: bundle.id,
      units: bundle.units,
      total_cents: total,
    });
    if (err) {
      setError("Nous n'avons pas pu enregistrer votre précommande. Merci de réessayer.");
      setSubmitting(false);
      return;
    }
    navigate({ to: "/merci" });
  }

  return (
    <>
      <Header />
      <main className="container-page py-10 md:py-16">
        <h1 className="text-3xl font-bold md:text-4xl">Votre précommande</h1>
        <p className="mt-2 text-muted-foreground">
          Lancement limité à 200 précommandes · livraison prévue juin 2026 · annulation et
          remboursement possibles jusqu'à l'expédition.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
          <form onSubmit={submit} className="order-2 lg:order-1">
            <fieldset className="rounded-2xl border border-border bg-card p-5">
              <legend className="px-2 font-display font-semibold">Votre pack</legend>
              <div className="space-y-2">
                {BUNDLES.map((b) => (
                  <label
                    key={b.id}
                    className={[
                      "flex cursor-pointer items-center gap-3 rounded-xl border-2 p-3 transition",
                      b.id === bundleId ? "border-primary bg-secondary" : "border-border",
                    ].join(" ")}
                  >
                    <input
                      type="radio"
                      name="bundle"
                      value={b.id}
                      checked={b.id === bundleId}
                      onChange={() => setBundleId(b.id)}
                      className="accent-[var(--primary)]"
                    />
                    <span className="flex-1 text-sm">
                      <span className="font-semibold">
                        {b.units}× {b.name}
                      </span>{" "}
                      <span className="text-muted-foreground">— {b.tagline}</span>
                    </span>
                    <span className="font-display font-semibold tabular-nums">
                      {formatEur(bundleTotalCents(b))}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-5 rounded-2xl border border-border bg-card p-5">
              <legend className="px-2 font-display font-semibold">Vos coordonnées</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm">
                  Prénom
                  <input name="first_name" required className={fieldClass} />
                </label>
                <label className="text-sm">
                  Nom
                  <input name="last_name" required className={fieldClass} />
                </label>
                <label className="text-sm sm:col-span-2">
                  E-mail
                  <input name="email" type="email" required className={fieldClass} />
                </label>
                <label className="text-sm sm:col-span-2">
                  Téléphone (facultatif)
                  <input name="phone" type="tel" className={fieldClass} />
                </label>
                <label className="text-sm sm:col-span-2">
                  Adresse
                  <input name="address" required className={fieldClass} />
                </label>
                <label className="text-sm">
                  Code postal
                  <input name="postal_code" required className={fieldClass} />
                </label>
                <label className="text-sm">
                  Ville
                  <input name="city" required className={fieldClass} />
                </label>
                <label className="text-sm sm:col-span-2">
                  Pays
                  <input name="country" defaultValue="Belgique" required className={fieldClass} />
                </label>
              </div>
            </fieldset>

            {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 h-14 w-full rounded-full bg-primary px-8 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Enregistrement…" : `Confirmer ma précommande — ${formatEur(total)}`}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              [Placeholder — le paiement Stripe/Bancontact reste à brancher : cette étape enregistre
              la précommande et alimente le compteur réel.]
            </p>
          </form>

          <aside className="order-1 rounded-2xl border border-border bg-secondary p-5 lg:order-2 lg:sticky lg:top-24">
            <h2 className="font-display text-lg font-semibold">Récapitulatif</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>{bundle.name}</dt>
                <dd>
                  {bundle.units} jeu{bundle.units > 1 ? "x" : ""}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>Remise</dt>
                <dd>{bundle.discount > 0 ? `−${Math.round(bundle.discount * 100)} %` : "—"}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-2 font-display text-lg font-bold">
                <dt>Total</dt>
                <dd className="tabular-nums">{formatEur(total)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-muted-foreground">TVA incluse.</p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
