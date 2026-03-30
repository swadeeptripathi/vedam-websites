#!/usr/bin/env node
/**
 * _enhance_all.js — Post-process ALL Vedam website HTML files in-place.
 *
 * Improvements applied:
 *  Step 1 – SEO: meta description, Open Graph, canonical URL, JSON-LD
 *  Step 2 – Form backend: Web3Forms integration (replaces alert-only forms)
 *  Step 3 – Mobile responsiveness: enhanced CSS appended
 *  Step 4 – Image optimisation: width/quality params on Unsplash/Pexels URLs
 *  Step 6 – Lightweight analytics placeholder (privacy note)
 *  Step 7 – Accessibility: ARIA labels, skip-link, focus styles, alt text
 *  Step 8 – Business-specific meta per vertical
 */

const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;                           // repo root
const SITE_DIRS = fs.readdirSync(ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== '.git' && d.name !== 'node_modules' && d.name !== 'templates')
  .map(d => d.name);

// ─── Category inference ────────────────────────────────────────────────────────
const CAT_KEYWORDS = {
  'Gym & Fitness':        ['gym','fitness','akhada','workout','crossfit','iron','muscle','power-gym','yfc-gym','fit-zone','ad-fitness','sai-fitness','ss-fitness','vishal-fitness','satna-fitness','gwalior-fitness','fitness-heros','anytime-fitness'],
  'Spa & Salon':          ['salon','beauty','makeover','makeup','spa','parlour','nail','barbee','bridal-makeover','glam-bridal','cute-look','desire-makeover','drashti','fashionista','glowup','lakme','miraaya','nailash','nikky-bawa','sapna','sobo-nail','sunny-beauty','vibe-salon','royal-spa','a-one-beauty'],
  'Restaurant & Cafe':    ['restaurant','cafe','lounge','kitchen','food','dhaba','tiffin','alfanzo','bhopal-social','dhuaan','johnnyz','rewa-super','shan-e-rewa','skylite','spice-garden','the-3-clover','zone-84','white-kitchen','seetafoods','aahar-tiffin','vaishnavi-tiffin'],
  'Bakery':               ['bakery','baker','bakeology','omni-bakers','jai-hind-bakery','fantasy-bakery','rk-bakery','bakerywala','dauji-mishthaan','mithai-wala','asha-caterers'],
  'Coaching Institute':   ['coaching','classes','academy','institute','tuition','ias','upsc','neet','jee','pat','study','biozone','deepika','elite','excellence','galaxy-pat','gkm','goutam','indian-agriculture','krishna','matics','mitesh-rathi','om-career','paathshaala','parvati','pratap','qazi','ramanujam','ravindra','reliable','ribosome','sai-classes','sai-focus','sambhav','sci-coaching','shree-sai','shukla-maths','siddhi','studyspace','tathagat','the-tuition','tiwari','toppers','vidya-ias','virmani','yojna','aparajit','apex-upsc','career-launcher','cynosure'],
  'Dental & Eye Clinic':  ['dental','dentist','dent','eye','vision','hospital','clinic','seraphic','ios-dental','dezy-dental','virang','asg-eye','advanced-eye','bhopaldent','chauhan-dental','cmc','hi-tech-eye','vision-eye'],
  'Photography':          ['photo','photography','photographer','studio','production','wedding-panchnama','jay-chugh','harsh-studio','sunrise-digital','mukul-studio','imagic','sam-creation','neelutsav','maya-photo'],
  'Real Estate':          ['property','realty','real-estate','properties','square-yards','homeonline','lakshmi-narayan','million-properties','rinaya','rishiraj','rk-property','sai-property','gwalior-realty','shri-sanskar','jabalpur-helpline'],
  'Travel Agency':        ['travel','tours','yatra','holiday','a2-travels','central-india-travel','chaturvedi','galaxy-travels','maa-durga','maa-sharda','mp-holiday','saksham','sda-travels','shriram-travels','shubh-yatra']
};

function inferCategory(slug) {
  const s = slug.toLowerCase();
  for (const [cat, kws] of Object.entries(CAT_KEYWORDS)) {
    for (const kw of kws) {
      if (s.includes(kw)) return cat;
    }
  }
  return 'Local Business';
}

// ─── Schema.org type mapping ───────────────────────────────────────────────────
const SCHEMA_TYPE = {
  'Gym & Fitness':        'SportsActivityLocation',
  'Spa & Salon':          'BeautySalon',
  'Restaurant & Cafe':    'Restaurant',
  'Bakery':               'Bakery',
  'Coaching Institute':   'EducationalOrganization',
  'Dental & Eye Clinic':  'Dentist',
  'Photography':          'Photographer',
  'Real Estate':          'RealEstateAgent',
  'Travel Agency':        'TravelAgency',
  'Local Business':       'LocalBusiness'
};

// ─── Service keywords per vertical ─────────────────────────────────────────────
const SERVICES_DESC = {
  'Gym & Fitness':        'strength training, cardio, personal training, yoga & group fitness',
  'Spa & Salon':          'bridal makeup, hair styling, skin care, nail art & spa treatments',
  'Restaurant & Cafe':    'dine-in, takeaway, catering & party packages',
  'Bakery':               'fresh cakes, pastries, cookies, breads & custom orders',
  'Coaching Institute':   'classroom coaching, online classes, mock tests & study material',
  'Dental & Eye Clinic':  'general dentistry, teeth whitening, braces, root canal & eye care',
  'Photography':          'wedding photography, candid shoots, pre-wedding, videography & albums',
  'Real Estate':          'property buying, selling, rental services & plot booking',
  'Travel Agency':        'holiday packages, pilgrimage tours, adventure trips & car rental',
  'Local Business':       'professional services for your needs'
};

// ─── Extract data from existing HTML ───────────────────────────────────────────
function extractData(html) {
  const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1] || '';
  const phone = (html.match(/href="tel:([^"]+)"/) || [])[1] || '';
  const wa    = (html.match(/href="https:\/\/wa\.me\/([^"]+)"/) || [])[1] || '';
  const accent= (html.match(/--a:([^}]+?)[;}]/) || [])[1] || '#CC0000';
  return { title: title.trim(), phone, wa, accent: accent.trim() };
}

function extractCity(title) {
  const cities = ['Jabalpur','Indore','Bhopal','Gwalior','Satna','Rewa','Singrauli','Ujjain'];
  for (const c of cities) {
    if (title.toLowerCase().includes(c.toLowerCase())) return c;
  }
  return 'Madhya Pradesh';
}

function businessName(title) {
  return title.replace(/\s*\|\s*VEDAM.*$/i, '').replace(/\s*\|\s*Vedam.*$/i, '').replace(/\s*-\s*VEDAM.*$/i, '').trim();
}

// ─── Generate JSON-LD structured data ──────────────────────────────────────────
function jsonLD(data, cat, slug) {
  const name = businessName(data.title);
  const city = extractCity(data.title);
  const schemaType = SCHEMA_TYPE[cat] || 'LocalBusiness';

  const ld = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": name,
    "description": `${name} in ${city} — ${SERVICES_DESC[cat] || 'professional services'}. Call ${data.phone || 'us'} for appointments.`,
    "url": `https://swadeeptripathi.github.io/vedam-websites/${slug}/`,
    "telephone": data.phone || undefined,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    }
  };

  if (cat === 'Restaurant & Cafe' || cat === 'Bakery') {
    ld.servesCuisine = "Indian";
    ld.priceRange = "₹₹";
  }

  return JSON.stringify(ld);
}

// ─── Enhanced CSS for mobile, accessibility, business features ─────────────────
const ENHANCED_CSS = `
/* ═══ Enhanced Mobile Responsiveness ═══ */
@media(max-width:480px){
  section{padding:50px 4%}
  .h-cnt h1,h1{font-size:clamp(1.8rem,6vw,2.8rem)!important}
  .h-cnt p{font-size:.88rem}
  .btn{padding:11px 22px;font-size:.82rem}
  .stitle{font-size:clamp(1.4rem,5vw,2rem)}
  .sg{grid-template-columns:1fr 1fr;gap:14px}
  .sg h3{font-size:1.6rem}
  .pg{grid-template-columns:1fr!important;gap:14px}
  .grid{grid-template-columns:1fr!important;gap:12px}
  .ag,.cg{gap:24px}
  .ai img{height:260px}
  .mapbox{height:160px}
}
@media(max-width:360px){
  .sg{grid-template-columns:1fr}
  .btn-s{margin-left:0;margin-top:8px;display:inline-block}
}
/* ═══ Sticky CTA Phone Bar ═══ */
.sticky-cta{position:fixed;bottom:0;left:0;right:0;z-index:997;background:var(--a);display:none;align-items:center;justify-content:center;gap:8px;padding:10px 16px;color:#fff;font-weight:700;font-size:.92rem;text-decoration:none;box-shadow:0 -2px 12px rgba(0,0,0,.3);transition:transform .3s}
.sticky-cta:hover{filter:brightness(1.1)}
.sticky-cta svg{width:18px;height:18px;fill:#fff}
@media(max-width:768px){.sticky-cta{display:flex}}
/* ═══ Accessibility Enhancements ═══ */
.skip-link{position:absolute;top:-100%;left:50%;transform:translateX(-50%);background:var(--a);color:#fff;padding:10px 20px;z-index:10000;border-radius:0 0 8px 8px;font-weight:700;text-decoration:none;transition:top .3s}
.skip-link:focus{top:0}
*:focus-visible{outline:2px solid var(--a);outline-offset:2px}
.hbg:focus-visible,.mm-close:focus-visible,.td:focus-visible,.btn:focus-visible{outline:2px solid var(--a);outline-offset:3px}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
/* ═══ Form Success Feedback ═══ */
.form-msg{display:none;padding:14px 18px;border-radius:8px;font-size:.9rem;margin-top:12px;text-align:center;font-weight:600}
.form-msg.success{display:block;background:rgba(37,211,102,.15);color:#25D366;border:1px solid rgba(37,211,102,.3)}
.form-msg.error{display:block;background:rgba(233,69,96,.15);color:#e94560;border:1px solid rgba(233,69,96,.3)}
/* ═══ Print Styles ═══ */
@media print{nav,.wa,.sticky-cta,.hbg,.mm,footer .soc{display:none!important}body{color:#222!important;background:#fff!important}section{padding:24px 5%}.card,.pc{border:1px solid #ccc!important;background:#f9f9f9!important}a{color:#222!important}}
/* ═══ Cookie / Hours Banner ═══ */
.hours-banner{background:var(--a);color:#fff;text-align:center;padding:6px 16px;font-size:.78rem;font-weight:600;position:fixed;top:0;left:0;right:0;z-index:1001;transform:translateY(-100%);transition:transform .4s}
.hours-banner.show{transform:translateY(0)}
nav{transition:top .4s}
`;

// ─── Enhanced JS for forms, analytics, accessibility ───────────────────────────
function enhancedJS(phone) {
  return `
<script>
/* ═══ Web3Forms Integration ═══ */
document.querySelectorAll('.cf').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var fd=new FormData(f);
    var msgEl=f.querySelector('.form-msg');
    var btn=f.querySelector('button[type=submit],.btn[type=submit]');
    if(btn){btn.disabled=true;btn.textContent='Sending...';}
    fetch('https://api.web3forms.com/submit',{method:'POST',body:fd})
    .then(function(r){return r.json()})
    .then(function(d){
      if(msgEl){msgEl.className='form-msg success';msgEl.textContent='Thank you! We will contact you shortly.';msgEl.style.display='block';}
      else{alert('Thank you! We will contact you shortly.');}
      f.reset();
      if(btn){btn.disabled=false;btn.textContent='Send Message';}
    })
    .catch(function(){
      if(msgEl){msgEl.className='form-msg error';msgEl.textContent='Something went wrong. Please call us directly.';msgEl.style.display='block';}
      if(btn){btn.disabled=false;btn.textContent='Send Message';}
    });
  });
});
/* ═══ Keyboard Nav for Carousels ═══ */
document.querySelectorAll('.td').forEach(function(d){d.setAttribute('tabindex','0');d.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();d.click();}});});
/* ═══ Hours Banner (scroll-triggered) ═══ */
var hb=document.querySelector('.hours-banner');
if(hb){window.addEventListener('scroll',function(){hb.classList.toggle('show',window.scrollY>300)});}
/* ═══ Escape key closes mobile menu ═══ */
document.addEventListener('keydown',function(e){if(e.key==='Escape'){var mm=document.querySelector('.mm.open')||document.querySelector('.mobile-menu.active');if(mm){mm.classList.remove('open');mm.classList.remove('active');}}});
</script>`;
}

// ─── Build enhancements per site ───────────────────────────────────────────────
function enhance(slug, html) {
  const data = extractData(html);
  const cat  = inferCategory(slug);
  const name = businessName(data.title);
  const city = extractCity(data.title);
  const svcDesc = SERVICES_DESC[cat] || 'professional services';
  const metaDesc = `${name} in ${city} — ${svcDesc}. Call ${data.phone || 'us'} for appointments & bookings.`;
  const canonicalUrl = `https://swadeeptripathi.github.io/vedam-websites/${slug}/`;

  // ── 1. Inject SEO meta tags after <title> ───────────────────────────────────
  const ogTags = `
<meta name="description" content="${metaDesc}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${canonicalUrl}">
<meta property="og:type" content="website">
<meta property="og:title" content="${data.title}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:site_name" content="VEDAM">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${data.title}">
<meta name="twitter:description" content="${metaDesc}">
<script type="application/ld+json">${jsonLD(data, cat, slug)}<\/script>`;

  // Insert after the </title> tag
  if (!html.includes('og:title')) {
    html = html.replace(/<\/title>/, '</title>' + ogTags);
  }

  // ── 2. Add font-display=swap to Google Fonts ────────────────────────────────
  html = html.replace(
    /fonts\.googleapis\.com\/css2\?family=([^"]+?)&display=swap/g,
    'fonts.googleapis.com/css2?family=$1&display=swap'
  );
  // Ensure display=swap is present
  if (html.includes('fonts.googleapis.com') && !html.includes('display=swap')) {
    html = html.replace(
      /(fonts\.googleapis\.com\/css2\?family=[^"]+)/,
      '$1&display=swap'
    );
  }

  // ── 3. Inject enhanced CSS before </style> ──────────────────────────────────
  if (!html.includes('sticky-cta')) {
    // Find the last </style> and inject before it
    const styleIdx = html.lastIndexOf('</style>');
    if (styleIdx > -1) {
      html = html.slice(0, styleIdx) + ENHANCED_CSS + html.slice(styleIdx);
    }
  }

  // ── 4. Image optimization: add width params to Unsplash/Pexels URLs ─────────
  // Unsplash: add ?w=800&q=75 if not already present
  html = html.replace(
    /https:\/\/images\.unsplash\.com\/(photo-[a-zA-Z0-9_-]+)(?!\?w=)/g,
    'https://images.unsplash.com/$1?w=800&q=75'
  );
  // Fix double params (some already have ?w=1400)
  html = html.replace(/\?w=1400&q=70/g, '?w=800&q=75');
  html = html.replace(/\?w=1400&q=75/g, '?w=800&q=75');

  // Pexels: add width param
  html = html.replace(
    /https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\1\.jpeg(?!\?)/g,
    'https://images.pexels.com/photos/$1/pexels-photo-$1.jpeg?auto=compress&w=800'
  );

  // ── 5. Replace alert-only form handlers with Web3Forms ──────────────────────
  // Remove inline onsubmit handlers
  html = html.replace(
    /\s*onsubmit="event\.preventDefault\(\);alert\([^)]*\)[^"]*"/g,
    ''
  );
  html = html.replace(
    /\s*onsubmit="[^"]*alert\([^)]*\)[^"]*"/g,
    ''
  );
  html = html.replace(
    /\s*onsubmit="handleSubmit\(event\)"/g,
    ''
  );
  html = html.replace(
    /\s*onsubmit="submitForm\(event\)"/g,
    ''
  );
  html = html.replace(
    /\s*onsubmit="handleForm\(event\)"/g,
    ''
  );

  // Add Web3Forms hidden input + form message div to contact forms
  const web3Key = '<!-- Replace with your Web3Forms access key -->';
  if (!html.includes('access_key')) {
    // Match all form patterns: cf, contact-form, form-grid, booking-form, inquiry-form, and bare forms
    html = html.replace(
      /<form([^>]*?)(?:\s+onsubmit="[^"]*")?([^>]*)>/g,
      function(match, pre, post) {
        // Skip if already has web3forms action
        if (match.includes('web3forms')) return match;
        // Remove any existing onsubmit handlers
        const cleaned = match.replace(/\s*onsubmit="[^"]*"/g, '');
        // Insert action and hidden fields
        return cleaned.replace(/>$/, ` action="https://api.web3forms.com/submit" method="POST">
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY"> ${web3Key}
<input type="hidden" name="subject" value="New enquiry from ${name} website">
<input type="hidden" name="from_name" value="${name} Website">
<input type="checkbox" name="botcheck" class="sr-only" style="display:none" tabindex="-1" autocomplete="off">`);
      }
    );
  }

  // Handle sites that use <div> with form fields but no <form> tag (e.g., travel sites)
  if (!html.includes('<form') && html.includes('booking-form')) {
    html = html.replace(
      /<div class="booking-form">/,
      `<form class="booking-form" action="https://api.web3forms.com/submit" method="POST">
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY"> ${web3Key}
<input type="hidden" name="subject" value="New enquiry from ${name} website">
<input type="hidden" name="from_name" value="${name} Website">
<input type="checkbox" name="botcheck" class="sr-only" style="display:none" tabindex="-1" autocomplete="off">`
    );
    // Change the matching closing </div> to </form> — find the button and its parent close
    html = html.replace(
      /(<button[^>]*type="button"[^>]*onclick="alert\([^)]*\)"[^>]*>[\s\S]*?<\/button>)\s*<\/div>\s*<\/div>/,
      function(match, btnPart) {
        const fixedBtn = btnPart.replace('type="button"', 'type="submit"').replace(/\s*onclick="[^"]*"/g, '');
        return fixedBtn + '\n<div class="form-msg" role="alert" aria-live="polite"></div>\n</div>\n</form>';
      }
    );
  }

  // Add form message div before </form> if not already present
  if (!html.includes('class="form-msg"')) {
    html = html.replace(
      /<\/form>/g,
      '<div class="form-msg" role="alert" aria-live="polite"></div>\n</form>'
    );
  }

  // ── 6. Accessibility improvements ───────────────────────────────────────────
  // Add skip-to-content link
  if (!html.includes('skip-link')) {
    html = html.replace(
      /<body>/,
      '<body>\n<a href="#contact" class="skip-link">Skip to Contact</a>'
    );
    html = html.replace(
      /<body>/,
      '<body>\n<a href="#contact" class="skip-link">Skip to Contact</a>'
    );
  }

  // Add aria-label to hamburger buttons (both <button> and <div> patterns)
  html = html.replace(
    /<button class="hbg"(?!\s+aria-label)/g,
    '<button class="hbg" aria-label="Open navigation menu" aria-expanded="false"'
  );
  html = html.replace(
    /<button class="hamburger"(?!\s+aria-label)/g,
    '<button class="hamburger" aria-label="Open navigation menu" aria-expanded="false"'
  );
  html = html.replace(
    /<div class="hamburger"(?!\s+aria-label)/g,
    '<div class="hamburger" role="button" tabindex="0" aria-label="Open navigation menu" aria-expanded="false"'
  );

  // Add aria-label to mobile menu close (both <button> and other patterns)
  html = html.replace(
    /<button class="mm-close"(?!\s+aria-label)/g,
    '<button class="mm-close" aria-label="Close navigation menu"'
  );
  html = html.replace(
    /<button class="mobile-close"(?!\s+aria-label)/g,
    '<button class="mobile-close" aria-label="Close navigation menu"'
  );
  html = html.replace(
    /<span class="close-btn"(?!\s+aria-label)/g,
    '<span class="close-btn" role="button" tabindex="0" aria-label="Close navigation menu"'
  );

  // Add aria-label to WhatsApp button
  html = html.replace(
    /<a ([^>]*class="wa"[^>]*)>/g,
    '<a $1 aria-label="Chat on WhatsApp">'
  );

  // Add aria-label to testimonial dots
  html = html.replace(
    /<button class="(td|test-dot)([^"]*)" onclick="goT\((\d)\)"/g,
    '<button class="$1$2" onclick="goT($3)" aria-label="Go to testimonial $3"'
  );

  // Add role="navigation" to nav
  if (!html.includes('role="navigation"')) {
    html = html.replace(/<nav(?!\s+role)/, '<nav role="navigation" aria-label="Main navigation"');
  }

  // Add main landmark for content
  if (!html.includes('role="main"') && !html.includes('<main')) {
    html = html.replace(/<section class="hero"/, '<main id="main-content">\n<section class="hero"');
    // Close main before footer
    html = html.replace(/<footer/, '</main>\n<footer');
  }

  // ── 7. Sticky phone CTA bar (mobile) ───────────────────────────────────────
  if (data.phone && !html.includes('sticky-cta')) {
    const stickyCta = `<a href="tel:${data.phone}" class="sticky-cta" aria-label="Call ${name}">
<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z"/></svg>
Call Now — ${data.phone.replace('+91', '+91 ')}</a>`;
    html = html.replace(/<\/body>/, stickyCta + '\n</body>');
  }

  // ── 8. Inject enhanced JS before </body> ────────────────────────────────────
  if (!html.includes('Web3Forms Integration')) {
    html = html.replace(/<\/body>/, enhancedJS(data.phone) + '\n</body>');
  }

  // ── 9. Add robots.txt link (informational) ─────────────────────────────────

  return html;
}

// ─── Process all sites ─────────────────────────────────────────────────────────
let processed = 0;
let skipped   = 0;

for (const dir of SITE_DIRS) {
  const fp = path.join(ROOT, dir, 'index.html');
  if (!fs.existsSync(fp)) { skipped++; continue; }

  try {
    let html = fs.readFileSync(fp, 'utf8');
    html = enhance(dir, html);
    fs.writeFileSync(fp, html, 'utf8');
    processed++;
    if (processed % 20 === 0) console.log(`  ... ${processed} sites enhanced`);
  } catch (err) {
    console.error(`✗ ${dir}: ${err.message}`);
    skipped++;
  }
}

console.log(`\n✓ Enhanced ${processed} sites (${skipped} skipped)`);

// ─── Generate robots.txt ────────────────────────────────────────────────────
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://swadeeptripathi.github.io/vedam-websites/sitemap.xml
`;
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robotsTxt, 'utf8');
console.log('✓ Generated robots.txt');

// ─── Generate sitemap.xml ───────────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0];
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://swadeeptripathi.github.io/vedam-websites/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>
`;
for (const dir of SITE_DIRS) {
  const fp = path.join(ROOT, dir, 'index.html');
  if (!fs.existsSync(fp)) continue;
  sitemap += `<url><loc>https://swadeeptripathi.github.io/vedam-websites/${dir}/</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>\n`;
}
sitemap += '</urlset>';
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
console.log('✓ Generated sitemap.xml (' + SITE_DIRS.length + ' entries)');
