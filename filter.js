// ─────────────────────────────────────────────
//  filters.js  —  used by: viewall.html
//  Handles: type filter, category filter, price filter,
//           search input, active tags bar, clear all
//  Depends on: products.js (renderProducts must run first)
// ─────────────────────────────────────────────

let selectedType     = "all";
let selectedCategory = "all";
let selectedPrice    = "all";
let searchText       = "";

function filterProducts() {
  const cards = document.querySelectorAll(".product-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const cardType     = card.dataset.type;
    const cardCategory = card.dataset.category;
    const cardPrice    = Number(card.dataset.price);
    const nameNode     = card.querySelector(".product-name");
    const cardName     = nameNode ? nameNode.childNodes[0].textContent.toLowerCase() : "";

    let show = true;

    if (selectedType !== "all" && cardType !== selectedType)         show = false;
    if (selectedCategory !== "all" && cardCategory !== selectedCategory) show = false;

    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      if (cardPrice < min || cardPrice > max) show = false;
    }

    if (searchText && !cardName.includes(searchText)) show = false;

    card.style.display = show ? "block" : "none";
    if (show) visibleCount++;
  });

  const countEl   = document.getElementById("result-count");
  const noResults = document.getElementById("no-results");
  if (countEl)   countEl.textContent = `${visibleCount} saree${visibleCount !== 1 ? "s" : ""} found`;
  if (noResults) noResults.style.display = visibleCount === 0 ? "block" : "none";

  updateActiveTags();
}

function updateActiveTags() {
  const tagsEl   = document.getElementById("active-tags");
  const clearBtn = document.getElementById("clear-all");
  if (!tagsEl) return;

  const tags = [];

  if (selectedType !== "all")
    tags.push({ label: `Type: ${selectedType}`, reset: () => { selectedType = "all"; } });

  if (selectedCategory !== "all")
    tags.push({ label: `Category: ${selectedCategory}`, reset: () => { selectedCategory = "all"; } });

  if (selectedPrice !== "all") {
    const [min, max] = selectedPrice.split("-").map(Number);
    const label = max >= 999999 ? `Price: Above ₹${min}` : `Price: ₹${min}–₹${max}`;
    tags.push({ label, reset: () => { selectedPrice = "all"; } });
  }

  if (searchText)
    tags.push({ label: `Search: "${searchText}"`, reset: () => {
      searchText = "";
      const si = document.getElementById("searchInput");
      if (si) si.value = "";
    }});

  tagsEl.innerHTML = tags.map((t, i) =>
    `<span class="filter-tag">${t.label} <button class="tag-remove" data-idx="${i}">✕</button></span>`
  ).join("");

  tagsEl.querySelectorAll(".tag-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      tags[Number(btn.dataset.idx)].reset();
      filterProducts();
    });
  });

  if (clearBtn) clearBtn.style.display = tags.length > 0 ? "inline-block" : "none";
}

// Type filter buttons
document.querySelectorAll("[data-filter-type]").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    selectedType = this.dataset.filterType;
    document.querySelectorAll("[data-filter-type]").forEach(b => b.classList.remove("active-filter-link"));
    this.classList.add("active-filter-link");
    filterProducts();
  });
});

// Category filter buttons
document.querySelectorAll("[data-filter-category]").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    selectedCategory = this.dataset.filterCategory;
    document.querySelectorAll("[data-filter-category]").forEach(b => b.classList.remove("active-filter-link"));
    this.classList.add("active-filter-link");
    filterProducts();
  });
});

// Price filter radios
document.querySelectorAll("[data-filter-price]").forEach(radio => {
  radio.addEventListener("change", function () {
    selectedPrice = this.dataset.filterPrice;
    filterProducts();
  });
});

// Search input
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", function () {
    searchText = this.value.trim().toLowerCase();
    filterProducts();
  });
}

// Clear all filters
const clearAllBtn = document.getElementById("clear-all");
if (clearAllBtn) {
  clearAllBtn.addEventListener("click", () => {
    selectedType     = "all";
    selectedCategory = "all";
    selectedPrice    = "all";
    searchText       = "";
    const si = document.getElementById("searchInput");
    if (si) si.value = "";
    document.querySelectorAll("[data-filter-price]").forEach(r => r.checked = false);
    document.querySelectorAll(".active-filter-link").forEach(b => b.classList.remove("active-filter-link"));
    filterProducts();
  });
}

// Run after products are rendered (products.js fires DOMContentLoaded first)
// We listen on DOMContentLoaded too — it fires after renderProducts since scripts are in order
document.addEventListener("DOMContentLoaded", filterProducts);