import content from '../data/content.js';

const { hero, business, brand } = content;

export function renderHero() {
  const section = document.createElement('section');
  section.id = 'hero';
  section.style.cssText = `
    padding: 96px 0 80px;
    background: #FFFFFF;
  `;

  section.innerHTML = `
    <div style="max-width:1080px; margin:0 auto; padding:0 24px;">
      <div class="hero-inner" style="
        display: grid; grid-template-columns: 1fr 1fr;
        gap: 64px; align-items: center;
      ">

        <!-- Left: Content -->
        <div class="reveal">
          <div style="
            display: inline-flex; align-items: center; gap: 8px;
            background: ${brand.colorLight}; color: ${brand.color};
            font-size: 13px; font-weight: 500;
            padding: 6px 14px; border-radius: 99px; margin-bottom: 24px;
          ">
            <span style="
              width:6px; height:6px; border-radius:50%;
              background:${brand.color}; flex-shrink:0;
            "></span>
            ${hero.badge}
          </div>

          <h1 style="
            font-size: clamp(36px,5vw,54px); font-weight: 600;
            line-height: 1.1; letter-spacing: -.03em; margin-bottom: 20px;
            color: #1A1A1A;
          ">
            ${hero.headline}<br/>
            <em style="font-style:normal; color:${brand.color};">${hero.headlineEm}</em>
          </h1>

          <p style="
            font-size: 18px; color: #6B7280;
            line-height: 1.7; margin-bottom: 36px;
          ">${hero.subtext}</p>

          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <a href="https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}"
              target="_blank"
              class="btn-primary"
              style="
                display: inline-flex; align-items: center;
                padding: 14px 28px; border-radius: 99px;
                background: ${brand.color}; color: #fff;
                font-size: 15px; font-weight: 500;
                text-decoration: none; transition: all .2s;
              "
            >${hero.ctaPrimary}</a>

            <a href="#services"
              class="btn-outline"
              style="
                display: inline-flex; align-items: center;
                padding: 14px 28px; border-radius: 99px;
                background: transparent; color: #1A1A1A;
                border: 1.5px solid #E5E7EB;
                font-size: 15px; font-weight: 500;
                text-decoration: none; transition: all .2s;
              "
            >${hero.ctaSecondary}</a>
          </div>

          <!-- Stats -->
          <div style="
            display: flex; gap: 32px;
            margin-top: 48px; padding-top: 32px;
            border-top: 1px solid #EBEBEB;
          ">
            ${hero.stats.map(s => `
              <div>
                <div style="
                  font-size: 28px; font-weight: 600;
                  letter-spacing: -.02em; color: #1A1A1A;
                ">${s.number}</div>
                <div style="font-size: 13px; color: #6B7280; margin-top: 2px;">
                  ${s.label}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right: Image placeholder -->
        <div class="reveal reveal-delay-2" style="
          border-radius: 24px; overflow: hidden;
          aspect-ratio: 4/3; background: #F4F4F5;
          box-shadow: 0 8px 32px rgba(0,0,0,0.09);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 12px; color: #9CA3AF; font-size: 14px;
        ">
          <svg width="48" height="48" fill="none" stroke="currentColor"
            stroke-width="1.5" viewBox="0 0 24 24" style="opacity:.4">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
          Add your photo here
        </div>

      </div>
    </div>
  `;

  // Button hover effects
  const primary = section.querySelector('.btn-primary');
  primary.addEventListener('mouseenter', () => {
    primary.style.background  = brand.colorDark;
    primary.style.transform   = 'translateY(-1px)';
    primary.style.boxShadow   = `0 6px 20px ${brand.color}55`;
  });
  primary.addEventListener('mouseleave', () => {
    primary.style.background  = brand.color;
    primary.style.transform   = '';
    primary.style.boxShadow   = '';
  });

  const outline = section.querySelector('.btn-outline');
  outline.addEventListener('mouseenter', () => {
    outline.style.borderColor = brand.color;
    outline.style.color       = brand.color;
    outline.style.transform   = 'translateY(-1px)';
  });
  outline.addEventListener('mouseleave', () => {
    outline.style.borderColor = '#E5E7EB';
    outline.style.color       = '#1A1A1A';
    outline.style.transform   = '';
  });

  return section;
}
