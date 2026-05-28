import { CheckCircle2, Wrench, Calendar } from "lucide-react";
import type { ModuleStatus } from "@/data/modules";

type Size = "sm" | "md";

const config: Record<
  ModuleStatus,
  { label: string; icon: typeof CheckCircle2; classes: string }
> = {
  available: {
    label: "Verfügbar",
    icon: CheckCircle2,
    classes: "bg-violet/10 text-violet ring-1 ring-inset ring-violet/20",
  },
  "in-development": {
    label: "In Entwicklung",
    icon: Wrench,
    classes: "bg-mauve/15 text-mauve ring-1 ring-inset ring-mauve/25",
  },
  planned: {
    label: "Geplant",
    icon: Calendar,
    classes: "bg-mist/40 text-iris ring-1 ring-inset ring-iris/20",
  },
};

const sizes: Record<Size, { wrapper: string; icon: string }> = {
  sm: { wrapper: "px-2.5 py-1 text-xs gap-1.5", icon: "w-3.5 h-3.5" },
  md: { wrapper: "px-3 py-1.5 text-sm gap-2", icon: "w-4 h-4" },
};

export function StatusBadge({
  status,
  size = "sm",
}: {
  status: ModuleStatus;
  size?: Size;
}) {
  const { label, icon: Icon, classes } = config[status];
  const sizeClasses = sizes[size];
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${sizeClasses.wrapper} ${classes}`}
    >
      <Icon className={sizeClasses.icon} />
      {label}
    </span>
  );
}
