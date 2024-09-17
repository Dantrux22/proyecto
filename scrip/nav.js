
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nave-1');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
        });
    });
});

// FOOTER

const fecha = document.getElementById('fecha');
const currentYear = new Date().getFullYear();
fecha.textContent = currentYear;

