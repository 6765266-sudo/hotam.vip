'use strict';
(() => {
  const grid=document.getElementById('videos-grid'), search=document.getElementById('film-search'), status=document.getElementById('film-status'), dialog=document.getElementById('film-dialog'), player=document.getElementById('player'), close=document.getElementById('close-film'), shareStatus=document.getElementById('share-status');
  let films=[], activeFilm=null, previousFocus=null;
  function imageFallback(image){image.onerror=null;image.src='gold-seal.png';image.alt='חותם VIP';image.classList.add('brand-fallback')}
  document.querySelectorAll('.hero-film img').forEach(image=>{image.addEventListener('error',()=>imageFallback(image));if(image.complete&&!image.naturalWidth)imageFallback(image)});
  const normalize=value=>value.normalize('NFKD').replace(/[\u0591-\u05c7]/g,'').toLocaleLowerCase('he');
  function openFilm(id,trigger){
    const film=films.find(item=>item.id===id);if(!film||typeof dialog.showModal!=='function')return false;
    previousFocus=trigger||document.activeElement;activeFilm=film;
    document.getElementById('dialog-title').textContent=film.title;
    document.getElementById('youtube-link').href=`https://youtu.be/${film.id}`;shareStatus.textContent='';document.getElementById('share-fallback').hidden=true;
    const iframe=document.createElement('iframe');iframe.title=film.title;iframe.src=`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0`;iframe.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';player.replaceChildren(iframe);
    if(!dialog.open)dialog.showModal();close.focus();return true;
  }
  function render(){const query=normalize(search.value.trim());let visible=0;grid.querySelectorAll('.video-card').forEach(card=>{card.hidden=!normalize(card.dataset.title).includes(query);if(!card.hidden)visible++});document.getElementById('film-count').textContent=String(visible);status.textContent=query?(visible?(visible===1?'נמצא סיפור אחד.':`נמצאו ${visible} סיפורים.`):'לא נמצא סרט בשם הזה. נסו שם אחר או מחקו את החיפוש.'):''}
  function card(film,index){
    const article=document.createElement('article');article.className='video-card';article.dataset.title=film.title;
    const link=document.createElement('a');link.className='video-image';link.href=`https://youtu.be/${film.id}`;link.dataset.film=film.id;link.setAttribute('aria-label',`צפייה בסרט: ${film.title}`);
    const image=document.createElement('img');image.src=`https://i.ytimg.com/vi/${film.id}/hqdefault.jpg`;image.alt=`תמונה מתוך הסרט ${film.title}`;image.width=480;image.height=360;image.loading='lazy';image.addEventListener('error',()=>imageFallback(image));
    const play=document.createElement('span');play.className='play';play.setAttribute('aria-hidden','true');play.textContent='▶';link.append(image,play);
    const meta=document.createElement('div');meta.className='video-meta';const kind=document.createElement('span');kind.textContent=film.featured?'בחירת חותם · סרט מורשת':'מתוך אוסף חותם';const number=document.createElement('span');number.textContent=String(index+1).padStart(2,'0');meta.append(kind,number);
    const heading=document.createElement('h3'), title=document.createElement('a');title.href=link.href;title.dataset.film=film.id;title.textContent=film.title;heading.append(title);article.append(link,meta,heading);return article;
  }
  document.addEventListener('click',event=>{const link=event.target.closest('a[data-film]');if(!link||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;if(openFilm(link.dataset.film,link))event.preventDefault()});
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{const box=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom))dialog.close()});
  dialog.addEventListener('close',()=>{player.replaceChildren();activeFilm=null;if(previousFocus?.isConnected)previousFocus.focus()});
  document.getElementById('share-film').addEventListener('click',async()=>{if(!activeFilm)return;const url=new URL(location.href);url.search='';url.hash='';url.searchParams.set('film',activeFilm.id);try{await navigator.clipboard.writeText(url.href);shareStatus.textContent='הקישור הועתק. אפשר לשלוח בוואטסאפ.'}catch{const field=document.getElementById('share-url');field.value=url.href;document.getElementById('share-fallback').hidden=false;shareStatus.textContent='ההעתקה האוטומטית לא זמינה. הקישור מסומן בשדה הבא להעתקה ידנית.';field.focus();field.select()}});
  search.addEventListener('input',render);
  fetch('videos.json').then(response=>{if(!response.ok)throw new Error('Collection unavailable');return response.json()}).then(data=>{
    if(!Array.isArray(data))throw new Error('Invalid collection');films=data.filter(item=>item&&typeof item.id==='string'&&/^[A-Za-z0-9_-]{11}$/.test(item.id)&&typeof item.title==='string'&&item.title.trim());if(!films.length)throw new Error('Empty collection');grid.replaceChildren(...films.map(card));render();
    const requested=new URL(location.href).searchParams.get('film');if(requested&&films.some(item=>item.id===requested)){const selected=grid.querySelector(`a[data-film="${requested}"]`);selected.scrollIntoView({block:'center',behavior:'instant'});selected.focus({preventScroll:true});status.textContent='הסרט שבקישור מסומן. לחצו עליו לצפייה.'}
  }).catch(()=>{status.textContent='האוסף לא נטען כרגע. אפשר לנסות לרענן, או לפנות אלינו דרך יצירת קשר.';search.disabled=true});
})();
