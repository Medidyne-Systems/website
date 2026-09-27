import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Inbox,
  Search,
  Tag,
  ShieldCheck,
  AlertCircle,
  Printer,
  Files,
  Lock,
  Trash2,
} from "lucide-react";
import heroBg from "../../../../public/images/hero_bg.png";

export const metadata: Metadata = {
  title: "Dokumenten-Management",
  description:
    "Digitale Postmappe für eingehende Befunde und Berichte — automatisch kategorisiert, nach Dringlichkeit sortiert, per KI durchsuchbar.",
};

const features = [
  {
    icon: Inbox,
    title: "Digitale Postmappe",
    description: "Eingehende Befunde und Berichte laufen an einer Stelle zusammen. Jeder Arzt bekommt seine eigene Mappe — nach Wichtigkeit und Gelesen-Status sortiert, ohne dass etwas ausgeblendet wird.",
  },
  {
    icon: AlertCircle,
    title: "Dringlichkeit auf einen Blick",
    description: "Jedes Dokument bekommt automatisch eine Einstufung, die Ihr Team mit einem Klick korrigieren kann. Ungelesene und eilige Vorgänge zeigt ein Zähler direkt in der Navigation.",
  },
  {
    icon: Printer,
    title: "Eingang ohne Papier",
    description: "Was Scanner oder Faxgerät als PDF in einen Praxis-Ordner ablegen, übernimmt EmMa automatisch — von dort läuft es durch dieselbe Zuordnung wie alle anderen Dokumente.",
  },
  {
    icon: Tag,
    title: "Kategorisierung",
    description: "Dokumente werden automatisch einer Kategorie zugeordnet. Wo es eindeutig sein muss, hinterlegen Sie feste Regeln, die vor der KI greifen.",
  },
  {
    icon: Search,
    title: "Suche, die versteht",
    description: "Neben Freitext- und Filtersuche findet die KI-Suche inhaltlich passende Dokumente — auch wenn Sie nicht dieselben Worte verwenden wie das Schreiben.",
  },
  {
    icon: Files,
    title: "Mehrere auf einmal",
    description: "Ganze Stapel per Drag & Drop hochladen. Jede Datei wird einzeln verarbeitet und zeigt ihren eigenen Status — ein Fehler stoppt die übrigen nicht.",
  },
  {
    icon: Lock,
    title: "Zugriff nach Kategorie",
    description: "Wer für eine Kategorie nicht freigegeben ist, sieht deren Dokumente weder in der Liste noch in der Vorschau oder im Download.",
  },
  {
    icon: Trash2,
    title: "Keine Datenhalde",
    description: "Dokumente werden nach 30 Tagen automatisch entfernt. EmMa ist der Weg in die Patientenakte, kein zweites Archiv daneben.",
  },
  {
    icon: ShieldCheck,
    title: "Nachvollziehbar",
    description: "Weiterleitungen und Notizen werden protokolliert — jederzeit nachvollziehbar, wer ein Dokument wann an wen gegeben hat.",
  },
];

export default function DokumentenManagementPage() {
  return (
    <>
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5">
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Dokumente
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Dokumenten-Management
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Digitale Postmappe für den Posteingang Ihrer Praxis.
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
              Befunde, Arztbriefe und Faxe erreichen Ihre Praxis auf vielen Wegen.
              EmMa nimmt sie entgegen, ordnet sie zu und legt jedem Arzt genau das vor,
              was er sehen muss — nach Dringlichkeit sortiert.
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
          <p className="text-base text-midnight/50 mb-8">Erfahren Sie, wie das Dokumenten-Management Ihre Praxis-Organisation verbessert.</p>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]">
            Demo anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
