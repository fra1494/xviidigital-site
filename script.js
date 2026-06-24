const translations = {
  it: {
    navDuo: 'Duo', navMyDay: 'MyDay', navContact: 'Contatti',
    heroEyebrow: 'Mobile apps • Giochi • Esperienze digitali',
    heroText: 'Un progetto digitale indipendente dedicato alla creazione di applicazioni mobile, giochi e servizi digitali semplici, curati e pensati per un utilizzo reale.',
    discoverDuo: 'Scopri Duo', discoverMyDay: 'Scopri MyDay', officialSite: 'Sito ufficiale',
    panelText: 'Tecnologia, creatività e prodotti digitali in sviluppo.',
    aboutLabel: 'Chi siamo', aboutTitle: 'Un laboratorio digitale per nuove idee mobile',
    aboutText: 'XVII Digital nasce per sviluppare prodotti digitali moderni, accessibili e scalabili. I primi progetti sono Duo, un gioco di parole competitivo, e MyDay, una social app pensata per condividere momenti autentici della giornata.',
    mobileGame: 'Gioco mobile', socialApp: 'Social app',
    duoLead: 'Duo è un gioco di parole competitivo pensato per sfidare amici o altri giocatori in partite rapide, intelligenti e coinvolgenti.',
    duoDescription: 'In Duo ogni turno richiede concentrazione, velocità e vocabolario: il giocatore deve inserire parole valide rispettando le regole della sfida, gestendo tempo, vite e punteggio. L’obiettivo è creare un’esperienza semplice da capire, ma stimolante da padroneggiare.',
    duoFeature1Title: 'Allenamento', duoFeature1Text: 'Modalità per esercitarsi, migliorare il vocabolario e prepararsi alle sfide.',
    duoFeature2Title: 'Sfida casuale', duoFeature2Text: 'Partite rapide contro altri giocatori disponibili, con punteggio e progressi.',
    duoFeature3Title: 'Sfida amico', duoFeature3Text: 'Creazione di una stanza dedicata per invitare un amico e giocare insieme.',
    duoFeature4Title: 'Classifica', duoFeature4Text: 'Risultati, statistiche e crescita del profilo giocatore nel tempo.',
    downloadLabel: 'Download', duoDownloadTitle: 'Duo sarà disponibile prossimamente',
    duoDownloadText: 'I link ufficiali per Android e iPhone saranno pubblicati appena l’app sarà disponibile sugli store.',
    soonOn: 'Prossimamente su',
    mydayStatusTitle: 'Progetto in sviluppo', mydayStatusText: 'Funzioni definitive, anteprime e link di download saranno pubblicati prima del rilascio ufficiale.',
    mydayLead: 'MyDay è una social app pensata per condividere momenti autentici della propria giornata e scoprire cosa accade nel mondo attraverso contenuti reali e immediati.',
    mydayDescription: 'Il progetto è attualmente in sviluppo. L’obiettivo è creare un’esperienza semplice, moderna e naturale, centrata sui momenti della giornata e sulla scoperta di nuove persone, luoghi e abitudini.',
    contactLabel: 'Contatti', contactTitle: 'Informazioni e richieste',
    contactText: 'Per informazioni generali, collaborazioni o richieste relative ai progetti XVII Digital, puoi utilizzare i contatti ufficiali indicati di seguito.',
    generalContact: 'Contatto generale', rights: 'Tutti i diritti riservati.', termsLink: 'Termini'
  },
  en: {
    navDuo: 'Duo', navMyDay: 'MyDay', navContact: 'Contact',
    heroEyebrow: 'Mobile apps • Games • Digital experiences',
    heroText: 'An independent digital project focused on building mobile apps, games and digital services that are simple, polished and designed for real use.',
    discoverDuo: 'Discover Duo', discoverMyDay: 'Discover MyDay', officialSite: 'Official website',
    panelText: 'Technology, creativity and digital products in development.',
    aboutLabel: 'About', aboutTitle: 'A digital lab for new mobile ideas',
    aboutText: 'XVII Digital was created to build modern, accessible and scalable digital products. The first projects are Duo, a competitive word game, and MyDay, a social app designed to share authentic daily moments.',
    mobileGame: 'Mobile game', socialApp: 'Social app',
    duoLead: 'Duo is a competitive word game designed to challenge friends or other players in quick, smart and engaging matches.',
    duoDescription: 'In Duo every turn requires focus, speed and vocabulary: players must enter valid words while following the match rules, managing time, lives and score. The goal is to create an experience that is easy to understand, yet challenging to master.',
    duoFeature1Title: 'Training', duoFeature1Text: 'A mode to practice, improve vocabulary and prepare for challenges.',
    duoFeature2Title: 'Random challenge', duoFeature2Text: 'Quick matches against available players, with score and progress tracking.',
    duoFeature3Title: 'Friend challenge', duoFeature3Text: 'Create a dedicated room to invite a friend and play together.',
    duoFeature4Title: 'Leaderboard', duoFeature4Text: 'Results, statistics and player profile growth over time.',
    downloadLabel: 'Download', duoDownloadTitle: 'Duo will be available soon',
    duoDownloadText: 'Official Android and iPhone links will be published as soon as the app is available on the stores.',
    soonOn: 'Coming soon on',
    mydayStatusTitle: 'Project in development', mydayStatusText: 'Final features, previews and download links will be published before the official release.',
    mydayLead: 'MyDay is a social app designed to share authentic moments from your day and discover what is happening around the world through real, immediate content.',
    mydayDescription: 'The project is currently in development. The goal is to create a simple, modern and natural experience focused on daily moments and the discovery of new people, places and habits.',
    contactLabel: 'Contact', contactTitle: 'Information and requests',
    contactText: 'For general information, collaborations or requests about XVII Digital projects, use the official contacts below.',
    generalContact: 'General contact', rights: 'All rights reserved.', termsLink: 'Terms'
  }
};

function setLanguage(lang) {
  const selected = translations[lang] ? lang : 'it';
  document.documentElement.lang = selected;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[selected][key]) el.textContent = translations[selected][key];
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === selected);
  });
  localStorage.setItem('xvii-lang', selected);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem('xvii-lang') || 'it');
