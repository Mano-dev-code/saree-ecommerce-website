// account sign in or login
const account = document.querySelector(".account");
const login = document.querySelector(".login")
const account_close = document.querySelector(".acc-close")
if (account && login && account_close) {

  account.addEventListener("click", () => {

    login.style.display = "block";

  });

  account_close.addEventListener("click", () => {
    login.style.display = "none";
  })
}
// Banner slide
const banner = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".bullet");

let index = 0;
let interval = setInterval(nextSlide, 4000);

function showSlide(i) {
  if (slides.length === 0) return;
  slides.forEach(slide => slide.classList.remove("active"));
  bullets.forEach(bullet => bullet.classList.remove("active"));

  slides[i].classList.add("active");
  bullets[i].classList.add("active");
}

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}
if (banner) {
  banner.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  banner.addEventListener("mouseleave", () => {
    interval = setInterval(nextSlide, 4000);
  })
}

bullets.forEach((bullet, i) => {
  bullet.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});
// view all
let view = document.querySelector(".view-all2")
if (view) {
  view.addEventListener("click", () => {
    window.location.href = "viewall.html";
  });
}

// viewall gallery for the  product

const products = [{

  Id: 1,
  image: "assets/Gallery/image6.jpg",
  sareeName: "Yellow Silk Saree",
  type: "silk",
  category: "bridal",
  rating: "⭐ 4.5",
  desc: "Elegant silk saree with rich traditional patterns and smooth texture. Perfect for weddings, festivals, and special occasions.",
  price: 1500

},
{
  Id: 2,
  image: "assets/Gallery/image4.jpg",
  sareeName: "Purple Cotton Saree",
  type: "cotton",
  category: "casual",
  rating: "⭐ 4.3",
  desc: "Lightweight cotton saree designed for comfort and daily wear. Breathable fabric with simple patterns for casual elegance.",
  price: 1000
},
{
  Id: 3,
  image: "assets/Gallery/image9.jpg",
  sareeName: "Mint Green Organza Gold Border Saree",
  type: "cotton",
  category: "best seller",
  rating: "⭐ 4.1",
  desc: "Graceful organza saree with delicate embroidery and sheer texture. Ideal for parties and modern festive styling.",
  price: 2000
}
  ,
{
  Id: 4,
  image: "assets/Gallery/image3.jpg",
  sareeName: "Navy Blue Cotton Block Print Saree",
  type: "designer",
  category: "printed",
  rating: "⭐ 4.0",
  desc: "Graceful organza saree with delicate embroidery and sheer texture. Ideal for parties and modern festive styling.",
  price: 900
},
{
  Id: 5,
  image: "assets/Gallery/viewallimage5.jpg",
  sareeName: "Rust Cotton Saree",
  type: "cotton",
  category: "casual",
  rating: "⭐ 3.6",
  desc: "Elegant rust cotton saree with black border, lightweight fabric perfect for casual traditional wear.",
  price: 800
},
{
  Id: 6,
  image: "assets/Gallery/viewallimage6.jpg",
  sareeName: "Pink Organza Saree",
  type: "silk",
  category: "new arrivals",
  rating: "⭐ 4.7",
  desc: "Graceful pink organza saree featuring delicate embroidery and sheer texture, ideal for festive occasions.",
  price: 1600
},
{
  Id: 7,
  image: "assets/Gallery/viewallimage7.jpg",
  sareeName: "Blue Linen Striped Saree",
  type: "designer",
  category: "printed",
  rating: "⭐ 4.7",
  desc: "Modern blue linen saree with subtle stripes, breathable fabric suitable for office and casual styling.",
  price: 2000
},
{
  Id: 8,
  image: "assets/Gallery/viewallimage8.jpg",
  sareeName: "Sky Blue Printed Saree",
  type: "cotton",
  category: "printed",
  rating: "⭐ 4.6",
  desc: "Soft sky blue cotton saree with traditional prints, comfortable fabric perfect for summer outings.",
  price: 3000
},
{
  Id: 9,
  image: "assets/Gallery/viewallimage9.jpg",
  sareeName: "Crimson Silk Saree",
  type: "party-wear",
  category: "silk",
  rating: "⭐ 4.4",
  desc: "Rich crimson silk saree with golden border detailing, perfect choice for weddings and celebrations.",
  price: 1700
},
{
  Id: 10,
  image: "assets/Gallery/viewallimage10.jpg",
  sareeName: "Emerald Georgette Saree",
  type: "party-wear",
  category: "best seller",
  rating: "⭐ 4.8",
  desc: "Elegant emerald georgette saree with shimmering border, flowy drape ideal for evening parties.",
  price: 3500
},
{
  Id: 11,
  image: "assets/Gallery/viewallimage11.jpg",
  sareeName: "Slate Blue Chiffon Saree",
  type: "festival",
  category: "designer",
  rating: "⭐ 4.5",
  desc: "Stylish slate blue chiffon saree with subtle gold accents, lightweight and graceful festive wear.",
  price: 2700
},
{
  Id: 12,
  image: "assets/Gallery/viewallimage12.jpg",
  sareeName: "Black Banarasi Saree",
  type: "best seller",
  category: "new arrivals",
  rating: "⭐ 4.5",
  desc: "Luxurious black Banarasi saree with intricate woven motifs, perfect for grand traditional occasions.",
  price: 1000
},
{
  Id: 13,
  image: "assets/Gallery/viewallimage13.jpg",
  sareeName: "Golden Silk Saree",
  type: "party-wear",
  category: "silk",
  rating: "⭐ 4.3",
  desc: "Luxurious golden silk saree with smooth finish, elegant drape perfect for weddings and celebrations.",
  price: 3200
},
{
  Id: 14,
  image: "assets/Gallery/viewallimage14.jpg",
  sareeName: "Cream Traditional Saree",
  type: "bridal",
  category: "cotton",
  rating: "⭐ 4.2",
  desc: "Classic cream saree with red and gold border, timeless style perfect for festivals.",
  price: 4000
},
{
  Id: 15,
  image: "assets/Gallery/viewallimage15.jpg",
  sareeName: "Blue Floral Chiffon Saree",
  type: "designer",
  category: "printed",
  rating: "⭐ 4.4",
  desc: "Beautiful blue chiffon saree with floral prints, lightweight fabric ideal for stylish daytime occasions.",
  price: 1100
},
{
  Id: 16,
  image: "assets/Gallery/viewallimage16.jpg",
  sareeName: "Teal Banarasi Saree",
  type: "party-wear",
  category: "bridal",
  rating: "⭐ 4.1",
  desc: "Elegant teal Banarasi saree with intricate woven patterns, rich traditional look for festive occasions.",
  price: 5000
},
{
  Id: 17,
  image: "assets/Gallery/viewallimage17.jpg",
  sareeName: "Purple Printed Cotton Saree",
  type: "designer",
  category: "printed",
  rating: "⭐ 4.3",
  desc: "Stylish purple cotton saree with geometric prints, breathable fabric perfect for casual ethnic wear.",
  price: 900
},
{
  Id: 18,
  image: "assets/Gallery/viewallimage18.jpg",
  sareeName: "Mauve Georgette Saree",
  type: "cotton",
  category: "festival",
  rating: "⭐ 4.0",
  desc: "Graceful mauve georgette saree with subtle texture, flowy drape ideal for modern festive styling.",
  price: 1200
},
{
  Id: 19,
  image: "assets/Gallery/viewallimage19.jpg",
  sareeName: "Charcoal Designer Saree",
  type: "designer",
  category: "new arrivals",
  rating: "⭐ 4.1",
  desc: "Chic charcoal designer saree with delicate motifs, elegant drape suitable for evening events.",
  price: 2000
},
{
  Id: 20,
  image: "assets/Gallery/viewallimage20.jpg ",
  sareeName: "Black and Yellow Silk Saree",
  type: "silk",
  category: "casual",
  rating: "⭐ 4.0",
  desc: "Bold black saree with vibrant yellow pallu, modern contrast design perfect for festive styling.",
  price: 1000
}
]
const container = document.getElementById("products")
if (container) {
  let html = ""
  products.forEach(product => {
    html += `
   <div class="product-card"
data-id="${product.Id}"
data-type="${product.type}"
data-category="${product.category}"
data-price="${product.price}">

<img class="product-img" src="${product.image}" alt="">

<div class="product-details">

<h2 class="product-name">
${product.sareeName}
<div class="ratings">${product.rating}</div>
</h2>

<p class="product-desc">${product.desc}</p>

<div class="price-button">
<b>RS: ${product.price}</b>
<button>BUY</button>
</div>

</div>
</div>
`
  })
  container.innerHTML = html;
}
// ─────────────────────────────────────────────
//  FILTER STATE
// ─────────────────────────────────────────────
let selectedType     = "all";   // from Filter dropdown
let selectedCategory = "all";   // from Sort By dropdown
let selectedPrice    = "all";   // from Price dropdown  (format "min-max" or "all")
let searchText       = "";      // from search input

// ─────────────────────────────────────────────
//  CORE FILTER FUNCTION
//  Runs after every state change. Loops every
//  card and decides show / hide based on ALL
//  active filters simultaneously.
// ─────────────────────────────────────────────
function filterProducts() {
  const cards = document.querySelectorAll(".product-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const cardType     = card.dataset.type;
    const cardCategory = card.dataset.category;
    const cardPrice    = Number(card.dataset.price);
    // .product-name class is set on the <h2> inside each card
    const cardName     = card.querySelector(".product-name")
                             .childNodes[0]           // text node only (skip ratings div)
                             .textContent.toLowerCase();

    let show = true;

    // 1. TYPE filter
    if (selectedType !== "all" && cardType !== selectedType) {
      show = false;
    }

    // 2. CATEGORY filter
    if (selectedCategory !== "all" && cardCategory !== selectedCategory) {
      show = false;
    }

    // 3. PRICE filter  ("min-max" range stored in selectedPrice)
    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      if (cardPrice < min || cardPrice > max) show = false;
    }

    // 4. SEARCH filter (checks saree name)
    if (searchText && !cardName.includes(searchText)) {
      show = false;
    }

    card.style.display = show ? "block" : "none";
    if (show) visibleCount++;
  });

  // Update result count and no-results message
  const countEl    = document.getElementById("result-count");
  const noResults  = document.getElementById("no-results");
  if (countEl)   countEl.textContent = `${visibleCount} saree${visibleCount !== 1 ? "s" : ""} found`;
  if (noResults) noResults.style.display = visibleCount === 0 ? "block" : "none";

  updateActiveTags();
}

// ─────────────────────────────────────────────
//  ACTIVE FILTER TAGS  (shows what's selected)
// ─────────────────────────────────────────────
function updateActiveTags() {
  const tagsEl   = document.getElementById("active-tags");
  const clearBtn = document.getElementById("clear-all");
  if (!tagsEl) return;

  const tags = [];
  if (selectedType     !== "all") tags.push({ label: `Type: ${selectedType}`,     reset: () => { selectedType = "all"; } });
  if (selectedCategory !== "all") tags.push({ label: `Category: ${selectedCategory}`, reset: () => { selectedCategory = "all"; } });
  if (selectedPrice    !== "all") {
    const [min, max] = selectedPrice.split("-").map(Number);
    const label = max >= 999999 ? `Price: Above ₹${min}` : `Price: ₹${min}–₹${max}`;
    tags.push({ label, reset: () => { selectedPrice = "all"; } });
  }
  if (searchText) tags.push({ label: `Search: "${searchText}"`, reset: () => {
    searchText = "";
    const si = document.getElementById("searchInput");
    if (si) si.value = "";
  }});

  tagsEl.innerHTML = tags.map((t, i) =>
    `<span class="filter-tag">${t.label} <button class="tag-remove" data-idx="${i}">✕</button></span>`
  ).join("");

  // wire remove buttons
  tagsEl.querySelectorAll(".tag-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      tags[Number(btn.dataset.idx)].reset();
      filterProducts();
    });
  });

  if (clearBtn) clearBtn.style.display = tags.length > 0 ? "inline-block" : "none";
}

// ─────────────────────────────────────────────
//  SEARCH INPUT
// ─────────────────────────────────────────────
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    searchText = this.value.trim().toLowerCase();
    filterProducts();
  });
}

// ─────────────────────────────────────────────
//  TYPE FILTER  (data-filter-type="...")
// ─────────────────────────────────────────────
document.querySelectorAll("[data-filter-type]").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    selectedType = this.dataset.filterType;
    // highlight active
    document.querySelectorAll("[data-filter-type]").forEach(b => b.classList.remove("active-filter-link"));
    this.classList.add("active-filter-link");
    filterProducts();
  });
});

// ─────────────────────────────────────────────
//  CATEGORY FILTER  (data-filter-category="...")
// ─────────────────────────────────────────────
document.querySelectorAll("[data-filter-category]").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    selectedCategory = this.dataset.filterCategory;
    document.querySelectorAll("[data-filter-category]").forEach(b => b.classList.remove("active-filter-link"));
    this.classList.add("active-filter-link");
    filterProducts();
  });
});

// ─────────────────────────────────────────────
//  PRICE FILTER  (radio inputs with data-filter-price="min-max")
// ─────────────────────────────────────────────
document.querySelectorAll("[data-filter-price]").forEach(radio => {
  radio.addEventListener("change", function () {
    selectedPrice = this.dataset.filterPrice;
    filterProducts();
  });
});

// ─────────────────────────────────────────────
//  CLEAR ALL FILTERS
// ─────────────────────────────────────────────
const clearAllBtn = document.getElementById("clear-all");
if (clearAllBtn) {
  clearAllBtn.addEventListener("click", () => {
    selectedType     = "all";
    selectedCategory = "all";
    selectedPrice    = "all";
    searchText       = "";
    const si = document.getElementById("searchInput");
    if (si) si.value = "";
    // uncheck price radios
    document.querySelectorAll("[data-filter-price]").forEach(r => r.checked = false);
    // remove active highlights
    document.querySelectorAll(".active-filter-link").forEach(b => b.classList.remove("active-filter-link"));
    filterProducts();
  });
}

// Run once on page load to set the result count
filterProducts();