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
                <a href="index.html" class="logo" style="margin-bottom: var(--space-md);">
                <span class="logo-icon" aria-hidden="true">
                    <img src="images/logo/logo.webp"
                         alt="Stackly logo"
                         width="120"
                         height="45">
                </span>
                </a>
                <p class="footer-description">Your trusted partner for extraordinary travel experiences. Discover, explore, and create unforgettable memories with Stackly.</p>
                <div class="footer-social">
                    <a href="404.html" class="social-link" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>
                    <a href="404.html" class="social-link" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                    <a href="404.html" class="social-link" aria-label="X (Twitter)"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                    <a href="404.html" class="social-link" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg></a>
                </div>
            </div>

            <div class="footer-section">
                <h4 class="footer-heading">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="destinations.html">Destinations</a></li>
                    <li><a href="tours.html">Tours</a></li>
                    <li><a href="hotels.html">Hotels</a></li>
                    <li><a href="blog.html">Blog</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4 class="footer-heading">Support</h4>
                <ul class="footer-links">
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4 class="footer-heading">Contact Info</h4>
                <ul class="footer-contact">
                    <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:-2px"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> 123 Travel Street, City, Country</li>
                    <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:-2px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z"/></svg> +1 (555) 123-4567</li>
                    <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:-2px"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg> info@stackly.com</li>
                    <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="vertical-align:-2px"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Mon-Sun: 9:00 AM - 6:00 PM</li>
                </ul>
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