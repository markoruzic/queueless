# 04 – Dokumentacija koda

## 1. Svrha dokumenta

Ovaj dokument objašnjava organizaciju izvornog koda aplikacije QueueLess. Cilj je olakšati razumijevanje strukture projekta, održavanje koda i budući razvoj.

## 2. Organizacija koda

Aplikacija je organizirana kao React projekt. Izvorni kod nalazi se u `src` direktoriju, dok se statički resursi i PWA manifest nalaze u `public` direktoriju.

Glavna ideja organizacije je odvajanje stranica aplikacije, višekratno iskoristivih komponenti, globalnog stanja, podataka, servisne logike i stilova.

## 3. Struktura `src` direktorija

```text
src/
├── assets/
├── components/
├── context/
├── data/
├── pages/
├── services/
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## 4. Ulazne datoteke

### `main.jsx`
Predstavlja ulaznu točku React aplikacije. U njoj se aplikacija povezuje s HTML dokumentom i pokreće renderiranje.

### `App.jsx`
Definira glavnu strukturu aplikacije, uključujući rute i globalne providere. Koristi `BrowserRouter`, `Routes` i `Route` za navigaciju između stranica. Aplikacija uključuje stranice Home, Explore, LocationDetails, Community i Profile.

## 5. Direktorij `pages`

Sadrži glavne stranice aplikacije:
- `Home` – početna stranica
- `Explore` – istraživanje lokacija
- `LocationDetails` – detalji lokacije
- `Community` – zajednica
- `Profile` – korisnički profil

## 6. Direktorij `components`

Sadrži komponente koje se koriste na više mjesta u aplikaciji. Ovakva podjela smanjuje ponavljanje koda i olakšava održavanje.

## 7. Direktorij `context`

Sadrži logiku globalnog stanja aplikacije. `UserProgressContext` služi za upravljanje korisničkim napretkom ili aktivnostima kroz različite dijelove aplikacije.

## 8. Direktorij `data`

Sadrži podatke aplikacije. U prototipu se ovdje mogu nalaziti demonstracijski podaci o lokacijama, statusima gužve ili drugim informacijama potrebnima za prikaz funkcionalnosti.

## 9. Direktorij `services`

Sadrži izdvojenu logiku koja ne pripada izravno korisničkom sučelju. Servisi mogu uključivati izračun procjene čekanja, obradu podataka o gužvi i komunikaciju s vanjskim API servisima.

## 10. Pravila održavanja koda

- komponente trebaju imati jasnu odgovornost
- složenu logiku treba izdvojiti u servise
- nazivi datoteka i funkcija trebaju biti opisni
- ponavljajući elementi trebaju se izdvojiti u reusable komponente
- osjetljive podatke ne spremati u kod
- prije commita provjeriti radi li aplikacija
- prije deploya pokrenuti build

## 11. Komentari u kodu

Komentari se koriste kada objašnjavaju logiku koja nije očita iz samog koda. Preporučuje se pristup “dovoljno dobro”: komentirati složenije dijelove, a jednostavne dijelove ostaviti čitljivima kroz nazive funkcija i strukturu.

## 12. Buduće održavanje

Za budući razvoj preporučuje se uvođenje backend sustava i baze podataka, odvajanje stvarnih API poziva od demonstracijskih podataka, dodavanje testova, validacija korisničkog unosa i praćenje grešaka.

## 13. Zaključak

Kod aplikacije QueueLess organiziran je tako da se glavne funkcionalnosti mogu održavati i nadograđivati. Struktura s odvojenim stranicama, komponentama, kontekstom, podacima i servisima omogućuje preglednost i daljnji razvoj projekta.
