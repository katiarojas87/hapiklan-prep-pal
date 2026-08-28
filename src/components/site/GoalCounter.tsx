import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { EDITION_STOCK, PRESALE_GOAL } from "@/lib/hapiklan";
import { useCountUp, useReveal } from "@/hooks/use-reveal";

export type Progress = { units: number; orders: number };

export const progressQuery = {
  queryKey: ["preorder-progress"],
  queryFn: async (): Promise<Progress> => {
    const { data, error } = await supabase.rpc("preorder_progress");
    if (error) throw error;
    const row = Array.isArray(data) ? data[0] : data;
    return {
      units: Number(row?.units_reserved ?? 0),
      orders: Number(row?.orders_count ?? 0),
    };
  },
  refetchInterval: 60_000,
};

export function GoalCounter() {
  const { data } = useQuery(progressQuery);
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);

  const orders = data?.orders ?? 0;
  const units = data?.units ?? 0;
  const shown = useCountUp(orders, visible && data !== undefined);
  const pct = Math.min(100, (orders / PRESALE_GOAL) * 100);

  return (
    <section className="bg-primary text-primary-foreground">
      <div ref={ref} className="container-page py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary-foreground/60">Objectif de précommande</p>
          <p className="mt-3 font-display text-5xl font-bold tabular-nums md:text-6xl">
            {shown}
            <span className="text-primary-foreground/50">/{PRESALE_GOAL}</span>
          </p>
          <p className="mt-1 text-sm text-primary-foreground/70">précommandes confirmées</p>

          <div
            className="mt-6 h-3 w-full overflow-hidden rounded-full bg-primary-foreground/15"
            role="progressbar"
            aria-valuenow={orders}
            aria-valuemin={0}
            aria-valuemax={PRESALE_GOAL}
            aria-label="Progression des précommandes"
          >
            <div
              className="h-full rounded-full bg-gold transition-[width] duration-1000 ease-out"
              style={{ width: `${visible ? Math.max(pct, 1.5) : 0}%` }}
            />
          </div>

          <p className="mt-4 text-sm text-primary-foreground/70">
            {Math.max(0, EDITION_STOCK - units)} jeux encore disponibles sur les {EDITION_STOCK} de
            la première édition. Chiffres réels, mis à jour à chaque commande.
          </p>
        </div>
      </div>
    </section>
  );
}
