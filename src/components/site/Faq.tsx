import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Quand serai-je livrée ?",
    a: "La première édition est imprimée après la clôture des précommandes. La livraison est prévue en juin 2026. Vous recevez un e-mail dès que votre colis part, et nous vous tenons informée à chaque étape de la production.",
  },
  {
    q: "Et si bébé arrive avant juin 2026 ?",
    a: "Le jeu reste utile : le quatrième trimestre — postpartum — représente 25 cartes complètes, et les cartes Papa comme les cartes Complices n'ont pas de date de péremption. Si vous préférez ne pas attendre, écrivez-nous avant l'expédition et nous vous remboursons intégralement.",
  },
  {
    q: "Puis-je annuler ou être remboursée ?",
    a: "Oui. Vous pouvez annuler votre précommande et être remboursée à 100 % à tout moment avant l'expédition, sans justification. Après réception, vous disposez des 14 jours de droit de rétractation prévus par la loi belge.",
  },
  {
    q: "Tout est-il en français ?",
    a: "Oui. Les 100 cartes, le livret et l'intégralité des vidéos accessibles par QR code sont en français. Le site ne bascule jamais dans une autre langue.",
  },
  {
    q: "Nous avons déjà dépassé le premier trimestre, est-ce trop tard ?",
    a: "Non. Les cartes sont classées par trimestre mais rien ne vous oblige à commencer au début : vous démarrez au trimestre où vous êtes. Les cartes des trimestres précédents restent une bonne base de discussion, et le postpartum se prépare jusqu'au dernier jour.",
  },
  {
    q: "Le contenu est-il fiable ?",
    a: "Chaque question et chaque réponse ont été relues et validées par des professionnels de la périnatalité. Le jeu ne remplace pas votre sage-femme ou votre médecin : il vous aide à arriver au rendez-vous avec les bonnes questions.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-y bg-background">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Questions fréquentes</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Ce que les futurs parents nous demandent</h2>

        <Accordion type="single" collapsible className="mt-6">
          {items.map((it) => (
            <AccordionItem key={it.q} value={it.q}>
              <AccordionTrigger className="text-left font-display text-base">{it.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
