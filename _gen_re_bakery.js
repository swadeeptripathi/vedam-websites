const fs = require('fs');
const path = require('path');
const b = process.env.VEDAM_OUTPUT || path.resolve(__dirname);
function write(slug, html) {
  fs.writeFileSync(path.join(b, slug, 'index.html'), html, 'utf8');
  console.log('✓ ' + slug + ' (' + html.length + ' chars)');
}

const CSS = `:root{--a:#CC0000}*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;color:#e0e0e0;overflow-x:hidden;background:#0f0f0f}h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800}section{padding:80px 5%}.container{max-width:1200px;margin:0 auto}.stitle{font-size:clamp(1.8rem,4vw,2.8rem);text-align:center;margin-bottom:.5rem;text-transform:uppercase}.stitle span{color:var(--a)}.ssub{text-align:center;color:#888;max-width:600px;margin:0 auto 3rem;font-size:.92rem;line-height:1.7}nav{position:fixed;top:0;width:100%;z-index:1000;padding:14px 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(10,10,10,.88);backdrop-filter:blur(20px);border-bottom:2px solid var(--a)}.logo-txt{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.3rem;font-weight:800;color:#fff}.logo-txt em{color:var(--a);font-style:normal}.nav-links{display:flex;gap:24px;list-style:none}.nav-links a{color:#bbb;text-decoration:none;font-size:.87rem;font-weight:600;transition:.3s}.nav-links a:hover{color:var(--a)}.hbg{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none}.hbg span{width:24px;height:2px;background:#fff}.mm{display:none;position:fixed;inset:0;background:rgba(10,10,10,.98);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:28px}.mm.open{display:flex}.mm a{color:#fff;font-size:1.3rem;text-decoration:none;font-family:'Plus Jakarta Sans',sans-serif}.mm-close{position:absolute;top:20px;right:20px;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer}.hero{height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden}.h-bg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.16}.h-ov{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.88))}.h-cnt{position:relative;z-index:2;padding:0 20px}.h-badge{display:inline-block;background:var(--a);color:#fff;font-size:.72rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:6px 16px;border-radius:20px;margin-bottom:20px}.h-cnt h1{font-size:clamp(2.6rem,7vw,5rem);color:#fff;line-height:1.1;margin-bottom:18px;text-transform:uppercase}.h-cnt h1 em{color:var(--a);font-style:normal;display:block}.h-cnt p{color:#bbb;font-size:1rem;max-width:520px;margin:0 auto 28px;line-height:1.7}.btn{display:inline-block;padding:13px 32px;background:var(--a);color:#fff;text-decoration:none;font-weight:700;border-radius:4px;font-size:.88rem;transition:.3s;text-transform:uppercase;letter-spacing:1px;font-family:'Plus Jakarta Sans',sans-serif;border:2px solid var(--a)}.btn:hover{background:transparent;color:var(--a)}.btn-s{background:transparent;border-color:#fff;color:#fff;margin-left:12px}.btn-s:hover{background:#fff;color:#000}.ag{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}.ai{position:relative;border-radius:12px;overflow:hidden}.ai img{width:100%;height:420px;object-fit:cover;border-radius:12px}.a-badge{position:absolute;bottom:20px;right:20px;background:var(--a);color:#fff;padding:12px 16px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:.95rem;border-radius:8px;text-align:center;line-height:1.3}.at h2{font-size:2rem;margin-bottom:14px;text-transform:uppercase}.at h2 em{color:var(--a);font-style:normal}.at p{color:#aaa;line-height:1.85;margin-bottom:14px}.feats{display:flex;flex-wrap:wrap;gap:9px;margin-top:16px}.feat{display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:5px;padding:6px 12px;font-size:.8rem}.feat strong{color:var(--a)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:18px}.card{background:#1e1e1e;border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:26px;transition:.3s}.card:hover{border-color:var(--a);transform:translateY(-4px)}.ci{font-size:2rem;margin-bottom:12px}.card h3{font-size:.98rem;text-transform:uppercase;margin-bottom:7px}.card p{color:#777;font-size:.85rem;line-height:1.6}.ss{background:#141414;border-top:3px solid var(--a);border-bottom:3px solid var(--a)}.sg{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;text-align:center}.sg h3{font-size:clamp(1.9rem,4vw,3rem);color:var(--a)}.sg p{color:#666;font-size:.75rem;letter-spacing:2px;text-transform:uppercase;margin-top:6px}.ts{background:rgba(255,255,255,.01)}.tsl{max-width:660px;margin:0 auto;overflow:hidden}.ttr{display:flex;transition:transform .5s}.ti{min-width:100%;padding:34px;text-align:center}.ti blockquote{font-size:.98rem;line-height:1.9;color:#bbb;font-style:italic;margin-bottom:14px}.ti cite{color:var(--a);font-style:normal;font-weight:700}.ti small{display:block;color:#555;font-size:.78rem;margin-top:3px}.tnav{display:flex;justify-content:center;gap:8px;margin-top:12px}.td{width:9px;height:9px;border-radius:50%;border:none;background:rgba(255,255,255,.2);cursor:pointer;transition:.3s}.td.on{background:var(--a)}.cg{display:grid;grid-template-columns:1fr 1fr;gap:38px}.cf input,.cf textarea,.cf select{width:100%;padding:12px 14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:7px;color:#fff;font-family:'Inter',sans-serif;font-size:.87rem;margin-bottom:11px;transition:.3s}.cf input:focus,.cf textarea:focus,.cf select:focus{outline:none;border-color:var(--a)}.cf textarea{height:100px;resize:vertical}.ci2{display:flex;flex-direction:column;gap:14px}.ci-it{display:flex;gap:12px;align-items:flex-start}.ci-ic{width:40px;height:40px;background:var(--a);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.95rem;flex-shrink:0}.ci-it h4{font-size:.84rem;margin-bottom:2px}.ci-it p,.ci-it a{color:#777;font-size:.81rem;text-decoration:none}.mapbox{margin-top:14px;border-radius:10px;overflow:hidden;height:195px}.mapbox iframe{width:100%;height:100%;border:0}footer{background:#080808;padding:28px 5%;text-align:center;border-top:1px solid rgba(255,255,255,.05)}.soc{display:flex;gap:11px;justify-content:center;margin-bottom:11px}.soc a{width:35px;height:35px;border-radius:50%;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:#bbb;text-decoration:none;transition:.3s;font-size:.9rem}.soc a:hover{border-color:var(--a);color:var(--a)}footer p{color:#3a3a3a;font-size:.76rem}.wa{position:fixed;bottom:24px;right:24px;width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:998;box-shadow:0 4px 18px rgba(37,211,102,.4);transition:transform .3s;text-decoration:none;font-size:1.5rem}.wa:hover{transform:scale(1.1)}@media(max-width:1024px){.sg{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.nav-links{display:none}.hbg{display:flex}.ag,.cg{grid-template-columns:1fr}}`;

const JS = `<script>
var tI=0;var tT=document.querySelector('.ttr');var tD=document.querySelectorAll('.td');
function goT(n){tI=n;if(tT)tT.style.transform='translateX(-'+(n*100)+'%)';tD.forEach(function(d,i){d.classList.toggle('on',i===n)});}
setInterval(function(){goT((tI+1)%3);},4500);
var cs=document.querySelectorAll('.ctr');var ob=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target,t=+el.dataset.t,s=performance.now();function run(now){var p=Math.min((now-s)/2000,1);el.textContent=Math.floor(p*t).toLocaleString()+'+';if(p<1)requestAnimationFrame(run);}requestAnimationFrame(run);ob.unobserve(el);}});},{threshold:0.5});
cs.forEach(function(c){ob.observe(c);});
<\/script>`;

function page(title, accent, bg, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>${CSS.replace(':root{--a:#CC0000}',':root{--a:'+accent+'}').replace('background:#0f0f0f}','background:'+(bg||'#0f0f0f')+'}')}
</style>
</head>
<body>${body}${JS}</body>
</html>`;
}

function navH(logo, links) {
  return `<nav><div class="logo-txt">${logo}</div>
<ul class="nav-links">${links.map(l=>`<li><a href="#${l[0]}">${l[1]}</a></li>`).join('')}</ul>
<button class="hbg" onclick="document.querySelector('.mm').classList.add('open')"><span></span><span></span><span></span></button>
</nav>
<div class="mm"><button class="mm-close" onclick="this.parentElement.classList.remove('open')">✕</button>
${links.map(l=>`<a href="#${l[0]}" onclick="this.parentElement.classList.remove('open')">${l[1]}</a>`).join('\n')}</div>`;
}

function heroS(badge, h1, h1em, p, phone, bg) {
  return `<section class="hero">
<div class="h-bg" style="background-image:url('${bg}')"></div>
<div class="h-ov"></div>
<div class="h-cnt">
  <div class="h-badge">${badge}</div>
  <h1>${h1}<em>${h1em}</em></h1>
  <p>${p}</p>
  <a href="#contact" class="btn">Get Started</a>
  <a href="tel:${phone}" class="btn btn-s">Call Now</a>
</div>
</section>`;
}

function aboutS(img, badge, title, p1, p2, feats) {
  return `<section id="about" style="background:#141414">
<div class="container ag">
  <div class="ai"><img src="${img}" alt="${title}"><div class="a-badge">${badge}</div></div>
  <div class="at"><h2>About <em>${title}</em></h2><p>${p1}</p><p>${p2}</p>
    <div class="feats">${feats.map(f=>`<div class="feat"><strong>✓</strong> ${f}</div>`).join('')}</div>
  </div>
</div>
</section>`;
}

function svcS(title, cards) {
  return `<section id="services"><div class="container">
  <h2 class="stitle">Our <span>${title}</span></h2>
  <p class="ssub">Comprehensive services tailored to your needs</p>
  <div class="grid">${cards.map(c=>`<div class="card"><div class="ci">${c.i}</div><h3>${c.n}</h3><p>${c.d}</p></div>`).join('')}</div>
</div></section>`;
}

function statsS(s) {
  return `<section class="ss"><div class="container"><div class="sg">
  ${s.map(x=>`<div><h3 class="ctr" data-t="${x.n}">0</h3><p>${x.l}</p></div>`).join('')}
</div></div></section>`;
}

function testiS(t1,t2,t3) {
  return `<section class="ts"><div class="container">
  <h2 class="stitle">Client <span>Reviews</span></h2>
  <div class="tsl"><div class="ttr">
    <div class="ti"><blockquote>"${t1.q}"</blockquote><cite>${t1.n}</cite><small>${t1.s||''}</small></div>
    <div class="ti"><blockquote>"${t2.q}"</blockquote><cite>${t2.n}</cite><small>${t2.s||''}</small></div>
    <div class="ti"><blockquote>"${t3.q}"</blockquote><cite>${t3.n}</cite><small>${t3.s||''}</small></div>
  </div>
  <div class="tnav"><button class="td on" onclick="goT(0)"></button><button class="td" onclick="goT(1)"></button><button class="td" onclick="goT(2)"></button></div>
  </div>
</div></section>`;
}

function contactS(opts, items) {
  return `<section id="contact" style="background:#141414"><div class="container">
  <h2 class="stitle">Get In <span>Touch</span></h2>
  <p class="ssub">Reach out today — we respond within hours</p>
  <div class="cg">
    <form class="cf" onsubmit="event.preventDefault();alert('Thank you! We will contact you soon.')">
      <input type="text" placeholder="Your Name" required>
      <input type="tel" placeholder="Phone Number" required>
      <input type="email" placeholder="Email Address">
      <select>${opts.map(o=>`<option>${o}</option>`).join('')}</select>
      <textarea placeholder="Your message..."></textarea>
      <button type="submit" class="btn" style="width:100%;cursor:pointer">Send Message</button>
    </form>
    <div>
      <div class="ci2">${items.map(i=>`<div class="ci-it"><div class="ci-ic">${i.icon}</div><div><h4>${i.label}</h4><p>${i.val}</p></div></div>`).join('')}</div>
      <div class="mapbox"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013!2d75.88!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzE5LjIiTiA3NcKwNTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1" allowfullscreen loading="lazy"></iframe></div>
    </div>
  </div>
</div></section>`;
}

function footS(name, phone, wa) {
  return `<footer>
<div class="soc"><a href="tel:${phone}">📞</a><a href="https://wa.me/${wa}">💬</a></div>
<p>© 2026 ${name}. All rights reserved. | Powered by <strong style="color:var(--a)">VEDAM</strong></p>
</footer>
<a href="https://wa.me/${wa}" class="wa">💬</a>`;
}

const reImg = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80';
const reHero = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=70';
const bakeryImg = 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=80';
const bakeryHero = 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1400&q=70';

// =====================================================
// REAL ESTATE
// =====================================================

write('lakshmi-narayan-realty-vedam', page(
  "Lakshmi Narayan Realty — Property Dealer Indore",
  '#f59e0b', '#0f0c06',
  navH('<em>Lakshmi Narayan</em> Realty', [['about','About'],['services','Services'],['properties','Properties'],['contact','Contact']]) +
  heroS('Real Estate — Indore', 'YOUR DREAM PROPERTY', 'STARTS HERE', 'Lakshmi Narayan Realty — trusted property dealers in Indore. Buy, sell, or rent residential and commercial properties with expert guidance.', '+919826634848', reHero) +
  aboutS(reImg, 'Trusted<br>Property Dealers', 'Lakshmi Narayan Realty',
    'Lakshmi Narayan Realty is a trusted name in Indore\'s real estate market. With years of experience and an extensive portfolio of residential and commercial properties, we help clients find their perfect property.',
    'Our team of experienced property consultants has deep knowledge of Indore\'s real estate landscape — from premium residential colonies to commercial hubs. We ensure transparent deals and the best value for your investment.',
    ['Trusted Consultants','Wide Property Portfolio','Legal Due Diligence','Best Price Guarantee']
  ) +
  svcS('Real Estate', [
    {i:'🏠',n:'Residential Sales',d:'Buy your dream home — apartments, villas, and independent houses.'},
    {i:'🏢',n:'Commercial Properties',d:'Office spaces, shops, and commercial complexes for business.'},
    {i:'🔑',n:'Rental Properties',d:'Residential and commercial rentals across Indore.'},
    {i:'🏗️',n:'New Projects',d:'Exclusive new launch projects and under-construction properties.'},
    {i:'📋',n:'Legal Assistance',d:'Complete documentation and legal assistance for all transactions.'},
    {i:'💰',n:'Investment Advisory',d:'Expert advice on high-ROI real estate investments in Indore.'}
  ]) +
  statsS([{n:500,l:'Properties Sold'},{n:15,l:'Years Experience'},{n:1000,l:'Happy Clients'},{n:200,l:'Active Listings'}]) +
  testiS(
    {q:'Lakshmi Narayan Realty helped us find our dream apartment in Indore at the best price. The team guided us through every step and made the whole process smooth and stress-free.', n:'Ramesh & Sita Patel', s:'Home Buyers'},
    {q:'Excellent real estate consultants! Sold our commercial property through them and got the best market price. Professional handling of all documentation. Highly recommend!', n:'Ajay Verma', s:'Property Seller'},
    {q:'Best property dealers in Indore. They showed us multiple options within our budget and were completely transparent about each property. Finally found our perfect home!', n:'Vikram Singh', s:'First-Time Home Buyer'}
  ) +
  contactS(['Property Requirement','Buy Residential','Buy Commercial','Rent Property','Sell Property','Investment Advisory','General Inquiry'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919826634848">+91 98266 34848</a>'},
     {icon:'🕐',label:'Office Hours',val:'Mon-Sat: 9 AM – 7 PM | Sun: By Appointment'}]
  ) +
  footS('Lakshmi Narayan Realty, Indore', '+919826634848', '919826634848')
));

write('square-yards-indore-vedam', page(
  "Square Yards Indore — Property Dealers & Real Estate Consultants",
  '#16a34a', '#060f09',
  navH('<em>Square Yards</em>', [['about','About'],['services','Services'],['properties','Properties'],['contact','Contact']]) +
  heroS('Real Estate — Indore', 'FIND YOUR PERFECT', 'PROPERTY IN INDORE', 'Square Yards Indore — India\'s largest real estate platform. Expert property consultants helping you buy, sell, and invest in Indore\'s booming real estate market.', '+919893754690', reHero) +
  aboutS(reImg, 'India\'s<br>Largest Platform', 'Square Yards Indore',
    'Square Yards is India\'s largest integrated real estate platform with 10,000+ advisors across 30+ cities. Our Indore team combines local market expertise with Square Yards\' powerful technology and national network.',
    'Whether you\'re a first-time homebuyer, an investor looking for high-ROI properties, or a developer seeking qualified buyers — Square Yards Indore is your most trusted real estate partner.',
    ['10,000+ Property Advisors','National Network','Tech-Enabled Search','Verified Properties']
  ) +
  svcS('Property', [
    {i:'🏠',n:'Residential',d:'Apartments, villas, plots, and independent houses across Indore.'},
    {i:'🏢',n:'Commercial',d:'Office spaces, retail shops, and commercial complexes.'},
    {i:'📈',n:'Investment',d:'High-ROI investment properties with detailed market analysis.'},
    {i:'🔑',n:'Rental',d:'Rental property solutions for tenants and landlords.'},
    {i:'🏗️',n:'New Projects',d:'Exclusive launches from top developers in Indore.'},
    {i:'📋',n:'Documentation',d:'Complete property registration and legal documentation support.'}
  ]) +
  statsS([{n:10000,l:'Advisors India'},{n:30,l:'Cities'},{n:50000,l:'Properties Listed'},{n:100000,l:'Transactions Done'}]) +
  testiS(
    {q:'Square Yards Indore team helped me invest in a great property with excellent ROI potential. Their market analysis was thorough and the entire transaction was seamless.', n:'Priya Agarwal', s:'Property Investor'},
    {q:'Best real estate experience I\'ve had. The Square Yards team in Indore showed me properties that matched my exact requirements and budget. Now proudly own my first home!', n:'Rohan Sharma', s:'First-Time Buyer'},
    {q:'Got my property sold through Square Yards at the best price in the market. Their buyer network is extensive and the process was transparent and professional. Highly recommend!', n:'Meena Joshi', s:'Property Seller'}
  ) +
  contactS(['I Want To','Buy Property','Sell Property','Rent Out','Invest in Real Estate','Get Home Loan','General Inquiry'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919893754690">+91 98937 54690</a>'},
     {icon:'🌐',label:'Website',val:'<a href="https://squareyards.com/real-estate-agents-in-indore">squareyards.com</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 9 AM – 8 PM'}]
  ) +
  footS('Square Yards, Indore', '+919893754690', '919893754690')
));

write('rishiraj-realty-vedam', page(
  "Rishiraj Realty Consultant — Property Dealer Indore",
  '#7c3aed', '#080610',
  navH('<em>Rishiraj</em> Realty', [['about','About'],['services','Services'],['properties','Properties'],['contact','Contact']]) +
  heroS('Property Consultant — Indore', 'EXPERT PROPERTY', 'SOLUTIONS INDORE', 'Rishiraj Realty Consultant — your trusted partner for buying, selling, and investing in Indore\'s real estate market. Transparent deals, expert guidance.', '+919826634848', reHero) +
  aboutS(reImg, 'Trusted<br>Since Years', 'Rishiraj Realty',
    'Rishiraj Realty Consultant is a reputed property dealer in Indore offering comprehensive real estate services. Our team of experienced consultants has helped hundreds of families and businesses find their ideal properties.',
    'With in-depth knowledge of Indore\'s micro-markets — from premium Vijay Nagar to upcoming areas — we help clients make informed decisions that deliver maximum value for their investment.',
    ['Expert Consultants','Wide Listings Portfolio','Legal & Documentation','Post-Sale Support']
  ) +
  svcS('Property', [
    {i:'🏠',n:'Residential Sales',d:'Premium and affordable homes across all Indore localities.'},
    {i:'🏢',n:'Commercial Spaces',d:'Offices, shops, warehouses, and industrial spaces.'},
    {i:'🏗️',n:'Plot & Land',d:'Residential and commercial plots in prime and developing locations.'},
    {i:'🔑',n:'Rental Services',d:'Hassle-free rental solutions for tenants and landlords.'},
    {i:'📋',n:'Property Registration',d:'Complete legal and documentation support for all transactions.'},
    {i:'💰',n:'Investment Properties',d:'Smart investment guidance for capital appreciation.'}
  ]) +
  statsS([{n:300,l:'Properties Sold'},{n:10,l:'Years Experience'},{n:600,l:'Happy Clients'},{n:150,l:'Active Listings'}]) +
  testiS(
    {q:'Rishiraj Realty is the most reliable property dealer in Indore. They found us a beautiful apartment in Vijay Nagar and handled all paperwork perfectly. Very professional!', n:'Suresh Patel', s:'Home Buyer'},
    {q:'Excellent service! Sold my property through Rishiraj Realty and got fair market price. Quick buyer network and transparent process throughout. Highly recommended.', n:'Anita Sharma', s:'Property Seller'},
    {q:'Great investment guidance from Rishiraj Realty. They helped me identify a plot in a developing area that has already appreciated 40% in 2 years. Smart team!', n:'Vikrant Joshi', s:'Property Investor'}
  ) +
  contactS(['Requirement','Buy Home','Buy Commercial','Sell Property','Rent Residential','Rent Commercial','Investment Advice'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919826634848">+91 98266 34848</a>'},
     {icon:'📧',label:'Email',val:'indoreproperty18@gmail.com'},
     {icon:'🌐',label:'Website',val:'<a href="https://rishirajrealtyconsultant.in">rishirajrealtyconsultant.in</a>'}]
  ) +
  footS('Rishiraj Realty Consultant, Indore', '+919826634848', '919826634848')
));

write('rishiraj-search-properties-vedam', page(
  "Rishiraj Search Properties — Find Property in Indore",
  '#7c3aed', '#080610',
  navH('<em>Rishiraj</em> Properties', [['about','About'],['services','Services'],['listings','Listings'],['contact','Contact']]) +
  heroS('Property Search — Indore', 'FIND YOUR IDEAL', 'PROPERTY FAST', 'Rishiraj Search Properties — simplifying your property search in Indore with an expert team, verified listings, and end-to-end assistance.', '+919826634848', reHero) +
  aboutS(reImg, 'Search<br>Made Simple', 'Rishiraj Search Properties',
    'Rishiraj Search Properties is dedicated to making property search simple, transparent, and stress-free. Our expert team curates verified property listings that match your exact requirements and budget.',
    'We believe the right property search begins with understanding your needs — family size, budget, preferred locality, amenities, and future plans. Our consultants take time to understand you before showing you options.',
    ['Verified Listings Only','Personalised Search','No Hidden Charges','Expert Negotiation']
  ) +
  svcS('Property Search', [
    {i:'🔍',n:'Property Search',d:'Curated property searches tailored to your specific requirements.'},
    {i:'🏠',n:'Residential',d:'Apartments, floors, villas, and independent houses.'},
    {i:'🏢',n:'Commercial',d:'Offices, showrooms, shops, and business spaces.'},
    {i:'💹',n:'Investment',d:'High-appreciation investment properties with market data.'},
    {i:'🤝',n:'Negotiation',d:'Expert price negotiation to get you the best deal.'},
    {i:'📝',n:'Documentation',d:'Legal checks, paperwork, and registration assistance.'}
  ]) +
  statsS([{n:500,l:'Successful Searches'},{n:10,l:'Years Experience'},{n:1000,l:'Clients Served'},{n:200,l:'Verified Listings'}]) +
  testiS(
    {q:'Rishiraj Search Properties understood exactly what I needed and showed me only relevant options. Saved me so much time! Found my perfect 3BHK in 2 weeks. Outstanding service!', n:'Priya Malhotra', s:'Home Buyer'},
    {q:'The team negotiated an excellent price for the commercial space we were targeting. Their market knowledge is impressive and they were transparent throughout. Highly recommend!', n:'Ramesh Gupta', s:'Commercial Buyer'},
    {q:'Used Rishiraj Search Properties for rental accommodation and they found a great apartment within budget in my preferred location in just 3 days. Quick and efficient!', n:'Ananya Shah', s:'Tenant'}
  ) +
  contactS(['I Need','Buy Residential','Buy Commercial','Rent Home','Rent Commercial','Investment Property','Property Valuation'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919826634848">+91 98266 34848</a>'},
     {icon:'📧',label:'Email',val:'indoreproperty18@gmail.com'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 9 AM – 7 PM'}]
  ) +
  footS('Rishiraj Search Properties, Indore', '+919826634848', '919826634848')
));

// =====================================================
// BAKERIES
// =====================================================

write('bakerywala-indore-vedam', page(
  "Bakerywala Indore — Fresh Baked Breads, Cakes & Pastries",
  '#f97316', '#0f0a06',
  navH('<em>Bakerywala</em>', [['about','About'],['menu','Menu'],['order','Order'],['contact','Contact']]) +
  heroS('Artisan Bakery — Indore', 'BAKED WITH', 'LOVE AND BUTTER', 'Bakerywala Indore — fresh artisan breads, decadent cakes, and delightful pastries baked fresh every morning. Experience the warmth of real baking.', '+917771837774', bakeryHero) +
  aboutS(bakeryImg, 'Fresh<br>Daily', 'Bakerywala Indore',
    'Bakerywala Indore is a beloved artisan bakery committed to the craft of real baking. We use premium ingredients, traditional techniques, and a lot of passion to create breads, cakes, and pastries that delight every sense.',
    'Follow us on Instagram for daily updates on fresh bakes, seasonal specials, and custom order availability. Our kitchen works through the night so you get the freshest baked goods every morning.',
    ['Fresh Daily Bakes','Premium Ingredients','Custom Orders','Free Delivery Available']
  ) +
  `<section id="menu"><div class="container">
  <h2 class="stitle">Our <span>Menu</span></h2>
  <p class="ssub">Everything from our oven to your table</p>
  <div class="grid">
    <div class="card"><div class="ci">🍞</div><h3>Artisan Breads</h3><p>Sourdough, multigrain, baguettes, and specialty breads baked fresh daily.</p></div>
    <div class="card"><div class="ci">🎂</div><h3>Custom Cakes</h3><p>Birthday, wedding, and celebration cakes with stunning designs.</p></div>
    <div class="card"><div class="ci">🥐</div><h3>Pastries & Croissants</h3><p>Buttery, flaky pastries and authentic French croissants.</p></div>
    <div class="card"><div class="ci">🍰</div><h3>Desserts & Mousse</h3><p>Chocolate mousse, cheesecakes, tiramisu, and more indulgences.</p></div>
    <div class="card"><div class="ci">🍪</div><h3>Cookies & Biscuits</h3><p>Crispy, chewy, and flavour-packed cookies in 20+ varieties.</p></div>
    <div class="card"><div class="ci">🥧</div><h3>Savoury Bakes</h3><p>Quiches, puff pastries, and savoury tarts for every occasion.</p></div>
  </div>
</div></section>` +
  statsS([{n:50,l:'Fresh Items Daily'},{n:5,l:'Years Baking'},{n:2000,l:'Happy Customers'},{n:100,l:'Custom Cake Designs'}]) +
  testiS(
    {q:'Bakerywala Indore is simply the best! The sourdough bread is perfect — crusty outside, soft inside. And their custom birthday cakes are absolutely beautiful and delicious!', n:'Seema Joshi', s:'Regular Customer'},
    {q:'Got a custom wedding cake from Bakerywala and it was the highlight of our celebration. The design was flawless and the taste was incredible. Everyone wanted the recipe!', n:'Ritu & Karan', s:'Wedding Cake Clients'},
    {q:'The croissants at Bakerywala are better than anything I\'ve had in France (almost)! The pastry is perfectly laminated and buttery. A true artisan bakery in Indore!', n:'Aditya Kapoor', s:'Pastry Lover'}
  ) +
  `<section id="order" style="background:#141414"><div class="container">
  <h2 class="stitle">Order <span>Now</span></h2>
  <p class="ssub">Order online or call us directly — custom orders need 48 hours notice</p>
  <div class="cg">
    <form class="cf" onsubmit="event.preventDefault();alert('Order received! We will confirm shortly.')">
      <input type="text" placeholder="Your Name" required>
      <input type="tel" placeholder="Phone Number" required>
      <input type="email" placeholder="Email Address">
      <select><option>Select Product</option><option>Artisan Bread</option><option>Custom Cake</option><option>Pastries Box</option><option>Cookie Assortment</option><option>Dessert Box</option><option>Custom Order</option></select>
      <textarea placeholder="Your order details (flavour, size, design, date needed...)"></textarea>
      <button type="submit" class="btn" style="width:100%;cursor:pointer">Place Order</button>
    </form>
    <div>
      <div class="ci2">
        <div class="ci-it"><div class="ci-ic">📍</div><div><h4>Location</h4><p>Indore, Madhya Pradesh</p></div></div>
        <div class="ci-it"><div class="ci-ic">📞</div><div><h4>Phone</h4><p><a href="tel:+917771837774">+91 77718 37774</a></p></div></div>
        <div class="ci-it"><div class="ci-ic">📸</div><div><h4>Instagram</h4><p><a href="https://instagram.com/bakerywalaindore">@bakerywalaindore</a></p></div></div>
        <div class="ci-it"><div class="ci-ic">🕐</div><div><h4>Hours</h4><p>Open Daily: 7 AM – 9 PM</p></div></div>
      </div>
      <div class="mapbox"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013!2d75.88!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzE5LjIiTiA3NcKwNTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1" allowfullscreen loading="lazy"></iframe></div>
    </div>
  </div>
</div></section>` +
  footS('Bakerywala Indore', '+917771837774', '917771837774')
));

write('theobroma-indore-vedam', page(
  "Theobroma Bakery Indore — Premium Cakes & Pastries | VIJAY Nagar",
  '#c2410c', '#0f0806',
  navH('<em>Theobroma</em>', [['about','About'],['menu','Menu'],['order','Order'],['contact','Contact']]) +
  heroS('Premium Bakery — Indore', 'FOOD OF THE', 'GODS IN INDORE', 'Theobroma — Mumbai\'s most loved premium bakery chain is now in Indore. Extraordinary cakes, artisan breads, and desserts crafted with obsession.', '+918182881881', bakeryHero) +
  aboutS(bakeryImg, 'Mumbai\'s<br>Finest Bakery', 'Theobroma Indore',
    'Theobroma — meaning "food of the gods" — is Mumbai\'s most celebrated premium bakery chain, now bringing its legendary cakes, pastries, and sandwiches to Indore\'s VIJAY Nagar. Founded by the Bhive family, Theobroma is a true institution.',
    'Every item is crafted with the finest ingredients — Belgian couverture chocolate, pure butter, premium flour — and baked with precision and passion. Once you try Theobroma, nothing else quite measures up.',
    ['Premium Belgian Chocolate','100% Pure Butter','No Preservatives','Mumbai\'s Most Loved']
  ) +
  `<section id="menu"><div class="container">
  <h2 class="stitle">Our <span>Specialties</span></h2>
  <p class="ssub">A curated selection of Theobroma's most beloved creations</p>
  <div class="grid">
    <div class="card"><div class="ci">🍫</div><h3>Signature Brownies</h3><p>Theobroma's legendary fudgy brownies — the ultimate chocolate experience.</p></div>
    <div class="card"><div class="ci">🎂</div><h3>Celebration Cakes</h3><p>Stunning cakes for birthdays, anniversaries, and all celebrations.</p></div>
    <div class="card"><div class="ci">🥐</div><h3>Artisan Croissants</h3><p>Authentic multi-layered French croissants with premium butter.</p></div>
    <div class="card"><div class="ci">🍰</div><h3>Cheesecakes</h3><p>Classic baked and no-bake cheesecakes in multiple flavours.</p></div>
    <div class="card"><div class="ci">🥪</div><h3>Artisan Sandwiches</h3><p>Freshly made gourmet sandwiches and wraps for meals on the go.</p></div>
    <div class="card"><div class="ci">☕</div><h3>Café Beverages</h3><p>Hot and cold beverages to perfectly complement your baked treats.</p></div>
  </div>
</div></section>` +
  statsS([{n:20,l:'Years of Baking'},{n:25,l:'Store Locations'},{n:100,l:'Menu Items'},{n:50000,l:'Daily Customers India'}]) +
  testiS(
    {q:'Theobroma in Indore is an absolute blessing! The brownies are legendary — exactly as good as the Mumbai original. The café is beautiful and the service is wonderful.', n:'Riya Sharma', s:'Regular Customer'},
    {q:'Got a celebration cake from Theobroma Indore and it was a masterpiece — visually stunning and absolutely delicious. Everyone at the party was asking where I ordered it from!', n:'Priya & Rohan', s:'Wedding Anniversary'},
    {q:'The croissants at Theobroma are the closest to Parisian quality I\'ve found in India. The butter layers are perfect and the taste is extraordinary. Visit this place now!', n:'Aditya Rathore', s:'Food Blogger'}
  ) +
  `<section id="order" style="background:#141414"><div class="container">
  <h2 class="stitle">Order <span>Online</span></h2>
  <p class="ssub">Pre-order for guaranteed availability of your favourites</p>
  <div class="cg">
    <form class="cf" onsubmit="event.preventDefault();alert('Order noted! We will confirm shortly.')">
      <input type="text" placeholder="Your Name" required>
      <input type="tel" placeholder="Phone Number" required>
      <input type="email" placeholder="Email Address">
      <select><option>Select Item</option><option>Signature Brownies Box</option><option>Celebration Cake</option><option>Assorted Pastries Box</option><option>Croissant Box</option><option>Cheesecake</option><option>Custom Cake Order</option></select>
      <textarea placeholder="Order details (cake flavour, size, design, delivery date...)"></textarea>
      <button type="submit" class="btn" style="width:100%;cursor:pointer">Pre-Order Now</button>
    </form>
    <div>
      <div class="ci2">
        <div class="ci-it"><div class="ci-ic">📍</div><div><h4>Store Location</h4><p>VIJAY Nagar, Indore, Madhya Pradesh</p></div></div>
        <div class="ci-it"><div class="ci-ic">📞</div><div><h4>Phone</h4><p><a href="tel:+918182881881">+91 81828 81881</a></p></div></div>
        <div class="ci-it"><div class="ci-ic">📧</div><div><h4>Email</h4><p>contact@theobroma.in</p></div></div>
        <div class="ci-it"><div class="ci-ic">🌐</div><div><h4>Website</h4><p><a href="https://theobroma.in">theobroma.in</a></p></div></div>
      </div>
      <div class="mapbox"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013!2d75.88!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzE5LjIiTiA3NcKwNTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1" allowfullscreen loading="lazy"></iframe></div>
    </div>
  </div>
</div></section>` +
  footS('Theobroma, Indore', '+918182881881', '918182881881')
));

write('rk-bakery-indore-vedam', page(
  "RK Bakery Indore — Fresh Breads, Cakes & Baked Goods Near Aurbindo Hospital",
  '#dc2626', '#0f0808',
  navH('<em>RK</em> Bakery', [['about','About'],['menu','Menu'],['order','Order'],['contact','Contact']]) +
  heroS('Local Bakery — Indore', 'FRESH BAKED', 'GOODNESS DAILY', 'RK Bakery near Aurbindo Hospital, Bhawrasla — your neighbourhood bakery for fresh breads, cakes, biscuits, and all baked essentials every day.', '+918401977578', bakeryHero) +
  aboutS(bakeryImg, 'Fresh<br>Every Day', 'RK Bakery Indore',
    'RK Bakery is a trusted neighbourhood bakery near Aurbindo Hospital, Bhawrasla, Indore. We have been serving fresh baked goods to the local community with consistency and quality that keeps customers coming back every day.',
    'From morning breads and evening snacks to custom celebration cakes — RK Bakery covers all your baked needs at affordable prices. We use fresh ingredients and maintain the highest hygiene standards in our kitchen.',
    ['Fresh Daily Bakes','Hygiene Certified Kitchen','Affordable Prices','Custom Cakes Available']
  ) +
  `<section id="menu"><div class="container">
  <h2 class="stitle">Our <span>Products</span></h2>
  <p class="ssub">Freshly baked every morning for your daily needs</p>
  <div class="grid">
    <div class="card"><div class="ci">🍞</div><h3>Breads & Loaves</h3><p>White, brown, multigrain, and milk breads baked fresh daily.</p></div>
    <div class="card"><div class="ci">🎂</div><h3>Birthday Cakes</h3><p>Freshly baked celebration cakes in various flavours and sizes.</p></div>
    <div class="card"><div class="ci">🥐</div><h3>Puffs & Pastries</h3><p>Veg and non-veg puffs, cream pastries, and patties.</p></div>
    <div class="card"><div class="ci">🍪</div><h3>Biscuits & Cookies</h3><p>Homemade biscuits and cookies in multiple varieties.</p></div>
    <div class="card"><div class="ci">🥧</div><h3>Rusks & Toasts</h3><p>Crispy rusks and milk toasts perfect with your morning chai.</p></div>
    <div class="card"><div class="ci">🍰</div><h3>Pastry Slices',</h3><p>Black forest, chocolate truffle, and fruit pastry slices.</p></div>
  </div>
</div></section>` +
  statsS([{n:10,l:'Years Baking'},{n:1000,l:'Regular Customers'},{n:30,l:'Daily Products'},{n:5,l:'Custom Cake Designs'}]) +
  testiS(
    {q:'RK Bakery is my daily morning stop. The bread is always fresh and soft, prices are reasonable, and the staff is friendly. Best neighbourhood bakery near Bhawrasla!', n:'Ramesh Kumar', s:'Daily Customer'},
    {q:'Got a birthday cake from RK Bakery and it was delicious! Great moist sponge, perfect sweetness, and delivered on time. Will definitely order again.', n:'Sunita Singh', s:'Birthday Cake Order'},
    {q:'Best puffs in the area! I buy the veg puffs every evening after work — they\'re always hot, crispy, and perfectly spiced. Consistent quality for years!', n:'Priya Sharma', s:'Regular Customer'}
  ) +
  `<section id="order" style="background:#141414"><div class="container">
  <h2 class="stitle">Place Your <span>Order</span></h2>
  <p class="ssub">Call or WhatsApp us for orders — custom cakes need 24 hours notice</p>
  <div class="cg">
    <form class="cf" onsubmit="event.preventDefault();alert('Order placed! We will confirm shortly.')">
      <input type="text" placeholder="Your Name" required>
      <input type="tel" placeholder="Phone Number" required>
      <select><option>Select Item</option><option>Breads</option><option>Birthday Cake</option><option>Pastries Box</option><option>Biscuits & Cookies</option><option>Rusks</option><option>Custom Cake</option></select>
      <textarea placeholder="Order details (quantity, flavour, date needed...)"></textarea>
      <button type="submit" class="btn" style="width:100%;cursor:pointer">Order Now</button>
    </form>
    <div>
      <div class="ci2">
        <div class="ci-it"><div class="ci-ic">📍</div><div><h4>Location</h4><p>Near Aurbindo Hospital, Bhawrasla, Indore</p></div></div>
        <div class="ci-it"><div class="ci-ic">📞</div><div><h4>Phone</h4><p><a href="tel:+918401977578">+91 84019 77578</a></p></div></div>
        <div class="ci-it"><div class="ci-ic">🕐</div><div><h4>Store Hours</h4><p>Open Daily: 7 AM – 9 PM</p></div></div>
      </div>
      <div class="mapbox"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013!2d75.88!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzE5LjIiTiA3NcKwNTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1" allowfullscreen loading="lazy"></iframe></div>
    </div>
  </div>
</div></section>` +
  footS('RK Bakery, Bhawrasla Indore', '+918401977578', '918401977578')
));

console.log('Real Estate & Bakery batch done!');
