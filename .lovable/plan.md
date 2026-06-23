## Plan: premium dienstenknoppen op de homepage

### Huidige situatie
Op de homepage staan negen dienstenkaarten (`ServicesGrid`) met elk een glazen kaart, icoon, titel, korte tekst en een “Meer info”-tekstlink. Die link voelt nu als een standaard template-CTA en niet als een premium Amsterdam-agency.

### Doel
De kaarten en hun CTA’s een luxere, meer uitgewerkte uitstraling geven zonder de structuur of routing te veranderen. We houden de dark navy/ neon green huisstijl en Inter-typografie aan.

### Drie ontwerprichtingen (keuze)
Ik genereer drie visuele richtingen voor de servicekaart-CTA. Jij kiest er één, dan bouw ik die exact na.

1. **Editorial minimal** — Volledig subtiele kaart, geen zichtbare knop. De hele kaart is klikbaar; alleen een fijn pijltje rechtsboven verandert van kleur en schuift bij hover. Focus op typografie en witruimte.
2. **Soft glow button** — Duidelijke pill/button onderaan de kaart met een subtiele neon-glow op hover, grijze ghost-stijl met witte border/1px, en een pijl die naar rechts schuift.
3. **Metric + CTA card** — Bovenin de kaart komt één kernmetric van de dienst. Onderaan een donkere, ingetogen “Bekijk dienst”-knop die licht oplicht bij hover.

### Wat ik aanpas
- Alleen `ServicesGrid` in `src/routes/index.tsx` (en eventueel één nieuwe utility-class in `src/styles.css`).
- De kaart blijft een `<Link>` naar `/diensten/$slug`.
- Geen inhoudelijke wijziging aan copy, routing of data in `services.ts`.
- Responsive gedrag blijft intact.

### Wanneer akkoord
Na je keuze pas ik de gekozen richting toe, check of de build slaagt en laat een korte preview-URL achter.