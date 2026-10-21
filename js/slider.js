/* Stackly Travel & Tourism - Hero Slider & Search */
document.addEventListener('DOMContentLoaded', function () {
    initHeroSlider();
    initHeroSearch();
    initHeroAnimations();
});

/**
 * Hero Slider
 */
function initHeroSlider() {
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroPrevBtn = document.querySelector('.hero-prev');
    const heroNextBtn = document.querySelector('.hero-next');
    const heroDots = document.querySelectorAll('.hero-dot');

    if (heroSlides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = heroSlides.length;

    function showSlide(n) {
        heroSlides.forEach((slide, index) => slide.classList.toggle('active', index === n));
        heroDots.forEach((dot, index) => dot.classList.toggle('active', index === n));
        currentSlide = n;
    }

    if (heroNextBtn) heroNextBtn.addEventListener('click', () => showSlide((currentSlide + 1) % totalSlides));
    if (heroPrevBtn) heroPrevBtn.addEventListener('click', () => showSlide((currentSlide - 1 + totalSlides) % totalSlides));
    heroDots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && totalSlides > 1) {
        setInterval(() => showSlide((currentSlide + 1) % totalSlides), 5000);
    }
}

/**
 * Hero Search Panel
 */
function initHeroSearch() {
    const searchForm = document.querySelector('.hero-search-form');
    if (!searchForm) return;

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const destination = document.getElementById('destination')?.value.trim();
        const date = document.getElementById('travel-date')?.value;
        const travelers = document.getElementById('travelers')?.value;
        const category = document.getElementById('trip-category')?.value;

        if (!destination) {
            showToast('Please enter a destination', 'warning');
            document.getElementById('destination')?.focus();
            return;
        }
        if (!date) {
            showToast('Please select a travel date', 'warning');
            document.getElementById('travel-date')?.focus();
            return;
        }

        try {
            sessionStorage.setItem('stackly-search', JSON.stringify({ destination, date, travelers, category }));
        } catch (err) { /* storage unavailable */ }

        showToast('Searching for destinations...', 'success');
        setTimeout(() => { window.location.href = 'destinations.html'; }, 500);
    });
}

/**
 * Hero Entrance Animations
 */
function initHeroAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s ease-out ${index * 200}ms`;
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
}