import content from '../data/content.js';
const { testimonials, brand } = content;

export function renderTestimonials() {
  const section = document.createElement('section');
  section.id = 'testimonials';
  section.style.cssText = 'padding:88px 0;background:#FFFFFF;';

  const googleBtn = testimonials.googleReviewsUrl ? `
    <div style="margin-top:40px;text-align:center;">
      <a href="${testimonials.googleReviewsUrl}" target="_blank"
        style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:99px;border:1.5px solid #E5E7EB;font-size:14px;font-weight:500;color:#1A1A1A;text-decoration:none;transition:all .2s;"
        class="google-btn">
        <svg width="18" height="18" viewBox="0 0 48 48" style="flex-shrink:0;">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        ${testimonials.googleReviewsLabel || 'See all our Google Reviews'}
      </a>
    </div>
  ` : '';

  section.innerHTML = `
    <div style="max-width:1080px;margin:0 auto;padding:0 24px;">
      <div style="text-align:center;margin-bottom:56px;">
        <div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${brand.color};margin-bottom:12px;">Reviews</div>
        <h2 style="font-size:clamp(28px,4vw,40px);font-weight:600;line-height:1.2;letter-spacing:-.02em;margin-bottom:16px;color:#1A1A1A;">What clients say</h2>
        <p style="font-size:17px;color:#6B7280;line-height:1.7;max-width:520px;margin:0 auto;">${testimonials.intro}</p>
      </div>
      <div class="testimonials-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
        ${testimonials.items.map((item,i)=>`
          <div class="reveal${i>0?` reveal-delay-${i}`:''}" style="background:#FAFAFA;border:1px solid #E5E7EB;border-radius:20px;padding:28px;display:flex;flex-direction:column;gap:16px;">
            <div style="display:flex;gap:3px;">
              ${'<span style="color:#F59E0B;font-size:15px;">★</span>'.repeat(5)}
            </div>
            <p style="font-size:15px;color:#1A1A1A;line-height:1.7;flex:1;">"${item.quote}"</p>
            <div style="display:flex;align-items:center;gap:12px;padding-top:16px;border-top:1px solid #E5E7EB;">
              <div style="width:40px;height:40px;border-radius:50%;background:${brand.colorLight};color:${brand.colorLightText};font-size:14px;font-weight:600;flex-shrink:0;display:flex;align-items:center;justify-content:center;">${item.avatar}</div>
              <div>
                <div style="font-size:14px;font-weight:600;color:#1A1A1A;">${item.name}</div>
                <div style="font-size:12px;color:#6B7280;">${item.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      ${googleBtn}
    </div>
  `;

  const btn = section.querySelector('.google-btn');
  if (btn) {
    btn.addEventListener('mouseenter',()=>{btn.style.borderColor=brand.color;btn.style.color=brand.color;btn.style.transform='translateY(-1px)';});
    btn.addEventListener('mouseleave',()=>{btn.style.borderColor='#E5E7EB';btn.style.color='#1A1A1A';btn.style.transform='';});
  }
  return section;
}
