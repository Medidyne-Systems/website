import type { StaticImageData } from "next/image";
import {
  Monitor,
  Users,
  Mic,
  FileCheck,
  FileText,
  Calculator,
  CalendarDays,
  FolderOpen,
  MessageSquare,
  Clock,
  MessageCircle,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

import terminal4 from "../../public/images/terminal_4.jpeg";
import sprechstundeDoku from "../../public/images/website_sprechstundedoku.jpg";
import wartezimmer from "../../public/images/wartezimmer.jpg";
import gutachten from "../../public/images/gutachten.jpg";
import dokumente from "../../public/images/dokumente.jpg";
import abrechnung from "../../public/images/abrechnung.jpg";
import dienstplan from "../../public/images/dienstplan.jpg";
import kommunikation from "../../public/images/kommunikation.jpg";

export type ModuleStatus = "available" | "in-development" | "planned";

export type Module = {
  slug: string;
  displayName: string;
  internalName: string;
  description: string;
  status: ModuleStatus;
  icon: LucideIcon;
  image?: StaticImageData;
  linkText?: string;
  /** Kurz-Stichpunkt für die Startseiten-Sektion „KI-gestützte Automatisierung". */
  homepageBullet: string;
  /** Stichpunkt für die Startseiten-Sektion „Typische Anwendungsfälle". */
  useCaseText: string;
  /** Optionales Icon-Override für den Anwendungsfall (Fallback: `icon`). */
  useCaseIcon?: LucideIcon;
};

export const modules: Module[] = [
  {
    slug: "self-check-in",
    displayName: "Self-Check-In Terminal",
    internalName: "Terminal",
    description:
      "Digitale Patientenanmeldung via Touchscreen-Terminal. Individualisierbare Check-In-Prozesse, Entlastung des Empfangsteams und optimierte Patientenführung.",
    status: "available",
    icon: Monitor,
    image: terminal4,
    linkText: "Weitere Details zum Terminal",
    homepageBullet: "Digitale Patientenanmeldung per Self-Check-In",
    useCaseText: "Digitaler Self-Check-In für Patienten",
  },
  {
    slug: "patienten-aufruf",
    displayName: "Patienten-Aufruf",
    internalName: "Wartezimmer",
    description:
      "Digitales Aufruf-System für das Wartezimmer. Patienten werden über Bildschirm und Sprachansage ins richtige Zimmer gerufen — ausgelöst aus Ihrem Praxissystem oder direkt in EmMa.",
    status: "available",
    icon: Users,
    image: wartezimmer,
    linkText: "Mehr zum Patienten-Aufruf",
    homepageBullet: "Aufrufsystem über Monitor und Sprachansage im Wartezimmer",
    useCaseText: "Vereinfachter Wartezimmeraufruf",
  },
  {
    slug: "sprechstunden-doku",
    displayName: "Sprechstunden-Dokumentation",
    internalName: "Sprechstunde",
    description:
      "Widmen Sie sich voll und ganz Ihrem Patienten. Das Arzt-Patienten-Gespräch wird KI-gestützt erfasst und automatisch in eine strukturierte Dokumentation überführt — inklusive Medikationsplan und Diktat vom Smartphone.",
    status: "available",
    icon: Mic,
    image: sprechstundeDoku,
    linkText: "Mehr zur Sprechstunden-Doku",
    homepageBullet: "KI gestützte Sprechstundendokumentation",
    useCaseText: "Unterstützung zur Sprechstundendokumentation",
    useCaseIcon: FileText,
  },
  {
    slug: "schreibplatz",
    displayName: "Schreibplatz",
    internalName: "Schreibplatz",
    description:
      "KI-unterstützte Erstellung von Gutachten, Arztbriefen und Attesten. Auftrag diktieren oder tippen, Unterlagen dazulegen — die KI erkennt selbst, welches Schriftstück gebraucht wird, und liefert den Entwurf zur Freigabe.",
    status: "available",
    icon: FileCheck,
    image: gutachten,
    linkText: "Mehr zum Schreibplatz",
    homepageBullet: "Gutachten, Arztbriefe und Atteste mit Hilfe von KI",
    useCaseText: "Unterstützung bei Gutachten, Arztbriefen und Attesten",
  },
  {
    slug: "dokumenten-management",
    displayName: "Dokumenten-Management",
    internalName: "Dokumente",
    description:
      "Digitale Postmappe für eingehende Befunde und Berichte: automatische Kategorisierung, Dringlichkeits-Einstufung durch das Team und eine nach Wichtigkeit sortierte Mappe je Arzt — mit KI-Suche, die inhaltlich Passendes findet.",
    status: "available",
    icon: FolderOpen,
    image: dokumente,
    linkText: "Mehr zum Dokumenten-Management",
    homepageBullet: "Digitale Postmappe mit KI-Suche und Dringlichkeits-Triage",
    useCaseText: "Eingehende Befunde digital sichten und zuordnen",
  },
  {
    slug: "abrechnungs-optimierung",
    displayName: "Abrechnungs-Optimierung",
    internalName: "Abrechnung",
    description:
      "Prüft die Abrechnung auf Basis der offiziellen KVDT-Datei — unabhängig vom Praxisverwaltungssystem. Die Daten werden vor dem Hochladen in der Praxis anonymisiert, mit eigenem Regelwerk und Fachgruppenvergleich.",
    status: "in-development",
    icon: Calculator,
    image: abrechnung,
    homepageBullet: "Abrechnungs-Optimierung welche individuell anpassbar ist",
    useCaseText: "Eigens konfigurierbare Prüfung und Optimierung der Abrechnung",
  },
  {
    slug: "dienstplanung",
    displayName: "Dienstplanung",
    internalName: "Dienstplanung",
    description:
      "Schicht- und Urlaubsplanung für das gesamte Team: Der Wochenplan entsteht automatisch nach Bedarf und fairer Verteilung, die Mindestbesetzung bleibt im Blick, und bei Ausfällen schlägt EmMa passenden Ersatz vor.",
    status: "available",
    icon: CalendarDays,
    image: dienstplan,
    linkText: "Mehr zur Dienstplanung",
    homepageBullet: "Dienstplanerstellung und Management mit geringstem Aufwand",
    useCaseText: "Hilfe bei der Dienstplanerstellung und Pflege",
  },
  {
    slug: "kommunikation",
    displayName: "Kommunikation",
    internalName: "Kommunikation",
    description:
      "Nachrichten an Patienten direkt aus der Praxis heraus — Befund liegt vor, Bitte um Rückruf, Terminhinweis. Ausgelöst per Knopfdruck aus Ihrem Praxissystem oder manuell, versendet als E-Mail mit Anschreiben im Praxis-Briefkopf. Der Versand wird an Ihr Praxissystem zurückgemeldet.",
    status: "available",
    icon: MessageSquare,
    image: kommunikation,
    linkText: "Mehr zur Kommunikation",
    homepageBullet: "Patientennachrichten direkt aus der Praxis versenden",
    useCaseText: "Patienten benachrichtigen ohne Umweg über Fremdsysteme",
  },
  {
    slug: "zeiterfassung",
    displayName: "Zeiterfassung",
    internalName: "Zeiterfassung",
    description:
      "Rechtskonforme Arbeitszeiterfassung für das Praxisteam: Kommen und Gehen per Klick oder Chip am Check-In-Terminal, gesetzliche Mindestpausen automatisch berücksichtigt, Tages- und Wochensaldo, Freigabe von Überstunden durch die Praxisleitung und Stundennachweis als PDF.",
    status: "in-development",
    icon: Clock,
    homepageBullet: "Rechtskonforme Arbeitszeiterfassung für das Team",
    useCaseText: "Arbeitszeiten erfassen und Salden im Blick behalten",
  },
  {
    slug: "online-anfragen",
    displayName: "Online-Anfragen",
    internalName: "Chat",
    description:
      "Chat-Fenster auf der Praxis-Homepage mit Themen-Vorauswahl, Textbausteinen und Öffnungszeiten. Anfragen laufen beim Praxisteam in derselben Oberfläche zusammen wie die übrige Patientenkommunikation.",
    status: "planned",
    icon: MessageCircle,
    homepageBullet: "Patientenanfragen über die Praxis-Homepage",
    useCaseText: "Online-Anfragen von Patienten gebündelt bearbeiten",
  },
  {
    slug: "terminal-bestellung",
    displayName: "Bestellung am Terminal",
    internalName: "Bestellungen",
    description:
      "Patienten geben Folgerezepte, Überweisungen und Formulare selbst am Check-In-Terminal per Sprache auf. Die Aufnahme wird automatisch verschriftlicht und erscheint als Arbeitsliste beim Praxisteam — der zweithäufigste Grund für den Gang zur Anmeldung entfällt.",
    status: "planned",
    icon: ClipboardList,
    homepageBullet: "Bestellungen per Sprache am Check-In-Terminal",
    useCaseText: "Folgerezepte und Überweisungen ohne Anmeldung bestellen",
  },
];

export const availableModules = modules.filter((m) => m.status === "available");
export const inDevelopmentModules = modules.filter((m) => m.status === "in-development");
export const plannedModules = modules.filter((m) => m.status === "planned");

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
