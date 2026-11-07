import { getModuleBySlug } from "@/data/modules";

/**
 * Video-Abschnitt einer Modul-Detailseite. Video und Vorschaubild kommen aus
 * `src/data/modules.ts`; ohne `video`-Eintrag rendert der Abschnitt nichts.
 */
export function ModuleVideoSection({ slug }: { slug: string }) {
  const mod = getModuleBySlug(slug);
  if (!mod?.video) return null;
  const { src, poster, description } = mod.video;

  return (
    <section id="video" className="py-14 bg-snow">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="font-display text-2xl lg:text-3xl tracking-tight text-midnight text-center mb-8">
          {mod.displayName} im Video
        </h2>
        <video
          controls
          preload="none"
          playsInline
          poster={poster.src}
          aria-label={description}
          className="w-full aspect-video rounded-2xl border border-violet/10 bg-midnight shadow-xl shadow-violet/5"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
