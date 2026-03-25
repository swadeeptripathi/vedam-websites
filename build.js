#!/usr/bin/env node
/**
 * build.js — Nunjucks-based site generator for Vedam Websites.
 *
 * Usage:
 *   node build.js                     # Build all sites from data/sites.json
 *   node build.js --site=slug-name    # Build a single site
 *
 * This replaces the original _gen_*.js scripts with a unified template system.
 * Templates are in /templates/ and data is in /data/sites.json.
 */

const fs       = require('fs');
const path     = require('path');
const nunjucks = require('nunjucks');

const ROOT     = __dirname;
const TMPL_DIR = path.join(ROOT, 'templates');
const DATA_FILE = path.join(ROOT, 'data', 'sites.json');
const OUTPUT   = ROOT; // Sites are written to {slug}/index.html

// ─── Configure Nunjucks ────────────────────────────────────────────────────────
const env = nunjucks.configure(TMPL_DIR, {
  autoescape: false,   // HTML templates need raw output
  trimBlocks: true,
  lstripBlocks: true
});

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

// ─── Generate metadata ─────────────────────────────────────────────────────────
function generateMeta(site) {
  const svcDesc = SERVICES_DESC[site.category] || 'professional services';
  const city = site.city || 'Madhya Pradesh';
  const name = site.businessName || site.title;

  return {
    metaDescription: `${name} in ${city} — ${svcDesc}. Call ${site.phone || 'us'} for appointments & bookings.`,
    canonicalUrl: `https://swadeeptripathi.github.io/vedam-websites/${site.slug}/`,
    jsonLD: JSON.stringify({
      "@context": "https://schema.org",
      "@type": SCHEMA_TYPE[site.category] || 'LocalBusiness',
      "name": name,
      "description": `${name} in ${city} — ${svcDesc}. Call ${site.phone || 'us'} for appointments.`,
      "url": `https://swadeeptripathi.github.io/vedam-websites/${site.slug}/`,
      "telephone": site.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      }
    })
  };
}

// ─── Build a single site ───────────────────────────────────────────────────────
function buildSite(site) {
  const meta = generateMeta(site);
  const data = {
    ...site,
    ...meta,
    waNumber: (site.phone || '').replace('+', ''),
    fontFamily: 'Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500;600',
    year: new Date().getFullYear()
  };

  const html = env.render('base.njk', data);
  const outDir = path.join(OUTPUT, site.slug);

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  return html.length;
}

// ─── Main ──────────────────────────────────────────────────────────────────────
function main() {
  if (!fs.existsSync(DATA_FILE)) {
    console.error('Error: data/sites.json not found. Create it first.');
    console.log('\nExpected format:');
    console.log(JSON.stringify([{
      slug: 'example-business-vedam',
      title: 'Example Business | City | VEDAM',
      businessName: 'Example Business',
      category: 'Restaurant & Cafe',
      city: 'Indore',
      phone: '+919876543210',
      accent: '#E8832A',
      bg: '#0f0f0f',
      logo: 'Example<em>Business</em>',
      navLinks: [['about','About'],['services','Services'],['contact','Contact']],
      heroBadge: 'WELCOME',
      heroTitle: 'Welcome to',
      heroTitleEm: 'Example Business',
      heroDesc: 'Your description here',
      heroImage: 'https://images.unsplash.com/photo-example?w=800&q=75',
      aboutImage: 'https://images.unsplash.com/photo-example?w=800&q=75',
      aboutTitle: 'About <em>Us</em>',
      aboutP1: 'First paragraph...',
      aboutP2: 'Second paragraph...',
      feats: ['Feature 1', 'Feature 2'],
      services: [{icon:'🏋️',name:'Service 1',desc:'Description'}],
      stats: [{value:1000,label:'Customers'},{value:50,label:'Services'},{value:10,label:'Years'},{value:5,label:'Rating'}],
      testimonials: [{quote:'Great service!',name:'John',role:'Customer'}],
      contactInfo: [{icon:'📞',title:'Phone',text:'+91 98765 43210',link:'tel:+919876543210'}]
    }], null, 2));
    process.exit(1);
  }

  const sites = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const singleSite = process.argv.find(a => a.startsWith('--site='));

  if (singleSite) {
    const slug = singleSite.split('=')[1];
    const site = sites.find(s => s.slug === slug);
    if (!site) {
      console.error(`Site "${slug}" not found in data/sites.json`);
      process.exit(1);
    }
    const size = buildSite(site);
    console.log(`✓ ${slug} (${size} chars)`);
  } else {
    let count = 0;
    for (const site of sites) {
      try {
        buildSite(site);
        count++;
      } catch (err) {
        console.error(`✗ ${site.slug}: ${err.message}`);
      }
    }
    console.log(`\n✓ Built ${count}/${sites.length} sites`);
  }
}

main();
