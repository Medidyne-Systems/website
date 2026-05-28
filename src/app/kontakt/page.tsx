import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import heroBg from "../../../public/images/hero_bg.png";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Medidyne Systems — wir stellen Ihnen gerne unsere KI-Lösungen für Arztpraxen vor.",
};

const mailtoHref = `mailto:kontakt@medidyne-systems.de?subject=${encodeURIComponent(
  "Anfrage über die Website"
)}`;

export default function KontaktPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[280px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroBg.src}')` }}
        />
        <div className="absolute inset-0 bg-midnight/40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop px-8 py-5">
            <h1 className="font-display text-2xl lg:text-3xl tracking-tight text-white mb-3">
              Kontaktieren Sie uns
            </h1>
            <p className="hero-text-shadow text-sm text-black leading-relaxed max-w-2xl mx-auto">
              Wir freuen uns auf Ihre Anfrage und stellen Ihnen gerne unsere
              Lösungen vor, um Verwaltungsaufgaben in Ihrer Arztpraxis zu
              automatisieren.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Mailto-Karte + Kontaktdaten ─── */}
      <section className="py-16 bg-snow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Mailto Card */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white border border-violet/5 p-10 lg:p-12 shadow-sm text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-violet/10 flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-violet" />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight mb-4">
                  Schreiben Sie uns
                </h2>
                <p className="text-midnight/55 leading-relaxed max-w-md mx-auto mb-8">
                  Erzählen Sie uns kurz, wofür Sie sich interessieren — wir
                  melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <a
                  href={mailtoHref}
                  className="group inline-flex items-center gap-2 bg-violet hover:bg-iris text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_32px_rgba(46,125,142,0.4)] hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  E-Mail an uns schreiben
                </a>
                <p className="text-xs text-midnight/40 mt-6">
                  Öffnet Ihr E-Mail-Programm mit{" "}
                  <span className="text-violet">kontakt@medidyne-systems.de</span>{" "}
                  als Empfänger.
                </p>
              </div>
            </div>

            {/* Kontaktdaten Sidebar */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-white border border-violet/5 p-8 shadow-sm">
                <h3 className="font-semibold text-midnight mb-6">
                  Kontaktdaten
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-midnight">Adresse</p>
                      <p className="text-sm text-midnight/50 mt-1">
                        Medidyne Systems GmbH
                        <br />
                        Nürtingen Str. 52
                        <br />
                        72074 Tübingen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-violet shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-midnight">E-Mail</p>
                      <a
                        href="mailto:kontakt@medidyne-systems.de"
                        className="text-sm text-violet hover:text-iris transition-colors mt-1 block"
                      >
                        kontakt@medidyne-systems.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-violet to-iris p-8 text-white">
                <h3 className="font-semibold mb-3">Kostenlose Demo</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Erleben Sie unsere Lösungen live in einer persönlichen
                  Demo-Session. Schreiben Sie uns einfach — wir melden uns
                  innerhalb von 24 Stunden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
