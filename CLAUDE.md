# CLAUDE.md — Medidyne Systems Website

## Projekt-Übersicht
Website für die **Medidyne Systems GmbH** (Marke: EmMa.AI) — KI-Lösungen für Arztpraxen.

- **Produktion (alt):** https://www.medidyne-systems.de/ (noch auf Hostinger, soll abgelöst werden)
- **Preview (neu):** https://fuchs-medidyne.github.io/website/ (GitHub Pages, automatisches Deploy)

Die Website beschreibt inhaltlich das Produkt **EMMA-StackIt_dev** (siehe nächster Abschnitt).

## Inhaltliche Quelle: EMMA-StackIt_dev

Die Website bewirbt EMMA — die Multi-Tenant-KI-Plattform für Arztpraxen, die parallel im Schwesterprojekt entwickelt wird. Wenn auf der Website Funktionen, Module oder Versprechen formuliert werden, müssen sie zur tatsächlichen Software passen.

**Pfad relativ zur Website:** `../-=EMMA-StackIt_dev=-/`

Wann dort nachschauen:
- **Feature-Beschreibungen prüfen:** Bevor neue Texte zu KI-Modulen geschrieben werden.
- **Modul-Namen / -Funktionen verifizieren:** Damit auf der Website nichts versprochen wird, was es nicht gibt.
- **Neue Module recherchieren:** Falls eine neue KI-Lösung auf der Website angelegt werden soll.

Wichtige Anlaufstellen dort:
- `../-=EMMA-StackIt_dev=-/CLAUDE.md` — Projekt-Übersicht und Stack
- `../-=EMMA-StackIt_dev=-/workway/Plaene/EMMA-StackIt_dev/` — aktuelle und abgeschlossene Pläne (zeigen, was wirklich gebaut ist/wird)
- `../-=EMMA-StackIt_dev=-/workway/docs/` — Architektur- und Prozess-Doku
- `../-=EMMA-StackIt_dev=-/emma-frontend/` — React-Code (zeigt das tatsächliche UI)
- `../-=EMMA-StackIt_dev=-/emma-backend/` — FastAPI-Code (zeigt die tatsächlichen Endpunkte/Funktionen)

**Nur lesen, nicht editieren.** Änderungen am Produkt passieren ausschließlich im EMMA-StackIt_dev-Workflow, nie aus der Website-Session heraus.

## Tech-Stack
- **Framework:** Next.js 16 (App Router, `src/app/` Verzeichnisstruktur)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS v4 (via `@import "tailwindcss"` in `globals.css`, Farben über `@theme` Block)
- **Icons:** lucide-react
- **Fonts:** Sora (Headlines) + Plus Jakarta Sans (Body) — geladen via `next/font/google`
- **Deployment:** GitHub Pages (Static Export, automatisch via GitHub Actions bei Push auf `main`)
- **Package Manager:** npm

## Projektstruktur
```
src/
├── app/
│   ├── globals.css                          # Tailwind @theme, Animationen, Utilities
│   ├── layout.tsx                           # Root Layout (Header + Footer)
│   ├── page.tsx                             # Startseite
│   ├── ueber-uns/page.tsx
│   ├── philosophie/page.tsx
│   ├── ki-loesungen/                        # zeigt nur verfügbare Module (status: "available")
│   │   ├── page.tsx                         # KI-Lösungen Übersicht
│   │   ├── self-check-in/page.tsx
│   │   ├── patienten-aufruf/page.tsx
│   │   ├── sprechstunden-doku/page.tsx
│   │   ├── dokumenten-management/page.tsx
│   │   └── gutachten-erstellung/page.tsx
│   ├── roadmap/page.tsx                     # zeigt Module mit Status "in-development" / "planned"
│   ├── kontakt/page.tsx
│   ├── impressum/page.tsx
│   └── datenschutz/page.tsx
├── components/
│   ├── Header.tsx                           # Sticky Nav mit Mobile-Menü
│   ├── Footer.tsx
│   └── StatusBadge.tsx                      # Verfügbar / In Entwicklung / Geplant Pills
├── data/
│   └── modules.ts                           # ZENTRALE Modul-Datenquelle (Status, displayName, internalName)
public/
└── images/
    ├── logo_medidyne.png                    # Firmenlogo
    ├── hero_bg.png                          # Hero-Hintergrundbild
    ├── abrechnung.jpg
    ├── automation.jpg
    ├── dienstplan.jpg
    ├── dokumente.jpg                        # Dokumenten-Management
    ├── gutachten.jpg
    ├── wartezimmer.jpg
    ├── website_sprechstundedoku.jpg
    └── terminal_1-6.jpeg                    # Self-Check-In Terminal Produktfotos
.github/
└── workflows/
    └── deploy.yml                           # GitHub Pages Auto-Deploy bei Push auf main
```

## Farbschema (aus dem Logo abgeleitet)
Definiert in `src/app/globals.css` im `@theme` Block. IMMER diese Farben verwenden:

| Token      | Hex       | Verwendung                          |
|------------|-----------|-------------------------------------|
| midnight   | #091A1F   | Tiefster Hintergrund                |
| void       | #0F2A33   | Dunkler Hintergrund                 |
| abyss      | #1A4250   | Mittlerer dunkler Hintergrund       |
| iris       | #24616F   | Mittel-Teal                         |
| violet     | #2E7D8E   | **Primärfarbe** (Buttons, Akzente)  |
| lavender   | #4DA3B5   | Heller Akzent                       |
| mauve      | #8E6B87   | **Sekundärfarbe** (Akzente, Gradienten) |
| mist       | #B8DCE5   | Heller Teal-Ton                     |
| frost      | #DFF0F4   | Sehr hell                           |
| snow       | #F4FAFB   | Hintergrund helle Sektionen         |

**Niemals** Standard-Tailwind-Palette (indigo-500, blue-600, etc.) verwenden.

## Sprache
- Alle Inhalte auf **Deutsch**
- Kommunikation mit dem User auf Deutsch
- Technische Bezeichnungen (Code, Variablen, Dateinamen, Commit-Messages) bleiben Englisch

## Rückfragen an den User
- Bei Rückfragen **keine eigenen Antworten/Lösungen vorschlagen** — nur das Problem benennen und fragen. Der User entscheidet selbst, wie es weitergeht.
- Beispiel falsch: "Tippfehler gefunden — soll ich ihn zu X korrigieren?"
- Beispiel richtig: "Tippfehler gefunden in Zeile Y — wie möchtest du es korrigiert haben?"

## Brand Assets
- Bilder liegen in `public/images/` — immer verwenden statt Platzhalter
- Logo: `logo_medidyne.png` — im Header und Footer eingebunden, in Originalfarben (Teal + Mauve)
- Bei neuen Bildern: in `public/images/` ablegen, via Next.js `Image`-Komponente einbinden

## Design-Richtlinien
- **Überschriften:** Immer zentriert. Kompakte Größen (h1: max `text-5xl`, h2: max `text-3xl`). Keine festen `<br />`-Umbrüche — Text fließt responsiv je nach Bildschirmbreite
- **Sektions-Abstände:** Kompakt halten (`py-16 lg:py-20`), nicht zu viel Leerraum
- **Schatten:** Layered, farb-getönt (z. B. `shadow-violet/5`), keine flachen `shadow-md`
- **Animationen:** Nur `transform` und `opacity` animieren. Kein `transition-all`
- **Interaktive Elemente:** Hover-, Focus- und Active-States für alle klickbaren Elemente
- **Glasmorphismus:** Für Karten auf dunklem Hintergrund (`.glass`-Klasse in `globals.css`)
- **Hero-Banner:** Hintergrundbild mit `.hero-backdrop` Glas-Panel für Textlesbarkeit. Bilder via statische Imports (wegen `basePath`)
- **Responsive:** Mobile-first, Hamburger-Menü auf kleinen Screens

## Inbox / Outbox

Zwei Ordner im Projekt-Root für die Kommunikation zwischen User und Claude:

- **`inbox/`** — User legt hier Dateien ab, die Claude sehen soll (Screenshots, Mockups, Referenzbilder, Notizen).
- **`outbox/`** — Claude legt hier Dateien ab, die der User braucht (generierte Reports, Vorschläge, Exports).

Beide Ordner sind in `.gitignore` und landen **nicht** im Repo. Inhalte sind rein lokal pro Rechner.

Wer eine Datei einlegt, plant gleich mit, was nach der Bearbeitung damit passiert (Verschieben, Löschen, im Repo-Wissen ablegen). Inbox darf nicht volllaufen.

## Local Dev
```bash
npm run dev      # Dev-Server auf http://localhost:3000
npm run build    # Production Build
npm run lint     # ESLint
```

## Workflow

Lokal entwickeln → Review durch User → erst dann Push. Push ist die einzige Außenwirkung; bis dahin ist alles reversibel.

| Schritt | Wer | Was |
|---------|-----|-----|
| 1. Edit | Claude | Änderungen lokal an Dateien |
| 2. Build-Check | Claude | `npm run build` muss grün sein |
| 3. Review | User | `npm run dev` → im Browser anschauen, Feedback geben |
| 4. Iteration | beide | Anpassungen bis User zufrieden ist |
| 5. Commit | Claude (auf User-OK) | Commit mit aussagekräftiger Message |
| 6. Push | Claude (nur auf explizites "push") | Erst auf User-Wort — triggert das Auto-Deploy |

**Push-Variante (aktuell): Variante (a) — direkt nach `main`.**
Branch nach `main` mergen, dann `main` pushen → GitHub-Actions deployen automatisch. Pragmatisch für einen Maintainer.

**Wechsel zu Variante (b) — Branch + PR — sobald die Website komplexer wird** (mehrere Maintainer, parallele Features, größere Umbauten).

### Git-Regeln
- Commit-Messages auf Englisch, kurz und prägnant
- Neue Features/Änderungen als eigene Commits (nicht amenden)
- Vor dem Commit immer `npm run build` erfolgreich durchlaufen lassen
- Niemals ungefragt pushen — auch nicht "weil der Build grün ist"

## Team (optional)
Im Verzeichnis `Team/` liegen drei Agent-Profile (`web-leiter`, `web-architekt`, `web-rollen`). Sie sind für größere strukturelle oder architektonische Aufgaben gedacht. Für reine Inhalts-, Text- oder Bild-Edits ist direkte Arbeit ohne Delegation der Normalfall.
