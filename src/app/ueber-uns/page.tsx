import type { Metadata } from "next";
import Image from "next/image";
import heroBg from "../../../public/images/hero_bg.png";
import { Users, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie das Team hinter EmMa.AI kennen — interdisziplinäre Experten aus Medizin, IT und Betriebswirtschaft.",
};

const team = [
  {
    name: "Eduard Warth",
    role: "CEO",
    description:
      "Strategische Unternehmensführung und Geschäftsentwicklung mit Fokus auf nachhaltige Digitalisierungslösungen im Gesundheitswesen.",
    image: "https://placehold.co/400x400/0F2A33/4DA3B5?text=Foto%0AEduard+Warth",
  },
  {
    name: "Bettina Schindler",
    role: "CTO",
    description:
      "Technologische Vision und Produktentwicklung. Verantwortlich für die KI-Architektur und cloudbasierte Infrastruktur.",
    image: "https://placehold.co/400x400/0F2A33/4DA3B5?text=Foto%0ABettina+Schindler",
  },
  {
    name: "Dr. Christian Fuchs",
    role: "COO",
    description:
      "Operative Leitung und Qualitätssicherung. Medizinische Expertise für praxisnahe, bedarfsgerechte Lösungen.",
    image: "https://placehold.co/400x400/0F2A33/4DA3B5?text=Foto%0ADr.+Christian+Fuchs",
  },
];

const values = [
  {
    icon: Heart,
    title: "Patienten im Fokus",
    description:
      "Jede Lösung, die wir entwickeln, hat ein Ziel: die Versorgungsqualität für Patienten nachhaltig zu verbessern.",
  },
  {
    icon: Users,
    title: "Praxisnah entwickelt",
    description:
      "Unsere Produkte entstehen in enger Zusammenarbeit mit Arztpraxen — basierend auf echtem Feedback aus dem Alltag.",
  },
  {
    icon: TrendingUp,
    title: "Kontinuierlich besser",
    description:
      "Wir entwickeln unsere Lösungen stetig weiter, um den sich wandelnden Anforderungen des Gesundheitswesens gerecht zu werden.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop px-8 py-5">
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Prozessdigitalisierung und Automatisierung
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Mit einem interdisziplinären Team aus der Medizin, der IT und
              der Betriebswirtschaft entwickeln wir innovative KI-Lösungen,
              die das Gesundheitssystem unterstützen.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Team ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Unser Team
            </p>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Interdisziplinäre Expertise
            </h2>
            <p className="mt-4 text-lg text-midnight/50 max-w-2xl mx-auto">
              Mit einem Team aus Medizin, IT und Betriebswirtschaft entwickeln
              wir innovative KI-Lösungen für das Gesundheitssystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center p-8 rounded-2xl bg-white border border-violet/5 shadow-sm hover:shadow-xl hover:shadow-violet/5 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Portrait */}
                <div className="mx-auto w-28 h-28 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-midnight">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-violet mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-midnight/50 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Unternehmensbild ─── */}
      <section className="pb-16 lg:pb-20 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://placehold.co/1400x350/0F2A33/4DA3B5?text=Bild%3A+Team+bei+der+Arbeit+%2F+Büro+Medidyne+Systems"
              alt="Medidyne Systems Team"
              width={1400}
              height={350}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-midnight to-void overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-3">
              Unsere Werte
            </p>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-white">
              Woran wir glauben
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass rounded-2xl p-8 hover:bg-white/8 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-violet/15 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-violet" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
            Nachhaltige SaaS-Lösungen
          </h2>
          <p className="text-lg text-midnight/55 leading-relaxed mb-6">
            Unser Anspruch ist es, eine nachhaltige und zukunftsfähige
            SaaS-Lösung für Arztpraxen bereitzustellen. Kontinuierliche
            Weiterentwicklung ist strategischer Bestandteil unserer Arbeit.
          </p>
          <p className="text-lg text-midnight/55 leading-relaxed">
            Regelmäßig arbeiten wir Praxis-Feedback in neue Funktionen und
            Verbesserungen ein — so entstehen Lösungen, die den realen
            Bedürfnissen im medizinischen Alltag gerecht werden.
          </p>
        </div>
      </section>
    </>
  );
}
