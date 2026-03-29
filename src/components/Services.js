import content from '../data/content.js';
const { services, brand } = content;

export function renderServices() {
  const section = document.createElement('section');
  section.id = 'services';
  section.style.cssText = 'padding:88px 0;background:#FFFFFF;';
  section.innerHTML = `
    <div style="max-width:1080px;margin:0 auto;padding:0 24px;">
      <div style="text-align:center;margin-bottom:56px;">
        <div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${brand.color};margin-bottom:12px;">What We Offer</div>
        <h2 style="font-size:clamp(28px,4vw,40px);font-weight:600;line-height:1.2;letter-spacing:-.02em;margin-bottom:16px;color:#1A1A1A;">Our Services</h2>
        <p style="font-size:17px;color:#6B7280;line-height:1.7;max-width:520px;margin:0 auto;">${services.intro}</p>
      </div>
      <div class="services-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
        ${services.items.map((item,i)=>`
          <div class="service-card reveal${i>0?` reveal-delay-${i}`:'`'}" style="background:#fff;border:1px solid #E5E7EB;border-radius:20px;padding:28px;transition:all .2s ease;position:relative;overflow:hidden;">
            <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${brand.color};transform:scaleX(0);transform-origin:left;transition:transform .25s ease;" class="card-bar"></div>
            <div style="width:48px;height:48px;border-radius:14px;background:${brand.colorLight};display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px;">${item.icon}</div>
            <div style="font-size:17px;font-weight:600;margin-bottom:10px;letter-spacing:-.01em;color:#1A1A1A;">${item.name}</div>
            <p style="font-size:14px;color:#6B7280;line-height:1.6;margin-bottom:20px;">${item.desc}</p>
            <span style="font-size:13px;font-weight:600;color:${brand.colorLightText};background:${brand.colorLight};padding:4px 12px;border-radius:99px;">${item.price}</span>
          </div>
        `).join('').replace(/`/g,'')}
      </div>
    </div>
  `;
  section.querySelectorAll('.service-card').forEach(card=>{
    const bar=card.querySelector('.card-bar');
    card.addEventListener('mouseenter',()=>{card.style.transform='translateY(-3px)';card.style.boxShadow='0 4px 16px rgba(0,0,0,0.07)';card.style.borderColor='transparent';bar.style.transform='scaleX(1)';});
    card.addEventListener('mouseleave',()=>{card.style.transform='';card.style.boxShadow='';card.style.borderColor='#E5E7EB';bar.style.transform='scaleX(0)';});
  });
  return section;
}
