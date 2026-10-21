/* Stackly Travel & Tourism - Destinations, Tours, Hotels */
document.addEventListener('DOMContentLoaded', function() {
    renderDestinationsListing();
    initDestinationFilters();
    initTourFilters();
    initHotelFilters();
    initSearchFromStorage();
});

/**
 * Render destinations grid from sample data
 */
function renderDestinationsListing() {
    const grid = document.getElementById('destinationsGrid');
    if (!grid || !window.STACKLY_DATA) return;

    const data = window.STACKLY_DATA.destinations;

    grid.innerHTML = data.map(dest => `
        <article class="card destination-card" data-id="${dest.id}" data-category="${dest.category}"
                 data-price="${dest.price}" data-rating="${dest.rating}" data-name="${dest.name}">
            <button class="wishlist-btn" data-id="dest-${dest.id}" data-title="${dest.name}, ${dest.country}"
                    data-type="destination" data-image="${dest.image}" data-price="$${dest.price}"
                    aria-label="Add ${dest.name} to wishlist"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"></path></svg></button>
            <div class="card-image">
                <img src="${dest.image}" alt="${dest.name}, ${dest.country}" loading="lazy" width="800" height="450">
                <span class="card-badge ${dest.badgeClass}">${dest.badge}</span>
            </div>
            <div class="card-content">
                <div class="meta-info">
                    <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ${dest.country}</span>
                    <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> ${dest.duration}</span>
                    <span class="meta-item" title="Rating"><svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> ${dest.rating} (${dest.reviews})</span>
                </div>
                <h3 class="card-title"><a href="destination-details.html?id=${dest.id}">${dest.name}, ${dest.country}</a></h3>
                <p class="card-description">${dest.description}</p>
                <div class="card-footer">
                    <div class="card-price">$${dest.price.toLocaleString()}<small>/person</small></div>
                    <a href="destination-details.html?id=${dest.id}" class="btn btn-outline btn-sm">Explore</a>
                </div>
            </div>
        </article>`).join('');

    if (typeof window.updateWishlistButtonStates === 'function') {
        window.updateWishlistButtonStates();
    }
}

/**
 * Destination Filters
 */
function initDestinationFilters() {
    const filterBtns = document.querySelectorAll('.destination-filter-btn');
    const destinationCards = document.querySelectorAll('.destination-card');
    const sortSelect = document.querySelector('#destination-sort');
    
    if (filterBtns.length === 0) return;
    
    const searchInput = document.querySelector('#destination-search');

    function filterDestinations() {
        const activeFilter = document.querySelector('.destination-filter-btn.active')?.getAttribute('data-filter') || 'all';
        const sortBy = sortSelect?.value || 'popular';
        const query = (searchInput?.value || '').trim().toLowerCase();

        const cardsArray = Array.from(destinationCards);

        // Filter by category and search query
        cardsArray.forEach(card => {
            const category = card.getAttribute('data-category');
            const name = (card.getAttribute('data-name') || '').toLowerCase();
            const matchesCategory = (activeFilter === 'all' || category === activeFilter);
            const matchesQuery = (!query || name.includes(query));
            card.style.display = (matchesCategory && matchesQuery) ? 'flex' : 'none';
        });

        // Toggle empty state
        const empty = document.getElementById('destinationsEmpty');
        if (empty) {
            const anyVisible = cardsArray.some(c => c.style.display !== 'none');
            empty.hidden = anyVisible;
        }

        // Sort visible cards
        if (sortBy) {
            const visibleCards = cardsArray.filter(c => c.style.display !== 'none');
            const container = document.querySelector('.destinations-grid');
            if (container) {
                visibleCards.sort((a, b) => {
                    if (sortBy === 'price-low') {
                        const priceA = parseInt(a.getAttribute('data-price') || '999999');
                        const priceB = parseInt(b.getAttribute('data-price') || '999999');
                        return priceA - priceB;
                    } else if (sortBy === 'price-high') {
                        const priceA = parseInt(a.getAttribute('data-price') || '0');
                        const priceB = parseInt(b.getAttribute('data-price') || '0');
                        return priceB - priceA;
                    } else if (sortBy === 'rating') {
                        const ratingA = parseFloat(a.getAttribute('data-rating') || '0');
                        const ratingB = parseFloat(b.getAttribute('data-rating') || '0');
                        return ratingB - ratingA;
                    } else if (sortBy === 'name') {
                        const nameA = a.getAttribute('data-name') || '';
                        const nameB = b.getAttribute('data-name') || '';
                        return nameA.localeCompare(nameB);
                    }
                    return 0;
                });
                visibleCards.forEach(c => container.appendChild(c));
            }
        }
    }
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterDestinations();
        });
    });
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filterDestinations);
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterDestinations);
    }
}

/**
 * Tour Filters
 */
function initTourFilters() {
    const filterBtns = document.querySelectorAll('.tour-filter-btn');
    const tourCards = document.querySelectorAll('.tour-card');
    const sortSelect = document.querySelector('#tour-sort');
    const priceRange = document.querySelector('#price-range');
    const priceValue = document.querySelector('#price-value');
    
    if (filterBtns.length === 0) return;
    
    function filterTours() {
        const activeFilter = document.querySelector('.tour-filter-btn.active')?.getAttribute('data-filter') || 'all';
        const sortBy = sortSelect?.value || 'popular';
        const maxPrice = priceRange ? parseInt(priceRange.value) : 10000;
        
        if (priceValue) {
            priceValue.textContent = `$${maxPrice}`;
        }
        
        const cardsArray = Array.from(tourCards);
        
        cardsArray.forEach(card => {
            const category = card.getAttribute('data-category');
            const price = parseInt(card.getAttribute('data-price') || '999999');
            const matchesFilter = (activeFilter === 'all' || category === activeFilter);
            const matchesPrice = price <= maxPrice;
            card.style.display = (matchesFilter && matchesPrice) ? 'flex' : 'none';
        });
        
        // Sort
        if (sortBy) {
            const container = document.querySelector('.tours-grid');
            const visibleCards = cardsArray.filter(c => c.style.display !== 'none');
            if (container) {
                visibleCards.sort((a, b) => {
                    if (sortBy === 'price-low') {
                        const priceA = parseInt(a.getAttribute('data-price') || '999999');
                        const priceB = parseInt(b.getAttribute('data-price') || '999999');
                        return priceA - priceB;
                    } else if (sortBy === 'price-high') {
                        const priceA = parseInt(a.getAttribute('data-price') || '0');
                        const priceB = parseInt(b.getAttribute('data-price') || '0');
                        return priceB - priceA;
                    } else if (sortBy === 'duration') {
                        const durA = parseInt(a.getAttribute('data-duration') || '999');
                        const durB = parseInt(b.getAttribute('data-duration') || '999');
                        return durA - durB;
                    } else if (sortBy === 'rating') {
                        const ratingA = parseFloat(a.getAttribute('data-rating') || '0');
                        const ratingB = parseFloat(b.getAttribute('data-rating') || '0');
                        return ratingB - ratingA;
                    }
                    return 0;
                });
                visibleCards.forEach(c => container.appendChild(c));
            }
        }
    }
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterTours();
        });
    });
    
    if (sortSelect) sortSelect.addEventListener('change', filterTours);
    if (priceRange) priceRange.addEventListener('input', filterTours);
}

/**
 * Hotel Filters
 */
function initHotelFilters() {
    const filterBtns = document.querySelectorAll('.hotel-filter-btn');
    const hotelCards = document.querySelectorAll('.hotel-card');
    const sortSelect = document.querySelector('#hotel-sort');
    const starFilter = document.querySelector('#star-filter');
    const priceRange = document.querySelector('#hotel-price-range');
    const priceValue = document.querySelector('#hotel-price-value');
    
    if (filterBtns.length === 0) return;
    
    function filterHotels() {
        const activeFilter = document.querySelector('.hotel-filter-btn.active')?.getAttribute('data-filter') || 'all';
        const sortBy = sortSelect?.value || 'popular';
        const stars = starFilter?.value || 'all';
        const maxPrice = priceRange ? parseInt(priceRange.value) : 2000;
        
        if (priceValue) {
            priceValue.textContent = `$${maxPrice}`;
        }
        
        const cardsArray = Array.from(hotelCards);
        
        cardsArray.forEach(card => {
            const category = card.getAttribute('data-category');
            const price = parseInt(card.getAttribute('data-price') || '999999');
            const rating = parseFloat(card.getAttribute('data-rating') || '0');
            
            const matchesFilter = (activeFilter === 'all' || category === activeFilter);
            const matchesPrice = price <= maxPrice;
            const matchesStars = (stars === 'all' || rating >= parseFloat(stars));
            
            card.style.display = (matchesFilter && matchesPrice && matchesStars) ? 'flex' : 'none';
        });
        
        // Sort
        if (sortBy) {
            const container = document.querySelector('.hotels-grid');
            const visibleCards = cardsArray.filter(c => c.style.display !== 'none');
            if (container) {
                visibleCards.sort((a, b) => {
                    if (sortBy === 'price-low') {
                        const priceA = parseInt(a.getAttribute('data-price') || '999999');
                        const priceB = parseInt(b.getAttribute('data-price') || '999999');
                        return priceA - priceB;
                    } else if (sortBy === 'price-high') {
                        const priceA = parseInt(a.getAttribute('data-price') || '0');
                        const priceB = parseInt(b.getAttribute('data-price') || '0');
                        return priceB - priceA;
                    } else if (sortBy === 'rating') {
                        const ratingA = parseFloat(a.getAttribute('data-rating') || '0');
                        const ratingB = parseFloat(b.getAttribute('data-rating') || '0');
                        return ratingB - ratingA;
                    } else if (sortBy === 'name') {
                        const nameA = a.getAttribute('data-name') || '';
                        const nameB = b.getAttribute('data-name') || '';
                        return nameA.localeCompare(nameB);
                    }
                    return 0;
                });
                visibleCards.forEach(c => container.appendChild(c));
            }
        }
    }
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterHotels();
        });
    });
    
    if (sortSelect) sortSelect.addEventListener('change', filterHotels);
    if (starFilter) starFilter.addEventListener('change', filterHotels);
    if (priceRange) priceRange.addEventListener('input', filterHotels);
}

/**
 * Apply search from sessionStorage
 */
function initSearchFromStorage() {
    try {
        const searchData = sessionStorage.getItem('stackly-search');
        if (searchData) {
            const params = JSON.parse(searchData);
            const destinationInput = document.querySelector('#destination-search') || document.querySelector('#destination');
            if (destinationInput && params.destination) {
                destinationInput.value = params.destination;
            }
            // Clear after using
            sessionStorage.removeItem('stackly-search');
        }
    } catch (err) {
        // Ignore
    }
}