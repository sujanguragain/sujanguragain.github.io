import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {escapeHTML as e,renderMarkdown,parsePost} from '../assets/markdown.js';
import {art} from './artwork.mjs';

const out=path.resolve('dist');
const readJSON=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const profile=readJSON('content/profile.json');
const projects=readJSON('content/projects.json');
const redirects=readJSON('content/redirects.json');
const config=readJSON('site.config.json');
const origin=(process.env.SITE_URL||config.previewOrigin||profile.website).replace(/\/$/,'');
const artTypes=['security','ai','monitoring','delivery','database','logging','cloud'];
const posts=fs.readdirSync('content/posts').filter(f=>f.endsWith('.md')).map(filename=>{
 const p=parsePost(fs.readFileSync('content/posts/'+filename,'utf8'));
 if(!p.title||!p.slug||!p.date||!p.category||!p.excerpt)throw Error('Missing required post metadata: '+filename);
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug))throw Error('Invalid slug: '+filename);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(p.date)||!Number.isFinite(Date.parse(p.date))||new Date(p.date).toISOString().slice(0,10)!==p.date)throw Error('Invalid date: '+filename);
 if(!Array.isArray(p.tags)||typeof p.draft!=='boolean')throw Error('Post tags must be an array and draft must be a boolean: '+filename);
 if(p.updated&&(!/^\d{4}-\d{2}-\d{2}$/.test(p.updated)||!Number.isFinite(Date.parse(p.updated))||new Date(p.updated).toISOString().slice(0,10)!==p.updated))throw Error('Invalid update date: '+filename);
 if(p.art&&!artTypes.includes(p.art))throw Error('Unknown artwork: '+filename);
 return {...p,filename,minutes:Math.max(1,Math.ceil(p.body.split(/\s+/).length/220)),...renderMarkdown(p.body)};
});
if(new Set(posts.map(p=>p.slug)).size!==posts.length)throw Error('Duplicate post slugs');
if(new Set(projects.map(p=>p.slug)).size!==projects.length)throw Error('Duplicate project slugs');
for(const p of projects)if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)||!artTypes.includes(p.art))throw Error('Invalid project: '+p.slug);
const published=posts.filter(p=>!p.draft).sort((a,b)=>b.date.localeCompare(a.date)||(Number(a.order)||99)-(Number(b.order)||99)||a.slug.localeCompare(b.slug));
fs.rmSync(out,{force:true,recursive:true});
fs.mkdirSync(out,{recursive:true});
fs.cpSync('assets',path.join(out,'assets'),{recursive:true});
for(const type of artTypes)fs.writeFileSync(path.join(out,'assets',`art-${type}.svg`),art(type));
const asset=name=>'/assets/'+name+'?v='+createHash('sha256').update(fs.readFileSync(path.join(out,'assets',name))).digest('hex').slice(0,10);
const date=s=>new Date(s+'T12:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'});
const arrow='<span class="arrow" aria-hidden="true">↗</span>';
const right='<span class="arrow" aria-hidden="true">→</span>';
const ext=(url,label,cls='')=>`<a class="${cls}" href="${e(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
const tags=items=>`<div class="tags">${items.map(t=>`<span>${e(t)}</span>`).join('')}</div>`;
const eyebrow=text=>`<p class="eyebrow">${e(text)}</p>`;
const illustration=(type,cls='')=>`<img class="${cls}" src="${asset('art-'+(type||'delivery')+'.svg')}" width="520" height="290" alt="" loading="lazy">`;
const brand=()=>`<a class="brand" href="/" aria-label="Sujan Guragain home"><img src="${asset('mark.svg')}" width="44" height="44" alt=""><span>Sujan Guragain</span></a>`;
function header(active){
 return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="wrap nav-bar">${brand()}<button class="menu-toggle" data-menu aria-label="Toggle navigation" aria-controls="main-nav" aria-expanded="false" hidden>Menu <span aria-hidden="true">☰</span></button><nav class="nav-links" data-nav id="main-nav" aria-label="Main navigation">${[['Home','/'],['Work','/work/'],['Journal','/journal/'],['About','/about/']].map(([label,url])=>`<a href="${url}"${label===active?' aria-current="page"':''}>${label}</a>`).join('')}<a class="nav-contact" href="mailto:${e(profile.email)}">Contact ${arrow}</a></nav></div></header>`;
}
function footer(){
 return `<footer class="footer"><div class="wrap"><div class="footer-row">${brand()}<div class="footer-links">${ext(profile.github,'GitHub '+arrow)}${ext(profile.linkedin,'LinkedIn '+arrow)}<a href="mailto:${e(profile.email)}">Email ${arrow}</a><a href="/feed.xml">RSS ${arrow}</a></div></div><div class="footer-bottom"><span>© Sujan Guragain</span><a href="/privacy/">Privacy</a></div></div></footer>`;
}
function contact(){
 return `<section class="contact-panel" id="contact"><div>${eyebrow('Contact')}<h2>Have a project in mind?</h2><p>Get in touch about infrastructure, DevOps or security work.</p></div><a class="button button-light" href="mailto:${e(profile.email)}">Let’s talk ${arrow}</a></section>`;
}
const pages=[];
function page(route,title,description,active,body,extra={}){
 const canonical=origin+(extra.canonical||route);
 const fullTitle=route==='/'?'Sujan Guragain · DevOps & Systems Engineer':title+' | Sujan Guragain';
 const schema=extra.schema||{'@context':'https://schema.org','@type':'WebPage',name:fullTitle,description,url:canonical,about:{'@type':'Person',name:profile.name,url:origin+'/about/'}};
 const html=`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(fullTitle)}</title><meta name="description" content="${e(description)}"><meta name="theme-color" content="#19343e">${extra.noindex?'<meta name="robots" content="noindex,follow">':''}${extra.redirect?`<meta http-equiv="refresh" content="0;url=${e(extra.redirect)}">`:''}<link rel="canonical" href="${e(canonical)}"><link rel="icon" type="image/svg+xml" href="${asset('favicon.svg')}"><link rel="alternate" type="application/rss+xml" title="Sujan Guragain · Journal" href="/feed.xml"><meta property="og:type" content="${extra.article?'article':'website'}"><meta property="og:title" content="${e(fullTitle)}"><meta property="og:description" content="${e(description)}"><meta property="og:url" content="${e(canonical)}"><meta property="og:image" content="${origin}/assets/portrait.webp"><meta property="og:image:alt" content="Portrait of Sujan Guragain"><meta name="twitter:card" content="summary"><link rel="stylesheet" href="${asset('styles.css')}"><script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script><script type="module" src="${asset('site.js')}"></script></head><body>${header(active)}${extra.article?'<div class="progress" data-progress aria-hidden="true"></div>':''}<main id="main">${body}</main>${footer()}</body></html>`;
 const file=route==='/404.html'?path.join(out,'404.html'):path.join(out,route,'index.html');
 fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,html);
 if(!extra.noindex)pages.push(route);
}
function projectCard(p,level=3){
 return `<a class="project-card" href="/work/${e(p.slug)}/" data-card data-category="${e(p.category)}" data-search="${e([p.title,p.summary,p.category,...p.tags].join(' ').toLowerCase())}"><div class="project-art">${illustration(p.art)}</div><div class="project-meta"><span>${e(p.category)}</span><span>${e(p.year)}</span></div><h${level}>${e(p.title)} ${arrow}</h${level}><p>${e(p.summary)}</p>${tags(p.tags)}</a>`;
}
function articleCard(p){
 return `<a class="article-card" href="/journal/${e(p.slug)}/" data-card data-category="${e(p.category)}" data-search="${e([p.title,p.excerpt,p.category,...p.tags].join(' ').toLowerCase())}"><div class="article-art">${illustration(p.art)}</div><div class="article-card-content">${eyebrow(p.category)}<h2>${e(p.title)}</h2><p>${e(p.excerpt)}</p><div class="article-card-footer"><span><time datetime="${p.date}">${date(p.date)}</time> · ${p.minutes} min read</span>${arrow}</div></div></a>`;
}
function filter(categories,placeholder){
 return `<div class="filter-bar" data-filters hidden><label class="search-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg><span class="sr-only">${e(placeholder)}</span><input type="search" placeholder="${e(placeholder)}"></label><label class="category-select"><span class="sr-only">Filter by topic</span><select data-category-select><option value="All">All topics</option>${categories.map(c=>`<option value="${e(c)}">${e(c)}</option>`).join('')}</select></label></div>`;
}
const empty='<div class="empty-state" data-empty hidden><h2>No matches found.</h2><p>Try another search or select a different topic.</p></div>';
const personSchema={'@context':'https://schema.org','@type':'Person',name:profile.name,jobTitle:profile.role,url:origin,sameAs:[profile.github,profile.linkedin],image:origin+'/assets/portrait.webp',address:{'@type':'PostalAddress',addressLocality:'Kathmandu',addressCountry:'NP'}};

page('/','Sujan Guragain',profile.description,'Home',`
 <div class="hero-section"><div class="wrap"><section class="hero">
  <div class="hero-copy">${eyebrow('Kathmandu, Nepal')}<h1>Sujan<br>Guragain<span class="name-dot">.</span></h1><p class="hero-role">DevOps &amp; Systems Engineer</p><p class="hero-description">${e(profile.intro)}</p><div class="actions"><a class="button" href="/work/">View my work ${right}</a><a class="text-link" href="/journal/">Read the journal ${arrow}</a></div><div class="hero-links">${ext(profile.linkedin,'LinkedIn '+arrow)}${ext(profile.github,'GitHub '+arrow)}</div></div>
  <figure class="portrait-frame"><img src="/assets/portrait.webp" width="1000" height="1000" alt="Sujan Guragain" fetchpriority="high"><figcaption><span>Systems. Automation. Security.</span><span aria-hidden="true">SG / 01</span></figcaption></figure>
 </section><div class="current-role"><span>Currently</span><p>Systems &amp; DevOps at <strong>Lively Software</strong><span class="role-divider">/</span>Network security projects with <strong>Etech International</strong></p></div></div></div>
 <div class="wrap"><section class="section"><div class="section-head"><div>${eyebrow('01 / Work')}<h2>Selected projects</h2><p>Infrastructure and tools I work on.</p></div><a class="text-link" href="/work/">View all work ${arrow}</a></div><div class="project-grid">${projects.filter(p=>p.featured).reverse().map(p=>projectCard(p)).join('')}</div></section></div>
 <section class="skills-band"><div class="wrap skills-intro"><div>${eyebrow('In practice')}<h2>From the server<br>to the service.</h2></div><div class="skills-band-copy"><p>Linux, cloud infrastructure and the tools that keep applications running.</p><div class="tool-list">${['Linux','AWS','Docker','Jenkins','Grafana','Prometheus','MySQL','Tomcat'].map(x=>`<span>${x}</span>`).join('')}</div></div></div></section>
 <div class="wrap"><section class="section"><div class="section-head"><div>${eyebrow('02 / Journal')}<h2>Recent writing</h2><p>Technical notes on systems, security and automation.</p></div><a class="text-link" href="/journal/">All articles ${arrow}</a></div><div class="journal-list">${published.slice(0,3).map((p,i)=>`<a class="journal-row" href="/journal/${p.slug}/"><span class="journal-index">0${i+1}</span><div>${eyebrow(p.category)}<h3>${e(p.title)}</h3><p>${e(p.excerpt)}</p><span class="journal-date">${date(p.date)} · ${p.minutes} min read</span></div>${arrow}</a>`).join('')}</div></section><section class="about-preview"><div>${eyebrow('03 / About')}<h2>Working across<br>the whole system.</h2></div><div><p>${e(profile.about)}</p><a class="text-link" href="/about/">Experience &amp; background ${arrow}</a></div></section>${contact()}</div>`,{schema:personSchema});

page('/work/','Work','Projects in monitoring, application infrastructure, security, automation and private AI.','Work',`
 <div class="wrap"><div class="page-intro">${eyebrow('Work')}<h1>Projects &amp;<br><span class="muted-heading">day-to-day engineering.</span></h1><p>A selection of infrastructure projects and the production systems I support.</p></div><div data-filter-list>${filter([...new Set(projects.map(p=>p.category))],'Search projects, tools or topics…')}<div class="list-summary"><span>Projects &amp; ongoing work</span><span data-count role="status" aria-live="polite">${projects.length} projects</span></div><div class="project-grid all-projects">${projects.map(p=>projectCard(p,2)).join('')}${empty}</div></div>${contact()}</div>`);
for(const p of projects){
 const related=published.filter(post=>post.tags.some(t=>p.tags.includes(t))).slice(0,2);
 page('/work/'+p.slug+'/',p.title,p.summary,'Work',`
 <div class="wrap"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/work/">Work</a><span aria-hidden="true">/</span><span>${e(p.category)}</span></nav><div class="detail-title">${eyebrow(p.category+' / '+p.year)}<h1>${e(p.title)}</h1><p>${e(p.summary)}</p></div><div class="detail-art art-${e(p.art)}">${illustration(p.art)}</div><div class="detail-layout"><aside class="detail-aside"><dl><div><dt>Focus</dt><dd>${e(p.category)}</dd></div><div><dt>Period</dt><dd>${e(p.year)}</dd></div><div><dt>Tools</dt><dd>${tags(p.tags)}</dd></div></dl><a class="text-link" href="/work/">← All projects</a></aside><article class="prose"><h2>Overview</h2><p>${e(p.context)}</p><h2>My work</h2><ul>${p.work.map(x=>`<li>${e(x)}</li>`).join('')}</ul><h2>In operation</h2><p>${e(p.outcome)}</p><p>${e(p.takeaway)}</p>${related.length?`<div class="related-notes"><h2>Related notes</h2><ul>${related.map(x=>`<li><a href="/journal/${x.slug}/">${e(x.title)}</a></li>`).join('')}</ul></div>`:''}</article></div>${contact()}</div>`);
}
page('/journal/','Journal','Technical notes on Grafana, Prometheus, OWASP ZAP, n8n, Nmap, MySQL, Tomcat, ELK and private AI.','Journal',`
 <div class="wrap"><div class="page-intro journal-intro">${eyebrow('Journal')}<h1>Notes from<br><span class="muted-heading">the work.</span></h1><p>Monitoring, automation, application infrastructure and security. Practical notes to revisit and build on.</p><a class="text-link" href="/feed.xml">Follow via RSS ${arrow}</a></div><div data-filter-list>${filter([...new Set(published.map(p=>p.category))],'Search articles, tools or topics…')}<div class="list-summary"><span>Articles &amp; technical notes</span><span data-count role="status" aria-live="polite">${published.length} articles</span></div><div class="journal-grid">${published.map(articleCard).join('')}${empty}</div></div><aside class="note-band"><div><h2>Keep up with new posts</h2><p>Add this journal to your RSS reader.</p></div><a class="button secondary" href="/feed.xml">Open RSS feed ${arrow}</a></aside></div>`,{schema:{'@context':'https://schema.org','@type':'Blog',name:'Sujan Guragain · Journal',url:origin+'/journal/',author:{'@type':'Person',name:profile.name,url:origin+'/about/'}}});
for(const p of published){
 const related=published.filter(x=>x.slug!==p.slug).sort((a,b)=>b.tags.filter(t=>p.tags.includes(t)).length-a.tags.filter(t=>p.tags.includes(t)).length).slice(0,2);
 page('/journal/'+p.slug+'/',p.title,p.excerpt,'Journal',`
 <div class="wrap"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/journal/">← Journal</a><span aria-hidden="true">/</span><span>${e(p.category)}</span></nav><header class="article-header">${eyebrow(p.category)}<h1>${e(p.title)}</h1><p>${e(p.excerpt)}</p><div class="article-byline"><img src="/assets/portrait.webp" width="44" height="44" alt=""><div><a href="/about/">${e(profile.name)}</a><span><time datetime="${p.date}">${date(p.date)}</time> · ${p.minutes} min read</span></div></div></header><div class="article-layout"><article class="prose article-body">${p.html}<div class="article-end">${tags(p.tags)}<button class="subtle-button" data-share hidden>Copy article link ${arrow}</button></div></article><aside class="toc"><strong>On this page</strong><nav aria-label="Article contents">${p.headings.filter(h=>h.level===2).map(h=>`<a href="#${h.id}">${e(h.text)}</a>`).join('')}</nav><a class="toc-back" href="/journal/">← All articles</a></aside></div><section class="related-reading"><div class="section-head"><h2>More from the journal</h2><a class="text-link" href="/journal/">All writing ${arrow}</a></div><div class="related-grid">${related.map(x=>`<a href="/journal/${x.slug}/">${eyebrow(x.category)}<h3>${e(x.title)} ${arrow}</h3><p>${e(x.excerpt)}</p></a>`).join('')}</div></section></div>`,{article:true,schema:{'@context':'https://schema.org','@type':'BlogPosting',headline:p.title,description:p.excerpt,datePublished:p.date,dateModified:p.updated||p.date,author:{'@type':'Person',name:profile.name,url:origin+'/about/'},mainEntityOfPage:origin+'/journal/'+p.slug+'/',image:origin+'/assets/portrait.webp'}});
}
page('/about/','About','Experience and background of Sujan Guragain, a DevOps and systems engineer based in Kathmandu, Nepal.','About',`
 <div class="wrap"><section class="about-hero"><div>${eyebrow('About')}<h1>I’m Sujan.<br><span class="muted-heading">Based in Kathmandu.</span></h1><p>${e(profile.about)}</p><p>I work at Chez Inspheris / Lively Software, with a parallel network security project engagement at Etech International.</p><div class="actions"><a class="button" href="/resume/">View résumé ${arrow}</a>${ext(profile.linkedin,'LinkedIn '+arrow,'text-link')}</div></div><img class="about-image" src="/assets/portrait.webp" width="1000" height="1000" alt="Sujan Guragain" fetchpriority="high"></section><section class="two-col"><div>${eyebrow('Experience')}<h2>Where I’ve worked</h2></div><div>${profile.experience.map(x=>`<div class="timeline-item"><div class="period">${e(x.period)}</div><h3>${e(x.role)}</h3><span class="company">${e(x.company)}</span><p>${e(x.description)}</p></div>`).join('')}</div></section><section class="two-col" id="education"><div>${eyebrow('Education')}<h2>Academic background</h2></div><div>${profile.education.map(x=>`<div class="education-item"><h3>${e(x.title)}</h3><p>${e(x.school)}</p><span class="period">${e(x.status)}</span></div>`).join('')}</div></section><section class="two-col"><div>${eyebrow('Tools & technologies')}<h2>Technical focus</h2></div><div class="skill-groups">${profile.skills.map(s=>`<div><h3>${e(s.title)}</h3><p>${s.items.map(e).join(' · ')}</p></div>`).join('')}</div></section>${contact()}</div>`,{schema:personSchema});
page('/resume/','Résumé','Professional experience, technical skills and education of Sujan Guragain.','About',`
 <div class="wrap"><article class="resume"><header><p class="eyebrow">Résumé</p><h1>${e(profile.name)}</h1><p class="role">${e(profile.role)}</p><p class="resume-contact">${e(profile.location)}<br><a href="mailto:${e(profile.email)}">${e(profile.email)}</a><br><a href="${e(profile.website)}">sujanguragain.com.np</a></p><div class="actions no-print"><button class="button" data-print hidden>Print / save PDF ↓</button><a class="text-link" href="/about/">← About</a></div></header><h2>Profile</h2><p>${e(profile.about)}</p><h2>Professional experience</h2>${profile.experience.map(x=>`<section class="resume-experience"><h3>${e(x.role)}</h3><p class="resume-company">${e(x.company)} · ${e(x.period)}</p><p>${e(x.description)}</p></section>`).join('')}<h2>Technical skills</h2>${profile.skills.map(x=>`<p><strong>${e(x.title)}:</strong> ${x.items.map(e).join(', ')}</p>`).join('')}<h2>Education</h2>${profile.education.map(x=>`<p><strong>${e(x.title)}</strong> · ${e(x.status)}<br>${e(x.school)}</p>`).join('')}<h2>Certifications</h2>${profile.certifications.map(x=>`<p>${e(x.name)} (${e(x.short)}) · ${e(x.year)}</p>`).join('')}</article></div>`);
page('/privacy/','Privacy','Information about data, external links and contact on this website.','',`
 <div class="wrap"><div class="page-intro">${eyebrow('Website information')}<h1>Privacy</h1><p>How this website handles data.</p></div><article class="prose privacy-copy"><h2>Visiting this website</h2><p>This is a static website hosted on GitHub Pages. It has no visitor accounts, advertising trackers, analytics scripts or contact forms. It does not set cookies or save visitor data in browser storage. The hosting provider may process connection and security logs.</p><h2>External links and email</h2><p>Links to GitHub, LinkedIn and other websites take you to services with their own privacy policies. Email links open your email application.</p><h2>Contact</h2><p>For questions about this website, email <a href="mailto:${e(profile.email)}">${e(profile.email)}</a>.</p></article></div>`);
page('/404.html','Page not found','The requested page could not be found.','',`
 <div class="wrap not-found">${eyebrow('404')}<h1>Page not found.</h1><p>The link may have changed. You can find recent projects and articles from the homepage.</p><div class="actions"><a class="button" href="/">Back to home ${right}</a><a class="text-link" href="/journal/">Browse the journal ${arrow}</a></div></div>`,{noindex:true});
for(const [from,to] of Object.entries(redirects)){
 if(!pages.includes(to)||pages.includes(from))throw Error('Invalid redirect: '+from);
 page(from,'Article moved','This article has moved to a new address.','Journal',`<div class="wrap not-found">${eyebrow('Journal')}<h1>This article has moved.</h1><p><a class="text-link" href="${e(to)}">Continue to the updated article ${right}</a></p></div>`,{noindex:true,canonical:to,redirect:to});
}
const xml=s=>e(s).replace(/&#39;/g,'&apos;');
fs.writeFileSync(path.join(out,'feed.xml'),`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Sujan Guragain · Journal</title><link>${origin}/journal/</link><description>${xml(profile.description)}</description><language>en</language><atom:link href="${origin}/feed.xml" rel="self" type="application/rss+xml"/>${published.map(p=>`<item><title>${xml(p.title)}</title><link>${origin}/journal/${p.slug}/</link><guid isPermaLink="true">${origin}/journal/${p.slug}/</guid><pubDate>${new Date(p.date+'T12:00:00Z').toUTCString()}</pubDate><description>${xml(p.excerpt)}</description><category>${xml(p.category)}</category></item>`).join('')}</channel></rss>`);
fs.writeFileSync(path.join(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p=>`<url><loc>${origin}${p}</loc></url>`).join('')}</urlset>`);
fs.writeFileSync(path.join(out,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
fs.writeFileSync(path.join(out,'.nojekyll'),'');
fs.writeFileSync(path.join(out,'CNAME'),new URL(profile.website).hostname+'\n');
console.log(`Built ${pages.length} indexable pages, ${published.length} articles and ${projects.length} projects into dist/`);
