/* Stackly Travel & Tourism - Booking Page Interactions */
document.addEventListener('DOMContentLoaded', function () {
    initTravelerCounter();
    prefillBookingFromQuery();
    initPasswordToggles();
    initAuthRedirectMessages();
});

/* Traveler / guest counter controls */
function initTravelerCounter() {
    var valueEl = document.getElementById('guestValue');
    var inputEl = document.getElementById('guests');
    var minus = document.getElementById('guestMinus');
    var plus = document.getElementById('guestPlus');
    if (!minus || !plus || !valueEl || !inputEl) return;

    var value = parseInt(inputEl.value, 10) || 2;

    function setGuests(v) {
        value = Math.max(1, Math.min(20, v));
        valueEl.textContent = value;
        inputEl.value = value;
    }

    minus.addEventListener('click', function () { setGuests(value - 1); });
    plus.addEventListener('click', function () { setGuests(value + 1); });
    setGuests(value);
}

/* Pre-select destination/tour from query string */
function prefillBookingFromQuery() {
    var select = document.getElementById('bookingDestination');
    if (!select) return;

    var params = new URLSearchParams(window.location.search);
    var tour = params.get('tour') || params.get('dest') || params.get('destination');
    if (!tour) return;

    var map = { t1: 'bali', t2: 'maldives', t3: 'paris', t4: 'swiss-alps', t5: 'kyoto', t6: 'dubai' };
    var val = map[tour] || tour;
    var option = select.querySelector('option[value="' + val + '"]');
    if (option) select.value = val;
}

/* Show/hide password fields */
function initPasswordToggles() {
    document.querySelectorAll('.password-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var input = btn.previousElementSibling;
            if (!input) return;
            var isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            btn.textContent = isPassword ? '🙈' : '👁️';
            btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
        });
    });
}

/* Friendly message when redirected from a protected action */
function initAuthRedirectMessages() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('redirect') === 'login' && typeof window.showToast === 'function') {
        window.showToast('Please log in to continue.', 'warning');
    }
}