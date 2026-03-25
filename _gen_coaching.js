const fs = require('fs');
const path = require('path');
const b = process.env.VEDAM_OUTPUT || path.resolve(__dirname);

function write(slug, html) {
  fs.writeFileSync(path.join(b, slug, 'index.html'), html, 'utf8');
  console.log('✓ ' + slug + ' (' + html.length + ' chars)');
}

const CSS = `:root{--a:#CC0000}*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;color:#e0e0e0;overflow-x:hidden;background:#0f0f0f}h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800}section{padding:80px 5%}.container{max-width:1200px;margin:0 auto}.stitle{font-size:clamp(1.8rem,4vw,2.8rem);text-align:center;margin-bottom:.5rem;text-transform:uppercase}.stitle span{color:var(--a)}.ssub{text-align:center;color:#888;max-width:600px;margin:0 auto 3rem;font-size:.92rem;line-height:1.7}nav{position:fixed;top:0;width:100%;z-index:1000;padding:14px 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(10,10,10,.88);backdrop-filter:blur(20px);border-bottom:2px solid var(--a)}.logo-txt{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.3rem;font-weight:800;color:#fff}.logo-txt em{color:var(--a);font-style:normal}.nav-links{display:flex;gap:24px;list-style:none}.nav-links a{color:#bbb;text-decoration:none;font-size:.87rem;font-weight:600;transition:.3s}.nav-links a:hover{color:var(--a)}.hbg{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none}.hbg span{width:24px;height:2px;background:#fff}.mm{display:none;position:fixed;inset:0;background:rgba(10,10,10,.98);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:28px}.mm.open{display:flex}.mm a{color:#fff;font-size:1.3rem;text-decoration:none;font-family:'Plus Jakarta Sans',sans-serif}.mm-close{position:absolute;top:20px;right:20px;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer}.hero{height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden}.h-bg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.16}.h-ov{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.88))}.h-cnt{position:relative;z-index:2;padding:0 20px}.h-badge{display:inline-block;background:var(--a);color:#fff;font-size:.72rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:6px 16px;border-radius:20px;margin-bottom:20px}.h-cnt h1{font-size:clamp(2.6rem,7vw,5rem);color:#fff;line-height:1.1;margin-bottom:18px;text-transform:uppercase}.h-cnt h1 em{color:var(--a);font-style:normal;display:block}.h-cnt p{color:#bbb;font-size:1rem;max-width:520px;margin:0 auto 28px;line-height:1.7}.btn{display:inline-block;padding:13px 32px;background:var(--a);color:#fff;text-decoration:none;font-weight:700;border-radius:4px;font-size:.88rem;transition:.3s;text-transform:uppercase;letter-spacing:1px;font-family:'Plus Jakarta Sans',sans-serif;border:2px solid var(--a)}.btn:hover{background:transparent;color:var(--a)}.btn-s{background:transparent;border-color:#fff;color:#fff;margin-left:12px}.btn-s:hover{background:#fff;color:#000}.ag{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}.ai{position:relative;border-radius:12px;overflow:hidden}.ai img{width:100%;height:420px;object-fit:cover;border-radius:12px}.a-badge{position:absolute;bottom:20px;right:20px;background:var(--a);color:#fff;padding:12px 16px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:.95rem;border-radius:8px;text-align:center;line-height:1.3}.at h2{font-size:2rem;margin-bottom:14px;text-transform:uppercase}.at h2 em{color:var(--a);font-style:normal}.at p{color:#aaa;line-height:1.85;margin-bottom:14px}.feats{display:flex;flex-wrap:wrap;gap:9px;margin-top:16px}.feat{display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:5px;padding:6px 12px;font-size:.8rem}.feat strong{color:var(--a)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:18px}.card{background:#1e1e1e;border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:26px;transition:.3s}.card:hover{border-color:var(--a);transform:translateY(-4px)}.ci{font-size:2rem;margin-bottom:12px}.card h3{font-size:.98rem;text-transform:uppercase;margin-bottom:7px}.card p{color:#777;font-size:.85rem;line-height:1.6}.ss{background:#141414;border-top:3px solid var(--a);border-bottom:3px solid var(--a)}.sg{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;text-align:center}.sg h3{font-size:clamp(1.9rem,4vw,3rem);color:var(--a)}.sg p{color:#666;font-size:.75rem;letter-spacing:2px;text-transform:uppercase;margin-top:6px}.pg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.pc{background:#1e1e1e;border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:32px 22px;text-align:center;position:relative;transition:.3s}.pc:hover,.pc.pop{border-color:var(--a);transform:translateY(-5px)}.pc.pop::before{content:'POPULAR';position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--a);color:#fff;padding:4px 15px;border-radius:20px;font-size:.68rem;font-weight:700;letter-spacing:1px}.pc h3{font-size:1.05rem;text-transform:uppercase;margin-bottom:8px}.amt{font-size:2.6rem;color:var(--a);font-family:'Plus Jakarta Sans',sans-serif;font-weight:800}.per{color:#666;font-size:.83rem;margin-bottom:16px}.pc ul{list-style:none;margin-bottom:20px;text-align:left}.pc li{padding:6px 0;color:#aaa;font-size:.83rem;border-bottom:1px solid rgba(255,255,255,.04)}.pc li::before{content:'✓ ';color:var(--a);font-weight:700}.ts{background:rgba(255,255,255,.01)}.tsl{max-width:660px;margin:0 auto;overflow:hidden}.ttr{display:flex;transition:transform .5s}.ti{min-width:100%;padding:34px;text-align:center}.ti blockquote{font-size:.98rem;line-height:1.9;color:#bbb;font-style:italic;margin-bottom:14px}.ti cite{color:var(--a);font-style:normal;font-weight:700}.ti small{display:block;color:#555;font-size:.78rem;margin-top:3px}.tnav{display:flex;justify-content:center;gap:8px;margin-top:12px}.td{width:9px;height:9px;border-radius:50%;border:none;background:rgba(255,255,255,.2);cursor:pointer;transition:.3s}.td.on{background:var(--a)}.cg{display:grid;grid-template-columns:1fr 1fr;gap:38px}.cf input,.cf textarea,.cf select{width:100%;padding:12px 14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:7px;color:#fff;font-family:'Inter',sans-serif;font-size:.87rem;margin-bottom:11px;transition:.3s}.cf input:focus,.cf textarea:focus,.cf select:focus{outline:none;border-color:var(--a)}.cf textarea{height:100px;resize:vertical}.ci2{display:flex;flex-direction:column;gap:14px}.ci-it{display:flex;gap:12px;align-items:flex-start}.ci-ic{width:40px;height:40px;background:var(--a);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.95rem;flex-shrink:0}.ci-it h4{font-size:.84rem;margin-bottom:2px}.ci-it p,.ci-it a{color:#777;font-size:.81rem;text-decoration:none}.mapbox{margin-top:14px;border-radius:10px;overflow:hidden;height:195px}.mapbox iframe{width:100%;height:100%;border:0}footer{background:#080808;padding:28px 5%;text-align:center;border-top:1px solid rgba(255,255,255,.05)}.soc{display:flex;gap:11px;justify-content:center;margin-bottom:11px}.soc a{width:35px;height:35px;border-radius:50%;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:#bbb;text-decoration:none;transition:.3s;font-size:.9rem}.soc a:hover{border-color:var(--a);color:var(--a)}footer p{color:#3a3a3a;font-size:.76rem}.wa{position:fixed;bottom:24px;right:24px;width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:998;box-shadow:0 4px 18px rgba(37,211,102,.4);transition:transform .3s;text-decoration:none;font-size:1.5rem}.wa:hover{transform:scale(1.1)}@media(max-width:1024px){.pg{grid-template-columns:1fr}.sg{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.nav-links{display:none}.hbg{display:flex}.ag,.cg{grid-template-columns:1fr}}`;

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
<style>${CSS.replace(':root{--a:#CC0000}', ':root{--a:'+accent+'}').replace('background:#0f0f0f}', 'background:'+(bg||'#0f0f0f')+'}')}
</style>
</head>
<body>${body}${JS}</body>
</html>`;
}

function nav(logo, links) {
  return `<nav><div class="logo-txt">${logo}</div>
<ul class="nav-links">${links.map(l=>`<li><a href="#${l[0]}">${l[1]}</a></li>`).join('')}</ul>
<button class="hbg" onclick="document.querySelector('.mm').classList.add('open')"><span></span><span></span><span></span></button>
</nav>
<div class="mm"><button class="mm-close" onclick="this.parentElement.classList.remove('open')">✕</button>
${links.map(l=>`<a href="#${l[0]}" onclick="this.parentElement.classList.remove('open')">${l[1]}</a>`).join('\n')}</div>`;
}

function hero(badge, h1, h1em, p, phone) {
  const bgImgs = {
    coaching:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=70',
    dental:'https://images.unsplash.com/photo-1588776814546-1ffdd307b4ac?w=1400&q=70',
    photo:'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1400&q=70',
    realestate:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=70',
    food:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=70',
    bakery:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1400&q=70',
  };
  const bg = Object.keys(bgImgs).find(k => badge.toLowerCase().includes(k)) ? bgImgs[Object.keys(bgImgs).find(k => badge.toLowerCase().includes(k))] : 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=70';
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

function about2(img, badgeTxt, h2, h2em, p1, p2, feats) {
  return `<section id="about" style="background:#141414">
<div class="container ag">
  <div class="ai"><img src="${img}" alt="${h2em}"><div class="a-badge">${badgeTxt}</div></div>
  <div class="at"><h2>${h2} <em>${h2em}</em></h2><p>${p1}</p><p>${p2}</p>
    <div class="feats">${feats.map(f=>`<div class="feat"><strong>✓</strong> ${f}</div>`).join('')}</div>
  </div>
</div>
</section>`;
}

function svc(title, cards) {
  return `<section id="services"><div class="container">
  <h2 class="stitle">${title} <span>Services</span></h2>
  <p class="ssub">Comprehensive services for all your needs</p>
  <div class="grid">${cards.map(c=>`<div class="card"><div class="ci">${c.i}</div><h3>${c.n}</h3><p>${c.d}</p></div>`).join('')}</div>
</div></section>`;
}

function statsBlock(s1,s2,s3,s4) {
  return `<section class="ss"><div class="container"><div class="sg">
  <div><h3 class="ctr" data-t="${s1.n}">0</h3><p>${s1.l}</p></div>
  <div><h3 class="ctr" data-t="${s2.n}">0</h3><p>${s2.l}</p></div>
  <div><h3 class="ctr" data-t="${s3.n}">0</h3><p>${s3.l}</p></div>
  <div><h3 class="ctr" data-t="${s4.n}">0</h3><p>${s4.l}</p></div>
</div></div></section>`;
}

function testi(t1,t2,t3) {
  return `<section class="ts"><div class="container">
  <h2 class="stitle">What Clients <span>Say</span></h2>
  <div class="tsl"><div class="ttr">
    <div class="ti"><blockquote>"${t1.q}"</blockquote><cite>${t1.n}</cite><small>${t1.s||''}</small></div>
    <div class="ti"><blockquote>"${t2.q}"</blockquote><cite>${t2.n}</cite><small>${t2.s||''}</small></div>
    <div class="ti"><blockquote>"${t3.q}"</blockquote><cite>${t3.n}</cite><small>${t3.s||''}</small></div>
  </div>
  <div class="tnav"><button class="td on" onclick="goT(0)"></button><button class="td" onclick="goT(1)"></button><button class="td" onclick="goT(2)"></button></div>
  </div>
</div></section>`;
}

function contactBlock(opts, items) {
  return `<section id="contact" style="background:#141414"><div class="container">
  <h2 class="stitle">Get In <span>Touch</span></h2>
  <p class="ssub">Reach out today — we respond within hours</p>
  <div class="cg">
    <form class="cf" onsubmit="event.preventDefault();alert('Thank you! We will contact you soon.')">
      <input type="text" placeholder="Your Name" required>
      <input type="tel" placeholder="Phone Number" required>
      <input type="email" placeholder="Email Address">
      <select>${opts.map(o=>`<option>${o}</option>`).join('')}</select>
      <textarea placeholder="Your message or query..."></textarea>
      <button type="submit" class="btn" style="width:100%;cursor:pointer">Send Message</button>
    </form>
    <div>
      <div class="ci2">${items.map(i=>`<div class="ci-it"><div class="ci-ic">${i.icon}</div><div><h4>${i.label}</h4><p>${i.val}</p></div></div>`).join('')}</div>
      <div class="mapbox"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013!2d75.88!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzE5LjIiTiA3NcKwNTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1" allowfullscreen loading="lazy"></iframe></div>
    </div>
  </div>
</div></section>`;
}

function foot(name, phone, wa) {
  return `<footer>
<div class="soc"><a href="tel:${phone}">📞</a><a href="https://wa.me/${wa}">💬</a></div>
<p>© 2026 ${name}. All rights reserved. | Powered by <strong style="color:var(--a)">VEDAM</strong></p>
</footer>
<a href="https://wa.me/${wa}" class="wa">💬</a>`;
}

// ==================================================
// RESTAURANT
// ==================================================

write('vaishnavi-tiffin-service-vedam', page(
  "Vaishnavi Tiffin Service — Home-Cooked Food Delivery Indore",
  '#f97316', '#0f0a06',
  nav('<em>Vaishnavi</em> Tiffin', [['about','About'],['menu','Menu'],['contact','Contact']]) +
  hero('Food Delivery — Indore', 'HOME-COOKED', 'FOOD DELIVERED DAILY', 'Fresh, nutritious, home-style tiffin delivered to your doorstep every day. No compromise on taste, hygiene, or health.', '+916261560850') +
  about2('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&q=80', 'Fresh<br>Daily', 'About', 'Vaishnavi Tiffin',
    'Vaishnavi Tiffin Service brings the warmth of home-cooked food to working professionals, students, and families in Indore. Our meals are prepared fresh every day using quality ingredients and traditional recipes.',
    'We understand that eating healthy, nutritious meals is essential for a productive life. Our tiffins are cooked with love, packed hygienically, and delivered on time — just like home.',
    ['Fresh Daily','Hygienic Cooking','Timely Delivery','Customizable Menu']
  ) +
  `<section id="menu"><div class="container">
  <h2 class="stitle">Our <span>Menu</span></h2>
  <p class="ssub">Wholesome, balanced meals prepared fresh every day</p>
  <div class="grid">
    <div class="card"><div class="ci">🍱</div><h3>Basic Tiffin</h3><p>2 Rotis, 1 Sabzi, Dal, Rice, Pickle & Papad.</p></div>
    <div class="card"><div class="ci">🥘</div><h3>Standard Tiffin</h3><p>3 Rotis, 2 Sabzis, Dal, Rice, Salad, Pickle & Sweet.</p></div>
    <div class="card"><div class="ci">🍛</div><h3>Premium Tiffin</h3><p>4 Rotis, 2 Sabzis, Dal, Rice, Salad, Curd, Pickle & Dessert.</p></div>
    <div class="card"><div class="ci">🥗</div><h3>Diet Tiffin</h3><p>Low-calorie, protein-rich meals designed for health-conscious customers.</p></div>
    <div class="card"><div class="ci">🎉</div><h3>Party Catering</h3><p>Bulk orders for office events, parties, and gatherings.</p></div>
    <div class="card"><div class="ci">🕐</div><h3>Monthly Subscription</h3><p>Subscribe for monthly delivery at discounted rates with priority delivery.</p></div>
  </div>
</div></section>` +
  statsBlock({n:500,l:'Daily Meals Served'},{n:5,l:'Years of Service'},{n:1000,l:'Happy Customers'},{n:30,l:'Delivery Locations'}) +
  testi(
    {q:'Vaishnavi Tiffin has been my lifesaver since I moved to Indore. The food tastes exactly like home. Fresh, hot, and always on time. Highly recommended!', n:'Rohit Sharma', s:'Working Professional'},
    {q:'As a student living away from home, Vaishnavi Tiffin gives me the nutrition I need. The meals are balanced, tasty, and very affordable. Love the monthly plan!', n:'Ananya Joshi', s:'Student'},
    {q:'We order for our entire office of 20 people. The food quality is consistently excellent and they always accommodate our special requests. Great service!', n:'Vikram Singh', s:'Corporate Client'}
  ) +
  contactBlock(['Select Plan','Basic Tiffin','Standard Tiffin','Premium Tiffin','Diet Tiffin','Party Catering','Monthly Subscription'],
    [{icon:'📍',label:'Service Area',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+916261560850">+91 62615 60850</a>'},
     {icon:'📸',label:'Instagram',val:'<a href="https://instagram.com">@vaishnavi_tiffin</a>'},
     {icon:'🕐',label:'Delivery Time',val:'Lunch: 12 PM – 2 PM | Dinner: 7 PM – 9 PM'}]
  ) +
  foot('Vaishnavi Tiffin Service, Indore', '+916261560850', '916261560850')
));

// ==================================================
// COACHING INSTITUTES
// ==================================================

const coachImg = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80';

// RIBOSOME INSTITUTE
write('ribosome-institute-vedam', page(
  "Ribosome Institute Indore — NEET & Science Coaching",
  '#10b981', '#080f0c',
  nav('<em>Ribosome</em> Institute', [['about','About'],['courses','Courses'],['results','Results'],['contact','Contact']]) +
  hero('NEET Coaching — Indore', 'WHERE SCIENCE', 'MEETS SUCCESS', 'Ribosome Institute — Indore\'s premier coaching for NEET, Biology, Chemistry, and science subjects. Expert faculty. Proven results.', '+919329911449') +
  about2(coachImg, 'Top NEET<br>Institute', 'About', 'Ribosome Institute',
    'Ribosome Institute is Indore\'s trusted destination for NEET and science coaching. Our team of expert educators combines deep subject knowledge with innovative teaching methods to help students crack competitive exams.',
    'With a strong track record of NEET selections and a curriculum built around NCERT fundamentals and advanced problem-solving, Ribosome equips every student with the tools they need to succeed.',
    ['Expert NEET Faculty','NCERT-Focused','Regular Mock Tests','Personalised Attention']
  ) +
  `<section id="courses"><div class="container">
  <h2 class="stitle">Our <span>Courses</span></h2>
  <p class="ssub">Comprehensive programs designed for NEET and competitive exam success</p>
  <div class="grid">
    <div class="card"><div class="ci">🔬</div><h3>NEET Full Course</h3><p>Complete Biology, Physics & Chemistry for NEET with daily classes and tests.</p></div>
    <div class="card"><div class="ci">🧬</div><h3>Biology Special</h3><p>In-depth Biology coaching for NEET — NCERT + advanced level preparation.</p></div>
    <div class="card"><div class="ci">⚗️</div><h3>Chemistry Coaching</h3><p>Physical, Organic & Inorganic Chemistry with concept-building approach.</p></div>
    <div class="card"><div class="ci">📚</div><h3>Crash Course</h3><p>Intensive 3-month revision program for NEET repeaters and droppers.</p></div>
    <div class="card"><div class="ci">📝</div><h3>Test Series</h3><p>Chapter-wise and full-length NEET mock tests with detailed analysis.</p></div>
    <div class="card"><div class="ci">🎯</div><h3>Doubt Sessions</h3><p>Regular doubt-clearing sessions with dedicated faculty for every student.</p></div>
  </div>
</div></section>` +
  statsBlock({n:500,l:'Students Selected'},{n:8,l:'Years Experience'},{n:15,l:'Expert Faculty'},{n:95,l:'Success Rate %'}) +
  testi(
    {q:'Ribosome Institute transformed my NEET preparation. The Biology teacher explains concepts with such clarity that even the toughest topics feel easy. Cleared NEET on first attempt!', n:'Aryan Patel', s:'NEET Qualifier 2023'},
    {q:'The test series at Ribosome is exactly like the actual NEET exam. After every test, the faculty gives personalized feedback. This approach made all the difference!', n:'Sneha Gupta', s:'NEET Qualifier 2022'},
    {q:'I was a dropper and Ribosome\'s crash course changed everything. The focused preparation and constant support from faculty helped me improve my score by 150 marks!', n:'Rahul Singh', s:'NEET Qualifier 2024'}
  ) +
  contactBlock(['Select Course','NEET Full Course','Biology Special','Chemistry Coaching','Crash Course','Test Series','General Inquiry'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919329911449">+91 93299 11449</a>'},
     {icon:'🕐',label:'Batch Timings',val:'Morning: 7 AM | Afternoon: 1 PM | Evening: 5 PM'}]
  ) +
  foot('Ribosome Institute, Indore', '+919329911449', '919329911449')
));

// ALLEN INDORE
write('allen-indore-vedam', page(
  "Allen Career Institute Indore — IIT JEE & NEET Coaching",
  '#1d4ed8', '#070a10',
  nav('<em>Allen</em> Indore', [['about','About'],['courses','Courses'],['results','Results'],['contact','Contact']]) +
  hero('IIT JEE & NEET — Indore', 'ALLEN CAREER', 'INSTITUTE INDORE', 'Allen — India\'s No. 1 coaching institute for IIT-JEE, NEET, and foundation courses. Expert faculty, proven methodology, extraordinary results.', '+916364010086') +
  about2(coachImg, 'India\'s<br>#1 Institute', 'About', 'Allen Career Institute',
    'Allen Career Institute is India\'s most trusted coaching institute with over 30 years of excellence. The Indore centre brings Allen\'s world-renowned teaching methodology and expert faculty to the heart of Madhya Pradesh.',
    'With a track record of thousands of IIT and NEET selections every year, Allen Indore provides comprehensive preparation for JEE Main, JEE Advanced, NEET, and school foundation programs for Classes 6-12.',
    ['30+ Years Legacy','Expert IIT/NEET Faculty','Daily Practice Problems','All-India Test Series']
  ) +
  `<section id="courses"><div class="container">
  <h2 class="stitle">Our <span>Programs</span></h2>
  <p class="ssub">From foundation to advanced — complete preparation for every competitive exam</p>
  <div class="grid">
    <div class="card"><div class="ci">⚛️</div><h3>JEE Main & Advanced</h3><p>Comprehensive coaching for IIT JEE with Allen's proven classroom program.</p></div>
    <div class="card"><div class="ci">🔬</div><h3>NEET UG</h3><p>Expert NEET preparation covering Physics, Chemistry, and Biology.</p></div>
    <div class="card"><div class="ci">📐</div><h3>Foundation (6-10)</h3><p>Early preparation for Olympiads, NTSE, and competitive exams.</p></div>
    <div class="card"><div class="ci">📚</div><h3>School Integrated</h3><p>Board + competitive exam preparation in an integrated format.</p></div>
    <div class="card"><div class="ci">📝</div><h3>Allen Test Series</h3><p>All-India mock tests with rank prediction and performance analysis.</p></div>
    <div class="card"><div class="ci">💻</div><h3>Distance Learning</h3><p>Allen's digital courses for students who prefer flexible learning.</p></div>
  </div>
</div></section>` +
  statsBlock({n:30,l:'Years of Excellence'},{n:100000,l:'Selections Per Year'},{n:100,l:'Expert Faculty'},{n:99,l:'Selection Rate %'}) +
  testi(
    {q:'Allen Indore is on par with the Kota centre. The quality of faculty, study material, and tests is exceptional. Cleared JEE Advanced with AIR 1240. Forever grateful!', n:'Nikhil Sharma', s:'JEE Advanced 2023'},
    {q:'The NEET coaching at Allen Indore is top-notch. Biology teacher explains diagrams brilliantly and the test series helped me identify my weak areas. Got 650/720 in NEET!', n:'Pooja Tiwari', s:'NEET 2023'},
    {q:'Joined Allen\'s foundation program in Class 8 and it built such a strong base that competitive exam prep felt natural. Cleared Olympiad and later JEE with great rank!', n:'Arjun Mehta', s:'JEE Main 2024'}
  ) +
  contactBlock(['Select Program','JEE Main & Advanced','NEET UG','Foundation 6-10','School Integrated','Test Series','General Inquiry'],
    [{icon:'📍',label:'Address',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+916364010086">+91 63640 10086</a>'},
     {icon:'📧',label:'Email',val:'indore@allen.in'},
     {icon:'🕐',label:'Office Hours',val:'Mon-Sat: 8 AM – 7 PM'}]
  ) +
  foot('Allen Career Institute, Indore', '+916364010086', '916364010086')
));

// CMC INDORE
write('cmc-indore-vedam', page(
  "CMC Indore — Expert Coaching for JEE & NEET",
  '#7c3aed', '#08070f',
  nav('<em>CMC</em> Indore', [['about','About'],['courses','Courses'],['results','Results'],['contact','Contact']]) +
  hero('JEE & NEET Coaching', 'CMC INDORE', 'COACHING EXCELLENCE', 'CMC Indore — expert coaching for JEE Main, JEE Advanced, and NEET. Small batches, personalised attention, proven results.', '+919993887962') +
  about2(coachImg, 'Indore\'s<br>Best Coaching', 'About', 'CMC Indore',
    'CMC Indore has established itself as a trusted coaching institute for engineering and medical entrance exams. Our pedagogy focuses on building strong fundamentals and developing exam-ready problem-solving skills.',
    'With experienced faculty and a structured curriculum, CMC Indore maintains small batch sizes to ensure every student gets the attention they deserve. Our students consistently achieve top ranks in JEE and NEET.',
    ['Small Batch Sizes','Experienced Faculty','Daily Assignments','Personalised Guidance']
  ) +
  svc('Expert', [
    {i:'⚛️',n:'JEE Preparation',d:'Comprehensive JEE Main & Advanced coaching with daily assignments.'},
    {i:'🔬',n:'NEET Coaching',d:'Expert NEET coaching covering all three subjects in depth.'},
    {i:'📝',n:'Regular Tests',d:'Weekly chapter tests and monthly full-length mock exams.'},
    {i:'💬',n:'Doubt Clearing',d:'Daily doubt-clearing sessions with subject experts.'},
    {i:'📚',n:'Study Material',d:'CMC\'s proprietary study material aligned with latest syllabus.'},
    {i:'👨‍🏫',n:'Mentorship',d:'One-on-one mentorship for career guidance and exam strategy.'}
  ]) +
  statsBlock({n:1000,l:'Students Selected'},{n:12,l:'Years Experience'},{n:20,l:'Expert Faculty'},{n:30,l:'Batch Size (Max)'}) +
  testi(
    {q:'CMC Indore is the best coaching institute I could have chosen. Small batches meant teachers actually know your name and your weaknesses. Cleared JEE with great rank!', n:'Karan Joshi', s:'JEE Advanced 2023'},
    {q:'The personalised attention at CMC made all the difference. My doubts were addressed immediately and the study material is really comprehensive. Got into AIIMS!', n:'Riya Mehta', s:'NEET 2023 | AIIMS'},
    {q:'CMC\'s approach of building concepts from basics is brilliant. By the time we reached advanced topics, we had such a strong foundation that everything clicked perfectly.', n:'Aditya Singh', s:'JEE Main 2024'}
  ) +
  contactBlock(['Select Course','JEE Main','JEE Advanced','NEET UG','Integrated Program','Crash Course','General Inquiry'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919993887962">+91 99938 87962</a>'},
     {icon:'🌐',label:'Website',val:'<a href="https://cmcindore.com">cmcindore.com</a>'},
     {icon:'🕐',label:'Office Hours',val:'Mon-Sat: 8 AM – 7 PM'}]
  ) +
  foot('CMC Indore', '+919993887962', '919993887962')
));

// AAKASH INDORE 1
write('aakash-indore-1-vedam', page(
  "Aakash Institute Indore — NEET & JEE Coaching | LIG Square",
  '#dc2626', '#0f0808',
  nav('<em>Aakash</em> Institute', [['about','About'],['courses','Courses'],['results','Results'],['contact','Contact']]) +
  hero('IIT JEE & NEET Coaching', 'AAKASH INSTITUTE', 'INDORE', 'Aakash Institute Indore — India\'s most trusted coaching brand for JEE and NEET. Expert faculty, comprehensive material, exceptional results since 1988.', '+918800810308') +
  about2(coachImg, 'India\'s<br>Most Trusted', 'About', 'Aakash Institute',
    'Aakash Institute has been India\'s number one coaching institute for medical and engineering entrance exams for over 35 years. The Indore centre brings Aakash\'s proven teaching methodology and nationally recognised faculty to your city.',
    'From NEET and JEE coaching to Olympiads and foundation programs, Aakash Indore offers comprehensive preparation with regular assessments, personalized study plans, and a track record of exceptional selections.',
    ['35+ Years Legacy','Nationally Certified Faculty','Aakash iACST Scholarship','All-India Mock Tests']
  ) +
  svc('Aakash', [
    {i:'🏥',n:'NEET UG',d:'Expert Medical entrance coaching covering Physics, Chemistry & Biology.'},
    {i:'⚛️',n:'IIT JEE',d:'JEE Main & Advanced coaching with Aakash\'s proven methodology.'},
    {i:'🏅',n:'Olympiad Prep',d:'NSO, IMO, and international Olympiad preparation programs.'},
    {i:'📐',n:'Foundation',d:'Early-start programs for Classes 8, 9, and 10 students.'},
    {i:'📝',n:'Aakash iACST',d:'Merit scholarship tests with upto 90% fee waiver for eligible students.'},
    {i:'💻',n:'Digital Coaching',d:'Aakash digital courses and live online classes available.'}
  ]) +
  statsBlock({n:35,l:'Years of Excellence'},{n:250000,l:'Yearly Selections'},{n:200,l:'Expert Faculty'},{n:500,l:'Study Centres'}) +
  testi(
    {q:'Aakash Indore has world-class faculty. The way they teach Organic Chemistry makes it so intuitive. Got 680 in NEET and made it to a top government medical college!', n:'Divya Agarwal', s:'NEET 2023'},
    {q:'The Aakash study material is the best in the market. Combined with regular tests and faculty support, it gave me everything I needed to crack JEE Advanced. Highly recommend!', n:'Akshat Sharma', s:'JEE Advanced 2023'},
    {q:'Joined Aakash in Class 11 and the two-year program was incredibly well-structured. The NEET mock tests helped me understand exactly where I stood nationally. Cleared NEET!', n:'Meenakshi Singh', s:'NEET 2024'}
  ) +
  contactBlock(['Select Program','NEET UG','JEE Main','JEE Advanced','Foundation','Olympiad','iACST Scholarship'],
    [{icon:'📍',label:'Address',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+918800810308">+91 88008 10308</a>'},
     {icon:'📧',label:'Email',val:'indore@aesl.in'},
     {icon:'🕐',label:'Office Hours',val:'Mon-Sat: 8 AM – 7 PM'}]
  ) +
  foot('Aakash Institute, Indore', '+918800810308', '918800810308')
));

// AAKASH VIJAYNAGAR
write('aakash-vijaynagar-vedam', page(
  "Aakash Institute Vijaynagar Indore — JEE & NEET Coaching",
  '#dc2626', '#0f0808',
  nav('<em>Aakash</em> Vijaynagar', [['about','About'],['courses','Courses'],['results','Results'],['contact','Contact']]) +
  hero('NEET & JEE — Vijaynagar', 'AAKASH INSTITUTE', 'VIJAYNAGAR INDORE', 'Aakash Institute Vijaynagar — serving the Vijaynagar area of Indore with expert NEET and JEE coaching and a proven track record.', '+918800013061') +
  about2(coachImg, 'Vijaynagar\'s<br>Best', 'About', 'Aakash Vijaynagar',
    'The Aakash Institute Vijaynagar centre serves students in the Vijaynagar, Palasia, and surrounding areas of Indore. With the same world-class faculty and study material as all Aakash centres, this branch is dedicated to helping local students achieve their dreams.',
    'Our Vijaynagar centre offers full NEET and JEE programs, foundation courses for younger students, and the Aakash iACST scholarship test for merit-based fee concessions.',
    ['World-Class Faculty','Aakash Study Material','Regular Mock Tests','iACST Scholarships']
  ) +
  svc('Expert', [
    {i:'🏥',n:'NEET Coaching',d:'Complete NEET preparation with Physics, Chemistry & Biology.'},
    {i:'⚛️',n:'JEE Coaching',d:'JEE Main and Advanced coaching with expert faculty.'},
    {i:'📐',n:'Foundation',d:'Competitive foundation programs for Classes 8-10.'},
    {i:'🏅',n:'Olympiad',d:'NSO, IMO, and science Olympiad preparation.'},
    {i:'📝',n:'Mock Test Series',d:'Regular chapter and full-length NEET/JEE mock tests.'},
    {i:'💬',n:'Doubt Sessions',d:'Scheduled doubt-clearing with subject teachers.'}
  ]) +
  statsBlock({n:35,l:'Years Legacy'},{n:250000,l:'Annual Selections'},{n:200,l:'Faculty'},{n:500,l:'Centres India'}) +
  testi(
    {q:'Aakash Vijaynagar is conveniently located and has the same quality as the main centre. Faculty is excellent and the study material is top-notch. Cleared NEET first attempt!', n:'Priya Soni', s:'NEET 2023'},
    {q:'Great coaching centre near Vijaynagar. The batch sizes are manageable and faculty always has time for doubts. My JEE rank improved by 10,000 positions in one year!', n:'Vivek Patel', s:'JEE Main 2024'},
    {q:'The Aakash Vijaynagar team is super supportive. They track your progress carefully and intervene when you need extra help. Best decision to join this centre.', n:'Ananya Singh', s:'NEET 2024'}
  ) +
  contactBlock(['Select Program','NEET UG','JEE Main','JEE Advanced','Foundation','iACST Scholarship','General Inquiry'],
    [{icon:'📍',label:'Address',val:'Vijaynagar, Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+918800013061">+91 88000 13061</a>'},
     {icon:'📧',label:'Email',val:'bmindore3@aesl.in'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 8 AM – 7 PM'}]
  ) +
  foot('Aakash Institute Vijaynagar, Indore', '+918800013061', '918800013061')
));

// AAKASH INDORE 2
write('aakash-indore-2-vedam', page(
  "Aakash Institute — IIT JEE & NEET Coaching Indore (Centre 2)",
  '#dc2626', '#0f0808',
  nav('<em>Aakash</em> Institute', [['about','About'],['courses','Courses'],['results','Results'],['contact','Contact']]) +
  hero('IIT JEE & NEET Coaching', 'AAKASH INSTITUTE', 'COACHING CENTRE 2', 'Aakash Institute Indore — expert JEE and NEET coaching. India\'s most trusted brand with 250,000+ annual selections. Join and transform your future.', '+918800013061') +
  about2(coachImg, '35 Years<br>of Excellence', 'About', 'Aakash Institute',
    'Aakash Institute\'s Indore centres continue to deliver world-class JEE and NEET coaching. With experienced faculty, structured curriculum, and regular assessments, Aakash ensures each student reaches their full potential.',
    'Whether you\'re aiming for AIIMS, IIT, or top engineering colleges, Aakash\'s time-tested approach and motivating environment give you the competitive edge you need to succeed.',
    ['Experienced Faculty','Best Study Material','Scholarship Tests','All-India Ranking']
  ) +
  svc('Aakash', [
    {i:'⚛️',n:'JEE Main',d:'Complete JEE Main preparation covering all chapters thoroughly.'},
    {i:'🏆',n:'JEE Advanced',d:'IIT JEE Advanced coaching with problem-solving workshops.'},
    {i:'🔬',n:'NEET UG',d:'Expert NEET preparation for medical entrance aspirants.'},
    {i:'📐',n:'Foundation',d:'Building competitive exam foundation from Class 8 onwards.'},
    {i:'🏅',n:'Merit Scholarships',d:'iACST scholarship test for upto 90% fee concession.'},
    {i:'📊',n:'Progress Tracking',d:'Regular parent-teacher meetings and performance reports.'}
  ]) +
  statsBlock({n:35,l:'Years of Excellence'},{n:250000,l:'Selections/Year'},{n:200,l:'Top Faculty'},{n:500,l:'India Centres'}) +
  testi(
    {q:'Aakash\'s study material is comprehensive and well-designed. The regular tests keep you in exam mode throughout the year. Finally cleared JEE after joining Aakash Indore!', n:'Kunal Mehta', s:'JEE Main 2024'},
    {q:'The NEET preparation at Aakash is outstanding. Biology NCERT is covered in extreme detail and the problem practice for Physics and Chemistry is very thorough. Got 670!', n:'Sneha Patel', s:'NEET 2023'},
    {q:'Aakash Indore\'s faculty are genuinely passionate about teaching. They explain even the hardest concepts with clarity. The mock tests prepared me perfectly for the real exam!', n:'Rahul Verma', s:'JEE Main 2023'}
  ) +
  contactBlock(['Select Course','NEET UG','JEE Main','JEE Advanced','Foundation','Merit Scholarship','General Inquiry'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+918800013061">+91 88000 13061</a>'},
     {icon:'📧',label:'Email',val:'bmindore3@aesl.in'},
     {icon:'🕐',label:'Office Hours',val:'Mon-Sat: 8 AM – 7 PM'}]
  ) +
  foot('Aakash Institute, Indore', '+918800013061', '918800013061')
));

// TATHAGAT IAS INDORE
write('tathagat-ias-indore-vedam', page(
  "Tathagat IAS Indore — Best UPSC Coaching in Indore",
  '#d97706', '#0f0b06',
  nav('<em>Tathagat</em> IAS', [['about','About'],['courses','Courses'],['results','Results'],['contact','Contact']]) +
  hero('UPSC Coaching — Indore', 'YOUR PATH TO', 'CIVIL SERVICES', 'Tathagat IAS Indore — expert UPSC coaching with experienced mentors, comprehensive study material, and a track record of IAS and IPS officers.', '+918448440231') +
  about2(coachImg, 'IAS Officers<br>Trained Here', 'About', 'Tathagat IAS',
    'Tathagat IAS Institute in Indore has been shaping the careers of future civil servants for years. Our experienced faculty includes retired IAS/IPS officers and subject specialists who provide mentorship beyond just academics.',
    'We offer comprehensive UPSC preparation covering Prelims, Mains, and Personality Test (Interview) with regular tests, essay writing practice, current affairs sessions, and one-on-one guidance for every student.',
    ['Ex-IAS/IPS Mentors','Comprehensive Material','Interview Training','Current Affairs Daily']
  ) +
  svc('UPSC', [
    {i:'🏛️',n:'UPSC Foundation',d:'Complete Prelims & Mains foundation course for fresh aspirants.'},
    {i:'📰',n:'Current Affairs',d:'Daily current affairs sessions with newspaper analysis.'},
    {i:'✍️',n:'Essay & Mains',d:'Dedicated essay writing and answer writing practice sessions.'},
    {i:'🎤',n:'Interview Coaching',d:'Personality test preparation with mock interviews by ex-IAS officers.'},
    {i:'📚',n:'Optional Subjects',d:'Coaching for popular UPSC optional subjects by subject experts.'},
    {i:'📊',n:'Test Series',d:'Regular Prelims and Mains mock tests with rank-based feedback.'}
  ]) +
  statsBlock({n:200,l:'Selections'},{n:10,l:'Years Experience'},{n:25,l:'Expert Faculty'},{n:1000,l:'Students Trained'}) +
  testi(
    {q:'Tathagat IAS transformed my UPSC preparation. The faculty guidance is exceptional and the current affairs coverage is thorough. Cleared Mains in my first attempt!', n:'Priya Sharma', s:'IAS 2022'},
    {q:'The interview coaching at Tathagat is outstanding. Mock interviews by ex-IAS officers gave me the confidence and feedback I needed. Made it to the final merit list!', n:'Rajesh Verma', s:'IPS 2023'},
    {q:'Excellent coaching for UPSC in Indore. The essay writing sessions helped me score 120+ in Essay paper. The faculty is always accessible and supportive. Highly recommend!', n:'Anjali Tiwari', s:'IAS Aspirant'}
  ) +
  contactBlock(['Select Program','Foundation Course','Current Affairs','Essay Writing','Interview Coaching','Optional Subject','General Inquiry'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+918448440231">+91 84484 40231</a>'},
     {icon:'🌐',label:'Resource',val:'<a href="https://testbook.com/upsc-cse-coaching/indore">View on Testbook</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 8 AM – 8 PM'}]
  ) +
  foot('Tathagat IAS Institute, Indore', '+918448440231', '918448440231')
));

// GATE ACADEMY INDORE
write('gate-academy-indore-vedam', page(
  "The GATE Academy Indore — GATE & ESE Engineering Coaching",
  '#0284c7', '#06090f',
  nav('<em>GATE</em> Academy', [['about','About'],['courses','Courses'],['results','Results'],['contact','Contact']]) +
  hero('GATE & ESE Coaching', 'THE GATE ACADEMY', 'INDORE', 'The GATE Academy Indore — India\'s leading GATE and ESE coaching institute. Expert faculty, comprehensive study material, and outstanding results.', '+919229867353') +
  about2(coachImg, 'GATE<br>Experts', 'About', 'The GATE Academy',
    'The GATE Academy is India\'s most trusted coaching institute for GATE (Graduate Aptitude Test in Engineering) and ESE (Engineering Services Examination). The Indore centre provides world-class preparation for engineering aspirants.',
    'With IIT-trained faculty, updated study material aligned with latest GATE patterns, and a structured test series, The GATE Academy Indore prepares students for GATE, ESE, PSU interviews, and M.Tech admissions.',
    ['IIT-Trained Faculty','Latest Study Material','GATE Pattern Tests','PSU Placement Support']
  ) +
  svc('GATE & ESE', [
    {i:'⚙️',n:'GATE Coaching',d:'Complete GATE preparation for all engineering branches.'},
    {i:'🔧',n:'ESE Coaching',d:'Engineering Services Examination preparation with expert guidance.'},
    {i:'🏭',n:'PSU Prep',d:'Technical preparation for BHEL, NTPC, ONGC, and other PSUs.'},
    {i:'📝',n:'GATE Mock Tests',d:'Full-length GATE mock tests with detailed performance analysis.'},
    {i:'💻',n:'Online Courses',d:'GATE online courses for students unable to attend classroom.'},
    {i:'🎓',n:'M.Tech Admissions',d:'Guidance for IIT/NIT M.Tech admission through GATE scores.'}
  ]) +
  statsBlock({n:50000,l:'Selections'},{n:15,l:'Years Experience'},{n:100,l:'Expert Faculty'},{n:200,l:'Study Centres'}) +
  testi(
    {q:'The GATE Academy Indore is exceptional. The teaching methodology is very systematic and the mock tests are extremely close to actual GATE difficulty. Got AIR 180 in GATE!', n:'Ankit Patel', s:'GATE 2023 AIR 180'},
    {q:'Best GATE coaching in Indore without a doubt. Faculty explains every concept from basics to advanced level. The study material covers every possible exam pattern.', n:'Priyanka Singh', s:'GATE 2022'},
    {q:'The GATE Academy\'s approach to problem-solving is unique. They teach you to think like an examiner which helps enormously. Cleared GATE and joined IIT for M.Tech!', n:'Rohan Gupta', s:'IIT M.Tech 2023'}
  ) +
  contactBlock(['Select Course','GATE CE','GATE ME','GATE EE','GATE ECE','GATE CS','ESE Coaching','PSU Preparation'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919229867353">+91 92298 67353</a>'},
     {icon:'🕐',label:'Office Hours',val:'Mon-Sat: 8 AM – 7 PM'}]
  ) +
  foot('The GATE Academy, Indore', '+919229867353', '919229867353')
));

console.log('Coaching & Restaurant batch done!');
