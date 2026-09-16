const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.main-nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false')});document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));}
// Smooth three-view bottle rotation. The scenic hero remains static; only the bottle view changes.
const views=[...document.querySelectorAll('.bottle-view')];let viewIndex=0;
function showNextBottle(){if(views.length<2)return;views[viewIndex].classList.remove('is-active');viewIndex=(viewIndex+1)%views.length;views[viewIndex].classList.add('is-active');}
let bottleTimer=setInterval(showNextBottle,2200);
document.querySelector('.hero-bottle')?.addEventListener('mouseenter',()=>clearInterval(bottleTimer));document.querySelector('.hero-bottle')?.addEventListener('mouseleave',()=>bottleTimer=setInterval(showNextBottle,2200));
// Order form confirmation through the existing Google Apps Script iframe.
const form=document.getElementById('waterOrderForm');const frame=document.getElementById('orderSubmitFrame');let submitted=false;
if(form&&frame){form.addEventListener('submit',()=>{submitted=true;const btn=form.querySelector('button[type=submit]');if(btn){btn.disabled=true;btn.textContent='Submitting Request...'}});frame.addEventListener('load',()=>{if(!submitted)return;submitted=false;const ok=document.createElement('div');ok.className='form-success';ok.innerHTML='<strong>✓ Request Submitted Successfully!</strong><p>Thank you for contacting Teja Enterprises LLP. Your water supply request has been received. We will contact you shortly to confirm availability, pricing and delivery details.</p>';form.parentNode.insertBefore(ok,form);form.style.display='none';ok.scrollIntoView({behavior:'smooth',block:'center'});});}
