// ─────────────────────────────────────────────
//  wishlist.js  —  used by: viewall.html, wishlist.html
//  Handles: heart click toggle, count badge update
//  NOTE: setupWishlistIcons() lives in products.js
//        because it needs to run right after cards render
// ─────────────────────────────────────────────

// Delegated click on any .wishlist-icon in the page
document.addEventListener("click", function (e) {
  const icon = e.target.closest(".wishlist-icon");
  if (!icon) return;

  const productId = icon.dataset.id;
  let saved = JSON.parse(localStorage.getItem("wishlist")) || [];

  const card = icon.closest(".product-card");
  if (!card) return;

  const product = {
    id:    productId,
    name:  card.querySelector(".product-name")?.innerText.trim()           || "",
    rating:card.querySelector(".ratings")?.innerText.replace("⭐", "").trim() || "",
    price: card.dataset.price                                               || "",
    descr: card.querySelector(".product-desc")?.innerText                  || "",
    img:   card.querySelector("img")?.src                                  || "",
  };

  const alreadySaved = saved.some(item => item.id == productId);

  if (alreadySaved) {
    saved = saved.filter(item => item.id != productId);
    icon.classList.remove("active");   // heart goes white
  } else {
    saved.push(product);
    icon.classList.add("active");      // heart goes red
  }

  localStorage.setItem("wishlist", JSON.stringify(saved));
  updateWishlistCount();               // update badge (defined in nav.js)
});