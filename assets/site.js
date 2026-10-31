const toggle=document.querySelector('[data-menu]'), nav=document.querySelector('[data-nav]');
if(toggle&&nav){
 const close=()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
for(const root of document.querySelectorAll('[data-filter-list]')){
 const search=root.querySelector('input[type="search"]'), buttons=[...root.querySelectorAll('[data-filter]')], cards=[...root.querySelectorAll('[data-card]')],empty=root.querySelector('[data-empty]'),count=root.querySelector('[data-count]');let active='All';
 function update(){let n=0;const term=(search?.value||'').trim().toLowerCase();cards.forEach(card=>{const show=(active==='All'||card.dataset.category===active)&&card.dataset.search.includes(term);card.hidden=!show;if(show)n++;});if(empty)empty.hidden=n>0;if(count)count.textContent=n+' '+(n===1?'entry':'entries');}
 buttons.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;buttons.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});update();}));search?.addEventListener('input',update);update();
}
for(const button of document.querySelectorAll('[data-copy-email]'))button.addEventListener('click',async()=>{const label=button.textContent;try{await navigator.clipboard.writeText(button.dataset.copyEmail);button.textContent='Email copied ✓';}catch{button.textContent=button.dataset.copyEmail;}setTimeout(()=>button.textContent=label,3500);});
for(const button of document.querySelectorAll('[data-share]'))button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);button.textContent='Link copied ✓';}catch{button.textContent='Copy the URL in your address bar';}setTimeout(()=>button.textContent='Copy article link ↗',4000);});
document.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
const progress=document.querySelector('[data-progress]');if(progress){const update=()=>{const body=document.documentElement;progress.style.width=Math.min(100,100*window.scrollY/(body.scrollHeight-window.innerHeight))+'%';};window.addEventListener('scroll',update,{passive:true});update();}
