import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Nfc,
  Coffee,
  Scale,
  UserCheck,
  FileDown,
} from "lucide-react";
import heroBg from "../../../../public/images/hero_bg.png";
import { ModuleVideoSection } from "@/components/ModuleVideo";

export const metadata: Metadata = {
  title: "Zeiterfassung",
  description:
    "Arbeitszeiterfassung für das Praxisteam — Stempeln per Klick oder Chip, Mindestpausen nach dem Arbeitszeitgesetz automatisch, Saldo gegen das Soll und Stundennachweis als PDF.",
};

const features = [
  {
    icon: Clock,
    title: "Kommen und Gehen per Klick",
    description: "Zwei Knöpfe, mehr nicht. Pausen ergeben sich aus den Lücken zwischen Gehen und Kommen, die Wochenübersicht zeigt Ist, Soll und Saldo.",
  },
  {
    icon: Nfc,
    title: "Stempeln mit Chip am Terminal",
    description: "Chip an den Leser des Check-In-Terminals halten, fertig — auch für Mitarbeiter ohne eigenen EmMa-Zugang.",
  },
  {
    icon: Coffee,
    title: "Mindestpausen automatisch",
    description: "Reichen die gestempelten Pausen nach dem Arbeitszeitgesetz nicht aus, zieht EmMa die fehlende Mindestpause ab und weist darauf hin — für Jugendliche mit den eigenen Grenzen, sobald das Geburtsdatum hinterlegt ist.",
  },
  {
    icon: Scale,
    title: "Saldo gegen das Soll",
    description: "Das Tages-Soll kommt aus dem Dienstplan oder aus dem Vertrag. Hinweise auf Ruhezeit, Höchstarbeitszeit und offene Einträge blockieren nie, sie zeigen nur an.",
  },
  {
    icon: UserCheck,
    title: "Team-Übersicht für die Leitung",
    description: "Alle Zeiten auf einen Blick, Überstunden annehmen oder ablehnen, vergessenes Ausstempeln nachtragen (im Stundennachweis vermerkt), Urlaubsanträge entscheiden.",
  },
  {
    icon: FileDown,
    title: "Stundennachweis als PDF und CSV",
    description: "Je Monat und Mitarbeiter — als PDF zum Abheften und Vorlegen, als CSV für den Steuerberater. Die Aufbewahrungsfrist stellt die Praxis selbst ein.",
  },
];

export default function ZeiterfassungPage() {
  return (
    <>
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5">
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Zeiterfassung
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Zeiterfassung
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Arbeitszeiten erfassen — mit einem Klick oder Chip.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      <ModuleVideoSection slug="zeiterfassung" />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">Funktionen</h2>
            <p className="mt-4 text-base text-midnight/60 leading-relaxed max-w-2xl mx-auto">
              Jeder im Team stempelt seine eigenen Zeiten, die Praxisleitung behält Salden und
              Überstunden im Blick. Funktioniert mit und ohne Dienstplan.
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
          <p className="text-base text-midnight/50 mb-8">Wir zeigen Ihnen gerne, wie die Zeiterfassung in Ihrer Praxis funktioniert.</p>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]">
            Demo anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
