# Hapiklan Journey

https://www.hapiklan.com/

You are designing and building a mobile-first e-commerce homepage + product

page for Hapiklan, a perinatal-preparation card game.

BUSINESS CONTEXT

- Product: a 100-card educational game (+ QR-linked professional videos) that

  helps expectant couples prepare for pregnancy, childbirth and postpartum,

  structured across 4 trimesters (3 pregnancy + 1 postpartum).

- Single SKU, sold in 3 bundles: 1x "Mon Couple", 2x "Copines Enceintes

  Ensemble" (-10%), 4x "Tout Mon Village" (-20%).

- Price: €54.98 base.

- Audience: French-speaking expectant parents, found via Meta/Google ads.

  They are anxious, safety-conscious, and trust-sensitive — not impulse

  shoppers. Tone must be reassuring and credible, never hypey or "salesy."

- Goal: 200 pre-sales in 2 months (Oct-Nov 2026). Stock is genuinely capped

  at 500 units for this first edition, delivery June 2026.

- Primary language: French. The site must NEVER auto-switch or fall back to

  English mid-session — lock locale, no silent language flips.

- Build mobile-first: design and test the 375px viewport first, then scale

  up. Most traffic arrives from Instagram/Facebook ads on phones.

DESIGN PRINCIPLES TO APPLY (validated e-commerce UX patterns)

1. Single static hero image, ONE clear CTA. No carousels/sliders — they

   measurably hurt conversion. Hero = value prop + one-line product

   description + "Précommander" button, all visible without scrolling.

2. Homepage IS the shop. Visitors must be able to select a bundle and start

   checkout directly from the homepage — no forced click-through to a

   separate product page for the core purchase decision.

3. Bundle selector must have visible selected/active state and must update

   the displayed price live when a different bundle is chosen. (This was

   broken on the current live site — a selected bundle showed no visual

   change and the price never updated. Do not repeat this bug.)

4. "Précommander" goes straight to checkout — no cart side-drawer, no

   "item added to cart" interstitial step.

5. Minimize choice: one product, three bundle sizes, nothing else competing

   for attention on the path to purchase.

6. Use clean product renders/mockups (box + cards) for visual consistency,

   not raw photography, especially for the hero and bundle sections.

7. Benefit-led copy first, features second. Lead every section with the

   outcome ("Reprenez le contrôle de votre accouchement, à deux"), then

   explain the mechanism.

8. Layer social proof at multiple points down the page: professional

   validation as a styled pull-quote (named expert + credential + photo,

   not a plain paragraph), plus press/incubator logos already available

   (VUB Solvay, Start It, Womenpreneur, StartLab). No fake customer

   reviews — do not fabricate testimonials pre-launch.

9. Add a LIVE progress element for the pre-sale goal itself: "X/200

   précommandés" or a stock bar counting down from 500. This is the

   single highest-leverage addition — it turns the founder's real sales

   goal into visible momentum for shoppers. Must reflect real numbers,

   never simulated.

10. Animate the existing baby-blues statistic (1 in 2 women / up to 20%

    postpartum depression) as a count-up on scroll-into-view, not static

    text — it's the strongest stat on the site and currently under-sold.

11. Include a simple "how it fits your life" explainer adapted to this

    product: a 4-step visual mapped to the 4 trimesters (e.g. "Trimestre 1:

    tirez une carte, discutez à deux, scannez le QR code, avancez ensemble"),

    not the generic "unbox → use" pattern — it should reflect this game's

    actual structure.

12. FAQ near the bottom, before final CTA, covering: delivery date and what

    happens if baby arrives before June 2026, refund/cancellation policy,

    is everything in French, what if we're past our first trimester already.

CONTENT THAT MUST BE SURFACED (currently buried or missing on the live site)

- The full 100-card breakdown, as a VISUAL (not a collapsed text accordion):

  4 trimesters x 25 cards each (15 educational + 5 "Dad" cards + 5

  "Accomplice" cards: action, discussion, memory, tenderness, and one more

  intimate/playful type — pick ONE consistent name for this last type and

  use it everywhere; do not vary it page to page).

- Do not duplicate the benefit checklist (✔ bullet list) — the current site

  renders it twice in a row on the product page; each section appears once.

- The QR-code video feature should be shown (short demo/GIF), not just

  described in a sentence.

PAGE STRUCTURE (mobile-first, single scrolling page for the core journey)

1. Hero — reassuring image (couple/pregnancy, not a graphic birth photo),

   headline on outcome, subhead, one CTA.

2. Trust bar — professional-validation pull-quote + credibility logos.

3. Bundle selector / mini-shop — 3 bundles with working selection state and

   live price, "Précommander" button goes straight to checkout.

4. Live goal counter — "X/200 précommandés" or stock-remaining bar.

5. What's in the box — visual breakdown of the 100 cards across 4 trimesters.

6. How it works — 4-step visual mapped to the trimesters.

7. QR/video feature demo.

8. Animated stat block — baby blues / postpartum depression count-up,

   tied back to why this product exists.

9. FAQ.

10. Newsletter signup — not an interstitial popup on first visit; trigger by

    scroll depth or exit intent instead, or place inline near the footer.

ASSET SOURCING

Before generating placeholder imagery, extract and reuse what already exists

on the live site at https://www.hapiklan.com — it's the client's real brand

asset library, not a mockup:

- Logo: pull the Hapiklan flower logo (header, both color and any white/

  reversed version used in the footer).

- Product renders: pull the existing box + card mockup images from the

  homepage and from the product page at

  https://www.hapiklan.com/product-page/jeu-grossesse-accouchement-postpartum

  (there's a thumbnail strip with ~10+ product images — extract each one at

  full resolution, not just the thumbnail).

- Credibility logos: pull the VUB Solvay, Start It, Womenpreneur, and

  StartLab logos from the homepage's "as seen in / backed by" strip.

- Card photography: if individual card-face photos exist anywhere on the

  site (product gallery, "what's in the box" sections), extract those for

  the 100-card breakdown visual instead of recreating them.

Substitute or generate ONLY what's missing or unusable, specifically:

- Hero image: the current live hero is a close-up, graphic childbirth photo

  — do not reuse it. Source or generate a warmer, reassuring

  pregnancy/couple image instead (stock photo, illustration, or AI-generated

  — flag which one you used so Kaat can license/replace it before launch).

- QR/video feature demo: no demo video or GIF currently exists on the site.

  Either source a short placeholder screen-recording of a phone scanning a

  card, or generate a simple animated mockup — clearly mark it as a

  placeholder to be replaced with a real capture before launch.

- Any section image with no equivalent on the live site (e.g. the 4-step

  trimester explainer, the animated stat block) — generate simple icon-led

  or illustration-style visuals consistent with the existing brand palette

  (navy blue, warm orange/gold, soft pink flower motif) rather than stock

  photography, to keep a cohesive look with the real product photography.

Flag every substituted or generated asset explicitly in the output (e.g.

"[PLACEHOLDER — replace before launch]") so Kaat and Catherine can tell at a

glance what's real brand material versus what still needs a proper photo/

video shoot.

DELIVERABLE

Output the homepage as sections with: French headline, subhead/body copy,

CTA label, and a short layout/component note per section (what's

interactive, what animates, what image type — and whether that image is

extracted from the live site or a flagged placeholder). Design mobile

(375px) first, then note how each section adapts at tablet/desktop

breakpoints.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/02d7505b-0106-4498-9539-b75b385d3506).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
