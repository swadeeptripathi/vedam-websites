const fs = require('fs');
const path = require('path');
const b = 'C:\\Users\\tripa\\.openclaw\\workspace\\builds';

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
<style>${CSS.replace(':root{--a:#CC0000}',':root{--a:'+accent+'}').replace('background:#0f0f0f}','background:'+(bg||'#0f0f0f')+'}')}
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

function hero(badge, h1, h1em, p, phone, bgImg) {
  return `<section class="hero">
<div class="h-bg" style="background-image:url('${bgImg||"https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=70"}')"></div>
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

function about2(img, badgeTxt, h2em, p1, p2, feats) {
  return `<section id="about" style="background:#141414">
<div class="container ag">
  <div class="ai"><img src="${img}" alt="${h2em}"><div class="a-badge">${badgeTxt}</div></div>
  <div class="at"><h2>About <em>${h2em}</em></h2><p>${p1}</p><p>${p2}</p>
    <div class="feats">${feats.map(f=>`<div class="feat"><strong>✓</strong> ${f}</div>`).join('')}</div>
  </div>
</div>
</section>`;
}

function svc(title, cards) {
  return `<section id="services"><div class="container">
  <h2 class="stitle">${title}</h2>
  <p class="ssub">Expert services delivered with care and precision</p>
  <div class="grid">${cards.map(c=>`<div class="card"><div class="ci">${c.i}</div><h3>${c.n}</h3><p>${c.d}</p></div>`).join('')}</div>
</div></section>`;
}

function stats(s1,s2,s3,s4) {
  return `<section class="ss"><div class="container"><div class="sg">
  <div><h3 class="ctr" data-t="${s1.n}">0</h3><p>${s1.l}</p></div>
  <div><h3 class="ctr" data-t="${s2.n}">0</h3><p>${s2.l}</p></div>
  <div><h3 class="ctr" data-t="${s3.n}">0</h3><p>${s3.l}</p></div>
  <div><h3 class="ctr" data-t="${s4.n}">0</h3><p>${s4.l}</p></div>
</div></div></section>`;
}

function testi(t1,t2,t3) {
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

function contact(opts, items) {
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

function foot(name, phone, wa) {
  return `<footer>
<div class="soc"><a href="tel:${phone}">📞</a><a href="https://wa.me/${wa}">💬</a></div>
<p>© 2026 ${name}. All rights reserved. | Powered by <strong style="color:var(--a)">VEDAM</strong></p>
</footer>
<a href="https://wa.me/${wa}" class="wa">💬</a>`;
}

const dentalImg = 'https://images.unsplash.com/photo-1588776814546-1ffdd307b4ac?w=700&q=80';
const dentalHero = 'https://images.unsplash.com/photo-1588776814546-1ffdd307b4ac?w=1400&q=70';

// SERAPHIC DENTAL
write('seraphic-dental-vedam', page(
  "Seraphic Dental Clinic — Most Hygienic Dental Clinic in Indore",
  '#06b6d4', '#060b0f',
  nav('<em>Seraphic</em> Dental', [['about','About'],['services','Services'],['pricing','Pricing'],['contact','Contact']]) +
  hero("Dental Clinic — Indore", "MOST HYGIENIC", "DENTAL CLINIC IN INDORE", "Seraphic Dental — where cutting-edge dentistry meets a warm, welcoming experience. Your smile is our passion.", '+919993384941', dentalHero) +
  about2(dentalImg, 'Indore\'s<br>Best Dental Clinic', 'Seraphic Dental',
    'Seraphic Dental is Indore\'s most hygienic and technologically advanced dental clinic. We combine the latest dental technology with a gentle, patient-centred approach to deliver outstanding outcomes.',
    'From routine cleanings to complex restorative work, our experienced dentists handle every case with precision, care, and the highest standards of sterilisation. Your smile makeover starts here.',
    ['Advanced Equipment','Strict Sterilisation','Painless Dentistry','All Treatments']
  ) +
  svc('Dental', [
    {i:'🦷',n:'Dental Implants',d:'Permanent tooth replacements that look and feel completely natural.'},
    {i:'✨',n:'Teeth Whitening',d:'Professional whitening for a brilliant, confident smile.'},
    {i:'😁',n:'Smile Makeover',d:'Complete smile transformations with veneers, bonding, and contouring.'},
    {i:'🔧',n:'Root Canal',d:'Painless root canal treatment with modern rotary instruments.'},
    {i:'👶',n:'Paediatric Dentistry',d:'Gentle, child-friendly dental care for kids of all ages.'},
    {i:'🦴',n:'Orthodontics',d:'Braces and Invisalign for a straighter, more beautiful smile.'}
  ]) +
  stats({n:5000,l:'Happy Patients'},{n:10,l:'Years Experience'},{n:5,l:'Expert Dentists'},{n:30,l:'Procedures Offered'}) +
  testi(
    {q:'Seraphic Dental is simply the best. I had severe dental anxiety but the team made me completely comfortable. My smile makeover results are absolutely stunning!', n:'Priya Agarwal', s:'Smile Makeover Patient'},
    {q:'The implant procedure at Seraphic was painless and the results look completely natural. The clinic is spotlessly clean and the dentist is extremely skilled.', n:'Rajesh Gupta', s:'Implant Patient'},
    {q:'Best dental clinic in Indore. The teeth whitening gave me 8 shades whiter teeth! The technology they use is state-of-the-art and the staff is wonderfully warm.', n:'Nisha Sharma', s:'Whitening Patient'}
  ) +
  contact(['Select Service','Dental Implants','Teeth Whitening','Smile Makeover','Root Canal','Braces/Invisalign','Routine Checkup'],
    [{icon:'📍',label:'Address',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919993384941">+91 99933 84941</a>'},
     {icon:'🌐',label:'Website',val:'<a href="https://seraphicdental.com">seraphicdental.com</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 9 AM – 8 PM | Sun: 10 AM – 4 PM'}]
  ) +
  foot('Seraphic Dental Clinic, Indore', '+919993384941', '919993384941')
));

// IOS DENTAL INDORE
write('ios-dental-indore-vedam', page(
  "IOS Dental Clinic Indore — IOS Certified Dental Centre",
  '#0891b2', '#060b0f',
  nav('<em>IOS</em> Dental', [['about','About'],['services','Services'],['contact','Contact']]) +
  hero("IOS Certified Dental — Indore", "IOS CERTIFIED", "DENTAL EXCELLENCE", "Indore's IOS Certified Dental Centre — where international standards meet compassionate care. Expert dentists, advanced technology.", 'entistgaganj@gmail.com'.includes('@') ? '+917618792440' : '+917618792440', dentalHero) +
  about2(dentalImg, 'IOS<br>Certified', 'IOS Dental Indore',
    'IOS Dental Indore is an internationally certified dental centre following IOS standards for quality, safety, and patient care. Our team of highly trained dentists is committed to delivering the best dental outcomes.',
    'With state-of-the-art equipment, strict sterilisation protocols, and a patient-first approach, IOS Dental Centre provides comprehensive dental services for patients of all ages across Indore.',
    ['IOS Certification','International Standards','Advanced Technology','All-Age Care']
  ) +
  svc('Expert Dental', [
    {i:'🦷',n:'Implantology',d:'Premium dental implants using latest techniques for permanent results.'},
    {i:'😁',n:'Cosmetic Dentistry',d:'Veneers, bonding, and contouring for a perfect smile.'},
    {i:'🔧',n:'Root Canal',d:'Pain-free RCT with modern rotary and laser-assisted technology.'},
    {i:'🦴',n:'Orthodontics',d:'Metal braces, ceramic braces, and clear Invisalign aligners.'},
    {i:'✨',n:'Laser Dentistry',d:'Advanced laser treatments for gum disease and soft tissue procedures.'},
    {i:'🩺',n:'General Dentistry',d:'Routine cleanings, fillings, extractions, and check-ups.'}
  ]) +
  stats({n:8000,l:'Patients Treated'},{n:12,l:'Years Experience'},{n:6,l:'Specialist Dentists'},{n:25,l:'Procedures Offered'}) +
  testi(
    {q:'IOS Dental Indore is exceptional. The international certification shows in everything — from hygiene to equipment to the quality of dental work. Highly recommend!', n:'Anil Verma', s:'Implant Patient'},
    {q:'Got Invisalign done at IOS Dental and the results are amazing. The dentist explained every step clearly and the treatment was completely comfortable. Love my new smile!', n:'Simran Kaur', s:'Invisalign Patient'},
    {q:'The laser gum treatment at IOS Dental was painless and healed remarkably fast. The clinic maintains the highest hygiene standards. Best dental experience I\'ve had!', n:'Mohan Singh', s:'Gum Treatment Patient'}
  ) +
  contact(['Select Service','Dental Implants','Invisalign','Root Canal','Cosmetic Dentistry','Laser Treatment','Routine Checkup'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+917618792440">+91 76187 92440</a>'},
     {icon:'📧',label:'Email',val:'entistgaganj@gmail.com'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 9 AM – 8 PM'}]
  ) +
  foot('IOS Dental Clinic, Indore', '+917618792440', '917618792440')
));

// DEZY DENTAL INDORE
write('dezy-dental-indore-vedam', page(
  "Dezy Dental Clinic Indore — Expert Dentists at Dezy",
  '#0284c7', '#060b0f',
  nav('<em>Dezy</em> Dental', [['about','About'],['services','Services'],['contact','Contact']]) +
  hero("Dental Clinic — Indore", "EXPERT DENTISTS", "AT DEZY INDORE", "Dezy Dental Clinic Indore — Masters of Dental Surgery delivering superior care. Book your appointment for a brighter, healthier smile.", '+917618792440', dentalHero) +
  about2(dentalImg, 'MDS<br>Specialists', 'Dezy Dental',
    'Dezy Dental Clinic in Indore brings together dentists who are Masters of Dental Surgery in their respective specialties. This means every treatment you receive is delivered by a true expert in that specific field.',
    'Whether it\'s implants, cosmetic dentistry, orthodontics, or general dental care — at Dezy, you\'re always in the hands of a specialist. Our commitment is to your oral health and beautiful smile.',
    ['MDS Specialist Dentists','Complete Dental Care','Latest Technology','Comfortable Experience']
  ) +
  svc('Specialist Dental', [
    {i:'🦷',n:'Dental Implants',d:'Implants placed by oral surgery specialists for lasting results.'},
    {i:'😁',n:'Smile Correction',d:'Expert smile design and cosmetic corrections by aesthetic specialists.'},
    {i:'🦴',n:'Orthodontic Braces',d:'Braces and aligners by orthodontic specialists for a perfect bite.'},
    {i:'🔬',n:'Periodontics',d:'Gum disease diagnosis and treatment by periodontology specialists.'},
    {i:'🔧',n:'Endodontics',d:'Root canal therapy by endodontic specialists for pain-free results.'},
    {i:'👶',n:'Pedodontics',d:'Child dental care by paediatric dentistry specialists.'}
  ]) +
  stats({n:10000,l:'Patients Treated'},{n:8,l:'MDS Specialists'},{n:15,l:'Years Experience'},{n:100,l:'5-Star Reviews'}) +
  testi(
    {q:'Dezy Dental is the only clinic where I feel every single procedure is handled by a genuine specialist. My implant healed perfectly and looks completely natural!', n:'Radhika Patel', s:'Implant Patient'},
    {q:'The braces at Dezy are done by an orthodontist who really knows what they\'re doing. My teeth are now perfectly aligned and the whole experience was quite comfortable.', n:'Sanjay Mehta', s:'Orthodontic Patient'},
    {q:'Finally found a dental clinic that has actual MDS doctors for every department. The quality of care at Dezy Indore is outstanding and the results speak for themselves!', n:'Anjali Singh', s:'Regular Patient'}
  ) +
  contact(['Select Specialist','Implantologist','Cosmetic Dentist','Orthodontist','Periodontist','Endodontist','Pedodontist'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+917618792440">+91 76187 92440</a>'},
     {icon:'🌐',label:'Website',val:'<a href="https://dezy.com/clinics/indore">dezy.com/clinics/indore</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 9 AM – 9 PM | Sun: 10 AM – 4 PM'}]
  ) +
  foot('Dezy Dental Clinic, Indore', '+917618792440', '917618792440')
));

// VIRANG DENTAL INDORE
write('virang-dental-indore-vedam', page(
  "Virang Dental Clinic & Implant Centre Indore",
  '#059669', '#060f0b',
  nav('<em>Virang</em> Dental', [['about','About'],['services','Services'],['contact','Contact']]) +
  hero("Dental & Implant Centre", "VIRANG DENTAL", "CLINIC INDORE", "Virang Dental Clinic and Implant Centre — determined to deliver the highest quality dental care. Excellence in every treatment, smile in every outcome.", '+919826030762', dentalHero) +
  about2(dentalImg, 'Implant<br>Specialists', 'Virang Dental',
    'Virang Dental Clinic and Implant Centre in Indore is a specialist dental facility with particular expertise in dental implantology. Our determination to deliver excellence drives us to continually invest in the latest technology and techniques.',
    'Founded by experienced dental surgeons, Virang Dental offers a full range of dental treatments — from complex implant cases to routine care — with the same commitment to quality and patient comfort.',
    ['Implant Specialists','Advanced Technology','Painless Procedures','Comprehensive Care']
  ) +
  svc('Dental & Implant', [
    {i:'🦷',n:'Dental Implants',d:'Specialist implant placement with highest success rates.'},
    {i:'🔁',n:'Full Mouth Rehab',d:'Complete oral reconstruction for multiple missing or damaged teeth.'},
    {i:'😁',n:'Smile Design',d:'Digital smile design for the perfect aesthetic outcome.'},
    {i:'🔧',n:'Root Canal',d:'Pain-free root canal therapy with modern equipment.'},
    {i:'✨',n:'Teeth Whitening',d:'Professional whitening for dramatically brighter teeth.'},
    {i:'🦴',n:'Bone Grafting',d:'Bone augmentation for implant placement where bone is insufficient.'}
  ]) +
  stats({n:3000,l:'Implants Placed'},{n:8,l:'Years in Implants'},{n:4,l:'Specialist Surgeons'},{n:500,l:'Full-Mouth Rehabs'}) +
  testi(
    {q:'Virang Dental is the implant centre I trust completely. After 3 failed implants elsewhere, Virang gave me a perfect result. The specialist expertise here is unmatched!', n:'Harish Jain', s:'Implant Patient'},
    {q:'Got a full mouth rehabilitation at Virang Dental and my life has completely changed. I can eat properly again, my confidence is sky-high, and the results look natural!', n:'Sunita Desai', s:'Full Mouth Rehab Patient'},
    {q:'The smile design consultation at Virang was eye-opening. They showed me a digital preview before starting any work. The final result is exactly what I dreamed of!', n:'Meera Trivedi', s:'Smile Design Patient'}
  ) +
  contact(['Select Treatment','Dental Implants','Full Mouth Rehab','Smile Design','Root Canal','Teeth Whitening','Bone Grafting'],
    [{icon:'📍',label:'Location',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919826030762">+91 98260 30762</a>'},
     {icon:'🌐',label:'Website',val:'<a href="https://virang.in">virang.in</a>'},
     {icon:'🕐',label:'Hours',val:'Mon-Sat: 9 AM – 9 PM | Sun: By Appointment'}]
  ) +
  foot('Virang Dental Clinic & Implant Centre, Indore', '+919826030762', '919826030762')
));

// =============================================
// PHOTOGRAPHERS
// =============================================
const photoImg = 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=700&q=80';
const photoHero = 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=1400&q=70';

// JAY CHUGH PHOTOGRAPHY
write('jay-chugh-photography-vedam', page(
  "Jay Chugh Photography — Wedding Photographer Indore",
  '#d97706', '#0f0c06',
  nav('<em>Jay Chugh</em> Photography', [['about','About'],['portfolio','Portfolio'],['packages','Packages'],['contact','Contact']]) +
  hero("Wedding Photography — Indore", "CAPTURING YOUR", "LOVE STORY", "Jay Chugh Photography — Indore's most sought-after wedding photographer. Cinematic storytelling, timeless memories, extraordinary moments.", '+917879704040', photoHero) +
  about2(photoImg, 'Award<br>Winning', 'Jay Chugh Photography',
    'Jay Chugh is Indore\'s premier wedding photographer, celebrated for his cinematic style and ability to capture authentic emotions. Every photo tells a story — your story — with artistry, warmth, and timeless beauty.',
    'With years of experience shooting weddings across India, Jay has developed a signature style that blends photojournalism with fine art photography. His portfolio of breathtaking images speaks for itself.',
    ['Cinematic Style','Drone Videography','Destination Weddings','Full Post-Processing']
  ) +
  `<section id="portfolio"><div class="container">
  <h2 class="stitle">Our <span>Portfolio</span></h2>
  <p class="ssub">A glimpse of the beautiful moments we've captured</p>
  <div class="grid">
    <div class="card" style="padding:0;overflow:hidden;border-radius:12px"><img src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=500&q=80" style="width:100%;height:200px;object-fit:cover;display:block" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden;border-radius:12px"><img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500&q=80" style="width:100%;height:200px;object-fit:cover;display:block" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden;border-radius:12px"><img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80" style="width:100%;height:200px;object-fit:cover;display:block" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden;border-radius:12px"><img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80" style="width:100%;height:200px;object-fit:cover;display:block" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden;border-radius:12px"><img src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=500&q=80" style="width:100%;height:200px;object-fit:cover;display:block" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden;border-radius:12px"><img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80" style="width:100%;height:200px;object-fit:cover;display:block" alt="Wedding"></div>
  </div>
</div></section>` +
  svc('Photography', [
    {i:'📸',n:'Wedding Photography',d:'Cinematic wedding coverage capturing every precious moment.'},
    {i:'🎥',n:'Wedding Films',d:'Cinematic wedding films that you\'ll cherish for a lifetime.'},
    {i:'💑',n:'Pre-Wedding Shoot',d:'Romantic pre-wedding shoots in beautiful locations.'},
    {i:'🚁',n:'Aerial Photography',d:'Breathtaking drone photography for grand venues and outdoor events.'},
    {i:'💍',n:'Engagement Shoot',d:'Intimate engagement photography capturing your love story.'},
    {i:'🎨',n:'Album Design',d:'Custom wedding album design with premium printing.'}
  ]) +
  stats({n:500,l:'Weddings Shot'},{n:10,l:'Years Experience'},{n:1000,l:'5-Star Reviews'},{n:50,l:'Albums Delivered'}) +
  testi(
    {q:'Jay Chugh captured our wedding day perfectly. Every emotion, every moment, every detail — the photos are beyond our wildest expectations. Our favourite wedding gift to ourselves!', n:'Ankit & Priya', s:'Wedding 2023'},
    {q:'The cinematic wedding film Jay created for us made everyone cry happy tears! He has an extraordinary eye for storytelling. Worth every rupee and then some!', n:'Rohan & Divya', s:'Wedding 2022'},
    {q:'We hired Jay for our pre-wedding shoot and the photos were stunning. He made us feel completely at ease and brought out our natural chemistry beautifully. Highly recommend!', n:'Arjun & Neha', s:'Pre-Wedding Shoot'}
  ) +
  `<section id="packages"><div class="container">
  <h2 class="stitle">Wedding <span>Packages</span></h2>
  <p class="ssub">Transparent pricing for your perfect wedding memories</p>
  <div class="pg">
    <div class="pc"><h3>Essential</h3><div class="amt">₹39,999</div><div class="per">per wedding day</div><ul><li>8 Hours Coverage</li><li>1 Photographer</li>
    <li>500+ Edited Photos</li><li>Online Gallery</li><li>USB Delivery</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Enquire Now</a></div>
    <div class="pc pop"><h3>Premium</h3><div class="amt">₹74,999</div><div class="per">full wedding day</div><ul><li>Full Day Coverage</li><li>2 Photographers</li>
    <li>1000+ Edited Photos</li><li>Wedding Film (15 min)</li><li>Drone Footage</li><li>Premium Album</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Enquire Now</a></div>
    <div class="pc"><h3>Luxury</h3><div class="amt">₹1,24,999</div><div class="per">complete package</div><ul><li>2-Day Coverage</li><li>2 Photographers + 1 Videographer</li>
    <li>2000+ Edited Photos</li><li>Cinematic Film (30 min)</li><li>Pre-Wedding Shoot</li><li>Custom Wedding Album</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Enquire Now</a></div>
  </div>
</div></section>` +
  contact(['Select Package','Wedding Photography','Pre-Wedding Shoot','Engagement Shoot','Wedding Film','Luxury Package','Custom Package'],
    [{icon:'📍',label:'Based In',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+917879704040">+91 78797 04040</a>'},
     {icon:'🕐',label:'Availability',val:'Book 3-6 months in advance for prime dates'}]
  ) +
  foot('Jay Chugh Photography, Indore', '+917879704040', '917879704040')
));

// WEDDING PANCHNAMA
write('wedding-panchnama-vedam', page(
  "The Wedding Panchnama — Cinematic Wedding Photography Indore",
  '#be185d', '#0f060a',
  nav('<em>Wedding</em> Panchnama', [['about','About'],['portfolio','Portfolio'],['packages','Packages'],['contact','Contact']]) +
  hero("Wedding Photography — Indore", "YOUR WEDDING", "LIKE NEVER BEFORE", "The Wedding Panchnama — cinematic wedding storytelling that captures the soul of your celebration. Unforgettable frames, timeless love.", '+919877777695', photoHero) +
  about2(photoImg, 'Cinematic<br>Storytellers', 'The Wedding Panchnama',
    'The Wedding Panchnama is a premium wedding photography and cinematography studio based in Indore. We believe every wedding has a unique story — and we exist to tell it beautifully.',
    'Our team of photographers and videographers approaches each wedding as a cinematic project, carefully documenting emotions, details, and the energy of your special day in breathtaking frames.',
    ['Cinematic Photography','Wedding Films','Drone Coverage','Destination Weddings']
  ) +
  `<section id="portfolio"><div class="container">
  <h2 class="stitle">Our <span>Work</span></h2>
  <p class="ssub">Every frame tells a story — here are a few of ours</p>
  <div class="grid">
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
  </div>
</div></section>` +
  svc('Our', [
    {i:'📸',n:'Wedding Photography',d:'Comprehensive wedding coverage with artistic documentary approach.'},
    {i:'🎥',n:'Cinematic Films',d:'Professional wedding films with cinematic colour grading.'},
    {i:'💑',n:'Pre-Wedding Shoot',d:'Beautiful location shoots to celebrate your love story.'},
    {i:'🚁',n:'Drone Shots',d:'Aerial photography for grand ceremonies and stunning venues.'},
    {i:'🎊',n:'Function Coverage',d:'Haldi, mehendi, sangeet, and all pre-wedding functions.'},
    {i:'📖',n:'Premium Albums',d:'Luxury custom-designed wedding albums and prints.'}
  ]) +
  stats({n:300,l:'Weddings Covered'},{n:8,l:'Years of Stories'},{n:800,l:'Happy Couples'},{n:50,l:'Destination Weddings'}) +
  testi(
    {q:'The Wedding Panchnama team exceeded every expectation. Our wedding photos are magazine-worthy and the film made us relive every moment. Absolute perfection!', n:'Karan & Simran', s:'Wedding 2023'},
    {q:'They didn\'t just photograph our wedding — they documented our love story. The candid moments they captured are so authentic and beautiful. We show these photos to everyone!', n:'Amit & Kavya', s:'Wedding 2022'},
    {q:'Hired Wedding Panchnama for our destination wedding in Jaipur. The drone shots, the lighting, the editing — everything was phenomenal. Best wedding vendors we booked!', n:'Rahul & Priya', s:'Destination Wedding 2023'}
  ) +
  `<section id="packages"><div class="container">
  <h2 class="stitle">Photography <span>Packages</span></h2>
  <p class="ssub">Investments that create memories to last a lifetime</p>
  <div class="pg">
    <div class="pc"><h3>Silver</h3><div class="amt">₹45,000</div><div class="per">per wedding</div><ul><li>8 Hours Photography</li><li>2 Photographers</li>
    <li>600 Edited Photos</li><li>Online Album</li><li>USB Delivery</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Book Now</a></div>
    <div class="pc pop"><h3>Gold</h3><div class="amt">₹85,000</div><div class="per">full day</div><ul><li>Full Day Coverage</li><li>3 Photographers</li>
    <li>1200 Edited Photos</li><li>Cinematic Film (20 min)</li><li>Drone Coverage</li><li>Luxury Album</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Book Now</a></div>
    <div class="pc"><h3>Platinum</h3><div class="amt">₹1,40,000</div><div class="per">complete package</div><ul><li>2-Day Full Coverage</li><li>4 Photographers + Videographer</li>
    <li>2500+ Edited Photos</li><li>Cinematic Film (40 min)</li><li>Pre-Wedding Shoot</li><li>4 Custom Albums</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Book Now</a></div>
  </div>
</div></section>` +
  contact(['Select Package','Silver Package','Gold Package','Platinum Package','Pre-Wedding Only','Functions Coverage','Custom Quote'],
    [{icon:'📍',label:'Based In',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919877777695">+91 98777 77695</a>'},
     {icon:'🌐',label:'Website',val:'<a href="https://theweddingpanchnama.com">theweddingpanchnama.com</a>'},
     {icon:'🕐',label:'Booking',val:'Limited dates — book early to confirm yours'}]
  ) +
  foot('The Wedding Panchnama, Indore', '+919877777695', '919877777695')
));

// SUNRISE DIGITAL STUDIO
write('sunrise-digital-studio-vedam', page(
  "Sunrise Digital Studio — Photography Studio Tilak Nagar Indore",
  '#f59e0b', '#0f0c06',
  nav('<em>Sunrise</em> Digital Studio', [['about','About'],['services','Services'],['packages','Packages'],['contact','Contact']]) +
  hero("Photography Studio — Indore", "MOMENTS THAT", "LAST FOREVER", "Sunrise Digital Studio in Tilak Nagar, Indore — your trusted photography partner for weddings, portraits, events, and commercial shoots.", '+917411949153', photoHero) +
  about2(photoImg, 'Tilak Nagar<br>Indore', 'Sunrise Digital Studio',
    'Sunrise Digital Studio is a full-service photography studio located in Tilak Nagar, Indore. With modern equipment, a professional studio setup, and experienced photographers, we cover all your photography and videography needs.',
    'From wedding shoots and family portraits to commercial product photography and event coverage — Sunrise Digital Studio delivers high-quality results with quick turnaround and personalised service.',
    ['Professional Studio Setup','Experienced Photographers','Quick Delivery','All Photography Types']
  ) +
  svc('Photography', [
    {i:'👰',n:'Wedding Photography',d:'Complete wedding day coverage by experienced photographers.'},
    {i:'👨‍👩‍👧‍👦',n:'Family Portraits',d:'Beautiful family portrait sessions in studio or outdoor settings.'},
    {i:'🎂',n:'Birthday & Events',d:'Professional event photography for all celebrations.'},
    {i:'📦',n:'Product Photography',d:'Commercial product shoots for e-commerce and catalogues.'},
    {i:'🎓',n:'Graduation Shoots',d:'Milestone graduation photography with premium framing options.'},
    {i:'🏫',n:'School Photography',d:'Annual school photography for individual and group photos.'}
  ]) +
  stats({n:2000,l:'Shoots Done'},{n:15,l:'Years in Business'},{n:5,l:'Photographers'},{n:500,l:'Happy Families'}) +
  testi(
    {q:'Sunrise Digital Studio captured our wedding beautifully. The studio is well-equipped, the photographers are experienced, and the edited photos were delivered within a week. Excellent!', n:'Rajesh & Priya', s:'Wedding 2023'},
    {q:'Got our family portrait session done at Sunrise and the results are stunning. The photographer made everyone comfortable and the final prints are framed in our home!', n:'Sharma Family', s:'Family Portrait'},
    {q:'Best studio for school photography in Indore. Fast, professional, and the quality of photos is consistently excellent. Have been using Sunrise for 5 years now!', n:'Principal, St. Marks School', s:'School Photography Client'}
  ) +
  `<section id="packages"><div class="container">
  <h2 class="stitle">Photography <span>Packages</span></h2>
  <p class="ssub">Affordable packages for every occasion</p>
  <div class="pg">
    <div class="pc"><h3>Basic</h3><div class="amt">₹8,999</div><div class="per">per event</div><ul><li>4 Hours Coverage</li><li>1 Photographer</li>
    <li>200 Edited Photos</li><li>Online Gallery</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Book Now</a></div>
    <div class="pc pop"><h3>Standard</h3><div class="amt">₹19,999</div><div class="per">wedding day</div><ul><li>8 Hours Coverage</li><li>2 Photographers</li>
    <li>500 Edited Photos</li><li>Wedding Video (10 min)</li><li>Printed Album</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Book Now</a></div>
    <div class="pc"><h3>Premium</h3><div class="amt">₹35,999</div><div class="per">full package</div><ul><li>Full Day Coverage</li><li>3 Photographers</li>
    <li>1000+ Photos</li><li>Cinematic Video</li><li>Drone Shots</li><li>2 Premium Albums</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Book Now</a></div>
  </div>
</div></section>` +
  contact(['Select Service','Wedding Photography','Family Portrait','Birthday/Event','Product Photography','Graduation Shoot','School Photography'],
    [{icon:'📍',label:'Address',val:'Tilak Nagar, Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+917411949153">+91 74119 49153</a>'},
     {icon:'🕐',label:'Studio Hours',val:'Mon-Sat: 9 AM – 8 PM | Sun: By Appointment'}]
  ) +
  foot('Sunrise Digital Studio, Tilak Nagar Indore', '+917411949153', '917411949153')
));

// HARSH STUDIO PHOTOGRAPHY
write('harsh-studio-photography-vedam', page(
  "Harsh Studio Photography — Wedding & Event Photographer Indore",
  '#ea580c', '#0f0a06',
  nav('<em>Harsh Studio</em>', [['about','About'],['portfolio','Portfolio'],['packages','Packages'],['contact','Contact']]) +
  hero("Photography — Indore", "FRAME YOUR", "PRECIOUS MOMENTS", "Harsh Studio Photography — capturing life's most beautiful moments with a creative eye and technical excellence in Indore.", '+919926681883', photoHero) +
  about2(photoImg, 'Creative<br>Excellence', 'Harsh Studio Photography',
    'Harsh Studio Photography in Indore delivers exceptional photography and videography services for weddings, events, and commercial projects. Known for a creative, documentary approach that preserves authentic emotions.',
    'With state-of-the-art camera equipment, studio lighting, and post-processing technology, Harsh Studio Photography ensures every image is a work of art that you\'ll treasure forever.',
    ['Creative Approach','Advanced Equipment','Studio & Outdoor','Fast Delivery']
  ) +
  `<section id="portfolio"><div class="container">
  <h2 class="stitle">Our <span>Portfolio</span></h2>
  <p class="ssub">Beauty captured in every frame</p>
  <div class="grid">
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Event"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Event"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
    <div class="card" style="padding:0;overflow:hidden"><img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500&q=80" style="width:100%;height:200px;object-fit:cover" alt="Wedding"></div>
  </div>
</div></section>` +
  svc('Our', [
    {i:'📸',n:'Wedding Photography',d:'Professional wedding coverage with artistic documentary flair.'},
    {i:'🎥',n:'Wedding Videography',d:'Beautiful wedding films and highlight reels.'},
    {i:'💑',n:'Pre-Wedding Shoot',d:'Outdoor and studio pre-wedding sessions.'},
    {i:'🎊',n:'Event Photography',d:'Corporate events, parties, and social gatherings.'},
    {i:'👤',n:'Portrait Photography',d:'Individual and family portraits in studio and outdoor.'},
    {i:'📦',n:'Commercial',d:'Product and commercial photography for businesses.'}
  ]) +
  stats({n:400,l:'Weddings Photographed'},{n:8,l:'Years Experience'},{n:4,l:'Photographers'},{n:200,l:'Events Covered'}) +
  testi(
    {q:'Harsh Studio captured our wedding with incredible artistry. The candid shots are so natural and the portraits are stunning. The team was professional and unobtrusive. Loved every photo!', n:'Vivek & Anita', s:'Wedding 2023'},
    {q:'Amazing photography studio in Indore! The pre-wedding shoot at the location they suggested was magical. Every photo looks like it\'s from a magazine. Highly recommend!', n:'Deepak & Riya', s:'Pre-Wedding Shoot'},
    {q:'We hired Harsh Studio for our corporate annual event and the quality of photos was exceptional. Quick delivery, professional conduct, and brilliant results. Will hire again!', n:'XYZ Corp HR', s:'Corporate Event'}
  ) +
  `<section id="packages"><div class="container">
  <h2 class="stitle">Photography <span>Packages</span></h2>
  <p class="ssub">Great photography at great value</p>
  <div class="pg">
    <div class="pc"><h3>Silver</h3><div class="amt">₹15,999</div><div class="per">per event</div><ul><li>6 Hours Coverage</li><li>2 Photographers</li>
    <li>400 Edited Photos</li><li>Online Delivery</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Book Now</a></div>
    <div class="pc pop"><h3>Gold</h3><div class="amt">₹29,999</div><div class="per">wedding day</div><ul><li>Full Day Coverage</li><li>2 Photographers</li>
    <li>800 Edited Photos</li><li>Wedding Film 15 min</li><li>Printed Album</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Book Now</a></div>
    <div class="pc"><h3>Platinum</h3><div class="amt">₹54,999</div><div class="per">full package</div><ul><li>2-Day Coverage</li><li>3 Photographers</li>
    <li>1500+ Photos</li><li>Cinematic Film 30 min</li><li>Pre-Wedding Shoot</li><li>2 Albums</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Book Now</a></div>
  </div>
</div></section>` +
  contact(['Select Service','Wedding Photography','Pre-Wedding Shoot','Event Photography','Corporate Shoot','Portrait Session','Custom Package'],
    [{icon:'📍',label:'Based In',val:'Indore, Madhya Pradesh'},
     {icon:'📞',label:'Phone',val:'<a href="tel:+919926681883">+91 99266 81883</a>'},
     {icon:'🕐',label:'Availability',val:'7 Days a Week | By Appointment'}]
  ) +
  foot('Harsh Studio Photography, Indore', '+919926681883', '919926681883')
));

console.log('Dental & Photography batch done!');
