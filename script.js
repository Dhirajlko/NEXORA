const demosData = [
  {
    id: 1,
    title: "Luxurious Interior & Architecture",
    category: "interior",
    icon: "🛋️",
    desc: "Luxury Interior Designers, Architects aur Furniture showrooms ke liye stunning gallery & project showcase layout.",
    features: ["Interactive Before/After Slider", "Project Gallery", "Direct WhatsApp Quotation", "Mobile Responsive"]
  },
  {
    id: 2,
    title: "Studio Photography & Video Portfolio",
    category: "photo",
    icon: "📸",
    desc: "Wedding Photographers, Pre-wedding Studios & Event Videographers ke liye high-res photo gallery & package booking site.",
    features: ["HD Masonry Grid Gallery", "Package Pricing Cards", "Instant Booking Form", "Instagram Reel Embed"]
  },
  {
    id: 3,
    title: "Corporate Agency & CAs Portal",
    category: "corporate",
    icon: "🏢",
    desc: "Tax Consultants, CAs, Advocates & Corporate Agencies ke liye professional trust-building website.",
    features: ["Service Pricing Cards", "Consultation Appointment", "Client Testimonials", "Google Map Location"]
  },
  {
    id: 4,
    title: "Clinic & Healthcare Portal",
    category: "health",
    icon: "🩺",
    desc: "Doctors, Clinics, Dentists & Pathology Labs ke liye patient appointment & service showcase site.",
    features: ["Doctor Profile & Specs", "Online Appointment Booking", "Emergency Call Button", "Health Blog Section"]
  },
  {
    id: 5,
    title: "E-Commerce Retail Store",
    category: "retail",
    icon: "🏪",
    desc: "Retail Shops, Boutiques & Products ke liye online catalog & WhatsApp Order System.",
    features: ["Product Category Filter", "WhatsApp 1-Click Order", "Discount Offer Banners", "Fast Mobile Loading"]
  }
];

function renderCards(filter = "all") {
  const container = document.getElementById("cards-container");
  if (!container) return;

  const filtered = filter === "all" ? demosData : demosData.filter(item => item.category === filter);

  container.innerHTML = filtered.map(item => `
    <div class="card">
      <div class="card-icon">${item.icon}</div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-text">${item.desc}</p>
      <ul class="feature-list">
        ${item.features.map(f => `<li class="feature-item"><span class="feature-check">✓</span> ${f}</li>`).join("")}
      </ul>
      <a href="https://wa.me/918429930881?text=Hi%20NEXORA!%20I%20want%20to%20see%20the%20${encodeURIComponent(item.title)}%20demo." target="_blank" class="card-btn">
        🚀 Is Design Ka Demo Dekhein
      </a>
    </div>
  `).join("");
}

// Filter Tabs Listener
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.category);
  });
});

// Price Calculator Logic
function updatePrice() {
  const typeVal = document.getElementById("calc-type")?.value || "business";
  const pagesVal = parseInt(document.getElementById("calc-pages")?.value || "5");
  const addonVal = document.getElementById("calc-addon")?.value || "basic";

  let basePrice = 5999;
  if (typeVal === "ecommerce") basePrice = 9999;
  if (typeVal === "corporate") basePrice = 14999;

  let pageExtra = 0;
  if (pagesVal === 1) pageExtra = -2000; // 5999 - 2000 = 3999 for 1-page landing site
  if (pagesVal === 10) pageExtra = 3000;

  let addonExtra = 0;
  if (addonVal === "seo") addonExtra = 1000;
  if (addonVal === "full") addonExtra = 2000;

  const total = Math.max(3999, basePrice + pageExtra + addonExtra);
  const formattedPrice = "₹" + total.toLocaleString("en-IN");

  const priceEl = document.getElementById("total-price");
  if (priceEl) priceEl.innerText = formattedPrice;

  const bookBtn = document.getElementById("btn-book-quote");
  if (bookBtn) {
    const msg = `Hi NEXORA! I calculated my website cost: ${formattedPrice} (${typeVal.toUpperCase()}, ${pagesVal} Pages, ${addonVal.toUpperCase()}). I want to order this package!`;
    bookBtn.href = `https://wa.me/918429930881?text=${encodeURIComponent(msg)}`;
  }
}

document.getElementById("calc-type")?.addEventListener("change", updatePrice);
document.getElementById("calc-pages")?.addEventListener("change", updatePrice);
document.getElementById("calc-addon")?.addEventListener("change", updatePrice);

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  updatePrice();
});
