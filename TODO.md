# TODO — Medidyne Website

## Hohe Priorität
- [x] Domain `medidyne-systems.de` von Hostinger auf GitHub Pages umstellen

## Mittlere Priorität
- [ ] Kontaktformular mit echtem Backend verbinden (aktuell mailto-Button; Plan Cloudflare Workers liegt vor — zurückgestellt, Stand 2026-09-27)
- [ ] Modul-Detailseiten mit Screenshots / Produkt-Bildern ergänzen
- [ ] Feedback der Kollegen einarbeiten
- [ ] Kollegen (MaximilianPfister, schindlerb) über neuen PR-Workflow + Branch-Schutz informieren
- [ ] Zeiterfassung auf „verfügbar“ setzen (inkl. Detailseite), sobald sie auf Pro in der Praxis genutzt wird
- [ ] Prüfen, ob Personal-Modul und Fax-Versand (Dokumente) auf die Website gehören
- [ ] `braces`-Lücke schließen, sobald ein Fix existiert (GHSA-vfj7-8cjw-p6xm, high, DoS durch verschachtelte Muster; Stand 2026-10-22: alle Versionen ≤ 3.0.3 betroffen, kein Patch). Nur Dev-Toolchain (`eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces`), nicht auf der Live-Seite. Bei jedem Session-Start `npm audit` prüfen; wenn Fix da: `npm audit fix` bzw. `eslint-config-next` updaten → Branch/PR. **Nicht** `npm audit fix --force` (stuft auf eslint-config-next 14 zurück, hilft nicht)

## Niedrige Priorität / Ideen
- [ ] SEO-Optimierung (Open Graph Images, strukturierte Daten)
- [ ] Cookie-Banner / Consent-Management
- [ ] Analytics einbinden (z.B. Vercel Analytics)
- [ ] WhatsApp-Button wie auf der Original-Seite
- [ ] Weitere Module ergänzen (in `src/data/modules.ts` konfigurierbar)
