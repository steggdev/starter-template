// ============================================================
//  stegg.dev Starter Template — app.js
//  Wires all components together.
//  You DO NOT need to edit this file.
// ============================================================

import content from './data/content.js';
import { renderNav }          from './components/Nav.js';
import { renderHero }         from './components/Hero.js';
import { renderAbout }        from './components/About.js';
import { renderServices }     from './components/Services.js';
import { renderPortfolio }    from './components/Portfolio.js';
import { renderTestimonials } from './components/Testimonials.js';
import { renderContact }      from './components/Contact.js';
import { renderFooter }       from './components/Footer.js';

// ----------------------------------------------------------
//  Auto-calculate colorLight and colorDark from brand.color
//  Students only need to set one hex code — we handle the rest
// ----------------------------------------------------------
function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return { r, g, b };
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => {
    const hex = Math.round(Math.max(0, Math.min(255, v))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

function lighten(hex, amount = 0.88) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(
    r + (255 - r) * amount,
    g + (255 - g) * amount,
    b + (255 - b) * amount
  );
}

function darken(hex, amount = 0.2) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(
    r * (1 - amount),
    g * (1 - amount),
    b * (1 - amount)
  );
}

function getTextColor(hex) {
  // Returns white or dark text depending on background luminance
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? '#1A1A1A' : '#FFFFFF';
}

const baseColor    = content.brand.color;
const colorLight   = lighten(baseColor, 0.88);
const colorDark    = darken(baseColor, 0.2);
const colorText    = getTextColor(baseColor);
const colorLightText = getTextColor(colorLight);

// Inject into content object so components can use them
content.brand.colorLight     = colorLight;
content.brand.colorDark      = colorDark;
content.brand.colorText      = colorText;      // text on brand colour bg
content.brand.colorLightText = colorLightText; // text on colorLight bg

// Apply as CSS variables globally
document.documentElement.style.setProperty('--brand',       baseColor);
document.documentElement.style.setProperty('--brand-light', colorLight);
document.documentElement.style.setProperty('--brand-dark',  colorDark);
document.documentElement.style.setProperty('--brand-text',  colorText);

// Auto-fill SEO meta tags from content.js
document.title = `${content.business.name} — ${content.hero.headlineEm}`;
document.querySelector('meta[name="description"]')
  ?.setAttribute('content', content.seo?.metaDescription || `${content.business.name} — ${content.hero.subtext}`);
document.querySelector('meta[property="og:title"]')
  ?.setAttribute('content', content.business.name);
document.querySelector('meta[property="og:description"]')
  ?.setAttribute('content', content.seo?.metaDescription || '');
document.querySelector('meta[property="og:image"]')
  ?.setAttribute('content', content.seo?.ogImage || '');

// Smooth anchor scroll — accounts for sticky nav height
document.addEventListener('click', e => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const target = document.querySelector(anchor.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  const navH = document.querySelector('#main-nav')?.offsetHeight || 64;
  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - navH - 12,
    behavior: 'smooth',
  });
});

// Scroll reveal animation
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Mount all components onto the page in order
const app = document.getElementById('app');
app.appendChild(renderNav());
app.appendChild(renderHero());
app.appendChild(renderAbout());
app.appendChild(renderServices());
app.appendChild(renderPortfolio());
app.appendChild(renderTestimonials());
app.appendChild(renderContact());
app.appendChild(renderFooter());

// Start observing all reveal elements
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
