// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Scroll reveal animation
ScrollReveal().reveal('.section-title', {
    delay: 200,
    distance: '20px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'bottom'
});

ScrollReveal().reveal('.skill-card, .project-card', {
    delay: 200,
    distance: '20px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'bottom',
    interval: 100
}); 