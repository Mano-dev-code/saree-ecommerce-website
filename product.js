// ─────────────────────────────────────────────
//  products.js  —  used by: viewall.html
//  Handles: product data + rendering cards into #products
// ─────────────────────────────────────────────

const products = [
  { Id: 1,  image: "assets/Gallery/image6.jpg",          sareeName: "Yellow Silk Saree",                    type: "silk",       category: "bridal",       rating: 4.5, desc: "Elegant silk saree with rich traditional patterns and smooth texture. Perfect for weddings, festivals, and special occasions.", price: 1500 },
  { Id: 2,  image: "assets/Gallery/image4.jpg",          sareeName: "Purple Cotton Saree",                  type: "cotton",     category: "casual",       rating: 4.3, desc: "Lightweight cotton saree designed for comfort and daily wear. Breathable fabric with simple patterns for casual elegance.", price: 1000 },
  { Id: 3,  image: "assets/Gallery/image9.jpg",          sareeName: "Mint Green Organza Gold Border Saree", type: "cotton",     category: "best seller",  rating: 4.1, desc: "Graceful organza saree with delicate embroidery and sheer texture. Ideal for parties and modern festive styling.", price: 2000 },
  { Id: 4,  image: "assets/Gallery/image3.jpg",          sareeName: "Navy Blue Cotton Block Print Saree",   type: "designer",   category: "printed",      rating: 4.0, desc: "Graceful organza saree with delicate embroidery and sheer texture. Ideal for parties and modern festive styling.", price: 900 },
  { Id: 5,  image: "assets/Gallery/viewallimage5.jpg",   sareeName: "Rust Cotton Saree",                    type: "cotton",     category: "casual",       rating: 3.6, desc: "Elegant rust cotton saree with black border, lightweight fabric perfect for casual traditional wear.", price: 800 },
  { Id: 6,  image: "assets/Gallery/viewallimage6.jpg",   sareeName: "Pink Organza Saree",                   type: "silk",       category: "new arrivals", rating: 4.7, desc: "Graceful pink organza saree featuring delicate embroidery and sheer texture, ideal for festive occasions.", price: 1600 },
  { Id: 7,  image: "assets/Gallery/viewallimage7.jpg",   sareeName: "Blue Linen Striped Saree",             type: "designer",   category: "printed",      rating: 4.7, desc: "Modern blue linen saree with subtle stripes, breathable fabric suitable for office and casual styling.", price: 2000 },
  { Id: 8,  image: "assets/Gallery/viewallimage8.jpg",   sareeName: "Sky Blue Printed Saree",               type: "cotton",     category: "printed",      rating: 4.6, desc: "Soft sky blue cotton saree with traditional prints, comfortable fabric perfect for summer outings.", price: 3000 },
  { Id: 9,  image: "assets/Gallery/viewallimage9.jpg",   sareeName: "Crimson Silk Saree",                   type: "party-wear", category: "silk",         rating: 4.4, desc: "Rich crimson silk saree with golden border detailing, perfect choice for weddings and celebrations.", price: 1700 },
  { Id: 10, image: "assets/Gallery/viewallimage10.jpg",  sareeName: "Emerald Georgette Saree",              type: "party-wear", category: "best seller",  rating: 4.8, desc: "Elegant emerald georgette saree with shimmering border, flowy drape ideal for evening parties.", price: 3500 },
  { Id: 11, image: "assets/Gallery/viewallimage11.jpg",  sareeName: "Slate Blue Chiffon Saree",             type: "festival",   category: "designer",     rating: 4.5, desc: "Stylish slate blue chiffon saree with subtle gold accents, lightweight and graceful festive wear.", price: 2700 },
  { Id: 12, image: "assets/Gallery/viewallimage12.jpg",  sareeName: "Black Banarasi Saree",                 type: "best seller",category: "new arrivals", rating: 4.5, desc: "Luxurious black Banarasi saree with intricate woven motifs, perfect for grand traditional occasions.", price: 1000 },
  { Id: 13, image: "assets/Gallery/viewallimage13.jpg",  sareeName: "Golden Silk Saree",                    type: "party-wear", category: "silk",         rating: 4.3, desc: "Luxurious golden silk saree with smooth finish, elegant drape perfect for weddings and celebrations.", price: 3200 },
  { Id: 14, image: "assets/Gallery/viewallimage14.jpg",  sareeName: "Cream Traditional Saree",              type: "bridal",     category: "cotton",       rating: 4.2, desc: "Classic cream saree with red and gold border, timeless style perfect for festivals.", price: 4000 },
  { Id: 15, image: "assets/Gallery/viewallimage15.jpg",  sareeName: "Blue Floral Chiffon Saree",            type: "designer",   category: "printed",      rating: 4.4, desc: "Beautiful blue chiffon saree with floral prints, lightweight fabric ideal for stylish daytime occasions.", price: 1100 },
  { Id: 16, image: "assets/Gallery/viewallimage16.jpg",  sareeName: "Teal Banarasi Saree",                  type: "party-wear", category: "bridal",       rating: 4.1, desc: "Elegant teal Banarasi saree with intricate woven patterns, rich traditional look for festive occasions.", price: 5000 },
  { Id: 17, image: "assets/Gallery/viewallimage17.jpg",  sareeName: "Purple Printed Cotton Saree",          type: "designer",   category: "printed",      rating: 4.3, desc: "Stylish purple cotton saree with geometric prints, breathable fabric perfect for casual ethnic wear.", price: 900 },
  { Id: 18, image: "assets/Gallery/viewallimage18.jpg",  sareeName: "Mauve Georgette Saree",                type: "cotton",     category: "festival",     rating: 4.0, desc: "Graceful mauve georgette saree with subtle texture, flowy drape ideal for modern festive styling.", price: 1200 },
  { Id: 19, image: "assets/Gallery/viewallimage19.jpg",  sareeName: "Charcoal Designer Saree",              type: "designer",   category: "new arrivals", rating: 4.1, desc: "Chic charcoal designer saree with delicate motifs, elegant drape suitable for evening events.", price: 2000 },
  { Id: 20, image: "assets/Gallery/viewallimage20.jpg",  sareeName: "Black and Yellow Silk Saree",          type: "silk",       category: "casual",       rating: 4.0, desc: "Bold black saree with vibrant yellow pallu, modern contrast design perfect for festive styling.", price: 1000 },
];

function renderProducts() {
  const container = document.getElementById("products");
  if (!container) return;

  let html = "";
  products.forEach(product => {
    html += `
      <div class="product-card"
        data-id="${product.Id}"
        data-type="${product.type}"
        data-category="${product.category}"
        data-price="${product.price}">

        <div class="wishlist-icon" data-id="${product.Id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="heart" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
        </div>

        <img class="product-img" src="${product.image}" alt="${product.sareeName}">

        <div class="product-details">
          <h2 class="product-name">${product.sareeName}</h2>
          <div class="ratings">⭐ ${product.rating}</div>
          <p class="product-desc">${product.desc}</p>
          <div class="price-button">
            <b>RS: ${product.price}</b>
            <button>BUY</button>
          </div>
        </div>

      </div>
    `;
  });

  container.innerHTML = html;

  // After cards are in DOM — mark wishlisted hearts and update badge
  setupWishlistIcons();
  updateWishlistCount();
}

// Mark hearts red for already-wishlisted items
function setupWishlistIcons() {
  const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
  document.querySelectorAll(".wishlist-icon").forEach(icon => {
    const id = icon.dataset.id;
    if (saved.some(item => item.id == id)) {
      icon.classList.add("active");
    } else {
      icon.classList.remove("active");
    }
  });
}

// Run on page load
document.addEventListener("DOMContentLoaded", renderProducts);