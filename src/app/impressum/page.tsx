import type { Metadata } from "next";
import heroBg from "../../../public/images/hero_bg.png";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Medidyne Systems GmbH, Tübingen.",
};

export default function ImpressumPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[280px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroBg.src}')` }} />
        <div className="absolute inset-0 bg-midnight/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-[4.5rem] pb-6 w-full text-center">
          <div className="hero-backdrop px-8 py-5">
            <h1 className="font-display text-2xl lg:text-3xl tracking-tight text-white">
              Impressum
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-snow to-transparent" />
      </section>

      {/* ─── Content ─── */}
      <section className="py-20 bg-snow">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose-custom space-y-10">
            {/* Company */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="text-midnight/60 leading-relaxed">
                Medidyne Systems GmbH
                <br />
                Nürtingen Str. 52
                <br />
                72074 Tübingen
              </p>
            </div>

            <div className="section-divider" />

            {/* Management */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Vertreten durch
              </h2>
              <p className="text-midnight/60">
                Eduard Warth, Dr. med. Christian Fuchs, Bettina Schindler
              </p>
            </div>

            <div className="section-divider" />

            {/* Contact */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Kontakt
              </h2>
              <p className="text-midnight/60">
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

            {/* Registration */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Handelsregistereintrag
              </h2>
              <p className="text-midnight/60">
                Registergericht: Stuttgart
                <br />
                Registernummer: HRB 799836
              </p>
            </div>

            <div className="section-divider" />

            {/* Tax */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="text-midnight/60">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz: DE454265901
              </p>
            </div>

            <div className="section-divider" />

            {/* Disclaimer */}
            <div>
              <h2 className="font-display text-2xl text-midnight mb-4">
                Haftungsausschluss
              </h2>

              <h3 className="text-lg font-semibold text-midnight mt-6 mb-3">
                Haftung für Inhalte
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und
                Aktualität der Inhalte können wir jedoch keine Gewähr
                übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
                DDG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG
                sind wir als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach
                den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-lg font-semibold text-midnight mt-6 mb-3">
                Haftung für Links
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-lg font-semibold text-midnight mt-6 mb-3">
                Urheberrecht
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke
                auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                erstellt wurden, werden die Urheberrechte Dritter beachtet.
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Inhalte umgehend entfernen.
              </p>

              <h3 className="text-lg font-semibold text-midnight mt-6 mb-3">
                Datenschutz
              </h3>
              <p className="text-midnight/60 leading-relaxed">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe
                personenbezogener Daten möglich. Soweit auf unseren Seiten
                personenbezogene Daten (beispielsweise Name, Anschrift oder
                eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
                ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
              <p className="text-midnight/60 leading-relaxed mt-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet
                (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                Zugriff durch Dritte ist nicht möglich.
              </p>
              <p className="text-midnight/60 leading-relaxed mt-4">
                Der Nutzung von im Rahmen der Impressumspflicht
                veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
                nicht ausdrücklich angeforderter Werbung und
                Informationsmaterialien wird hiermit ausdrücklich
                widersprochen. Die Betreiber der Seiten behalten sich
                ausdrücklich rechtliche Schritte im Falle der unverlangten
                Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>
            </div>

            <p className="text-xs text-midnight/40 leading-relaxed">
              Impressum von WebsiteWissen.com, dem Ratgeber für
              WordPress-Websites, WordPress-Hosting und Website-Kosten nach
              einem Muster von Kanzlei Hasselbach Rechtsanwälte.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
