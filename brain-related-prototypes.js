document.querySelectorAll('[data-tool-form]').forEach((form)=>{
  const card=form.closest('.tool-card');
  form.addEventListener('submit',(event)=>{event.preventDefault();card.classList.add('processing')});
  card.querySelector('[data-reset]')?.addEventListener('click',()=>card.classList.remove('processing'));
});

const localeStyle=document.createElement('link');
localeStyle.rel='stylesheet';
localeStyle.href='brain-internal-locale.css';
document.head.appendChild(localeStyle);

const localeScript=document.createElement('script');
localeScript.src='brain-internal-locale.js';
document.body.appendChild(localeScript);
