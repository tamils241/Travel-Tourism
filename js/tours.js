/* Stackly Travel & Tourism - Tours Listing */
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('toursGrid');
    if (!grid || !window.STACKLY_DATA) return;

    const data = window.STACKLY_DATA.tours;
    const params = new URLSearchParams(window.location.search);
    const initialCat = params.get('cat') || 'all';

    function starString(rating) {
        const full = Math.round(rating);
        return '★'.repeat(full) + '☆'.repeat(5 - full);
    }

    function cardHTML(tour) {
        return `
        <article class="card tour-card" data-id="${tour.id}" data-category="${tour.category}"
                 data-price="${tour.price}" data-duration="${tour.duration}" data-rating="${tour.rating}">
            <button class="wishlist-btn" data-id="tour-${tour.id}" data-title="${tour.title}" data-type="tour"
                    data-image="${tour.image}" data-price="$${tour.price}" aria-label="Add ${tour.title} to wishlist"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"></path></svg></button>
            <div class="card-image">
                <img src="${tour.image}" alt="${tour.title} - ${tour.destination}" loading="lazy" width="800" height="450">
                <span class="card-badge ${tour.badgeClass}">${tour.badge}</span>
            </div>
            <div class="card-content">
                <div class="meta-info">
                    <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${tour.duration} Days</span>
                    <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ${tour.destination}</span>
                    <span class="meta-item" title="Rating"><svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> ${tour.rating}</span>
                </div>
                <h3 class="card-title"><a href="tour-details.html?id=${tour.id}">${tour.title}</a></h3>
                <p class="card-description">${tour.description}</p>
                <div class="card-footer">
                    <div class="card-price">$${tour.price.toLocaleString()}<small>/person</small></div>
                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
                        <a href="tour-details.html?id=${tour.id}" class="btn btn-outline btn-sm">View Details</a>
                        <a href="booking.html?tour=${tour.id}" class="btn btn-accent btn-sm">Book Now</a>
                    </div>
                </div>
            </div>
        </article>`;
    }

    grid.innerHTML = data.map(cardHTML).join('');

    // Apply category from query string
    if (initialCat && initialCat !== 'all') {
        const btn = document.querySelector(`.tour-filter-btn[data-filter="${initialCat}"]`);
        if (btn) {
            document.querySelectorAll('.tour-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tour-card').forEach(card => {
                card.style.display = card.getAttribute('data-category') === initialCat ? 'flex' : 'none';
            });
        }
    }

    // Update wishlist button states if wishlist ready
    if (typeof window.updateWishlistButtonStates === 'function') {
        window.updateWishlistButtonStates();
    }
    if (typeof window.updateWishlistCounter === 'function') {
        window.updateWishlistCounter();
    }
});