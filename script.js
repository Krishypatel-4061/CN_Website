// Navigation highlighting for multi-page site
document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation link based on current page
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === 'index.html' && linkHref === 'home.html')) {
            link.classList.add('active');
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            link.style.fontWeight = '600';
        }
    });
});
