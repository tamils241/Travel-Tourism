/* Stackly Travel & Tourism - Desktop Dropdown Navigation */
document.addEventListener('DOMContentLoaded', function () {
    initDesktopDropdowns();
    initMobileMenuEnhancements();
});

function initMobileMenuEnhancements() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!mobileMenu) return;

    const dropdownToggles = mobileMenu.querySelectorAll('.mobile-dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.addEventListener('click', function () {
            toggle.setAttribute('aria-expanded', String(toggle.classList.contains('active')));
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 991 && mobileMenu.classList.contains('active') && hamburger) {
            hamburger.click();
        }
    });
}

function initDesktopDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    dropdownItems.forEach(item => {
        const toggle = item.querySelector('.dropdown-toggle');
        const menu = item.querySelector('.dropdown-menu');
        if (!toggle || !menu) return;

        let timeoutId;

        function showMenu() {
            clearTimeout(timeoutId);
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateX(-50%) translateY(0)';
            toggle.setAttribute('aria-expanded', 'true');
        }

        function hideMenu() {
            timeoutId = setTimeout(() => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateX(-50%) translateY(10px)';
                toggle.setAttribute('aria-expanded', 'false');
            }, 150);
        }

        item.addEventListener('mouseenter', showMenu);
        item.addEventListener('mouseleave', hideMenu);
        menu.addEventListener('mouseenter', () => clearTimeout(timeoutId));
        menu.addEventListener('mouseleave', hideMenu);

        toggle.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                showMenu();
                const firstLink = menu.querySelector('a');
                if (firstLink) setTimeout(() => firstLink.focus(), 50);
            }
            if (e.key === 'Escape') {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateX(-50%) translateY(10px)';
                toggle.setAttribute('aria-expanded', 'false');
                toggle.focus();
            }
        });

        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach((link, index) => {
            link.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    (menuLinks[index + 1] || menuLinks[0]).focus();
                }
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    (menuLinks[index - 1] || menuLinks[menuLinks.length - 1]).focus();
                }
                if (e.key === 'Escape') {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.transform = 'translateX(-50%) translateY(10px)';
                    toggle.setAttribute('aria-expanded', 'false');
                    toggle.focus();
                }
            });
        });
    });
}