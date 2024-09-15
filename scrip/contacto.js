const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

const outputNombre = document.getElementById('outputNombre');
const outputApellido = document.getElementById('outputApellido');
const outputEmail = document.getElementById('outputEmail');
const outputMensaje = document.getElementById('outputMensaje');

nombreInput.addEventListener('input', () => {
    outputNombre.textContent = nombreInput.value;
});

apellidoInput.addEventListener('input', () => {
    outputApellido.textContent = apellidoInput.value;
});

emailInput.addEventListener('input', () => {
    outputEmail.textContent = emailInput.value;
});

mensajeInput.addEventListener('input', () => {
    outputMensaje.textContent = mensajeInput.value;
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();  
    const formData = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value,
        email: emailInput.value,
        mensaje: mensajeInput.value
    };

    console.log("Información guardada:", formData);

    Swal.fire({
        title: 'Información guardada',
        text: 'La información se ha guardado correctamente en consola.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});