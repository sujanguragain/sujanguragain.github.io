const toggle=document.querySelector('[data-menu]'),nav=document.querySelector('[data-nav]');
if(toggle&&nav){
 document.querySelector('.site-header').classList.add('nav-ready');
 toggle.hidden=false;
 const close=()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
 document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))close();});
}
for(const root of document.querySelectorAll('[data-filter-list]')){
 const search=root.querySelector('input[type="search"]'),category=root.querySelector('[data-category-select]'),cards=[...root.querySelectorAll('[data-card]')],empty=root.querySelector('[data-empty]'),count=root.querySelector('[data-count]');
 const controls=root.querySelector('[data-filters]');if(controls)controls.hidden=false;
 function update(){
  let n=0;const terms=(search?.value||'').trim().toLowerCase().split(/\s+/).filter(Boolean),active=category?.value||'All';
  cards.forEach(card=>{const show=(active==='All'||card.dataset.category===active)&&terms.every(term=>card.dataset.search.includes(term));card.hidden=!show;if(show)n++;});
  if(empty)empty.hidden=n>0;
  if(count)count.textContent=n+' '+(n===1?'entry':'entries');
 }
 category?.addEventListener('change',update);search?.addEventListener('input',update);update();
}
for(const button of document.querySelectorAll('[data-share]')){
 button.hidden=false;const label=button.innerHTML;button.setAttribute('aria-live','polite');
 button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(document.querySelector('link[rel="canonical"]').href);button.textContent='Link copied ✓';}catch{button.textContent='Copy the URL from your address bar';}setTimeout(()=>button.innerHTML=label,4000);});
}
const print=document.querySelector('[data-print]');if(print){print.hidden=false;print.addEventListener('click',()=>window.print());}
const progress=document.querySelector('[data-progress]');
if(progress){const update=()=>{const height=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(height>0?Math.min(100,Math.max(0,100*window.scrollY/height)):0)+'%';};window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();}
