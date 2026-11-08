import type { Metadata } from "next";
import heroBg from "../../../public/images/hero_bg.png";

export const metadata: Metadata = {
  title: "Datenschutzrichtlinie",
  description: "Datenschutzrichtlinie der Medidyne Systems GmbH.",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop px-8 py-5">
            <h1 className="font-display text-2xl lg:text-3xl tracking-tight text-white">
              Datenschutzrichtlinie
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Content ─── */}
      <section className="py-20 bg-snow">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-10">
            {/* Responsible */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Verantwortliche Stelle
              </h2>
              <p className="text-midnight/60 leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website
                ist:
              </p>
              <p className="text-midnight/60 leading-relaxed mt-3">
                Medidyne Systems GmbH
                <br />
                Nürtinger Str. 52
                <br />
                72074 Tübingen
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:kontakt@medidyne-systems.de"
                  className="text-violet hover:text-iris transition-colors"
                >
                  kontakt@medidyne-systems.de
                </a>
              </p>
            </div>

            <div className="section-divider" />

            {/* Data Collection */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Erfassung von Daten
              </h2>
              <p className="text-midnight/60 leading-relaxed mb-4">
                Beim Besuch unserer Website werden automatisch Informationen
                erfasst, die Ihr Browser an unseren Server übermittelt. Dazu
                gehören:
              </p>
              <ul className="space-y-2">
                {[
                  "Webbrowser und verwendete Version",
                  "Betriebssystem des Nutzers",
                  "IP-Adresse des zugreifenden Rechners",
                  "Zeitzone und Uhrzeit des Zugriffs",
                  "Informationen über installierte Cookies",
                  "Navigationsverhalten auf der Website",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-midnight/60"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-divider" />

            {/* Purpose */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Zweck der Verarbeitung
              </h2>
              <p className="text-midnight/60 leading-relaxed">
                Die Verarbeitung der genannten Daten dient der Erkennung
                potenzieller Missbrauchsfälle und zur Erstellung
                statistischer Daten zur Website-Nutzung. Diese Informationen
                werden nicht dazu verwendet, den Nutzer persönlich zu
                identifizieren.
              </p>
              <p className="text-midnight/60 leading-relaxed mt-4">
                Darüber hinaus können Nutzer freiwillig personenbezogene
                Daten wie E-Mail-Adresse, Name, Adresse und Telefonnummer
                bereitstellen — beispielsweise über das Kontaktformular.
                Diese Daten werden ausschließlich zur Bearbeitung Ihrer
                Anfrage verwendet und ohne Ihre Zustimmung nicht an Dritte
                weitergegeben.
              </p>
            </div>

            <div className="section-divider" />

            {/* EU Rights */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Ihre Rechte (EU-Bürger)
              </h2>
              <p className="text-midnight/60 leading-relaxed mb-4">
                Als EU-Bürger haben Sie folgende Rechte in Bezug auf Ihre
                personenbezogenen Daten:
              </p>
              <ul className="space-y-2">
                {[
                  "Recht auf Auskunft und Information",
                  "Recht auf Berichtigung unrichtiger Daten",
                  "Recht auf Löschung Ihrer Daten",
                  "Recht auf Datenübertragbarkeit",
                  "Recht auf Widerspruch gegen die Verarbeitung",
                  "Recht auf Kontrolle über automatisierte Entscheidungsfindung",
                ].map((right) => (
                  <li
                    key={right}
                    className="flex items-start gap-3 text-midnight/60"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet/60 shrink-0" />
                    {right}
                  </li>
                ))}
              </ul>
              <p className="text-midnight/60 leading-relaxed mt-4">
                Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren
                Sie uns bitte unter{" "}
                <a
                  href="mailto:kontakt@medidyne-systems.de"
                  className="text-violet hover:text-iris transition-colors"
                >
                  kontakt@medidyne-systems.de
                </a>
                .
              </p>
            </div>

            <div className="section-divider" />

            {/* Security */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Datensicherheit
              </h2>
              <p className="text-midnight/60 leading-relaxed">
                Wir schützen Ihre Informationen auf Computerservern in einer
                kontrollierten, sicheren Umgebung. Zum Schutz vor
                unbefugtem Zugriff, unbefugter Nutzung oder Offenlegung
                ergreifen wir angemessene administrative, technische und
                physische Sicherheitsvorkehrungen.
              </p>
            </div>

            <div className="section-divider" />

            {/* Contact */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Kontakt zum Datenschutz
              </h2>
              <p className="text-midnight/60 leading-relaxed">
                Bei Fragen zum Datenschutz erreichen Sie uns unter:{" "}
                <a
                  href="mailto:kontakt@medidyne-systems.de"
                  className="text-violet hover:text-iris transition-colors"
                >
                  kontakt@medidyne-systems.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
