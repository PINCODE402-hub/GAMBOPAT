/* Gambopat extras v2 */
(function(){
  var WA='233243265708';
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }
  var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c];});};

  window.closeViewer=window.closeViewer||function(){document.querySelectorAll('.image-viewer').forEach(function(v){v.style.display='none';});};

  ready(function(){ try{
    /* Floating WhatsApp */
    if(!document.querySelector('.wa-float')){
      var a=document.createElement('a'); a.className='wa-float';
      a.href='https://wa.me/'+WA+'?text='+encodeURIComponent('Hello Gambopat Engineering! I would like to make an enquiry.');
      a.target='_blank'; a.rel='noopener'; a.setAttribute('aria-label','Chat with Gambopat on WhatsApp');
      a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.5C18.600 23.800 24 18.500 24 11.900c0-3.200-1.200-6.200-3.500-8.400zM12 21.800c-1.800 0-3.600-.5-5.100-1.400l-.4-.2-3.700 1 1-3.600-.2-.4a9.800 9.800 0 0 1-1.500-5.200C2.100 6.500 6.500 2.100 12 2.100c2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 0 1 2.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1-.2.300-.8 1-.9 1.200-.2.200-.3.200-.6.100-.3-.1-1.200-.4-2.300-1.400-.9-.8-1.400-1.700-1.600-2-.2-.3 0-.5.100-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500.7.300 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.3-1.300.2-1.400-.1-.1-.3-.2-.6-.3z"/></svg>';
      document.body.appendChild(a);
    }

    /* Escape closes viewer */
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') window.closeViewer(); });

    /* Footer quick links */
    var f=document.querySelector('footer');
    if(f && !f.querySelector('.footer-links')){
      var d=document.createElement('div'); d.className='footer-links';
      d.innerHTML='<a href="projects.html">Latest Work</a><a href="custom-fabrication.html">Custom &amp; Repairs</a><a href="tips.html">Tips &amp; Guides</a><a href="training.html">Training</a><a href="quote.html">Get a Quote</a><a href="tel:+233243265708">Call +233243265708</a>';
      f.insertBefore(d,f.firstChild);
    }

    /* Accessibility */
    document.querySelectorAll('.menu-btn').forEach(function(b){b.setAttribute('aria-label','Toggle menu');});
    document.querySelectorAll('.settings-btn').forEach(function(b){b.setAttribute('aria-label','Settings');});
    document.querySelectorAll('.prev-btn').forEach(function(b){b.setAttribute('aria-label','Previous');});
    document.querySelectorAll('.next-btn').forEach(function(b){b.setAttribute('aria-label','Next');});
    document.querySelectorAll('.image-viewer').forEach(function(v){v.setAttribute('role','dialog');v.setAttribute('aria-modal','true');});

    /* Lightbox bar: caption + Enquire + Share */
    function viewerBar(v){
      var bar=v.querySelector('.viewer-bar');
      if(!bar){ bar=document.createElement('div'); bar.className='viewer-bar';
        bar.addEventListener('click',function(e){e.stopPropagation();}); v.appendChild(bar); }
      return bar;
    }
    document.addEventListener('click',function(e){
      var img=e.target; if(!img.classList||!(img.classList.contains('product-img')||img.classList.contains('launch-home-viewer'))) return;
      setTimeout(function(){
        var v=document.querySelector('.image-viewer'); if(!v||getComputedStyle(v).display==='none') return;
        var name=img.getAttribute('alt')||'Design', url=img.currentSrc||img.src;
        var msg='Hello Gambopat Engineering! I am interested in this design: '+name+'. Reference: '+url;
        var bar=viewerBar(v);
        bar.innerHTML='<span class="vb-name">'+esc(name)+'</span><a class="vb-btn vb-wa" target="_blank" rel="noopener" href="https://wa.me/'+WA+'?text='+encodeURIComponent(msg)+'">Enquire on WhatsApp</a><button class="vb-btn vb-share" type="button">Share</button>';
        bar.querySelector('.vb-share').onclick=function(){
          var text='Check out this design from Gambopat Engineering: '+name;
          if(navigator.share){ navigator.share({title:name,text:text,url:url}).catch(function(){}); }
          else window.open('https://wa.me/?text='+encodeURIComponent(text+' '+url),'_blank');
        };
      },0);
    },true);

    /* Favourites (hearts) + "Enquire about saved designs" */
    var FKEY='gp_favs'; function favs(){try{return JSON.parse(localStorage.getItem(FKEY)||'[]');}catch(e){return [];}}
    function saveFavs(a){try{localStorage.setItem(FKEY,JSON.stringify(a));}catch(e){}}
    var favBar=document.createElement('button'); favBar.className='fav-bar'; favBar.type='button'; favBar.style.display='none'; document.body.appendChild(favBar);
    function refreshFavBar(){ var n=favs().length; favBar.style.display=n?'block':'none'; favBar.textContent='♥ Enquire about my '+n+' saved design'+(n>1?'s':''); }
    favBar.onclick=function(){ var l=favs().map(function(x,i){return (i+1)+'. '+x.name+' - '+x.url;}); window.open('https://wa.me/'+WA+'?text='+encodeURIComponent('Hello Gambopat Engineering! I am interested in these designs:\n'+l.join('\n')),'_blank'); };
    function decorate(){
      document.querySelectorAll('.card').forEach(function(card){
        if(card.querySelector('.fav-btn')) return;
        var img=card.querySelector('img.product-img'); if(!img) return;
        var b=document.createElement('button'); b.type='button'; b.className='fav-btn'; b.setAttribute('aria-label','Save design');
        function key(){return img.getAttribute('alt')+'|'+(img.getAttribute('src')||'');}
        function sync(){ var on=favs().some(function(x){return x.key===key();}); b.textContent=on?'♥':'♡'; b.classList.toggle('on',on); }
        b.onclick=function(ev){ ev.stopPropagation(); var a=favs(), i=a.findIndex(function(x){return x.key===key();});
          if(i>-1) a.splice(i,1); else a.push({key:key(),name:img.getAttribute('alt')||'Design',url:img.currentSrc||img.src});
          saveFavs(a); sync(); refreshFavBar(); };
        card.appendChild(b); sync();
        img.setAttribute('tabindex','0');
        img.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); img.click(); } });
      });
    }
    decorate(); refreshFavBar();
    new MutationObserver(function(){decorate(); applyHomeSearch();}).observe(document.body,{childList:true,subtree:true});

    /* Home slider search */
    var cf=document.querySelector('.category-filters'), sw=document.getElementById('live-preview-slider');
    var sbox=null;
    if(cf && sw){ sbox=document.createElement('input'); sbox.type='search'; sbox.placeholder='Search designs...'; sbox.className='home-search'; sbox.setAttribute('aria-label','Search designs');
      cf.parentNode.insertBefore(sbox,cf.nextSibling); sbox.addEventListener('input',applyHomeSearch); }
    function applyHomeSearch(){ if(!sbox) return; var q=sbox.value.trim().toLowerCase();
      sw.querySelectorAll('.card').forEach(function(c){ var t=(c.textContent+' '+((c.querySelector('img')||{}).alt||'')).toLowerCase(); c.style.display=(!q||t.indexOf(q)>-1)?'':'none'; }); }

    /* Promo banner */
    fetch('banner.json',{cache:'no-store'}).then(function(r){return r.json();}).then(function(b){
      if(!b||!b.enabled||!b.text||sessionStorage.getItem('gp_banner_x')) return;
      var d=document.createElement('div'); d.className='promo-bar';
      d.innerHTML=(b.link?'<a href="'+esc(b.link)+'">'+esc(b.text)+'</a>':'<span>'+esc(b.text)+'</span>')+'<button type="button" aria-label="Close">×</button>';
      d.querySelector('button').onclick=function(){d.remove();try{sessionStorage.setItem('gp_banner_x','1');}catch(e){}};
      document.body.appendChild(d);
    }).catch(function(){});

    /* Testimonials */
    var tc=document.getElementById('testimonials');
    if(tc) fetch('testimonials.json',{cache:'no-store'}).then(function(r){return r.json();}).then(function(list){
      if(!Array.isArray(list)||!list.length) return;
      tc.innerHTML=list.map(function(t){ var s=Math.max(0,Math.min(5,Number(t.stars)||0));
        return '<div class="info-card"><p>“'+esc(t.text)+'”</p><h4>'+esc(t.name)+(s?' &middot; <span style="color:var(--gold)">'+'★'.repeat(s)+'</span>':'')+'</h4></div>'; }).join('');
      var box=document.getElementById('testimonials-box'); if(box) box.style.display='';
    }).catch(function(){});

    /* Price guide */
    var pl=document.getElementById('price-list');
    if(pl) fetch('prices.json',{cache:'no-store'}).then(function(r){return r.json();}).then(function(list){
      if(!Array.isArray(list)||!list.length) return;
      pl.innerHTML=list.map(function(p){return '<div class="info-card"><h4>'+esc(p.item)+'</h4><div class="num" style="font-size:1.2rem">'+esc(p.from)+'</div><p>'+esc(p.note||'')+'</p></div>';}).join('');
      document.getElementById('price-guide').style.display='';
    }).catch(function(){});

    /* Analytics + WhatsApp click tracking (uses your existing GA id) */
    var GA='G-Y9RG1NKHYF'; window.dataLayer=window.dataLayer||[]; window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
    var s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+GA; document.head.appendChild(s);
    gtag('js',new Date()); gtag('config',GA);
    document.addEventListener('click',function(e){ var l=e.target.closest&&e.target.closest('a[href*="wa.me"],a[href^="tel:"]'); if(l) gtag('event',l.href.indexOf('tel:')===0?'phone_click':'whatsapp_click',{page:location.pathname}); },true);
    document.addEventListener('click',function(e){ if(e.target.classList&&(e.target.classList.contains('order-btn')||e.target.classList.contains('action-order-whatsapp'))) gtag('event','whatsapp_enquiry',{page:location.pathname}); },true);

    /* Offline-friendly service worker (network first, so updates always show) */
    if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost')) navigator.serviceWorker.register('/sw.js').catch(function(){});
  }catch(err){ console.warn('extras',err); } });
})();
