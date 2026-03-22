$b = "C:\Users\tripa\.openclaw\workspace\builds"

# ===== TEMPLATE FUNCTION =====
function Write-Site($slug, $html) {
    [System.IO.File]::WriteAllText("$b\$slug\index.html", $html, [System.Text.Encoding]::UTF8)
    Write-Host "✓ $slug"
}

# ===== ANYTIME FITNESS INDORE =====
Write-Site "anytime-fitness-indore-vedam" @'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Anytime Fitness Indore — Open 24/7 | India's #1 Gym Chain</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--red:#CC0000;--dark:#0f0f0f;--mid:#1a1a1a;--card:#222;--text:#e0e0e0}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;color:var(--text);background:var(--dark);overflow-x:hidden}
h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800}
section{padding:80px 5%}
.container{max-width:1200px;margin:0 auto}
.stitle{font-size:clamp(1.8rem,4vw,2.8rem);text-align:center;margin-bottom:.5rem;text-transform:uppercase}
.stitle span{color:var(--red)}
.ssub{text-align:center;color:#888;max-width:600px;margin:0 auto 3rem;font-size:.95rem;line-height:1.7}
nav{position:fixed;top:0;width:100%;z-index:1000;padding:14px 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(15,15,15,.85);backdrop-filter:blur(20px);border-bottom:2px solid var(--red);transition:.3s}
.logo{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.4rem;font-weight:800;color:#fff}
.logo span{color:var(--red)}
.nav-links{display:flex;gap:24px;list-style:none}
.nav-links a{color:#bbb;text-decoration:none;font-size:.88rem;font-weight:600;letter-spacing:.5px;transition:.3s}
.nav-links a:hover{color:var(--red)}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none}
.hamburger span{width:24px;height:2px;background:#fff;transition:.3s}
.mobile-menu{display:none;position:fixed;inset:0;background:rgba(15,15,15,.98);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:28px}
.mobile-menu.active{display:flex}
.mobile-menu a{color:#fff;font-size:1.3rem;text-decoration:none;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700}
.mobile-close{position:absolute;top:20px;right:20px;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer}
.hero{height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;background:radial-gradient(ellipse at center,#2a0000 0%,#0f0f0f 60%);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=70') center/cover;opacity:.15}
.hero-content{position:relative;z-index:2;padding:0 20px}
.hero-badge{display:inline-block;background:var(--red);color:#fff;font-size:.75rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:6px 18px;border-radius:20px;margin-bottom:20px}
.hero-content h1{font-size:clamp(2.8rem,8vw,5.5rem);color:#fff;line-height:1.1;margin-bottom:20px;text-transform:uppercase}
.hero-content h1 em{color:var(--red);font-style:normal;display:block}
.hero-content p{color:#bbb;font-size:1.1rem;max-width:520px;margin:0 auto 30px;line-height:1.7}
.btn{display:inline-block;padding:14px 36px;background:var(--red);color:#fff;text-decoration:none;font-weight:700;border-radius:4px;font-size:.95rem;transition:.3s;text-transform:uppercase;letter-spacing:1px;font-family:'Plus Jakarta Sans',sans-serif;border:2px solid var(--red)}
.btn:hover{background:transparent;color:var(--red)}
.btn-outline{background:transparent;border-color:#fff;color:#fff;margin-left:15px}
.btn-outline:hover{background:#fff;color:var(--dark)}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}
.about-img{position:relative;border-radius:12px;overflow:hidden}
.about-img img{width:100%;height:420px;object-fit:cover;border-radius:12px}
.about-badge{position:absolute;bottom:20px;right:20px;background:var(--red);color:#fff;padding:14px 20px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:1.1rem;border-radius:8px;text-align:center;line-height:1.2}
.about-text h2{font-size:2.2rem;margin-bottom:15px;text-transform:uppercase}
.about-text h2 span{color:var(--red)}
.about-text p{color:#aaa;line-height:1.85;margin-bottom:15px}
.features{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}
.feat{display:flex;align-items:center;gap:8px;background:rgba(204,0,0,.1);border:1px solid rgba(204,0,0,.3);border-radius:6px;padding:8px 14px;font-size:.85rem}
.feat span{color:var(--red);font-weight:700}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}
.card{background:var(--card);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:28px;transition:.3s;position:relative;overflow:hidden}
.card:hover{border-color:var(--red);transform:translateY(-4px);box-shadow:0 10px 40px rgba(204,0,0,.12)}
.card-icon{font-size:2rem;margin-bottom:14px}
.card h3{font-size:1.05rem;text-transform:uppercase;margin-bottom:8px}
.card p{color:#888;font-size:.88rem;line-height:1.6}
.stats-section{background:linear-gradient(135deg,var(--mid),var(--dark));border-top:3px solid var(--red);border-bottom:3px solid var(--red)}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center}
.stat h3{font-size:clamp(2rem,5vw,3.5rem);color:var(--red)}
.stat p{color:#888;font-size:.8rem;letter-spacing:2px;text-transform:uppercase;margin-top:6px}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.price-card{background:var(--card);border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:38px 28px;text-align:center;position:relative;transition:.3s}
.price-card:hover,.price-card.pop{border-color:var(--red);transform:translateY(-5px)}
.price-card.pop::before{content:'POPULAR';position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--red);color:#fff;padding:5px 18px;border-radius:20px;font-size:.72rem;font-weight:700;letter-spacing:1px}
.price-card h3{font-size:1.2rem;text-transform:uppercase;margin-bottom:10px}
.amount{font-size:3rem;font-weight:800;color:var(--red);font-family:'Plus Jakarta Sans',sans-serif}
.period{color:#777;font-size:.88rem;margin-bottom:22px}
.price-card ul{list-style:none;margin-bottom:25px;text-align:left}
.price-card li{padding:8px 0;color:#aaa;font-size:.88rem;border-bottom:1px solid rgba(255,255,255,.04)}
.price-card li::before{content:'✓ ';color:var(--red);font-weight:700}
.testimonials-section{background:rgba(255,255,255,.01)}
.test-slider{max-width:700px;margin:0 auto;position:relative;overflow:hidden}
.test-track{display:flex;transition:transform .5s ease}
.test-item{min-width:100%;padding:40px;text-align:center}
.test-item blockquote{font-size:1.05rem;line-height:1.9;color:#ccc;font-style:italic;margin-bottom:20px}
.test-item cite{color:var(--red);font-style:normal;font-weight:700}
.test-item small{display:block;color:#777;margin-top:4px;font-size:.82rem}
.test-nav{display:flex;justify-content:center;gap:10px;margin-top:20px}
.test-dot{width:10px;height:10px;border-radius:50%;border:none;background:rgba(255,255,255,.2);cursor:pointer;transition:.3s}
.test-dot.active{background:var(--red)}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px}
.contact-form input,.contact-form textarea,.contact-form select{width:100%;padding:14px 16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#fff;font-family:'Inter',sans-serif;font-size:.92rem;margin-bottom:14px;transition:.3s}
.contact-form input:focus,.contact-form textarea:focus{outline:none;border-color:var(--red)}
.contact-form textarea{height:110px;resize:vertical}
.cinfo{display:flex;flex-direction:column;gap:18px}
.cinfo-item{display:flex;gap:14px;align-items:flex-start}
.cinfo-icon{width:44px;height:44px;background:var(--red);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
.cinfo-item h4{font-size:.9rem;margin-bottom:3px}
.cinfo-item p{color:#888;font-size:.86rem}
.cinfo-item a{color:#ccc;text-decoration:none}
.map{margin-top:18px;border-radius:12px;overflow:hidden;height:220px}
.map iframe{width:100%;height:100%;border:0}
footer{background:#0a0a0a;padding:35px 5%;text-align:center;border-top:1px solid rgba(255,255,255,.05)}
.social-links{display:flex;gap:14px;justify-content:center;margin-bottom:14px}
.social-links a{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:#ccc;text-decoration:none;transition:.3s;font-size:1rem}
.social-links a:hover{border-color:var(--red);color:var(--red)}
footer p{color:#555;font-size:.82rem}
.wa{position:fixed;bottom:25px;right:25px;width:58px;height:58px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:998;box-shadow:0 4px 20px rgba(37,211,102,.4);transition:transform .3s;text-decoration:none;font-size:1.7rem}
.wa:hover{transform:scale(1.1)}
@media(max-width:1024px){.pricing-grid{grid-template-columns:1fr}.stats-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:768px){.nav-links{display:none}.hamburger{display:flex}.about-grid,.contact-grid{grid-template-columns:1fr}.hero-content h1{font-size:2.8rem}.stats-grid{grid-template-columns:repeat(2,1fr)}}
</style>
</head>
<body>
<nav id="nav">
  <div class="logo">ANYTIME <span>FITNESS</span></div>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="hamburger" onclick="document.querySelector('.mobile-menu').classList.add('active')"><span></span><span></span><span></span></button>
</nav>
<div class="mobile-menu">
  <button class="mobile-close" onclick="this.parentElement.classList.remove('active')">✕</button>
  <a href="#about" onclick="this.parentElement.classList.remove('active')">About</a>
  <a href="#services" onclick="this.parentElement.classList.remove('active')">Services</a>
  <a href="#pricing" onclick="this.parentElement.classList.remove('active')">Pricing</a>
  <a href="#contact" onclick="this.parentElement.classList.remove('active')">Contact</a>
</div>

<section class="hero">
  <div class="hero-content">
    <div class="hero-badge">Open 24 Hours — 7 Days a Week</div>
    <h1>YOUR TIME, <em>YOUR GYM</em></h1>
    <p>Anytime Fitness Indore — the gym that fits your schedule. World-class equipment, expert trainers, and a welcoming community.</p>
    <a href="#pricing" class="btn">Join Now</a>
    <a href="tel:+918062689019" class="btn btn-outline">Call Us</a>
  </div>
</section>

<section id="about">
  <div class="container about-grid">
    <div class="about-img">
      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80" alt="Anytime Fitness Indore">
      <div class="about-badge">24/7<br>Access</div>
    </div>
    <div class="about-text">
      <h2>About <span>Anytime Fitness</span></h2>
      <p>Anytime Fitness is the world's largest gym chain with 5,000+ locations globally. Our Indore club brings you the same premium experience — state-of-the-art equipment, friendly trainers, and a safe, welcoming environment.</p>
      <p>No matter your goal — weight loss, muscle gain, or general wellness — our certified coaches will guide you every step of the way. With 24/7 access, you work out when it suits you.</p>
      <div class="features">
        <div class="feat"><span>✓</span> 24/7 Access</div>
        <div class="feat"><span>✓</span> Certified Trainers</div>
        <div class="feat"><span>✓</span> Modern Equipment</div>
        <div class="feat"><span>✓</span> Tanning & Cardio</div>
        <div class="feat"><span>✓</span> Worldwide Access</div>
      </div>
    </div>
  </div>
</section>

<section id="services" style="background:rgba(255,255,255,.015)">
  <div class="container">
    <h2 class="stitle">Our <span>Services</span></h2>
    <p class="ssub">Everything you need for a complete fitness transformation</p>
    <div class="grid">
      <div class="card"><div class="card-icon">🏋️</div><h3>Strength Training</h3><p>Full range of free weights, cable machines, and resistance equipment for all levels.</p></div>
      <div class="card"><div class="card-icon">❤️‍🔥</div><h3>Cardio Zone</h3><p>Treadmills, ellipticals, stationary bikes, and rowing machines for endurance.</p></div>
      <div class="card"><div class="card-icon">🧘</div><h3>Stretch & Yoga</h3><p>Dedicated stretching area and scheduled yoga sessions for flexibility and recovery.</p></div>
      <div class="card"><div class="card-icon">🎯</div><h3>Personal Training</h3><p>One-on-one coaching with certified personal trainers for maximum results.</p></div>
      <div class="card"><div class="card-icon">💊</div><h3>Nutrition Coaching</h3><p>Expert guidance on diet and supplements to complement your training.</p></div>
      <div class="card"><div class="card-icon">📱</div><h3>App & Tracking</h3><p>Access the Anytime Fitness app for workout plans, progress tracking and club access.</p></div>
    </div>
  </div>
</section>

<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat"><h3 class="counter" data-t="5000">0</h3><p>Locations Worldwide</p></div>
      <div class="stat"><h3 class="counter" data-t="3000000">0</h3><p>Global Members</p></div>
      <div class="stat"><h3 class="counter" data-t="24">0</h3><p>Hours Access Daily</p></div>
      <div class="stat"><h3 class="counter" data-t="100">0</h3><p>Equipment Pieces</p></div>
    </div>
  </div>
</section>

<section id="pricing">
  <div class="container">
    <h2 class="stitle">Membership <span>Plans</span></h2>
    <p class="ssub">Flexible plans to suit every lifestyle and budget</p>
    <div class="pricing-grid">
      <div class="price-card">
        <h3>Monthly</h3>
        <div class="amount">₹1,299</div>
        <div class="period">per month</div>
        <ul>
          <li>Full Gym Access</li>
          <li>24/7 Entry</li>
          <li>Locker Facility</li>
          <li>Basic Fitness Assessment</li>
        </ul>
        <a href="#contact" class="btn" style="width:100%;text-align:center">Get Started</a>
      </div>
      <div class="price-card pop">
        <h3>Quarterly</h3>
        <div class="amount">₹3,299</div>
        <div class="period">per 3 months</div>
        <ul>
          <li>Everything in Monthly</li>
          <li>2 Personal Training Sessions</li>
          <li>Nutrition Plan</li>
          <li>Body Composition Analysis</li>
          <li>Worldwide Club Access</li>
        </ul>
        <a href="#contact" class="btn" style="width:100%;text-align:center">Get Started</a>
      </div>
      <div class="price-card">
        <h3>Annual</h3>
        <div class="amount">₹9,999</div>
        <div class="period">per year</div>
        <ul>
          <li>Everything in Quarterly</li>
          <li>Unlimited Personal Training</li>
          <li>Monthly Body Check-ins</li>
          <li>Free Merchandise</li>
          <li>Priority Booking</li>
        </ul>
        <a href="#contact" class="btn" style="width:100%;text-align:center">Get Started</a>
      </div>
    </div>
  </div>
</section>

<section class="testimonials-section">
  <div class="container">
    <h2 class="stitle">Member <span>Stories</span></h2>
    <div class="test-slider">
      <div class="test-track">
        <div class="test-item"><blockquote>"Anytime Fitness changed my life. The 24/7 access means I can work out after late-night shifts. Lost 18kg in 8 months with amazing trainer support!"</blockquote><cite>Rohan Mehta</cite><small>Member since 2022</small></div>
        <div class="test-item"><blockquote>"Best gym in Indore. The equipment is always clean, trainers are certified and actually care about your progress. Highly recommend the quarterly plan!"</blockquote><cite>Divya Sharma</cite><small>Member since 2021</small></div>
        <div class="test-item"><blockquote>"I travel a lot and having worldwide club access means I never miss a workout. The Indore club is fantastic — helpful staff and great atmosphere."</blockquote><cite>Ajay Verma</cite><small>Member since 2023</small></div>
      </div>
      <div class="test-nav">
        <button class="test-dot active" onclick="goT(0)"></button>
        <button class="test-dot" onclick="goT(1)"></button>
        <button class="test-dot" onclick="goT(2)"></button>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <h2 class="stitle">Get In <span>Touch</span></h2>
    <p class="ssub">Start your fitness journey today — reach out and we'll guide you</p>
    <div class="contact-grid">
      <form class="contact-form" onsubmit="event.preventDefault();alert('Thanks! We will contact you soon.')">
        <input type="text" placeholder="Your Name" required>
        <input type="tel" placeholder="Phone Number" required>
        <input type="email" placeholder="Email Address">
        <select><option>Select Goal</option><option>Weight Loss</option><option>Muscle Gain</option><option>General Fitness</option><option>Sports Performance</option></select>
        <textarea placeholder="Tell us about your goals..."></textarea>
        <button type="submit" class="btn" style="width:100%;cursor:pointer">Send Message</button>
      </form>
      <div>
        <div class="cinfo">
          <div class="cinfo-item"><div class="cinfo-icon">📍</div><div><h4>Location</h4><p>Indore, Madhya Pradesh</p></div></div>
          <div class="cinfo-item"><div class="cinfo-icon">📞</div><div><h4>Phone</h4><p><a href="tel:+918062689019">+91 80626 89019</a></p></div></div>
          <div class="cinfo-item"><div class="cinfo-icon">🕐</div><div><h4>Hours</h4><p>Open 24 Hours, 7 Days a Week</p></div></div>
          <div class="cinfo-item"><div class="cinfo-icon">🌐</div><div><h4>Network</h4><p>5,000+ Clubs Worldwide</p></div></div>
        </div>
        <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.35!2d75.7!3d22.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C+MP!5e0!3m2!1sen!2sin!4v1" allowfullscreen loading="lazy"></iframe></div>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="social-links">
    <a href="tel:+918062689019">📞</a>
    <a href="https://wa.me/918062689019">💬</a>
  </div>
  <p>© 2026 Anytime Fitness Indore. All rights reserved. | Powered by <strong style="color:var(--red)">VEDAM</strong></p>
</footer>
<a href="https://wa.me/918062689019" class="wa">💬</a>

<script>
let tIdx=0;const tTrack=document.querySelector('.test-track'),tDots=document.querySelectorAll('.test-dot');
function goT(n){tIdx=n;tTrack.style.transform=`translateX(-${n*100}%)`;tDots.forEach(d=>d.classList.remove('active'));tDots[n].classList.add('active')}
setInterval(()=>goT((tIdx+1)%3),4500);
const counters=document.querySelectorAll('.counter');
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const el=e.target,t=+el.dataset.t,d=2000,s=performance.now();const run=now=>{const p=Math.min((now-s)/d,1);el.textContent=Math.floor(p*t).toLocaleString()+'+';if(p<1)requestAnimationFrame(run)};requestAnimationFrame(run);obs.unobserve(el)}})},{threshold:.5});
counters.forEach(c=>obs.observe(c));
window.addEventListener('scroll',()=>document.getElementById('nav').style.background=scrollY>50?'rgba(15,15,15,.98)':'rgba(15,15,15,.85)');
</script>
</body>
</html>
'@

# ===== GOLD'S GYM VIJAYNAGAR =====
Write-Site "golds-gym-vijaynagar-vedam" @'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gold's Gym Vijaynagar Indore — The Birthplace of Fitness</title>
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--gold:#FFB800;--dark:#0a0a0a;--mid:#141414;--card:#1e1e1e}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;color:#e0e0e0;background:var(--dark);overflow-x:hidden}
h1,h2,h3{font-family:'Black Han Sans',sans-serif;letter-spacing:2px}
section{padding:80px 5%}
.container{max-width:1200px;margin:0 auto}
.stitle{font-size:clamp(1.8rem,4vw,2.8rem);text-align:center;margin-bottom:.5rem}
.stitle span{color:var(--gold)}
.ssub{text-align:center;color:#777;max-width:600px;margin:0 auto 3rem;font-size:.92rem;line-height:1.7}
nav{position:fixed;top:0;width:100%;z-index:1000;padding:14px 5%;display:flex;justify-content:space-between;align-items:center;background:rgba(10,10,10,.9);backdrop-filter:blur(20px);border-bottom:3px solid var(--gold)}
.logo{font-family:'Black Han Sans',sans-serif;font-size:1.5rem;color:var(--gold);letter-spacing:4px}
.nav-links{display:flex;gap:24px;list-style:none}
.nav-links a{color:#bbb;text-decoration:none;font-size:.88rem;font-weight:600;transition:.3s}
.nav-links a:hover{color:var(--gold)}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none}
.hamburger span{width:24px;height:2px;background:#fff}
.mobile-menu{display:none;position:fixed;inset:0;background:rgba(10,10,10,.98);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:28px}
.mobile-menu.active{display:flex}
.mobile-menu a{color:#fff;font-size:1.3rem;text-decoration:none;font-family:'Black Han Sans',sans-serif}
.mobile-close{position:absolute;top:20px;right:20px;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer}
.hero{height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=70') center/cover;opacity:.18}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,10,10,.7),rgba(10,10,10,.85))}
.hero-content{position:relative;z-index:2;padding:0 20px}
.hero-content h1{font-size:clamp(3rem,9vw,6.5rem);color:#fff;line-height:1;margin-bottom:15px}
.hero-content h1 em{color:var(--gold);font-style:normal}
.hero-content p{color:#bbb;font-size:1.1rem;margin-bottom:30px;max-width:500px;margin-left:auto;margin-right:auto}
.btn{display:inline-block;padding:14px 36px;background:var(--gold);color:#000;text-decoration:none;font-weight:800;border-radius:3px;font-size:.9rem;transition:.3s;text-transform:uppercase;letter-spacing:2px;font-family:'Black Han Sans',sans-serif;border:2px solid var(--gold)}
.btn:hover{background:transparent;color:var(--gold)}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}
.about-img img{width:100%;height:420px;object-fit:cover;border-radius:10px}
.about-text h2{font-size:2.2rem;margin-bottom:15px}
.about-text h2 em{color:var(--gold);font-style:normal}
.about-text p{color:#aaa;line-height:1.85;margin-bottom:15px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}
.card{background:var(--card);border:1px solid rgba(255,255,255,.05);border-radius:10px;padding:28px;transition:.3s}
.card:hover{border-color:var(--gold);transform:translateY(-4px)}
.card-icon{font-size:2rem;margin-bottom:14px}
.card h3{font-size:1rem;margin-bottom:8px}
.card p{color:#777;font-size:.87rem;line-height:1.6}
.stats-section{background:var(--mid);border-top:3px solid var(--gold);border-bottom:3px solid var(--gold)}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;text-align:center}
.stat h3{font-size:clamp(2.2rem,5vw,3.5rem);color:var(--gold)}
.stat p{color:#777;font-size:.78rem;letter-spacing:2px;text-transform:uppercase;margin-top:6px}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.price-card{background:var(--card);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:36px 26px;text-align:center;position:relative;transition:.3s}
.price-card:hover,.price-card.pop{border-color:var(--gold);transform:translateY(-5px)}
.price-card.pop::before{content:'POPULAR';position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--gold);color:#000;padding:5px 18px;border-radius:20px;font-size:.72rem;font-weight:800}
.price-card h3{font-size:1.1rem;margin-bottom:10px}
.amount{font-size:2.8rem;color:var(--gold);font-family:'Black Han Sans',sans-serif}
.period{color:#666;font-size:.86rem;margin-bottom:20px}
.price-card ul{list-style:none;margin-bottom:24px;text-align:left}
.price-card li{padding:7px 0;color:#aaa;font-size:.86rem;border-bottom:1px solid rgba(255,255,255,.04)}
.price-card li::before{content:'★ ';color:var(--gold)}
.test-section{background:rgba(255,255,255,.01)}
.test-slider{max-width:680px;margin:0 auto;overflow:hidden}
.test-track{display:flex;transition:transform .5s}
.test-item{min-width:100%;padding:36px;text-align:center}
.test-item blockquote{font-size:1rem;line-height:1.9;color:#bbb;font-style:italic;margin-bottom:18px}
.test-item cite{color:var(--gold);font-style:normal;font-weight:700}
.test-nav{display:flex;justify-content:center;gap:10px;margin-top:16px}
.test-dot{width:10px;height:10px;border-radius:50%;border:none;background:rgba(255,255,255,.2);cursor:pointer;transition:.3s}
.test-dot.active{background:var(--gold)}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px}
.contact-form input,.contact-form textarea,.contact-form select{width:100%;padding:13px 16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:7px;color:#fff;font-family:'Inter',sans-serif;font-size:.9rem;margin-bottom:12px;transition:.3s}
.contact-form input:focus,.contact-form textarea:focus{outline:none;border-color:var(--gold)}
.contact-form textarea{height:110px;resize:vertical}
.cinfo{display:flex;flex-direction:column;gap:16px}
.cinfo-item{display:flex;gap:14px;align-items:flex-start}
.cinfo-icon{width:42px;height:42px;background:var(--gold);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
.cinfo-item h4{font-size:.88rem;margin-bottom:2px;color:#fff}
.cinfo-item p,.cinfo-item a{color:#888;font-size:.85rem;text-decoration:none}
.map{margin-top:16px;border-radius:10px;overflow:hidden;height:210px}
.map iframe{width:100%;height:100%;border:0}
footer{background:#060606;padding:30px 5%;text-align:center;border-top:1px solid rgba(255,255,255,.05)}
footer p{color:#444;font-size:.8rem}
.social-links{display:flex;gap:12px;justify-content:center;margin-bottom:12px}
.social-links a{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:#bbb;text-decoration:none;transition:.3s}
.social-links a:hover{border-color:var(--gold);color:var(--gold)}
.wa{position:fixed;bottom:25px;right:25px;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;z-index:998;box-shadow:0 4px 20px rgba(37,211,102,.4);transition:transform .3s;text-decoration:none;font-size:1.6rem}
.wa:hover{transform:scale(1.1)}
@media(max-width:1024px){.pricing-grid{grid-template-columns:1fr}.stats-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:768px){.nav-links{display:none}.hamburger{display:flex}.about-grid,.contact-grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<nav>
  <div class="logo">GOLD'S GYM</div>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="hamburger" onclick="document.querySelector('.mobile-menu').classList.add('active')"><span></span><span></span><span></span></button>
</nav>
<div class="mobile-menu">
  <button class="mobile-close" onclick="this.parentElement.classList.remove('active')">✕</button>
  <a href="#about" onclick="this.parentElement.classList.remove('active')">About</a>
  <a href="#services" onclick="this.parentElement.classList.remove('active')">Services</a>
  <a href="#pricing" onclick="this.parentElement.classList.remove('active')">Pricing</a>
  <a href="#contact" onclick="this.parentElement.classList.remove('active')">Contact</a>
</div>
<section class="hero">
  <div class="hero-content">
    <h1>THE BIRTHPLACE<br>OF <em>FITNESS</em></h1>
    <p>Gold's Gym Vijaynagar — Indore's legendary fitness destination with world-class equipment and expert coaching.</p>
    <a href="#pricing" class="btn">Join Now</a>
  </div>
</section>
<section id="about" style="background:var(--mid)">
  <div class="container about-grid">
    <div class="about-img"><img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80" alt="Gold's Gym Indore"></div>
    <div class="about-text">
      <h2>GOLD'S GYM <em>VIJAYNAGAR</em></h2>
      <p>The Gold's Gym legacy comes to life in Vijaynagar, Indore. Since our establishment, we have been the go-to fitness destination for those who are serious about their health and physique.</p>
      <p>Our gym features premium equipment, expert certified trainers, and a motivating environment where champions are made every day. Whether you're a beginner or a seasoned athlete, Gold's Gym Vijaynagar has everything you need.</p>
      <a href="tel:+919993834111" class="btn" style="margin-top:18px">📞 +91 99938 34111</a>
    </div>
  </div>
</section>
<section id="services">
  <div class="container">
    <h2 class="stitle">OUR <span>PROGRAMS</span></h2>
    <p class="ssub">World-class fitness programs designed to deliver results</p>
    <div class="grid">
      <div class="card"><div class="card-icon">💪</div><h3>BODYBUILDING</h3><p>Classic bodybuilding programs with Gold's Gym legendary expertise.</p></div>
      <div class="card"><div class="card-icon">🔥</div><h3>FAT LOSS</h3><p>Science-backed cardio and HIIT programs for rapid fat burning.</p></div>
      <div class="card"><div class="card-icon">⚡</div><h3>POWERLIFTING</h3><p>Dedicated powerlifting coaching for squat, bench and deadlift.</p></div>
      <div class="card"><div class="card-icon">🥊</div><h3>FUNCTIONAL</h3><p>Functional training for athletic performance and daily strength.</p></div>
      <div class="card"><div class="card-icon">🧘</div><h3>YOGA & FLEX</h3><p>Flexibility and yoga classes for recovery and mental wellness.</p></div>
      <div class="card"><div class="card-icon">🎯</div><h3>PERSONAL TRAINING</h3><p>1-on-1 sessions with certified Gold's Gym trainers.</p></div>
    </div>
  </div>
</section>
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat"><h3 class="counter" data-t="700">0</h3><p>Global Locations</p></div>
      <div class="stat"><h3 class="counter" data-t="50">0</h3><p>Years Legacy</p></div>
      <div class="stat"><h3 class="counter" data-t="100">0</h3><p>Equipment Pieces</p></div>
      <div class="stat"><h3 class="counter" data-t="15">0</h3><p>Expert Trainers</p></div>
    </div>
  </div>
</section>
<section id="pricing" style="background:var(--mid)">
  <div class="container">
    <h2 class="stitle">MEMBERSHIP <span>PLANS</span></h2>
    <p class="ssub">Invest in your fitness with our flexible membership options</p>
    <div class="pricing-grid">
      <div class="price-card"><h3>MONTHLY</h3><div class="amount">₹1,499</div><div class="period">per month</div><ul><li>Full Gym Access</li><li>Locker & Shower</li><li>Group Classes</li><li>Diet Consultation</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center">Enroll Now</a></div>
      <div class="price-card pop"><h3>QUARTERLY</h3><div class="amount">₹3,999</div><div class="period">per 3 months</div><ul><li>All Monthly Benefits</li><li>Personal Training (3x/wk)</li><li>Custom Nutrition Plan</li><li>Body Analysis Monthly</li><li>Supplement Discount 10%</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center">Enroll Now</a></div>
      <div class="price-card"><h3>ANNUAL</h3><div class="amount">₹11,999</div><div class="period">per year</div><ul><li>All Quarterly Benefits</li><li>Unlimited PT Sessions</li><li>Free Gold's Merchandise</li><li>Guest Passes (4/month)</li><li>Priority Class Booking</li></ul><a href="#contact" class="btn" style="width:100%;text-align:center">Enroll Now</a></div>
    </div>
  </div>
</section>
<section class="test-section">
  <div class="container">
    <h2 class="stitle">MEMBER <span>REVIEWS</span></h2>
    <div class="test-slider">
      <div class="test-track">
        <div class="test-item"><blockquote>"Gold's Gym Vijaynagar is truly world-class. The equipment quality, the trainers' knowledge, and the atmosphere push you to give your best every single day."</blockquote><cite>Siddharth Jain</cite></div>
        <div class="test-item"><blockquote>"I've trained at gyms across India but Gold's Gym Indore stands apart. The legacy, the culture, and the results speak for themselves. Best investment I made."</blockquote><cite>Pooja Tiwari</cite></div>
        <div class="test-item"><blockquote>"Lost 22kg in 7 months at Gold's Gym Vijaynagar. The trainers design personalized plans and keep you accountable. Can't recommend it enough!"</blockquote><cite>Manish Patel</cite></div>
      </div>
      <div class="test-nav">
        <button class="test-dot active" onclick="goT(0)"></button>
        <button class="test-dot" onclick="goT(1)"></button>
        <button class="test-dot" onclick="goT(2)"></button>
      </div>
    </div>
  </div>
</section>
<section id="contact" style="background:var(--mid)">
  <div class="container">
    <h2 class="stitle">CONTACT <span>US</span></h2>
    <p class="ssub">Ready to start your Gold's Gym journey? Get in touch today.</p>
    <div class="contact-grid">
      <form class="contact-form" onsubmit="event.preventDefault();alert('Thank you! We will call you shortly.')">
        <input type="text" placeholder="Your Name" required>
        <input type="tel" placeholder="Phone Number" required>
        <input type="email" placeholder="Email Address">
        <select><option>Select Goal</option><option>Bodybuilding</option><option>Fat Loss</option><option>Powerlifting</option><option>General Fitness</option></select>
        <textarea placeholder="Your message..."></textarea>
        <button type="submit" class="btn" style="width:100%;cursor:pointer">SEND MESSAGE</button>
      </form>
      <div>
        <div class="cinfo">
          <div class="cinfo-item"><div class="cinfo-icon">📍</div><div><h4>Address</h4><p>Vijaynagar, Indore, Madhya Pradesh</p></div></div>
          <div class="cinfo-item"><div class="cinfo-icon">📞</div><div><h4>Phone</h4><p><a href="tel:+919993834111">+91 99938 34111</a></p></div></div>
          <div class="cinfo-item"><div class="cinfo-icon">🕐</div><div><h4>Hours</h4><p>Mon-Sat: 5 AM – 10 PM<br>Sun: 6 AM – 8 PM</p></div></div>
        </div>
        <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.35!2d75.88!3d22.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sVijaynagar%2C+Indore!5e0!3m2!1sen!2sin!4v1" allowfullscreen loading="lazy"></iframe></div>
      </div>
    </div>
  </div>
</section>
<footer>
  <div class="social-links"><a href="tel:+919993834111">📞</a><a href="https://wa.me/919993834111">💬</a></div>
  <p>© 2026 Gold's Gym Vijaynagar, Indore. All rights reserved. | Powered by <strong style="color:var(--gold)">VEDAM</strong></p>
</footer>
<a href="https://wa.me/919993834111" class="wa">💬</a>
<script>
let tIdx=0;const tTrack=document.querySelector('.test-track'),tDots=document.querySelectorAll('.test-dot');
function goT(n){tIdx=n;tTrack.style.transform=`translateX(-${n*100}%)`;tDots.forEach(d=>d.classList.remove('active'));tDots[n].classList.add('active')}
setInterval(()=>goT((tIdx+1)%3),4500);
const counters=document.querySelectorAll('.counter');
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const el=e.target,t=+el.dataset.t,s=performance.now();const run=now=>{const p=Math.min((now-s)/2000,1);el.textContent=Math.floor(p*t).toLocaleString()+'+';if(p<1)requestAnimationFrame(run)};requestAnimationFrame(run);obs.unobserve(el)}})},{threshold:.5});
counters.forEach(c=>obs.observe(c));
</script>
</body>
</html>
'@

Write-Host "Gyms batch 1 complete"
