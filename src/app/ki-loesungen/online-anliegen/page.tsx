import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MousePointerClick,
  MessagesSquare,
  Inbox,
  CalendarClock,
  Reply,
  PhoneCall,
} from "lucide-react";
import heroBg from "../../../../public/images/hero_bg.png";
import { ModuleVideoSection } from "@/components/ModuleVideo";

export const metadata: Metadata = {
  title: "Online-Anliegen",
  description:
    "Ein Fenster auf der Praxis-Homepage für Folgerezept, Überweisung, Rückruf und Terminanfrage — beantwortet im Eingang von EmMa.",
};

const features = [
  {
    icon: MousePointerClick,
    title: "Ein Knopf auf Ihrer Homepage",
    description: "Patienten öffnen das Fenster, wählen Standort und Anliegen und füllen ein kurzes Formular aus — auch für ein Kind oder einen Angehörigen.",
  },
  {
    icon: MessagesSquare,
    title: "Aus jedem Anliegen ein Verlauf",
    description: "Antworten erscheinen direkt im Fenster. Ist es geschlossen, erhält der Patient eine E-Mail ohne Inhalt mit persönlichem Link zurück in den Verlauf.",
  },
  {
    icon: Inbox,
    title: "Alles im Eingang",
    description: "Jedes Anliegen ist ein eigener Vorgang im Eingang von EmMa — mit den Angaben aus dem Formular und Kopier-Knöpfen für Ihr Praxissystem.",
  },
  {
    icon: CalendarClock,
    title: "Annahmezeiten und Kontingente",
    description: "Wochenplan, Schließtage und Tageskontingente je Anliegen. Ist etwas geschlossen, sieht der Patient, ab wann es wieder geht.",
  },
  {
    icon: Reply,
    title: "Antworten mit Bausteinen",
    description: "Feste Knöpfe wie „Rezept liegt bereit“ und eigene Antwort-Bausteine der Praxis. Was hinausgeht, wählt und prüft immer Ihr Team.",
  },
  {
    icon: PhoneCall,
    title: "Klar kein Notfallkanal",
    description: "In jedem Schritt steht „Nicht für Notfälle“ mit 112 und 116117. EmMa nimmt Anliegen entgegen und ordnet sie nach der gewählten Art — inhaltlich entscheidet das Praxisteam.",
  },
];

export default function OnlineAnliegenPage() {
  return (
    <>
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5">
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Online-Anliegen
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Online-Anliegen
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Organisatorische Anfragen über die Praxis-Homepage — statt Telefonschleife.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      <ModuleVideoSection slug="online-anliegen" />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">Funktionen</h2>
            <p className="mt-4 text-base text-midnight/60 leading-relaxed max-w-2xl mx-auto">
              Folgerezept, Überweisung, Rückruf, Terminanfrage: Patienten schreiben über Ihre
              Homepage, Ihr Team antwortet im Eingang — schriftlich und nachvollziehbar.
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
          <p className="text-base text-midnight/50 mb-8">Wir zeigen Ihnen gerne, wie Online-Anliegen in Ihrer Praxis funktionieren.</p>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]">
            Demo anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
