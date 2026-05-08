import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Shield,
  Cloud,
  RefreshCcw,
  ArrowRight,
  CheckCircle,
  Monitor,
  Settings,
  FileText,
  FileCheck,
  Users,
  Heart,
  ClipboardCheck,
  Lightbulb,
} from "lucide-react";
import heroBg from "../../public/images/hero_bg.png";
import terminal4 from "../../public/images/terminal_4.jpeg";

const efficiencyPoints = [
  "Optimierung der Praxisabläufe durch Software und KI-Technologie",
  "Verbesserung der Patientenversorgung durch automatisierte Prozesse",
  "Entlastung für Ärzte und medizinisches Fachpersonal",
];

const pillars = [
  {
    icon: Zap,
    title: "Effizientere Abläufe",
    description: "Zentrale Verwaltung von Benutzern und Rollen.",
  },
  {
    icon: Shield,
    title: "Sicherheit und Kontrolle",
    description: "Klare Zugriffsbeschränkungen je nach Funktion.",
  },
  {
    icon: Cloud,
    title: "Software as a Service & Cloud",
    description:
      "Betrieb in einer professionellen Cloud-Infrastruktur. Keine lokale Installation oder Wartung erforderlich. Zugriff über Browser — unabhängig von Endgerät und Standort.",
  },
  {
    icon: RefreshCcw,
    title: "Kontinuierliche Weiterentwicklung",
    description:
      "Automatische Updates ohne Unterbrechung des Praxisbetriebs. Die Anwendung wird kontinuierlich weiterentwickelt und funktional erweitert. Neue Features, Optimierungen und Anpassungen an regulatorische oder praxisrelevante Anforderungen werden regelmäßig bereitgestellt — automatisch und ohne Mehraufwand für die Praxis.",
  },
];

const useCases = [
  { icon: Monitor, text: "Digitaler Self-Check-In für Patienten" },
  { icon: Settings, text: "Zentrale Konfiguration von Praxis-Terminals" },
  { icon: FileText, text: "Unterstützung zur Sprechstundendokumentation" },
  { icon: FileCheck, text: "Unterstützung bei der Gutachtenerstellung" },
  { icon: Users, text: "Vereinfachter Wartezimmeraufruf" },
  { icon: FileCheck, text: "Eigens konfigurierbare Prüfung und Optimierung der Abrechnung" },
  { icon: ClipboardCheck, text: "Hilfe bei der Dienstplanerstellung und Pflege" },
];

const trustPoints = [
  { icon: Heart, text: "Entwickelt für den Einsatz im medizinischen Umfeld" },
  { icon: ClipboardCheck, text: "Berücksichtigung praxisrelevanter Workflows" },
  { icon: Lightbulb, text: "Einsatz von KI, datenschutzkonform auf deutschen Servern" },
  { icon: Shield, text: "Fokus auf Sicherheit, Stabilität und Erweiterbarkeit" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[280px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroBg.src}')` }}
        />
        <div className="absolute inset-0 bg-midnight/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full">
          <div className="hero-backdrop px-8 py-6">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="hero-title-shadow font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight text-white mb-4">
                Prozessdigitalisierung und Automatisierung
                für moderne Arztpraxen
              </h1>

              <p className="hero-text-shadow text-sm sm:text-base text-black max-w-2xl mx-auto leading-relaxed">
                Entlasten Sie medizinisches Personal durch digitale Lösungen und
                schaffen Sie Zeit für wertschöpfende Aufgaben.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Drei Säulen ─── */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Effizienz steigern", desc: "Optimierung der Praxisabläufe durch KI-Technologie" },
              { title: "Innovative Lösungen", desc: "Verbesserung der Patientenversorgung durch automatisierte Prozesse" },
              { title: "KI-gestützte Automatisierung", desc: "Entlastung für Ärzte und medizinisches Fachpersonal" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl bg-snow border border-violet/5">
                <h3 className="text-lg font-semibold text-midnight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-midnight/55 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KI-gestützte Automatisierung ─── */}
      <section className="py-14 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight mb-6">
                KI-gestützte{" "}
                <span className="gradient-text-dark">Automatisierung</span>
              </h2>
              <p className="text-midnight/55 leading-relaxed mb-4">
                Optimieren Sie Anmeldung, Benutzerverwaltung und
                Praxisabläufe mit einer cloudbasierten SaaS-Lösung — sicher,
                wartungsarm und speziell für den professionellen Einsatz im
                medizinischen Alltag entwickelt.
              </p>
              <p className="text-midnight/55 leading-relaxed mb-8">
                Unsere Lösung unterstützt Arztpraxen bei der digitalen
                Organisation von Patienten- und Benutzerprozessen. Von der
                rollenbasierten Benutzerverwaltung bis zum Self-Check-In am
                Terminal — alle Funktionen sind praxisnah, effizient und
                datenschutzkonform konzipiert.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-midnight/70">
                    Digitale Patientenanmeldung per Self-Check-In
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-midnight/70">
                    Aufrufsyste über Monitor im Wartezimmer
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-midnight/70">
                    KI gestützte Sprechstundendokumentation
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-midnight/70">
                    Gutachtenerstellung mit Hilfe von KI
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-midnight/70">
                    Abrechnungs-Optimierung welche individuell anpassbar ist
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-midnight/70">
                    Dienstplanerstellung und Management mit geringstem Aufwand
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                  <span className="text-midnight/70">
                    Reduzierung administrativer Tätigkeiten
                  </span>
                </div>
              </div>

              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.4)]"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={terminal4}
                alt="Self-Check-In Terminal in der Arztpraxis"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vier Säulen ─── */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Worauf wir aufbauen
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-snow border border-violet/5 hover:shadow-md hover:shadow-violet/5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-violet/8 flex items-center justify-center mb-3">
                  <pillar.icon className="w-4.5 h-4.5 text-violet" />
                </div>
                <h3 className="text-base font-semibold text-midnight mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-midnight/50 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Typische Anwendungsfälle ─── */}
      <section className="py-14 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Typische{" "}
              <span className="gradient-text-dark">Anwendungsfälle</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((uc) => (
              <div
                key={uc.text}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-violet/5 hover:shadow-md hover:shadow-violet/5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-violet/8 flex items-center justify-center shrink-0 group-hover:bg-violet/15 transition-colors">
                  <uc.icon className="w-4 h-4 text-violet" />
                </div>
                <span className="text-sm font-medium text-midnight/70">
                  {uc.text}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/ki-loesungen"
              className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.4)]"
            >
              Produktdetails ansehen
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Vertrauensaufbau ─── */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((tp) => (
              <div
                key={tp.text}
                className="flex items-start gap-3 p-5 rounded-xl bg-snow border border-violet/5"
              >
                <div className="w-9 h-9 rounded-lg bg-violet/8 flex items-center justify-center shrink-0">
                  <tp.icon className="w-4.5 h-4.5 text-violet" />
                </div>
                <span className="text-sm font-medium text-midnight/70 leading-relaxed pt-1.5">
                  {tp.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-14 bg-gradient-to-r from-violet/5 via-mauve/5 to-violet/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight mb-4">
            Bereit für die digitale Zukunft?
          </h2>
          <p className="text-base text-midnight/50 mb-8 max-w-xl mx-auto">
            Erfahren Sie, wie EmMa Ihre Praxis effizienter gestalten kann.
            Wir beraten Sie gerne persönlich.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.3)]"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
