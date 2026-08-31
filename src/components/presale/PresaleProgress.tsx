import { useQuery } from "@tanstack/react-query";

import { PRESALE_LIMIT } from "@/lib/hapiklan";
import { useCountUp, useReveal } from "@/hooks/use-reveal";
import { progressQuery } from "@/components/site/GoalCounter";

/**
 * Live presale-progress indicator — the campaign's own goal, visualised.
 *
 * Built once, rendered wherever the page needs a "go faster" nudge:
 *  - `variant="band"`  full-width coloured band, used right under the hero
 *  - `variant="inline"` compact card, dropped next to a CTA further down
 *
 * The launch is capped at PRESALE_LIMIT pre-orders — once that many orders
 * exist, pre-orders close. Data source: the Supabase `preorder_progress` RPC
 * (counts real rows in `preorders`). [WIX — TODO] swap `progressQuery` for a
 * Wix order count once the store is the source of truth.
 */
export function PresaleProgress({ variant = "band" }: { variant?: "band" | "inline" }) {
  const { data } = useQuery(progressQuery);
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);

  const orders = data?.orders ?? 0;
  const remaining = Math.max(0, PRESALE_LIMIT - orders);
  const shownOrders = useCountUp(orders, visible && data !== undefined);
  const pct = Math.min(100, (orders / PRESALE_LIMIT) * 100);

  if (variant === "inline") {
    return (
      <div
        ref={ref}
        className="rounded-2xl border border-border bg-card p-4 shadow-soft"
        role="progressbar"
        aria-valuenow={orders}
        aria-valuemin={0}
        aria-valuemax={PRESALE_LIMIT}
        aria-label="Progression des précommandes"
      >
        <p className="font-display text-sm font-bold">
          <span className="tabular-nums">{shownOrders}</span>
          <span className="text-muted-foreground">/{PRESALE_LIMIT} précommandes</span>
        </p>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-gold transition-[width] duration-1000 ease-out"
            style={{ width: `${visible ? Math.max(pct, 2) : 0}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Plus que {remaining} précommandes avant la clôture.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-primary text-primary-foreground">
      <div ref={ref} className="container-page py-10 md:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary-foreground/60">Ne traînez pas</p>
          <p className="mt-3 font-display text-4xl font-black tabular-nums md:text-5xl">
            {shownOrders}
            <span className="text-primary-foreground/50">/{PRESALE_LIMIT}</span>
            <span className="ml-2 align-middle text-base font-semibold text-primary-foreground/70">
              précommandes
            </span>
          </p>

          <div
            className="mt-5 h-3 w-full overflow-hidden rounded-full bg-primary-foreground/15"
            role="progressbar"
            aria-valuenow={orders}
            aria-valuemin={0}
            aria-valuemax={PRESALE_LIMIT}
            aria-label="Progression des précommandes"
          >
            <div
              className="h-full rounded-full bg-gold transition-[width] duration-1000 ease-out"
              style={{ width: `${visible ? Math.max(pct, 1.5) : 0}%` }}
            />
          </div>

          <p className="mt-4 text-sm text-primary-foreground/75">
            Ce lancement est limité à{" "}
            <span className="font-semibold text-primary-foreground">
              {PRESALE_LIMIT} précommandes
            </span>{" "}
            — il en reste <span className="font-semibold text-primary-foreground">{remaining}</span>
            . Passé ce cap, les précommandes ferment : la production n'est lancée qu'une fois.
          </p>
        </div>
      </div>
    </section>
  );
}
