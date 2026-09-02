document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('enquiry').addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value.trim(),p=document.getElementById('phone').value.trim(),r=document.getElementById('req').value,d=document.getElementById('details').value.trim();const msg=`Hello Teja Enterprises,\n\nName: ${n}\nPhone: ${p}\nRequirement: ${r}\nDetails: ${d||'Not provided'}`;window.open('https://wa.me/918125619347?text='+encodeURIComponent(msg),'_blank')});
