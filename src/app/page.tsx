import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Shield,
  Cloud,
  RefreshCcw,
  ArrowRight,
  CheckCircle,
  Settings,
  Wrench,
  Stethoscope,
  Server,
  Cpu,
  Lock,
} from "lucide-react";
import heroBg from "../../public/images/hero_bg.png";
import terminal4 from "../../public/images/terminal_4.jpeg";
import { availableModules, inDevelopmentModules } from "@/data/modules";

const efficiencyPoints = [
  "Optimierung der Praxisabläufe durch Software und KI-Technologie",
  "Verbesserung der Patientenversorgung durch automatisierte Prozesse",
  "Entlastung für Ärzte und medizinisches Fachpersonal",
];

const pillars = [
  {
    icon: Zap,
    title: "Effizientere Abläufe",
    description: "Digitalisieren, Automatisieren und Unterstützen damit Zeit für die wirklich wichtigen Dinge übrig bleibt",
  },
  {
    icon: Shield,
    title: "Sicherheit und Kontrolle",
    description: "Deutsche Server mit maximaler Datensicherheit auf mehreren Layern",
  },
  {
    icon: Cloud,
    title: "Software as a Service & Cloud",
    description:
      "Betrieb in einer professionellen deutschen Cloud-Infrastruktur. Zugriff über Browser — unabhängig von Endgerät und Standort.",
  },
  {
    icon: RefreshCcw,
    title: "Kontinuierliche Weiterentwicklung",
    description:
      "Automatische Updates ohne Unterbrechung des Praxisbetriebs. Die Anwendung wird kontinuierlich weiterentwickelt und funktional erweitert. Neue Features, Optimierungen und Anpassungen an regulatorische oder praxisrelevante Anforderungen werden regelmäßig bereitgestellt — automatisch und ohne Mehraufwand für die Praxis.",
  },
];

// Anwendungsfall ohne eigenes Modul — manuell gepflegt.
const extraUseCases = [
  { icon: Settings, text: "Zentrale Konfiguration von Praxis-Terminals" },
];

// Modul-Listen werden aus der zentralen Quelle src/data/modules.ts abgeleitet.
const availableUseCases = [
  ...availableModules.map((m) => ({ icon: m.useCaseIcon ?? m.icon, text: m.useCaseText })),
  ...extraUseCases,
];
const inDevelopmentUseCases = inDevelopmentModules.map((m) => ({
  icon: m.useCaseIcon ?? m.icon,
  text: m.useCaseText,
}));

const sovereigntyPoints = [
  {
    icon: Stethoscope,
    title: "Aus der Praxis entwickelt",
    description:
      "EmMa entsteht in einer Arztpraxis — von einem kleinen deutschen Startup, das den medizinischen Alltag aus eigener Erfahrung kennt.",
  },
  {
    icon: Server,
    title: "Hosting in Deutschland",
    description:
      "Betrieb in der StackIT-Cloud — deutsche Rechenzentren, deutsche Datenhoheit. Ihre Daten verlassen Deutschland nicht.",
  },
  {
    icon: Cpu,
    title: "Europäisches Sprachmodell",
    description:
      "Unsere KI arbeitet mit einem in Europa entwickelten Sprachmodell — keine Datenübermittlung an außereuropäische Anbieter.",
  },
  {
    icon: Lock,
    title: "Datenschutz an erster Stelle",
    description:
      "Der Schutz sensibler Patientendaten ist unsere höchste Priorität — von der Architektur bis zum laufenden Betrieb.",
  },
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
              { title: "Effizienz steigern", desc: "Von der Patientenaufname bis zur Abrechnungs-Optimierung. Alles auf einer Plattform" },
              { title: "Innovative Lösungen", desc: "Verbesserung der Patientenversorgung durch automatisierte und unterstützende Prozesse" },
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
                Optimieren Sie Anmeldung, Patientensteuerung und
                Praxisabläufe mit einer cloudbasierten SaaS-Lösung — sicher,
                wartungsarm und speziell für den professionellen Einsatz im
                medizinischen Alltag entwickelt.
              </p>
              <p className="text-midnight/55 leading-relaxed mb-8">
                Unsere Lösung unterstützt Arztpraxen bei der digitalen
                Organisation von Patienten- und Benutzerprozessen. Von Self-Check-In am
                Terminal bis hin zur Abrechnungs-Optimierung — alle Funktionen sind praxisnah, effizient und
                datenschutzkonform konzipiert.
              </p>

              <div className="space-y-3 mb-6">
                {availableModules.map((mod) => (
                  <div key={mod.slug} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                    <span className="text-midnight/70">{mod.homepageBullet}</span>
                  </div>
                ))}
              </div>

              {/* ─── Sub-Block: In Entwicklung ─── */}
              <div className="rounded-xl border border-mauve/15 bg-mauve/5 p-4 mb-6">
                <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 rounded-full bg-mauve/15 text-xs text-mauve font-medium">
                  <Wrench className="w-3.5 h-3.5" />
                  In Entwicklung
                </div>
                <div className="space-y-2">
                  {inDevelopmentModules.map((mod) => (
                    <div key={mod.slug} className="flex items-start gap-3">
                      <Wrench className="w-5 h-5 text-mauve shrink-0 mt-0.5" />
                      <span className="text-midnight/70">{mod.homepageBullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-midnight/50 italic mb-8">
                → Das Resultat: spürbare Reduzierung administrativer Tätigkeiten.
              </p>

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
            {availableUseCases.map((uc) => (
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

          {/* ─── Sub-Block: In Entwicklung ─── */}
          <div className="max-w-3xl mx-auto mt-10">
            <div className="rounded-2xl border border-mauve/15 bg-mauve/5 p-6">
              <div className="flex items-center justify-center gap-2 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mauve/15 text-sm text-mauve font-medium">
                  <Wrench className="w-4 h-4" />
                  In Entwicklung
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inDevelopmentUseCases.map((uc) => (
                  <div
                    key={uc.text}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-mauve/10"
                  >
                    <div className="w-9 h-9 rounded-lg bg-mauve/10 flex items-center justify-center shrink-0">
                      <uc.icon className="w-4 h-4 text-mauve" />
                    </div>
                    <span className="text-sm font-medium text-midnight/70">
                      {uc.text}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-midnight/45 mt-4 text-center">
                Diese Module bauen wir gerade —{" "}
                <Link href="/roadmap" className="text-mauve hover:text-mauve-light underline-offset-4 hover:underline">
                  zur Roadmap
                </Link>
                .
              </p>
            </div>
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

      {/* ─── Souveränität & Datenschutz ─── */}
      <section className="relative py-16 bg-gradient-to-br from-midnight to-void overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-lavender mb-3">
              Souveränität & Datenschutz
            </p>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-white">
              In Deutschland entwickelt, in Deutschland gehostet
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sovereigntyPoints.map((point) => (
              <div key={point.title} className="glass rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-violet/15 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-lavender" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {point.description}
                </p>
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
