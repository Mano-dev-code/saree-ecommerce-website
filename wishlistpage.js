// ─────────────────────────────────────────────
//  wishlist-page.js  —  used by: wishlist.html ONLY
//  Handles: render saved items, remove button
// ─────────────────────────────────────────────

function loadWishlistPage() {
  const container = document.getElementById("wishlist-container");
  if (!container) return;

  const saved = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (saved.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:60px 20px;">
        <p style="font-size:1.2rem; color:#888;">Your wishlist is empty.</p>
        <a href="viewall.html" style="color:#8C3B1F; font-weight:600;">Browse sarees →</a>
      </div>`;
    return;
  }

  let html = "";
  saved.forEach(item => {
    html += `
      <div class="wish-card">
        <img src="${item.img}" alt="${item.name}">
        <button class="remove-wish" onclick="removeFromWishlist('${item.id}')">&times;</button>
        <div class="product-details">
          <h2 class="product-name">${item.name}</h2>
          <div class="ratings">⭐${item.rating}</div>
          <p class="product-desc">${item.descr}</p>
          <div class="price-button">
            <b>RS: ${item.price}</b>
            <button>BUY</button>
          </div>
        </div>
      </div>`;
  });

  container.innerHTML = html;
  updateWishlistCount(); // update badge (defined in nav.js)
}

function removeFromWishlist(id) {
  let saved = JSON.parse(localStorage.getItem("wishlist")) || [];
  saved = saved.filter(item => item.id != id);
  localStorage.setItem("wishlist", JSON.stringify(saved));
  loadWishlistPage(); // re-render
}

document.addEventListener("DOMContentLoaded", loadWishlistPage);