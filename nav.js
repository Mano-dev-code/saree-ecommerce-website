// ─────────────────────────────────────────────
//  nav.js  —  used by: home.html, viewall.html, wishlist.html
//  Handles: account dropdown, wishlist count badge
// ─────────────────────────────────────────────

// Account dropdown open/close
const account      = document.querySelector(".account");
const loginDropdown = document.querySelector(".login");
const accountClose = document.querySelector(".acc-close");

if (account && loginDropdown && accountClose) {
  account.addEventListener("click", () => {
    loginDropdown.style.display = "block";
  });
  accountClose.addEventListener("click", () => {
    loginDropdown.style.display = "none";
  });
}

// Login popup (used in home.html and viewall.html)
const loginBtn = document.querySelector(".log");
const popup    = document.getElementById("loginPopup");
const overlay  = document.getElementById("overlay");
const closeBtn = document.getElementById("closeLogin");

if (loginBtn && popup && overlay) {
  loginBtn.addEventListener("click", () => {
    popup.style.display  = "block";
    overlay.style.display = "block";
  });
}
if (closeBtn && popup && overlay) {
  closeBtn.addEventListener("click", () => {
    popup.style.display  = "none";
    overlay.style.display = "none";
  });
}
if (overlay) {
  overlay.addEventListener("click", () => {
    if (popup) popup.style.display  = "none";
    overlay.style.display = "none";
  });
}

// Wishlist count badge  (runs on every page)
function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const badge    = document.getElementById("wishlist-count");
  if (badge) badge.textContent = wishlist.length;
}

// Run on load
document.addEventListener("DOMContentLoaded", updateWishlistCount);