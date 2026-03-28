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
  //  Used in: Nav, Hero, About, Footer
  // ----------------------------------------------------------
  business: {
    name:      "Your Business",       // e.g. "Kedai Gunting Azri"
    nameAccent:"Name",                // The word you want in brand colour
    tagline:   "Your tagline here",   // e.g. "Fresh cuts, great vibes"
    city:      "Kuala Lumpur",        // e.g. "Petaling Jaya"
    founded:   "2021",                // Year you started
    email:     "hello@yourbiz.com",   // Your email address

    // ----------------------------------------------------------
    //  LOGO
    //  Option A — Image logo (recommended if you have one)
    //    1. Drag your logo file into the /images/ folder
    //    2. Set logo to your filename, e.g. "images/logo.png"
    //    3. Recommended: PNG with transparent background, height ~40px
    //
    //  Option B — Text logo (default, no image needed)
    //    Leave logo as "" and your business name shows instead,
    //    with nameAccent highlighted in your brand colour.
    // ----------------------------------------------------------
    logo:       "",                   // e.g. "images/logo.png" or leave ""
    logoAlt:    "Your Business logo", // Screen reader description of logo
    logoHeight: 36,                   // Logo display height in pixels

    // WhatsApp number — digits only, start with country code
    // Malaysia example: 60123456789 (no + sign, no spaces)
    whatsapp:  "60123456789",

    // The message that pre-fills when someone taps WhatsApp
    whatsappMessage: "Hi! I found your website and I'd like to know more.",
  },

  // ----------------------------------------------------------
  //  HERO SECTION
  //  The first thing visitors see
  // ----------------------------------------------------------
  hero: {
    badge:       "Now accepting new clients",  // Small pill text above headline
    headline:    "We help businesses",         // First line of big headline
    headlineEm:  "Your tagline here",          // Second line — shown in brand colour
    subtext:     "We deliver professional, reliable service to clients across [YOUR CITY]. Tell us what you need — we'll make it happen.",

    // Call-to-action buttons
    ctaPrimary:  "Get a Free Quote",           // Main button — links to WhatsApp
    ctaSecondary:"See Our Services",           // Secondary button — scrolls to services

    // Stats row — change numbers and labels to match your business
    stats: [
      { number: "120+", label: "Happy clients" },
      { number: "5★",   label: "Average rating" },
      { number: "3yr",  label: "In business" },
    ],
  },

  // ----------------------------------------------------------
  //  ABOUT SECTION
  //  Tell your story
  // ----------------------------------------------------------
  about: {
    ownerName:   "Your Name",         // Your name or team name
    headline:    "We care about your results",
    subtext:     "Hi, I'm [YOUR NAME]. I started [BUSINESS NAME] because I believe every business deserves quality service without the hassle. Based in [YOUR CITY], we work with clients who value reliability and results.",

    // Floating badge on the photo
    badgeIcon:   "⭐",
    badgeText:   "Trusted since 2021",
    badgeSub:    "120+ happy clients",

    // Three bullet points — your values or strengths
    points: [
      "Professional and reliable — we show up on time, every time.",
      "Transparent pricing — no hidden fees, ever.",
      "Fully experienced and trusted across [YOUR CITY].",
    ],
  },

  // ----------------------------------------------------------
  //  SERVICES SECTION
  //  Add up to 3 services. Change icon to any emoji.
  // ----------------------------------------------------------
  services: {
    intro: "Everything you need, handled professionally. Not sure what you need? WhatsApp us — we'll advise you for free.",
    items: [
      {
        icon:  "🎯",
        name:  "Service One",          // e.g. "Haircut & Styling"
        desc:  "Describe what this service includes, who it's for, and what the client will get. Keep it to 2–3 sentences.",
        price: "From RM 50",           // e.g. "From RM 80" or "RM 150 flat"
      },
      {
        icon:  "⚡",
        name:  "Service Two",
        desc:  "Describe what this service includes, who it's for, and what the client will get. Keep it to 2–3 sentences.",
        price: "From RM 80",
      },
      {
        icon:  "💎",
        name:  "Service Three",
        desc:  "Describe what this service includes, who it's for, and what the client will get. Keep it to 2–3 sentences.",
        price: "From RM 120",
      },
    ],
  },

  // ----------------------------------------------------------
  //  PORTFOLIO SECTION
  //  Showcase your work. Add image paths or leave blank.
  //  To add a photo: put file in /images/ folder,
  //  then set image: "images/your-photo.jpg"
  // ----------------------------------------------------------
  portfolio: {
    intro: "A selection of work we're proud of. Every project is handled with the same level of care and attention to detail.",
    items: [
      { title: "Project Title 1", category: "Category",  image: "" },
      { title: "Project Title 2", category: "Category",  image: "" },
      { title: "Project Title 3", category: "Category",  image: "" },
      { title: "Project Title 4", category: "Category",  image: "" },
      { title: "Project Title 5", category: "Category",  image: "" },
      { title: "Project Title 6", category: "Category",  image: "" },
    ],
  },

  // ----------------------------------------------------------
  //  TESTIMONIALS SECTION
  //  Real quotes from real customers.
  //  avatar: initials of the customer, e.g. "AM" for Ahmad Malik
  // ----------------------------------------------------------
  testimonials: {
    intro: "Real feedback from real clients. We let our work — and our clients — speak for us.",
    items: [
      {
        quote:  "Write a genuine customer quote here. What problem did you solve for them? What were they happy about?",
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
  //  Change this hex code to your brand colour.
  //  Need help picking? Try coolors.co — it's free.
  // ----------------------------------------------------------
  brand: {
    color:      "#DA7756",   // Your brand colour
    colorLight: "#FDF0EC",   // Leave this — auto tint of brand colour
    colorDark:  "#C05E3E",   // Leave this — auto dark of brand colour
  },

};

export default content;
