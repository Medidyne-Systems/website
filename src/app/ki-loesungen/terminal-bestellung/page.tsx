import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  Mic,
  Pill,
  Reply,
  SlidersHorizontal,
  ShieldCheck,
} from "lucide-react";
import heroBg from "../../../../public/images/hero_bg.png";
import { ModuleVideoSection } from "@/components/ModuleVideo";

export const metadata: Metadata = {
  title: "Bestellung am Terminal",
  description:
    "Folgerezept, Überweisung und Sonstiges selbst am Check-In-Terminal bestellen — Karte stecken, sagen, was gebraucht wird, und das Praxisteam bearbeitet die Bestellung im Eingang von EmMa.",
};

const features = [
  {
    icon: CreditCard,
    title: "Karte stecken, sagen, fertig",
    description: "Der Patient steckt seine Versichertenkarte, wählt „Bestellung“, tippt die Art an und sagt, was er braucht — beim Rezept die Medikamente, bei der Überweisung Fachrichtung und Erkrankung. Ohne Karte keine Bestellung.",
  },
  {
    icon: Mic,
    title: "Aus Gesprochenem wird Text",
    description: "EmMa übernimmt die Aufnahme als Text. Im Eingang stehen Name und Geburtsdatum von der Karte, die Aufnahme zum Anhören und der übernommene Text. War nichts zu verstehen, sagt EmMa das.",
  },
  {
    icon: Pill,
    title: "Medikamentennamen zur Auswahl",
    description: "Bei Rezepten stehen ähnlich geschriebene Namen aus dem Arzneimittel-Verzeichnis der EMA darunter. Ein Klick kopiert den passenden Namen zum Einfügen in T2med.",
  },
  {
    icon: Reply,
    title: "Sofort eine Antwort",
    description: "Nach dem Absenden zeigt das Terminal gleich die feste Antwort, die die Praxis für diese Bestellart hinterlegt hat. Kein Warten, kein Anstellen.",
  },
  {
    icon: SlidersHorizontal,
    title: "Bestellarten und Zeiten je Terminal",
    description: "Bestellung je Terminal an- oder ausschalten, Bestellarten umbenennen, ergänzen oder ausblenden, eigene Bestellzeiten festlegen. Je Bestellart lässt sich optional ein T2med-Wartezimmer zuordnen.",
  },
  {
    icon: ShieldCheck,
    title: "Aufnahme wird gelöscht",
    description: "Beim Erledigen löscht EmMa die Sprachaufnahme. Der Text bleibt bis zum Ende der Aufbewahrungsfrist, die die Praxis selbst einstellt.",
  },
];

export default function TerminalBestellungPage() {
  return (
    <>
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5">
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Bestellung am Terminal
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Bestellung am Terminal
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Folgerezept und Überweisung direkt am Check-In-Terminal bestellen — ohne Anstellen an der Anmeldung.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      <ModuleVideoSection slug="terminal-bestellung" />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">Funktionen</h2>
            <p className="mt-4 text-base text-midnight/60 leading-relaxed max-w-2xl mx-auto">
              Folgerezepte und Überweisungen sind der zweithäufigste Grund, sich an der Anmeldung
              anzustellen. Am Check-In-Terminal sagt der Patient, was er braucht — Ihr Team
              bearbeitet die Bestellung im Eingang von EmMa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl bg-snow border border-violet/5">
                <div className="w-10 h-10 rounded-lg bg-violet/8 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-violet" />
                </div>
                <h3 className="text-lg font-semibold text-midnight mb-2">{f.title}</h3>
                <p className="text-sm text-midnight/55 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-snow">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl tracking-tight text-midnight mb-4">Interesse?</h2>
          <p className="text-base text-midnight/50 mb-8">Wir zeigen Ihnen gerne, wie die Bestellung am Terminal in Ihrer Praxis funktioniert.</p>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]">
            Demo anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
