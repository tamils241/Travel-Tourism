/* Stackly Travel & Tourism - Wishlist Management */
document.addEventListener('DOMContentLoaded', function() {
    initWishlistButtons();
    loadWishlistFromStorage();
});

let wishlist = [];

// Load wishlist from localStorage
function loadWishlistFromStorage() {
    try {
        const stored = localStorage.getItem('stackly-wishlist');
        if (stored) {
            wishlist = JSON.parse(stored);
        }
    } catch (error) {
        console.error('Error loading wishlist:', error);
        wishlist = [];
    }
    updateWishlistCounter();
    updateWishlistButtonStates();
}

// Save wishlist to localStorage
function saveWishlistToStorage() {
    try {
        localStorage.setItem('stackly-wishlist', JSON.stringify(wishlist));
    } catch (error) {
        console.error('Error saving wishlist:', error);
    }
}

// Add item to wishlist
function addToWishlist(item) {
    const exists = wishlist.some(w => w.id === item.id);
    if (!exists) {
        wishlist.push(item);
        saveWishlistToStorage();
        updateWishlistCounter();
        updateWishlistButtonStates();
        showToast(`${item.title} added to wishlist!`, 'success');
        return true;
    } else {
        showToast(`${item.title} is already in wishlist!`, 'warning');
        return false;
    }
}

// Remove item from wishlist
function removeFromWishlist(itemId) {
    const index = wishlist.findIndex(w => w.id === itemId);
    if (index > -1) {
        const item = wishlist[index];
        wishlist.splice(index, 1);
        saveWishlistToStorage();
        updateWishlistCounter();
        updateWishlistButtonStates();
        showToast(`${item.title} removed from wishlist!`, 'success');
        return true;
    }
    return false;
}

// Toggle wishlist item
function toggleWishlist(item) {
    const exists = wishlist.some(w => w.id === item.id);
    if (exists) {
        removeFromWishlist(item.id);
    } else {
        addToWishlist(item);
    }
}

// Check if item is in wishlist
function isInWishlist(itemId) {
    return wishlist.some(w => w.id === itemId);
}

// Initialize wishlist buttons
function initWishlistButtons() {
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.wishlist-btn');
        if (btn) {
            e.preventDefault();
            
            const itemId = btn.getAttribute('data-id');
            const itemTitle = btn.getAttribute('data-title') || 'Item';
            const itemType = btn.getAttribute('data-type') || 'item';
            const itemImage = btn.getAttribute('data-image') || '';
            const itemPrice = btn.getAttribute('data-price') || '';
            const itemLocation = btn.getAttribute('data-location') || '';
            
            const item = {
                id: itemId,
                title: itemTitle,
                type: itemType,
                image: itemImage,
                price: itemPrice,
                location: itemLocation,
                addedAt: new Date().toISOString()
            };
            
            toggleWishlist(item);
        }
    });
}

// Update wishlist button states
function updateWishlistButtonStates() {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        const itemId = btn.getAttribute('data-id');
        if (itemId && isInWishlist(itemId)) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        }
    });
}

// Get wishlist items
function getWishlistItems() {
    return [...wishlist];
}

// Clear wishlist
function clearWishlist() {
    wishlist = [];
    saveWishlistToStorage();
    updateWishlistCounter();
    updateWishlistButtonStates();
    showToast('Wishlist cleared!', 'success');
}

// Make functions globally available
window.addToWishlist = addToWishlist;
window.removeFromWishlist = removeFromWishlist;
window.toggleWishlist = toggleWishlist;
window.isInWishlist = isInWishlist;
window.getWishlistItems = getWishlistItems;
window.clearWishlist = clearWishlist;
window.updateWishlistButtonStates = updateWishlistButtonStates;