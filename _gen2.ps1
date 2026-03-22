$b = "C:\Users\tripa\.openclaw\workspace\builds"

# Helper function
function html($path, $content) {
    [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
}

# --- FASHIONISTA BEAUTY SALON ---
html "$b\fashionista-beauty-salon-vedam\index.html" '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Fashionista Beauty Salon Indore</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Montserrat",sans-serif;background:#1a0a12;color:#fff}
:root{--a:#e8a0c0;--g:linear-gradient(135deg,#1a0a12,#2d0e22,#1a0a12)}
header{position:fixed;top:0;width:100%;z-index:100;background:rgba(26,10,18,.95);padding:16px 30px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(232,160,192,.3)}
.logo{font-family:"Cormorant Garamond",serif;font-size:1.7rem;color:var(--a);letter-spacing:3px}
nav a{color:#ccc;text-decoration:none;margin-left:20px;font-size:.85rem;letter-spacing:1px;transition:.3s}nav a:hover{color:var(--a)}
@media(max-width:768px){nav{display:none}}
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px;background:var(--g)}
.hero h1{font-family:"Cormorant Garamond",serif;font-size:clamp(2.5rem,8vw,5.5rem);font-weight:700;line-height:1.15;margin-bottom:20px;background:linear-gradient(135deg,#fff,var(--a));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{color:#ddd;font-size:.95rem;letter-spacing:3px;text-transform:uppercase;margin-bottom:35px}
.btn{display:inline-block;padding:13px 36px;border:1px solid var(--a);color:var(--a);text-decoration:none;letter-spacing:3px;font-size:.8rem;text-transform:uppercase;border-radius:30px;transition:.3s}
.btn:hover{background:var(--a);color:#1a0a12}
section{padding:75px 20px}.container{max-width:1000px;margin:0 auto}
.stitle{font-family:"Cormorant Garamond",serif;font-size:2.2rem;color:var(--a);text-align:center;margin-bottom:40px}
.about{background:rgba(255,255,255,.03)}.about p{color:#ccc;line-height:1.9;max-width:680px;margin:0 auto 15px;text-align:center}
.services .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}
.card{background:rgba(232,160,192,.07);padding:28px;border-radius:10px;text-align:center;border:1px solid rgba(232,160,192,.2);transition:.3s}
.card:hover{background:rgba(232,160,192,.13);transform:translateY(-4px)}
.card .ic{font-size:2.2rem;margin-bottom:12px}.card h3{font-family:"Cormorant Garamond",serif;font-size:1.2rem;color:var(--a);margin-bottom:8px}.card p{color:#aaa;font-size:.85rem}
.contact{background:rgba(255,255,255,.03)}.cinfo{text-align:center}.cinfo p{color:#ccc;margin:10px 0}.cinfo a{color:var(--a);text-decoration:none}
footer{background:#0d0509;text-align:center;padding:22px;color:#666;font-size:.8rem}
.wa{position:fixed;bottom:25px;right:25px;z-index:999;background:#25D366;color:#fff;width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.6rem;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,.4);animation:fl 3s ease-in-out infinite}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}</style></head>
<body>
<header><div class="logo">Fashionista</div><nav><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav></header>
<section class="hero"><div>
<h1>Beauty is an<br>Art Form</h1><p>✦ Fashionista Beauty Salon — Indore ✦</p>
<a href="tel:+918959633244" class="btn">Book Now</a></div></section>
<section class="about" id="about"><div class="container"><div class="stitle">Our Story</div>
<p>Fashionista Beauty Salon at Address 59 in Indore brings you the finest in beauty and grooming. Our skilled stylists stay updated with the latest global trends to keep you looking fabulous.</p></div></section>
<section class="services" id="services"><div class="container"><div class="stitle">Services</div><div class="grid">
<div class="card"><div class="ic">💇‍♀️</div><h3>Hair Styling</h3><p>Cuts, color, treatments & more</p></div>
<div class="card"><div class="ic">✨</div><h3>Skin Treatments</h3><p>Facials, cleanup & brightening</p></div>
<div class="card"><div class="ic">💄</div><h3>Party Makeup</h3><p>Glamorous looks for every event</p></div>
<div class="card"><div class="ic">💅</div><h3>Nail Art</h3><p>Creative nail designs & extensions</p></div>
</div></div></section>
<section class="contact" id="contact"><div class="container"><div class="stitle">Contact</div>
<div class="cinfo"><p>📍 Address 59, Indore, MP</p><p>📞 <a href="tel:+918959633244">+91 89596 33244</a></p>
<a href="https://wa.me/918959633244" class="btn" style="margin-top:20px;display:inline-block">WhatsApp Us</a></div></div></section>
<footer>© 2025 Fashionista Beauty Salon, Indore | Powered by <strong style="color:var(--a)">VEDAM</strong></footer>
<a href="https://wa.me/918959633244" class="wa">💬</a>
</body></html>'

# --- JABALPUR SALON INDORE ---
html "$b\jabalpur-salon-indore-vedam\index.html" '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>JabalpurSalon Indore</title>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;600;700&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Josefin Sans",sans-serif;background:#fff5f8;color:#2d1b25}
:root{--a:#d4547a;--l:#fff5f8;--d:#2d1b25}
header{position:fixed;top:0;width:100%;z-index:100;background:rgba(255,245,248,.97);padding:15px 30px;display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid var(--a)}
.logo{font-size:1.6rem;font-weight:700;color:var(--d);letter-spacing:4px}
.logo span{color:var(--a)}
nav a{color:#888;text-decoration:none;margin-left:20px;font-size:.85rem;letter-spacing:2px;transition:.3s}nav a:hover{color:var(--a)}
@media(max-width:768px){nav{display:none}}
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px;background:linear-gradient(160deg,#fff5f8 40%,#ffe0ec)}
.hero h1{font-size:clamp(2.8rem,8vw,5.5rem);font-weight:700;letter-spacing:2px;line-height:1.1;margin-bottom:20px;color:var(--d)}
.hero h1 span{color:var(--a)}
.hero p{color:#999;font-size:.9rem;letter-spacing:4px;text-transform:uppercase;margin-bottom:35px}
.btn{display:inline-block;padding:14px 40px;background:var(--a);color:#fff;text-decoration:none;font-weight:700;letter-spacing:3px;font-size:.8rem;text-transform:uppercase;border-radius:0;transition:.3s}
.btn:hover{background:#b83e62;transform:translateY(-2px)}
section{padding:75px 20px}.container{max-width:1000px;margin:0 auto}
.stitle{font-size:2rem;font-weight:700;color:var(--d);text-align:center;letter-spacing:3px;text-transform:uppercase;margin-bottom:40px}
.about{background:#fff}.about p{color:#777;line-height:1.9;max-width:680px;margin:0 auto 15px;text-align:center}
.services{background:var(--l)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}
.card{background:#fff;padding:28px;text-align:center;box-shadow:0 2px 20px rgba(212,84,122,.1);transition:.3s}
.card:hover{transform:translateY(-5px);box-shadow:0 10px 30px rgba(212,84,122,.2)}
.card .ic{font-size:2.2rem;margin-bottom:12px}.card h3{font-size:1rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px}.card p{color:#888;font-size:.85rem}
.contact{background:#fff}.cinfo{text-align:center}.cinfo p{color:#777;margin:10px 0}.cinfo a{color:var(--a);text-decoration:none;font-weight:700}
footer{background:var(--d);text-align:center;padding:22px;color:#aaa;font-size:.8rem}
.wa{position:fixed;bottom:25px;right:25px;z-index:999;background:#25D366;color:#fff;width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.6rem;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,.4);animation:fl 3s ease-in-out infinite}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}</style></head>
<body>
<header><div class="logo">JABALPUR<span>SALON</span></div><nav><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav></header>
<section class="hero"><div>
<h1>STYLE <span>REDEFINED</span></h1><p>✦ Now in Indore ✦</p>
<a href="tel:+919009555050" class="btn">Call for Appointment</a></div></section>
<section class="about" id="about"><div class="container"><div class="stitle">About Us</div>
<p>JabalpurSalon brings its celebrated beauty expertise to Indore. Known for precision cuts, expert coloring, and transformative treatments — we deliver salon-quality results every time.</p></div></section>
<section class="services" id="services"><div class="container"><div class="stitle">Services</div><div class="grid">
<div class="card"><div class="ic">✂️</div><h3>Hair Cuts</h3><p>Precision cuts for every face type</p></div>
<div class="card"><div class="ic">🎨</div><h3>Hair Color</h3><p>Highlights, balayage & full color</p></div>
<div class="card"><div class="ic">💆‍♀️</div><h3>Spa Treatments</h3><p>Relaxing face & body therapies</p></div>
<div class="card"><div class="ic">💄</div><h3>Makeup</h3><p>Party to bridal — we do it all</p></div>
</div></div></section>
<section class="contact" id="contact"><div class="container"><div class="stitle">Visit Us</div>
<div class="cinfo"><p>📍 Indore, Madhya Pradesh</p><p>📞 <a href="tel:+919009555050">+91 90095 55050</a></p>
<a href="https://wa.me/919009555050" class="btn" style="margin-top:20px;display:inline-block">WhatsApp Us</a></div></div></section>
<footer>© 2025 JabalpurSalon, Indore | Powered by <strong style="color:var(--a)">VEDAM</strong></footer>
<a href="https://wa.me/919009555050" class="wa">💬</a>
</body></html>'

# --- MIRAAYA MAKEUP STUDIO ---
html "$b\miraaya-makeup-studio-vedam\index.html" '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Miraaya Makeup Studio & Academy Indore</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Raleway:wght@300;400;600&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Raleway",sans-serif;background:#0d0509;color:#fff}
:root{--a:#d4af7a;--r:#b8788a}
header{position:fixed;top:0;width:100%;z-index:100;background:rgba(13,5,9,.95);padding:15px 30px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(212,175,122,.3)}
.logo{font-family:"Cinzel",serif;font-size:1.5rem;color:var(--a);letter-spacing:4px}
nav a{color:#bbb;text-decoration:none;margin-left:20px;font-size:.85rem;letter-spacing:2px;transition:.3s}nav a:hover{color:var(--a)}
@media(max-width:768px){nav{display:none}}
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:100px 20px;background:radial-gradient(ellipse at 50% 60%,#2a0e1a 0%,#0d0509 70%)}
.hero-tag{font-size:.75rem;letter-spacing:6px;text-transform:uppercase;color:var(--a);margin-bottom:20px;opacity:.8}
.hero h1{font-family:"Cinzel",serif;font-size:clamp(2rem,6vw,4.5rem);line-height:1.2;margin-bottom:20px;background:linear-gradient(135deg,#fff 0%,var(--a) 60%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{color:#aaa;font-size:.95rem;max-width:500px;margin:0 auto 35px;line-height:1.8}
.btn{display:inline-block;padding:13px 36px;border:1px solid var(--a);color:var(--a);text-decoration:none;letter-spacing:3px;font-size:.8rem;text-transform:uppercase;transition:.3s;border-radius:2px}
.btn:hover{background:var(--a);color:#0d0509}
section{padding:75px 20px}.container{max-width:1000px;margin:0 auto}
.stitle{font-family:"Cinzel",serif;font-size:2rem;color:var(--a);text-align:center;margin-bottom:10px}
.stitle-sub{text-align:center;color:#888;letter-spacing:3px;font-size:.75rem;text-transform:uppercase;margin-bottom:40px}
.about{background:rgba(255,255,255,.02)}.about p{color:#bbb;line-height:1.9;max-width:700px;margin:0 auto 15px;text-align:center}
.services .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}
.card{background:rgba(212,175,122,.05);padding:28px;text-align:center;border:1px solid rgba(212,175,122,.15);border-radius:8px;transition:.3s}
.card:hover{background:rgba(212,175,122,.1);transform:translateY(-4px)}
.card .ic{font-size:2.2rem;margin-bottom:12px}.card h3{font-family:"Cinzel",serif;font-size:1rem;color:var(--a);margin-bottom:8px}.card p{color:#999;font-size:.85rem}
.contact{background:rgba(255,255,255,.02)}.cinfo{text-align:center}.cinfo p{color:#bbb;margin:10px 0}.cinfo a{color:var(--a);text-decoration:none}
footer{background:#060206;text-align:center;padding:22px;color:#555;font-size:.8rem}
.wa{position:fixed;bottom:25px;right:25px;z-index:999;background:#25D366;color:#fff;width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.6rem;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,.4);animation:fl 3s ease-in-out infinite}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}</style></head>
<body>
<header><div class="logo">MIRAAYA</div><nav><a href="#about">About</a><a href="#academy">Academy</a><a href="#contact">Contact</a></nav></header>
<section class="hero"><div>
<div class="hero-tag">Makeup Studio & Academy</div>
<h1>The Art of<br>Transformation</h1>
<p>Miraaya — where makeup meets mastery. Professional studio services and a world-class beauty academy in Indore.</p>
<a href="tel:+918871608174" class="btn">Book Your Session</a></div></section>
<section class="about" id="about"><div class="container"><div class="stitle">About Miraaya</div><div class="stitle-sub">Studio & Academy</div>
<p>Miraaya Makeup Studio & Academy is Indore's premier destination for professional makeup artistry and beauty education. Whether you want to look stunning for an event or learn the craft yourself, we deliver excellence.</p></div></section>
<section class="services" id="academy"><div class="container"><div class="stitle">What We Offer</div><div class="stitle-sub">Studio & Learning</div><div class="grid">
<div class="card"><div class="ic">👰</div><h3>Bridal Makeup</h3><p>Flawless bridal looks for your perfect day</p></div>
<div class="card"><div class="ic">🎭</div><h3>Party & Event</h3><p>Glamorous looks for every occasion</p></div>
<div class="card"><div class="ic">🎓</div><h3>Makeup Academy</h3><p>Professional courses for aspiring artists</p></div>
<div class="card"><div class="ic">📸</div><h3>Portfolio Shoots</h3><p>Makeup for photo & video shoots</p></div>
</div></div></section>
<section class="contact" id="contact"><div class="container"><div class="stitle">Get In Touch</div><div class="stitle-sub">Studio | Academy</div>
<div class="cinfo"><p>📍 Indore, Madhya Pradesh</p><p>📞 <a href="tel:+918871608174">+91 88716 08174</a></p>
<p>📸 <a href="https://www.instagram.com/miraaya_makeup_studio/" style="color:var(--r)">@miraaya_makeup_studio</a></p>
<a href="https://wa.me/918871608174" class="btn" style="margin-top:20px;display:inline-block">WhatsApp Us</a></div></div></section>
<footer>© 2025 Miraaya Makeup Studio & Academy, Indore | Powered by <strong style="color:var(--a)">VEDAM</strong></footer>
<a href="https://wa.me/918871608174" class="wa">💬</a>
</body></html>'

echo "Salon batch 1 done"
