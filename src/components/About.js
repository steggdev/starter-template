import content from '../data/content.js';
const { about, brand } = content;

export function renderAbout() {
  const section = document.createElement('section');
  section.id = 'about';
  section.style.cssText = 'padding:88px 0;background:#FAFAFA;';
  section.innerHTML = `
    <div style="max-width:1080px;margin:0 auto;padding:0 24px;">
      <div class="about-inner" style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;">
        <div class="reveal" style="position:relative;">
          <div style="border-radius:24px;overflow:hidden;aspect-ratio:1;background:#F4F4F5;box-shadow:0 4px 16px rgba(0,0,0,0.07);">
            ${about.aboutImage
              ? `<img src="${about.aboutImage}" alt="${about.ownerName}" style="width:100%;height:100%;object-fit:cover;display:block;" />`
              : `<div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:#9CA3AF;font-size:14px;">
                  <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="opacity:.4">
                    <rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                  </svg>
                  Add your photo here
                </div>`
            }
          </div>
          <div style="position:absolute;bottom:20px;left:20px;background:#fff;border-radius:14px;padding:12px 16px;box-shadow:0 4px 16px rgba(0,0,0,0.10);display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;border-radius:8px;background:${brand.colorLight};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">${about.badgeIcon}</div>
            <div>
              <div style="font-size:13px;font-weight:500;color:#1A1A1A;">${about.badgeText}</div>
              <div style="font-size:12px;color:#6B7280;">${about.badgeSub}</div>
            </div>
          </div>
        </div>
        <div class="reveal reveal-delay-2">
          <div style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${brand.color};margin-bottom:12px;">About Us</div>
          <h2 style="font-size:clamp(28px,4vw,40px);font-weight:600;line-height:1.2;letter-spacing:-.02em;margin-bottom:16px;color:#1A1A1A;">${about.headline}</h2>
          <p style="font-size:17px;color:#6B7280;line-height:1.7;margin-bottom:32px;">${about.subtext}</p>
          <div style="display:flex;flex-direction:column;gap:14px;">
            ${about.points.map(point=>`
              <div style="display:flex;align-items:flex-start;gap:12px;">
                <div style="width:20px;height:20px;border-radius:50%;background:${brand.colorLight};color:${brand.colorLightText};font-size:11px;font-weight:600;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:2px;">✓</div>
                <span style="font-size:15px;color:#6B7280;line-height:1.5;">${point}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}
