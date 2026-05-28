import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import heroBg from "../../../../public/images/hero_bg.png";
import terminal1 from "../../../../public/images/terminal_1.jpeg";
import terminal2 from "../../../../public/images/terminal_2.jpeg";
import terminal3 from "../../../../public/images/terminal_3.jpeg";
import terminal4 from "../../../../public/images/terminal_4.jpeg";
import terminal5 from "../../../../public/images/terminal_5.jpeg";
import terminal6 from "../../../../public/images/terminal_6.jpeg";
import {
  ArrowRight,
  UserCheck,
  Clock,
  Hand,
  Settings,
  Palette,
  Monitor,
  Users,
  Shield,
  Sliders,
  Touchpad,
  Volume2,
  Wifi,
  Navigation,
  CreditCard,
  HardDrive,
  Anchor,
} from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Self-Check-In Terminal",
  description:
    "Self-Check-In Terminal für Patienten — schneller, kontaktarmer und intuitiver Praxisempfang mit Touchscreen-basierter Selbstanmeldung.",
};

const benefits = [
  {
    icon: UserCheck,
    title: "Entlastung des Praxispersonals",
    description: "Automatisierte Anmeldung reduziert den Arbeitsaufwand an der Rezeption deutlich.",
  },
  {
    icon: Clock,
    title: "Verkürzte Wartezeiten",
    description: "Optimierter Patientenfluss durch parallele Selbstanmeldung mehrerer Patienten.",
  },
  {
    icon: Hand,
    title: "Intuitive Bedienung",
    description: "Einfache Touch-Oberfläche, die für alle Altersgruppen verständlich und zugänglich ist.",
  },
  {
    icon: Settings,
    title: "Zentrale Administration",
    description: "Einfache Konfiguration und Verwaltung aller Terminals über ein zentrales Backend.",
  },
  {
    icon: Palette,
    title: "Individuell anpassbar",
    description: "Praxisindividuelle Workflows, Inhalte und Designs für Ihr Corporate Design.",
  },
  {
    icon: Monitor,
    title: "Modernes Terminaldesign",
    description: "Hochwertiges Standterminal mit großformatigem Hochformat-Touchscreen.",
  },
];

const techFeatures = [
  {
    category: "Patienteninteraktion",
    icon: Touchpad,
    items: [
      "Digitale Selbstanmeldung am Terminal",
      "Geführte Navigation durch den Check-In-Prozess",
      "Anpassbare Inhalte und Formulare",
      "Avatar- und Sprachnavigation für Barrierearmut",
    ],
  },
  {
    category: "Benutzer- & Rollenverwaltung",
    icon: Users,
    items: [
      "Mehrstufiges Rollenmodell (Administrator, Arzt, MFA)",
      "Zentrale Benutzerverwaltung",
      "Individuelle Berechtigungen pro Rolle",
      "Sichere Authentifizierung",
    ],
  },
  {
    category: "Administration & Konfiguration",
    icon: Sliders,
    items: [
      "Zentrales Backend zur Einstellung",
      "Praxisindividuelle Workflows",
      "Verwaltung mehrerer Terminals",
      "Echtzeit-Monitoring über Wartelisten und Kontingent-Kontrolle",
    ],
  },
  {
    category: "Benutzeroberfläche",
    icon: Shield,
    items: [
      "Touch-optimiertes User Interface",
      "Avatar- und Sprachnavigation",
      "Fokus auf Barrierearmut",
      "Responsive Design für verschiedene Bildschirmgrößen",
    ],
  },
];

const hardwareSpecs = [
  { icon: Monitor, label: "Großformatiger Hochformat-Touchscreen" },
  { icon: Wifi, label: "Integrierter Switch zur nahtlosen Integration ins Praxisnetz" },
  { icon: Navigation, label: "Sauberes Design" },
  { icon: CreditCard, label: "Halterung für Kartenlesegerät (Cherry ST 1506)" },
  { icon: Volume2, label: "Integrierte Soundbar" },
  { icon: Anchor, label: "Stabile Bodenmontage möglich" },
];

export default function SelfCheckInPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5 relative">
            <div className="absolute top-3 right-3">
              <StatusBadge status="available" size="sm" />
            </div>
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Terminal
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Self-Check-In Terminal für Patienten
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Schneller, kontaktarmer Praxisempfang per Touchscreen.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Funktionen
            </h2>
            <p className="mt-4 text-base text-midnight/60 leading-relaxed max-w-2xl mx-auto">
              Ermöglichen Sie einen schnellen, kontaktarmen und intuitiven
              Praxisempfang. Die Touchscreen-basierte Selbstanmeldung ist
              speziell für den medizinischen Einsatz konzipiert: klar
              strukturiert, barrierearm und individuell anpassbar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-xl bg-snow border border-violet/5"
              >
                <div className="w-10 h-10 rounded-lg bg-violet/8 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-violet" />
                </div>
                <h3 className="text-lg font-semibold text-midnight mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-midnight/55 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Features ─── */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-midnight to-void overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Technische Details
            </p>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-white">
              Systemfunktionen
            </h2>
            <p className="mt-4 text-lg text-white/40 max-w-2xl mx-auto">
              Das System basiert auf einer webbasierten Applikation mit
              zentraler Benutzer- und Rollenverwaltung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techFeatures.map((tf) => (
              <div key={tf.category} className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-violet/15 flex items-center justify-center">
                    <tf.icon className="w-5 h-5 text-violet" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {tf.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tf.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/45"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Terminal Galerie ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Impressionen
            </p>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Das Terminal im Einsatz
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[terminal1, terminal2, terminal3, terminal4, terminal5, terminal6].map(
              (img, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-violet/5 hover:shadow-xl hover:shadow-violet/5 transition-all duration-500"
                >
                  <Image
                    src={img}
                    alt={`Self-Check-In Terminal Ansicht ${i + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── Architecture ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
                Architektur
              </p>
              <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
                Systemarchitektur
              </h2>
              <p className="text-lg text-midnight/50 leading-relaxed mb-6">
                Unsere Lösung basiert auf einer modernen, webbasierten
                Architektur mit zentraler Backend-Konfiguration. Das System
                ist erweiterbar und updatefähig — neue Funktionen werden
                automatisch ausgerollt.
              </p>
              <div className="space-y-4">
                {[
                  "Webbasierte Anwendung — kein Client-Install nötig",
                  "Zentrale Backend-Konfiguration für alle Terminals",
                  "Erweiterbar durch modulare Architektur",
                  "Automatische Updates ohne Praxis-Downtime",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-violet shrink-0" />
                    <span className="text-midnight/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Architecture Diagram */}
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-midnight to-void p-8 border border-white/5">
                <div className="space-y-4">
                  <div className="glass rounded-xl p-4 text-center">
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Frontend</p>
                    <p className="text-sm font-medium text-white/70">Touch-optimiertes Web-Interface</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-violet/30" />
                  </div>
                  <div className="glass rounded-xl p-4 text-center">
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Backend</p>
                    <p className="text-sm font-medium text-white/70">Zentrale API & Konfiguration</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-violet/30" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Benutzerverwaltung", "Terminaldaten", "Analytics"].map((label) => (
                      <div key={label} className="glass rounded-lg p-3 text-center">
                        <p className="text-xs text-white/50">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Hardware ─── */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-void to-midnight overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Hardware
            </p>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-white">
              Terminal-Spezifikationen
            </h2>
            <p className="mt-4 text-lg text-white/40 max-w-2xl mx-auto">
              Robustes Standterminal mit professioneller Ausstattung für den
              Dauerbetrieb im Praxisempfang.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareSpecs.map((spec) => (
              <div
                key={spec.label}
                className="glass rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-violet/15 flex items-center justify-center shrink-0">
                  <spec.icon className="w-5 h-5 text-violet" />
                </div>
                <span className="text-sm font-medium text-white/65">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-snow">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
            Self-Check-In live erleben
          </h2>
          <p className="text-lg text-midnight/50 mb-10">
            Überzeugen Sie sich selbst von der einfachen Bedienung und den
            Vorteilen für Ihre Praxis. Wir bieten Ihnen eine kostenlose Demo.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_32px_rgba(46,125,142,0.4)] hover:-translate-y-0.5"
          >
            Demo vereinbaren
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
