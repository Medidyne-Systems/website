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
  CalendarRange,
  Globe,
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
import posterSelfCheckIn from "../../public/images/videos/self-check-in.jpg";
import posterPatientenAufruf from "../../public/images/videos/patienten-aufruf.jpg";
import posterSprechstundenDoku from "../../public/images/videos/sprechstunden-doku.jpg";
import posterSchreibplatz from "../../public/images/videos/schreibplatz.jpg";
import posterDokumentenManagement from "../../public/images/videos/dokumenten-management.jpg";
import posterDienstplanung from "../../public/images/videos/dienstplanung.jpg";
import posterPatientenkalender from "../../public/images/videos/patientenkalender.jpg";
import posterKommunikation from "../../public/images/videos/kommunikation.jpg";
import posterZeiterfassung from "../../public/images/videos/zeiterfassung.jpg";
import posterOnlineAnliegen from "../../public/images/videos/online-anliegen.jpg";
import posterTerminalBestellung from "../../public/images/videos/terminal-bestellung.jpg";
import posterPraxisHomepage from "../../public/images/videos/praxis-homepage.jpg";

export type ModuleStatus = "available" | "in-development" | "planned";

/** Marketing-Clip eines Moduls (Quelle: EMMA-Marketing, `outbox/Marketing/<projekt>/`). */
export type ModuleVideo = {
  /** Datei unter `public/videos/`, benannt nach dem Modul-Slug. */
  src: string;
  /** Vorschaubild: Standbild aus dem Clip unter `public/images/videos/`. */
  poster: StaticImageData;
  /** Kurzbeschreibung des Clip-Inhalts für Screenreader. */
  description: string;
};

export type Module = {
  slug: string;
  displayName: string;
  internalName: string;
  description: string;
  status: ModuleStatus;
  icon: LucideIcon;
  image?: StaticImageData;
  /** Optionales Video; ohne Eintrag zeigt die Detailseite keinen Video-Abschnitt. */
  video?: ModuleVideo;
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
    video: {
      src: "/videos/self-check-in.mp4",
      poster: posterSelfCheckIn,
      description:
        "Ein Patient meldet sich am EmMa-Terminal mit der Gesundheitskarte an und steht sofort im T2med-Wartezimmer. Das Team am Tresen hat Zeit für Patienten, die Hilfe brauchen.",
    },
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
    video: {
      src: "/videos/patienten-aufruf.mp4",
      poster: posterPatientenAufruf,
      description:
        "Aufruf direkt aus T2med: Gong, Name und Raum erscheinen auf dem Wartezimmer-Bildschirm, dazu sagt EmMa den Aufruf an.",
    },
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
    video: {
      src: "/videos/sprechstunden-doku.mp4",
      poster: posterSprechstundenDoku,
      description:
        "EmMa nimmt das Arzt-Patienten-Gespräch auf und sortiert es in Anamnese, Befund, Diagnose und Therapie ein. Der Arzt prüft und überträgt per Knopf in T2med. Beim Hausbesuch kommt das Diktat vom Smartphone.",
    },
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
    video: {
      src: "/videos/schreibplatz.mp4",
      poster: posterSchreibplatz,
      description:
        "Der Arzt diktiert den Auftrag für einen Arztbrief und legt den Vorbefund dazu. EmMa schreibt den Entwurf, der Arzt prüft ihn und überträgt das PDF in die T2med-Akte.",
    },
    linkText: "Mehr zum Schreibplatz",
    homepageBullet: "Gutachten, Arztbriefe und Atteste mit Hilfe von KI",
    useCaseText: "Unterstützung bei Gutachten, Arztbriefen und Attesten",
  },
  {
    slug: "dokumenten-management",
    displayName: "Dokumenten-Management",
    internalName: "Dokumente",
    description:
      "Digitale Postmappe für eingehende Befunde und Berichte: automatische Kategorisierung, eine Dringlichkeits-Einstufung nach Eil-Vermerken, die Ihr Team mit einem Klick korrigiert, und eine nach Wichtigkeit sortierte Mappe je Arzt.",
    status: "available",
    icon: FolderOpen,
    image: dokumente,
    video: {
      src: "/videos/dokumenten-management.mp4",
      poster: posterDokumentenManagement,
      description:
        "Eingehende Faxe bleiben digital: EmMa fasst zusammen, ordnet die Kategorie zu und legt Dokumente in die Mappe des Arztes. Der Arzt liest am Bildschirm und schickt direkt per E-Mail weiter.",
    },
    linkText: "Mehr zum Dokumenten-Management",
    homepageBullet: "Digitale Postmappe, nach Dringlichkeit sortiert und je Arzt zugeordnet",
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
      "Schicht- und Urlaubsplanung für das gesamte Team: Der Wochenplan entsteht automatisch nach Bedarf und fairer Verteilung, die Mindestbesetzung bleibt im Blick, und bei Ausfällen schlägt EmMa passenden Ersatz vor. Das Team sieht seine Dienste, stellt Urlaubsanträge und äußert Dienstwünsche selbst.",
    status: "available",
    icon: CalendarDays,
    image: dienstplan,
    video: {
      src: "/videos/dienstplanung.mp4",
      poster: posterDienstplanung,
      description:
        "Eine MFA fällt krank aus. Die Planerin trägt es einmal im EmMa-Dienstplan ein, EmMa zeigt, welche Dienste frei werden und wer einspringen kann. Die Kollegin sieht den neuen Dienst in ‚Meine Dienste‘ am Handy.",
    },
    linkText: "Mehr zur Dienstplanung",
    homepageBullet: "Dienstplanerstellung und Management mit geringstem Aufwand",
    useCaseText: "Hilfe bei der Dienstplanerstellung und Pflege",
  },
  {
    slug: "patientenkalender",
    displayName: "Patientenkalender",
    internalName: "Patientenkalender",
    description:
      "Patiententermine im Tagesblick mit einer Spalte je Person im Dienst — die freien Termine entstehen direkt aus dem Dienstplan. Ändert sich ein Dienst, zieht der Kalender von selbst nach, und Termine, hinter denen kein passender Dienst mehr steht, landen in der Liste „Ausfälle“.",
    status: "available",
    icon: CalendarRange,
    video: {
      src: "/videos/patientenkalender.mp4",
      poster: posterPatientenkalender,
      description:
        "Die Tagesansicht zeigt eine Spalte je Person im Dienst, freie Zeiten kommen aus dem Dienstplan. Die MFA übernimmt den Patienten per Knopf aus T2med und bucht den nächsten freien Termin in zwei Schritten. Am Terminal bucht eine Patientin selbst mit der Gesundheitskarte, und fällt ein Dienst aus, zeigt EmMa die Liste der betroffenen Termine zum Anrufen.",
    },
    linkText: "Mehr zum Patientenkalender",
    homepageBullet: "Patiententermine, die dem Dienstplan folgen",
    useCaseText: "Freie Termine automatisch aus dem Dienstplan",
  },
  {
    slug: "kommunikation",
    displayName: "Kommunikation",
    internalName: "Kommunikation",
    description:
      "Nachrichten an Patienten direkt aus der Praxis heraus — Bitte im Labor vorstellen, Bitte um Rückruf, Terminhinweis. Ausgelöst per Knopfdruck aus T2med oder manuell, versendet als E-Mail mit Anschreiben im Praxis-Briefkopf. Bei Aufträgen aus T2med wird der Versand dorthin zurückgemeldet.",
    status: "available",
    icon: MessageSquare,
    image: kommunikation,
    video: {
      src: "/videos/kommunikation.mp4",
      poster: posterKommunikation,
      description:
        "Ein Klick in T2med legt den Auftrag in EmMa an. Die MFA wählt einen Textbaustein, prüft die Vorschau und sendet. Der Patient bekommt die E-Mail mit dem Schreiben auf dem Briefkopf der Praxis, der Beleg landet in der T2med-Akte.",
    },
    linkText: "Mehr zur Kommunikation",
    homepageBullet: "Patientennachrichten direkt aus der Praxis versenden",
    useCaseText: "Patienten benachrichtigen ohne Umweg über Fremdsysteme",
  },
  {
    slug: "zeiterfassung",
    displayName: "Zeiterfassung",
    internalName: "Zeiterfassung",
    description:
      "Arbeitszeiterfassung für das Praxisteam: Kommen und Gehen per Klick oder Chip am Check-In-Terminal, gesetzliche Mindestpausen automatisch berücksichtigt, Tages- und Wochensaldo, Freigabe von Überstunden durch die Praxisleitung und Stundennachweis als PDF.",
    status: "available",
    icon: Clock,
    video: {
      src: "/videos/zeiterfassung.mp4",
      poster: posterZeiterfassung,
      description:
        "Eine MFA stempelt morgens, mittags und abends mit dem Chip am EmMa-Terminal. EmMa zeigt Ist, Soll und Saldo der Woche und gibt am Monatsende den Stundennachweis als PDF oder CSV aus.",
    },
    linkText: "Mehr zur Zeiterfassung",
    homepageBullet: "Arbeitszeiterfassung für das Team per Klick oder Chip",
    useCaseText: "Arbeitszeiten erfassen und Salden im Blick behalten",
  },
  {
    slug: "online-anliegen",
    displayName: "Online-Anliegen",
    internalName: "Online-Anliegen",
    description:
      "Ein Fenster auf Ihrer Praxis-Homepage für organisatorische Anliegen: Folgerezept, Überweisung, Rückruf oder Terminanfrage. Aus jedem Anliegen wird ein Nachrichtenverlauf, den Ihr Team im Eingang von EmMa beantwortet — mit eigenen Annahmezeiten und Antwort-Bausteinen.",
    status: "available",
    icon: MessageCircle,
    video: {
      src: "/videos/online-anliegen.mp4",
      poster: posterOnlineAnliegen,
      description:
        "Die Patientin schickt ihren Rezept-Wunsch über das Fenster auf der Praxis-Homepage, mit festem Hinweis auf 112 und 116117. Die MFA holt das Anliegen im Eingang, kopiert den Namen und klickt auf ‚Bereit‘. Die Antwort steht im Verlauf der Patientin, die E-Mail dazu enthält nur einen Link.",
    },
    linkText: "Mehr zu Online-Anliegen",
    homepageBullet: "Patientenanliegen über die Praxis-Homepage",
    useCaseText: "Online-Anliegen von Patienten gebündelt bearbeiten",
  },
  {
    slug: "praxis-homepage",
    displayName: "Praxis-Homepage",
    internalName: "Homepage",
    description:
      "Die Internetseite der Praxis direkt in EmMa pflegen: Seiten, Standorte, Team, Beiträge, Stellenangebote und Bilder liegen an einer Stelle. Ein Assistent richtet die Homepage aus den Praxisdaten ein, die schon in EmMa stehen.",
    status: "available",
    icon: Globe,
    video: {
      src: "/videos/praxis-homepage.mp4",
      poster: posterPraxisHomepage,
      description:
        "Eine neue MFA richtet die Praxis-Homepage ein: EmMa übernimmt die Praxisdaten, sie wählt Aufbau und Farben, ergänzt das Impressum und gibt die Seite frei. Wochen später sagt sie EmMa, dass eine neue Kollegin ins Team kommt. EmMa zeigt den Vorschlag in der Vorschau, online geht er erst nach ihrer Freigabe.",
    },
    linkText: "Mehr zur Praxis-Homepage",
    homepageBullet: "Praxis-Homepage direkt in EmMa pflegen",
    useCaseText: "Die Praxis-Homepage selbst aktuell halten",
  },
  {
    slug: "terminal-bestellung",
    displayName: "Bestellung am Terminal",
    internalName: "Bestellungen",
    description:
      "Patienten bestellen Folgerezepte, Überweisungen und Sonstiges selbst am Check-In-Terminal: Karte stecken, Art wählen, sagen, was gebraucht wird. EmMa übernimmt das Gesprochene als Text in den Eingang, das Praxisteam bearbeitet die Bestellung dort — ohne Anstellen an der Anmeldung.",
    status: "available",
    icon: ClipboardList,
    video: {
      src: "/videos/terminal-bestellung.mp4",
      poster: posterTerminalBestellung,
      description:
        "Ein Patient steckt am EmMa-Terminal seine Gesundheitskarte, wählt „Bestellung“ und sagt, welches Medikament er braucht. Die Bestellung landet als Text im Eingang der Praxis, das Team bearbeitet sie dort und markiert sie als erledigt.",
    },
    linkText: "Mehr zur Bestellung am Terminal",
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
