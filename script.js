document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing Page loaded');

    // Animaciones con ScrollReveal
    ScrollReveal().reveal('.hero h1, .hero p, .btn-primary', { 
        duration: 1000,
        origin: 'top',
        distance: '50px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.social-links', { 
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.about-text, .profile-pic, .skills-grid', { 
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-out'
    });

    ScrollReveal().reveal('.work-timeline .job', { 
        duration: 1000,
        origin: 'left',
        distance: '50px',
        easing: 'ease-out'
    });

    // Manejo de cambio de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});