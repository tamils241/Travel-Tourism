/* Stackly Travel & Tourism - Shared Header & Footer Layout */
(function () {
    const HEADER_HTML = `
    <nav class="nav-container">
        <a href="index.html" class="logo"
           aria-label="Stackly Travel & Tourism Home">

            <span class="logo-icon" aria-hidden="true">
                <img src="images/logo/logo.webp"
                     alt="Stackly logo"
                     width="120"
                     height="45">
            </span>

        </a>
        <ul class="nav-menu">
            <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
            <li class="nav-item dropdown">
                <button class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Destinations</button>
                <ul class="dropdown-menu">
                    <li><a href="destinations.html">All Destinations</a></li>
                    <li><a href="destination-details.html?id=bali">Bali, Indonesia</a></li>
                    <li><a href="destination-details.html?id=maldives">Maldives</a></li>
                    <li><a href="destination-details.html?id=paris">Paris, France</a></li>
                    <li><a href="destination-details.html?id=swiss-alps">Swiss Alps</a></li>
                    <li><a href="destination-details.html?id=kyoto">Kyoto, Japan</a></li>
                    <li><a href="destination-details.html?id=dubai">Dubai, UAE</a></li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <button class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Tours</button>
                <ul class="dropdown-menu">
                    <li><a href="tours.html">All Tours</a></li>
                    <li><a href="tours.html?cat=adventure">Adventure</a></li>
                    <li><a href="tours.html?cat=honeymoon">Honeymoon</a></li>
                    <li><a href="tours.html?cat=family">Family</a></li>
                    <li><a href="tours.html?cat=luxury">Luxury</a></li>
                </ul>
            </li>
            <li class="nav-item"><a href="hotels.html" class="nav-link">Hotels</a></li>
            <li class="nav-item dropdown">
                <button class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Guides</button>
                <ul class="dropdown-menu">
                    <li><a href="travel-guides.html">Travel Guides</a></li>
                    <li><a href="blog.html">Travel Blog</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                </ul>
            </li>
            <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
        <div class="header-actions">
            <a href="destinations.html" class="header-icon-btn" aria-label="Search destinations" title="Search destinations"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m16 16 4 4"></path></svg></a>
            <a href="wishlist.html" class="header-icon-btn" aria-label="View wishlist" title="Wishlist">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"></path></svg>
                <span class="wishlist-count">0</span>
            </a>
            <a href="login.html" class="btn-login">Login</a>
            <a href="booking.html" class="btn-cta">Plan Your Trip</a>
            <button class="hamburger" aria-label="Open navigation menu" aria-expanded="false">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </nav>`;

    const MOBILE_HTML = `
    <div class="mobile-menu-header">
        <a href="index.html" class="mobile-menu-logo">
            <span class="mobile-menu-logo-icon" aria-hidden="true">
                <img src="images/logo/logo.webp"
                     alt="Stackly logo"
                     width="120"
                     height="45">
            </span>
        </a>
        <button class="mobile-menu-close" aria-label="Close navigation menu">&times;</button>
    </div>
    <nav class="mobile-menu-body">
        <ul class="mobile-menu-list">
            <li><a href="index.html" class="mobile-menu-link">Home</a></li>
            <li>
                <button class="mobile-dropdown-toggle">Destinations <span class="arrow">&#9662;</span></button>
                <ul class="mobile-dropdown-menu">
                    <li><a href="destinations.html">All Destinations</a></li>
                    <li><a href="destination-details.html?id=bali">Bali, Indonesia</a></li>
                    <li><a href="destination-details.html?id=maldives">Maldives</a></li>
                    <li><a href="destination-details.html?id=paris">Paris, France</a></li>
                    <li><a href="destination-details.html?id=swiss-alps">Swiss Alps</a></li>
                    <li><a href="destination-details.html?id=kyoto">Kyoto, Japan</a></li>
                    <li><a href="destination-details.html?id=dubai">Dubai, UAE</a></li>
                </ul>
            </li>
            <li>
                <button class="mobile-dropdown-toggle">Tours <span class="arrow">&#9662;</span></button>
                <ul class="mobile-dropdown-menu">
                    <li><a href="tours.html">All Tours</a></li>
                    <li><a href="tours.html?cat=adventure">Adventure</a></li>
                    <li><a href="tours.html?cat=honeymoon">Honeymoon</a></li>
                    <li><a href="tours.html?cat=family">Family</a></li>
                    <li><a href="tours.html?cat=luxury">Luxury</a></li>
                </ul>
            </li>
            <li><a href="hotels.html" class="mobile-menu-link">Hotels</a></li>
            <li>
                <button class="mobile-dropdown-toggle">Guides <span class="arrow">&#9662;</span></button>
                <ul class="mobile-dropdown-menu">
                    <li><a href="travel-guides.html">Travel Guides</a></li>
                    <li><a href="blog.html">Travel Blog</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                </ul>
            </li>
            <li><a href="about.html" class="mobile-menu-link">About</a></li>
            <li><a href="contact.html" class="mobile-menu-link">Contact</a></li>
            <li><a href="faq.html" class="mobile-menu-link">FAQ</a></li>
        </ul>
    </nav>
    <div class="mobile-menu-actions">
        <a href="login.html" class="btn btn-outline btn-full">Login</a>
        <a href="booking.html" class="btn btn-accent btn-full">Plan Your Trip</a>
    </div>`;

    const FOOTER_HTML = `
    <div class="container">
        <div class="footer-grid">
            <div class="footer-section">
                <a href="index.html" class="logo" style="margin-bottom:1rem">
                    <span class="logo-icon" aria-hidden="true">
                <img src="images/logo/logo.webp"
                     alt="Stackly logo"
                     width="120"
                     height="45">
            </span>
                </a>
                <p class="footer-description">Your trusted partner for extraordinary travel experiences. Discover, explore, and create unforgettable memories with Stackly.</p>
                <div class="footer-social">
                    <a href="404.html" class="social-link" aria-label="Stackly on Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>
                    <a href="404.html" class="social-link" aria-label="Stackly on Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                    <a href="404.html" class="social-link" aria-label="Stackly on Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
                    <a href="404.html" class="social-link" aria-label="Stackly on YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg></a>
                </div>
            </div>
            <div class="footer-section">
                <h4 class="footer-heading">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="destinations.html">Destinations</a></li>
                    <li><a href="tours.html">Tours</a></li>
                    <li><a href="hotels.html">Hotels</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="footer-heading">Support</h4>
                <ul class="footer-links">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="booking.html">Booking</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="footer-heading">Newsletter</h4>
                <p class="footer-description">Subscribe for travel inspiration and exclusive deals.</p>
                <form class="newsletter-form" novalidate>
                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
                        <input type="email" class="newsletter-email form-input" placeholder="Your email address" aria-label="Email address" style="flex:1;min-width:160px">
                        <button type="submit" class="btn btn-accent">Subscribe</button>
                    </div>
                    <div class="newsletter-error form-error"></div>
                    <div class="newsletter-success form-success"></div>
                </form>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-copyright">&copy; 2026 Stackly Travel &amp; Tourism. All rights reserved.</p>
            <div class="footer-bottom-links">
                <a href="404.html">Privacy Policy</a>
                <a href="404.html">Terms of Service</a>
                <a href="404.html">Cookie Policy</a>
            </div>
        </div>
    </div>`;

    document.addEventListener('DOMContentLoaded', function () {
        const headerEl = document.getElementById('header');
        const footerEl = document.getElementById('footer');

        if (headerEl) {
            headerEl.innerHTML = HEADER_HTML;
            // Mobile menu markup appended to body
            const overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            const mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            mobileMenu.setAttribute('aria-hidden', 'true');
            mobileMenu.innerHTML = MOBILE_HTML;
            document.body.appendChild(overlay);
            document.body.appendChild(mobileMenu);
        }

        if (footerEl) {
            footerEl.innerHTML = FOOTER_HTML;
        }

        // Set active nav link
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link, .mobile-menu-link').forEach(link => {
            const href = (link.getAttribute('href') || '').split('?')[0];
            if (href === currentPage) {
                link.classList.add('active');
                link.style.color = 'var(--accent)';
            }
        });
    });
})();