document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-bg");
  const dots = document.querySelectorAll(".slide-dot");

  if (!slides.length) return;

  let currentSlide = 0;
  let sliderInterval;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
      dot.setAttribute(
        "aria-current",
        i === currentSlide ? "true" : "false"
      );
    });
  }

  function startSlider() {
    clearInterval(sliderInterval);

    sliderInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlider();
    });
  });

  showSlide(0);
  startSlider();
});