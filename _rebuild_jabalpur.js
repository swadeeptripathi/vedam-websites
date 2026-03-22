const fs = require('fs');
const path = require('path');

const palettes = {
  "Gym & Fitness":      { bg:"#2D2D2D", accent:"#FF4500", f1:"Plus Jakarta Sans", f2:"Inter" },
  "Spa & Salon":        { bg:"#1a0a0a", accent:"#C9956C", f1:"Cormorant Garamond", f2:"Lato" },
  "Restaurant & Dhaba": { bg:"#1C1008", accent:"#E8832A", f1:"Playfair Display", f2:"Open Sans" },
  "Coaching Institute": { bg:"#0D1B2A", accent:"#F4C430", f1:"Montserrat", f2:"Roboto" },
  "Dental & Eye Clinic":{ bg:"#F8FFFE", accent:"#00857C", f1:"Nunito", f2:"Source Sans Pro" },
  "Wedding Photographer":{ bg:"#0A0A0A", accent:"#D4AF37", f1:"Cormorant Garamond", f2:"Raleway" },
  "Real Estate Agent":  { bg:"#1A1A2E", accent:"#B87333", f1:"Josefin Sans", f2:"Lato" }
};

const unsplash = {
  "Gym & Fitness":      ["photo-1534438327276-14e5300c3a48","photo-1517836357463-d25dfeac3438","photo-1571902943202-507ec2618e8f","photo-1576678927484-cc907957088c"],
  "Spa & Salon":        ["photo-1560066984-138dadb4c035","photo-1522337360788-8b13dee7a37e","photo-1487412947147-5cebf100ffc2","photo-1596178060810-72f53ce9a65c"],
  "Restaurant & Dhaba": ["photo-1414235077428-338989a2e8c0","photo-1517248135467-4c7edcad34c4","photo-1555396273-367ea4eb4db5","photo-1565299624946-b28f40a0ae38"],
  "Coaching Institute": ["photo-1524178232363-d36a1f488312","photo-1427504494785-3a9ca7044f45","photo-1434030216411-0b793f4b4173","photo-1503676260728-1c00da094a0b"],
  "Dental & Eye Clinic":["photo-1588776814546-1ffcf47267a5","photo-1609840114035-25b22bf8c75b","photo-1584515933487-779824d29309","photo-1551884170-09fb70a3a2ed"],
  "Wedding Photographer":["photo-1519741497674-611481863552","photo-1537633552985-df8429e8048b","photo-1606216840193-f50b1bc6dbdc","photo-1583939003579-730e3918a45a"],
  "Real Estate Agent":  ["photo-1560518883-ce09059eeffa","photo-1582407947304-fd86f28f8af0","photo-1570129477492-1296f8f23e52","photo-1486325212027-8081e485255e"]
};

const services = {
  "Gym & Fitness":       ["Strength Training","Cardio Zone","Personal Training","Zumba & Aerobics","CrossFit","Yoga Classes","Nutrition Counseling","Steam & Sauna"],
  "Spa & Salon":         ["Bridal Makeup","Party Makeup","Hair Styling","Hair Coloring","Facial & Cleanup","Manicure & Pedicure","Threading & Waxing","Nail Art"],
  "Restaurant & Dhaba":  ["Dine-In","Takeaway","Home Delivery","Party Catering","Veg Thali","Non-Veg Specials","Live Grills","Birthday Packages"],
  "Coaching Institute":  ["Classroom Coaching","Online Classes","Study Material","Mock Tests","Doubt Sessions","Hostel Facility","Scholarship Tests","Result Oriented Batches"],
  "Dental & Eye Clinic": ["General Dentistry","Teeth Whitening","Braces & Aligners","Root Canal","Eye Examination","LASIK Surgery","Cataract Treatment","Spectacle Dispensing"],
  "Wedding Photographer":["Wedding Photography","Candid Shoots","Pre-Wedding Shoots","Videography","Drone Coverage","Album Designing","Same Day Edit","Maternity Shoots"],
  "Real Estate Agent":   ["Property Buying","Property Selling","Rental Services","Plot Booking","Commercial Spaces","Loan Assistance","Legal Advisory","Property Valuation"]
};

const stats = {
  "Gym & Fitness":       ["2000+ Members","15+ Trainers","10+ Years","50+ Equipment"],
  "Spa & Salon":         ["5000+ Clients","20+ Services","8+ Years","4.8 Rating"],
  "Restaurant & Dhaba":  ["500+ Daily Guests","50+ Dishes","12+ Years","4.7 Rating"],
  "Coaching Institute":  ["10000+ Students","50+ Faculty","15+ Years","95% Results"],
  "Dental & Eye Clinic": ["20000+ Patients","15+ Doctors","12+ Years","4.9 Rating"],
  "Wedding Photographer":["1000+ Weddings","50+ Awards","10+ Years","500+ Albums"],
  "Real Estate Agent":   ["5000+ Properties","1000+ Clients","15+ Years","95% Satisfaction"]
};

const schedules = {
  "Gym & Fitness":       [["Mon-Fri","Morning Batch","5:30 AM - 8:30 AM"],["Mon-Fri","Evening Batch","5:00 PM - 9:00 PM"],["Saturday","Weekend Special","6:00 AM - 10:00 AM"],["Sunday","Open Gym","7:00 AM - 11:00 AM"]],
  "Spa & Salon":         [["Mon-Sat","Morning Slot","9:00 AM - 1:00 PM"],["Mon-Sat","Afternoon Slot","2:00 PM - 6:00 PM"],["Sat-Sun","Bridal Special","By Appointment"],["Daily","Home Service","9:00 AM - 7:00 PM"]],
  "Restaurant & Dhaba":  [["Daily","Breakfast","7:00 AM - 11:00 AM"],["Daily","Lunch","12:00 PM - 3:30 PM"],["Daily","Snacks & Tea","4:00 PM - 7:00 PM"],["Daily","Dinner","7:30 PM - 11:00 PM"]],
  "Coaching Institute":  [["Mon-Sat","Morning Batch","7:00 AM - 10:00 AM"],["Mon-Sat","Afternoon Batch","1:00 PM - 4:00 PM"],["Mon-Sat","Evening Batch","5:00 PM - 8:00 PM"],["Sunday","Doubt Clearing","10:00 AM - 1:00 PM"]],
  "Dental & Eye Clinic": [["Mon-Sat","Morning OPD","9:00 AM - 1:00 PM"],["Mon-Sat","Evening OPD","4:00 PM - 7:00 PM"],["Sunday","Emergency Only","10:00 AM - 1:00 PM"],["By Appt","Surgery Slots","8:00 AM - 12:00 PM"]],
  "Wedding Photographer":[["Mon-Fri","Studio Shoots","10:00 AM - 5:00 PM"],["Weekends","Outdoor / Wedding","By Schedule"],["Daily","Consultation","11:00 AM - 7:00 PM"],["Any Day","Destination Events","By Prior Booking"]],
  "Real Estate Agent":   [["Mon-Sat","Office Hours","10:00 AM - 6:00 PM"],["Mon-Sat","Site Visits","11:00 AM - 5:00 PM"],["Sunday","By Appointment","11:00 AM - 3:00 PM"],["Daily","Phone Queries","9:00 AM - 8:00 PM"]]
};

const pricing = {
  "Gym & Fitness": [
    { plan:"Basic", price:"Rs.799/mo", features:["Gym Access","Locker Room","Basic Equipment","2 Group Classes"] },
    { plan:"Pro", price:"Rs.1499/mo", features:["Everything in Basic","Personal Trainer","Nutrition Plan","Unlimited Classes","Steam Room"] },
    { plan:"Elite", price:"Rs.2499/mo", features:["Everything in Pro","Priority Scheduling","Diet Consultation","Supplements","Premium Locker"] }
  ],
  "Spa & Salon": [
    { plan:"Essential", price:"Rs.999", features:["Basic Facial","Threading","Simple Makeup","Hair Trim"] },
    { plan:"Bridal", price:"Rs.8999", features:["Bridal Makeup","Hair Styling","Saree Draping","Nail Art","Glow Facial"] },
    { plan:"Premium", price:"Rs.14999", features:["Everything in Bridal","Pre-Bridal Package","2 Trial Sessions","Mehendi","Engagement Makeup"] }
  ],
  "Restaurant & Dhaba": [
    { plan:"Veg Thali", price:"Rs.149", features:["3 Sabzi","Dal","Rice","Roti x4","Salad","Papad"] },
    { plan:"Non-Veg Thali", price:"Rs.249", features:["Chicken Curry","Dal","Rice","Roti x4","Salad","Dessert"] },
    { plan:"Party Pack", price:"Rs.2999", features:["Serves 10 People","5 Dishes","Rice & Bread","Sweets","Cold Drinks"] }
  ],
  "Coaching Institute": [
    { plan:"Foundation", price:"Rs.3999/mo", features:["Daily Classes","Study Material","Monthly Test","Doubt Sessions","Online Access"] },
    { plan:"Advanced", price:"Rs.5999/mo", features:["Everything in Foundation","Mock Tests","Previous Papers","Career Guidance","Parent Updates"] },
    { plan:"Elite Batch", price:"Rs.8999/mo", features:["Small Batch (20 students)","1:1 Mentoring","Full Study Kit","Free Revision","Scholarship Tests"] }
  ],
  "Dental & Eye Clinic": [
    { plan:"Basic Check", price:"Rs.299", features:["Eye/Dental Exam","Diagnosis Report","Doctor Consultation","Basic Treatment Advice"] },
    { plan:"Treatment Pack", price:"Rs.1999", features:["Full Examination","X-Ray / Retinal Scan","1 Treatment Session","Follow-up Visit","Report Card"] },
    { plan:"Premium Care", price:"Rs.4999", features:["Comprehensive Care","3 Treatment Sessions","Free Spectacles Frame","Priority Appointments","Home Visit"] }
  ],
  "Wedding Photographer": [
    { plan:"Basic", price:"Rs.25000", features:["1 Day Coverage","500 Edited Photos","Online Gallery","USB Drive","1 Album"] },
    { plan:"Standard", price:"Rs.45000", features:["2 Days Coverage","1000+ Photos","Video Highlights","2 Albums","Drone Shots"] },
    { plan:"Premium", price:"Rs.75000", features:["Full Wedding Coverage","Unlimited Photos","Full Length Video","Pre-Wedding Shoot","4K Drone","3 Luxury Albums"] }
  ],
  "Real Estate Agent": [
    { plan:"Rental", price:"Rs.999", features:["Property Listing","Site Visits","Tenant Verification","Rent Agreement","1 Month Support"] },
    { plan:"Buy/Sell", price:"Rs.4999", features:["Property Valuation","Legal Verification","Negotiation Support","Registration Help","Post-Sale Support"] },
    { plan:"Premium", price:"Rs.9999", features:["Dedicated Agent","Priority Listings","Home Loan Tie-up","Interior Referrals","2 Year Support","Legal Advisory"] }
  ]
};

const teamData = {
  "Gym & Fitness":       [["Rajesh Patel","Head Trainer","photo-1571019613454-1cb2f99b2d8b"],["Sneha Verma","Cardio Expert","photo-1594381898411-846e7d193883"],["Vikram Singh","Nutrition Coach","photo-1583454110551-21f2fa2afe61"]],
  "Spa & Salon":         [["Sunita Agarwal","Senior Makeup Artist","photo-1487412947147-5cebf100ffc2"],["Kavita Sharma","Hair Stylist","photo-1522337360788-8b13dee7a37e"],["Pooja Mishra","Skin Care Expert","photo-1489424731084-a5d8b219a5bb"]],
  "Restaurant & Dhaba":  [["Chef Ramesh","Head Chef","photo-1577219491135-ce391730fb2c"],["Suresh Gupta","Manager","photo-1507003211169-0a1dd7228f2d"],["Meena Joshi","Pastry Chef","photo-1494790108377-be9c29b29330"]],
  "Coaching Institute":  [["Dr. Anand Tripathi","Director & Mentor","photo-1560250097-0b93528c311a"],["Prof. Suman Rai","Senior Faculty","photo-1573496359142-b8d87734a5a2"],["Ravi Shukla","Subject Expert","photo-1472099645785-5658abf4ff4e"]],
  "Dental & Eye Clinic": [["Dr. Pradeep Jain","Chief Doctor","photo-1612349317150-e413f6a5b16d"],["Dr. Rekha Gupta","Senior Consultant","photo-1559839734-2b71ea197ec2"],["Dr. Amit Verma","Specialist","photo-1582750433449-648ed127bb54"]],
  "Wedding Photographer":[["Rohan Dixit","Lead Photographer","photo-1519741497674-611481863552"],["Priya Nair","Candid Specialist","photo-1537633552985-df8429e8048b"],["Arjun Das","Cinematographer","photo-1606216840193-f50b1bc6dbdc"]],
  "Real Estate Agent":   [["Sunil Agrawal","Senior Property Advisor","photo-1560518883-ce09059eeffa"],["Geeta Pandey","Residential Expert","photo-1573496359142-b8d87734a5a2"],["Mohan Yadav","Commercial Leasing","photo-1472099645785-5658abf4ff4e"]]
};

const teamLabels = {
  "Gym & Fitness":"Our Trainers","Spa & Salon":"Our Stylists","Restaurant & Dhaba":"Our Team",
  "Coaching Institute":"Our Faculty","Dental & Eye Clinic":"Our Doctors",
  "Wedding Photographer":"Our Photographers","Real Estate Agent":"Our Agents"
};
const scheduleLabels = {
  "Gym & Fitness":"Timetable","Spa & Salon":"Schedule","Restaurant & Dhaba":"Hours",
  "Coaching Institute":"Batch Schedule","Dental & Eye Clinic":"OPD Schedule",
  "Wedding Photographer":"Booking Schedule","Real Estate Agent":"Office Hours"
};

const icons = ["🏋️","💪","🧘","🏃","⚡","🎯","🌟","✨","🍽️","📚","👁️","📸","🏠","💅","🦷","🎓","🔬","🏆"];
const testimonials = [
  { name:"Ramesh Sharma", text:"Absolutely fantastic experience! Highly recommend to everyone in Jabalpur." },
  { name:"Priya Singh",   text:"Professional service, great results. Very happy with the outcome!" },
  { name:"Amit Kumar",    text:"Best in Jabalpur. The team is dedicated and the quality is top-notch." }
];

const leads = [
  { slug:"sai-fitness-jabalpur-vedam", name:"Sai Fitness", cat:"Gym & Fitness", phone:"+919972836106" },
  { slug:"golds-gym-jabalpur-vedam", name:"Gold's Gym Jabalpur", cat:"Gym & Fitness", phone:"+917898935513" },
  { slug:"power-gym-jabalpur-vedam", name:"Power Gym Jabalpur", cat:"Gym & Fitness", phone:"+919340822761" },
  { slug:"bridal-makeover-studio-jabalpur-vedam", name:"Bridal Makeover Studio", cat:"Spa & Salon", phone:"+918889727688" },
  { slug:"cute-look-beauty-salon-vedam", name:"Cute Look Beauty Salon", cat:"Spa & Salon", phone:"+919301819175" },
  { slug:"desire-makeover-salon-jabalpur-vedam", name:"Desire Makeover Salon", cat:"Spa & Salon", phone:"+917400595042" },
  { slug:"glam-bridal-studio-jabalpur-vedam", name:"Glam Bridal Studio", cat:"Spa & Salon", phone:"+919610733747" },
  { slug:"seetafoods-jabalpur-vedam", name:"SeetaFoods Restaurant", cat:"Restaurant & Dhaba", phone:"+919340808278" },
  { slug:"white-kitchen-restaurant-jabalpur-vedam", name:"White Kitchen Restaurant", cat:"Restaurant & Dhaba", phone:"+918818886226" },
  { slug:"pat-coaching-jabalpur-vedam", name:"PAT Coaching", cat:"Coaching Institute", phone:"+916265179073" },
  { slug:"biozone-classes-jabalpur-vedam", name:"BIOZONE Classes", cat:"Coaching Institute", phone:"+919827042252" },
  { slug:"galaxy-pat-institute-vedam", name:"Galaxy PAT Institute", cat:"Coaching Institute", phone:"+918982382989" },
  { slug:"gkm-nursing-coaching-vedam", name:"GKM Nursing Coaching", cat:"Coaching Institute", phone:"+919302168588" },
  { slug:"indian-agriculture-academy-vedam", name:"Indian Agriculture Academy", cat:"Coaching Institute", phone:"+917089212222" },
  { slug:"sambhav-institute-of-education-vedam", name:"Sambhav Institute of Education", cat:"Coaching Institute", phone:"+918770579978" },
  { slug:"shukla-maths-academy-vedam", name:"Shukla Maths Academy", cat:"Coaching Institute", phone:"+917415301150" },
  { slug:"om-career-institute-india-vedam", name:"Om Career Institute India", cat:"Coaching Institute", phone:"+919425468495" },
  { slug:"parvati-institute-of-mathematics-vedam", name:"Parvati Institute of Mathematics", cat:"Coaching Institute", phone:"+917880291440" },
  { slug:"pratap-concept-classes-vedam", name:"Pratap Concept Classes", cat:"Coaching Institute", phone:"+919993881102" },
  { slug:"qazi-physics-classes-vedam", name:"Qazi Physics Classes", cat:"Coaching Institute", phone:"+919039331333" },
  { slug:"ramanujam-maths-classes-vedam", name:"Ramanujam Maths Classes", cat:"Coaching Institute", phone:"+919893033986" },
  { slug:"upsc-coaching-jabalpur-vedam", name:"UPSC Coaching Jabalpur", cat:"Coaching Institute", phone:"+919827239801" },
  { slug:"goutam-ias-academy-vedam", name:"Goutam IAS Academy", cat:"Coaching Institute", phone:"+919165272944" },
  { slug:"cynosure-civil-services-institute-vedam", name:"CYNOSURE Civil Services Institute", cat:"Coaching Institute", phone:"+918989851047" },
  { slug:"deepika-classes-vedam", name:"Deepika Classes", cat:"Coaching Institute", phone:"+918817511508" },
  { slug:"aparajit-ias-academy-vedam", name:"Aparajit IAS Academy", cat:"Coaching Institute", phone:"+919522147096" },
  { slug:"asha-ias-institute-vedam", name:"Asha IAS Institute", cat:"Coaching Institute", phone:"+919818943583" },
  { slug:"yojna-ias-coaching-vedam", name:"Yojna IAS Coaching", cat:"Coaching Institute", phone:"+918595390705" },
  { slug:"siddhi-academy-jabalpur-vedam", name:"Siddhi Academy", cat:"Coaching Institute", phone:"+917869870659" },
  { slug:"tiwari-study-zone-vedam", name:"Tiwari Study Zone", cat:"Coaching Institute", phone:"+919131770389" },
  { slug:"sai-classes-garha-vedam", name:"Sai Classes Garha", cat:"Coaching Institute", phone:"+919098409805" },
  { slug:"sai-focus-academy-vedam", name:"Sai Focus Academy", cat:"Coaching Institute", phone:"+919806148331" },
  { slug:"shree-sai-career-classes-vedam", name:"Shree Sai Career Classes", cat:"Coaching Institute", phone:"+918827730740" },
  { slug:"elite-classes-jabalpur-vedam", name:"ELITE Classes", cat:"Coaching Institute", phone:"+919179168884" },
  { slug:"excellence-academy-jabalpur-vedam", name:"Excellence Academy", cat:"Coaching Institute", phone:"+918989126309" },
  { slug:"paathshaala-coaching-classes-vedam", name:"PAATHSHAALA Coaching Classes", cat:"Coaching Institute", phone:"+919770187722" },
  { slug:"virmani-classes-jabalpur-vedam", name:"Virmani Classes", cat:"Coaching Institute", phone:"+919893901113" },
  { slug:"matics-tuition-classes-vedam", name:"Matics Tuition Classes", cat:"Coaching Institute", phone:"+919826103332" },
  { slug:"tiwari-classes-jabalpur-vedam", name:"Tiwari Classes", cat:"Coaching Institute", phone:"+918349992512" },
  { slug:"chauhan-dental-clinic-jabalpur-vedam", name:"Chauhan Dental Clinic", cat:"Dental & Eye Clinic", phone:"+919301911999" },
  { slug:"vision-eye-care-hospital-vedam", name:"Vision Eye Care Hospital", cat:"Dental & Eye Clinic", phone:"+919009485888" },
  { slug:"imagic-production-jabalpur-vedam", name:"Imagic Production", cat:"Wedding Photographer", phone:"+919452934357" },
  { slug:"maya-photo-studio-jabalpur-vedam", name:"Maya Photo Studio", cat:"Wedding Photographer", phone:"+917999015907" },
  { slug:"jabalpur-helpline-rental-service-vedam", name:"Jabalpur Helpline Rental & Property", cat:"Real Estate Agent", phone:"+918962264111" },
  { slug:"shri-sanskar-rental-and-property-vedam", name:"Shri Sanskar Rental & Property", cat:"Real Estate Agent", phone:"+917805801141" },
  { slug:"million-properties-jabalpur-vedam", name:"Million Properties Jabalpur", cat:"Real Estate Agent", phone:"+918109009000" }
];

function buildHTML(lead) {
  const { slug, name, cat, phone } = lead;
  const p = palettes[cat];
  const { bg, accent, f1, f2 } = p;
  const imgs = unsplash[cat];
  const hero1 = `https://images.unsplash.com/${imgs[0]}?w=1400&q=80`;
  const hero2 = `https://images.unsplash.com/${imgs[1]}?w=1400&q=80`;
  const aboutImg = `https://images.unsplash.com/${imgs[0]}?w=700&q=80`;
  const waNum = phone.replace(/[^0-9]/g, '');
  const isDark = bg !== '#F8FFFE';
  const textColor = isDark ? '#ffffff' : '#1a1a1a';
  const textMuted = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)';
  const cardBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
  const borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
  const teamLabel = teamLabels[cat];
  const scheduleLabel = scheduleLabels[cat];
  const svcList = services[cat];
  const statList = stats[cat];
  const schList = schedules[cat];
  const priceList = pricing[cat];
  const team = teamData[cat];
  const year = new Date().getFullYear();

  // Services bento
  const svcCards = svcList.map((s,i) =>
    `<div class="bento-card"><div class="bento-icon">${icons[i % icons.length]}</div><h3>${s}</h3></div>`
  ).join('\n');

  // Team
  const teamCards = team.map(([tname,role,timg]) => `
<div class="team-card">
  <img src="https://images.unsplash.com/${timg}?w=400&q=80" alt="${tname}" loading="lazy">
  <div class="team-info"><h3>${tname}</h3><p>${role}</p></div>
</div>`).join('\n');

  // Schedule
  const schRows = schList.map(([day,session,time]) =>
    `<tr><td>${day}</td><td>${session}</td><td>${time}</td></tr>`
  ).join('\n');

  // Gallery
  const galleryTabs = ['Interior','Team','Events'].map((tab,i) =>
    `<button class="tab-btn${i===0?' active':''}" onclick="switchTab(${i},this)">${tab}</button>`
  ).join('\n');
  const galleryPanels = ['Interior','Team','Events'].map((tab,i) => {
    const shuffled = [imgs[i%4], imgs[(i+1)%4], imgs[(i+2)%4], imgs[(i+3)%4]];
    const imgTags = shuffled.map(img =>
      `<img src="https://images.unsplash.com/${img}?w=600&q=80" alt="${tab}" loading="lazy">`
    ).join('\n');
    return `<div class="gallery-panel${i===0?' active':''}" id="panel-${i}">\n${imgTags}\n</div>`;
  }).join('\n');

  // Stats
  const statsHTML = statList.map(s => {
    const num = (s.match(/\d+/) || ['100'])[0];
    const label = s.replace(/^[\d+]+\s*/, '');
    return `<div class="stat-item"><div class="stat-num" data-target="${num}">0</div><div class="stat-label">${label}</div></div>`;
  }).join('\n');

  // Pricing
  const pricingHTML = priceList.map((pr, i) => {
    const featured = i === 1 ? ' featured' : '';
    const featuresLi = pr.features.map(f => `<li>&#10003; ${f}</li>`).join('\n');
    return `<div class="price-card${featured}">
  <div class="price-plan">${pr.plan}</div>
  <div class="price-amount">${pr.price}</div>
  <ul>${featuresLi}</ul>
  <a href="https://wa.me/${waNum}" class="btn-cta">Get Started</a>
</div>`;
  }).join('\n');

  // Testimonials
  const testiHTML = testimonials.map((t, i) =>
    `<div class="testi-slide${i===0?' active':''}">
  <div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
  <p class="testi-text">"${t.text}"</p>
  <p class="testi-author">-- ${t.name}</p>
</div>`).join('\n');

  // Service options for form
  const svcOptions = svcList.map(s => `<option>${s}</option>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${name} - Jabalpur | VEDAM</title>
<meta name="description" content="${name} in Jabalpur. ${cat} services. Call ${phone} for appointments.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=${f1.replace(/ /g,'+')}:wght@400;600;700&family=${f2.replace(/ /g,'+')}:wght@300;400;600&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:${bg};--accent:${accent};--text:${textColor};--muted:${textMuted};--card:${cardBg};--border:${borderColor}}
html{scroll-behavior:smooth}
body{font-family:'${f2}',sans-serif;background:var(--bg);color:var(--text);line-height:1.6;overflow-x:hidden}
h1,h2,h3,h4{font-family:'${f1}',serif}

nav{position:fixed;top:0;left:0;width:100%;z-index:1000;padding:16px 5%;display:flex;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.35);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.logo{font-family:'${f1}',serif;font-size:1.5rem;font-weight:700;color:var(--text);text-decoration:none}
.logo span{color:var(--accent)}
.nav-links{display:flex;gap:24px;list-style:none}
.nav-links a{color:var(--muted);text-decoration:none;font-size:0.9rem;font-weight:500;transition:color .3s}
.nav-links a:hover{color:var(--accent)}
.nav-cta{background:var(--accent);color:#fff;padding:10px 22px;border-radius:25px;text-decoration:none;font-weight:600;font-size:0.9rem;transition:opacity .3s}
.nav-cta:hover{opacity:0.85}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:5px}
.hamburger span{display:block;width:24px;height:2px;background:var(--text);transition:.3s}
.mobile-menu{display:none;position:fixed;top:70px;left:0;width:100%;background:var(--bg);padding:20px 5%;border-bottom:1px solid var(--border);z-index:999}
.mobile-menu.open{display:block}
.mobile-menu a{display:block;padding:12px 0;color:var(--text);text-decoration:none;border-bottom:1px solid var(--border);font-size:1rem}

.hero{height:100vh;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.hero-slide{position:absolute;inset:0;opacity:0;transition:opacity 1.2s ease}
.hero-slide.active{opacity:1}
.hero-slide img{width:100%;height:100%;object-fit:cover}
.hero-slide::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 100%)}
.hero-content{position:relative;z-index:2;text-align:center;padding:0 20px;max-width:800px}
.hero-badge{display:inline-block;background:var(--accent);color:#fff;padding:6px 18px;border-radius:20px;font-size:0.85rem;font-weight:600;margin-bottom:20px;letter-spacing:1px}
.hero h1{font-size:clamp(2.2rem,6vw,4.5rem);font-weight:700;margin-bottom:16px;line-height:1.1;color:#fff}
.hero p{font-size:clamp(1rem,2.5vw,1.3rem);color:rgba(255,255,255,0.85);margin-bottom:36px;max-width:600px;margin-left:auto;margin-right:auto}
.hero-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.btn-primary{background:var(--accent);color:#fff;padding:14px 32px;border-radius:30px;text-decoration:none;font-weight:700;font-size:1rem;transition:transform .3s,box-shadow .3s;box-shadow:0 4px 20px rgba(0,0,0,0.3)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,0.4)}
.btn-outline{border:2px solid rgba(255,255,255,0.7);color:#fff;padding:12px 28px;border-radius:30px;text-decoration:none;font-weight:600;font-size:1rem;transition:.3s}
.btn-outline:hover{background:rgba(255,255,255,0.1)}
.hero-dots{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);display:flex;gap:10px;z-index:5}
.hero-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.4);cursor:pointer;transition:.3s}
.hero-dot.active{background:var(--accent);width:26px;border-radius:5px}

section{padding:80px 5%}
.section-header{text-align:center;margin-bottom:60px}
.section-tag{display:inline-block;color:var(--accent);font-size:0.85rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px}
.section-header h2{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;margin-bottom:16px}
.section-header p{color:var(--muted);max-width:600px;margin:0 auto;font-size:1.05rem}

.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.about-img{border-radius:16px;overflow:hidden}
.about-img img{width:100%;height:450px;object-fit:cover;transition:transform .4s}
.about-img:hover img{transform:scale(1.03)}
.about-text h2{font-size:clamp(1.8rem,3.5vw,2.5rem);font-weight:700;margin-bottom:20px}
.about-text h2 span{color:var(--accent)}
.about-text p{color:var(--muted);margin-bottom:20px;font-size:1.05rem}
.about-features{list-style:none;margin-top:28px}
.about-features li{padding:8px 0;color:var(--muted);display:flex;align-items:center;gap:10px;font-size:0.95rem}
.about-features li::before{content:"&#10003;";color:var(--accent);font-weight:800;font-size:1rem}
.about-cta{display:inline-block;margin-top:28px;background:var(--accent);color:#fff;padding:13px 30px;border-radius:25px;text-decoration:none;font-weight:600;transition:opacity .3s}
.about-cta:hover{opacity:0.85}

.bento-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px}
.bento-card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px 24px;transition:transform .3s,border-color .3s}
.bento-card:hover{transform:translateY(-5px);border-color:var(--accent)}
.bento-icon{font-size:2.2rem;margin-bottom:14px}
.bento-card h3{font-size:1.05rem;font-weight:600;color:var(--text)}

.team-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:28px}
.team-card{background:var(--card);border:1px solid var(--border);border-radius:16px;overflow:hidden;transition:transform .3s}
.team-card:hover{transform:translateY(-5px)}
.team-card img{width:100%;height:260px;object-fit:cover}
.team-info{padding:20px}
.team-info h3{font-size:1.1rem;font-weight:700;margin-bottom:4px}
.team-info p{color:var(--accent);font-size:0.9rem;font-weight:600}

.schedule-table{width:100%;border-collapse:collapse}
.schedule-table th,.schedule-table td{padding:16px 20px;text-align:left;border-bottom:1px solid var(--border)}
.schedule-table th{color:var(--accent);font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:1px}
.schedule-table td{color:var(--muted);font-size:0.95rem}
.schedule-table tr:last-child td{border-bottom:none}
.schedule-table tbody tr:hover{background:var(--card)}
.table-wrap{background:var(--card);border:1px solid var(--border);border-radius:16px;overflow:hidden}

.gallery-tabs{display:flex;gap:12px;margin-bottom:28px;flex-wrap:wrap}
.tab-btn{background:var(--card);border:1px solid var(--border);color:var(--muted);padding:10px 24px;border-radius:25px;cursor:pointer;font-size:0.9rem;font-weight:600;transition:.3s}
.tab-btn.active,.tab-btn:hover{background:var(--accent);color:#fff;border-color:var(--accent)}
.gallery-panel{display:none;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}
.gallery-panel.active{display:grid}
.gallery-panel img{width:100%;height:220px;object-fit:cover;border-radius:12px;transition:transform .3s;cursor:pointer}
.gallery-panel img:hover{transform:scale(1.03)}

.stats-bar{background:var(--accent);padding:60px 5%}
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:30px;text-align:center}
.stat-item .stat-num{font-size:clamp(2rem,5vw,3rem);font-weight:800;color:#fff;font-family:'${f1}',serif}
.stat-item .stat-label{color:rgba(255,255,255,0.85);font-size:0.95rem;margin-top:6px;font-weight:500}

.pricing-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:28px;align-items:start}
.price-card{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:36px 28px;text-align:center;transition:transform .3s}
.price-card:hover{transform:translateY(-5px)}
.price-card.featured{border-color:var(--accent);position:relative}
.price-card.featured::before{content:'POPULAR';position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:4px 20px;border-radius:20px;font-size:0.75rem;font-weight:700;letter-spacing:1px}
.price-plan{font-size:0.9rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--accent);margin-bottom:12px}
.price-amount{font-size:2rem;font-weight:800;font-family:'${f1}',serif;margin-bottom:24px;color:var(--text)}
.price-card ul{list-style:none;margin-bottom:28px;text-align:left}
.price-card li{padding:8px 0;border-bottom:1px solid var(--border);color:var(--muted);font-size:0.9rem}
.price-card li:last-child{border-bottom:none}
.btn-cta{display:block;background:var(--accent);color:#fff;padding:13px;border-radius:25px;text-decoration:none;font-weight:700;transition:opacity .3s}
.btn-cta:hover{opacity:0.85}

.testi-wrap{max-width:700px;margin:0 auto;text-align:center}
.testi-slide{padding:40px 20px;display:none}
.testi-slide.active{display:block}
.testi-stars{color:var(--accent);font-size:1.4rem;margin-bottom:16px;letter-spacing:4px}
.testi-text{font-size:1.1rem;font-style:italic;color:var(--text);line-height:1.8;margin-bottom:20px}
.testi-author{color:var(--accent);font-weight:700}
.testi-nav{display:flex;justify-content:center;gap:10px;margin-top:30px}
.testi-dot{width:10px;height:10px;border-radius:50%;background:var(--border);cursor:pointer;border:none;transition:.3s}
.testi-dot.active{background:var(--accent)}

.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px}
.contact-form{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:40px}
.form-group{margin-bottom:20px}
.form-group label{display:block;color:var(--muted);font-size:0.9rem;margin-bottom:8px;font-weight:600}
.form-group input,.form-group textarea,.form-group select{width:100%;padding:13px 16px;background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;color:var(--text);font-size:0.95rem;font-family:'${f2}',sans-serif;transition:.3s}
.form-group input:focus,.form-group textarea:focus{outline:none;border-color:var(--accent)}
.form-group textarea{height:120px;resize:vertical}
.form-submit{width:100%;background:var(--accent);color:#fff;border:none;padding:15px;border-radius:25px;font-size:1rem;font-weight:700;cursor:pointer;transition:opacity .3s}
.form-submit:hover{opacity:0.85}
.contact-info{display:flex;flex-direction:column;gap:24px}
.info-card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px;display:flex;align-items:flex-start;gap:16px}
.info-icon{font-size:1.8rem;flex-shrink:0}
.info-card h4{font-size:0.85rem;text-transform:uppercase;letter-spacing:1px;color:var(--accent);margin-bottom:6px;font-weight:700}
.info-card p,.info-card a{color:var(--muted);font-size:0.95rem;text-decoration:none}
.info-card a:hover{color:var(--accent)}
.map-wrap{border-radius:16px;overflow:hidden;border:1px solid var(--border);margin-top:24px}

footer{background:rgba(0,0,0,0.5);border-top:1px solid var(--border);padding:40px 5%;text-align:center}
footer p{color:var(--muted);font-size:0.9rem}
footer a{color:var(--accent);text-decoration:none}
.footer-links{display:flex;justify-content:center;gap:24px;margin-bottom:20px;flex-wrap:wrap}
.footer-links a{color:var(--muted);text-decoration:none;font-size:0.9rem;transition:.3s}
.footer-links a:hover{color:var(--accent)}

.wa-btn{position:fixed;bottom:24px;right:24px;z-index:9999;background:#25D366;color:#fff;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.6rem;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,0.4);transition:transform .3s}
.wa-btn:hover{transform:scale(1.1)}

@media(max-width:768px){
  nav .nav-links,.nav-cta{display:none}
  .hamburger{display:flex}
  .about-grid,.contact-grid{grid-template-columns:1fr}
  .about-img img{height:280px}
  section{padding:60px 5%}
  .pricing-grid{grid-template-columns:1fr}
  .hero h1{font-size:2rem}
}
@media(max-width:480px){
  .bento-grid{grid-template-columns:1fr 1fr}
  .team-grid{grid-template-columns:1fr 1fr}
  .stats-grid{grid-template-columns:1fr 1fr}
}
</style>
</head>
<body>

<nav>
  <a href="#" class="logo">${name}</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#team">${teamLabel}</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="https://wa.me/${waNum}" class="nav-cta">Book Now</a>
  <div class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="#about" onclick="toggleMenu()">About</a>
  <a href="#services" onclick="toggleMenu()">Services</a>
  <a href="#team" onclick="toggleMenu()">${teamLabel}</a>
  <a href="#gallery" onclick="toggleMenu()">Gallery</a>
  <a href="#pricing" onclick="toggleMenu()">Pricing</a>
  <a href="#contact" onclick="toggleMenu()">Contact</a>
  <a href="https://wa.me/${waNum}" style="color:var(--accent);font-weight:700">Call: ${phone}</a>
</div>

<section class="hero" id="home">
  <div class="hero-slide active"><img src="${hero1}" alt="${name}"></div>
  <div class="hero-slide"><img src="${hero2}" alt="${name}"></div>
  <div class="hero-content">
    <span class="hero-badge">${cat} &bull; Jabalpur</span>
    <h1>${name}</h1>
    <p>Premium ${cat} services in Jabalpur. Experience excellence, professionalism, and results that speak for themselves.</p>
    <div class="hero-btns">
      <a href="https://wa.me/${waNum}" class="btn-primary">Book Appointment</a>
      <a href="#about" class="btn-outline">Learn More</a>
    </div>
  </div>
  <div class="hero-dots">
    <div class="hero-dot active" onclick="goSlide(0)"></div>
    <div class="hero-dot" onclick="goSlide(1)"></div>
  </div>
</section>

<section id="about">
  <div class="about-grid">
    <div class="about-img"><img src="${aboutImg}" alt="About ${name}"></div>
    <div class="about-text">
      <span class="section-tag">About Us</span>
      <h2>Welcome to <span>${name}</span></h2>
      <p>We are Jabalpur's trusted name in ${cat}. With years of experience and a passionate team, we deliver services that transform and inspire.</p>
      <p>Our commitment to quality, customer satisfaction, and continuous improvement sets us apart. Every client is treated with care, respect, and professional expertise.</p>
      <ul class="about-features">
        <li>Experienced and certified professionals</li>
        <li>State-of-the-art facilities in Jabalpur</li>
        <li>Personalized approach for every client</li>
        <li>Transparent pricing with no hidden costs</li>
        <li>Trusted by thousands of satisfied clients</li>
      </ul>
      <a href="https://wa.me/${waNum}" class="about-cta">Get in Touch</a>
    </div>
  </div>
</section>

<section id="services" style="background:rgba(0,0,0,0.2)">
  <div class="section-header">
    <span class="section-tag">What We Offer</span>
    <h2>Our Services</h2>
    <p>Comprehensive ${cat} solutions designed to meet your every need</p>
  </div>
  <div class="bento-grid">
    ${svcCards}
  </div>
</section>

<section id="team">
  <div class="section-header">
    <span class="section-tag">Meet The Team</span>
    <h2>${teamLabel}</h2>
    <p>Skilled, dedicated professionals committed to your success</p>
  </div>
  <div class="team-grid">
    ${teamCards}
  </div>
</section>

<section id="schedule" style="background:rgba(0,0,0,0.2)">
  <div class="section-header">
    <span class="section-tag">Timings</span>
    <h2>${scheduleLabel}</h2>
    <p>Plan your visit with our convenient schedule</p>
  </div>
  <div class="table-wrap">
    <table class="schedule-table">
      <thead><tr><th>Day</th><th>Session</th><th>Time</th></tr></thead>
      <tbody>${schRows}</tbody>
    </table>
  </div>
</section>

<section id="gallery">
  <div class="section-header">
    <span class="section-tag">Our Work</span>
    <h2>Gallery</h2>
    <p>A glimpse into our world</p>
  </div>
  <div class="gallery-tabs">${galleryTabs}</div>
  ${galleryPanels}
</section>

<div class="stats-bar" id="stats">
  <div class="stats-grid">${statsHTML}</div>
</div>

<section id="pricing">
  <div class="section-header">
    <span class="section-tag">Plans &amp; Pricing</span>
    <h2>Affordable Packages</h2>
    <p>Transparent INR pricing with no hidden charges</p>
  </div>
  <div class="pricing-grid">${pricingHTML}</div>
</section>

<section id="testimonials" style="background:rgba(0,0,0,0.2)">
  <div class="section-header">
    <span class="section-tag">Reviews</span>
    <h2>What Our Clients Say</h2>
    <p>Real experiences from real people</p>
  </div>
  <div class="testi-wrap">
    ${testiHTML}
    <div class="testi-nav" id="testiNav"></div>
  </div>
</section>

<section id="contact">
  <div class="section-header">
    <span class="section-tag">Get In Touch</span>
    <h2>Contact Us</h2>
    <p>Book an appointment or ask us anything.</p>
  </div>
  <div class="contact-grid">
    <div class="contact-form">
      <h3 style="margin-bottom:24px;font-size:1.3rem">Send a Message</h3>
      <form onsubmit="submitForm(event)">
        <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" required></div>
        <div class="form-group"><label>Phone Number</label><input type="tel" placeholder="Your phone number" required></div>
        <div class="form-group"><label>Email Address</label><input type="email" placeholder="your@email.com"></div>
        <div class="form-group"><label>Service Required</label><select><option value="">Select a service...</option>${svcOptions}</select></div>
        <div class="form-group"><label>Message</label><textarea placeholder="Tell us about your requirements..."></textarea></div>
        <button type="submit" class="form-submit">Send Message</button>
      </form>
    </div>
    <div class="contact-info">
      <div class="info-card"><span class="info-icon">&#128222;</span><div><h4>Phone</h4><a href="tel:${phone}">${phone}</a></div></div>
      <div class="info-card"><span class="info-icon">&#128172;</span><div><h4>WhatsApp</h4><a href="https://wa.me/${waNum}">Chat on WhatsApp</a></div></div>
      <div class="info-card"><span class="info-icon">&#128205;</span><div><h4>Location</h4><p>Jabalpur, Madhya Pradesh, India</p></div></div>
      <div class="info-card"><span class="info-icon">&#128336;</span><div><h4>Hours</h4><p>Mon-Sat: 9AM - 8PM<br>Sunday: By Appointment</p></div></div>
      <div class="map-wrap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117964.17!2d79.9864!3d23.1815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b00c2ca2f4f5%3A0x7fbbff20f1c87c26!2sJabalpur%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin" width="100%" height="220" style="border:0;display:block" allowfullscreen loading="lazy"></iframe>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-links">
    <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a>
    <a href="#pricing">Pricing</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a>
  </div>
  <p>&copy; ${year} ${name}, Jabalpur. All rights reserved. | Built by <a href="https://vedam.in">VEDAM</a></p>
</footer>

<a href="https://wa.me/${waNum}" class="wa-btn" title="WhatsApp Us">&#128172;</a>

<script>
let curSlide=0;const slides=document.querySelectorAll('.hero-slide'),dots=document.querySelectorAll('.hero-dot');
function goSlide(n){slides[curSlide].classList.remove('active');dots[curSlide].classList.remove('active');curSlide=n;slides[curSlide].classList.add('active');dots[curSlide].classList.add('active')}
setInterval(()=>goSlide((curSlide+1)%slides.length),5000);
function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open')}
function switchTab(idx,btn){document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.gallery-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById('panel-'+idx).classList.add('active')}
const testiSlides=document.querySelectorAll('.testi-slide');let curTesti=0;
const tn=document.getElementById('testiNav');
testiSlides.forEach((_,i)=>{const d=document.createElement('button');d.className='testi-dot'+(i===0?' active':'');d.onclick=()=>goTesti(i);tn.appendChild(d)});
function goTesti(n){testiSlides[curTesti].classList.remove('active');document.querySelectorAll('.testi-dot')[curTesti].classList.remove('active');curTesti=n;testiSlides[curTesti].classList.add('active');document.querySelectorAll('.testi-dot')[curTesti].classList.add('active')}
setInterval(()=>goTesti((curTesti+1)%testiSlides.length),4500);
function animateStats(){document.querySelectorAll('.stat-num').forEach(el=>{const target=+el.dataset.target;let cur=0;const step=Math.max(1,Math.ceil(target/60));const t=setInterval(()=>{cur=Math.min(cur+step,target);el.textContent=cur.toLocaleString();if(cur>=target)clearInterval(t)},30)})}
const statsObs=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){animateStats();statsObs.disconnect()}});
statsObs.observe(document.getElementById('stats'));
function submitForm(e){e.preventDefault();alert('Thank you! We will contact you soon on WhatsApp.');e.target.reset()}
</script>
</body>
</html>`;
}

// Generate all sites
const buildsDir = 'C:\\Users\\tripa\\.openclaw\\workspace\\builds';
let count = 0;
for (const lead of leads) {
  const dir = path.join(buildsDir, lead.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const html = buildHTML(lead);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  const lines = html.split('\n').length;
  console.log(`OK  ${lead.slug}  (${lead.cat})  ${lines} lines`);
  count++;
}

// Report
const report = `JABALPUR VEDAM WEBSITES - FULL REBUILD REPORT
==============================================
Date: ${new Date().toISOString()}
Sites rebuilt: ${count}
Sections: Navbar, Hero (2-slide auto-play), About, Services (Bento Grid), Team, Schedule Table, Gallery (3 tabs), Stats (animated), Pricing (3 tiers), Testimonials (carousel), Contact (form + map) + Footer + WhatsApp Float
INR pricing. Real phones from leads. Mobile responsive.

SITES:
${leads.map(l => `- ${l.slug} | ${l.cat} | ${l.phone}`).join('\n')}
`;
fs.writeFileSync('C:\\Users\\tripa\\.openclaw\\workspace\\reports\\jabalpur-rebuild-done.txt', report, 'utf8');
console.log(`\nDone! ${count} sites rebuilt.`);
