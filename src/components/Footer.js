import content from '../data/content.js';

const { business, brand } = content;

function logoHTML() {
  if (business.logo) {
    return `<img src="${business.logo}" alt="${business.logoAlt || business.name}"
      style="height:${business.logoHeight || 36}px;width:auto;display:block;
             object-fit:contain;filter:brightness(0) invert(1);opacity:.9;margin:0 auto 12px;" />`;
  }
  const highlighted = business.name.replace(
    business.nameAccent,
    `<span style="color:${brand.color}">${business.nameAccent}</span>`
  );
  return `<div style="font-size:18px;font-weight:600;color:#fff;letter-spacing:-.02em;margin-bottom:8px;">${highlighted}</div>`;
}

export function renderFooter() {
  const footer = document.createElement('footer');
  footer.style.cssText = `
    background:#1A1A1A; color:rgba(255,255,255,0.5);
    padding:40px 0; text-align:center; font-size:14px;
  `;

  footer.innerHTML = `
    <div style="max-width:1080px;margin:0 auto;padding:0 24px;">
      ${logoHTML()}
      <p>© ${new Date().getFullYear()} ${business.name}. All rights reserved. Based in ${business.city}, Malaysia.</p>
      <p style="margin-top:6px;font-size:12px;">
        Built with ❤️ using the
        <a href="https://stegg.dev" target="_blank"
          style="color:rgba(255,255,255,.35);text-decoration:underline;">stegg.dev</a>
        free website template
      </p>
    </div>
  `;

  return footer;
}
