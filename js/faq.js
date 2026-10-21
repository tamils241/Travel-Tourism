/* Stackly Travel & Tourism - FAQ Accordion */
document.addEventListener('DOMContentLoaded', function() {
    initFAQAccordion();
});

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length === 0) return;
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        if (!question || !answer) return;
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                const ans = faqItem.querySelector('.faq-answer');
                if (ans) {
                    ans.style.maxHeight = null;
                }
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
        
        // Keyboard accessibility
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
        
        // Update aria-expanded
        const observer = new MutationObserver(function() {
            question.setAttribute('aria-expanded', item.classList.contains('active') ? 'true' : 'false');
        });
        observer.observe(item, { attributes: true, attributeFilter: ['class'] });
    });
}