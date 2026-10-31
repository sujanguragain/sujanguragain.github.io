export const escapeHTML = (text='') => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const slugify = text => String(text).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const safeURL = url => /^(https?:\/\/|mailto:|\/(?!\/)|#)/i.test(String(url)) ? url : '#';
export function parsePost(source) {
 const match=source.replace(/\r\n/g,'\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
 if (!match) throw new Error('Post needs a metadata block between --- lines.');
 const data={};
 for (const line of match[1].split('\n')) {
  if(!line.trim())continue;
  const at=line.indexOf(':'); if(at<1)throw new Error('Invalid metadata line: '+line);
  const key=line.slice(0,at).trim(), value=line.slice(at+1).trim();
  try{data[key]=JSON.parse(value);}catch{data[key]=value;}
 }
 return {...data,body:match[2].trim()};
}
export function serializePost(p) {
 const fields=['title','slug','date','category','excerpt','tags','art','draft'];
 return '---\n'+fields.map(k=>k+': '+JSON.stringify(p[k]??'')).join('\n')+'\n---\n\n'+p.body.trim()+'\n';
}
function inline(text) {
 const vault=[]; const token=s=>{vault.push(s);return '\u0000'+(vault.length-1)+'\u0000';};
 let value=escapeHTML(text).replace(/`([^`]+)`/g,(_,s)=>token('<code>'+s+'</code>'));
 value=value.replace(/\[([^\]]+)\]\(([^\s)]+)\)/g,(_,label,url)=>{
   const decoded=url.replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"');
   return token('<a href="'+escapeHTML(safeURL(decoded))+'"'+(/^https?:/.test(decoded)?' target="_blank" rel="noopener noreferrer"':'')+'>'+label+'</a>');
 });
 value=value.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
 return value.replace(/\u0000(\d+)\u0000/g,(_,i)=>vault[Number(i)]);
}
export function renderMarkdown(markdown) {
 const lines=String(markdown).replace(/\r\n/g,'\n').split('\n'), output=[], headings=[], counts={};
 let i=0;
 while(i<lines.length){
  const line=lines[i];
  if(!line.trim()){i++;continue;}
  if(/^```/.test(line)){
   const language=line.slice(3).trim(); const block=[];i++;
   while(i<lines.length&&!/^```/.test(lines[i]))block.push(lines[i++]);i++;
   output.push('<div class="code-block">'+(language?'<span class="code-label">'+escapeHTML(language)+'</span>':'')+'<pre><code>'+escapeHTML(block.join('\n'))+'</code></pre></div>');continue;
  }
  const h=line.match(/^(#{1,4}) (.+)$/);
  if(h){const level=Math.max(2,h[1].length),base=slugify(h[2])||'section';counts[base]=(counts[base]||0)+1;const id=base+(counts[base]>1?'-'+counts[base]:'');headings.push({level,id,text:h[2]});output.push(`<h${level} id="${id}">${inline(h[2])}</h${level}>`);i++;continue;}
  if(/^(-{3,}|\*{3,})$/.test(line.trim())){output.push('<hr>');i++;continue;}
  if(/^>\s?/.test(line)){const block=[];while(i<lines.length&&/^>\s?/.test(lines[i]))block.push(lines[i++].replace(/^>\s?/,''));output.push('<blockquote><p>'+inline(block.join(' '))+'</p></blockquote>');continue;}
  if(/^\s*[-*] /.test(line)||/^\d+\. /.test(line)){
   const ordered=/^\d+\. /.test(line),pattern=ordered?/^\d+\. /:/^\s*[-*] /,items=[];
   while(i<lines.length&&pattern.test(lines[i]))items.push('<li>'+inline(lines[i++].replace(pattern,''))+'</li>');
   const tag=ordered?'ol':'ul';output.push('<'+tag+'>'+items.join('')+'</'+tag+'>');continue;
  }
  const p=[];
  while(i<lines.length&&lines[i].trim()&&!/^(#{1,4} |```|>\s?|[-*] |\d+\. )/.test(lines[i]))p.push(lines[i++]);
  if(p.length)output.push('<p>'+inline(p.join(' '))+'</p>');else i++;
 }
 return {html:output.join('\n'),headings};
}
