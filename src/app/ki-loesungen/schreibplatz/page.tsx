import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileCheck,
  Upload,
  Brain,
  Layers,
  History,
  Sparkles,
  Mic,
  Mail,
  Stamp,
  BookUser,
  PenLine,
} from "lucide-react";
import heroBg from "../../../../public/images/hero_bg.png";

export const metadata: Metadata = {
  title: "Schreibplatz",
  description:
    "KI-unterstützte Erstellung medizinischer Schriftstücke — Gutachten, Arztbriefe und Atteste aus einem Diktat.",
};

const features = [
  {
    icon: Upload,
    title: "Text, Audio und PDF",
    description: "Den Auftrag tippen oder diktieren, Anfragen und Vorbefunde als PDF dazulegen — alles läuft in denselben Entwurf ein.",
  },
  {
    icon: Brain,
    title: "KI-Analyse",
    description: "Die KI analysiert Ihre Unterlagen automatisch und erstellt einen strukturierten Entwurf des gewünschten Dokuments.",
  },
  {
    icon: Layers,
    title: "Verschiedene Kategorien",
    description: "Gutachten, Atteste und Arztbriefe arbeiten mit einer geprüften KI-Vorlage. Eigene Dokumentarten mit eigener Bauanleitung legen Sie selbst an.",
  },
  {
    icon: Sparkles,
    title: "Erkennt selbst, was gebraucht wird",
    description: "Sie müssen nichts vorsortieren: Aus Ihrem Auftrag und den beigelegten Unterlagen erkennt EmMa, ob ein Gutachten, ein Arztbrief oder ein Attest entstehen soll. Formularangaben liefert die KI als strukturierten Text zum Übertragen.",
  },
  {
    icon: Mic,
    title: "Auftrag diktieren",
    description: "„Ich brauche ein Attest für … wegen …“ — sprechen statt tippen. Auch längere Diktate vom Aufnahmegerät oder Handy laufen im Hintergrund durch und kommen als sauberer Auftragstext zurück.",
  },
  {
    icon: Mail,
    title: "Arztbrief in Briefform",
    description: "Empfänger und Betreff schlägt die KI aus Ihrem Auftrag vor, beides bleibt vor dem Export änderbar. Das PDF folgt der Briefform nach DIN 5008.",
  },
  {
    icon: Stamp,
    title: "Ihr Briefkopf",
    description: "Eigene Briefköpfe mit Adressblock, Fußtext und Logo hinterlegen und je Schriftstück auswählen — oder schlicht ohne Kopf exportieren.",
  },
  {
    icon: BookUser,
    title: "Gemeinsames Adressbuch",
    description: "Empfänger pflegt die Praxis einmal zentral. Nennt Ihr Auftrag einen bekannten Namen, übernimmt EmMa die vollständige Postanschrift in den Brief.",
  },
  {
    icon: PenLine,
    title: "Signatur und Mitzeichnung",
    description: "Jedes PDF schließt mit der Signatur des Verfassers, auf Wunsch mit Unterschriftsbild und Mitzeichnern wie Ober- oder Chefarzt daneben.",
  },
  {
    icon: FileCheck,
    title: "Nachbearbeitung",
    description: "Jeder Entwurf kann vor der Freigabe überprüft und angepasst werden — die KI liefert die Basis, Sie behalten die Kontrolle.",
  },
  {
    icon: History,
    title: "Archiv",
    description: "Alle erstellten Schriftstücke in einer chronologischen Liste, nach Dokumenttyp filterbar. Der freigegebene Text wird beim Speichern festgeschrieben.",
  },
];

export default function SchreibplatzPage() {
  return (
    <>
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5">
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Schreibplatz
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Schreibplatz
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Alle diktierten Schriftstücke der Praxis an einem Ort.
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
              Ein Ort für alle diktierten Schriftstücke — Gutachten, Arztbrief, Attest und
              Formular. Auftrag sprechen oder tippen, Unterlagen dazulegen: Die KI erstellt
              den Entwurf, Sie prüfen und geben frei.
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
          <p className="text-base text-midnight/50 mb-8">Lassen Sie sich zeigen, wie der KI-gestützte Schreibplatz funktioniert.</p>
          <Link href="/kontakt" className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]">
            Demo anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
