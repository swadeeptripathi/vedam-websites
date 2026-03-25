const fs = require('fs');
const path = require('path');

const b = process.env.VEDAM_OUTPUT || path.resolve(__dirname);

function write(slug, html) {
  fs.writeFileSync(path.join(b, slug, 'index.html'), html, 'utf8');
  console.log('✓ ' + slug);
}

// ============================================================
// SHARED CSS COMPONENTS
// ============================================================

const gymCSS = `*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;color:#e0e0e0;overflow-x:hidden}h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800}section{padding:80px 5%}.container{max-width:1200px;margin:0 auto}.stitle{font-size:clamp(1.8rem,4vw,2.8rem);text-align:center;margin-bottom:.5rem;text-transform:uppercase}.stitle span{color:var(--a)}.ssub{text-align:center;color:#888;max-width:600px;margin:0 auto 3rem;font-size:.92rem;line-height:1.7}nav{position:fixed;top:0;width:100%;z-index:1000;padding:14px 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(0,0,0,.85);backdrop-filter:blur(20px);border-bottom:2px solid var(--a);transition:.3s}.logo{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.4rem;font-weight:800;color:#fff}.logo span{color:var(--a)}.nav-links{display:flex;gap:24px;list-style:none}.nav-links a{color:#bbb;text-decoration:none;font-size:.88rem;font-weight:600;transition:.3s}.nav-links a:hover{color:var(--a)}.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none}.hamburger span{width:24px;height:2px;background:#fff}.mobile-menu{display:none;position:fixed;inset:0;background:rgba(10,10,10,.98);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:28px}.mobile-menu.active{display:flex}.mobile-menu a{color:#fff;font-size:1.3rem;text-decoration:none;font-family:'Plus Jakarta Sans',sans-serif}.mobile-close{position:absolute;top:20px;right:20px;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer}.hero{height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden}.hero-bg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.18}.hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.85))}.hero-content{position:relative;z-index:2;padding:0 20px}.hero-badge{display:inline-block;background:var(--a);color:#fff;font-size:.72rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:6px 16px;border-radius:20px;margin-bottom:20px}.hero-content h1{font-size:clamp(2.8rem,8vw,5.5rem);color:#fff;line-height:1.1;margin-bottom:20px;text-transform:uppercase}.hero-content h1 em{color:var(--a);font-style:normal;display:block}.hero-content p{color:#bbb;font-size:1.05rem;max-width:520px;margin:0 auto 30px;line-height:1.7}.btn{display:inline-block;padding:13px 34px;background:var(--a);color:#fff;text-decoration:none;font-weight:700;border-radius:4px;font-size:.9rem;transition:.3s;text-transform:uppercase;letter-spacing:1px;font-family:'Plus Jakarta Sans',sans-serif;border:2px solid var(--a)}.btn:hover{background:transparent;color:var(--a)}.btn-sec{background:transparent;border-color:#fff;color:#fff;margin-left:14px}.btn-sec:hover{background:#fff;color:#000}.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}.about-img{position:relative;border-radius:12px;overflow:hidden}.about-img img{width:100%;height:420px;object-fit:cover;border-radius:12px}.about-badge{position:absolute;bottom:20px;right:20px;background:var(--a);color:#fff;padding:12px 18px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:1rem;border-radius:8px;text-align:center;line-height:1.3}.about-text h2{font-size:2.1rem;margin-bottom:15px;text-transform:uppercase}.about-text h2 em{color:var(--a);font-style:normal}.about-text p{color:#aaa;line-height:1.85;margin-bottom:14px}.feats{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}.feat{display:flex;align-items:center;gap:7px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:7px 12px;font-size:.82rem}.feat strong{color:var(--a)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:20px}.card{background:var(--card);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:26px;transition:.3s}.card:hover{border-color:var(--a);transform:translateY(-4px);box-shadow:0 10px 30px rgba(0,0,0,.3)}.card-icon{font-size:2rem;margin-bottom:13px}.card h3{font-size:1rem;text-transform:uppercase;margin-bottom:7px}.card p{color:#777;font-size:.86rem;line-height:1.6}.stats-section{border-top:3px solid var(--a);border-bottom:3px solid var(--a)}.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;text-align:center}.stat h3{font-size:clamp(2rem,5vw,3rem);color:var(--a)}.stat p{color:#777;font-size:.76rem;letter-spacing:2px;text-transform:uppercase;margin-top:6px}.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.price-card{background:var(--card);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:34px 24px;text-align:center;position:relative;transition:.3s}.price-card:hover,.price-card.pop{border-color:var(--a);transform:translateY(-5px)}.price-card.pop::before{content:'POPULAR';position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--a);color:#fff;padding:4px 16px;border-radius:20px;font-size:.7rem;font-weight:700;letter-spacing:1px}.price-card h3{font-size:1.1rem;text-transform:uppercase;margin-bottom:9px}.amount{font-size:2.8rem;color:var(--a);font-family:'Plus Jakarta Sans',sans-serif;font-weight:800}.period{color:#666;font-size:.85rem;margin-bottom:18px}.price-card ul{list-style:none;margin-bottom:22px;text-align:left}.price-card li{padding:7px 0;color:#aaa;font-size:.85rem;border-bottom:1px solid rgba(255,255,255,.04)}.price-card li::before{content:'✓ ';color:var(--a);font-weight:700}.test-section{background:rgba(255,255,255,.01)}.test-slider{max-width:680px;margin:0 auto;overflow:hidden}.test-track{display:flex;transition:transform .5s}.test-item{min-width:100%;padding:36px;text-align:center}.test-item blockquote{font-size:1rem;line-height:1.9;color:#bbb;font-style:italic;margin-bottom:16px}.test-item cite{color:var(--a);font-style:normal;font-weight:700}.test-item small{display:block;color:#666;font-size:.8rem;margin-top:3px}.test-nav{display:flex;justify-content:center;gap:8px;margin-top:14px}.test-dot{width:10px;height:10px;border-radius:50%;border:none;background:rgba(255,255,255,.2);cursor:pointer;transition:.3s}.test-dot.active{background:var(--a)}.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px}.contact-form input,.contact-form textarea,.contact-form select{width:100%;padding:12px 15px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:7px;color:#fff;font-family:'Inter',sans-serif;font-size:.88rem;margin-bottom:12px;transition:.3s}.contact-form input:focus,.contact-form textarea:focus,.contact-form select:focus{outline:none;border-color:var(--a)}.contact-form textarea{height:100px;resize:vertical}.cinfo{display:flex;flex-direction:column;gap:15px}.cinfo-item{display:flex;gap:13px;align-items:flex-start}.cinfo-icon{width:42px;height:42px;background:var(--a);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}.cinfo-item h4{font-size:.86rem;margin-bottom:2px}.cinfo-item p,.cinfo-item a{color:#888;font-size:.83rem;text-decoration:none}.map{margin-top:15px;border-radius:10px;overflow:hidden;height:200px}.map iframe{width:100%;height:100%;border:0}footer{background:#080808;padding:28px 5%;text-align:center;border-top:1px solid rgba(255,255,255,.05)}.social-links{display:flex;gap:12px;justify-content:center;margin-bottom:12px}.social-links a{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:#bbb;text-decoration:none;transition:.3s;font-size:.95rem}.social-links a:hover{border-color:var(--a);color:var(--a)}footer p{color:#444;font-size:.78rem}.wa{position:fixed;bottom:25px;right:25px;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:998;box-shadow:0 4px 20px rgba(37,211,102,.4);transition:transform .3s;text-decoration:none;font-size:1.6rem}.wa:hover{transform:scale(1.1)}@media(max-width:1024px){.pricing-grid{grid-template-columns:1fr}.stats-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.nav-links{display:none}.hamburger{display:flex}.about-grid,.contact-grid{grid-template-columns:1fr}}`;

const jsSnippet = `<script>
let tI=0;const tT=document.querySelector('.test-track'),tD=document.querySelectorAll('.test-dot');
function goT(n){tI=n;tT.style.transform='translateX(-'+(n*100)+'%)';tD.forEach(d=>d.classList.remove('active'));tD[n].classList.add('active')}
setInterval(()=>goT((tI+1)%3),4500);
const counters=document.querySelectorAll('.counter');
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const el=e.target,t=+el.dataset.t,s=performance.now();const run=now=>{const p=Math.min((now-s)/2000,1);el.textContent=Math.floor(p*t).toLocaleString()+'+';if(p<1)requestAnimationFrame(run)};requestAnimationFrame(run);obs.unobserve(el)}})},{threshold:.5});
counters.forEach(c=>obs.observe(c));
window.addEventListener('scroll',()=>{const n=document.getElementById('nav');if(n)n.style.background=scrollY>50?'rgba(10,10,10,.98)':'rgba(0,0,0,.85)'});
<\/script>`;

function navHtml(links) {
  return `<nav id="nav">
  <div class="logo">${links.logo}</div>
  <ul class="nav-links">${links.items.map(i=>`<li><a href="#${i[0]}">${i[1]}</a></li>`).join('')}</ul>
  <button class="hamburger" onclick="document.querySelector('.mobile-menu').classList.add('active')"><span></span><span></span><span></span></button>
</nav>
<div class="mobile-menu">
  <button class="mobile-close" onclick="this.parentElement.classList.remove('active')">✕</button>
  ${links.items.map(i=>`<a href="#${i[0]}" onclick="this.parentElement.classList.remove('active')">${i[1]}</a>`).join('\n  ')}
</div>`;
}

function testHtml(t1,t2,t3) {
  return `<section class="test-section">
  <div class="container">
    <h2 class="stitle">Member <span>Stories</span></h2>
    <div class="test-slider">
      <div class="test-track">
        <div class="test-item"><blockquote>"${t1.q}"</blockquote><cite>${t1.n}</cite><small>${t1.s}</small></div>
        <div class="test-item"><blockquote>"${t2.q}"</blockquote><cite>${t2.n}</cite><small>${t2.s}</small></div>
        <div class="test-item"><blockquote>"${t3.q}"</blockquote><cite>${t3.n}</cite><small>${t3.s}</small></div>
      </div>
      <div class="test-nav"><button class="test-dot active" onclick="goT(0)"></button><button class="test-dot" onclick="goT(1)"></button><button class="test-dot" onclick="goT(2)"></button></div>
    </div>
  </div>
</section>`;
}

function pricingHtml(p1,p2,p3) {
  function pc(p,pop) {
    return `<div class="price-card${pop?' pop':''}"><h3>${p.name}</h3><div class="amount">${p.price}</div><div class="period">${p.period}</div><ul>${p.feats.map(f=>`<li>${f}</li>`).join('')}</ul><a href="#contact" class="btn" style="width:100%;text-align:center">Get Started</a></div>`;
  }
  return `<section id="pricing">
  <div class="container">
    <h2 class="stitle">Membership <span>Plans</span></h2>
    <p class="ssub">Flexible plans designed for every budget and fitness goal</p>
    <div class="pricing-grid">${pc(p1,false)}${pc(p2,true)}${pc(p3,false)}</div>
  </div>
</section>`;
}

function contactHtml(info) {
  return `<section id="contact">
  <div class="container">
    <h2 class="stitle">Get In <span>Touch</span></h2>
    <p class="ssub">Ready to start your journey? Reach out today!</p>
    <div class="contact-grid">
      <form class="contact-form" onsubmit="event.preventDefault();alert('Thank you! We will contact you soon.')">
        <input type="text" placeholder="Your Name" required>
        <input type="tel" placeholder="Phone Number" required>
        <input type="email" placeholder="Email Address">
        <select>${info.opts.map(o=>`<option>${o}</option>`).join('')}</select>
        <textarea placeholder="Your message..."></textarea>
        <button type="submit" class="btn" style="width:100%;cursor:pointer">Send Message</button>
      </form>
      <div>
        <div class="cinfo">
          ${info.items.map(i=>`<div class="cinfo-item"><div class="cinfo-icon">${i.icon}</div><div><h4>${i.label}</h4><p>${i.val}</p></div></div>`).join('\n          ')}
        </div>
        <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013!2d75.88!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzE5LjIiTiA3NcKwNTInNDQuNiJF!5e0!3m2!1sen!2sin!4v1" allowfullscreen loading="lazy"></iframe></div>
      </div>
    </div>
  </div>
</section>`;
}

function footerHtml(phone, wa, brand, accentVar) {
  return `<footer>
  <div class="social-links"><a href="tel:${phone}">📞</a><a href="https://wa.me/${wa}">💬</a></div>
  <p>© 2026 ${brand}. All rights reserved. | Powered by <strong style="color:var(${accentVar||'--a'})">VEDAM</strong></p>
</footer>
<a href="https://wa.me/${wa}" class="wa">💬</a>`;
}

function page(title, accentColor, bgColor, cardColor, font, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{--a:${accentColor}}
body{background:${bgColor}}
.stats-section{background:${bgColor === '#0f0f0f' ? '#1a1a1a' : bgColor}}
.card,.price-card{background:${cardColor}}
${gymCSS}
</style>
</head>
<body>
${body}
${jsSnippet}
</body>
</html>`;
}

// ===================== GYM SITES =====================

// 1. GOLD'S GYM BHAWARKUAN
write('golds-gym-bhawarkuan-vedam', page(
  "Gold's Gym Bhawarkuan Indore — The Birthplace of Fitness",
  '#e63946', '#0a0a0a', '#1e1e1e', null,
  navHtml({logo: "GOLD'S <span>GYM</span>", items:[['about','About'],['services','Services'],['pricing','Pricing'],['contact','Contact']]}) +
  `<section class="hero">
  <div class="hero-bg" style="background-image:url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=70')"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-badge">Gold's Gym — Bhawarkuan, Indore</div>
    <h1>FORGE YOUR <em>LEGEND</em></h1>
    <p>The world's most iconic gym brand comes to Bhawarkuan. Premium equipment, certified trainers, and a legacy of champions.</p>
    <a href="#pricing" class="btn">Join Now</a>
    <a href="tel:+919294551118" class="btn btn-sec">Call Us</a>
  </div>
</section>
<section id="about">
  <div class="container about-grid">
    <div class="about-img">
      <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80" alt="Gold's Gym Bhawarkuan">
      <div class="about-badge">World's<br>Best Gym</div>
    </div>
    <div class="about-text">
      <h2>About <em>Gold's Gym</em></h2>
      <p>Gold's Gym Bhawarkuan brings the legendary Gold's Gym experience to Indore's Bhawarkuan neighbourhood. Contact manager Kaushal Kishore Shukla for personalized guidance on memberships, programs, and more.</p>
      <p>Our facility features world-class equipment, certified fitness professionals, and a community of dedicated athletes who push each other to new heights every day.</p>
      <div class="feats">
        <div class="feat"><strong>✓</strong> Premium Equipment</div>
        <div class="feat"><strong>✓</strong> Certified Trainers</div>
        <div class="feat"><strong>✓</strong> Global Network</div>
        <div class="feat"><strong>✓</strong> Diet Coaching</div>
      </div>
    </div>
  </div>
</section>
<section id="services" style="background:rgba(255,255,255,.015)">
  <div class="container">
    <h2 class="stitle">Our <span>Programs</span></h2>
    <p class="ssub">Comprehensive fitness programs for every goal and every level</p>
    <div class="grid">
      <div class="card"><div class="card-icon">💪</div><h3>Bodybuilding</h3><p>Classic strength programs following Gold's Gym's legendary bodybuilding philosophy.</p></div>
      <div class="card"><div class="card-icon">🔥</div><h3>Fat Burn & HIIT</h3><p>Science-backed cardio and HIIT for rapid, sustainable fat loss.</p></div>
      <div class="card"><div class="card-icon">⚡</div><h3>Powerlifting</h3><p>Squat, bench, deadlift — coached by certified powerlifting trainers.</p></div>
      <div class="card"><div class="card-icon">🧘</div><h3>Yoga & Recovery</h3><p>Flexibility, yoga and recovery sessions for complete wellness.</p></div>
      <div class="card"><div class="card-icon">🥗</div><h3>Nutrition Plans</h3><p>Custom meal and supplement plans to accelerate your transformation.</p></div>
      <div class="card"><div class="card-icon">🎯</div><h3>Personal Training</h3><p>1-on-1 sessions with dedicated Gold's Gym certified coaches.</p></div>
    </div>
  </div>
</section>
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat"><h3 class="counter" data-t="700">0</h3><p>Global Locations</p></div>
      <div class="stat"><h3 class="counter" data-t="50">0</h3><p>Years of Legacy</p></div>
      <div class="stat"><h3 class="counter" data-t="100">0</h3><p>Equipment Pieces</p></div>
      <div class="stat"><h3 class="counter" data-t="15">0</h3><p>Expert Trainers</p></div>
    </div>
  </div>
</section>` +
  pricingHtml(
    {name:'Monthly', price:'₹1,499', period:'per month', feats:['Full Gym Access','Locker Facility','Group Classes','Basic Diet Plan']},
    {name:'Quarterly', price:'₹3,999', period:'per 3 months', feats:['All Monthly Benefits','Personal Training 3x/week','Custom Nutrition Plan','Body Analysis','Supplement 10% Off']},
    {name:'Annual', price:'₹11,999', period:'per year', feats:['All Quarterly Benefits','Unlimited PT Sessions','Free Merchandise','Guest Passes 4/month','Priority Booking']}
  ) +
  testHtml(
    {q:"Gold's Gym Bhawarkuan is the real deal. Legendary equipment, serious coaching, and a community that keeps you motivated. Best gym in Indore!", n:'Vikash Singh', s:'Member since 2021'},
    {q:"Kaushal sir gave me the most thorough fitness assessment I've ever had. The personalised program helped me lose 20kg in 5 months. Incredible gym!", n:'Sunita Yadav', s:'Member since 2022'},
    {q:"Training at Gold's Gym feels different. The atmosphere, the equipment, the coaches — everything is top tier. Worth every rupee of the membership!", n:'Arjun Malhotra', s:'Member since 2023'}
  ) +
  contactHtml({
    opts:['Select Goal','Bodybuilding','Fat Loss','Powerlifting','General Fitness'],
    items:[
      {icon:'📍', label:'Address', val:'Bhawarkuan, Indore, Madhya Pradesh'},
      {icon:'📞', label:'Phone', val:'<a href="tel:+919294551118">+91 92945 51118</a>'},
      {icon:'👤', label:'Manager', val:'Kaushal Kishore Shukla'},
      {icon:'🕐', label:'Hours', val:'Mon-Sat: 5 AM – 10 PM | Sun: 6 AM – 8 PM'},
    ]
  }) +
  footerHtml('+919294551118', '919294551118', "Gold's Gym Bhawarkuan, Indore", '--a')
));

// 2. AKHADA RIGHT TRACK
write('akhada-right-track-vedam', page(
  "Akhada – The Right Track | Best Gym in LIG Indore",
  '#00d4aa', '#121212', '#1e1e1e', null,
  navHtml({logo: "AKHADA <span>RTT</span>", items:[['about','About'],['services','Training'],['pricing','Pricing'],['contact','Contact']]}) +
  `<section class="hero">
  <div class="hero-bg" style="background-image:url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=70')"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-badge">Best Gym in LIG, Indore</div>
    <h1>FIND YOUR <em>RIGHT TRACK</em></h1>
    <p>Akhada – The Right Track. Traditional fitness values meet modern training science in the heart of LIG, Indore.</p>
    <a href="#pricing" class="btn">Join Now</a>
    <a href="tel:+919111100683" class="btn btn-sec">Call Us</a>
  </div>
</section>
<section id="about">
  <div class="container about-grid">
    <div class="about-img">
      <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=700&q=80" alt="Akhada Gym LIG Indore">
      <div class="about-badge">LIG's<br>#1 Gym</div>
    </div>
    <div class="about-text">
      <h2>About <em>Akhada</em></h2>
      <p>Akhada – The Right Track blends the spirit of traditional Indian wrestling and fitness culture with cutting-edge modern training methods. We believe fitness is a way of life, not just a gym visit.</p>
      <p>Located in LIG, Indore, our gym is equipped with premium machines, free weights, and a dedicated functional training area. Our certified coaches will put you on the right track — no matter where you're starting from.</p>
      <div class="feats">
        <div class="feat"><strong>✓</strong> Modern Equipment</div>
        <div class="feat"><strong>✓</strong> Certified Coaches</div>
        <div class="feat"><strong>✓</strong> Diet Planning</div>
        <div class="feat"><strong>✓</strong> Combat Fitness</div>
      </div>
    </div>
  </div>
</section>
<section id="services" style="background:rgba(255,255,255,.015)">
  <div class="container">
    <h2 class="stitle">Training <span>Programs</span></h2>
    <p class="ssub">Structured programs for every fitness level and goal</p>
    <div class="grid">
      <div class="card"><div class="card-icon">🏋️</div><h3>Strength Training</h3><p>Build a powerful physique with structured progressive overload training.</p></div>
      <div class="card"><div class="card-icon">🏃</div><h3>Cardio & Endurance</h3><p>Improve stamina, burn fat, and boost cardiovascular health effectively.</p></div>
      <div class="card"><div class="card-icon">👊</div><h3>Combat Fitness</h3><p>Boxing and martial arts inspired workouts for explosive conditioning.</p></div>
      <div class="card"><div class="card-icon">⚡</div><h3>Functional Training</h3><p>Real-world strength and movement patterns for athletic performance.</p></div>
      <div class="card"><div class="card-icon">🥗</div><h3>Nutrition Coaching</h3><p>Personalized diet plans crafted to fuel your workouts and recovery.</p></div>
      <div class="card"><div class="card-icon">🎯</div><h3>Personal Training</h3><p>One-on-one coaching sessions tailored to your specific goals.</p></div>
    </div>
  </div>
</section>
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat"><h3 class="counter" data-t="500">0</h3><p>Active Members</p></div>
      <div class="stat"><h3 class="counter" data-t="5">0</h3><p>Years Running</p></div>
      <div class="stat"><h3 class="counter" data-t="80">0</h3><p>Equipment Pieces</p></div>
      <div class="stat"><h3 class="counter" data-t="8">0</h3><p>Certified Trainers</p></div>
    </div>
  </div>
</section>` +
  pricingHtml(
    {name:'Monthly', price:'₹899', period:'per month', feats:['Full Gym Access','Locker Facility','Group Classes','Basic Diet Plan']},
    {name:'Quarterly', price:'₹2,299', period:'per 3 months', feats:['All Monthly Benefits','Personal Training 2x/week','Custom Nutrition Plan','Progress Tracking']},
    {name:'Annual', price:'₹7,499', period:'per year', feats:['All Quarterly Benefits','Unlimited PT Sessions','Free Merchandise','Body Analysis Monthly']}
  ) +
  testHtml(
    {q:"Akhada is hands down the best gym in LIG. The coaches know their stuff and the atmosphere is incredibly motivating. I've made more progress here than anywhere else!", n:'Deepak Chouhan', s:'Member since 2020'},
    {q:"The combat fitness program at Akhada is unlike anything I've tried. It's tough, it's fun, and the results speak for themselves. Down 18kg in 6 months!", n:'Kavita Sharma', s:'Member since 2021'},
    {q:"Love the traditional approach combined with modern science here. The trainers genuinely care about your progress. Akhada truly puts you on the right track!", n:'Rahul Soni', s:'Member since 2022'}
  ) +
  contactHtml({
    opts:['Select Interest','Strength Training','Combat Fitness','Weight Loss','Cardio','Personal Training'],
    items:[
      {icon:'📍', label:'Address', val:'LIG, Indore, Madhya Pradesh'},
      {icon:'📞', label:'Phone', val:'<a href="tel:+919111100683">+91 91111 00683</a>'},
      {icon:'📧', label:'Email', val:'akhadatherighttrack@gmail.com'},
      {icon:'🕐', label:'Hours', val:'Mon-Sat: 5:30 AM – 10 PM'},
    ]
  }) +
  footerHtml('+919111100683', '919111100683', "Akhada – The Right Track, LIG Indore", '--a')
));

console.log('Gym batch done!');
