import content from '../data/content.js';

const { contact, business, brand } = content;

export function renderContact() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.style.cssText = 'padding: 88px 0; background: #FAFAFA;';

  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`;

  section.innerHTML = `
    <div style="max-width:1080px; margin:0 auto; padding:0 24px;">
      <div class="contact-inner" style="
        display:grid; grid-template-columns:1fr 1fr;
        gap:72px; align-items:start;
      ">

        <!-- Left: Info -->
        <div class="reveal">
          <div style="
            font-size:12px; font-weight:600; letter-spacing:.1em;
            text-transform:uppercase; color:${brand.color}; margin-bottom:12px;
          ">Get In Touch</div>

          <h2 style="
            font-size:clamp(28px,4vw,40px); font-weight:600;
            line-height:1.2; letter-spacing:-.02em;
            margin-bottom:16px; color:#1A1A1A;
          ">${contact.headline}</h2>

          <p style="
            font-size:17px; color:#6B7280;
            line-height:1.7; margin-bottom:32px;
          ">${contact.subtext}</p>

          <div style="display:flex; flex-direction:column; gap:24px;">
            ${[
              { icon:'📱', label:'WhatsApp', value:`+${business.whatsapp}` },
              { icon:'✉️', label:'Email',    value: business.email },
              { icon:'📍', label:'Location', value:`${business.city}, Malaysia` },
              { icon:'🕐', label:'Hours',    value: contact.hours },
            ].map(row => `
              <div style="display:flex; align-items:flex-start; gap:14px;">
                <div style="
                  width:42px; height:42px; border-radius:14px;
                  background:${brand.colorLight};
                  display:flex; align-items:center;
                  justify-content:center; font-size:18px; flex-shrink:0;
                ">${row.icon}</div>
                <div>
                  <div style="
                    font-size:12px; font-weight:600; text-transform:uppercase;
                    letter-spacing:.06em; color:#6B7280; margin-bottom:3px;
                  ">${row.label}</div>
                  <div style="font-size:15px; font-weight:500; color:#1A1A1A;">
                    ${row.value}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right: CTA card -->
        <div class="reveal reveal-delay-2" style="
          background:#fff; border:1px solid #E5E7EB;
          border-radius:28px; padding:40px;
          display:flex; flex-direction:column;
          align-items:center; text-align:center; gap:16px;
        ">
          <div style="font-size:40px;">💬</div>

          <div style="
            font-size:22px; font-weight:600;
            letter-spacing:-.02em; color:#1A1A1A;
          ">${contact.ctaTitle}</div>

          <p style="font-size:15px; color:#6B7280; line-height:1.6;">
            ${contact.ctaSub}
          </p>

          <a href="${waLink}" target="_blank" id="wa-cta" style="
            display:inline-flex; align-items:center; justify-content:center;
            padding:16px 32px; border-radius:99px;
            background:#25D366; color:#fff;
            font-size:16px; font-weight:500;
            text-decoration:none; transition:all .2s;
            width:100%;
          ">${contact.ctaButton}</a>

          <p style="font-size:13px; color:#9CA3AF;">
            ${contact.ctaNote}
          </p>
        </div>

      </div>
    </div>
  `;

  // WhatsApp button hover
  const waCta = section.querySelector('#wa-cta');
  waCta.addEventListener('mouseenter', () => {
    waCta.style.background  = '#1DA851';
    waCta.style.transform   = 'translateY(-2px)';
    waCta.style.boxShadow   = '0 6px 20px rgba(37,211,102,.35)';
  });
  waCta.addEventListener('mouseleave', () => {
    waCta.style.background  = '#25D366';
    waCta.style.transform   = '';
    waCta.style.boxShadow   = '';
  });

  return section;
}
