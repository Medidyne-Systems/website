import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FolderOpen, Search, Tag, ShieldCheck } from "lucide-react";
import heroBg from "../../../../public/images/hero_bg.png";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Dokumenten-Management",
  description:
    "Zentrale Verwaltung und Organisation medizinischer Dokumente und Befunde.",
};

const features = [
  {
    icon: FolderOpen,
    title: "Zentrale Ablage",
    description: "Alle Befunde, Berichte und Dokumente Ihrer Praxis an einem Ort — strukturiert und schnell auffindbar.",
  },
  {
    icon: Tag,
    title: "Kategorisierung",
    description: "Ordnen Sie Dokumente nach Typ, Patient, Datum oder eigenen Kategorien — flexible Verschlagwortung inklusive.",
  },
  {
    icon: Search,
    title: "Schnelle Suche",
    description: "Finden Sie jedes Dokument in Sekunden über die Volltextsuche und intelligente Filteroptionen.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-konform",
    description: "Sichere Speicherung mit Zugriffskontrollen und vollständiger Revisionsfähigkeit.",
  },
];

export default function DokumentenManagementPage() {
  return (
    <>
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop-module px-8 py-5 relative">
            <div className="absolute top-3 right-3">
              <StatusBadge status="available" size="sm" />
            </div>
            <p className="module-label text-base font-semibold uppercase tracking-widest text-white mb-3">
              EmMa Modul · Dokumente
            </p>
            <h1 className="hero-title-shadow font-display text-2xl lg:text-4xl tracking-tight text-white mb-3">
              Dokumenten-Management
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Zentrale, strukturierte Ablage für Praxis-Dokumente.
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
              Behalten Sie den Überblick über alle Befunde, Berichte und Dokumente Ihrer Praxis.
              Das Dokumenten-Management-Modul bietet eine zentrale, strukturierte Ablage
              mit schnellem Zugriff.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
