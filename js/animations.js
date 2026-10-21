/* Stackly Travel & Tourism - Animated Counters & 3D Effects */
document.addEventListener('DOMContentLoaded', function () {
    initCounters();
    initFloatingCards3D();
    initParallax();
});

/**
 * Animated Counters
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    if (counters.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target') || '0', 10);

            if (prefersReducedMotion) {
                counter.textContent = target.toLocaleString();
            } else {
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };
                updateCounter();
            }
            counterObserver.unobserve(counter);
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

/**
 * 3D Floating Cards (hero)
 */
function initFloatingCards3D() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (prefersReducedMotion || isTouch) return;

    document.querySelectorAll('.floating-card').forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / 15;
            const rotateY = (rect.width / 2 - x) / 15;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
    });
}

/**
 * Lightweight parallax for elements with data-parallax
 */
function initParallax() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = document.querySelectorAll('[data-parallax]');
    if (elements.length === 0) return;

    let ticking = false;

    function update() {
        const scrollY = window.pageYOffset;
        elements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
            const rect = el.getBoundingClientRect();
            const offset = (rect.top + scrollY - window.innerHeight / 2) * speed;
            el.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    });
}