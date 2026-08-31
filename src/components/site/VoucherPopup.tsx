import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import logoFlower from "@/assets/brand/logo-flower.webp";
import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "hapiklan_voucher_popup_seen";
const VOUCHER_CODE = "BIENVENUE5";
const OPEN_DELAY_MS = 900;

type State = "idle" | "loading" | "done" | "error";

function markSeen() {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* private mode — nothing to persist */
  }
}

export function VoucherPopup() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [state, setState] = useState<State>("idle");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;
    const t = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next && state !== "done") markSeen();
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");

    const lead = {
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      consent,
    };

    // Preferred: dedicated leads table. Falls back to the newsletter list so a
    // lead is never lost if the migration has not been applied yet.
    const { error } = await supabase.from("voucher_leads").insert(lead);
    if (error) {
      const { error: fallbackError } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: lead.email });
      if (fallbackError && !fallbackError.message.includes("duplicate")) {
        setState("error");
        return;
      }
    }

    markSeen();
    setState("done");
  }

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(VOUCHER_CODE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — the code is visible on screen anyway */
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/45 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-card shadow-lift duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          aria-describedby={undefined}
        >
          <Dialog.Close className="absolute right-3.5 top-3.5 z-10 rounded-full p-1.5 text-primary-foreground/80 transition hover:bg-white/15 hover:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
            <X className="h-5 w-5" />
            <span className="sr-only">Fermer</span>
          </Dialog.Close>

          <div
            className="px-6 pb-7 pt-8 text-center text-primary-foreground"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--brand-orange) 0%, var(--primary) 48%, var(--blush) 100%)",
            }}
          >
            <img
              src={logoFlower}
              alt="Hapiklan"
              width={40}
              height={40}
              className="mx-auto h-10 w-10 drop-shadow-sm"
            />
            <p className="mt-4 font-display text-5xl font-black leading-none tracking-tight">
              −5 €
            </p>
            <p className="mt-2 text-sm font-medium text-primary-foreground/90">
              sur votre première commande
            </p>
          </div>

          <div className="bg-card px-6 py-6">
            {state === "done" ? (
              <div className="text-center">
                <Dialog.Title className="font-display text-xl font-bold">
                  {firstName.trim() ? `Merci ${firstName.trim()} !` : "Merci !"}
                </Dialog.Title>
                <p className="mt-2 text-sm text-muted-foreground">
                  Voici votre code — utilisez-le au moment de la précommande.
                </p>
                <button
                  type="button"
                  onClick={copyCode}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-dashed border-primary/40 bg-background px-5 py-3 font-display text-lg font-bold tracking-[0.18em] text-primary transition hover:bg-primary/5"
                >
                  {VOUCHER_CODE}
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {copied ? "Copié" : "Copier"}
                  </span>
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  Un e-mail de confirmation arrive dans votre boîte de réception.
                </p>
                <Dialog.Close className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground transition hover:opacity-90">
                  Continuer
                </Dialog.Close>
              </div>
            ) : (
              <>
                <Dialog.Title className="font-display text-xl font-bold leading-snug">
                  Recevez votre bon de 5 € de réduction
                </Dialog.Title>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Pour préparer votre grossesse à deux, sans vous ruiner.
                </p>

                <form onSubmit={submit} className="mt-4 space-y-3">
                  <div className="space-y-1">
                    <label
                      htmlFor="voucher-first"
                      className="text-xs font-semibold text-foreground"
                    >
                      Prénom
                    </label>
                    <input
                      id="voucher-first"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="h-11 w-full rounded-xl border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="voucher-last" className="text-xs font-semibold text-foreground">
                      Nom
                    </label>
                    <input
                      id="voucher-last"
                      type="text"
                      required
                      autoComplete="family-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="h-11 w-full rounded-xl border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="voucher-email"
                      className="text-xs font-semibold text-foreground"
                    >
                      E-mail
                    </label>
                    <input
                      id="voucher-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.be"
                      className="h-11 w-full rounded-xl border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 pt-1 text-xs leading-relaxed text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                    />
                    <span>
                      Oui, je souhaite recevoir des informations sur la grossesse, l'accouchement et
                      le post-partum.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="mt-1 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 disabled:opacity-60"
                  >
                    {state === "loading" ? "Envoi…" : "Recevoir mon bon de 5 €"}
                  </button>

                  {state === "error" && (
                    <p className="text-center text-xs text-destructive">
                      Une erreur est survenue. Merci de réessayer.
                    </p>
                  )}

                  <p className="text-center text-[0.7rem] leading-relaxed text-muted-foreground">
                    Aucun spam. Désinscription en un clic. Lancement limité à 200 précommandes.
                  </p>
                </form>
              </>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
