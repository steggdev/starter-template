import content from '../data/content.js';

const { business, brand } = content;

function logoHTML(extraStyle = '') {
  if (business.logo) {
    return `<img src="${business.logo}" alt="${business.logoAlt || business.name}"
      style="height:${business.logoHeight || 36}px;width:auto;display:block;object-fit:contain;${extraStyle}" />`;
  }
  const highlighted = business.name.replace(
    business.nameAccent,
    `<span style="color:${brand.color}">${business.nameAccent}</span>`
  );
  return `<span style="font-size:18px;font-weight:600;letter-spacing:-.02em;color:#1A1A1A;${extraStyle}">${highlighted}</span>`;
}

export function renderNav() {
  const nav = document.createElement('nav');
  nav.id = 'main-nav';
  nav.style.cssText = `
    position:sticky;top:0;z-index:100;
    background:rgba(250,250,250,0.88);
    backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
    border-bottom:1px solid #EBEBEB;
  `;

  nav.innerHTML = `
    <div style="max-width:1080px;margin:0 auto;padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;">
      <a href="#hero" style="display:flex;align-items:center;text-decoration:none;flex-shrink:0;">${logoHTML()}</a>
      <ul id="nav-links" style="display:flex;align-items:center;gap:32px;list-style:none;margin:0;padding:0;">
        ${['about','services','portfolio','testimonials','contact'].map(id => `
          <li><a href="#${id}" class="nav-link" style="font-size:14px;color:#6B7280;font-weight:500;text-decoration:none;transition:color .15s;">${id.charAt(0).toUpperCase()+id.slice(1)}</a></li>
        `).join('')}
      </ul>
      <a href="https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}"
        id="nav-cta" target="_blank"
        style="display:inline-flex;align-items:center;padding:10px 22px;border-radius:99px;background:${brand.color};color:${brand.colorText};font-size:14px;font-weight:500;text-decoration:none;transition:all .2s;margin-left:24px;flex-shrink:0;">
        WhatsApp Us
      </a>
      <button id="menu-btn" aria-label="Open menu" style="display:none;background:none;border:none;cursor:pointer;padding:4px;color:#1A1A1A;flex-shrink:0;">
        <svg id="icon-open" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/>
        </svg>
        <svg id="icon-close" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="display:none">
          <line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/>
        </svg>
      </button>
    </div>
    <div id="mobile-menu" style="display:none;flex-direction:column;background:#fff;border-top:1px solid #EBEBEB;padding:8px 0 20px;">
      <div style="display:flex;align-items:center;padding:12px 24px 8px;border-bottom:1px solid #F3F4F6;margin-bottom:4px;">${logoHTML('opacity:0.85;')}</div>
      ${['about','services','portfolio','testimonials','contact'].map(id => `
        <a href="#${id}" class="mobile-link" style="padding:12px 24px;font-size:15px;color:#6B7280;font-weight:500;text-decoration:none;display:block;">
          ${id.charAt(0).toUpperCase()+id.slice(1)}
        </a>
      `).join('')}
      <a href="https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}"
        target="_blank"
        style="display:flex;align-items:center;justify-content:center;margin:12px 20px 4px;padding:14px 24px;border-radius:99px;background:${brand.color};color:${brand.colorText};font-size:15px;font-weight:500;text-decoration:none;">
        WhatsApp Us
      </a>
    </div>
  `;

  const btn=nav.querySelector('#menu-btn'), menu=nav.querySelector('#mobile-menu');
  const io=nav.querySelector('#icon-open'), ic=nav.querySelector('#icon-close');
  const openMenu=()=>{menu.style.display='flex';io.style.display='none';ic.style.display='block';btn.setAttribute('aria-label','Close menu');};
  const closeMenu=()=>{menu.style.display='none';io.style.display='block';ic.style.display='none';btn.setAttribute('aria-label','Open menu');};
  btn.addEventListener('click',e=>{e.stopPropagation();menu.style.display==='flex'?closeMenu():openMenu();});
  document.addEventListener('click',e=>{if(!nav.contains(e.target))closeMenu();});
  nav.querySelectorAll('.mobile-link').forEach(l=>l.addEventListener('click',closeMenu));

  const cta=nav.querySelector('#nav-cta');
  cta.addEventListener('mouseenter',()=>{cta.style.background=brand.colorDark;cta.style.transform='translateY(-1px)';cta.style.boxShadow=`0 6px 20px ${brand.color}55`;});
  cta.addEventListener('mouseleave',()=>{cta.style.background=brand.color;cta.style.transform='';cta.style.boxShadow='';});

  const navLinks=nav.querySelectorAll('.nav-link');
  const activeObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        navLinks.forEach(l=>l.style.color='#6B7280');
        const a=nav.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if(a)a.style.color=brand.color;
      }
    });
  },{rootMargin:'-40% 0px -55% 0px'});
  document.addEventListener('DOMContentLoaded',()=>{
    ['hero','about','services','portfolio','testimonials','contact'].forEach(id=>{
      const el=document.getElementById(id);if(el)activeObserver.observe(el);
    });
  });
  return nav;
}
