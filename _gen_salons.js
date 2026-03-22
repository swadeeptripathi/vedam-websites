const fs = require('fs');
const path = require('path');
const b = 'C:\\Users\\tripa\\.openclaw\\workspace\\builds';

function write(slug, html) {
  fs.writeFileSync(path.join(b, slug, 'index.html'), html, 'utf8');
  console.log('✓ ' + slug + ' (' + html.length + ' chars)');
}

// Shared CSS + JS
const CSS = `:root{--a:#CC0000}*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;color:#e0e0e0;overflow-x:hidden;background:#0f0f0f}h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800}section{padding:80px 5%}.container{max-width:1200px;margin:0 auto}.stitle{font-size:clamp(1.8rem,4vw,2.8rem);text-align:center;margin-bottom:.5rem;text-transform:uppercase}.stitle span{color:var(--a)}.ssub{text-align:center;color:#888;max-width:600px;margin:0 auto 3rem;font-size:.92rem;line-height:1.7}nav{position:fixed;top:0;width:100%;z-index:1000;padding:14px 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(10,10,10,.88);backdrop-filter:blur(20px);border-bottom:2px solid var(--a)}.logo-txt{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.3rem;font-weight:800;color:#fff}.logo-txt em{color:var(--a);font-style:normal}.nav-links{display:flex;gap:24px;list-style:none}.nav-links a{color:#bbb;text-decoration:none;font-size:.87rem;font-weight:600;transition:.3s}.nav-links a:hover{color:var(--a)}.hbg{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none}.hbg span{width:24px;height:2px;background:#fff}.mm{display:none;position:fixed;inset:0;background:rgba(10,10,10,.98);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:28px}.mm.open{display:flex}.mm a{color:#fff;font-size:1.3rem;text-decoration:none;font-family:'Plus Jakarta Sans',sans-serif}.mm-close{position:absolute;top:20px;right:20px;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer}.hero{height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden}.h-bg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.16}.h-ov{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.88))}.h-cnt{position:relative;z-index:2;padding:0 20px}.h-badge{display:inline-block;background:var(--a);color:#fff;font-size:.72rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:6px 16px;border-radius:20px;margin-bottom:20px}.h-cnt h1{font-size:clamp(2.6rem,7vw,5rem);color:#fff;line-height:1.1;margin-bottom:18px;text-transform:uppercase}.h-cnt h1 em{color:var(--a);font-style:normal;display:block}.h-cnt p{color:#bbb;font-size:1rem;max-width:520px;margin:0 auto 28px;line-height:1.7}.btn{display:inline-block;padding:13px 32px;background:var(--a);color:#fff;text-decoration:none;font-weight:700;border-radius:4px;font-size:.88rem;transition:.3s;text-transform:uppercase;letter-spacing:1px;font-family:'Plus Jakarta Sans',sans-serif;border:2px solid var(--a)}.btn:hover{background:transparent;color:var(--a)}.btn-s{background:transparent;border-color:#fff;color:#fff;margin-left:12px}.btn-s:hover{background:#fff;color:#000}.ag{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}.ai{position:relative;border-radius:12px;overflow:hidden}.ai img{width:100%;height:420px;object-fit:cover;border-radius:12px}.a-badge{position:absolute;bottom:20px;right:20px;background:var(--a);color:#fff;padding:12px 16px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:.95rem;border-radius:8px;text-align:center;line-height:1.3}.at h2{font-size:2rem;margin-bottom:14px;text-transform:uppercase}.at h2 em{color:var(--a);font-style:normal}.at p{color:#aaa;line-height:1.85;margin-bottom:14px}.feats{display:flex;flex-wrap:wrap;gap:9px;margin-top:16px}.feat{display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:5px;padding:6px 12px;font-size:.8rem}.feat strong{color:var(--a)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:18px}.card{background:#1e1e1e;border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:26px;transition:.3s}.card:hover{border-color:var(--a);transform:translateY(-4px)}.ci{font-size:2rem;margin-bottom:12px}.card h3{font-size:.98rem;text-transform:uppercase;margin-bottom:7px}.card p{color:#777;font-size:.85rem;line-height:1.6}.ss{background:#141414;border-top:3px solid var(--a);border-bottom:3px solid var(--a)}.sg{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;text-align:center}.sg h3{font-size:clamp(1.9rem,4vw,3rem);color:var(--a)}.sg p{color:#666;font-size:.75rem;letter-spacing:2px;text-transform:uppercase;margin-top:6px}.pg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.pc{background:#1e1e1e;border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:32px 22px;text-align:center;position:relative;transition:.3s}.pc:hover,.pc.pop{border-color:var(--a);transform:translateY(-5px)}.pc.pop::before{content:'POPULAR';position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--a);color:#fff;padding:4px 15px;border-radius:20px;font-size:.68rem;font-weight:700;letter-spacing:1px}.pc h3{font-size:1.05rem;text-transform:uppercase;margin-bottom:8px}.amt{font-size:2.6rem;color:var(--a);font-family:'Plus Jakarta Sans',sans-serif;font-weight:800}.per{color:#666;font-size:.83rem;margin-bottom:16px}.pc ul{list-style:none;margin-bottom:20px;text-align:left}.pc li{padding:6px 0;color:#aaa;font-size:.83rem;border-bottom:1px solid rgba(255,255,255,.04)}.pc li::before{content:'✓ ';color:var(--a);font-weight:700}.ts{background:rgba(255,255,255,.01)}.tsl{max-width:660px;margin:0 auto;overflow:hidden}.ttr{display:flex;transition:transform .5s}.ti{min-width:100%;padding:34px;text-align:center}.ti blockquote{font-size:.98rem;line-height:1.9;color:#bbb;font-style:italic;margin-bottom:14px}.ti cite{color:var(--a);font-style:normal;font-weight:700}.ti small{display:block;color:#555;font-size:.78rem;margin-top:3px}.tnav{display:flex;justify-content:center;gap:8px;margin-top:12px}.td{width:9px;height:9px;border-radius:50%;border:none;background:rgba(255,255,255,.2);cursor:pointer;transition:.3s}.td.on{background:var(--a)}.cg{display:grid;grid-template-columns:1fr 1fr;gap:38px}.cf input,.cf textarea,.cf select{width:100%;padding:12px 14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:7px;color:#fff;font-family:'Inter',sans-serif;font-size:.87rem;margin-bottom:11px;transition:.3s}.cf input:focus,.cf textarea:focus,.cf select:focus{outline:none;border-color:var(--a)}.cf textarea{height:100px;resize:vertical}.ci2{display:flex;flex-direction:column;gap:14px}.ci-it{display:flex;gap:12px;align-items:flex-start}.ci-ic{width:40px;height:40px;background:var(--a);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:.95rem;flex-shrink:0}.ci-it h4{font-size:.84rem;margin-bottom:2px}.ci-it p,.ci-it a{color:#777;font-size:.81rem;text-decoration:none}.mapbox{margin-top:14px;border-radius:10px;overflow:hidden;height:195px}.mapbox iframe{width:100%;height:100%;border:0}footer{background:#080808;padding:28px 5%;text-align:center;border-top:1px solid rgba(255,255,255,.05)}.soc{display:flex;gap:11px;justify-content:center;margin-bottom:11px}.soc a{width:35px;height:35px;border-radius:50%;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:#bbb;text-decoration:none;transition:.3s;font-size:.9rem}.soc a:hover{border-color:var(--a);color:var(--a)}footer p{color:#3a3a3a;font-size:.76rem}.wa{position:fixed;bottom:24px;right:24px;width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:998;box-shadow:0 4px 18px rgba(37,211,102,.4);transition:transform .3s;text-decoration:none;font-size:1.5rem}.wa:hover{transform:scale(1.1)}@media(max-width:1024px){.pg{grid-template-columns:1fr}.sg{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.nav-links{display:none}.hbg{display:flex}.ag,.cg{grid-template-columns:1fr}}`;

const JS = `<script>
var tI=0;var tT=document.querySelector('.ttr');var tD=document.querySelectorAll('.td');
function goT(n){tI=n;if(tT)tT.style.transform='translateX(-'+(n*100)+'%)';tD.forEach(function(d,i){d.classList.toggle('on',i===n)});}
setInterval(function(){goT((tI+1)%3);},4500);
var cs=document.querySelectorAll('.ctr');var ob=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target,t=+el.dataset.t,s=performance.now();function run(now){var p=Math.min((now-s)/2000,1);el.textContent=Math.floor(p*t).toLocaleString()+'+';if(p<1)requestAnimationFrame(run);}requestAnimationFrame(run);ob.unobserve(el);}});},{threshold:0.5});
cs.forEach(function(c){ob.observe(c);});
<\/script>`;

function siteHead(title, accent, bg) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>${CSS.replace(':root{--a:#CC0000}', ':root{--a:'+accent+'}')}body{background:${bg||'#0f0f0f'}}</style>
</head>
<body>`;
}

function nav(logo, links) {
  return `<nav><div class="logo-txt">${logo}</div>
<ul class="nav-links">${links.map(l=>`<li><a href="#${l[0]}">${l[1]}</a></li>`).join('')}</ul>
<button class="hbg" onclick="document.querySelector('.mm').classList.add('open')"><span></span><span></span><span></span></button>
</nav>
<div class="mm"><button class="mm-close" onclick="this.parentElement.classList.remove('open')">✕</button>
${links.map(l=>`<a href="#${l[0]}" onclick="this.parentElement.classList.remove('open')">${l[1]}</a>`).join('\n')}</div>`;
}

function hero(badge, h1, h1em, p, phone, wa) {
  return `<section class="hero">
<div class="h-bg" style="background-image:url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=70')"></div>
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

function about(img, badgeText, h2, h2em, p1, p2, feats) {
  return `<section id="about" style="background:#141414">
<div class="container ag">
  <div class="ai"><img src="${img}" alt="${h2em}"><div class="a-badge">${badgeText}</div></div>
  <div class="at">
    <h2>${h2} <em>${h2em}</em></h2>
    <p>${p1}</p><p>${p2}</p>
    <div class="feats">${feats.map(f=>`<div class="feat"><strong>✓</strong> ${f}</div>`).join('')}</div>
  </div>
</div>
</section>`;
}

function services(title, cards) {
  return `<section id="services">
<div class="container">
  <h2 class="stitle">${title.split(' ')[0]} <span>${title.split(' ').slice(1).join(' ')}</span></h2>
  <p class="ssub">Comprehensive services tailored to your needs</p>
  <div class="grid">${cards.map(c=>`<div class="card"><div class="ci">${c.icon}</div><h3>${c.name}</h3><p>${c.desc}</p></div>`).join('')}</div>
</div>
</section>`;
}

function stats(s1,s2,s3,s4) {
  return `<section class="ss">
<div class="container"><div class="sg">
  <div><h3 class="ctr" data-t="${s1.n}">0</h3><p>${s1.l}</p></div>
  <div><h3 class="ctr" data-t="${s2.n}">0</h3><p>${s2.l}</p></div>
  <div><h3 class="ctr" data-t="${s3.n}">0</h3><p>${s3.l}</p></div>
  <div><h3 class="ctr" data-t="${s4.n}">0</h3><p>${s4.l}</p></div>
</div></div>
</section>`;
}

function pricing(p1,p2,p3) {
  function pc(p,pop) {
    return `<div class="pc${pop?' pop':''}"><h3>${p.name}</h3><div class="amt">${p.price}</div><div class="per">${p.period}</div><ul>${p.feats.map(f=>`<li>${f}</li>`).join('')}</ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Join Now</a></div>`;
  }
  return `<section id="pricing" style="background:#141414">
<div class="container">
  <h2 class="stitle">Membership <span>Plans</span></h2>
  <p class="ssub">Transparent pricing with no hidden charges</p>
  <div class="pg">${pc(p1,false)}${pc(p2,true)}${pc(p3,false)}</div>
</div>
</section>`;
}

function testimonials(t1,t2,t3) {
  return `<section class="ts">
<div class="container">
  <h2 class="stitle">What Clients <span>Say</span></h2>
  <div class="tsl"><div class="ttr">
    <div class="ti"><blockquote>"${t1.q}"</blockquote><cite>${t1.n}</cite><small>${t1.sub||''}</small></div>
    <div class="ti"><blockquote>"${t2.q}"</blockquote><cite>${t2.n}</cite><small>${t2.sub||''}</small></div>
    <div class="ti"><blockquote>"${t3.q}"</blockquote><cite>${t3.n}</cite><small>${t3.sub||''}</small></div>
  </div>
  <div class="tnav"><button class="td on" onclick="goT(0)"></button><button class="td" onclick="goT(1)"></button><button class="td" onclick="goT(2)"></button></div>
  </div>
</div>
</section>`;
}

function contact(opts, items) {
  return `<section id="contact" style="background:#141414">
<div class="container">
  <h2 class="stitle">Get In <span>Touch</span></h2>
  <p class="ssub">Reach out today and we'll get back to you shortly</p>
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
</div>
</section>`;
}

function footer(name, phone, wa) {
  return `<footer>
<div class="soc"><a href="tel:${phone}">📞</a><a href="https://wa.me/${wa}">💬</a></div>
<p>© 2026 ${name}. All rights reserved. | Powered by <strong style="color:var(--a)">VEDAM</strong></p>
</footer>
<a href="https://wa.me/${wa}" class="wa">💬</a>`;
}

// =====================================================
// SALON / BEAUTY SITES
// =====================================================

const salonImg = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80';
const salonImg2 = 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80';

// SAPNA BEAUTY PARLOUR
write('sapna-beauty-parlour-vedam',
  siteHead("Sapna Beauty Parlour — Premium Salon in Indore", '#d4547a', '#14080d') +
  nav('<em>Sapna</em> Beauty', [['about','About'],['services','Services'],['pricing','Pricing'],['contact','Contact']]) +
  `<section class="hero">
<div class="h-bg" style="background-image:url('${salonImg}')"></div>
<div class="h-ov"></div>
<div class="h-cnt">
  <div class="h-badge">Premium Beauty Parlour — Indore</div>
  <h1>BEAUTY IS AN<em>ART FORM</em></h1>
  <p>Sapna Beauty Parlour — where skilled hands and premium products transform your look and lift your confidence.</p>
  <a href="#contact" class="btn">Book Appointment</a>
  <a href="tel:+917979789767" class="btn btn-s">Call Now</a>
</div>
</section>` +
  about(salonImg2, 'Your Beauty<br>Destination', 'About', 'Sapna Beauty Parlour',
    'Sapna Beauty Parlour in Indore is a trusted name in beauty and grooming. With years of experience and a passion for bringing out the best in every client, our expert stylists deliver premium services at every visit.',
    'Whether it\'s a quick haircut, a bridal makeover, or a relaxing spa treatment — Sapna Beauty Parlour is your go-to destination for all things beauty in Indore.',
    ['Skilled Stylists','Premium Products','Bridal Packages','Hygiene First']
  ) +
  services('Our Services', [
    {icon:'💇‍♀️', name:'Hair Styling', desc:'Cuts, blow-dry, straightening, and hair spa treatments.'},
    {icon:'💄', name:'Makeup', desc:'Party, bridal, and photoshoot makeup by expert artists.'},
    {icon:'✨', name:'Skin Care', desc:'Facial, cleanup, bleach, and skin brightening treatments.'},
    {icon:'💅', name:'Nail Art', desc:'Manicure, pedicure, and nail extensions with gel polish.'},
    {icon:'🧖‍♀️', name:'Waxing & Threading', desc:'Full body waxing and eyebrow threading by experts.'},
    {icon:'👰', name:'Bridal Package', desc:'Complete bridal makeup and hair for your perfect day.'}
  ]) +
  stats({n:1000,l:'Happy Clients'},{n:8,l:'Years Experience'},{n:6,l:'Expert Stylists'},{n:50,l:'Services Offered'}) +
  pricing(
    {name:'Basic',price:'₹499',period:'per visit',feats:['Haircut & Styling','Basic Facial','Eyebrow Threading','Nail Polish']},
    {name:'Premium',price:'₹999',period:'per visit',feats:['All Basic Services','Hair Color (single)','Deep Conditioning','Manicure & Pedicure','Skin Cleanup']},
    {name:'Bridal',price:'₹4,999',period:'complete package',feats:['Bridal Makeup','Bridal Hair Do','Pre-Bridal Package','Mehendi Application','Free Consultation']}
  ) +
  testimonials(
    {q:'Sapna Beauty Parlour is my go-to place in Indore. The stylists are super skilled and always understand exactly what I want. Highly recommended!', n:'Priya Verma', sub:'Regular Client'},
    {q:'Got my bridal makeup done here and I looked absolutely stunning. The entire team was professional, patient, and the results were beyond my expectations!', n:'Nisha Sharma', sub:'Bridal Client'},
    {q:'Best facial I have ever had! The products they use are premium and my skin glowed for weeks. Very clean and hygienic salon. Will keep coming back!', n:'Anamika Singh', sub:'Regular Client'}
  ) +
  contact(['Select Service','Hair Styling','Facial & Skin Care','Makeup','Nail Art','Bridal Package','Waxing & Threading'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+917979789767">+91 79797 89767</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 9 AM – 8 PM | Sun: 10 AM – 6 PM'}]
  ) +
  footer('Sapna Beauty Parlour, Indore', '+917979789767', '917979789767') +
  JS + '</body></html>'
);

// FASHIONISTA BEAUTY SALON
write('fashionista-beauty-salon-vedam',
  siteHead("Fashionista Beauty Salon — Indore | Style & Glamour", '#e8a0c0', '#1a0a12') +
  nav('<em>Fashionista</em> Salon', [['about','About'],['services','Services'],['pricing','Pricing'],['contact','Contact']]) +
  `<section class="hero">
<div class="h-bg" style="background-image:url('${salonImg}')"></div>
<div class="h-ov"></div>
<div class="h-cnt">
  <div class="h-badge">Fashionista Beauty Salon — Indore</div>
  <h1>STYLE MEETS<em>PERFECTION</em></h1>
  <p>Fashionista Beauty Salon at Address 59, Indore. Trendsetting styles, expert artistry, and a luxurious experience every time.</p>
  <a href="#contact" class="btn">Book Now</a>
  <a href="tel:+918959633244" class="btn btn-s">Call Us</a>
</div>
</section>` +
  about(salonImg2, 'Fashion<br>Forward', 'About', 'Fashionista',
    'Fashionista Beauty Salon is Indore\'s destination for cutting-edge beauty trends. Our stylists are trained in the latest global techniques to ensure you walk out looking and feeling your absolute best.',
    'From sleek haircuts to bold colors, bridal masterpieces to everyday glam — Fashionista has got you covered with skill, creativity, and warmth.',
    ['Trendy Styles','Global Techniques','Expert Artists','Premium Products']
  ) +
  services('Our Services', [
    {icon:'✂️', name:'Hair Cuts & Style', desc:'Precision cuts for every face shape and lifestyle.'},
    {icon:'🎨', name:'Hair Coloring', desc:'Highlights, balayage, ombre, and full color transformations.'},
    {icon:'👰', name:'Bridal Makeup', desc:'Flawless bridal looks that last all day and night.'},
    {icon:'✨', name:'Skin Treatments', desc:'Facials, cleanup, and brightening for radiant skin.'},
    {icon:'💅', name:'Nail Studio', desc:'Nail art, gel extensions, and nail care services.'},
    {icon:'💆', name:'Relaxation Spa', desc:'De-stress with our head massage and body treatments.'}
  ]) +
  stats({n:2000,l:'Happy Clients'},{n:6,l:'Years of Style'},{n:8,l:'Skilled Stylists'},{n:40,l:'Services Available'}) +
  pricing(
    {name:'Glow',price:'₹599',period:'per visit',feats:['Haircut','Basic Facial','Eyebrow Threading','Nail Polish']},
    {name:'Glam',price:'₹1,299',period:'per visit',feats:['Haircut & Color','Advanced Facial','Body Waxing','Manicure & Pedicure','Blow Dry']},
    {name:'Bridal',price:'₹5,999',period:'complete package',feats:['Bridal Makeup & Hair','Pre-Bridal Sessions','Mehendi','Dupatta Draping','Photoshoot Ready Look']}
  ) +
  testimonials(
    {q:'Fashionista is hands down the best salon in Indore. I got a balayage done here and it\'s exactly what I wanted. The staff is friendly and super skilled!', n:'Ritu Gupta', sub:'Style Enthusiast'},
    {q:'My bridal experience at Fashionista was absolutely magical. The makeup artist understood my vision perfectly and I looked stunning. Everyone complimented my look!', n:'Deepika Malhotra', sub:'Bride'},
    {q:'Been a regular customer for 3 years and the quality never disappoints. Great hair colour, great service, and the salon is always spotlessly clean. Love it!', n:'Meena Tiwari', sub:'Regular Client'}
  ) +
  contact(['Select Service','Haircut & Styling','Hair Coloring','Bridal Package','Skin Treatment','Nail Services','Spa Treatment'],
    [{icon:'📍',label:'Address',val:'Address 59, Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+918959633244">+91 89596 33244</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 9 AM – 9 PM | Sun: 10 AM – 7 PM'}]
  ) +
  footer('Fashionista Beauty Salon, Indore', '+918959633244', '918959633244') +
  JS + '</body></html>'
);

// JABALPUR SALON INDORE
write('jabalpur-salon-indore-vedam',
  siteHead("JabalpurSalon — Expert Beauty & Hair Studio in Indore", '#d4547a', '#0f0a0d') +
  nav('<em>Jabalpur</em>Salon', [['about','About'],['services','Services'],['pricing','Pricing'],['contact','Contact']]) +
  `<section class="hero">
<div class="h-bg" style="background-image:url('${salonImg}')"></div>
<div class="h-ov"></div>
<div class="h-cnt">
  <div class="h-badge">Now Serving Indore</div>
  <h1>EXCELLENCE IN<em>BEAUTY</em></h1>
  <p>JabalpurSalon brings its celebrated hair and beauty expertise to Indore. Known for precision, passion, and premium results.</p>
  <a href="#contact" class="btn">Book Appointment</a>
  <a href="tel:+919009555050" class="btn btn-s">Call Now</a>
</div>
</section>` +
  about(salonImg2, 'Premium<br>Studio', 'About', 'JabalpurSalon',
    'JabalpurSalon has built a reputation for outstanding hair and beauty services. Now serving clients in Indore, we bring the same level of excellence — precision cuts, expert coloring, and transformative treatments.',
    'Our stylists undergo regular training to stay ahead of the latest trends and techniques. Whether you\'re looking for a subtle refresh or a bold transformation, we\'re here to make it happen.',
    ['Precision Cuts','Expert Coloring','Premium Treatments','Trained Stylists']
  ) +
  services('Our Services', [
    {icon:'✂️', name:'Precision Haircuts', desc:'Expert cuts for men, women, and children.'},
    {icon:'🎨', name:'Hair Coloring', desc:'Global colors, highlights, balayage & Keratin treatment.'},
    {icon:'💆', name:'Hair Spa', desc:'Deep conditioning treatments for damaged or dull hair.'},
    {icon:'💄', name:'Makeup', desc:'Professional makeup for parties, events, and bridal.'},
    {icon:'🧖', name:'Skin Treatments', desc:'Facials and cleanup for healthy, glowing skin.'},
    {icon:'💅', name:'Nail Care', desc:'Manicure, pedicure, and nail art services.'}
  ]) +
  stats({n:3000,l:'Clients Served'},{n:10,l:'Years Experience'},{n:10,l:'Stylists'},{n:45,l:'Services'}) +
  pricing(
    {name:'Basic',price:'₹449',period:'per visit',feats:['Haircut','Blow Dry','Eyebrow Threading','Basic Facial']},
    {name:'Standard',price:'₹999',period:'per visit',feats:['Hair Color (root)','Deep Conditioning','Manicure','Skin Cleanup','Waxing']},
    {name:'Premium',price:'₹2,499',period:'per visit',feats:['Global Hair Color','Keratin Treatment','Advanced Facial','Body Polishing','Full Waxing']}
  ) +
  testimonials(
    {q:'JabalpurSalon in Indore is exceptional. Got a balayage and it looks stunning. The stylist gave great advice and the result is exactly what I wanted!', n:'Kavya Joshi', sub:'Indore Client'},
    {q:'Best haircut I have ever had! The stylist took time to understand my face shape and gave me a cut that transformed my look. Will definitely return!', n:'Ananya Dubey', sub:'Regular Client'},
    {q:'The hair spa treatment here is amazing. My hair feels so smooth and healthy after the session. The products used are clearly premium. Highly recommended!', n:'Sunita Patel', sub:'Happy Client'}
  ) +
  contact(['Select Service','Haircut','Hair Coloring','Hair Spa','Makeup','Skin Treatment','Nail Care'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919009555050">+91 90095 55050</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 9 AM – 9 PM | Sun: 10 AM – 7 PM'}]
  ) +
  footer('JabalpurSalon, Indore', '+919009555050', '919009555050') +
  JS + '</body></html>'
);

// MIRAAYA MAKEUP STUDIO
write('miraaya-makeup-studio-vedam',
  siteHead("Miraaya Makeup Studio & Academy — Indore", '#d4af7a', '#0d0509') +
  nav('<em>Miraaya</em>', [['about','About'],['services','Services'],['academy','Academy'],['contact','Contact']]) +
  `<section class="hero">
<div class="h-bg" style="background-image:url('${salonImg}')"></div>
<div class="h-ov"></div>
<div class="h-cnt">
  <div class="h-badge">Makeup Studio & Academy — Indore</div>
  <h1>THE ART OF<em>TRANSFORMATION</em></h1>
  <p>Miraaya — where makeup meets mastery. Professional studio services and a world-class beauty academy in Indore.</p>
  <a href="#contact" class="btn">Book Session</a>
  <a href="tel:+918871608174" class="btn btn-s">Call Now</a>
</div>
</section>` +
  about(salonImg2, 'Studio &<br>Academy', 'About', 'Miraaya',
    'Miraaya Makeup Studio & Academy is Indore\'s premier destination for professional makeup artistry and beauty education. Whether you want to look stunning for an event or learn the craft yourself, we deliver excellence.',
    'Our lead artist brings years of industry experience working with brides, models, and celebrities. The Miraaya Academy offers professional courses that have launched the careers of countless makeup artists across MP.',
    ['Celebrity Artist','Bridal Specialist','Professional Courses','International Techniques']
  ) +
  services('Studio Services', [
    {icon:'👰', name:'Bridal Makeup', desc:'Flawless, long-lasting bridal looks for your perfect day.'},
    {icon:'🎭', name:'Party & Event', desc:'Stunning looks for parties, receptions, and special events.'},
    {icon:'📸', name:'Portfolio Shoots', desc:'Professional makeup for photo and video shoots.'},
    {icon:'💄', name:'HD Makeup', desc:'High-definition makeup for perfect skin on camera.'},
    {icon:'🌸', name:'Engagement Look', desc:'Beautiful engagement and pre-wedding shoot makeup.'},
    {icon:'✨', name:'Skin Prep', desc:'Pre-bridal skin treatments for radiant wedding day skin.'}
  ]) +
  `<section id="academy" style="background:#141414">
<div class="container">
  <h2 class="stitle">The Miraaya <span>Academy</span></h2>
  <p class="ssub">Professional makeup courses for aspiring artists</p>
  <div class="grid">
    <div class="card"><div class="ci">🎓</div><h3>Basic Makeup Course</h3><p>4-week foundational course covering day, night, and party looks.</p></div>
    <div class="card"><div class="ci">👰</div><h3>Bridal Specialist</h3><p>8-week intensive bridal makeup program with real bride practice.</p></div>
    <div class="card"><div class="ci">📸</div><h3>Editorial & Film</h3><p>Advanced course for fashion, editorial, and film/TV makeup.</p></div>
    <div class="card"><div class="ci">🏆</div><h3>Master Class</h3><p>1-day intensive workshops on specific techniques with celebrity artists.</p></div>
  </div>
</div>
</section>` +
  stats({n:500,l:'Brides Beautified'},{n:7,l:'Years Experience'},{n:300,l:'Artists Trained'},{n:50,l:'5-Star Reviews'}) +
  testimonials(
    {q:'Miraaya made me look absolutely breathtaking on my wedding day! The makeup lasted all 12 hours without any touch-ups. I got so many compliments. Thank you Miraaya!', n:'Priya Desai', sub:'Bride'},
    {q:'I completed the bridal makeup course at Miraaya Academy and it completely changed my career. I\'m now a full-time makeup artist earning well. Best investment ever!', n:'Khushi Sharma', sub:'Academy Graduate'},
    {q:'Got my engagement look done at Miraaya Studio and it was perfect. The artist understood exactly what I wanted and the result was stunning. Highly recommend!', n:'Riya Agarwal', sub:'Happy Client'}
  ) +
  contact(['Select','Bridal Makeup','Party Makeup','Portfolio Shoot','Academy Courses','Consultation'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+918871608174">+91 88716 08174</a>'},
     {icon:'📸',label:'Instagram',val:'<a href="https://instagram.com/miraaya_makeup_studio">@miraaya_makeup_studio</a>'},
     {icon:'🕐',label:'Hours',val:'By Appointment — Mon to Sun'}]
  ) +
  footer('Miraaya Makeup Studio & Academy, Indore', '+918871608174', '918871608174') +
  JS + '</body></html>'
);

// NAILASH BEAUTY STUDIO
write('nailash-beauty-studio-vedam',
  siteHead("Nailash Beauty Studio & Academy — Indore", '#ff6b9d', '#100a0d') +
  nav('<em>Nailash</em> Studio', [['about','About'],['services','Services'],['academy','Academy'],['contact','Contact']]) +
  `<section class="hero">
<div class="h-bg" style="background-image:url('${salonImg}')"></div>
<div class="h-ov"></div>
<div class="h-cnt">
  <div class="h-badge">Nail Art Studio & Academy — Indore</div>
  <h1>NAILS THAT<em>TELL YOUR STORY</em></h1>
  <p>Nailash Beauty Studio & Academy — Indore's premier destination for artistic nail designs, extensions, and professional nail art education.</p>
  <a href="#contact" class="btn">Book Now</a>
  <a href="tel:+918889944466" class="btn btn-s">Call Now</a>
</div>
</section>` +
  about('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80', 'Indore\'s<br>#1 Nail Studio', 'About', 'Nailash',
    'Nailash Beauty Studio & Academy in Indore is dedicated to the art of nail care and creativity. Our nail technicians are artists who bring your vision to life with precision and passion.',
    'From basic manicures to intricate nail art, gel extensions to 3D designs — Nailash does it all. Our academy also trains aspiring nail artists with internationally recognised certification courses.',
    ['Nail Art Specialists','Certified Technicians','Premium Products','Academy Courses']
  ) +
  services('Nail Services', [
    {icon:'💅', name:'Classic Manicure', desc:'Basic nail shaping, cuticle care, and polish application.'},
    {icon:'✨', name:'Gel Extensions', desc:'Long-lasting gel nail extensions in any length and shape.'},
    {icon:'🎨', name:'Nail Art', desc:'Custom nail art designs from minimalist to elaborate 3D art.'},
    {icon:'💎', name:'Ombre & Chrome', desc:'Trendy ombre fades and chrome powder nail finishes.'},
    {icon:'🌸', name:'Pedicure', desc:'Relaxing foot care with nail shaping and polish.'},
    {icon:'💆', name:'Nail Spa', desc:'Deep moisturising nail and hand spa treatments.'}
  ]) +
  `<section id="academy" style="background:#141414">
<div class="container">
  <h2 class="stitle">Nailash <span>Academy</span></h2>
  <p class="ssub">Launch your nail art career with our professional courses</p>
  <div class="grid">
    <div class="card"><div class="ci">💅</div><h3>Basic Nail Art</h3><p>Foundational course: shapes, polish, basics of nail art.</p></div>
    <div class="card"><div class="ci">✨</div><h3>Gel Extension</h3><p>Complete gel extension and maintenance certification.</p></div>
    <div class="card"><div class="ci">🎨</div><h3>Advanced Nail Art</h3><p>3D nail art, ombre, chrome, and stamping techniques.</p></div>
    <div class="card"><div class="ci">🎓</div><h3>Master Certification</h3><p>Comprehensive certification for professional nail technicians.</p></div>
  </div>
</div>
</section>` +
  stats({n:5000,l:'Nails Done'},{n:6,l:'Years Experience'},{n:200,l:'Artists Trained'},{n:50,l:'Nail Art Designs'}) +
  testimonials(
    {q:'Nailash is the only nail studio I trust in Indore! The nail art is always on point, the gel lasts for weeks, and the entire experience is so relaxing. Love it!', n:'Shruti Jain', sub:'Regular Client'},
    {q:'Got my bridal nails done at Nailash and they were absolutely gorgeous! The intricate design lasted through all 3 days of my wedding functions. Amazing work!', n:'Preeti Verma', sub:'Bride'},
    {q:'Completed the gel extension course at Nailash Academy and started my own nail studio within 3 months! The training was thorough and the certification is well-recognised.', n:'Neha Sharma', sub:'Academy Graduate'}
  ) +
  contact(['Select Service','Manicure','Pedicure','Gel Extensions','Nail Art','Nail Spa','Academy Enrollment'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+918889944466">+91 88899 44466</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 10 AM – 8 PM | Sun: 10 AM – 6 PM'}]
  ) +
  footer('Nailash Beauty Studio & Academy, Indore', '+918889944466', '918889944466') +
  JS + '</body></html>'
);

// SOBO NAIL SALON
write('sobo-nail-salon-vedam',
  siteHead("The Sobo Nail Salon — Best Nail Salon in Indore", '#a855f7', '#0d0810') +
  nav('<em>Sobo</em> Nails', [['about','About'],['services','Services'],['pricing','Pricing'],['contact','Contact']]) +
  `<section class="hero">
<div class="h-bg" style="background-image:url('${salonImg}')"></div>
<div class="h-ov"></div>
<div class="h-cnt">
  <div class="h-badge">Best Nail Salon in Indore</div>
  <h1>WHERE NAILS<em>BECOME ART</em></h1>
  <p>The Sobo Nail Salon — Indore's most loved nail studio for stunning nail art, gel manicures, and luxurious nail care.</p>
  <a href="#contact" class="btn">Book Appointment</a>
  <a href="tel:+919136692758" class="btn btn-s">Call Now</a>
</div>
</section>` +
  about('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80', 'Indore\'s<br>Nail Heaven', 'About', 'Sobo Nail Salon',
    'The Sobo Nail Salon has earned a stellar reputation as Indore\'s premier nail destination. Known for creativity, quality, and a relaxing environment, Sobo is the first choice for nail care enthusiasts.',
    'Our team of certified nail technicians combines artistry with technique to deliver stunning results every time. Using only premium brands and hygienic practices, we ensure a safe and delightful experience.',
    ['Premium Products','Hygienic Practices','Creative Artists','Wide Range of Designs']
  ) +
  services('Our Nail Services', [
    {icon:'💅', name:'Gel Manicure', desc:'Long-lasting gel polish that stays chip-free for weeks.'},
    {icon:'✨', name:'Nail Extensions', desc:'Acrylic and gel extensions for length and style.'},
    {icon:'🎨', name:'Custom Nail Art', desc:'From minimalist to elaborate — any design you desire.'},
    {icon:'💎', name:'Luxury Manicure', desc:'Spa-level manicure with massage, mask, and premium polish.'},
    {icon:'🌸', name:'Spa Pedicure', desc:'Relaxing pedicure with scrub, massage, and nail care.'},
    {icon:'🏆', name:'Bridal Nails', desc:'Custom bridal nail sets with coordination to your outfit.'}
  ]) +
  stats({n:8000,l:'Nails Done'},{n:5,l:'Years in Business'},{n:8,l:'Nail Technicians'},{n:100,l:'Nail Art Designs'}) +
  pricing(
    {name:'Refresh',price:'₹399',period:'per session',feats:['Classic Manicure','Nail Shaping','Polish Application','Cuticle Care']},
    {name:'Glam',price:'₹899',period:'per session',feats:['Gel Manicure','Custom Nail Art','Cuticle Treatment','Nail Strengthener','Hand Massage']},
    {name:'Luxury',price:'₹1,799',period:'per session',feats:['Gel Extensions','3D Nail Art','Spa Pedicure','Hand & Foot Spa','Take-home Care Kit']}
  ) +
  testimonials(
    {q:'Sobo Nail Salon is absolute perfection. My gel nails have been on for 4 weeks and still look freshly done! The nail art is stunning and the staff is so friendly.', n:'Aisha Khan', sub:'Regular Client'},
    {q:'Got my bridal nails done at Sobo and they were everything I dreamed of. The intricate floral design matched my lehenga perfectly. Every guest asked about my nails!', n:'Tanvi Srivastava', sub:'Bride'},
    {q:'Best nail salon in Indore without a doubt. The ambience is beautiful, the hygiene is top-notch, and the nail artists are incredibly talented. Always leave happy!', n:'Riya Gupta', sub:'Regular Client'}
  ) +
  contact(['Select Service','Gel Manicure','Nail Extensions','Nail Art','Spa Pedicure','Bridal Nails','Classic Manicure'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919136692758">+91 91366 92758</a>'},
     {icon:'🌐',label:'Website',val:'<a href="https://thesobonailsalon.com">thesobonailsalon.com</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 10 AM – 8 PM | Sun: 11 AM – 6 PM'}]
  ) +
  footer('The Sobo Nail Salon, Indore', '+919136692758', '919136692758') +
  JS + '</body></html>'
);

console.log('Salon batch done!');
