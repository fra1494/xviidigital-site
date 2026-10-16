const copy={
 it:{"nav.about":"Visione","nav.contact":"Parliamone","hero.kicker":"STUDIO DIGITALE INDIPENDENTE · ITALIA","hero.title":"Le idee migliori<br>meritano di <em>esistere.</em>","hero.text":"Progettiamo app, giochi e prodotti digitali con un’idea chiara: trasformare intuizioni semplici in esperienze che le persone scelgono ogni giorno.","hero.cta1":"Esplora i progetti","hero.cta2":"Hai un’idea? Raccontacela","hero.note":"progetti in movimento","vision.kicker":"IL NOSTRO APPROCCIO","vision.title":"Dalla prima intuizione<br>al <span>prossimo tap.</span>","vision.text":"XVII Digital è uno studio indipendente che sviluppa prodotti digitali propri. Partiamo da un bisogno, lo trasformiamo in un’esperienza chiara e continuiamo a migliorarla insieme alle persone che la usano.","vision.link":"Scopri cosa stiamo creando","vision.aside":"Piccoli team. Idee ambiziose. Prodotti fatti per evolversi.","projects.kicker":"PRODOTTI XVII DIGITAL","projects.title":"Tre idee. Tre modi<br>di vivere il digitale.","projects.intro":"Esplora i progetti: due sono già su Android, uno sta prendendo forma.","myday.status":"DISPONIBILE SU ANDROID","myday.text":"Una social app costruita intorno alla vita vera. Condividi momenti durante la giornata, scopri cosa succede nel mondo e segui le persone che vuoi avere vicino.","myday.tag1":"Momenti quotidiani","myday.tag2":"Discover","myday.tag3":"La tua community","duo.status":"DISPONIBILE SU ANDROID","duo.text":"Il gioco di parole dove velocità, intuito e strategia si incontrano. Sfida gli amici, affronta nuovi avversari e trova la parola giusta prima degli altri.","duo.tag1":"Duelli","duo.tag2":"Categorie","duo.tag3":"Party con amici","store.soon":"Coming soon","skillo.status":"IN FASE DI SVILUPPO","skillo.text":"Una nuova idea sta crescendo. Stiamo lavorando a Skillo: presto potremo raccontarti di più.","skillo.progress":"Il progetto prende forma","skillo.link":"Vuoi sapere quando arriva?","manifesto.kicker":"COSA CI GUIDA","manifesto.title":"Non pubblichiamo<br>idee. Le <em>facciamo crescere.</em>","principle.one":"Progettiamo per le persone, partendo da bisogni reali.","principle.two":"Curiamo ogni dettaglio, dall’idea all’esperienza quotidiana.","principle.three":"Ascoltiamo, impariamo e miglioriamo a ogni versione.","contact.kicker":"PROSSIMA IDEA: LA TUA?","contact.title":"Hai un’idea<br>che non ti lascia?","contact.text":"Un’app, un software, un progetto digitale. Raccontaci cosa immagini: le buone idee iniziano con una conversazione.","form.name":"IL TUO NOME","form.message":"L’IDEA IN BREVE","form.submit":"Apri la tua email","form.note":"Il messaggio verrà preparato nella tua app di posta.","footer.line":"Idee indipendenti. Esperienze digitali.","footer.top":"TORNA SU","footer.rights":"TUTTI I DIRITTI RISERVATI"},
 en:{"nav.about":"Our vision","nav.contact":"Let's talk","hero.kicker":"INDEPENDENT DIGITAL STUDIO · ITALY","hero.title":"Good ideas<br>deserve to <em>exist.</em>","hero.text":"We design apps, games and digital products with one clear idea: turning simple insights into experiences people choose every day.","hero.cta1":"Explore our work","hero.cta2":"Have an idea? Tell us","hero.note":"projects in motion","vision.kicker":"OUR APPROACH","vision.title":"From the first idea<br>to the <span>next tap.</span>","vision.text":"XVII Digital is an independent studio creating its own digital products. We start with a need, shape it into a clear experience and keep improving it with the people who use it.","vision.link":"See what we’re creating","vision.aside":"Small teams. Ambitious ideas. Products made to evolve.","projects.kicker":"XVII DIGITAL PRODUCTS","projects.title":"Three ideas. Three ways<br>to experience digital.","projects.intro":"Explore our projects: two are on Android and one is taking shape.","myday.status":"AVAILABLE ON ANDROID","myday.text":"A social app built around real life. Share moments throughout your day, discover what’s happening around the world and keep up with the people you want close.","myday.tag1":"Everyday moments","myday.tag2":"Discover","myday.tag3":"Your community","duo.status":"AVAILABLE ON ANDROID","duo.text":"A word game where speed, instinct and strategy meet. Challenge friends, take on new opponents and find the right word before anyone else.","duo.tag1":"Duels","duo.tag2":"Categories","duo.tag3":"Party with friends","store.soon":"Coming soon","skillo.status":"IN DEVELOPMENT","skillo.text":"A new idea is growing. We’re working on Skillo and will have more to share soon.","skillo.progress":"The project is taking shape","skillo.link":"Want to know when it arrives?","manifesto.kicker":"WHAT GUIDES US","manifesto.title":"We don’t just launch<br>ideas. We help them <em>grow.</em>","principle.one":"We design for people, starting with real needs.","principle.two":"We care about every detail, from idea to daily experience.","principle.three":"We listen, learn and improve with every release.","contact.kicker":"IS YOUR IDEA NEXT?","contact.title":"Got an idea<br>you can’t let go?","contact.text":"An app, software or digital project. Tell us what you have in mind: good ideas start with a conversation.","form.name":"YOUR NAME","form.message":"YOUR IDEA, IN BRIEF","form.submit":"Open your email","form.note":"Your message will be prepared in your email app.","footer.line":"Independent ideas. Digital experiences.","footer.top":"BACK TO TOP","footer.rights":"ALL RIGHTS RESERVED"}
};

Object.assign(copy.it,{
 'hero.kicker':'IDEE INDIPENDENTI. ENERGIA DIGITALE.',
 'hero.title':'Dall’immaginazione.<br><em>Al tuo prossimo tap.</em>',
 'hero.text':'App, giochi e software. Diamo forma alle idee e le trasformiamo in esperienze da vivere.',
 'hero.cta1':'Entra nei nostri progetti','hero.cta2':'Accendiamo la tua idea',
 'vision.aside':'Idee ambiziose. Design curato. Prodotti in evoluzione.',
 'gallery.hint':'Esplora l’app · Tocca per ingrandire',
 'skillo.progress':'Nuove idee in lavorazione'
});
Object.assign(copy.en,{
 'hero.kicker':'INDEPENDENT IDEAS. DIGITAL ENERGY.',
 'hero.title':'From your imagination.<br><em>To your next tap.</em>',
 'hero.text':'Apps, games and software. We turn ideas into experiences you can live.',
 'hero.cta1':'Explore our projects','hero.cta2':'Let’s spark your idea',
 'vision.aside':'Ambitious ideas. Thoughtful design. Products that evolve.',
 'gallery.hint':'Explore the app · Tap to enlarge',
 'skillo.progress':'New ideas in the making'
});
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
const pointerFine=window.matchMedia('(hover: hover) and (pointer: fine)');
function setLanguage(lang){
 if(!copy[lang])lang='it';
 document.documentElement.lang=lang;
 $$('[data-i18n]').forEach(el=>{const text=copy[lang][el.dataset.i18n];if(text)el.innerHTML=text});
 $$('.lang').forEach(b=>{const active=b.dataset.lang===lang;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 const form=$('.contact-form');
 if(form){form.elements.name.placeholder=lang==='en'?'Your name':'Il tuo nome';form.elements.message.placeholder=lang==='en'?'Tell us what you have in mind…':'Raccontaci cosa hai in mente…'}
 $$('.store-link small').forEach(el=>el.textContent=lang==='en'?'GET IT ON':'DISPONIBILE SU');
 $$('.project-legal a').forEach(el=>{if(el.href.includes('/terms/'))el.textContent=lang==='en'?'Terms':'Termini';if(el.href.includes('/support/'))el.textContent=lang==='en'?'Support':'Supporto'});
 try{localStorage.setItem('xvii-lang',lang)}catch{}
}
$$('.lang').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
let language='it';try{language=localStorage.getItem('xvii-lang')||'it'}catch{}setLanguage(language);
const menu=$('.menu-toggle'),nav=$('.nav');
function closeMenu(){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')}
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Chiudi il menu':'Apri il menu')});
$$('.nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
if($('#year'))$('#year').textContent=new Date().getFullYear();
if('IntersectionObserver'in window){
 document.documentElement.classList.add('js-ready');
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.08});
 $$('.reveal').forEach(el=>observer.observe(el));
}
$('.contact-form')?.addEventListener('submit',e=>{
 e.preventDefault();const form=new FormData(e.currentTarget);const en=document.documentElement.lang==='en';
 const subject=encodeURIComponent(en?'XVII Digital — project idea':'XVII Digital — nuova idea');
 const body=encodeURIComponent(`${en?'Name':'Nome'}: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`);
 window.location.href=`mailto:admin@xviidigital.com?subject=${subject}&body=${body}`;
});
// Native dialog: keyboard navigation, Escape, focus restoration and tap-to-enlarge.
const viewer=$('.image-viewer');let currentShots=[],currentShot=0,viewerTrigger=null;
function renderShot(){const b=currentShots[currentShot];if(!b)return;const img=$('img',viewer);img.src=b.dataset.full;img.alt=$('img',b).alt;$('.viewer-caption',viewer).textContent=`${b.dataset.product==='myday'?'MyDay':'DUO'} · ${currentShot+1} / ${currentShots.length}`}
$$('.app-shot').forEach(b=>b.addEventListener('click',()=>{
 viewerTrigger=b;currentShots=$$('.app-shot').filter(x=>x.dataset.product===b.dataset.product).sort((a,b)=>a.dataset.full.localeCompare(b.dataset.full));currentShot=currentShots.indexOf(b);renderShot();
 if(typeof viewer.showModal==='function'){viewer.showModal();document.body.classList.add('no-scroll')}else{window.open(b.dataset.full,'_blank','noopener')}
}));
$('.viewer-close',viewer)?.addEventListener('click',()=>viewer.close());
$('.viewer-prev',viewer)?.addEventListener('click',()=>{currentShot=(currentShot+currentShots.length-1)%currentShots.length;renderShot()});
$('.viewer-next',viewer)?.addEventListener('click',()=>{currentShot=(currentShot+1)%currentShots.length;renderShot()});
viewer?.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();currentShot=(currentShot+(e.key==='ArrowRight'?1:-1)+currentShots.length)%currentShots.length;renderShot()}});
viewer?.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close()}});
viewer?.addEventListener('close',()=>{document.body.classList.remove('no-scroll');viewerTrigger?.focus()});
// Pointer-driven illumination, magnetic controls and 3D screenshot parallax.
const light=$('.cursor-light');let point={x:innerWidth/2,y:innerHeight/2};let pointerQueued=false;
window.addEventListener('pointermove',e=>{
 if(!pointerFine.matches||motion.matches)return;
 point.x=e.clientX;point.y=e.clientY;
 if(!pointerQueued){pointerQueued=true;requestAnimationFrame(()=>{light?.style.setProperty('--cx',point.x+'px');light?.style.setProperty('--cy',point.y+'px');pointerQueued=false})}
},{passive:true});
$$('.spotlight').forEach(el=>{
 el.addEventListener('pointermove',e=>{if(!pointerFine.matches||motion.matches)return;const r=el.getBoundingClientRect();el.style.setProperty('--mx',e.clientX-r.left+'px');el.style.setProperty('--my',e.clientY-r.top+'px');el.style.setProperty('--hover','1')});
 el.addEventListener('pointerleave',()=>el.style.setProperty('--hover','0'));
});
$$('[data-tilt]').forEach(el=>{
 el.addEventListener('pointermove',e=>{if(!pointerFine.matches||motion.matches)return;const r=el.getBoundingClientRect();el.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*12+'deg');el.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*8+'deg')});
 el.addEventListener('pointerleave',()=>{el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')});
});
$$('.magnetic').forEach(el=>{
 el.addEventListener('pointermove',e=>{if(!pointerFine.matches||motion.matches)return;const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.18}px)`});
 el.addEventListener('pointerleave',()=>el.style.transform='');
});
const hero=$('.hero');
hero?.addEventListener('pointermove',e=>{if(!pointerFine.matches||motion.matches)return;const r=hero.getBoundingClientRect();$$('.hero-floating').forEach((el,i)=>{el.style.setProperty('--px',((e.clientX-r.left)/r.width-.5)*(i+1)*13+'px');el.style.setProperty('--py',((e.clientY-r.top)/r.height-.5)*(i+1)*10+'px')})},{passive:true});
const progress=$('.scroll-progress'),header=$('.site-header');let scrollQueued=false;
function onScroll(){const full=document.documentElement.scrollHeight-innerHeight;progress?.style.setProperty('--progress',full>0?Math.min(1,scrollY/full):0);header?.classList.toggle('scrolled',scrollY>25);scrollQueued=false}
window.addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
// Lightweight particle field. Runs only while the hero is visible and the tab is active.
const canvas=$('#particle-field'),ctx=canvas?.getContext('2d');
if(ctx){
 let w=0,h=0,particles=[],raf=0,visible=true,lastFrame=0;
 function resize(){const rect=hero.getBoundingClientRect();w=rect.width;h=rect.height;const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);particles=Array.from({length:w<700?32:68},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.3+.4}));draw()}
 function draw(){ctx.clearRect(0,0,w,h);const rect=hero.getBoundingClientRect(),mx=point.x,my=point.y-rect.top;
 for(let i=0;i<particles.length;i++){const p=particles[i];if(!motion.matches){p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(140,233,228,.55)';ctx.fill();
 for(let j=i+1;j<particles.length;j++){const q=particles[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<125){ctx.strokeStyle=`rgba(91,194,203,${(1-d/125)*.14})`;ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}
 const d=Math.hypot(p.x-mx,p.y-my);if(pointerFine.matches&&!motion.matches&&d<170){ctx.strokeStyle=`rgba(119,255,215,${(1-d/170)*.45})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mx,my);ctx.stroke()}}
 }
 function tick(t){raf=0;if(!visible||document.hidden||motion.matches)return;if(t-lastFrame>30){draw();lastFrame=t}raf=requestAnimationFrame(tick)}
 function sync(){if(raf)cancelAnimationFrame(raf);raf=0;if(!motion.matches&&visible&&!document.hidden)raf=requestAnimationFrame(tick);else draw()}
 if('ResizeObserver'in window)new ResizeObserver(resize).observe(hero);else window.addEventListener('resize',resize);
 if('IntersectionObserver'in window)new IntersectionObserver(es=>{visible=es[0].isIntersecting;sync()}).observe(hero);
 document.addEventListener('visibilitychange',sync);motion.addEventListener('change',sync);resize();sync();
}
