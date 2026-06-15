import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import logoMedidyne from "../../public/images/logo_medidyne.png";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-white/5">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src={logoMedidyne}
                alt="Medidyne Systems"
                width={180}
                height={45}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              Prozessdigitalisierung und Automatisierung
              für moderne Arztpraxen.
            </p>
            <p className="text-xs mt-4 text-white/25">
              Ein Produkt der Medidyne Systems GmbH
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Startseite", href: "/" },
                { label: "Philosophie", href: "/philosophie" },
                { label: "KI Lösungen", href: "/ki-loesungen" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-violet shrink-0" />
                <span className="text-sm">
                  Nürtingen Str. 52<br />
                  72074 Tübingen
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-violet shrink-0" />
                <a
                  href="mailto:kontakt@medidyne-systems.de"
                  className="text-sm hover:text-white transition-colors"
                >
                  kontakt@medidyne-systems.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Medidyne Systems GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-xs hover:text-white/60 transition-colors text-white/25"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs hover:text-white/60 transition-colors text-white/25"
            >
              Datenschutzrichtlinie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
