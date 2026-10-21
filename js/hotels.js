/* Stackly Travel & Tourism - Hotels Listing */
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.getElementById('hotelsGrid');
    if (!grid || !window.STACKLY_DATA) return;

    const data = window.STACKLY_DATA.hotels;

    function stars(rating) {
        const full = Math.round(rating);
        return '★'.repeat(full) + '☆'.repeat(5 - full);
    }

    function cardHTML(hotel) {
        return `
        <article class="card hotel-card" data-id="${hotel.id}" data-category="${hotel.category}"
                 data-price="${hotel.price}" data-rating="${hotel.rating}" data-name="${hotel.name}">
            <button class="wishlist-btn" data-id="hotel-${hotel.id}" data-title="${hotel.name}" data-type="hotel"
                    data-image="${hotel.image}" data-price="$${hotel.price}" data-location="${hotel.location}"
                    aria-label="Add ${hotel.name} to wishlist"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"></path></svg></button>
            <div class="card-image">
                <img src="${hotel.image}" alt="${hotel.name} in ${hotel.location}" loading="lazy" width="800" height="450">
                <span class="card-badge">${hotel.badge}</span>
            </div>
            <div class="card-content">
                <div class="meta-info">
                    <span class="meta-item" title="${hotel.rating} out of 5">${stars(hotel.rating)} ${hotel.rating}</span>
                    <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ${hotel.location}</span>
                </div>
                <h3 class="card-title"><a href="hotel-details.html?id=${hotel.id}">${hotel.name}</a></h3>
                <p class="card-description">${hotel.amenities.join(' &middot; ')}</p>
                <div class="card-footer">
                    <div class="card-price">$${hotel.price}<small>/night</small></div>
                    <a href="hotel-details.html?id=${hotel.id}" class="btn btn-outline btn-sm">View Hotel</a>
                </div>
            </div>
        </article>`;
    }

    grid.innerHTML = data.map(cardHTML).join('');

    if (typeof window.updateWishlistButtonStates === 'function') {
        window.updateWishlistButtonStates();
    }
    if (typeof window.updateWishlistCounter === 'function') {
        window.updateWishlistCounter();
    }
});