import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {renderMarkdown,parsePost,serializePost,safeURL} from '../assets/markdown.js';
const root=path.resolve('dist');
function allFiles(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.isDirectory()?allFiles(path.join(dir,d.name)):[path.join(dir,d.name)]);}
const files=allFiles(root),htmlFiles=files.filter(f=>f.endsWith('.html')),errors=[];
const docs=new Map(htmlFiles.map(f=>[f,fs.readFileSync(f,'utf8')]));
for(const [file,html] of docs){
 const relative=path.relative(root,file);
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)errors.push(relative+': expected one h1');
 if(!/<title>[^<]+<\/title>/.test(html))errors.push(relative+': missing title');
 if(!html.includes('name="description"'))errors.push(relative+': missing description');
 if(!html.includes('rel="canonical"'))errors.push(relative+': missing canonical');
 if(!html.includes('<span>© Sujan Guragain</span>'))errors.push(relative+': incorrect copyright');
 if(/(?:href="\/studio\/|editor\.js|editor-data\.json|Writing studio)/i.test(html))errors.push(relative+': removed editor reference');
 for(const json of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){try{JSON.parse(json[1]);}catch{errors.push(relative+': invalid structured data');}}
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)errors.push(relative+': duplicate element IDs');
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const ref=match[1];if(/^(https?:|mailto:|data:)/.test(ref))continue;
  const [withQuery,hash]=ref.split('#');
  const raw=withQuery.split('?')[0];
  const p=raw.startsWith('/')?path.join(root,raw):path.resolve(path.dirname(file),raw||'.');
  let target=raw?p:file;
  if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
  if(!fs.existsSync(target)){errors.push(relative+': broken link '+ref);continue;}
  if(hash&&target.endsWith('.html')){const body=docs.get(target)||fs.readFileSync(target,'utf8');if(!body.includes('id="'+hash+'"'))errors.push(relative+': missing anchor '+ref);}
 }
 for(const m of html.matchAll(/<img\b[^>]*>/g))if(!/\balt=/.test(m[0]))errors.push(relative+': image missing alt');
}
const sources=fs.readdirSync('content/posts').filter(f=>f.endsWith('.md')).map(f=>parsePost(fs.readFileSync('content/posts/'+f,'utf8')));
for(const p of sources){const exists=fs.existsSync(path.join(root,'journal',p.slug,'index.html'));if(exists===p.draft)errors.push('Draft visibility mismatch: '+p.slug);}
for(const removed of ['studio','assets/editor.js','assets/editor-data.json','journal/from-ccsa-to-ccse'])if(fs.existsSync(path.join(root,removed)))errors.push('Removed content still published: '+removed);
for(const page of ['index.html','about/index.html'])if(/CCSA|CCSE|certified|credential/i.test(fs.readFileSync(path.join(root,page),'utf8')))errors.push('Certification highlight remains on '+page);
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8'),feed=fs.readFileSync(path.join(root,'feed.xml'),'utf8');
for(const p of sources){if(sitemap.includes('/journal/'+p.slug+'/')===p.draft)errors.push('Draft sitemap mismatch: '+p.slug);if(feed.includes('/journal/'+p.slug+'/')===p.draft)errors.push('Draft feed mismatch: '+p.slug);}
const sample={title:'A "quoted" title',slug:'round-trip',date:'2026-10-31',category:'Ops',excerpt:'A short summary',tags:['Linux','A & B'],art:'delivery',draft:true,body:'## A heading\n\n```bash\necho "safe"\n```'};
assert.deepEqual(parsePost(serializePost(sample)),sample,'Markdown metadata must round-trip');
const rendered=renderMarkdown('## Same\n\n## Same\n\n<script>alert(1)</script>\n\n[x](javascript:alert)\n\n```html\n<img src=x onerror=alert(1)>\n```');
assert(!rendered.html.includes('<script>'),'User HTML must be escaped');
assert(!rendered.html.includes('href="javascript:'),'Unsafe URLs must be rejected');
assert(rendered.headings[1].id==='same-2','Repeated headings need unique anchors');
assert(safeURL('//evil.example')==='#','Protocol-relative URLs must be rejected');
assert(fs.statSync('dist/assets/portrait.webp').size<500000,'Portrait must be optimized for the web');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`PASS: ${htmlFiles.length} pages, local links and anchors, metadata, accessibility basics, exact copyright, removed editor, draft visibility and Markdown handling.`);
