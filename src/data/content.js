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

    // ----------------------------------------------------------
    //  LOGO
    //  Option A — Image logo:
    //    1. Drag your logo into the /images/ folder
    //    2. Set logo: "images/logo.png"
    //
    //  Option B — Text logo (default):
    //    Leave logo: "" — your business name shows instead
    // ----------------------------------------------------------
    logo:       "",                   // e.g. "images/logo.png" or leave ""
    logoAlt:    "Your Business logo",
    logoHeight: 36,

    // WhatsApp: digits only, country code first, no + or spaces
    // Malaysia: 60123456789  |  Singapore: 6591234567
    whatsapp:  "60123456789",
    whatsappMessage: "Hi! I found your website and I'd like to know more.",
  },

  // ----------------------------------------------------------
  //  HERO SECTION — the first thing visitors see
  // ----------------------------------------------------------
  hero: {
    badge:        "Now accepting new clients",  // Pill text above headline
    headline:     "We help businesses",         // First line of big headline
    headlineEm:   "Your tagline here",          // Second line — in brand colour
    subtext:      "We deliver professional, reliable service to clients. Tell us what you need — we'll make it happen.",

    ctaPrimary:   "Get a Free Quote",           // Main button → links to WhatsApp
    ctaSecondary: "See Our Services",           // Secondary button → scrolls down

    // ----------------------------------------------------------
    //  STATS ROW — 3 numbers shown below the hero buttons
    //  Change the number and label to match your business
    // ----------------------------------------------------------
    stats: [
      { number: "120+", label: "Projects delivered" },  // e.g. "50+", "Projects delivered"
      { number: "5★",   label: "Client satisfaction" }, // e.g. "5★", "Client satisfaction"
      { number: "2021", label: "Founded" },             // e.g. "2021", "Founded"
    ],
  },

  // ----------------------------------------------------------
  //  ABOUT SECTION
  // ----------------------------------------------------------
  about: {
    ownerName:  "Your Name",
    headline:   "We care about your results",
    subtext:    "Hi, I'm [YOUR NAME]. I started [BUSINESS NAME] because I believe every business deserves quality service without the hassle. Based in [YOUR CITY], we work with clients who value reliability and results.",

    badgeIcon:  "⭐",
    badgeText:  "Trusted since 2021",          // e.g. "Trusted since 2021"
    badgeSub:   "Growing client base",         // e.g. "120+ happy clients"

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
        name:  "Service One",          // e.g. "Logo Design"
        desc:  "Describe what this service includes, who it's for, and what the client will get. Keep it to 2 sentences.",
        price: "From RM 50",           // e.g. "From RM 80" or "RM 150 flat"
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
  //  To add a photo: drag file to /images/ folder,
  //  then set image: "images/your-photo.jpg"
  // ----------------------------------------------------------
  portfolio: {
    intro: "A selection of work we're proud of. Every project is handled with care and attention to detail.",
    items: [
      { title: "Project Title 1", category: "Category", image: "" },
      { title: "Project Title 2", category: "Category", image: "" },
      { title: "Project Title 3", category: "Category", image: "" },
      { title: "Project Title 4", category: "Category", image: "" },
      { title: "Project Title 5", category: "Category", image: "" },
      { title: "Project Title 6", category: "Category", image: "" },
    ],
  },

  // ----------------------------------------------------------
  //  TESTIMONIALS
  //  Use real customer quotes. If you don't have any yet,
  //  write what a happy customer would say — update later.
  //  avatar: 2-letter initials e.g. "AM" for Ahmad Malik
  //
  //  googleReviewsUrl: paste your Google Reviews link here
  //  Leave as "" to hide the button
  // ----------------------------------------------------------
  testimonials: {
    intro: "Real feedback from real clients. We let our work — and our clients — speak for us.",
    googleReviewsUrl: "",   // e.g. "https://g.page/r/YOUR-GOOGLE-REVIEW-LINK"
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
    hours:     "Mon–Sat, 9am–6pm",   // e.g. "Mon–Fri, 9am–5pm" or "Daily, 8am–10pm"
    ctaTitle:  "Ready to get started?",
    ctaSub:    "Send us a WhatsApp right now. Tell us what you need and we'll give you a free quote within 24 hours.",
    ctaButton: "WhatsApp Us Now",
    ctaNote:   "Usually replies within a few hours",
  },

  // ----------------------------------------------------------
  //  BRAND COLOUR
  //  Change ONLY the color field below to your hex code.
  //  colorLight and colorDark are calculated automatically —
  //  you never need to touch them.
  //
  //  Need a colour? Try coolors.co — free colour picker.
  // ----------------------------------------------------------
  brand: {
    color: "#DA7756",   // ← Change ONLY this to your brand colour hex code
  },

};

export default content;
