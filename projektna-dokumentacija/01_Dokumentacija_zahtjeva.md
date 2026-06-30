# 01 – Dokumentacija zahtjeva

## 1. Svrha dokumenta

Ovaj dokument opisuje zahtjeve aplikacije QueueLess. Cilj dokumentacije zahtjeva je definirati svrhu sustava, korisnike, funkcionalnosti, ograničenja i očekivano ponašanje aplikacije. Dokument služi kao osnova za razvoj programske podrške i kao referenca za razumijevanje što aplikacija treba omogućiti krajnjim korisnicima.

## 2. Opis projekta

QueueLess je web/PWA aplikacija koja korisnicima omogućuje da prije dolaska na određenu lokaciju provjere razinu gužve i procijenjeno vrijeme čekanja. Aplikacija je razvijena u sklopu TVZ Mc2 natjecanja kao rješenje za svakodnevni problem čekanja u redovima i dolaska na lokacije bez pravovremenih informacija.

Problem koji aplikacija rješava može se sažeti pitanjem: **Koliko ću čekati ako sada odem na tu lokaciju?**

## 3. Problem

Korisnici često dolaze na lokacije bez informacije o trenutnom stanju gužve. To dovodi do gubitka vremena, lošeg planiranja i nepotrebnog čekanja.

Primjeri lokacija:
- pošte
- banke
- studentske menze
- referade
- kafići i restorani
- javne ustanove
- zdravstvene ustanove
- događaji i klubovi

## 4. Ciljevi sustava

Glavni ciljevi aplikacije:
- omogućiti pregled gužve prije dolaska na lokaciju
- prikazati procijenjeno vrijeme čekanja
- omogućiti pregledavanje lokacija na karti
- omogućiti korisnički unos informacija o gužvi
- podržati korištenje na mobilnim uređajima
- prikazati funkcionalni prototip prikladan za natjecateljsku i akademsku prezentaciju

## 5. Korisnici sustava

### 5.1 Krajnji korisnik

Krajnji korisnik koristi aplikaciju kako bi prije dolaska na lokaciju provjerio stanje gužve i procijenjeno vrijeme čekanja.

Primjeri: student koji provjerava menzu, zaposlena osoba koja želi bolje iskoristiti pauzu, korisnik koji želi izbjeći čekanje u pošti/banci, osoba koja bira kafić ili restoran prema trenutnoj gužvi.

### 5.2 Poslovni korisnik

Poslovni korisnik predstavlja lokaciju ili organizaciju koja bi u budućnosti mogla koristiti analitiku gužve i informacije o ponašanju korisnika. Primjeri su restorani, kafići, trgovine, javne ustanove i uslužne djelatnosti.

### 5.3 Administrator / održavatelj

Administrator ili održavatelj u budućoj verziji sustava upravlja podacima o lokacijama, konfiguracijom aplikacije i nadzorom ispravnosti rada.

## 6. Funkcionalni zahtjevi

| ID | Zahtjev | Opis |
|---|---|---|
| FZ-01 | Prikaz početne stranice | Sustav prikazuje uvodnu stranicu s objašnjenjem aplikacije. |
| FZ-02 | Prikaz karte lokacija | Sustav prikazuje kartu s dostupnim lokacijama. |
| FZ-03 | Status gužve | Sustav prikazuje razinu gužve za lokaciju. |
| FZ-04 | Procjena čekanja | Sustav prikazuje procijenjeno vrijeme čekanja. |
| FZ-05 | Detalji lokacije | Sustav omogućuje otvaranje detalja odabrane lokacije. |
| FZ-06 | Korisnički unos | Korisnik može unijeti vlastitu procjenu gužve. |
| FZ-07 | Istraživanje lokacija | Korisnik može pregledavati i istraživati lokacije. |
| FZ-08 | Profil | Sustav može prikazati korisnički profil i napredak. |
| FZ-09 | Zajednica | Sustav može prikazati zajednički doprinos korisnika. |
| FZ-10 | PWA korištenje | Sustav je prilagođen mobilnom i PWA korištenju. |

## 7. Nefunkcionalni zahtjevi

| ID | Zahtjev | Opis |
|---|---|---|
| NFZ-01 | Upotrebljivost | Aplikacija mora biti jednostavna i razumljiva. |
| NFZ-02 | Responzivnost | Aplikacija mora raditi na desktopu i mobitelu. |
| NFZ-03 | Brzina rada | Osnovne stranice moraju se brzo učitavati. |
| NFZ-04 | Dostupnost | Produkcijska verzija treba biti dostupna putem javnog linka. |
| NFZ-05 | Održavanje | Kod mora biti organiziran kroz logične foldere i komponente. |
| NFZ-06 | Sigurnost konfiguracije | API ključevi ne smiju biti spremljeni u repozitorij. |

## 8. Sklopovski i programski zahtjevi

Za krajnjeg korisnika potreban je moderan web preglednik, internetska veza i desktop ili mobilni uređaj. Za razvojno okruženje potrebni su Node.js, npm, Git, pristup GitHub repozitoriju i uređivač koda poput Visual Studio Codea.

## 9. Ograničenja sustava

Trenutna verzija je prototip i ne koristi potpuno razvijen sustav stvarnih real-time podataka za sve lokacije. Dio podataka može biti demonstracijski. AI funkcionalnosti ovise o API ključu, a crowd input ima veću vrijednost tek s većim brojem korisnika.

## 10. Budući zahtjevi

Moguće nadogradnje: AI predikcija gužve, notifikacije kada se gužva smanji, omiljene lokacije, povijest gužve, poslovni dashboard, analitika za poslovne korisnike, sustav rezervacija i “skip the line” funkcionalnost.

## 11. Zaključak

QueueLess ima jasno definiranu svrhu: pomoći korisnicima da izbjegnu nepotrebno čekanje i bolje planiraju vrijeme. Dokumentirani zahtjevi predstavljaju osnovu za razumijevanje trenutnog prototipa i mogućnosti daljnjeg razvoja sustava.
