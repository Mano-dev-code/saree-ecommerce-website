// ─────────────────────────────────────────────
//  banner.js  —  used by: home.html
//  Handles: auto-sliding banner, bullet nav
// ─────────────────────────────────────────────

const banner  = document.querySelector(".slider");
const slides  = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".bullet");

if (!banner || slides.length === 0) return; // nothing to do on other pages

let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 4000);

function showSlide(i) {
  slides.forEach(s  => s.classList.remove("active"));
  bullets.forEach(b => b.classList.remove("active"));
  slides[i].classList.add("active");
  bullets[i].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Pause on hover
banner.addEventListener("mouseenter", () => clearInterval(slideInterval));
banner.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 4000);
});

// Bullet clicks
bullets.forEach((bullet, i) => {
  bullet.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});