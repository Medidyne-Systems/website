# TODO — Medidyne Website

## Hohe Priorität
- [x] Domain `medidyne-systems.de` von Hostinger auf GitHub Pages umstellen

## Mittlere Priorität
- [ ] Kontaktformular mit echtem Backend verbinden (aktuell mailto-Button; Plan Cloudflare Workers liegt vor — zurückgestellt, Stand 2026-09-27)
- [ ] Modul-Detailseiten mit Screenshots / Produkt-Bildern ergänzen
- [ ] Feedback der Kollegen einarbeiten
- [ ] Kollegen (MaximilianPfister, schindlerb) über neuen PR-Workflow + Branch-Schutz informieren
- [ ] Zeiterfassung auf „verfügbar“ setzen (inkl. Detailseite), sobald sie auf Pro in der Praxis genutzt wird
- [ ] Prüfen, ob das Personal-Modul auf die Website gehört
- [ ] `minimatch`-Lücke schließen, sobald ein Fix existiert (GHSA-g3hv-75wg-m249, moderate, DoS durch Glob-Muster; Stand 2026-11-07: 8 moderate Funde, alle über `eslint-config-next` → `typescript-eslint` → `@typescript-eslint/typescript-estree` → `minimatch` 10.x). Nur Dev-Toolchain, nicht auf der Live-Seite. Bei Session-Start `npm audit` prüfen; wenn ein Update ohne Herabstufung da ist: `npm audit fix` bzw. `eslint-config-next` updaten → Branch/PR. **Nicht** `npm audit fix --force` (stuft auf `eslint-config-next` 15 zurück). Die frühere `braces`-Lücke meldet `npm audit` seit 2026-11-07 nicht mehr.

## Niedrige Priorität / Ideen
- [ ] SEO-Optimierung (Open Graph Images, strukturierte Daten)
- [ ] Cookie-Banner / Consent-Management
- [ ] Analytics einbinden (z.B. Vercel Analytics)
- [ ] WhatsApp-Button wie auf der Original-Seite
- [ ] Weitere Module ergänzen (in `src/data/modules.ts` konfigurierbar)
