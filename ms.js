// account sign in or login
const account=document.querySelector(".account");
const login=document.querySelector(".login")
const account_close=document.querySelector(".acc-close")
account.addEventListener("click", () => {
   
    login.style.display = "block";
  
});

account_close.addEventListener("click", () => {
    login.style.display = "none";
});
// Banner slide
const banner = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".bullet");

let index = 0;
let interval = setInterval(nextSlide, 4000);

function showSlide(i) {
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

banner.addEventListener("mouseenter", () => {
  clearInterval(interval);
});

banner.addEventListener("mouseleave", () => {
  interval = setInterval(nextSlide, 4000);
});

bullets.forEach((bullet, i) => {
  bullet.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});
// view all
let view=document.querySelector(".view-all2")
view.addEventListener("click", () => {
   
  window.location.href = "viewall.html";
});