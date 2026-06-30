# 05 – Plan testiranja

## 1. Svrha dokumenta

Ovaj dokument opisuje plan testiranja aplikacije QueueLess. Cilj testiranja je provjeriti rade li osnovne funkcionalnosti aplikacije ispravno u web i mobilnom okruženju.

## 2. Opseg testiranja

Testiraju se: pokretanje aplikacije, navigacija, pregled lokacija, detalji lokacije, status gužve, procjena vremena čekanja, korisnički unos gužve, profil, zajednica, mobilni prikaz, PWA manifest i produkcijska Vercel verzija.

## 3. Testno okruženje

- Produkcija: Vercel deploy, web browser, mobilni browser
- Lokalno: Node.js, npm, Vite development server, GitHub repozitorij

## 4. Testni slučajevi

| ID | Naziv testa | Koraci | Očekivani rezultat | Status |
|---|---|---|---|---|
| T-01 | Otvaranje aplikacije | Otvoriti Vercel link | Aplikacija se učitava bez kritične greške | Proći |
| T-02 | Početna stranica | Otvoriti početnu stranicu | Prikazuje se uvodni sadržaj | Proći |
| T-03 | Navigacija | Kliknuti glavne poveznice | Otvaraju se odgovarajuće stranice | Proći |
| T-04 | Pregled lokacija | Otvoriti Explore | Prikazuju se lokacije i podaci | Proći |
| T-05 | Karta | Otvoriti prikaz karte | Karta i oznake lokacija se prikazuju | Proći |
| T-06 | Detalji lokacije | Odabrati lokaciju | Otvara se stranica detalja | Proći |
| T-07 | Status gužve | Pregledati lokaciju | Prikazuje se status gužve | Proći |
| T-08 | Procjena čekanja | Pregledati lokaciju | Prikazuje se vrijeme čekanja | Proći |
| T-09 | Crowd input | Unijeti procjenu | Sustav prihvaća unos | Proći |
| T-10 | Profil | Otvoriti profil | Prikazuje se profil/napredak | Proći |
| T-11 | Zajednica | Otvoriti Community | Prikazuje se sadržaj zajednice | Proći |
| T-12 | Mobilni prikaz | Otvoriti na mobitelu | Aplikacija je upotrebljiva | Proći |
| T-13 | Build | Pokrenuti `npm run build` | Build završava bez kritičnih grešaka | Provjeriti |
| T-14 | Environment varijable | Testirati AI dio | API ključ se ne prikazuje javno | Provjeriti |
| T-15 | PWA manifest | Provjeriti manifest | Manifest sadrži osnovne podatke | Proći |

## 5. Funkcionalno testiranje

Korisnički tok: korisnik otvara aplikaciju, otvara pregled lokacija, odabire lokaciju, pregledava status gužve i čekanje, po potrebi unosi vlastitu procjenu, te provjerava dodatne dijelove aplikacije poput profila i zajednice.

## 6. Testiranje sučelja i responzivnosti

Provjerava se čitljivost teksta, jasnoća gumba, razumljivost oznaka gužve, vidljivost navigacije i preglednost na mobilnom uređaju. Aplikacija se testira na desktopu i mobitelu.

## 7. Testiranje deploya

Za produkcijsku verziju provjerava se dostupnost Vercel linka, učitavanje aplikacije, navigacija, rad glavnih stranica i dostupnost PWA manifesta.

## 8. Poznati rizici

Mogući rizici su neispravno postavljen API ključ, nedostupnost vanjskog servisa, razlika između lokalne i Vercel konfiguracije, demonstracijski podaci i ograničena točnost crowd inputa bez većeg broja korisnika.

## 9. Zaključak

Plan testiranja pokazuje da se aplikacija provjerava kroz ključne korisničke tokove i tehničke uvjete rada. Za akademsku prezentaciju najvažnije je pokazati da produkcijska verzija radi, da su glavne funkcionalnosti dostupne i da je projekt moguće održavati kroz GitHub repozitorij.
