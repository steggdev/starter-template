// ============================================================
//  stegg.dev Starter Template — app.js
//  This file wires all components together.
//  Students DO NOT need to edit this file.
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

// Apply brand colour CSS variables globally
const { color, colorLight, colorDark } = content.brand;
document.documentElement.style.setProperty('--brand',       color);
document.documentElement.style.setProperty('--brand-light', colorLight);
document.documentElement.style.setProperty('--brand-dark',  colorDark);

// Apply SEO meta tags from content.js
document.title = `${content.business.name} — ${content.hero.headlineEm}`;
document.querySelector('meta[name="description"]')
  ?.setAttribute('content', `${content.business.name} offers professional services in ${content.business.city}. ${content.hero.subtext}`);
document.querySelector('meta[property="og:title"]')
  ?.setAttribute('content', content.business.name);

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

// Scroll reveal — fade + slide up on enter viewport
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Mount all components into the page in order
const app = document.getElementById('app');
app.appendChild(renderNav());
app.appendChild(renderHero());
app.appendChild(renderAbout());
app.appendChild(renderServices());
app.appendChild(renderPortfolio());
app.appendChild(renderTestimonials());
app.appendChild(renderContact());
app.appendChild(renderFooter());

// Observe all reveal elements after mounting
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
