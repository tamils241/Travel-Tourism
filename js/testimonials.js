/* Stackly Travel & Tourism - Testimonials Carousel */
document.addEventListener('DOMContentLoaded', function() {
    renderTestimonials();
    initTestimonialsCarousel();
});

function renderTestimonials() {
    const track = document.querySelector('.testimonials-track');
    if (!track || !window.STACKLY_DATA) return;
    if (track.children.length > 0) return; // already has slides

    track.innerHTML = window.STACKLY_DATA.testimonials.map(t => {
        const initials = t.name.split(' ').map(n => n[0]).join('').slice(0, 2);
        const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
        return `
        <div class="testimonial-slide">
            <div class="testimonial-card">
                <div class="testimonial-stars" aria-label="${t.rating} out of 5 stars">${stars}</div>
                <p class="testimonial-text">&ldquo;${t.text}&rdquo;</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar" aria-hidden="true">${initials}</div>
                    <div>
                        <p class="testimonial-name">${t.name}</p>
                        <p class="testimonial-location">Visited ${t.location}</p>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dotsContainer = document.querySelector('.testimonial-dots');

    if (!carousel || !track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function getSlidesPerView() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    }

    let slidesPerView = getSlidesPerView();

    function buildDots() {
        if (!dotsContainer) return;
        const pageCount = totalSlides - slidesPerView + 1;
        dotsContainer.innerHTML = Array.from({ length: pageCount }, function (_, i) {
            return `<button class="testimonial-dot${i === currentIndex ? ' active' : ''}" role="tab" aria-label="Go to testimonial page ${i + 1}"></button>`;
        }).join('');
    }

    function updateCarousel() {
        const slideWidth = carousel.clientWidth / slidesPerView;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        const dots = dotsContainer ? dotsContainer.querySelectorAll('.testimonial-dot') : [];
        dots.forEach(function (dot, index) {
            dot.classList.toggle('active', index === currentIndex);
        });
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex >= totalSlides - slidesPerView;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const maxIndex = totalSlides - slidesPerView;
            if (currentIndex < maxIndex) { currentIndex++; updateCarousel(); }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) { currentIndex--; updateCarousel(); }
        });
    }

    if (dotsContainer) {
        dotsContainer.addEventListener('click', function (e) {
            const dot = e.target.closest('.testimonial-dot');
            if (!dot) return;
            const index = Array.prototype.indexOf.call(dotsContainer.children, dot);
            currentIndex = Math.min(index, totalSlides - slidesPerView);
            updateCarousel();
        });
    }

    window.addEventListener('resize', function() {
        const newSlidesPerView = getSlidesPerView();
        if (newSlidesPerView !== slidesPerView) {
            slidesPerView = newSlidesPerView;
            currentIndex = 0;
            buildDots();
        }
        updateCarousel();
    });

    buildDots();
    updateCarousel();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && totalSlides > slidesPerView) {
        setInterval(function() {
            const maxIndex = totalSlides - slidesPerView;
            if (currentIndex >= maxIndex) { currentIndex = 0; } else { currentIndex++; }
            updateCarousel();
        }, 6000);
    }
}