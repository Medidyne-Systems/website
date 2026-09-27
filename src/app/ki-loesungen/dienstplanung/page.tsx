import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Wand2,
  Scale,
  ShieldAlert,
  UserX,
  Sparkles,
  Palmtree,
  BarChart3,
  Smartphone,
} from "lucide-react";
import heroBg from "../../../../public/images/hero_bg.png";

export const metadata: Metadata = {
  title: "Dienstplanung",
  description:
    "Schicht- und Urlaubsplanung für das Praxisteam — automatischer Wochenplan, faire Verteilung, Mindestbesetzung und Ersatz-Vorschläge.",
};

const features = [
  {
    icon: Wand2,
    title: "Wochenplan auf Knopfdruck",
    description: "EmMa baut den Wochenplan nach dem Bedarf jeder Aufgabe. Pflicht-Aufgaben werden zuerst besetzt, von Hand eingetragene Dienste bleiben stehen.",
  },
  {
    icon: Scale,
    title: "Faire Verteilung",
    description: "Wie oft jemand welche Aufgabe hat, richtet sich nach der verfügbaren Vertragszeit — eine Halbtagskraft bekommt etwa halb so viele Dienste wie eine Vollzeitkraft.",
  },
  {
    icon: ShieldAlert,
    title: "Mindestbesetzung im Blick",
    description: "Unbesetzte Pflicht-Dienste sind im Plan markiert. Wer einen Dienst löscht oder Urlaub genehmigt und dadurch eine Lücke reißt, wird vorher gewarnt.",
  },
  {
    icon: UserX,
    title: "Ausfall und Ersatz",
    description: "Krankmeldung oder Urlaub für einen Zeitraum eintragen — EmMa zeigt vorher, welche Dienste frei werden, und schlägt verfügbare Kolleginnen und Kollegen als Ersatz vor.",
  },
  {
    icon: Sparkles,
    title: "Regeln in einem Satz",
    description: "Planungsregeln beschreiben Sie in Alltagssprache, die KI macht daraus eine Regel zum Prüfen und Übernehmen. Namen der Mitarbeiter gehen dabei nie an die KI.",
  },
  {
    icon: Palmtree,
    title: "Urlaubsplanung",
    description: "Jahreskalender für das ganze Team, Urlaubskonto mit Resturlaub und halben Tagen, Feiertage je Bundesland. Urlaubsanträge werden in EmMa gestellt und genehmigt.",
  },
  {
    icon: BarChart3,
    title: "Auswertungen",
    description: "Urlaub, Krankheitstage und Aufgaben je Person auf einen Blick — dazu die Auslastung: geplante Stunden gegen das vertragliche Soll.",
  },
  {
    icon: Smartphone,
    title: "Meine Dienste unterwegs",
    description: "Jeder im Team sieht seine eigenen Dienste — auch auf dem Handy, wo sich EmMa wie eine App installieren lässt.",
  },
];

export default function DienstplanungPage() {
  return (
    <>
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5">
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Dienstplanung
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Dienstplanung
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Schicht- und Urlaubsplanung, die fair verteilt und Lücken früh zeigt.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">Funktionen</h2>
            <p className="mt-4 text-base text-midnight/60 leading-relaxed max-w-2xl mx-auto">
              Der Dienstplan entsteht nicht mehr in der Tabellenkalkulation, sondern dort, wo auch
              Urlaub, Krankheit und Arbeitszeiten liegen — und rechnet mit, statt nur zu speichern.
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
          <p className="text-base text-midnight/50 mb-8">Wir zeigen Ihnen gerne, wie die Dienstplanung in Ihrer Praxis funktioniert.</p>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]">
            Demo anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
