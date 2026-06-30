# 03 – Korisnička dokumentacija

## 1. Svrha dokumenta

Ovaj dokument objašnjava način korištenja aplikacije QueueLess iz perspektive krajnjeg korisnika. Dokument je namijenjen korisnicima koji prvi put otvaraju aplikaciju, ali i nastavniku koji pregledava funkcionalnosti projekta.

## 2. Kratak opis aplikacije

QueueLess je aplikacija za provjeru gužve i procijenjenog vremena čekanja na različitim lokacijama. Korisnik može otvoriti aplikaciju u browseru, pregledati lokacije, vidjeti procjenu gužve i odlučiti isplati li se otići odmah ili kasnije.

## 3. Pristup aplikaciji

Aplikaciji se može pristupiti kroz javnu Vercel produkcijsku verziju ili lokalnim pokretanjem projekta tijekom razvoja. Za prezentaciju se koristi Vercel verzija jer predstavlja javno dostupnu produkcijsku verziju aplikacije.

## 4. Početna stranica

Nakon otvaranja aplikacije korisnik dolazi na početnu stranicu. Početna stranica predstavlja svrhu aplikacije i omogućuje nastavak prema glavnim dijelovima aplikacije.

## 5. Pregled lokacija

Korisnik može otvoriti dio aplikacije za istraživanje lokacija. Tamo se prikazuju dostupne lokacije za koje aplikacija nudi podatke o gužvi i čekanju.

Korisnik može pregledati naziv lokacije, status gužve, procijenjeno vrijeme čekanja i dodatne informacije u detaljima lokacije.

## 6. Karta

Karta omogućuje vizualni pregled lokacija. Korisnik može pronaći lokacije prema položaju i odabrati onu koja ga zanima. Karta je posebno korisna na mobilnom uređaju jer korisnik može brzo vidjeti koje su lokacije u blizini i kakvo je stanje gužve.

## 7. Detalji lokacije

Klikom ili odabirom pojedine lokacije korisnik otvara stranicu detalja. Detalji mogu sadržavati naziv lokacije, opis/adresu, status gužve, procijenjeno vrijeme čekanja i mogućnost korisničkog doprinosa.

## 8. Unos procjene gužve

Korisnik može unijeti vlastitu procjenu gužve. Time aplikacija dobiva dodatne informacije i povećava vrijednost crowd input pristupa.

Primjer:
1. Korisnik se nalazi u kafiću.
2. Otvara lokaciju u aplikaciji.
3. Odabire status gužve, npr. “srednja gužva”.
4. Aplikacija koristi taj unos kao dio informacija o trenutnom stanju.

## 9. Zajednica i profil

Dio aplikacije vezan uz zajednicu prikazuje ideju da korisnici zajednički doprinose kvaliteti podataka. Profil korisnika može prikazivati osnovne informacije o korištenju aplikacije, doprinosu ili napretku.

## 10. Korištenje na mobitelu

Aplikacija je zamišljena kao mobile-first rješenje. Korisnik najčešće želi provjeriti gužvu neposredno prije odlaska ili dok je već u pokretu, zbog čega je mobilni prikaz posebno važan.

Korisnik može otvoriti Vercel link na mobitelu i koristiti aplikaciju kroz mobilni browser. PWA manifest omogućuje ponašanje slično mobilnoj aplikaciji.

## 11. Primjeri korištenja

### Pošta
Korisnik želi otići u poštu. Otvara QueueLess i vidi da je procijenjeno čekanje 35 minuta. Odlučuje otići kasnije.

### Menza
Student ima pauzu između predavanja. Otvara aplikaciju i vidi da je trenutno velika gužva u menzi, ali druga lokacija ima manje čekanje.

### Kafić
Korisnik traži kafić u kojem nema gužve. Otvara kartu i odabire lokaciju sa statusom niske gužve.

## 12. Zaključak

QueueLess je namijenjen brzom i jednostavnom korištenju. Korisnik kroz nekoliko klikova može pronaći lokaciju, provjeriti gužvu i donijeti odluku o dolasku.
