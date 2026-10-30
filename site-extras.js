/* Gambopat extras: floating WhatsApp button + Escape closes image viewers */
(function(){
  try{
    if(!document.querySelector('.wa-float')){
      var a=document.createElement('a');
      a.className='wa-float';a.href='https://wa.me/233243265708?text='+encodeURIComponent('Hello Gambopat Engineering! I would like to make an enquiry.');
      a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','Chat with Gambopat on WhatsApp');
      a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.5C18.600 23.800 24 18.500 24 11.900c0-3.200-1.200-6.200-3.500-8.400zM12 21.800c-1.800 0-3.600-.5-5.100-1.400l-.4-.2-3.700 1 1-3.600-.2-.4a9.800 9.800 0 0 1-1.500-5.200C2.100 6.500 6.500 2.100 12 2.100c2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 0 1 2.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1-.2.300-.8 1-.9 1.200-.2.200-.3.200-.6.100-.3-.1-1.200-.4-2.300-1.400-.9-.8-1.400-1.700-1.600-2-.2-.3 0-.5.100-.6l.4-.5c.1-.2.2-.3.3-.5.100-.2.100-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500.7.300 1.300.5 1.700.6.700.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.3-1.300.2-1.400-.1-.1-.3-.2-.6-.3z"/></svg>';
      document.body.appendChild(a);
    }
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'){document.querySelectorAll('.image-viewer').forEach(function(v){v.style.display='none';});}
    });
  }catch(e){}
})();
