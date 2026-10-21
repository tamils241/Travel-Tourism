/* Stackly Travel & Tourism - Main JavaScript */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initStickyHeader();
    initScrollToTop();
    initToastSystem();
    initScrollAnimations();
    init3DTiltCards();
    initWishlistCounter();
    initImageFallback();
});

/**
 * Graceful image fallback - replaces broken images with a local SVG placeholder
 */
function initImageFallback() {
    const PLACEHOLDER = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#087F8C"/><stop offset="1" stop-color="#102A43"/></linearGradient></defs>' +
        '<rect width="800" height="500" fill="url(#g)"/>' +
        '<text x="400" y="250" font-family="Poppins, Arial, sans-serif" font-size="34" fill="#ffffff" ' +
        'text-anchor="middle" opacity="0.9">Stackly Travel</text></svg>'
    );

    function applyFallback(img) {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = 'true';
        img.src = PLACEHOLDER;
    }

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function () { applyFallback(img); });
        if (img.complete && img.naturalWidth === 0) applyFallback(img);
    });

    // Catch images added later (dynamically rendered cards)
    document.addEventListener('error', function (e) {
        if (e.target && e.target.tagName === 'IMG') applyFallback(e.target);
    }, true);
}

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const body = document.body;
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    if (!hamburger || !mobileMenu || !mobileMenuClose) return;
    
    // Open mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.add('active');
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        body.classList.add('no-scroll');
        mobileMenu.setAttribute('aria-hidden', 'false');
        hamburger.setAttribute('aria-expanded', 'true');
    });
    
    // Close mobile menu function
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.classList.remove('no-scroll');
        mobileMenu.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
        
        // Close all dropdowns
        mobileDropdownToggles.forEach(toggle => {
            toggle.classList.remove('active');
            const menu = toggle.nextElementSibling;
            if (menu && menu.classList.contains('mobile-dropdown-menu')) {
                menu.classList.remove('active');
            }
        });
    }
    
    // Close on X button
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    
    // Close on overlay click
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // Handle mobile dropdowns
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const menu = this.nextElementSibling;
            if (menu && menu.classList.contains('mobile-dropdown-menu')) {
                menu.classList.toggle('active');
            }
        });
    });
    
    // Close menu when clicking on mobile menu links (except dropdown toggles)
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link, .mobile-dropdown-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Don't close if it's a dropdown toggle itself (handled above)
            if (this.classList.contains('mobile-dropdown-toggle')) return;
            closeMobileMenu();
        });
    });
}

/**
 * Sticky Header
 */
function initStickyHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Scroll to Top Button
 */
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Toast Notification System
 */
function initToastSystem() {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
}

// Show toast notification
function showToast(message, type = 'success', duration = 3000) {
    const toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

// Make showToast globally available
window.showToast = showToast;

/**
 * Scroll Animations using IntersectionObserver
 */
function initScrollAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Expose for dynamically injected content
window.initScrollAnimations = initScrollAnimations;
window.init3DTiltCards = init3DTiltCards;

/**
 * 3D Tilt Effect for Cards
 */
function init3DTiltCards() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const cards = document.querySelectorAll('.card-3d');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            const inner = card.querySelector('.card-3d-inner');
            if (inner) {
                inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const inner = card.querySelector('.card-3d-inner');
            if (inner) {
                inner.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
            }
        });
    });
}

/**
 * Wishlist Counter
 */
function initWishlistCounter() {
    const countElements = document.querySelectorAll('.wishlist-count');
    const wishlist = JSON.parse(localStorage.getItem('stackly-wishlist') || '[]');
    
    countElements.forEach(el => {
        el.textContent = wishlist.length;
    });
}

// Update wishlist counter globally
function updateWishlistCounter() {
    const wishlist = JSON.parse(localStorage.getItem('stackly-wishlist') || '[]');
    const countElements = document.querySelectorAll('.wishlist-count');
    
    countElements.forEach(el => {
        el.textContent = wishlist.length;
    });
}

window.updateWishlistCounter = updateWishlistCounter;

/**
 * Form Validation Helpers
 */
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9.-]*\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

window.validateEmail = validateEmail;
window.validatePhone = validatePhone;

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.color = 'var(--accent)';
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);