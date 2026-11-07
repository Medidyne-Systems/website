# TODO — Medidyne Website

## Hohe Priorität
- [x] Domain `medidyne-systems.de` von Hostinger auf GitHub Pages umstellen

## Mittlere Priorität
- [ ] Kontaktformular mit echtem Backend verbinden (aktuell mailto-Button; Plan Cloudflare Workers liegt vor — zurückgestellt, Stand 2026-09-27)
- [ ] Modul-Detailseiten mit Screenshots / Produkt-Bildern ergänzen — vordringlich Patientenkalender, Zeiterfassung, Online-Anliegen: zeigen auf `/ki-loesungen` noch „Bild-Platzhalter“ (Bilder von Christian, über `inbox/`)
- [ ] Feedback der Kollegen einarbeiten
- [ ] Kollegen (MaximilianPfister, schindlerb) über neuen PR-Workflow + Branch-Schutz informieren
- [x] Zeiterfassung auf „verfügbar“ setzen (inkl. Detailseite) — erledigt 2026-11-07 (PR #14)
- [x] Bestellung am Terminal auf „verfügbar“ setzen (inkl. Detailseite) — von Christian als produktionsreif freigegeben 2026-11-07
- [ ] Abrechnungs-Optimierung: auf PROD in Navigation und Handbuch, Website „In Entwicklung“ — wartet auf Christians Freigabe als verkaufsfähig
- [ ] Patientenkalender-Seite nachziehen, sobald neue Oberfläche (KAL-UI) und Online-Buchung auf PROD sind
- [ ] Patientenkalender-Clip ersetzen: zeigt preprod-Stand (Tagesansicht, Termin suchen, Ausfälle, Selbstbuchung am Terminal) und den inzwischen entfernten Knopf „Patient wählen“ — live seit 2026-11-08 auf Christians Entscheidung; nach Portierung KAL-UI auf PROD neu rendern lassen (EMMA-Session) und austauschen. Gilt auch für das Produktvideo (enthält die Kalender-Szene)
- [ ] Status „verfügbar“ von Kommunikation und Online-Anliegen besprechen: Mail-Versand läuft noch ohne AVV (Plan MAILOUT), Online-Anliegen ist auf keiner echten Praxis-Homepage live (Plan ANLIEGEN). Clips sind trotzdem online (Christian 2026-11-07)
- [ ] Sprechstunden-Doku-Seite: Text „Sprachmemos Ihres iPhones“ (`sprechstunden-doku/page.tsx`) passt nicht mehr zum Clip, der „Smartphone“ sagt — mit Christian klären
- [ ] T2med über die Clips mit nachgebauter T2med-Oberfläche informieren (Christian)
- [ ] EMMA-Session: in den Clip-NOTIZEN Christians Freigabe der Stimme „Sulafat“ (2026-11-07) eintragen; die Website liest EMMA nur
- [ ] Praxis-Homepage auf „verfügbar“ setzen (inkl. Detailseite), sobald das Modul auf PROD ist
- [ ] Prüfen, ob das Personal-Modul auf die Website gehört
- [ ] `minimatch`-Lücke schließen, sobald ein Fix existiert (GHSA-g3hv-75wg-m249, moderate, DoS durch Glob-Muster; Stand 2026-11-07: 8 moderate Funde, alle über `eslint-config-next` → `typescript-eslint` → `@typescript-eslint/typescript-estree` → `minimatch` 10.x). Nur Dev-Toolchain, nicht auf der Live-Seite. Bei Session-Start `npm audit` prüfen; wenn ein Update ohne Herabstufung da ist: `npm audit fix` bzw. `eslint-config-next` updaten → Branch/PR. **Nicht** `npm audit fix --force` (stuft auf `eslint-config-next` 15 zurück). Die frühere `braces`-Lücke meldet `npm audit` seit 2026-11-07 nicht mehr.

## Niedrige Priorität / Ideen
- [ ] SEO-Optimierung (Open Graph Images, strukturierte Daten)
- [ ] Cookie-Banner / Consent-Management
- [ ] Analytics einbinden (z.B. Vercel Analytics)
- [ ] WhatsApp-Button wie auf der Original-Seite
- [ ] Weitere Module ergänzen (in `src/data/modules.ts` konfigurierbar)
