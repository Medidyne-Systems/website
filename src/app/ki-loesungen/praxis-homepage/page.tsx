import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  WandSparkles,
  MessageSquareText,
  Database,
  ShieldCheck,
  History,
  Images,
} from "lucide-react";
import heroBg from "../../../../public/images/hero_bg.png";
import { ModuleVideoSection } from "@/components/ModuleVideo";

export const metadata: Metadata = {
  title: "Praxis-Homepage",
  description:
    "Die Internetseite der Praxis direkt in EmMa einrichten und pflegen — aus den Praxisdaten, mit Vorschau und Freigabe vor jeder Veröffentlichung.",
};

const features = [
  {
    icon: WandSparkles,
    title: "Einrichten aus den Praxisdaten",
    description: "Ein Assistent übernimmt Briefkopf und Standorte aus EmMa als Vorschlag. Sie wählen Aufbau, Farben und Logo und ergänzen die Angaben fürs Impressum — die Homepage ist angelegt.",
  },
  {
    icon: MessageSquareText,
    title: "Ändern per Anweisung",
    description: "Tippen oder diktieren Sie, was neu ist. EmMa zeigt jede Änderung als Vorschlag in Klartext und in der Vorschau; Sie wählen aus, was in den Entwurf kommt. Rechtstexte ändert die KI nicht.",
  },
  {
    icon: Database,
    title: "Praxisdaten an einer Stelle",
    description: "Standorte, Sprechzeiten, Team, Beiträge, Stellenangebote und Schließzeiten tragen Sie einmal ein — sie erscheinen überall auf der Homepage, wo sie gebraucht werden.",
  },
  {
    icon: ShieldCheck,
    title: "Online erst nach Freigabe",
    description: "Vor dem Veröffentlichen sehen Sie alle Änderungen. Offene Platzhalter sperren die Veröffentlichung, Rechtstexte bestätigt die Praxis, und werberechtlich heikle Formulierungen werden eigens angezeigt.",
  },
  {
    icon: History,
    title: "Jede Veröffentlichung eine Version",
    description: "Ältere Stände lassen sich ansehen, mit dem Entwurf vergleichen und zurückholen. Wer pflegen, aber nicht veröffentlichen darf, legt den Entwurf zur Freigabe vor.",
  },
  {
    icon: Images,
    title: "Bilder mit Rechte-Nachweis",
    description: "Jedes Bild braucht eine Beschreibung und die Bestätigung, dass Rechte und Einwilligungen vorliegen. Aufnahmeort und Geräteangaben werden beim Hochladen entfernt.",
  },
];

export default function PraxisHomepagePage() {
  return (
    <>
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5">
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Homepage
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Praxis-Homepage
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Ihre Homepage direkt in EmMa — selbst eingerichtet, selbst gepflegt.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      <ModuleVideoSection slug="praxis-homepage" />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">Funktionen</h2>
            <p className="mt-4 text-base text-midnight/60 leading-relaxed max-w-2xl mx-auto">
              Noch keine Homepage oder eine, die keiner mehr pflegt? EmMa richtet sie aus Ihren
              Praxisdaten ein, und Ihr Team hält sie aktuell — online geht nur, was Sie freigeben.
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
          <p className="text-base text-midnight/50 mb-8">Wir zeigen Ihnen gerne, wie Ihre Praxis ihre Homepage mit EmMa pflegt.</p>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]">
            Demo anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
