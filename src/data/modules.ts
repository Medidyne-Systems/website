import type { StaticImageData } from "next/image";
import {
  Monitor,
  Users,
  Mic,
  FileCheck,
  Calculator,
  CalendarDays,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";

import terminal4 from "../../public/images/terminal_4.jpeg";
import sprechstundeDoku from "../../public/images/website_sprechstundedoku.jpg";
import wartezimmer from "../../public/images/wartezimmer.jpg";
import gutachten from "../../public/images/gutachten.jpg";
import dokumente from "../../public/images/dokumente.jpg";
import abrechnung from "../../public/images/abrechnung.jpg";
import dienstplan from "../../public/images/dienstplan.jpg";

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
  },
  {
    slug: "patienten-aufruf",
    displayName: "Patienten-Aufruf",
    internalName: "Wartezimmer",
    description:
      "Digitales Aufruf-System für das Wartezimmer. Patienten werden über Bildschirme aufgerufen — organisiert, diskret und nahtlos mit dem Self-Check-In verknüpft.",
    status: "available",
    icon: Users,
    image: wartezimmer,
    linkText: "Mehr zum Patienten-Aufruf",
  },
  {
    slug: "sprechstunden-doku",
    displayName: "Sprechstunden-Dokumentation",
    internalName: "Sprechstunde",
    description:
      "Widmen Sie sich voll und ganz Ihrem Patienten. Das Arzt-Patienten-Gespräch wird KI-gestützt erfasst und automatisch in eine strukturierte Dokumentation überführt.",
    status: "available",
    icon: Mic,
    image: sprechstundeDoku,
    linkText: "Mehr zur Sprechstunden-Doku",
  },
  {
    slug: "gutachten-erstellung",
    displayName: "Gutachten-Erstellung",
    internalName: "Gutachten",
    description:
      "KI-unterstützte Erstellung von Gutachten, Attesten und Arztbriefen. Unterlagen hochladen, KI-Entwurf erhalten, nachbearbeiten und freigeben.",
    status: "available",
    icon: FileCheck,
    image: gutachten,
    linkText: "Mehr zur Gutachten-Erstellung",
  },
  {
    slug: "dokumenten-management",
    displayName: "Dokumenten-Management",
    internalName: "Dokumente",
    description:
      "Zentrale, strukturierte Ablage für Befunde, Berichte und Dokumente Ihrer Praxis — mit Volltextsuche, Kategorisierung und DSGVO-konformer Speicherung.",
    status: "available",
    icon: FolderOpen,
    image: dokumente,
    linkText: "Mehr zum Dokumenten-Management",
  },
  {
    slug: "abrechnungs-optimierung",
    displayName: "Abrechnungs-Optimierung",
    internalName: "Abrechnung",
    description:
      "Identifiziert systematisch fehlende Abrechnungsziffern für EBM, GOÄ und HZV und deckt Potenziale für effizientere Abrechnung auf.",
    status: "in-development",
    icon: Calculator,
    image: abrechnung,
  },
  {
    slug: "dienstplanung",
    displayName: "Dienstplanung",
    internalName: "Dienstplanung",
    description:
      "Intelligente Schicht- und Urlaubsplanung für das gesamte Team — standortübergreifend und fair, mit automatischem Dienstplan-Generator.",
    status: "in-development",
    icon: CalendarDays,
    image: dienstplan,
  },
];

export const availableModules = modules.filter((m) => m.status === "available");
export const inDevelopmentModules = modules.filter((m) => m.status === "in-development");
export const plannedModules = modules.filter((m) => m.status === "planned");

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}
