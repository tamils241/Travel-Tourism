# Stackly — Travel & Tourism Website Theme

A premium, modern and fully responsive Travel & Tourism website theme built with **HTML5, CSS3 and vanilla JavaScript only** — no frameworks, no libraries, no build step.

Stackly delivers an immersive travel experience with cinematic hero sections, interactive tour packages, hotel listings, travel guides, booking interfaces, wishlists and rich hover / scroll / 3D animations.

---

## Highlights

- **21 complete pages** with a shared, consistent header and footer.
- **Responsive** from 320px to 1440px+ (mobile-first CSS, Grid + Flexbox, `clamp()` typography).
- **Hover animations** — cards rise, images zoom, links underline, buttons animate arrows.
- **Scroll animations** — `IntersectionObserver`-powered fade/slide/stagger + animated counters.
- **Lightweight 3D** — CSS `perspective`, `preserve-3d`, pointer-driven tilt on cards and hero panels.
- **Interactive JS** — hero slider, search, filters, sorting, wishlist (localStorage), testimonial carousel,
  gallery lightbox, FAQ accordion, form validation, toasts, scroll-to-top, traveller counter.
- **Accessible** — semantic HTML5, ARIA, keyboard navigation, visible focus states, `prefers-reduced-motion`.
- **No console errors, no broken links, graceful image fallback.**

---

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Destinations | `destinations.html` |
| Destination details | `destination-details.html` |
| Tours | `tours.html` |
| Tour details | `tour-details.html` |
| Hotels | `hotels.html` |
| Hotel details | `hotel-details.html` |
| Travel guides | `travel-guides.html` |
| Blog | `blog.html` |
| Blog details | `blog-details.html` |
| About | `about.html` |
| Services | `services.html` |
| Gallery | `gallery.html` |
| Testimonials | `testimonials.html` |
| FAQ | `faq.html` |
| Contact | `contact.html` |
| Booking | `booking.html` |
| Login | `login.html` |
| Register | `register.html` |
| Wishlist | `wishlist.html` |
| 404 | `404.html` |

---

## Project structure

```
stackly-travel-tourism/
├── *.html                     # 21 pages
├── css/
│   ├── style.css              # Design system: variables, reset, base typography
│   ├── components.css         # Header/nav, hero, cards, footer, page components
│   ├── animations.css         # Keyframes + scroll/3D animation utility classes
│   └── responsive.css         # Breakpoint adjustments + reduced-motion overrides
├── js/
│   ├── layout.js              # Injects the shared header + footer (and mobile menu shell)
│   ├── data.js                # Sample destinations / tours / hotels / blog / gallery / testimonial data
│   ├── main.js                # Mobile menu, sticky header, scroll-to-top, toasts, scroll anim, 3D tilt, image fallback
│   ├── navigation.js          # Desktop dropdown menus (keyboard accessible)
│   ├── slider.js              # Hero slider + hero search + hero entrance animation
│   ├── animations.js          # Animated counters, floating-card 3D, parallax
│   ├── destinations.js        # Destination/tour/hotel filtering + sorting + destination grid render
│   ├── tours.js               # Tour grid render
│   ├── hotels.js              # Hotel grid render
│   ├── wishlist.js            # Wishlist state via localStorage
│   ├── testimonials.js        # Testimonial carousel + render
│   ├── gallery.js             # Gallery render, filters and lightbox
│   ├── faq.js                 # FAQ accordion
│   ├── forms.js               # Contact / newsletter / login / register / booking validation
│   └── booking.js             # Traveller counter, prefill, password toggles
└── images/                    # Folders for your own local assets
    ├── logo/ hero/ destinations/ tours/ hotels/ gallery/ testimonials/ blog/ icons/
```

### Shared header & footer

To guarantee an identical header and footer on all 21 pages, they are injected by `js/layout.js`
into `<header id="header">` and `<footer id="footer">`. Pages that need a static header are also fully
supported. This keeps the theme DRY while remaining a pure static site.

---

## Running locally

No build tools required.

**Option 1 — open directly**
Open `index.html` in any modern browser.

**Option 2 — local server (recommended for correct relative paths)**
```bash
# Python 3
python -m http.server 8000

# Node (if you have a server package) or VS Code "Live Server" extension
npx http-server .
```
Then visit `http://localhost:8000`.

---

## Design system

| Token | Value |
|-------|-------|
| Primary — Ocean Blue | `#087F8C` |
| Secondary — Deep Navy | `#102A43` |
| Accent — Sunset Orange | `#FF9F43` |
| Background — Soft White | `#F8FAFC` |
| Text — Dark Slate | `#263746` |
| Highlight — Tropical Green | `#32B67A` |

- **Headings:** Poppins · **Body:** Inter (Google Fonts)
- Breakpoints: 320–480, 481–767, 768–991, 992–1199, 1200+
- All colours, spacing, radii and transitions are defined as CSS custom properties in `css/style.css`.

---

## Customising

- **Colours / fonts / spacing:** edit the `:root` variables in `css/style.css`.
- **Content:** edit the sample data in `js/data.js` (destinations, tours, hotels, blog, gallery, testimonials).
- **Images:** this theme uses royalty-free Unsplash URLs for the demo. Replace them with your own files in
  `images/…` and update the paths (or swap `js/data.js` values) for a fully offline build. A built-in SVG
  fallback guarantees images never appear broken.

---

## Important notes

- **Frontend demonstration only.** Booking, login, registration and payment are UI demonstrations.
  No backend, database or payment gateway is connected, and no booking or payment is ever actually processed.
- Wishlist and search preferences are stored in `localStorage`; nothing sensitive is stored.
- Booking, authentication and email delivery would require a real backend / external service to function.

---

## Browser support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.

## License

MIT — free to use and customise.

## Credits

Designed & built for **Stackly Travel & Tourism**. Photography via [Unsplash](https://unsplash.com). Typography via Google Fonts.
