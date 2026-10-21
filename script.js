(function(){
  var base='https://assets.zyrosite.com/cdn-cgi/image/format=auto,fit=crop/ALp2oDRwrou6nBx3/';
  var photos=[


  ];
  var localPhotos=[
    'WhatsApp Image 2026-10-20 at 15.53.33.jpeg','WhatsApp Image 2026-10-20 at 15.53.39.jpeg',
    'WhatsApp Image 2026-10-20 at 15.53.56.jpeg','WhatsApp Image 2026-10-20 at 15.54.26.jpeg',
    'WhatsApp Image 2026-10-20 at 15.54.27.jpeg','WhatsApp Image 2026-10-20 at 15.54.27 (1).jpeg',
    'WhatsApp Image 2026-10-20 at 15.54.28.jpeg','WhatsApp Image 2026-10-20 at 15.54.28 (1).jpeg',
    'WhatsApp Image 2026-10-20 at 15.54.28 (2).jpeg','WhatsApp Image 2026-10-20 at 15.57.00.jpeg',
    'WhatsApp Image 2026-10-20 at 15.57.02.jpeg','WhatsApp Image 2026-10-20 at 15.57.02 (1).jpeg',
    'WhatsApp Image 2026-10-20 at 15.57.34.jpeg','WhatsApp Image 2026-10-20 at 15.58.26.jpeg',
    'WhatsApp Image 2026-10-20 at 15.58.26 (1).jpeg','WhatsApp Image 2026-10-20 at 15.58.26 (2).jpeg',
    'WhatsApp Image 2026-10-20 at 15.58.27.jpeg','WhatsApp Image 2026-10-20 at 15.58.28.jpeg',
    'WhatsApp Image 2026-10-20 at 15.58.28 (1).jpeg','WhatsApp Image 2026-10-20 at 15.58.29.jpeg',
    'WhatsApp Image 2026-10-20 at 15.59.31.jpeg','WhatsApp Image 2026-10-20 at 15.59.32.jpeg'
  ];
  var videos=['T922iW_bI7Q','q9vXLr9fQ7Y','NLgRYiWTBG0','zeNghoux5G4','9FFjREPdk4M','8Y0Eca4O4P8','Wsi9n-XVe00','7G5KLLxz25I','HGds6gtCLLs'];

  var P=document.getElementById('photos'),V=document.getElementById('videos');
  photos.forEach(function(f){
    var i=document.createElement('img');
    i.src=base+'w=600/'+f; i.dataset.full=base+'w=1440/'+f; i.alt='Hidangan Hello Kitchen'; i.loading='lazy'; i.className='rv';
    P.appendChild(i);
  });
  localPhotos.forEach(function(f){
    var i=document.createElement('img');
    var src='img/'+encodeURIComponent(f);
    i.src=src; i.dataset.full=src; i.alt='Menu Hello Kitchen'; i.loading='lazy'; i.className='rv';
    P.appendChild(i);
  });
  videos.forEach(function(id){
    var d=document.createElement('div'); d.className='v rv';
    d.innerHTML='<img src="https://i.ytimg.com/vi/'+id+'/hqdefault.jpg" alt="Video Hello Kitchen" loading="lazy">';
    d.addEventListener('click',function(){
      if(d.classList.contains('on'))return;
      d.classList.add('on');
      d.innerHTML='<iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1&playsinline=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
    V.appendChild(d);
  });

  /* lightbox */
  var lb=document.getElementById('lb'),lbi=lb.querySelector('img');
  P.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){lbi.src=e.target.dataset.full;lb.classList.add('open');}
  });
  lb.addEventListener('click',function(){lb.classList.remove('open');});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open');});

  /* menu mobile */
  var hdr=document.querySelector('.hdr');
  document.getElementById('burger').addEventListener('click',function(){hdr.classList.toggle('open');});
  document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){hdr.classList.remove('open');});});

  /* animasi muncul saat scroll */
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    els.forEach(function(el){io.observe(el);});
  }else{els.forEach(function(el){el.classList.add('in');});}

  /* form: ganti bagian ini dengan endpoint backend Anda (mis. Formspree / API sendiri) */
  document.getElementById('sub').addEventListener('submit',function(e){
    e.preventDefault();
    var m=document.getElementById('msg'),v=document.getElementById('email').value.trim();
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){m.textContent='Please enter a valid email address';return;}
    m.textContent='Terima kasih, pesan terkirim';
    this.reset();
  });
})();
