import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacybeleid — Groeispeurt" },
      { name: "description", content: "Hoe Groeispeurt omgaat met je persoonsgegevens en cookies." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="container-page py-20 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Privacybeleid</h1>
      <p className="mt-3 text-muted-foreground">Laatst bijgewerkt: juni 2026</p>
      <div className="prose prose-invert mt-10 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Groeispeurt respecteert jouw privacy en verwerkt persoonsgegevens uitsluitend conform de AVG. Op deze pagina vind je hoe wij omgaan met de gegevens die jij met ons deelt.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Welke gegevens verwerken we?</h2>
        <p>
          Wanneer je het contactformulier invult of een gesprek inplant, slaan we je naam, e-mail, telefoonnummer, bedrijfsnaam en het budget dat je opgeeft op. Deze gegevens gebruiken we uitsluitend om contact met je op te nemen.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
        <p>
          We plaatsen essentiële cookies voor de werking van de site en, na jouw toestemming, analytische en marketing cookies om onze campagnes te meten en te verbeteren.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Jouw rechten</h2>
        <p>
          Je hebt het recht om je gegevens in te zien, te corrigeren of te laten verwijderen. Mail hiervoor naar <a href="mailto:privacy@groeispeurt.nl" className="text-primary">privacy@groeispeurt.nl</a>.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
        <p>Groeispeurt B.V. · Keizersgracht 123, 1015 CJ Amsterdam · KVK 87654321</p>
      </div>
    </section>
  );
}
