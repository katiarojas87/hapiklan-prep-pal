import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    const { error } = await supabase.from("newsletter_subscribers").insert({ email });
    if (error && !error.message.includes("duplicate")) {
      setState("error");
      return;
    }
    setState("done");
    setEmail("");
  }

  return (
    <section className="section-y bg-cream">
      <div className="container-page max-w-2xl text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Pas encore prête à précommander ?</h2>
        <p className="mt-3 text-muted-foreground">
          Laissez votre e-mail : nous vous prévenons de l'avancée de la production, et si les 500
          exemplaires partent plus vite que prévu.
        </p>

        {state === "done" ? (
          <p className="mt-6 rounded-2xl border border-border bg-card p-5 font-display">
            Merci, c'est noté. À très vite.
          </p>
        ) : (
          <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Votre adresse e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.be"
              className="h-13 min-w-0 flex-1 rounded-full border border-input bg-card px-5 py-3.5 outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="h-13 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
            >
              {state === "loading" ? "Envoi…" : "Me tenir au courant"}
            </button>
          </form>
        )}
        {state === "error" && (
          <p className="mt-3 text-sm text-destructive">
            Une erreur est survenue. Merci de réessayer.
          </p>
        )}
      </div>
    </section>
  );
}
