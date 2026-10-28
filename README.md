# Herterkom – Responsive React-App

Responsive React-App von [herterkom.de](https://herterkom.de/). Die Originaltexte und Herterkom-CI bleiben erhalten: Original-Logo, Poppins, blaue Markenfarben und Verläufe, Leitungsmuster, Bilder und Grafiken. Das aufgeräumte Layout mit Zweispalten-Hero, klarer Navigation und einheitlichen Leistungskarten passt sich an Laptop, iPad und Smartphone an.

## Lokal starten

```sh
npm install
npm run dev
```

## Produktionsversion

```sh
npm run build
npm run preview
```

`dist/` enthält die fertige Website. Der Build erstellt für jede Unterseite eine eigene `index.html`, sodass direkte Aufrufe auf einem statischen Webserver ohne zusätzliche Rewrite-Regel funktionieren. Interne Navigation läuft anschließend über die History API.

## Seiten

- `/` – Startseite
- `/ueberuns/` – Unternehmensgeschichte und Werte
- `/leistungen/` – Telekommunikation, Schaltschrankbau, Automotive
- `/ersatzteillager/` – Ersatzteile
- `/karriere/` – Karriere und aktuelle Stellenangebote
- `/kontakt/` – Kontaktformular
- `/impressum/` – Impressum
- `/datenschutzerklaerung/` – Datenschutzerklärung

Original-Sprungziele `/leistungen/#plans` und `/leistungen/#Automotive` sowie die beschreibenden Anker `#telekommunikation`, `#schaltschrankbau` und `#automotive` funktionieren.

## Technische Hinweise

- React und Vite, keine UI-Bibliothek.
- Originalbilder und Schriften liegen lokal unter `public/assets/` und `public/fonts/`. Die Website benötigt keine externen Bild- oder Schriftanfragen. Poppins-Lizenz: `public/fonts/Poppins-OFL.txt`.
- Mobiles Menü, Skip-Link, sichtbare Fokusmarkierungen, Fokusführung und Berücksichtigung reduzierter Bewegung.
- Navigation mit dezenten Hover- und Fokusflächen, animierter Unterlinie und dauerhaftem Hinweis auf die aktuelle Seite. Kleine Pfeilbewegungen unterstützen Links und Aktionen; das mobile Menü öffnet sich mit einer kurzen Staffelung.
- Inhalte erscheinen beim Scrollen einmalig und leicht versetzt (520 ms, 16 px, maximal 240 ms Verzögerung). Tastaturfokus und Sprungziele werden sofort sichtbar. Bei reduzierter Bewegung, in der Druckansicht oder ohne IntersectionObserver bleibt alles direkt lesbar.
- Die Original-Kabelmotive stehen freigestellt auf Weiß und schließen an den Bildschirmrand an: Glasfasern links, Stecker rechts. Sie fahren einmalig von ihrer jeweiligen Seite herein. Die PNGs bleiben unbeschnitten; der gerade Faserstamm wird bis zur linken Bildschirmkante fortgesetzt. Eine unsichtbare Hülle reserviert den Platz und dient als Sichtbarkeitsziel. Bei reduzierter Bewegung und im Druck sind beide Motive sofort vollständig sichtbar. Die Bilder werden für eine scharfe Darstellung maximal mit halber nativer Breite gezeigt (480 bzw. 272 CSS-Pixel).
- Die Titelbereiche aller Unterseiten zeigen die Partikel- und Netzwerkanimation des Originals: bewegte Punkte, Verbindungslinien, Mausreaktion und vier zusätzliche Punkte pro Klick oder Berührung. Die Canvas-Animation wird lokal ohne Zusatzbibliothek gezeichnet, pausiert außerhalb des sichtbaren Bereichs und bleibt bei reduzierter Bewegung statisch.
- Das Kontaktformular öffnet mit den eingegebenen Daten einen E-Mail-Entwurf an `info@herterkom.de`. Der Nutzer versendet selbst über sein E-Mail-Programm. Ein direkter Formularversand benötigt ein Backend; es wird kein erfolgreicher Versand vorgetäuscht.
- Rechtstexte wurden nicht redaktionell oder rechtlich überarbeitet. Der externe Impressum-Link in der Datenschutzerklärung und das Copyright-Jahr 2025 stammen aus dem Original.

## Dateien

- `src/main.jsx` – App, Navigation, Startseite und Footer
- `src/SubPages.jsx` – Über uns, Karriere, Kontakt und Ersatzteile
- `src/ServicesPage.jsx` – Leistungen
- `src/LegalPages.jsx` – Rechtstexte
- `src/PageHeader.jsx` – gemeinsamer animierter Titelbereich der Unterseiten
- `src/ParticleBackground.jsx` – Partikelnetz nach den Einstellungen des Originals
- `src/CableMotif.jsx` – freigestellte Original-Kabelmotive mit Anschluss an die Bildschirmkante
- `src/useScrollReveal.js` – zugängliches, gestaffeltes Einblenden ohne Zusatzbibliothek
- `src/styles.css` – Herterkom-CI, optimiertes Layout und responsive Anpassungen
- `scripts/build.mjs` – Produktionsbuild und statische Einstiegspunkte
