// ============================================================
//  stegg.dev Starter Template — content.js
//  Course: Build Your Free Website in 3 Hours
//
//  THIS IS THE ONLY FILE YOU NEED TO EDIT.
//  Fill in your details below and your website updates
//  automatically across every section.
//
//  HOW TO EDIT:
//  1. Read the comment above each field
//  2. Replace the placeholder text between the quotes
//  3. Save the file (Ctrl+S) — preview updates instantly
// ============================================================

const content = {

  // ----------------------------------------------------------
  //  BUSINESS INFO
  //  Used in: Nav, Hero, About, Contact, Footer
  // ----------------------------------------------------------
  business: {
    name:      "Your Business",       // e.g. "Kedai Gunting Azri"
    nameAccent:"Name",                // The word you want in brand colour
    tagline:   "Your tagline here",   // e.g. "Fresh cuts, great vibes"
    city:      "Kuala Lumpur",        // e.g. "Petaling Jaya"
    country:   "Malaysia",            // e.g. "Singapore" or "Malaysia"
    founded:   "2021",                // Year you started
    email:     "hello@yourbiz.com",   // Your email address

    // No logo? Leave logo as "" — your business name shows in the nav instead.
    // Have a logo? 1) Rename file to logo.png  2) Drag into /images/  3) Change "" to "images/logo.png"
    logo:       "",                   // ← change to "images/logo.png" after adding your logo
    logoAlt:    "Your Business logo",
    logoHeight: 36,

    // WhatsApp: digits only, country code first, no + or spaces
    // Malaysia: 60123456789  |  Singapore: 6591234567
    whatsapp:  "60123456789",
    whatsappMessage: "Hi! I found your website and I'd like to know more.",
  },

  // ----------------------------------------------------------
  //  SEO
  //  metaDescription: shown in Google search results
  //  ogImage: preview image when link is shared on WhatsApp,
  //           Facebook, LinkedIn. Size: 1200 x 630px.
  //           Create one free at canva.com, save as og-image.jpg
  //           and drag it into the /images/ folder.
  // ----------------------------------------------------------
  seo: {
    metaDescription: "Describe your business in 1–2 sentences. Include your city and end with a call to action like 'Contact us today.'",
    ogImage: "images/og-image.jpg",  // rename your social preview image to og-image.jpg and drag into /images/
  },

  // ----------------------------------------------------------
  //  HERO SECTION — the first thing visitors see
  // ----------------------------------------------------------
  hero: {
    // heroImage: drag your photo into /images/ and set the filename here
    // Leave as "" to show a clean placeholder box instead
    heroImage: "images/hero.jpg",   // rename your photo to hero.jpg and drag into /images/

    badge:        "Now accepting new clients",
    headline:     "We help businesses",
    headlineEm:   "Your tagline here",
    subtext:      "We deliver professional, reliable service to clients. Tell us what you need — we'll make it happen.",
    ctaPrimary:   "Get a Free Quote",
    ctaSecondary: "See Our Services",
    stats: [
      { number: "120+", label: "Projects delivered" },
      { number: "5★",   label: "Client satisfaction" },
      { number: "2021", label: "Founded" },
    ],
  },

  // ----------------------------------------------------------
  //  ABOUT SECTION
  // ----------------------------------------------------------
  about: {
    // aboutImage: drag your photo into /images/ and set the filename here
    // Leave as "" to show a clean placeholder box instead
    aboutImage: "images/about.jpg",   // rename your photo to about.jpg and drag into /images/
    ownerName:  "Your Name",
    headline:   "We care about your results",
    subtext:    "Hi, I'm [YOUR NAME]. I started [BUSINESS NAME] because I believe every business deserves quality service without the hassle. Based in [YOUR CITY], we work with clients who value reliability and results.",
    badgeIcon:  "⭐",
    badgeText:  "Trusted since 2021",
    badgeSub:   "Growing client base",
    points: [
      "Professional and reliable — we show up on time, every time.",
      "Transparent pricing — no hidden fees, ever.",
      "Fully experienced and trusted across [YOUR CITY].",
    ],
  },

  // ----------------------------------------------------------
  //  SERVICES — up to 3. Change icon to any emoji.
  // ----------------------------------------------------------
  services: {
    intro: "Everything you need, handled professionally. Not sure what you need? WhatsApp us — we'll advise you for free.",
    items: [
      {
        icon:  "🎯",
        name:  "Service One",
        desc:  "Describe what this service includes, who it's for, and what the client will get. Keep it to 2 sentences.",
        price: "From RM 50",
      },
      {
        icon:  "⚡",
        name:  "Service Two",
        desc:  "Describe what this service includes, who it's for, and what the client will get. Keep it to 2 sentences.",
        price: "From RM 80",
      },
      {
        icon:  "💎",
        name:  "Service Three",
        desc:  "Describe what this service includes, who it's for, and what the client will get. Keep it to 2 sentences.",
        price: "From RM 120",
      },
    ],
  },

  // ----------------------------------------------------------
  //  PORTFOLIO — leave image: "" for placeholder boxes
  //  To add a photo: drag file to /images/, set image: "images/filename.jpg"
  //
  //  show: true  → portfolio section is visible
  //  show: false → portfolio section is hidden (good if you have no work yet)
  // ----------------------------------------------------------
  portfolio: {
    show: true,   // ← set to false to hide this entire section
    intro: "A selection of work we're proud of. Every project is handled with care and attention to detail.",
    items: [
      // Rename your photos to match these filenames exactly, then drag into /images/
      // Leave image: "" for any you don't have yet — shows a clean placeholder
      { title: "Project Title 1", category: "Category", image: "images/project-1.jpg" },
      { title: "Project Title 2", category: "Category", image: "images/project-2.jpg" },
      { title: "Project Title 3", category: "Category", image: "images/project-3.jpg" },
      { title: "Project Title 4", category: "Category", image: "images/project-4.jpg" },
      { title: "Project Title 5", category: "Category", image: "images/project-5.jpg" },
      { title: "Project Title 6", category: "Category", image: "images/project-6.jpg" },
    ],
  },

  // ----------------------------------------------------------
  //  TESTIMONIALS
  //  avatar: 2-letter initials e.g. "AM" for Ahmad Malik
  //  googleReviewsUrl: your Google Reviews link, or leave ""
  // ----------------------------------------------------------
  testimonials: {
    intro: "Real feedback from real clients. We let our work — and our clients — speak for us.",
    googleReviewsUrl: "",
    googleReviewsLabel: "See all our Google Reviews",
    items: [
      {
        quote:  "Write a genuine customer quote here. What problem did you solve? What were they happy about?",
        name:   "Client Name",
        role:   "Their Job / Business",
        avatar: "AB",
      },
      {
        quote:  "Write a genuine customer quote here. What did they love most about working with you?",
        name:   "Client Name",
        role:   "Their Job / Business",
        avatar: "CD",
      },
      {
        quote:  "Write a genuine customer quote here. Would they recommend you? What results did they get?",
        name:   "Client Name",
        role:   "Their Job / Business",
        avatar: "EF",
      },
    ],
  },

  // ----------------------------------------------------------
  //  CONTACT SECTION
  // ----------------------------------------------------------
  contact: {
    headline:  "Let's talk about your project",
    subtext:   "No forms. No waiting. Just send us a WhatsApp and we'll get back to you within a few hours.",
    hours:     "Mon–Sat, 9am–6pm",
    ctaTitle:  "Ready to get started?",
    ctaSub:    "Send us a WhatsApp right now. Tell us what you need and we'll give you a free quote within 24 hours.",
    ctaButton: "WhatsApp Us Now",
    ctaNote:   "Usually replies within a few hours",
  },

  // ----------------------------------------------------------
  //  BRAND COLOUR
  //  Change ONLY the color field to your hex code.
  //  Light and dark variants are calculated automatically.
  //  Need a colour? Try coolors.co — free colour picker.
  // ----------------------------------------------------------
  brand: {
    color: "#DA7756",   // ← Change ONLY this to your brand colour hex code
  },

};

export default content;
