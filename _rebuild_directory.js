#!/usr/bin/env node
/**
 * _rebuild_directory.js — Regenerate the main index.html directory page
 * from the actual business site directories on disk.
 * 
 * This ensures all links always point to correct paths.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

// ─── Gather all business directories ───────────────────────────────────────
const skipDirs = new Set(['data', 'templates', 'node_modules', '.git']);
const dirs = fs.readdirSync(ROOT, { withFileTypes: true })
  .filter(d => d.isDirectory() && !d.name.startsWith('.') && !skipDirs.has(d.name) && d.name.endsWith('-vedam'))
  .map(d => d.name)
  .sort();

console.log(`Found ${dirs.length} business directories`);

// ─── Category keywords ─────────────────────────────────────────────────────
const catKeywords = {
  'Gym & Fitness': ['gym','fitness','akhada','iron-city','power-gym','yfc-gym','fit-zone','ad-fitness','sai-fitness','ss-fitness','vishal-fitness','satna-fitness','gwalior-fitness','fitness-heros','anytime-fitness'],
  'Spa & Salon': ['salon','beauty','makeover','makeup','spa','parlour','nail','barbee','glam-bridal','cute-look','desire-makeover','drashti','fashionista','glowup','lakme','miraaya','nailash','nikky-bawa','sapna','sobo-nail','sunny-beauty','vibe-salon','royal-spa','a-one-beauty'],
  'Restaurant & Cafe': ['restaurant','cafe','lounge','kitchen','food','tiffin','alfanzo','bhopal-social','dhuaan','johnnyz','rewa-super','shan-e-rewa','skylite','spice-garden','the-3-clover','zone-84','white-kitchen','seetafoods','aahar-tiffin','vaishnavi-tiffin','hotel-centre','cafe-thikana'],
  'Bakery & Sweets': ['bakery','baker','bakeology','omni-bakers','jai-hind-bakery','fantasy-bakery','rk-bakery','bakerywala','dauji-mishthaan','mithai-wala','asha-caterers'],
  'Coaching & Education': ['coaching','classes','academy','institute','tuition','ias','upsc','neet','jee','pat','study','biozone','deepika','elite','excellence','galaxy-pat','gkm','goutam','indian-agriculture','krishna','matics','mitesh-rathi','om-career','paathshaala','parvati','pratap','qazi','ramanujam','ravindra','reliable','ribosome','sai-classes','sai-focus','sambhav','sci-coaching','shree-sai','shukla-maths','siddhi','studyspace','tathagat','the-tuition','tiwari','toppers','vidya-ias','virmani','yojna','aparajit','apex-upsc','career-launcher','cynosure'],
  'Dental & Eye Care': ['dental','dentist','dent','eye','vision','hospital','clinic','seraphic','ios-dental','dezy-dental','virang','asg-eye','advanced-eye','bhopaldent','chauhan-dental','hi-tech-eye','vision-eye','dental-solutions','cmc-indore'],
  'Photography': ['photo','photography','photographer','production','wedding-panchnama','jay-chugh','harsh-studio','sunrise-digital','mukul-studio','imagic','sam-creation','neelutsav','maya-photo'],
  'Real Estate': ['property','realty','properties','square-yards','homeonline','lakshmi-narayan','million-properties','rinaya','rishiraj','rk-property','sai-property','gwalior-realty','shri-sanskar','jabalpur-helpline'],
  'Travel & Tours': ['travel','tours','yatra','holiday','a2-travels','central-india-travel','chaturvedi','galaxy-travels','maa-durga','maa-sharda','mp-holiday','saksham','sda-travels','shriram-travels','shubh-yatra']
};

function inferCategory(slug) {
  const s = slug.toLowerCase().replace(/-vedam$/, '');
  // First pass: check multi-word (hyphenated) keywords and specific slug matches
  for (const [cat, kws] of Object.entries(catKeywords)) {
    for (const kw of kws) {
      if (kw.includes('-') || kw.length > 5) {
        if (s.includes(kw)) return cat;
      }
    }
  }
  // Second pass: check single-word keywords with word-boundary matching
  // (prevents 'spa' from matching inside 'studyspace', etc.)
  const parts = s.split('-');
  for (const [cat, kws] of Object.entries(catKeywords)) {
    for (const kw of kws) {
      if (!kw.includes('-') && kw.length <= 5) {
        if (parts.includes(kw)) return cat;
      }
    }
  }
  // Final fallback: substring match
  for (const [cat, kws] of Object.entries(catKeywords)) {
    for (const kw of kws) { if (s.includes(kw)) return cat; }
  }
  return 'Other';
}

function inferCity(title, slug) {
  const cities = ['Jabalpur','Indore','Bhopal','Gwalior','Satna','Rewa','Singrauli'];
  const combined = (title + ' ' + slug).toLowerCase();
  for (const c of cities) { if (combined.includes(c.toLowerCase())) return c; }
  return '';
}

function cleanName(t) {
  return t
    .replace(/\s*[-|]\s*Jabalpur\s*\|\s*VEDAM.*$/i, '')
    .replace(/\s*\|\s*Bhopal\s*\|\s*VEDAM.*$/i, '')
    .replace(/\s*\|\s*[A-Z][a-z]+(?:'s)?\s*\|\s*VEDAM.*$/i, '')
    .replace(/\s*\|\s*VEDAM.*$/i, '')
    .replace(/\s*[|—–-]\s*(?:Your|Built|Forge|The Mecca|Stellar|Blessed|Discover|Journeys|Salon,|Rewa's|Satna's).*$/i, '')
    .trim();
}

// ─── Extract data from each site ───────────────────────────────────────────
const businesses = [];
for (const dir of dirs) {
  const fp = path.join(ROOT, dir, 'index.html');
  if (!fs.existsSync(fp)) continue;
  const html = fs.readFileSync(fp, 'utf8');
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const fullTitle = titleMatch ? titleMatch[1].trim() : dir;
  const phoneMatch = html.match(/href="tel:(\+91[0-9]+)"/);
  const phone = phoneMatch ? phoneMatch[1] : '';
  const cat = inferCategory(dir);
  const city = inferCity(fullTitle, dir);
  businesses.push({
    slug: dir,
    name: cleanName(fullTitle),
    category: cat,
    city: city,
    phone: phone
  });
}

console.log(`Extracted data for ${businesses.length} businesses`);

// ─── Compute stats ─────────────────────────────────────────────────────────
const catCounts = {};
businesses.forEach(b => { catCounts[b.category] = (catCounts[b.category] || 0) + 1; });
const cityCounts = {};
businesses.forEach(b => { if (b.city) cityCounts[b.city] = (cityCounts[b.city] || 0) + 1; });
const categories = Object.keys(catCounts).sort();
const cities = Object.keys(cityCounts).sort();

const catIcons = {
  'Gym & Fitness': '💪', 'Spa & Salon': '💇', 'Restaurant & Cafe': '🍽️',
  'Bakery & Sweets': '🧁', 'Coaching & Education': '📚', 'Dental & Eye Care': '🦷',
  'Photography': '📸', 'Real Estate': '🏠', 'Travel & Tours': '✈️', 'Other': '🏢'
};
const catColors = {
  'Gym & Fitness': '#e63946', 'Spa & Salon': '#c9956c', 'Restaurant & Cafe': '#e8832a',
  'Bakery & Sweets': '#f97316', 'Coaching & Education': '#6c63ff', 'Dental & Eye Care': '#06b6d4',
  'Photography': '#ec4899', 'Real Estate': '#b87333', 'Travel & Tours': '#0369a1', 'Other': '#888'
};

// Build JS data array (minimized)
const jsData = businesses.map(b => ({
  s: b.slug, n: b.name, c: b.category, t: b.city, p: b.phone
}));

// ─── Stats HTML ────────────────────────────────────────────────────────────
const statsHtml = Object.entries(catCounts)
  .sort((a, b) => b[1] - a[1])
  .map(([c, n]) => `    <div class="stat"><strong>${n}</strong>${c}</div>`)
  .join('\n');

// ─── Category options HTML ─────────────────────────────────────────────────
const catOptionsHtml = categories
  .map(c => `    <option value="${c}">${catIcons[c] || '🏢'} ${c} (${catCounts[c]})</option>`)
  .join('\n');

// ─── City options HTML ─────────────────────────────────────────────────────
const cityOptionsHtml = cities
  .map(c => `    <option value="${c}">${c} (${cityCounts[c]})</option>`)
  .join('\n');

// ─── Build full HTML ───────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>VEDAM — Business Websites Directory</title>
<meta name="description" content="Directory of ${businesses.length} business websites built by VEDAM across Madhya Pradesh.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#0c0c0f;--surface:#16161a;--surface2:#111114;--border:#252528;--text:#e8e8ec;--muted:#888;--dim:#555;--accent:#6c63ff;--accent2:#4f46e5;--card-hover:#1e1e28;--radius:12px}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);min-height:100vh}
a{text-decoration:none;color:inherit}

/* Header */
.hdr{background:linear-gradient(135deg,#141428 0%,#0f1923 50%,#131320 100%);padding:clamp(24px,4vw,40px) clamp(16px,5%,60px);border-bottom:2px solid var(--accent)}
.hdr h1{font-size:clamp(1.4rem,3.5vw,2rem);font-weight:800;letter-spacing:-0.5px}
.hdr h1 span{color:var(--accent)}
.hdr p{color:var(--muted);margin-top:6px;font-size:clamp(.78rem,1.8vw,.9rem)}
.stats{display:flex;gap:10px;margin-top:16px;flex-wrap:wrap}
.stat{background:rgba(108,99,255,.1);border:1px solid rgba(108,99,255,.2);border-radius:8px;padding:8px 14px;font-size:.78rem;text-align:center;min-width:70px}
.stat strong{color:var(--accent);font-size:1.15rem;display:block;font-weight:700}

/* Controls */
.ctrl{padding:14px clamp(16px,5%,60px);display:flex;gap:8px;flex-wrap:wrap;align-items:center;background:var(--surface2);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100}
.ctrl input{flex:1;min-width:180px;padding:9px 14px;background:var(--surface);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.85rem;outline:none;transition:.2s}
.ctrl input:focus{border-color:var(--accent)}
.ctrl select{padding:9px 12px;background:var(--surface);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:.82rem;cursor:pointer;outline:none}
.ctrl-btn{padding:8px 14px;background:var(--surface);border:1px solid var(--border);border-radius:8px;color:var(--muted);font-size:.82rem;cursor:pointer;transition:.2s;white-space:nowrap}
.ctrl-btn:hover,.ctrl-btn.on{background:var(--accent);color:#fff;border-color:var(--accent)}
.count{margin-left:auto;font-size:.8rem;color:var(--muted);white-space:nowrap}

/* Grid */
.grid-view{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;padding:20px clamp(16px,5%,60px)}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;transition:all .25s;position:relative;overflow:hidden}
.card:hover{border-color:var(--accent);transform:translateY(-2px);box-shadow:0 8px 30px rgba(108,99,255,.12)}
.card-cat{display:inline-flex;align-items:center;gap:4px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;padding:4px 10px;border-radius:20px;margin-bottom:10px}
.card h3{font-size:1.05rem;font-weight:700;margin-bottom:6px;line-height:1.3}
.card-meta{font-size:.78rem;color:var(--muted);margin-bottom:4px;display:flex;align-items:center;gap:4px}
.card-meta svg{width:12px;height:12px;flex-shrink:0}
.card-btns{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}
.visit-btn{display:inline-flex;align-items:center;gap:5px;padding:8px 16px;border-radius:8px;font-size:.78rem;font-weight:600;transition:.2s;cursor:pointer;border:none}
.gh-btn{background:rgba(108,99,255,.15);color:var(--accent);border:1px solid rgba(108,99,255,.3)}
.gh-btn:hover{background:var(--accent);color:#fff}
.wa-btn{background:rgba(37,211,102,.12);color:#25D366;border:1px solid rgba(37,211,102,.3)}
.wa-btn:hover{background:#25D366;color:#fff}
.map-btn{background:rgba(255,255,255,.06);color:var(--muted);border:1px solid var(--border)}
.map-btn:hover{background:rgba(255,255,255,.12);color:var(--text)}

/* Table */
.tbl-wrap{display:none;padding:20px clamp(16px,5%,60px);overflow-x:auto}
table{width:100%;border-collapse:collapse;font-size:.82rem}
th{background:var(--accent);color:#fff;padding:10px 14px;text-align:left;font-weight:600;font-size:.75rem;text-transform:uppercase;letter-spacing:.5px;position:sticky;top:52px;z-index:50}
td{padding:10px 14px;border-bottom:1px solid var(--border);vertical-align:middle}
tr:hover td{background:var(--card-hover)}
.tbl-name{font-weight:600}
.tbl-cat{font-size:.72rem;background:rgba(108,99,255,.1);color:var(--accent);padding:3px 8px;border-radius:12px;display:inline-block}
.tbl-city{font-size:.75rem;background:rgba(255,255,255,.06);color:var(--muted);padding:3px 8px;border-radius:12px}
.tbl-link{font-size:.75rem;padding:5px 12px;border-radius:6px;font-weight:600;display:inline-block;background:rgba(108,99,255,.15);color:var(--accent);transition:.2s}
.tbl-link:hover{background:var(--accent);color:#fff}

/* Empty state */
.no-results{text-align:center;padding:60px 20px;color:var(--dim);font-size:1rem}

/* Footer */
.ftr{text-align:center;padding:24px;color:var(--dim);font-size:.75rem;border-top:1px solid var(--border);margin-top:20px}
.ftr strong{color:var(--accent)}

@media(max-width:640px){
  .grid-view{grid-template-columns:1fr;padding:12px}
  .ctrl{padding:10px 12px}
  .stats{gap:6px}
  .stat{min-width:60px;padding:6px 10px;font-size:.72rem}
  .stat strong{font-size:1rem}
}
</style>
</head>
<body>

<header class="hdr">
  <div>
    <h1>🌐 <span>VEDAM</span> — Websites Directory</h1>
    <p>${businesses.length} business websites across Madhya Pradesh • Click any button to visit the live site</p>
  </div>
  <div class="stats">
    <div class="stat"><strong>${businesses.length}</strong>Total Sites</div>
${statsHtml}
  </div>
</header>

<div class="ctrl">
  <input type="text" id="search" placeholder="🔍 Search businesses…" oninput="applyFilter()">
  <select id="filterCat" onchange="applyFilter()">
    <option value="">All Categories</option>
${catOptionsHtml}
  </select>
  <select id="filterCity" onchange="applyFilter()">
    <option value="">All Cities</option>
${cityOptionsHtml}
  </select>
  <button class="ctrl-btn on" id="btnGrid" onclick="setView('grid')">▦ Grid</button>
  <button class="ctrl-btn" id="btnTbl" onclick="setView('table')">☰ Table</button>
  <span class="count" id="countLabel">${businesses.length} businesses</span>
</div>

<div class="grid-view" id="gridView"></div>
<div class="tbl-wrap" id="tableView">
  <table>
    <thead><tr><th>#</th><th>Business Name</th><th>Category</th><th>City</th><th>Phone</th><th>Website</th></tr></thead>
    <tbody id="tbody"></tbody>
  </table>
</div>

<footer class="ftr">
  © 2025 <strong>VEDAM</strong> — All websites designed &amp; developed by Vedam Digital Solutions
</footer>

<script>
var DATA = ${JSON.stringify(jsData)};
var catIcons = ${JSON.stringify(catIcons)};
var catColors = ${JSON.stringify(catColors)};

var gridEl = document.getElementById('gridView');
var tbodyEl = document.getElementById('tbody');
var countEl = document.getElementById('countLabel');

function esc(s) {
  var d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function buildCards(items) {
  if (!items.length) return '<div class="no-results">No businesses match your search.</div>';
  var html = '';
  for (var i = 0; i < items.length; i++) {
    var d = items[i];
    var url = d.s + '/';
    var mapQ = encodeURIComponent(d.n + ' ' + (d.t || '') + ' India');
    var mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + mapQ;
    var icon = catIcons[d.c] || '🏢';
    var color = catColors[d.c] || '#888';

    html += '<div class="card">';
    html += '<div class="card-cat" style="color:' + color + ';background:' + color + '15;">' + icon + ' ' + esc(d.c) + '</div>';
    html += '<h3>' + esc(d.n) + '</h3>';
    if (d.t) {
      html += '<div class="card-meta"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/></svg> ' + esc(d.t) + '</div>';
    }
    if (d.p) {
      html += '<div class="card-meta"><svg viewBox="0 0 24 24" fill="#25D366"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg> ' + esc(d.p) + '</div>';
    }
    html += '<div class="card-btns">';
    html += '<a href="' + url + '" target="_blank" class="visit-btn gh-btn">🌐 Visit Website</a>';
    if (d.p) {
      html += '<a href="https://wa.me/' + d.p.replace('+','') + '" target="_blank" class="visit-btn wa-btn">💬 WhatsApp</a>';
    }
    html += '<a href="' + mapUrl + '" target="_blank" class="visit-btn map-btn">📍 Map</a>';
    html += '</div></div>';
  }
  return html;
}

function buildRows(items) {
  var html = '';
  for (var i = 0; i < items.length; i++) {
    var d = items[i];
    var url = d.s + '/';
    html += '<tr>';
    html += '<td>' + (i + 1) + '</td>';
    html += '<td class="tbl-name">' + esc(d.n) + '</td>';
    html += '<td><span class="tbl-cat">' + (catIcons[d.c]||'🏢') + ' ' + esc(d.c) + '</span></td>';
    html += '<td>' + (d.t ? '<span class="tbl-city">' + esc(d.t) + '</span>' : '-') + '</td>';
    html += '<td>' + (d.p ? esc(d.p) : '-') + '</td>';
    html += '<td><a href="' + url + '" target="_blank" class="tbl-link">🌐 Visit</a></td>';
    html += '</tr>';
  }
  return html;
}

function applyFilter() {
  var q = document.getElementById('search').value.toLowerCase();
  var cat = document.getElementById('filterCat').value;
  var city = document.getElementById('filterCity').value;
  var filtered = DATA.filter(function(d) {
    if (q && d.n.toLowerCase().indexOf(q) === -1 && d.s.toLowerCase().indexOf(q) === -1 && (d.t || '').toLowerCase().indexOf(q) === -1) return false;
    if (cat && d.c !== cat) return false;
    if (city && d.t !== city) return false;
    return true;
  });
  gridEl.innerHTML = buildCards(filtered);
  tbodyEl.innerHTML = buildRows(filtered);
  countEl.textContent = filtered.length + ' business' + (filtered.length !== 1 ? 'es' : '');
}

function setView(v) {
  var isGrid = v === 'grid';
  document.getElementById('gridView').style.display = isGrid ? 'grid' : 'none';
  document.getElementById('tableView').style.display = isGrid ? 'none' : 'block';
  document.getElementById('btnGrid').classList.toggle('on', isGrid);
  document.getElementById('btnTbl').classList.toggle('on', !isGrid);
}

applyFilter();
</script>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT, 'index.html'), html);
console.log(`✓ Generated index.html (${html.length} chars) with ${businesses.length} business links`);
