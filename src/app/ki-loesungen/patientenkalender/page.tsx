import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarRange,
  RefreshCw,
  Search,
  Tags,
  Move,
  AlertTriangle,
  Repeat,
  ShieldCheck,
  Bell,
} from "lucide-react";
import heroBg from "../../../../public/images/hero_bg.png";
import { ModuleVideoSection } from "@/components/ModuleVideo";

export const metadata: Metadata = {
  title: "Patientenkalender",
  description:
    "Patiententermine im Tagesblick mit einer Spalte je Person im Dienst — freie Termine entstehen direkt aus dem Dienstplan und folgen jeder Änderung von selbst.",
};

const features = [
  {
    icon: CalendarRange,
    title: "Der Tag im Blick",
    description: "Eine Spalte je Person im Dienst — freie Zeit grün, Termine in der Farbe ihrer Terminart. Dazu die Wochenansicht und mit einem Klick zurück zu heute.",
  },
  {
    icon: Search,
    title: "Nächstmöglicher Termin sofort gefunden",
    description: "EmMa zeigt den nächsten freien Termin — auswählen, buchen. Standort oder Person dürfen auch „egal“ sein.",
  },
  {
    icon: RefreshCw,
    title: "Folgt dem Dienstplan",
    description: "Freie Termine entstehen aus den Diensten des Teams. Neuer Dienst, Tausch, Urlaub oder Feiertag — der Kalender übernimmt jede Änderung innerhalb einer Minute.",
  },
  {
    icon: Tags,
    title: "Terminarten je Dienst",
    description: "Jede Terminart hat ihre Dauer und ist nur in den passenden Diensten buchbar — etwa Blutabnahme im Labor, Akutsprechstunde in der Sprechstunde.",
  },
  {
    icon: Move,
    title: "Verschieben per Ziehen",
    description: "Termine lassen sich per Ziehen verschieben, eine Absage lässt sich zurücknehmen, und jeder Termin hat seinen Verlauf.",
  },
  {
    icon: AlertTriangle,
    title: "Ausfälle als Telefonliste",
    description: "Steht hinter einem gebuchten Termin kein passender Dienst mehr, landet er in der Liste „Ausfälle“ — mit Telefonnummer, Status (erreicht, nicht erreicht, Nachricht hinterlassen), Notiz und „Neuer Termin“.",
  },
  {
    icon: Repeat,
    title: "Ketten, Serien, Räume",
    description: "Terminketten und Serien, Räume und Geräte — dazu Terminzettel zum Ausdrucken und die Tagesliste als PDF.",
  },
  {
    icon: ShieldCheck,
    title: "Gebuchtes bleibt, wie es ist",
    description: "EmMa verschiebt oder löscht keinen anstehenden Termin von selbst, die Entscheidung trifft Ihr Team. Gelöscht wird ein Termin erst 30 Tage nach dem Termintag.",
  },
  {
    icon: Bell,
    title: "Warnung schon im Dienstplan",
    description: "Wer einen Dienst löscht, tauscht oder Urlaub genehmigt, sieht vorher, wie viele Patiententermine daran hängen.",
  },
];

export default function PatientenkalenderPage() {
  return (
    <>
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5">
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Patientenkalender
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Patientenkalender
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Termine, die zum Dienstplan passen — ohne doppelte Pflege.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      <ModuleVideoSection slug="patientenkalender" />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">Funktionen</h2>
            <p className="mt-4 text-base text-midnight/60 leading-relaxed max-w-2xl mx-auto">
              Wer wann arbeitet, steht schon im Dienstplan. Der Patientenkalender macht daraus die
              freien Termine — einzustellen sind nur Terminarten und Öffnungszeiten.
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
          <p className="text-base text-midnight/50 mb-8">Wir zeigen Ihnen gerne, wie der Patientenkalender in Ihrer Praxis funktioniert.</p>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]">
            Demo anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
