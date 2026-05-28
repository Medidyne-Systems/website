import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Wrench } from "lucide-react";
import heroBg from "../../../public/images/hero_bg.png";
import { inDevelopmentModules, plannedModules } from "@/data/modules";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Roadmap der EmMa-Plattform — was wir gerade bauen und welche Module als nächstes kommen.",
};

export default function RoadmapPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop px-8 py-5">
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Roadmap
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Was wir gerade bauen und welche Module als nächstes kommen.
              Transparenz über den Entwicklungsstand der EmMa-Plattform.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── In Entwicklung ─── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-mauve/15 text-sm text-mauve font-medium">
              <Wrench className="w-4 h-4" />
              Aktiv
            </div>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              In Entwicklung
            </h2>
            <p className="mt-3 text-base text-midnight/55 max-w-2xl mx-auto">
              An diesen Modulen arbeiten wir gerade. Sie sind noch nicht Teil der
              ausgelieferten Basisfunktion.
            </p>
          </div>

          {inDevelopmentModules.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {inDevelopmentModules.map((mod) => (
                <div
                  key={mod.slug}
                  className="p-6 rounded-xl bg-snow border border-mauve/10"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-mauve/10 flex items-center justify-center shrink-0">
                      <mod.icon className="w-5 h-5 text-mauve" />
                    </div>
                    <StatusBadge status={mod.status} size="sm" />
                  </div>
                  <h3 className="text-lg font-semibold text-midnight mb-1">
                    {mod.displayName}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-midnight/35 mb-3">
                    EmMa-Modul · {mod.internalName}
                  </p>
                  <p className="text-sm text-midnight/55 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-midnight/40 italic">
              Aktuell sind keine Module in Entwicklung.
            </p>
          )}
        </div>
      </section>

      {/* ─── Geplant ─── */}
      <section className="py-16 lg:py-20 bg-snow">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-mist/40 text-sm text-iris font-medium">
              <Calendar className="w-4 h-4" />
              Vorausblick
            </div>
            <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight">
              Geplant
            </h2>
            <p className="mt-3 text-base text-midnight/55 max-w-2xl mx-auto">
              Module, die wir als nächstes angehen wollen.
            </p>
          </div>

          {plannedModules.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {plannedModules.map((mod) => (
                <div
                  key={mod.slug}
                  className="p-6 rounded-xl bg-white border border-iris/10"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-mist/40 flex items-center justify-center shrink-0">
                      <mod.icon className="w-5 h-5 text-iris" />
                    </div>
                    <StatusBadge status={mod.status} size="sm" />
                  </div>
                  <h3 className="text-lg font-semibold text-midnight mb-1">
                    {mod.displayName}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-midnight/35 mb-3">
                    EmMa-Modul · {mod.internalName}
                  </p>
                  <p className="text-sm text-midnight/55 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-midnight/40 italic max-w-xl mx-auto">
              Weitere Module sind in Planung — die Roadmap wird laufend aktualisiert.
            </p>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-gradient-to-r from-violet/5 via-mauve/5 to-violet/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl tracking-tight text-midnight mb-6">
            Ein Modul, das es noch nicht gibt?
          </h2>
          <p className="text-lg text-midnight/50 mb-10">
            Sie haben eine Idee für ein Modul, das Ihre Praxis entlasten könnte?
            Sprechen Sie uns an — wir entwickeln EmMa konsequent aus dem Praxisalltag heraus.
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
