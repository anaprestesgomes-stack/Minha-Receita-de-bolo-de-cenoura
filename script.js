const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const scrollButtons = document.querySelectorAll("[data-scroll]");
scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });
}

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);
