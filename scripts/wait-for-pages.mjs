// Existing branch-based Pages sites can run GitHub's built-in publisher as well.
// Let that run finish before publishing the generated site so an older root page
// cannot overwrite the new artifact. With Actions-only Pages, no wait is needed.
const {GH_TOKEN,GITHUB_REPOSITORY,GITHUB_SHA}=process.env;
if(!GH_TOKEN||!GITHUB_REPOSITORY||!GITHUB_SHA)throw Error('Missing GitHub workflow context');
const headers={Authorization:`Bearer ${GH_TOKEN}`,Accept:'application/vnd.github+json'};
async function get(resource){const r=await fetch(`https://api.github.com/repos/${GITHUB_REPOSITORY}/${resource}`,{headers});if(!r.ok)throw Error(`GitHub returned HTTP ${r.status} for ${resource.split('?')[0]}`);return r.json();}
const pages=await get('pages');
if(pages.build_type==='workflow'){
 console.log('Pages uses GitHub Actions. Ready to deploy.');
}else{
 console.log('Preserving existing Pages configuration; checking its built-in publisher.');
 const deadline=Date.now()+300000,grace=Date.now()+30000;
 while(true){
  const data=await get(`actions/runs?head_sha=${encodeURIComponent(GITHUB_SHA)}&per_page=100`);
  const runs=data.workflow_runs.filter(r=>r.name==='pages build and deployment'||r.path?.startsWith('dynamic/pages/'));
  if(runs.length&&runs.every(r=>r.status==='completed')){console.log('Built-in publishing finished. Ready to publish the generated site.');break;}
  if(!runs.length&&Date.now()>grace){console.log('No competing built-in publication was scheduled. Ready to deploy.');break;}
  if(Date.now()>deadline)throw Error('The built-in Pages publication is still running. Retry after it completes.');
  await new Promise(resolve=>setTimeout(resolve,5000));
 }
}
