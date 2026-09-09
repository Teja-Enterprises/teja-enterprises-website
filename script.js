document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('enquiry').addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value.trim(),p=document.getElementById('phone').value.trim(),r=document.getElementById('req').value,d=document.getElementById('details').value.trim();const msg=`Hello Teja Enterprises,\n\nName: ${n}\nPhone: ${p}\nRequirement: ${r}\nDetails: ${d||'Not provided'}`;window.open('https://wa.me/918125619347?text='+encodeURIComponent(msg),'_blank')});
/* ================================
   WATER SUPPLY ORDER CONFIRMATION
   ================================ */

const waterForm = document.getElementById('waterOrderForm');
const orderSubmitFrame = document.getElementById('orderSubmitFrame');

let waterOrderSubmitted = false;

if (waterForm && orderSubmitFrame) {

  waterForm.addEventListener('submit', () => {

    waterOrderSubmitted = true;

    const submitButton = waterForm.querySelector(
      'button[type="submit"]'
    );

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting Request...';
    }

  });

  orderSubmitFrame.addEventListener('load', () => {

    if (!waterOrderSubmitted) {
      return;
    }

    waterOrderSubmitted = false;

    const successMessage = document.createElement('div');

    successMessage.innerHTML = `
      <div style="
        background:#eef8f1;
        border:1px solid #b7dfc1;
        border-radius:14px;
        padding:24px;
        text-align:center;
        margin-bottom:20px;
      ">
        <div style="
          font-size:32px;
          margin-bottom:8px;
        ">✓</div>

        <h3 style="
          margin:0 0 10px;
          color:#176b35;
        ">
          Request Submitted Successfully!
        </h3>

        <p style="
          margin:0;
          line-height:1.6;
          color:#385044;
        ">
          Thank you for contacting Teja Enterprises LLP.
          Your water supply request has been received.
          We will contact you shortly to confirm availability,
          pricing and delivery details.
        </p>
      </div>
    `;

    waterForm.parentNode.insertBefore(
      successMessage,
      waterForm
    );

    waterForm.style.display = 'none';

    successMessage.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

  });

}
