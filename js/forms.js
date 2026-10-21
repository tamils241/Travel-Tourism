/* Stackly Travel & Tourism - Forms Validation */
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initNewsletterForm();
    initLoginForm();
    initRegisterForm();
    initBookingForm();
});

/**
 * Contact Form Validation
 */
function initContactForm() {
    const form = document.querySelector('#contactForm');
    if (!form) return;
    
    const contactNameInput = document.getElementById('contactName');
    if (contactNameInput) {
        contactNameInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^\p{L}]/gu, '').slice(0, 16);
        });
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName')?.value.trim();
        const email = document.getElementById('contactEmail')?.value.trim();
        const subject = document.getElementById('contactSubject')?.value;
        const message = document.getElementById('contactMessage')?.value.trim();
        
        let isValid = true;
        
        // Clear previous errors
        document.querySelectorAll('.form-error').forEach(err => {
            err.classList.remove('show');
        });
        document.querySelectorAll('.form-success').forEach(suc => {
            suc.classList.remove('show');
        });
        
        if (!name) {
            showFieldError('contactName', 'Name is required');
            isValid = false;
        } else if (!/^\p{L}{1,16}$/u.test(name)) {
            showFieldError('contactName', 'Max 16 letters only. No numbers, spaces or special characters');
            isValid = false;
        }
        
        if (!email) {
            showFieldError('contactEmail', 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showFieldError('contactEmail', 'Please enter a valid email');
            isValid = false;
        }
        
        if (!subject) {
            showFieldError('contactSubject', 'Please select a subject');
            isValid = false;
        }
        
        if (!message) {
            showFieldError('contactMessage', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showFieldError('contactMessage', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        if (!isValid) {
            alert('Please correct the errors in the form before sending your message.');
            return;
        }
        
        if (isValid) {
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loading-spinner" style="width:20px;height:20px;margin:0;"></span> Sending...';
            
            // Simulate form submission (frontend demo)
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                form.reset();
                showToast('Message sent successfully! We will get back to you soon.', 'success');
                const successMsg = document.getElementById('contactSuccess');
                if (successMsg) {
                    successMsg.classList.add('show');
                    setTimeout(() => successMsg.classList.remove('show'), 5000);
                }
            }, 1500);
        }
    });
}

/**
 * Newsletter Form
 */
function initNewsletterForm() {
    const forms = document.querySelectorAll('.newsletter-form');
    forms.forEach(form => {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', function () {
            const password = document.getElementById('registerPassword')?.value || '';
            const value = this.value;
            const errorEl = document.getElementById('confirmPasswordError');
            if (!errorEl) return;
            if (!value) {
                errorEl.classList.remove('show');
            } else if (value !== password) {
                errorEl.textContent = 'Passwords do not match';
                errorEl.classList.add('show');
            } else {
                errorEl.classList.remove('show');
            }
        });
        confirmPasswordInput.addEventListener('blur', function () {
            const password = document.getElementById('registerPassword')?.value || '';
            if (this.value && this.value !== password) {
                alert('Passwords do not match. Please re-enter your confirm password.');
            }
        });
    }
    
    const agreeTermsInput = document.getElementById('agreeTerms');
    if (agreeTermsInput) {
        agreeTermsInput.addEventListener('change', function () {
            const errorEl = document.getElementById('termsError');
            if (!this.checked) {
                if (errorEl) errorEl.classList.add('show');
                alert('You must agree to the Terms of Service and Privacy Policy to continue.');
            } else if (errorEl) {
                errorEl.classList.remove('show');
            }
        });
    }
    
    form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('.newsletter-email');
            const email = emailInput?.value.trim();
            const errorDiv = form.querySelector('.newsletter-error');
            const successDiv = form.querySelector('.newsletter-success');
            
            if (errorDiv) errorDiv.classList.remove('show');
            if (successDiv) successDiv.classList.remove('show');
            
            if (!email) {
                if (errorDiv) {
                    errorDiv.textContent = 'Email is required';
                    errorDiv.classList.add('show');
                }
                return;
            }
            
            if (!validateEmail(email)) {
                if (errorDiv) {
                    errorDiv.textContent = 'Please enter a valid email';
                    errorDiv.classList.add('show');
                }
                return;
            }
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Subscribing...';
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                emailInput.value = '';
                showToast('Subscribed to newsletter successfully!', 'success');
                if (successDiv) {
                    successDiv.textContent = 'Thank you for subscribing!';
                    successDiv.classList.add('show');
                    setTimeout(() => successDiv.classList.remove('show'), 5000);
                }
            }, 1000);
        });
    });
}

/**
 * Login Form
 */
function initLoginForm() {
    const form = document.querySelector('#loginForm');
    if (!form) return;
    
    const emailInput = document.getElementById('loginEmail');
    if (emailInput) {
        emailInput.addEventListener('input', function () {
            const value = this.value.trim();
            const errorEl = document.getElementById('loginEmailError');
            if (!errorEl) return;
            if (!value) {
                errorEl.classList.remove('show');
            } else if (!validateEmail(value)) {
                errorEl.textContent = 'Please enter a valid email address (e.g. name@example.com)';
                errorEl.classList.add('show');
            } else {
                errorEl.classList.remove('show');
            }
        });
    }
    
    const passwordInput = document.getElementById('loginPassword');
    if (passwordInput) {
        passwordInput.addEventListener('input', function () {
            const value = this.value;
            const errorEl = document.getElementById('loginPasswordError');
            if (!errorEl) return;
            if (!value) {
                errorEl.classList.remove('show');
            } else if (!isStrongPassword(value)) {
                errorEl.textContent = STRONG_PASSWORD_MESSAGE;
                errorEl.classList.add('show');
            } else {
                errorEl.classList.remove('show');
            }
        });
    }
    
    const rememberInput = document.getElementById('rememberMe');
    if (rememberInput) {
        rememberInput.addEventListener('change', function () {
            const errorEl = document.getElementById('rememberMeError');
            if (!this.checked) {
                if (errorEl) errorEl.classList.add('show');
                alert('You must check "Remember me" to continue.');
            } else if (errorEl) {
                errorEl.classList.remove('show');
            }
        });
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const role = document.getElementById('loginRole')?.value;
        const email = document.getElementById('loginEmail')?.value.trim();
        const password = document.getElementById('loginPassword')?.value;
        const rememberMe = document.getElementById('rememberMe')?.checked;
        
        let isValid = true;
        const problems = [];
        document.querySelectorAll('.form-error').forEach(err => err.classList.remove('show'));
        
        if (!role) {
            showFieldError('loginRole', 'Please select a role');
            problems.push('Select a role (Client or Admin)');
            isValid = false;
        }
        
        if (!email) {
            showFieldError('loginEmail', 'Email is required');
            problems.push('Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showFieldError('loginEmail', 'Please enter a valid email');
            problems.push('Enter a valid email address');
            isValid = false;
        }
        
        if (!password) {
            showFieldError('loginPassword', 'Password is required');
            problems.push('Password is required');
            isValid = false;
        } else if (!isStrongPassword(password)) {
            showFieldError('loginPassword', STRONG_PASSWORD_MESSAGE);
            problems.push(STRONG_PASSWORD_MESSAGE);
            isValid = false;
        }
        
        if (!rememberMe) {
            const rememberError = document.getElementById('rememberMeError');
            if (rememberError) rememberError.classList.add('show');
            problems.push('Please check "Remember me"');
            isValid = false;
        }
        
        if (!isValid) {
            alert('Please fix the following before logging in:\n- ' + problems.join('\n- '));
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading-spinner" style="width:20px;height:20px;margin:0;"></span> Signing in...';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            showToast('Login successful as ' + role.charAt(0).toUpperCase() + role.slice(1) + '! Redirecting...', 'success');
            window.location.href = role === 'admin' ? 'admin-dashboard.html' : 'client-dashboard.html';
        }, 1200);
    });
}

/**
 * Register Form
 */
function initRegisterForm() {
    const form = document.querySelector('#registerForm');
    if (!form) return;
    
    const nameFilter = function () {
        this.value = this.value.replace(/[^\p{L}]/gu, '').slice(0, 16);
    };
    ['firstName', 'lastName'].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', nameFilter);
    });
    
    const roleSelect = document.getElementById('registerRole');
    if (roleSelect) {
        roleSelect.addEventListener('change', function () {
            const errorEl = document.getElementById('registerRoleError');
            if (!this.value) {
                if (errorEl) errorEl.classList.add('show');
                alert('Please select a role (Client or Admin) to create your account.');
            } else if (errorEl) {
                errorEl.classList.remove('show');
            }
        });
    }
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
        });
        phoneInput.addEventListener('blur', function () {
            if (this.value && this.value.length !== 10) {
                alert('Phone number must be exactly 10 digits.');
            }
        });
    }
    
    const emailInput = document.getElementById('registerEmail');
    if (emailInput) {
        emailInput.addEventListener('input', function () {
            const value = this.value.trim();
            const errorEl = document.getElementById('registerEmailError');
            if (!errorEl) return;
            if (!value) {
                errorEl.classList.remove('show');
            } else if (!validateEmail(value)) {
                errorEl.textContent = 'Please enter a valid email address (e.g. name@example.com)';
                errorEl.classList.add('show');
            } else {
                errorEl.classList.remove('show');
            }
        });
        emailInput.addEventListener('blur', function () {
            const value = this.value.trim();
            if (value && !validateEmail(value)) {
                alert('Please enter a valid email address (e.g. name@example.com).');
            }
        });
    }
    
    const registerPasswordInput = document.getElementById('registerPassword');
    if (registerPasswordInput) {
        registerPasswordInput.addEventListener('input', function () {
            const value = this.value;
            const errorEl = document.getElementById('registerPasswordError');
            if (!errorEl) return;
            if (!value) {
                errorEl.classList.remove('show');
            } else if (!isStrongPassword(value)) {
                errorEl.textContent = STRONG_PASSWORD_MESSAGE;
                errorEl.classList.add('show');
            } else {
                errorEl.classList.remove('show');
            }
        });
        registerPasswordInput.addEventListener('blur', function () {
            if (this.value && !isStrongPassword(this.value)) {
                alert(STRONG_PASSWORD_MESSAGE);
            }
        });
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName')?.value.trim();
        const lastName = document.getElementById('lastName')?.value.trim();
        const role = document.getElementById('registerRole')?.value;
        const email = document.getElementById('registerEmail')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const password = document.getElementById('registerPassword')?.value;
        const confirmPassword = document.getElementById('confirmPassword')?.value;
        const agreeTerms = document.getElementById('agreeTerms')?.checked;
        
        let isValid = true;
        const problems = [];
        document.querySelectorAll('.form-error').forEach(err => err.classList.remove('show'));
        
        if (!role) {
            showFieldError('registerRole', 'Please select a role');
            problems.push('Select a role (Client or Admin)');
            isValid = false;
        }
        
        if (!firstName) {
            showFieldError('firstName', 'First name is required');
            problems.push('First name is required');
            isValid = false;
        } else if (!/^\p{L}{1,16}$/u.test(firstName)) {
            showFieldError('firstName', 'Max 16 letters only. No numbers, spaces or special characters');
            problems.push('First name: max 16 letters only, no numbers, spaces or special characters');
            isValid = false;
        }
        
        if (!lastName) {
            showFieldError('lastName', 'Last name is required');
            problems.push('Last name is required');
            isValid = false;
        } else if (!/^\p{L}{1,16}$/u.test(lastName)) {
            showFieldError('lastName', 'Max 16 letters only. No numbers, spaces or special characters');
            problems.push('Last name: max 16 letters only, no numbers, spaces or special characters');
            isValid = false;
        }
        
        if (!email) {
            showFieldError('registerEmail', 'Email is required');
            problems.push('Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showFieldError('registerEmail', 'Please enter a valid email');
            problems.push('Enter a valid email address (e.g. name@example.com)');
            isValid = false;
        }
        
        if (!phone) {
            showFieldError('phone', 'Phone number is required');
            problems.push('Phone number is required');
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            showFieldError('phone', 'Phone number must be exactly 10 digits');
            problems.push('Phone number must be exactly 10 digits');
            isValid = false;
        }
        
        if (!password) {
            showFieldError('registerPassword', 'Password is required');
            problems.push('Password is required');
            isValid = false;
        } else if (!isStrongPassword(password)) {
            showFieldError('registerPassword', STRONG_PASSWORD_MESSAGE);
            problems.push(STRONG_PASSWORD_MESSAGE);
            isValid = false;
        }
        
        if (!confirmPassword) {
            showFieldError('confirmPassword', 'Please confirm your password');
            problems.push('Please confirm your password');
            isValid = false;
        } else if (password !== confirmPassword) {
            showFieldError('confirmPassword', 'Passwords do not match');
            problems.push('Passwords do not match');
            isValid = false;
        }
        
        if (!agreeTerms) {
            const termsError = document.getElementById('termsError');
            if (termsError) termsError.classList.add('show');
            problems.push('You must agree to the Terms of Service and Privacy Policy');
            isValid = false;
        }
        
        if (!isValid) {
            alert('Please fix the following before creating your account:\n- ' + problems.join('\n- '));
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading-spinner" style="width:20px;height:20px;margin:0;"></span> Creating Account...';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            showToast('Account created as ' + role.charAt(0).toUpperCase() + role.slice(1) + '! Redirecting to login...', 'success');
            window.location.href = 'login.html';
        }, 1500);
    });
}

/**
 * Booking Form
 */
function initBookingForm() {
    const form = document.querySelector('#bookingForm');
    if (!form) return;
    
    const nameFilter = function () {
        this.value = this.value.replace(/[^\p{L}]/gu, '').slice(0, 16);
    };
    ['bookingFirstName', 'bookingLastName'].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', nameFilter);
    });
    
    const phoneInput = document.getElementById('bookingPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
        });
    }
    
    const todayStr = function () {
        const d = new Date();
        return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    };
    ['checkIn', 'checkOut'].forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('change', function () {
            if (this.value && this.value < todayStr()) {
                alert('Past dates are not allowed. Please select today or a future date.');
                this.value = '';
            }
        });
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('bookingFirstName')?.value.trim();
        const lastName = document.getElementById('bookingLastName')?.value.trim();
        const email = document.getElementById('bookingEmail')?.value.trim();
        const phone = document.getElementById('bookingPhone')?.value.trim();
        const checkIn = document.getElementById('checkIn')?.value;
        const checkOut = document.getElementById('checkOut')?.value;
        const guests = document.getElementById('guests')?.value;
        const destination = document.getElementById('bookingDestination')?.value;
        const tripType = document.getElementById('tripType')?.value;
        const agreeTerms = document.getElementById('agreeTerms')?.checked;
        
        let isValid = true;
        document.querySelectorAll('.form-error').forEach(err => err.classList.remove('show'));
        document.querySelectorAll('.form-success').forEach(suc => suc.classList.remove('show'));
        
        if (!firstName) {
            showFieldError('bookingFirstName', 'First name is required');
            isValid = false;
        } else if (!/^\p{L}{1,16}$/u.test(firstName)) {
            showFieldError('bookingFirstName', 'Max 16 letters only. No numbers, spaces or special characters');
            isValid = false;
        }
        
        if (!lastName) {
            showFieldError('bookingLastName', 'Last name is required');
            isValid = false;
        } else if (!/^\p{L}{1,16}$/u.test(lastName)) {
            showFieldError('bookingLastName', 'Max 16 letters only. No numbers, spaces or special characters');
            isValid = false;
        }
        
        if (!email) {
            showFieldError('bookingEmail', 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showFieldError('bookingEmail', 'Please enter a valid email');
            alert('Invalid email address. Allowed: sun@gmail.com, sun123@gmail.com');
            isValid = false;
        }
        
        if (!phone) {
            showFieldError('bookingPhone', 'Phone number is required');
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            showFieldError('bookingPhone', 'Phone number must be exactly 10 digits');
            isValid = false;
        }
        
        if (!checkIn) {
            showFieldError('checkIn', 'Check-in date is required');
            isValid = false;
        }
        
        if (!checkOut) {
            showFieldError('checkOut', 'Check-out date is required');
            isValid = false;
        }
        
        if (checkIn && checkOut && checkIn >= checkOut) {
            showFieldError('checkOut', 'Check-out date must be after check-in date');
            isValid = false;
        }
        
        const today = todayStr();
        if (checkIn && checkIn < today) {
            showFieldError('checkIn', 'Check-in date cannot be in the past');
            isValid = false;
        }
        
        if (checkOut && checkOut < today) {
            showFieldError('checkOut', 'Check-out date cannot be in the past');
            isValid = false;
        }
        
        if (!guests) {
            showFieldError('guests', 'Number of guests is required');
            isValid = false;
        }
        
        if (!destination) {
            showFieldError('bookingDestination', 'Please select a destination or tour');
            isValid = false;
        }
        
        if (!tripType) {
            showFieldError('tripType', 'Please select a trip type');
            isValid = false;
        }
        
        if (!agreeTerms) {
            showFieldError('agreeTerms', 'You must agree to the terms and conditions');
            isValid = false;
        }
        
        if (!isValid) {
            alert('Please correct the errors in the form before submitting your booking request.');
            return;
        }
        
        if (isValid) {
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loading-spinner" style="width:20px;height:20px;margin:0;"></span> Submitting...';
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                form.reset();
                showToast('Booking request submitted! (Frontend demo - no payment processed)', 'success');
                const successMsg = document.getElementById('bookingSuccess');
                if (successMsg) {
                    successMsg.classList.add('show');
                    setTimeout(() => successMsg.classList.remove('show'), 6000);
                }
            }, 1500);
        }
    });
}

/**
 * Helper to check strong password
 */
function isStrongPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);
}

const STRONG_PASSWORD_MESSAGE = 'Password must be at least 8 characters and include uppercase, lowercase, a number and a special character';

/**
 * Helper to show field error
 */
function showFieldError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

// Make it globally available
window.showFieldError = showFieldError;