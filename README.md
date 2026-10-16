# XVII Digital

Sito statico pronto per GitHub Pages. Non richiede framework, installazione di pacchetti o compilazione.

## Pubblicare o aggiornare il sito

1. Carica nella repository tutti i file e le cartelle contenuti in questo progetto, mantenendo la struttura.
2. In **Settings > Pages**, seleziona **Deploy from a branch**.
3. Scegli il branch `main` e la cartella `/ (root)`.
4. Salva e attendi il completamento della pubblicazione.

Il file `CNAME` mantiene il dominio personalizzato configurato nel progetto. Non rinominare le cartelle delle pagine legali: i relativi collegamenti sono già configurati.

## Contenuti

- Homepage responsive in italiano e inglese
- Presentazione di MyDay e DUO con collegamenti diretti a Google Play
- Stato App Store indicato come “Coming soon”
- Sezione Skillo indicata come progetto in sviluppo
- Modulo contatti che prepara un messaggio nell'app di posta del visitatore
- Pagine Privacy, Termini, Supporto, Linee guida e cancellazione account per MyDay e DUO

## Struttura principale

- `index.html`, `styles.css`, `script.js`: homepage
- `assets/xvii-digital-logo.png`: nuovo logo XVII Digital
- `myday/` e `duo/`: pagine dei singoli prodotti e informazioni legali
- `privacy.html`, `terms.html`: informazioni generali del sito
- `CNAME`: dominio personalizzato


## Versione 2 — nuova direzione visiva

- Marchio vettoriale trasparente in `assets/xvii-wordmark.svg`, ricostruito dal riferimento.
- Sfondo animato con particelle, orbite luminose e luce al movimento del mouse.
- Pulsanti magnetici e gallerie con prospettiva interattiva.
- Icone e screenshot ufficiali delle schede Google Play, inclusi localmente in `assets/apps/`.
- Anteprime ingrandibili con frecce, tastiera ed Esc.
- Preferenza di movimento ridotto rispettata; animazione delle particelle sospesa quando non visibile.
- Collegamenti e stile delle pagine informative aggiornati.

### Immagini delle app

Le immagini sono state recuperate dalle schede pubbliche Google Play di MyDay (`com.appmyday.app`) e DUO (`com.duogame.app`). Le fonti di ciascun file sono elencate in `assets/apps/sources.json`. Il sito utilizza le copie locali incluse nel progetto.

### Contatti

Il modulo apre il programma di posta del visitatore con il messaggio compilato. Non invia email da un server. L’indirizzo diretto è `admin@xviidigital.com`.
