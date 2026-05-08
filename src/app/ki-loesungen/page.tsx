import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Cloud,
  ArrowRight,
  CheckCircle,
  Play,
  ImageIcon,
  Monitor,
  Users,
  Mic,
  FileCheck,
  Calculator,
  CalendarDays,
} from "lucide-react";
import heroBg from "../../../public/images/hero_bg.png";
import terminal4 from "../../../public/images/terminal_4.jpeg";
import sprechstundeDoku from "../../../public/images/website_sprechstundedoku.jpg";
import wartezimmer from "../../../public/images/wartezimmer.jpg";
import gutachten from "../../../public/images/gutachten.jpg";
import abrechnung from "../../../public/images/abrechnung.jpg";
import dienstplan from "../../../public/images/dienstplan.jpg";

export const metadata: Metadata = {
  title: "KI Lösungen",
  description:
    "KI Lösungen für Arztpraxen — datenschutzkonforme cloudbasierte Praxissoftware als Service mit hoher Verfügbarkeit, zentraler Wartung und stets aktueller Software. In Deutschland gehostet.",
};

const saasPoints = [
  "Hoher Verfügbarkeit",
  "Zentraler Wartung",
  "Stets aktueller Software",
];

const modules = [
  {
    icon: Monitor,
    title: "Self-Check-In Terminal",
    description:
      "Digitale Patientenanmeldung via Touchscreen-Terminal. Individualisierbare Check-In-Prozesse, Entlastung des Empfangsteams und optimierte Patientenführung.",
    href: "/ki-loesungen/self-check-in",
    linkText: "Weitere Details zum Terminal",
    placeholderType: "image" as const,
    placeholderLabel: "Self-Check-In Terminal",
    image: terminal4,
  },
  {
    icon: Users,
    title: "Patienten-Aufruf",
    description:
      "Digitales Aufruf-System für das Wartezimmer. Patienten werden über Bildschirme aufgerufen — organisiert, diskret und nahtlos mit dem Self-Check-In verknüpft.",
    href: "/ki-loesungen/patienten-aufruf",
    linkText: "Mehr zum Patienten-Aufruf",
    placeholderType: "image" as const,
    placeholderLabel: "Patienten-Aufruf",
    image: wartezimmer,
  },
  {
    icon: Mic,
    title: "Sprechstunden-Dokumentation",
    description:
      "Widmen Sie sich voll und ganz Ihrem Patienten. Das Arzt-Patienten-Gespräch wird KI-gestützt erfasst und automatisch in eine strukturierte Dokumentation überführt.",
    href: "/ki-loesungen/sprechstunden-doku",
    linkText: "Mehr zur Sprechstunden-Doku",
    placeholderType: "image" as const,
    placeholderLabel: "Sprechstunden-Dokumentation",
    image: sprechstundeDoku,
  },
  {
    icon: FileCheck,
    title: "Gutachten-Erstellung",
    description:
      "KI-unterstützte Erstellung von Gutachten, Attesten und Arztbriefen. Unterlagen hochladen, KI-Entwurf erhalten, nachbearbeiten und freigeben.",
    href: "/ki-loesungen/gutachten-erstellung",
    linkText: "Mehr zur Gutachten-Erstellung",
    placeholderType: "image" as const,
    placeholderLabel: "Gutachten-Erstellung",
    image: gutachten,
  },
  {
    icon: Calculator,
    title: "Abrechnungs-Optimierung",
    description:
      "Wurde eine Leistung erbracht, aber nicht abgerechnet? Das System identifiziert systematisch fehlende Abrechnungsziffern — für EBM, GOÄ und HZV. Ausserdem kann gezielt nach Potentialen gesucht werden um in Zukunft noch effizienter zu arbeiten.",
    href: "/ki-loesungen/abrechnungs-optimierung",
    linkText: "Mehr zur Abrechnungs-Optimierung",
    placeholderType: "image" as const,
    placeholderLabel: "Abrechnungs-Optimierung",
    image: abrechnung,
  },
  {
    icon: CalendarDays,
    title: "Dienstplanung",
    description:
      "Intelligente Schicht- und Urlaubsplanung für Ihr gesamtes Team. Standortübergreifend und fair mit automatischem Dienstplan-Generator.",
    href: "/ki-loesungen/dienstplanung",
    linkText: "Mehr zur Dienstplanung",
    placeholderType: "image" as const,
    placeholderLabel: "Dienstplanung",
    image: dienstplan,
  },
];

export default function KiLoesungenPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop px-8 py-5">
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              KI Lösungen für Arztpraxen
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Verwaltungsaufgaben in Arztpraxen automatisiert — medizinisches
              Personal entlasten und die Patientenversorgung optimieren.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Cloudbasierte Praxissoftware ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-violet/8 text-sm text-violet font-medium">
                <Cloud className="w-4 h-4" />
                SaaS-Plattform
              </div>
              <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
                Cloudbasierte Praxissoftware
              </h2>
              <p className="text-lg text-midnight/50 leading-relaxed mb-8">
                Unsere Lösung wird als Software-as-a-Service (SaaS) auf deutschen Servern bereitgestellt,
                spezialisiert auf medizinische Einrichtungen. So profitieren Sie datenschutzkonform von:
              </p>
            </div>

            <div className="space-y-4">
              {saasPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 p-5 rounded-xl bg-white border border-violet/5"
                >
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-midnight/70">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Funktionen im Überblick ─── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Funktionen im Überblick
            </h2>
          </div>

          <div className="space-y-16">
            {modules.map((mod, index) => (
              <div
                key={mod.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Bild oder Platzhalter */}
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-abyss to-midnight flex items-center justify-center overflow-hidden border border-violet/10 lg:[direction:ltr]">
                  {"image" in mod && mod.image ? (
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-midnight/60 flex flex-col items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-violet/20 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-violet" />
                      </div>
                      <p className="text-white/50 text-sm font-medium">Bild-Platzhalter</p>
                      <p className="text-white/30 text-xs">{mod.placeholderLabel}</p>
                    </div>
                  )}
                </div>

                {/* Beschreibung */}
                <div className="lg:[direction:ltr]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-violet/8 flex items-center justify-center">
                      <mod.icon className="w-5 h-5 text-violet" />
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl tracking-tight text-midnight">
                      {mod.title}
                    </h3>
                  </div>
                  <p className="text-midnight/60 leading-relaxed mb-6">
                    {mod.description}
                  </p>
                  <Link
                    href={mod.href}
                    className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.4)]"
                  >
                    {mod.linkText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-gradient-to-r from-violet/5 via-mauve/5 to-violet/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
            Interesse geweckt?
          </h2>
          <p className="text-lg text-midnight/50 mb-10">
            Wir zeigen Ihnen gerne in einer persönlichen Demo, wie unsere
            Lösungen Ihren Praxisalltag vereinfachen können.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_32px_rgba(46,125,142,0.4)] hover:-translate-y-0.5"
          >
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
