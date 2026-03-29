import content from '../data/content.js';

const { portfolio, brand } = content;

export function renderPortfolio() {
  // If show is false, return empty fragment — section is hidden entirely
  if (portfolio.show === false) {
    return document.createDocumentFragment();
  }

  const section = document.createElement('section');
  section.id = 'portfolio';
  section.style.cssText = 'padding: 88px 0; background: #FAFAFA;';

  section.innerHTML = `
    <div style="max-width:1080px; margin:0 auto; padding:0 24px;">

      <div style="margin-bottom:56px;">
        <div style="
          font-size:12px; font-weight:600; letter-spacing:.1em;
          text-transform:uppercase; color:${brand.color}; margin-bottom:12px;
        ">Our Work</div>
        <h2 style="
          font-size:clamp(28px,4vw,40px); font-weight:600;
          line-height:1.2; letter-spacing:-.02em;
          margin-bottom:16px; color:#1A1A1A;
        ">Recent projects</h2>
        <p style="
          font-size:17px; color:#6B7280; line-height:1.7; max-width:520px;
        ">${portfolio.intro}</p>
      </div>

      <div class="portfolio-grid reveal" style="
        display:grid; grid-template-columns:repeat(3,1fr); gap:16px;
      ">
        ${portfolio.items.map(item => `
          <div class="portfolio-item" style="
            border-radius:20px; overflow:hidden;
            aspect-ratio:4/3; background:#F4F4F5;
            position:relative; cursor:pointer;
          ">
            ${item.image
              ? `<img src="${item.image}" alt="${item.title}"
                   style="width:100%; height:100%; object-fit:cover;
                          transition:transform .3s ease;" />`
              : `<div style="
                   width:100%; height:100%;
                   display:flex; flex-direction:column;
                   align-items:center; justify-content:center;
                   gap:8px; color:#9CA3AF; font-size:13px;
                 ">
                   <svg width="32" height="32" fill="none" stroke="currentColor"
                     stroke-width="1.5" viewBox="0 0 24 24" style="opacity:.5">
                     <rect x="3" y="3" width="18" height="18" rx="3"/>
                     <circle cx="8.5" cy="8.5" r="1.5"/>
                     <path d="M21 15l-5-5L5 21"/>
                   </svg>
                   Project photo
                 </div>`
            }

            <div class="portfolio-overlay" style="
              position:absolute; inset:0;
              background: ${brand.color}e0;
              display:flex; flex-direction:column;
              align-items:center; justify-content:center;
              gap:6px; opacity:0; transition:opacity .2s ease;
            ">
              <div style="font-size:15px; font-weight:600; color:#fff;">
                ${item.title}
              </div>
              <div style="font-size:13px; color:rgba(255,255,255,.85);">
                ${item.category}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;

  // Hover: show overlay + scale image
  section.querySelectorAll('.portfolio-item').forEach(item => {
    const overlay = item.querySelector('.portfolio-overlay');
    const img     = item.querySelector('img');
    item.addEventListener('mouseenter', () => {
      overlay.style.opacity = '1';
      if (img) img.style.transform = 'scale(1.04)';
    });
    item.addEventListener('mouseleave', () => {
      overlay.style.opacity = '0';
      if (img) img.style.transform = '';
    });
  });

  return section;
}
