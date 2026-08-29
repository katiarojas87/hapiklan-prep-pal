import { useCountUp, useReveal } from "@/hooks/use-reveal";

function Stat({
  value,
  suffix,
  prefix,
  label,
  active,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  active: boolean;
}) {
  const n = useCountUp(value, active, 1600);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
      <p className="font-display text-5xl font-bold tabular-nums md:text-6xl">
        {prefix}
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatBlock() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);

  return (
    <section className="section-y bg-cream">
      <div ref={ref} className="container-page">
        <div className={`mx-auto max-w-2xl text-center reveal ${visible ? "reveal-in" : ""}`}>
          <p className="eyebrow">Pourquoi ce jeu existe</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Le postpartum arrive toujours plus vite que la préparation
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          <Stat value={1} prefix="" suffix=" femme sur 2" label="traverse un baby blues après l'accouchement" active={visible} />
          <Stat value={20} suffix=" %" label="jusqu'à — de dépression du postpartum" active={visible} />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
          On prépare le sac de maternité, la chambre, la poussette. Presque jamais les semaines qui
          suivent. Hapiklan met ces sujets sur la table pendant qu'il est encore temps d'en parler
          calmement, à deux.
        </p>
      </div>
    </section>
  );
}
