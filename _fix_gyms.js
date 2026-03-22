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
<html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>${CSS.replace(':root{--a:#CC0000}',':root{--a:'+accent+'}').replace('background:#0f0f0f}','background:'+(bg||'#0f0f0f')+'}')}
</style></head>
<body>${body}${JS}</body></html>`;
}

function navH(logo, links) {
  return `<nav><div class="logo-txt">${logo}</div>
<ul class="nav-links">${links.map(l=>`<li><a href="#${l[0]}">${l[1]}</a></li>`).join('')}</ul>
<button class="hbg" onclick="document.querySelector('.mm').classList.add('open')"><span></span><span></span><span></span></button></nav>
<div class="mm"><button class="mm-close" onclick="this.parentElement.classList.remove('open')">✕</button>
${links.map(l=>`<a href="#${l[0]}" onclick="this.parentElement.classList.remove('open')">${l[1]}</a>`).join('\n')}</div>`;
}

function heroS(badge,h1,h1em,p,phone,bg) {
  return `<section class="hero"><div class="h-bg" style="background-image:url('${bg||"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=70"}')"></div>
<div class="h-ov"></div>
<div class="h-cnt"><div class="h-badge">${badge}</div><h1>${h1}<em>${h1em}</em></h1>
<p>${p}</p><a href="#pricing" class="btn">Join Now</a><a href="tel:${phone}" class="btn btn-s">Call Now</a></div></section>`;
}

function svcS(cards) {
  return `<section id="services"><div class="container">
<h2 class="stitle">Our <span>Programs</span></h2><p class="ssub">Comprehensive fitness programs for every goal</p>
<div class="grid">${cards.map(c=>`<div class="card"><div class="ci">${c.i}</div><h3>${c.n}</h3><p>${c.d}</p></div>`).join('')}</div>
</div></section>`;
}

function pricingS(p1,p2,p3) {
  function pc(p,pop){return `<div class="pc${pop?' pop':''}"><h3>${p.name}</h3><div class="amt">${p.price}</div><div class="per">${p.period}</div><ul>${p.feats.map(f=>`<li>${f}</li>`).join('')}</ul><a href="#contact" class="btn" style="width:100%;text-align:center;display:block">Join Now</a></div>`;}
  return `<section id="pricing" style="background:#141414"><div class="container">
<h2 class="stitle">Membership <span>Plans</span></h2><p class="ssub">Flexible plans for every lifestyle and budget</p>
<div class="pg">${pc(p1,false)}${pc(p2,true)}${pc(p3,false)}</div></div></section>`;
}

function statsS(s){return `<section class="ss"><div class="container"><div class="sg">${s.map(x=>`<div><h3 class="ctr" data-t="${x.n}">0</h3><p>${x.l}</p></div>`).join('')}</div></div></section>`;}

function testiS(t1,t2,t3){
  return `<section class="ts"><div class="container"><h2 class="stitle">Member <span>Stories</span></h2>
<div class="tsl"><div class="ttr">
<div class="ti"><blockquote>"${t1.q}"</blockquote><cite>${t1.n}</cite><small>${t1.s}</small></div>
<div class="ti"><blockquote>"${t2.q}"</blockquote><cite>${t2.n}</cite><small>${t2.s}</small></div>
<div class="ti"><blockquote>"${t3.q}"</blockquote><cite>${t3.n}</cite><small>${t3.s}</small></div>
</div><div class="tnav"><button class="td on" onclick="goT(0)"></button><button class="td" onclick="goT(1)"></button><button class="td" onclick="goT(2)"></button></div></div></div></section>`;
}

function contactS(phone,wa,addr,hours,extras) {
  const extraItems = extras ? extras.map(e=>`<div class="ci-it"><div class="ci-ic">${e.icon}</div><div><h4>${e.label}</h4><p>${e.val}</p></div></div>`).join('') : '';
  return `<section id="contact"><div class="container">
<h2 class="stitle">Get In <span>Touch</span></h2><p class="ssub">Start your fitness journey today</p>
<div class="cg">
<form class="cf" onsubmit="event.preventDefault();alert('Thank you! We will contact you soon.')">
<input type="text" placeholder="Your Name" required><input type="tel" placeholder="Phone Number" required>
<input type="email" placeholder="Email">
<select><option>Select Goal</option><option>Bodybuilding</option><option>Fat Loss</option><option>Strength</option><option>Cardio Fitness</option><option>General Fitness</option></select>
<textarea placeholder="Message..."></textarea>
<button type="submit" class="btn" style="width:100%;cursor:pointer">Send Message</button>
</form>
<div><div class="ci2">
<div class="ci-it"><div class="ci-ic">📍</div><div><h4>Address</h4><p>${addr}</p></div></div>
<div class="ci-it"><div class="ci-ic">📞</div><div><h4>Phone</h4><p><a href="tel:${phone}">${phone}</a></p></div></div>
<div class="ci-it"><div class="ci-ic">🕐</div><div><h4>Hours</h4><p>${hours}</p></div></div>
${extraItems}
</div>
<div class="mapbox"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013!2d75.88!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzE5LjIiTiA3NcKwNTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1" allowfullscreen loading="lazy"></iframe></div>
</div></div></div></section>`;
}

function footS(name,phone,wa){return `<footer><div class="soc"><a href="tel:${phone}">📞</a><a href="https://wa.me/${wa}">💬</a></div>
<p>© 2026 ${name}. All rights reserved. | Powered by <strong style="color:var(--a)">VEDAM</strong></p></footer>
<a href="https://wa.me/${wa}" class="wa">💬</a>`;}

// ANYTIME FITNESS INDORE
write('anytime-fitness-indore-vedam', page(
  "Anytime Fitness Indore — Open 24/7 | Premium Gym",
  '#CC0000', '#0f0f0f',
  navH('ANYTIME <em>FITNESS</em>', [['about','About'],['services','Services'],['pricing','Pricing'],['contact','Contact']]) +
  heroS('Open 24/7 — Indore', 'YOUR TIME,', 'YOUR GYM', 'Anytime Fitness Indore — the gym that fits your schedule. World-class equipment, certified trainers, and 24/7 access so you never miss a workout.', '+918062689019', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=70') +
  `<section id="about" style="background:#141414"><div class="container ag">
<div class="ai"><img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80" alt="Anytime Fitness"><div class="a-badge">24/7<br>Access</div></div>
<div class="at"><h2>About <em>Anytime Fitness</em></h2>
<p>Anytime Fitness is the world's largest gym chain with 5,000+ clubs globally. Our Indore club delivers the same premium experience — state-of-the-art equipment, expert trainers, and a safe, welcoming environment for members of all fitness levels.</p>
<p>With 24/7 access via your key fob, you workout when it suits your schedule. Early morning, late night, or weekend — Anytime Fitness Indore is always open for you.</p>
<div class="feats"><div class="feat"><strong>✓</strong> 24/7 Access</div><div class="feat"><strong>✓</strong> Certified Trainers</div><div class="feat"><strong>✓</strong> Modern Equipment</div><div class="feat"><strong>✓</strong> Tanning & Spa</div><div class="feat"><strong>✓</strong> Worldwide Access</div></div>
</div></div></section>` +
  svcS([
    {i:'🏋️',n:'Strength Training',d:'Full range of free weights, cables, and resistance machines.'},
    {i:'❤️‍🔥',n:'Cardio Zone',d:'Treadmills, bikes, ellipticals, and rowing machines.'},
    {i:'🎯',n:'Personal Training',d:'1-on-1 coaching with certified personal trainers.'},
    {i:'🧘',n:'Stretch & Yoga',d:'Dedicated stretch area and scheduled yoga sessions.'},
    {i:'💊',n:'Nutrition Coaching',d:'Expert guidance on diet and supplementation.'},
    {i:'📱',n:'Anytime Fitness App',d:'Track workouts, access plans, and manage your club access.'}
  ]) +
  statsS([{n:5000,l:'Global Locations'},{n:3000000,l:'Members Worldwide'},{n:24,l:'Hours Access Daily'},{n:100,l:'Equipment Pieces'}]) +
  pricingS(
    {name:'Monthly',price:'₹1,299',period:'per month',feats:['Full Gym Access','24/7 Entry','Locker Facility','Basic Fitness Assessment']},
    {name:'Quarterly',price:'₹3,299',period:'per 3 months',feats:['All Monthly Benefits','2 PT Sessions','Custom Nutrition Plan','Body Composition Analysis','Worldwide Club Access']},
    {name:'Annual',price:'₹9,999',period:'per year',feats:['All Quarterly Benefits','Unlimited PT Sessions','Monthly Body Check-ins','Free Merchandise','Priority Booking']}
  ) +
  testiS(
    {q:'Anytime Fitness changed my life. The 24/7 access means I can work out after late-night shifts. Lost 18kg in 8 months with amazing trainer support!', n:'Rohan Mehta', s:'Member since 2022'},
    {q:'Best gym in Indore. The equipment is always clean, trainers are certified and genuinely care about your progress. Highly recommend the quarterly plan!', n:'Divya Sharma', s:'Member since 2021'},
    {q:'I travel a lot and having worldwide club access means I never miss a workout. The Indore club is fantastic — helpful staff and great atmosphere.', n:'Ajay Verma', s:'Member since 2023'}
  ) +
  contactS('+918062689019','+918062689019','Indore, Madhya Pradesh','Open 24 Hours, 7 Days a Week') +
  footS('Anytime Fitness Indore', '+918062689019', '918062689019')
));

// GOLD'S GYM VIJAYNAGAR
write('golds-gym-vijaynagar-vedam', page(
  "Gold's Gym Vijaynagar Indore — The Birthplace of Fitness",
  '#FFB800', '#0a0a0a',
  navH("GOLD'S <em>GYM</em>", [['about','About'],['services','Services'],['pricing','Pricing'],['contact','Contact']]) +
  heroS("Gold's Gym — Vijaynagar, Indore", "THE BIRTHPLACE", "OF FITNESS", "Gold's Gym Vijaynagar — Indore's legendary fitness destination. World-class equipment, expert coaching, and the gold standard of gym culture.", '+919993834111', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=70') +
  `<section id="about" style="background:#141414"><div class="container ag">
<div class="ai"><img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80" alt="Gold's Gym"><div class="a-badge">50+<br>Years Legacy</div></div>
<div class="at"><h2>About <em>Gold's Gym Vijaynagar</em></h2>
<p>Gold's Gym Vijaynagar brings the legendary Gold's Gym experience to Indore's premium Vijaynagar locality. Since our establishment, we have been the number one fitness destination for serious athletes and beginners alike.</p>
<p>Our facility features world-class equipment, certified professional trainers, and a motivating environment where champions are made every single day. Join the Gold's Gym legacy.</p>
<div class="feats"><div class="feat"><strong>✓</strong> Premium Equipment</div><div class="feat"><strong>✓</strong> Gold's Legacy</div><div class="feat"><strong>✓</strong> Certified Trainers</div><div class="feat"><strong>✓</strong> Diet Coaching</div></div>
</div></div></section>` +
  svcS([
    {i:'💪',n:'Bodybuilding',d:'Classic Gold\'s Gym bodybuilding programs with expert coaching.'},
    {i:'🔥',n:'Fat Loss',d:'Science-backed cardio and HIIT for sustainable fat burning.'},
    {i:'⚡',n:'Powerlifting',d:'Squat, bench, deadlift — coached by certified powerlifters.'},
    {i:'🏃',n:'Functional Training',d:'Athletic performance and real-world strength programs.'},
    {i:'🧘',n:'Yoga & Recovery',d:'Flexibility, yoga, and recovery for complete wellness.'},
    {i:'🎯',n:'Personal Training',d:'1-on-1 Gold\'s Gym certified coaching sessions.'}
  ]) +
  statsS([{n:700,l:'Global Locations'},{n:50,l:'Years of Legacy'},{n:100,l:'Equipment Pieces'},{n:15,l:'Expert Trainers'}]) +
  pricingS(
    {name:'Monthly',price:'₹1,499',period:'per month',feats:["Full Gym Access","Locker & Shower","Group Classes","Diet Consultation"]},
    {name:'Quarterly',price:'₹3,999',period:'per 3 months',feats:["All Monthly Benefits","Personal Training 3x/wk","Custom Nutrition Plan","Body Analysis Monthly","Supplement 10% Off"]},
    {name:'Annual',price:'₹11,999',period:'per year',feats:["All Quarterly Benefits","Unlimited PT Sessions","Free Gold's Merch","Guest Passes 4/month","Priority Class Booking"]}
  ) +
  testiS(
    {q:"Gold's Gym Vijaynagar is truly world-class. The equipment quality, the trainers' knowledge, and the atmosphere push you to give your best every single day.", n:'Siddharth Jain', s:'Member since 2021'},
    {q:"I've trained at gyms across India but Gold's Gym Indore stands apart. The legacy, the culture, and the results speak for themselves. Best investment I made.", n:'Pooja Tiwari', s:'Member since 2022'},
    {q:"Lost 22kg in 7 months at Gold's Gym Vijaynagar. The trainers design personalised plans and keep you accountable. Can't recommend it enough!", n:'Manish Patel', s:'Member since 2023'}
  ) +
  contactS('+919993834111','919993834111','Vijaynagar, Indore, Madhya Pradesh','Mon-Sat: 5 AM – 10 PM | Sun: 6 AM – 8 PM') +
  footS("Gold's Gym Vijaynagar, Indore", '+919993834111', '919993834111')
));

console.log('Gym fixes done!');
