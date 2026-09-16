const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
  }));
}

// Keep the existing Google Apps Script order form workflow untouched.
const form = document.getElementById('waterOrderForm');
const frame = document.getElementById('orderSubmitFrame');
let submitted = false;
if (form && frame) {
  form.addEventListener('submit', () => {
    submitted = true;
    const button = form.querySelector('button[type="submit"]');
    if (button) { button.disabled = true; button.textContent = 'Submitting Request...'; }
  });
  frame.addEventListener('load', () => {
    if (!submitted) return;
    submitted = false;
    const success = document.createElement('div');
    success.className='form-success';
    success.innerHTML='<div style="background:#eef8f1;border:1px solid #b7dfc1;border-radius:14px;padding:25px;text-align:center"><div style="font-size:30px">✓</div><h3 style="color:#176b35;margin:8px 0">Request Submitted Successfully!</h3><p style="color:#385044;line-height:1.6;margin:0">Thank you for contacting Teja Enterprises LLP. Your water supply request has been received. We will contact you shortly to confirm availability, pricing and delivery details.</p></div>';
    form.parentNode.insertBefore(success, form);
    form.style.display='none';
    success.scrollIntoView({behavior:'smooth',block:'center'});
  });
}
