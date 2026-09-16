/* ================================
   TEJA ENTERPRISES WEBSITE SCRIPT
   ================================ */


/* ================================
   COPYRIGHT YEAR
   ================================ */

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* ================================
   MOBILE NAVIGATION
   ================================ */

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

if (menu && nav) {

  menu.addEventListener('click', () => {

    nav.classList.toggle('open');

    menu.setAttribute(
      'aria-expanded',
      nav.classList.contains('open')
    );

  });

  document.querySelectorAll('nav a').forEach(a => {

    a.addEventListener('click', () => {
      nav.classList.remove('open');
    });

  });

}


/* ================================
   WATER SUPPLY ORDER FORM
   ================================ */

const waterForm = document.getElementById('waterOrderForm');
const orderSubmitFrame = document.getElementById('orderSubmitFrame');

let waterOrderSubmitted = false;


if (waterForm && orderSubmitFrame) {

  /*
   * Customer clicks Submit.
   */

  waterForm.addEventListener('submit', () => {

    waterOrderSubmitted = true;

    const submitButton = waterForm.querySelector(
      'button[type="submit"]'
    );

    if (submitButton) {

      submitButton.disabled = true;

      submitButton.textContent =
        'Submitting Request...';

    }

  });


  /*
   * Apps Script responds through the hidden iframe.
   */

  orderSubmitFrame.addEventListener('load', () => {

    if (!waterOrderSubmitted) {
      return;
    }

    waterOrderSubmitted = false;


    /*
     * Create success message.
     */

    const successMessage =
      document.createElement('div');

    successMessage.id =
      'waterOrderSuccess';


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
        ">
          ✓
        </div>

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


    /*
     * Show confirmation above the form.
     */

    waterForm.parentNode.insertBefore(
      successMessage,
      waterForm
    );


    /*
     * Hide the completed form.
     */

    waterForm.style.display = 'none';


    /*
     * Scroll customer to confirmation.
     */

    successMessage.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

  });

}


// Three-view bottle rotation: only the bottle changes; hero background stays static.
document.addEventListener('DOMContentLoaded',()=>{
 const views=[...document.querySelectorAll('.hero-bottle .bottle-view')];
 if(!views.length) return;
 let i=0;
 const spin=()=>{
   const current=views[i];
   current.classList.add('flipping');
   setTimeout(()=>{
     current.classList.remove('active','flipping');
     i=(i+1)%views.length;
     views[i].classList.add('active');
   },525);
 };
 setInterval(spin,2600);
});
