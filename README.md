# no-proof-no-business.de

Landingpage für das Buch "no proof, no business" von Sven Lachhein.
Business Playbooks · Band I.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Resend (Newsletter)
- Vercel (Deploy)

## Lokal entwickeln

```bash
npm install
cp .env.local.example .env.local
# .env.local mit RESEND_API_KEY und RESEND_AUDIENCE_ID füllen
npm run dev
```

## Deploy auf Vercel

1. Repo auf GitHub pushen.
2. Auf vercel.com neues Projekt anlegen, Repo importieren.
3. Environment Variables in Vercel setzen:
   - `RESEND_API_KEY`
   - `RESEND_AUDIENCE_ID`
4. Domain `no-proof-no-business.de` hinzufügen. Vercel zeigt die DNS-Records,
   die bei one.com einzutragen sind (entweder A-Record oder CNAME).

## Inhalt

Inhalte stehen in den Komponenten unter `components/`. Keine CMS-Anbindung —
Änderungen direkt im Code, dann commit + push.

## Bilder

- `public/cover.jpg` — Buchcover (Vorderseite, 1200x1793, ~80 KB)
- `public/author.jpg` — Autor-Foto (600x600, ~75 KB)

## Designsystem

Gemeinsam mit lachhein-lierow.de und den anderen Bänden der Reihe
(fatal-capital.de). Variablen und Patterns in `app/globals.css`.
