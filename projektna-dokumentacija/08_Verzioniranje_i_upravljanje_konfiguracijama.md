# 08 – Verzicioniranje i upravljanje konfiguracijama

## 1. Svrha dokumenta

Ovaj dokument opisuje korištenje alata za verzioniranje koda i upravljanje konfiguracijama u projektu QueueLess. Dokument povezuje stvarni GitHub repozitorij projekta s pojmovima obrađenima na kolegiju Projektno razvijanje programske podrške.

## 2. Korišteni alati

- Git
- GitHub
- npm
- Vite
- Vercel
- Visual Studio Code ili drugi uređivač koda

## 3. GitHub repozitorij

GitHub repozitorij predstavlja centralno mjesto za čuvanje izvornog koda i dokumentacije. Repozitorij sadrži izvorni kod, statičke datoteke, konfiguraciju projekta, `package.json`, Vite konfiguraciju, README i projektnu dokumentaciju.

GitHub omogućuje pregled commit povijesti, pregled promjena u kodu, vraćanje na prethodne verzije, dijeljenje projekta nastavniku i timu te praćenje razvoja kroz vrijeme.

## 4. Kontrola verzija

Kontrola verzija omogućuje praćenje različitih verzija programskog koda i dokumentacije. U projektu se svaka važna promjena sprema kao commit.

Primjeri promjena:
- dodavanje nove stranice
- uređivanje komponente
- promjena dizajna
- dodavanje dokumentacije
- popravak greške

## 5. Glavna grana

Glavna grana repozitorija je `main`. Ona predstavlja glavnu verziju projekta koja se koristi za pregled, deploy i predaju.

Za budući razvoj preporučuje se koristiti dodatne grane:
- `feature/naziv-funkcionalnosti`
- `fix/naziv-greske`
- `docs/naziv-dokumentacije`

## 6. System build

Build aplikacije izrađuje se pomoću Vite alata.

```bash
npm run build
```

Build proces stvara produkcijsku verziju aplikacije spremnu za deploy.

## 7. Upravljanje konfiguracijama

Upravljanje konfiguracijama uključuje verzioniranje koda, verzioniranje dokumentacije, upravljanje ovisnostima kroz `package.json`, upravljanje build procesom, environment varijable i deploy produkcijske verzije.

## 8. Vercel kao alat za distribuciju

Vercel se koristi za distribuciju aplikacije. Time aplikacija postaje javno dostupna korisnicima i nastavniku.

Prednosti:
- javni link
- automatski build
- jednostavno postavljanje environment varijabli
- prikaz produkcijske verzije bez lokalnog pokretanja

## 13. Zaključak

QueueLess koristi GitHub kao centralni repozitorij, Git za verzioniranje, npm/Vite za razvoj i build, te Vercel za distribuciju. Time projekt pokriva ključne elemente upravljanja konfiguracijama: kontrolu verzija, build sustava, upravljanje promjenama i release/distribuciju.
