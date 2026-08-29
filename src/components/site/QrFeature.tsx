import qrPhone from "@/assets/brand/qr-video-phone.webp";
import cardQr from "@/assets/brand/card-qr.webp";
import bookletQr from "@/assets/brand/booklet-qr-open.webp";
import { PlaceholderTag } from "./PlaceholderTag";

export function QrFeature() {
  return (
    <section className="section-y bg-background">
      <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">Vidéos via QR codes</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Quand une carte ne suffit pas, un professionnel prend le relais
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sur les sujets les plus lourds — déclenchement, césarienne, allaitement, baby blues —
            scannez le QR code de la carte. Une sage-femme, une gynécologue ou une psychologue
            périnatale vous répond en vidéo, en français, directement sur votre téléphone.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex gap-2">
              <span aria-hidden>✔</span> Pas d'application à installer
            </li>
            <li className="flex gap-2">
              <span aria-hidden>✔</span> Vidéos courtes, à regarder à deux
            </li>
            <li className="flex gap-2">
              <span aria-hidden>✔</span> Contenus validés par des pros de la périnatalité
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 overflow-hidden rounded-2xl shadow-soft">
            <PlaceholderTag note="capture animée du scan à tourner avant le lancement" />
            <img
              src={qrPhone}
              alt="Une carte scannée affiche l'interview d'une professionnelle sur le téléphone"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <img
            src={cardQr}
            alt="Carte Hapiklan avec son QR code"
            loading="lazy"
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={bookletQr}
            alt="Livret Hapiklan ouvert avec QR code"
            loading="lazy"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
