import content from '../data/content.js';

const { testimonials, brand } = content;

export function renderTestimonials() {
  const section = document.createElement('section');
  section.id = 'testimonials';
  section.style.cssText = 'padding: 88px 0; background: #FFFFFF;';

  section.innerHTML = `
    <div style="max-width:1080px; margin:0 auto; padding:0 24px;">

      <div style="text-align:center; margin-bottom:56px;">
        <div style="
          font-size:12px; font-weight:600; letter-spacing:.1em;
          text-transform:uppercase; color:${brand.color}; margin-bottom:12px;
        ">Reviews</div>
        <h2 style="
          font-size:clamp(28px,4vw,40px); font-weight:600;
          line-height:1.2; letter-spacing:-.02em;
          margin-bottom:16px; color:#1A1A1A;
        ">What clients say</h2>
        <p style="
          font-size:17px; color:#6B7280; line-height:1.7;
          max-width:520px; margin:0 auto;
        ">${testimonials.intro}</p>
      </div>

      <div class="testimonials-grid" style="
        display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
      ">
        ${testimonials.items.map((item, i) => `
          <div class="reveal${i > 0 ? ` reveal-delay-${i}` : ''}" style="
            background:#FAFAFA; border:1px solid #E5E7EB;
            border-radius:20px; padding:28px;
            display:flex; flex-direction:column; gap:16px;
          ">
            <div style="display:flex; gap:3px;">
              ${'<span style="color:#F59E0B; font-size:15px;">★</span>'.repeat(5)}
            </div>

            <p style="
              font-size:15px; color:#1A1A1A;
              line-height:1.7; flex:1;
            ">"${item.quote}"</p>

            <div style="
              display:flex; align-items:center; gap:12px;
              padding-top:16px; border-top:1px solid #E5E7EB;
            ">
              <div style="
                width:40px; height:40px; border-radius:50%;
                background:${brand.colorLight}; color:${brand.color};
                font-size:14px; font-weight:600; flex-shrink:0;
                display:flex; align-items:center; justify-content:center;
              ">${item.avatar}</div>
              <div>
                <div style="font-size:14px; font-weight:600; color:#1A1A1A;">
                  ${item.name}
                </div>
                <div style="font-size:12px; color:#6B7280;">
                  ${item.role}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;

  return section;
}
