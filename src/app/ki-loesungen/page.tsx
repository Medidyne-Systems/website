import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Cloud, ArrowRight, CheckCircle, ImageIcon, Wrench } from "lucide-react";
import heroBg from "../../../public/images/hero_bg.png";
import { availableModules, inDevelopmentModules } from "@/data/modules";
import { StatusBadge } from "@/components/StatusBadge";

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
            <p className="mt-3 text-base text-midnight/50">
              Diese Module sind heute verfügbar und Teil der EmMa-Basisfunktion.
            </p>
          </div>

          <div className="space-y-16">
            {availableModules.map((mod, index) => (
              <div
                key={mod.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Bild oder Platzhalter */}
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-abyss to-midnight flex items-center justify-center overflow-hidden border border-violet/10 lg:[direction:ltr]">
                  {mod.image ? (
                    <Image
                      src={mod.image}
                      alt={mod.displayName}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-midnight/60 flex flex-col items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-violet/20 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-violet" />
                      </div>
                      <p className="text-white/50 text-sm font-medium">Bild-Platzhalter</p>
                      <p className="text-white/30 text-xs">{mod.displayName}</p>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <StatusBadge status={mod.status} size="sm" />
                  </div>
                </div>

                {/* Beschreibung */}
                <div className="lg:[direction:ltr]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-violet/8 flex items-center justify-center">
                      <mod.icon className="w-5 h-5 text-violet" />
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl tracking-tight text-midnight">
                      {mod.displayName}
                    </h3>
                  </div>
                  <p className="text-midnight/60 leading-relaxed mb-6">
                    {mod.description}
                  </p>
                  <Link
                    href={`/ki-loesungen/${mod.slug}`}
                    className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(46,125,142,0.4)]"
                  >
                    {mod.linkText ?? `Mehr zu ${mod.displayName}`}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Ausblick: In Entwicklung ─── */}
      {inDevelopmentModules.length > 0 && (
        <section className="py-16 lg:py-20 bg-snow">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-mauve/15 text-sm text-mauve font-medium">
                <Wrench className="w-4 h-4" />
                Ausblick
              </div>
              <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight mb-3">
                Module in Entwicklung
              </h2>
              <p className="text-base text-midnight/55 max-w-2xl mx-auto">
                Diese Module bauen wir aktuell — sie sind noch nicht Teil der
                Basisfunktion. Auf der Roadmap zeigen wir, woran wir gerade arbeiten
                und was als nächstes kommt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {inDevelopmentModules.map((mod) => (
                <div
                  key={mod.slug}
                  className="p-6 rounded-xl bg-white border border-mauve/10"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-mauve/10 flex items-center justify-center shrink-0">
                      <mod.icon className="w-5 h-5 text-mauve" />
                    </div>
                    <StatusBadge status={mod.status} size="sm" />
                  </div>
                  <h3 className="text-lg font-semibold text-midnight mb-2">
                    {mod.displayName}
                  </h3>
                  <p className="text-sm text-midnight/55 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/roadmap"
                className="group inline-flex items-center gap-2 bg-mauve hover:bg-mauve-light text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(142,107,135,0.35)]"
              >
                Zur Roadmap
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      )}

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
