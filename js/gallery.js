/* Stackly Travel & Tourism - Gallery */
document.addEventListener('DOMContentLoaded', function() {
    renderGalleryItems();
    initGallery();
    initGalleryFilters();
    initGalleryLightbox();
});

function renderGalleryItems() {
    const grid = document.getElementById('galleryGrid');
    if (!grid || !window.STACKLY_DATA) return;
    if (grid.children.length > 0) return;

    grid.innerHTML = window.STACKLY_DATA.gallery.map(item => `
        <figure class="gallery-item ${item.span}" data-category="${item.category}">
            <img src="${item.image}" alt="${item.caption}" data-caption="${item.caption}" loading="lazy" width="800" height="600">
            <figcaption class="gallery-item-overlay">
                <span>${item.caption}</span>
            </figcaption>
        </figure>`).join('');
}

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) return;

    // Stagger animation for gallery items
    galleryItems.forEach((item, index) => {
        item.classList.add('scroll-animate');
        item.style.transitionDelay = `${index * 50}ms`;
    });

    // Re-run scroll observer now that gallery items exist
    if (typeof window.initScrollAnimations === 'function') {
        window.initScrollAnimations();
    }
}

function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length === 0 || galleryItems.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    // Re-trigger animation
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        item.style.transition = 'all 0.4s ease-out';
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initGalleryLightbox() {
    const lightboxTriggers = document.querySelectorAll('.gallery-item img, .gallery-lightbox-trigger');
    if (lightboxTriggers.length === 0) return;
    
    // Create lightbox HTML
    const lightbox = document.createElement('div');
    lightbox.className = 'gallery-lightbox';
    lightbox.innerHTML = `
        <div class="gallery-lightbox-content">
            <button class="gallery-lightbox-close" aria-label="Close gallery">&times;</button>
            <img src="" alt="" class="gallery-lightbox-image">
            <button class="gallery-lightbox-prev" aria-label="Previous image">‹</button>
            <button class="gallery-lightbox-next" aria-label="Next image">›</button>
            <div class="gallery-lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    const lightboxImg = lightbox.querySelector('.gallery-lightbox-image');
    const lightboxClose = lightbox.querySelector('.gallery-lightbox-close');
    const lightboxPrev = lightbox.querySelector('.gallery-lightbox-prev');
    const lightboxNext = lightbox.querySelector('.gallery-lightbox-next');
    const lightboxCaption = lightbox.querySelector('.gallery-lightbox-caption');
    
    let currentIndex = 0;
    const galleryImages = Array.from(document.querySelectorAll('.gallery-item img')).map((img, idx) => ({
        src: img.src,
        alt: img.alt,
        caption: img.getAttribute('data-caption') || img.alt,
        index: idx
    }));
    
    function openLightbox(index) {
        if (galleryImages.length === 0) return;
        currentIndex = index;
        lightboxImg.src = galleryImages[currentIndex].src;
        lightboxImg.alt = galleryImages[currentIndex].alt;
        lightboxCaption.textContent = galleryImages[currentIndex].caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        openLightbox(currentIndex);
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(currentIndex);
    }
    
    lightboxTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            openLightbox(index);
        });
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    
    lightboxNext.addEventListener('click', nextImage);
    
    lightboxPrev.addEventListener('click', prevImage);
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });
}

// Add lightbox styles
const lightboxStyles = document.createElement('style');
lightboxStyles.textContent = `
.gallery-lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
}

.gallery-lightbox.active {
    opacity: 1;
    visibility: visible;
}

.gallery-lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
}

.gallery-lightbox-image {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--radius-md);
}

.gallery-lightbox-close {
    position: absolute;
    top: -40px;
    right: 0;
    background: rgba(255, 255, 255, 0.2);
    color: var(--white);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10001;
    transition: all var(--transition-fast);
}

.gallery-lightbox-close:hover {
    background: var(--white);
    color: var(--text);
}

.gallery-lightbox-prev,
.gallery-lightbox-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.2);
    color: var(--white);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10001;
    transition: all var(--transition-fast);
    line-height: 1;
    padding-bottom: 0.25rem;
}

.gallery-lightbox-prev {
    left: 20px;
}

.gallery-lightbox-next {
    right: 20px;
}

.gallery-lightbox-prev:hover,
.gallery-lightbox-next:hover {
    background: var(--white);
    color: var(--text);
}

.gallery-lightbox-caption {
    color: var(--white);
    text-align: center;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: var(--radius-md);
    max-width: 600px;
}

@media (max-width: 768px) {
    .gallery-lightbox-prev,
    .gallery-lightbox-next {
        width: 40px;
        height: 40px;
        font-size: 1.5rem;
    }
    .gallery-lightbox-prev {
        left: 10px;
    }
    .gallery-lightbox-next {
        right: 10px;
    }
    .gallery-lightbox-close {
        top: -50px;
        right: 10px;
    }
}
`;
document.head.appendChild(lightboxStyles);