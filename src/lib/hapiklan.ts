export const BASE_PRICE_CENTS = 5498;
/** Hard cap on the launch: pre-orders close once 200 have been placed. */
export const PRESALE_LIMIT = 200;

export type Bundle = {
  id: string;
  name: string;
  units: number;
  discount: number; // 0 → 0.20
  tagline: string;
  blurb: string;
};

export const BUNDLES: [Bundle, Bundle, Bundle] = [
  {
    id: "couple",
    name: "Mon Couple",
    units: 1,
    discount: 0,
    tagline: "1 jeu",
    blurb: "Préparez votre grossesse à deux, dès le premier trimestre.",
  },
  {
    id: "copines",
    name: "Copines Enceintes Ensemble",
    units: 2,
    discount: 0.1,
    tagline: "2 jeux · −10 %",
    blurb: "Un jeu pour vous, un pour votre copine enceinte. Vous avancez ensemble.",
  },
  {
    id: "village",
    name: "Tout Mon Village",
    units: 4,
    discount: 0.2,
    tagline: "4 jeux · −20 %",
    blurb: "Pour vous et vos proches : sœur, meilleure amie, doula, sage-femme.",
  },
];

export function bundleTotalCents(bundle: Bundle) {
  return Math.round(BASE_PRICE_CENTS * bundle.units * (1 - bundle.discount));
}

export function bundleFullPriceCents(bundle: Bundle) {
  return BASE_PRICE_CENTS * bundle.units;
}

export function bundleUnitCents(bundle: Bundle) {
  return Math.round(bundleTotalCents(bundle) / bundle.units);
}

const eur = new Intl.NumberFormat("fr-BE", {
  style: "currency",
  currency: "EUR",
});

export function formatEur(cents: number) {
  return eur.format(cents / 100);
}

export function getBundle(id: string | undefined) {
  return BUNDLES.find((b) => b.id === id) ?? BUNDLES[0];
}

/** The five "Carte Complice" types — one consistent naming used site-wide. */
export const COMPLICE_TYPES = [
  { name: "Action", desc: "Un geste concret à poser cette semaine." },
  { name: "Discussion", desc: "Une question qui ouvre la vraie conversation." },
  { name: "Souvenir", desc: "Un moment à figer avant l'arrivée de bébé." },
  { name: "Tendresse", desc: "Une attention douce pour se retrouver." },
  { name: "Coquine", desc: "Un clin d'œil complice, léger et intime." },
] as const;

export const TRIMESTERS = [
  {
    key: "T1",
    label: "Trimestre 1",
    title: "Comprendre ce qui commence",
    focus: "Premiers examens, alimentation, fatigue, annoncer la nouvelle.",
  },
  {
    key: "T2",
    label: "Trimestre 2",
    title: "Construire votre projet de naissance",
    focus: "Choix du lieu, positions, péridurale, préparation du corps.",
  },
  {
    key: "T3",
    label: "Trimestre 3",
    title: "Honorer l'accouchement",
    focus: "Déclenchement, césarienne, plan B, rôle du partenaire le jour J.",
  },
  {
    key: "T4",
    label: "Postpartum",
    title: "Le quatrième trimestre",
    focus: "Baby blues, allaitement, rééducation, charge mentale, couple.",
  },
] as const;

export const CARDS_PER_TRIMESTER = {
  questions: 15,
  papa: 5,
  complices: 5,
} as const;
