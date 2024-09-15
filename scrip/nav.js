
Swal.fire({
    title: 'Alquiler Quinta',
    text: 'Por favor, acepta nuestros términos y condiciones para continuar.',
    imageUrl: 'https://yt3.googleusercontent.com/Ul9Oknzq5xsbCPH7HgF0pcJCtseoSK-ZExzGiBwKsJEiqMsJOLC4p9DiM5BMzNt66TZvmJcoTQ=s900-c-k-c0x00ffffff-no-rj', 
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: 'Custom image',
    showCancelButton: true,
    confirmButtonColor: '#6C4EF5',  
    cancelButtonColor: '#7A7A7A',  
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    customClass: {
        popup: 'swal-wide',
        title: 'swal-title',
        text: 'swal-text',
        confirmButton: 'swal-confirm',
        cancelButton: 'swal-cancel',
    }
});

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

