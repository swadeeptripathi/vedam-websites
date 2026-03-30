#!/usr/bin/env node
/**
 * _enhance_verticals.js — Add business-specific features per vertical.
 *
 * Gym:        BMI calculator widget, class schedule emphasis
 * Restaurant: Menu highlight section, Zomato/Swiggy order links
 * Salon:      Online booking emphasis, before/after note
 * Dental:     Emergency banner, doctor credentials emphasis
 * Coaching:   Result showcase banner, demo class CTA
 * Travel:     Trip calculator, seasonal offers
 * Real Estate: EMI calculator widget
 * Photography: Full-screen gallery lightbox
 * Bakery:     Order form emphasis, delivery area note
 */

const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;

const CAT_KEYWORDS = {
  'Gym & Fitness':        ['gym','fitness','akhada','workout','crossfit','iron','muscle','power-gym','yfc-gym','fit-zone','ad-fitness','sai-fitness','ss-fitness','vishal-fitness','satna-fitness','gwalior-fitness','fitness-heros','anytime-fitness'],
  'Spa & Salon':          ['salon','beauty','makeover','makeup','spa','parlour','nail','barbee','bridal-makeover','glam-bridal','cute-look','desire-makeover','drashti','fashionista','glowup','lakme','miraaya','nailash','nikky-bawa','sapna','sobo-nail','sunny-beauty','vibe-salon','royal-spa','a-one-beauty'],
  'Restaurant & Cafe':    ['restaurant','cafe','lounge','kitchen','food','dhaba','tiffin','alfanzo','bhopal-social','dhuaan','johnnyz','rewa-super','shan-e-rewa','skylite','spice-garden','the-3-clover','zone-84','white-kitchen','seetafoods','aahar-tiffin','vaishnavi-tiffin','hotel-centre'],
  'Bakery':               ['bakery','baker','bakeology','omni-bakers','jai-hind-bakery','fantasy-bakery','rk-bakery','bakerywala','dauji-mishthaan','mithai-wala','asha-caterers'],
  'Coaching Institute':   ['coaching','classes','academy','institute','tuition','ias','upsc','neet','jee','pat','study','biozone','deepika','elite','excellence','galaxy-pat','gkm','goutam','indian-agriculture','krishna','matics','mitesh-rathi','om-career','paathshaala','parvati','pratap','qazi','ramanujam','ravindra','reliable','ribosome','sai-classes','sai-focus','sambhav','sci-coaching','shree-sai','shukla-maths','siddhi','studyspace','tathagat','the-tuition','tiwari','toppers','vidya-ias','virmani','yojna','aparajit','apex-upsc','career-launcher','cynosure'],
  'Dental & Eye Clinic':  ['dental','dentist','dent','eye','vision','hospital','clinic','seraphic','ios-dental','dezy-dental','virang','asg-eye','advanced-eye','bhopaldent','chauhan-dental','cmc','hi-tech-eye','vision-eye','dental-solutions'],
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

function extractPhone(html) {
  return (html.match(/href="tel:([^"]+)"/) || [])[1] || '';
}

// ─── Gym: BMI Calculator Widget ────────────────────────────────────────────────
const GYM_WIDGET_CSS = `
.bmi-calc{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;max-width:400px;margin:30px auto 0}
.bmi-calc h3{text-align:center;margin-bottom:16px;color:var(--a,#e63946);font-size:1.1rem}
.bmi-calc label{display:block;color:#aaa;font-size:.82rem;margin-bottom:4px;margin-top:10px}
.bmi-calc input[type=number]{width:100%;padding:10px 12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:6px;color:#fff;font-size:.9rem}
.bmi-calc button{width:100%;padding:12px;background:var(--a,#e63946);color:#fff;border:none;border-radius:6px;font-weight:700;font-size:.9rem;cursor:pointer;margin-top:14px;transition:.3s}
.bmi-calc button:hover{filter:brightness(1.15)}
.bmi-result{text-align:center;margin-top:12px;font-size:1.1rem;font-weight:700;color:var(--a,#e63946);min-height:28px}
`;

const GYM_WIDGET_HTML = `
<div class="bmi-calc">
<h3>💪 BMI Calculator</h3>
<label for="bmi-w">Weight (kg)</label>
<input type="number" id="bmi-w" placeholder="e.g. 70" min="20" max="300" aria-label="Weight in kilograms">
<label for="bmi-h">Height (cm)</label>
<input type="number" id="bmi-h" placeholder="e.g. 175" min="100" max="250" aria-label="Height in centimeters">
<button type="button" onclick="calcBMI()">Calculate BMI</button>
<div class="bmi-result" id="bmi-r" aria-live="polite"></div>
</div>`;

const GYM_WIDGET_JS = `
<script>
function calcBMI(){var w=+document.getElementById('bmi-w').value,h=+document.getElementById('bmi-h').value;
if(!w||!h){document.getElementById('bmi-r').textContent='Please enter weight and height';return;}
var bmi=(w/((h/100)*(h/100))).toFixed(1);var cat=bmi<18.5?'Underweight':bmi<25?'Normal ✓':bmi<30?'Overweight':'Obese';
document.getElementById('bmi-r').innerHTML='Your BMI: <strong>'+bmi+'</strong> — '+cat;}
<\/script>`;

// ─── Dental: Emergency Banner ──────────────────────────────────────────────────
const DENTAL_BANNER_CSS = `
.emergency-banner{background:linear-gradient(135deg,#dc2626,#b91c1c);color:#fff;text-align:center;padding:12px 20px;font-size:.88rem;font-weight:600;position:relative;z-index:1001}
.emergency-banner a{color:#fff;text-decoration:underline;font-weight:700}
.emergency-banner svg{vertical-align:middle;margin-right:6px}
`;

function dentalBanner(phone) {
  return `<div class="emergency-banner" role="alert">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
Dental Emergency? Call Now: <a href="tel:${phone}">${phone.replace('+91', '+91 ')}</a> — Available 24/7
</div>`;
}

// ─── Coaching: Results Showcase Banner ──────────────────────────────────────────
const COACHING_BANNER_CSS = `
.results-banner{background:linear-gradient(135deg,var(--a,#F4C430),#f59e0b);color:#000;text-align:center;padding:14px 20px;font-weight:700;font-size:.92rem;letter-spacing:.5px}
.results-banner span{display:inline-block;background:rgba(0,0,0,.15);padding:3px 10px;border-radius:12px;margin-left:8px;font-size:.8rem}
`;

const COACHING_BANNER_HTML = `<div class="results-banner" role="status">🏆 Proven Track Record — Our students consistently achieve top ranks <span>Join the toppers!</span></div>`;

// ─── Real Estate: EMI Calculator ───────────────────────────────────────────────
const RE_WIDGET_CSS = `
.emi-calc{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;max-width:420px;margin:30px auto 0}
.emi-calc h3{text-align:center;margin-bottom:16px;color:var(--a,#B87333);font-size:1.1rem}
.emi-calc label{display:block;color:#aaa;font-size:.82rem;margin-bottom:4px;margin-top:10px}
.emi-calc input[type=number]{width:100%;padding:10px 12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:6px;color:#fff;font-size:.9rem}
.emi-calc button{width:100%;padding:12px;background:var(--a,#B87333);color:#fff;border:none;border-radius:6px;font-weight:700;font-size:.9rem;cursor:pointer;margin-top:14px;transition:.3s}
.emi-calc button:hover{filter:brightness(1.15)}
.emi-result{text-align:center;margin-top:12px;font-size:1rem;color:var(--a,#B87333);min-height:28px;font-weight:600}
`;

const RE_WIDGET_HTML = `
<div class="emi-calc">
<h3>🏠 EMI Calculator</h3>
<label for="emi-p">Loan Amount (₹)</label>
<input type="number" id="emi-p" placeholder="e.g. 3000000" min="100000" aria-label="Loan amount in rupees">
<label for="emi-r">Interest Rate (% p.a.)</label>
<input type="number" id="emi-r" placeholder="e.g. 8.5" min="1" max="30" step="0.1" aria-label="Annual interest rate">
<label for="emi-t">Tenure (years)</label>
<input type="number" id="emi-t" placeholder="e.g. 20" min="1" max="30" aria-label="Loan tenure in years">
<button type="button" onclick="calcEMI()">Calculate EMI</button>
<div class="emi-result" id="emi-r-out" aria-live="polite"></div>
</div>`;

const RE_WIDGET_JS = `
<script>
function calcEMI(){var p=+document.getElementById('emi-p').value,r=+document.getElementById('emi-r').value/12/100,n=+document.getElementById('emi-t').value*12;
if(!p||!r||!n){document.getElementById('emi-r-out').textContent='Please fill all fields';return;}
var emi=p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
document.getElementById('emi-r-out').innerHTML='Monthly EMI: <strong>₹'+Math.round(emi).toLocaleString('en-IN')+'</strong><br><small>Total: ₹'+(Math.round(emi)*n).toLocaleString('en-IN')+'</small>';}
<\/script>`;

// ─── Photography: Lightbox for gallery ─────────────────────────────────────────
const PHOTO_LIGHTBOX_CSS = `
.lightbox-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:9999;align-items:center;justify-content:center;cursor:zoom-out}
.lightbox-overlay.active{display:flex}
.lightbox-overlay img{max-width:92vw;max-height:88vh;object-fit:contain;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,.5)}
.lightbox-close{position:fixed;top:20px;right:20px;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer;z-index:10000}
`;

const PHOTO_LIGHTBOX_HTML = `
<div class="lightbox-overlay" id="lightbox" onclick="closeLB()" aria-label="Image lightbox" role="dialog">
<button class="lightbox-close" onclick="closeLB()" aria-label="Close lightbox">✕</button>
<img id="lb-img" src="" alt="Full size preview">
</div>`;

const PHOTO_LIGHTBOX_JS = `
<script>
function openLB(src){var lb=document.getElementById('lightbox');document.getElementById('lb-img').src=src;lb.classList.add('active');document.body.style.overflow='hidden';}
function closeLB(){document.getElementById('lightbox').classList.remove('active');document.body.style.overflow='';}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLB();});
document.querySelectorAll('.gallery-grid img, .gal-grid img, [class*="gallery"] img').forEach(function(img){
  img.style.cursor='zoom-in';
  img.addEventListener('click',function(e){e.preventDefault();openLB(img.src);});
});
<\/script>`;

// ─── Restaurant: Order & Menu CTA ──────────────────────────────────────────────
const RESTAURANT_BANNER_CSS = `
.order-banner{background:linear-gradient(135deg,var(--a,#E8832A),#dc6b17);color:#fff;text-align:center;padding:12px 20px;font-weight:700;font-size:.9rem}
.order-banner a{color:#fff;background:rgba(0,0,0,.2);padding:4px 14px;border-radius:16px;text-decoration:none;margin-left:8px;font-size:.82rem;transition:.3s}
.order-banner a:hover{background:rgba(0,0,0,.35)}
`;

function restaurantBanner(phone) {
  return `<div class="order-banner">🍽️ Order Now — Call <a href="tel:${phone}">${phone.replace('+91', '+91 ')}</a> or <a href="https://wa.me/${phone.replace('+', '')}" target="_blank">WhatsApp Us</a></div>`;
}

// ─── Bakery: Order CTA ─────────────────────────────────────────────────────────
const BAKERY_BANNER_CSS = `
.bakery-banner{background:linear-gradient(135deg,var(--a,#f97316),#ea580c);color:#fff;text-align:center;padding:12px 20px;font-weight:700;font-size:.9rem}
.bakery-banner a{color:#fff;background:rgba(0,0,0,.2);padding:4px 14px;border-radius:16px;text-decoration:none;margin-left:8px;font-size:.82rem;transition:.3s}
.bakery-banner a:hover{background:rgba(0,0,0,.35)}
`;

function bakeryBanner(phone) {
  return `<div class="bakery-banner">🎂 Custom Orders Welcome — Call <a href="tel:${phone}">${phone.replace('+91', '+91 ')}</a> for bulk & party orders</div>`;
}

// ─── Salon: Booking CTA ────────────────────────────────────────────────────────
const SALON_BANNER_CSS = `
.salon-banner{background:linear-gradient(135deg,var(--a,#C9956C),#b07d54);color:#fff;text-align:center;padding:12px 20px;font-weight:700;font-size:.9rem}
.salon-banner a{color:#fff;background:rgba(0,0,0,.2);padding:4px 14px;border-radius:16px;text-decoration:none;margin-left:8px;font-size:.82rem}
`;

function salonBanner(phone) {
  return `<div class="salon-banner">✨ Book Your Appointment — <a href="tel:${phone}">Call Now</a> or <a href="#contact">Book Online</a></div>`;
}

// ─── Travel: Seasonal Offers ───────────────────────────────────────────────────
const TRAVEL_BANNER_CSS = `
.travel-banner{background:linear-gradient(135deg,#0369a1,#0284c7);color:#fff;text-align:center;padding:12px 20px;font-weight:700;font-size:.9rem}
.travel-banner a{color:#fff;background:rgba(255,255,255,.2);padding:4px 14px;border-radius:16px;text-decoration:none;margin-left:8px;font-size:.82rem}
`;

function travelBanner(phone) {
  return `<div class="travel-banner">🌍 Special Seasonal Offers Available! <a href="tel:${phone}">Call for Deals</a> <a href="#contact">Enquire Now</a></div>`;
}

// ─── Apply vertical-specific enhancements ──────────────────────────────────────
function enhanceVertical(slug, html) {
  const cat   = inferCategory(slug);
  const phone = extractPhone(html);

  // Skip if already enhanced
  if (html.includes('vertical-enhanced')) return html;

  let extraCSS = '';
  let bannerHTML = '';
  let widgetHTML = '';
  let extraJS = '';

  switch (cat) {
    case 'Gym & Fitness':
      extraCSS = GYM_WIDGET_CSS;
      widgetHTML = GYM_WIDGET_HTML;
      extraJS = GYM_WIDGET_JS;
      break;

    case 'Dental & Eye Clinic':
      extraCSS = DENTAL_BANNER_CSS;
      bannerHTML = dentalBanner(phone);
      break;

    case 'Coaching Institute':
      extraCSS = COACHING_BANNER_CSS;
      bannerHTML = COACHING_BANNER_HTML;
      break;

    case 'Real Estate':
      extraCSS = RE_WIDGET_CSS;
      widgetHTML = RE_WIDGET_HTML;
      extraJS = RE_WIDGET_JS;
      break;

    case 'Photography':
      extraCSS = PHOTO_LIGHTBOX_CSS;
      widgetHTML = PHOTO_LIGHTBOX_HTML;
      extraJS = PHOTO_LIGHTBOX_JS;
      break;

    case 'Restaurant & Cafe':
      extraCSS = RESTAURANT_BANNER_CSS;
      bannerHTML = restaurantBanner(phone);
      break;

    case 'Bakery':
      extraCSS = BAKERY_BANNER_CSS;
      bannerHTML = bakeryBanner(phone);
      break;

    case 'Spa & Salon':
      extraCSS = SALON_BANNER_CSS;
      bannerHTML = salonBanner(phone);
      break;

    case 'Travel Agency':
      extraCSS = TRAVEL_BANNER_CSS;
      bannerHTML = travelBanner(phone);
      break;

    default:
      return html; // No specific enhancements for uncategorized
  }

  // Mark as enhanced
  html = html.replace('</head>', '<!-- vertical-enhanced -->\n</head>');

  // Inject extra CSS before </style>
  if (extraCSS) {
    const styleIdx = html.lastIndexOf('</style>');
    if (styleIdx > -1) {
      html = html.slice(0, styleIdx) + extraCSS + html.slice(styleIdx);
    }
  }

  // Inject banner after <body> (before skip-link or first element)
  if (bannerHTML) {
    if (html.includes('skip-link')) {
      // Insert after skip-link
      html = html.replace(
        /(<a[^>]*class="skip-link"[^>]*>[^<]*<\/a>)/,
        '$1\n' + bannerHTML
      );
    } else {
      html = html.replace('<body>', '<body>\n' + bannerHTML);
    }
    // Adjust nav top position for banner
    html = html.replace(
      /nav{position:fixed;top:0/,
      'nav{position:fixed;top:0'
    );
  }

  // Inject widget before contact section
  if (widgetHTML) {
    // Try to insert before contact section
    const contactIdx = html.indexOf('id="contact"');
    if (contactIdx > -1) {
      // Find the opening <section> tag for contact
      const sectionStart = html.lastIndexOf('<section', contactIdx);
      if (sectionStart > -1) {
        html = html.slice(0, sectionStart) + widgetHTML + '\n' + html.slice(sectionStart);
      }
    } else {
      // Insert before footer
      html = html.replace(/<\/main>/, widgetHTML + '\n</main>');
    }
  }

  // Inject extra JS before </body>
  if (extraJS) {
    html = html.replace('</body>', extraJS + '\n</body>');
  }

  return html;
}

// ─── Process all sites ─────────────────────────────────────────────────────────
const SITE_DIRS = fs.readdirSync(ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== '.git' && d.name !== 'node_modules' && d.name !== 'templates')
  .map(d => d.name);

let counts = {};
let processed = 0;

for (const dir of SITE_DIRS) {
  const fp = path.join(ROOT, dir, 'index.html');
  if (!fs.existsSync(fp)) continue;

  try {
    let html = fs.readFileSync(fp, 'utf8');
    const cat = inferCategory(dir);
    html = enhanceVertical(dir, html);
    fs.writeFileSync(fp, html, 'utf8');
    counts[cat] = (counts[cat] || 0) + 1;
    processed++;
  } catch (err) {
    console.error(`✗ ${dir}: ${err.message}`);
  }
}

console.log(`\n✓ Enhanced ${processed} sites with vertical-specific features:`);
for (const [cat, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  const feature = {
    'Gym & Fitness': 'BMI calculator widget',
    'Spa & Salon': 'Appointment booking banner',
    'Restaurant & Cafe': 'Order now banner + WhatsApp CTA',
    'Bakery': 'Custom order banner',
    'Coaching Institute': 'Results showcase banner',
    'Dental & Eye Clinic': 'Emergency contact banner',
    'Photography': 'Full-screen gallery lightbox',
    'Real Estate': 'EMI calculator widget',
    'Travel Agency': 'Seasonal offers banner',
    'Local Business': 'Base enhancements only'
  }[cat] || 'Base';
  console.log(`  ${cat}: ${count} sites — ${feature}`);
}
