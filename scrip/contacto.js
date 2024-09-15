 const nombre = document.querySelector('#nombre');
 const apellido = document.querySelector('#apellido');
 const boton = document.querySelector('#boton');

 nombre.onchange = () => { console.log("Cambio el valor del input: " + nombre.value); }
 apellido.addEventListener('input', () => { console.log(apellido.value) });

 let formulario = document.querySelector('#formulario');
 formulario.addEventListener("submit", (e) => {
    e.preventDefault();
     let form = e.target;
     document.getElementById('rnombre').innerHTML = document.getElementById('nombre').value;
     document.getElementById('rapellido').innerHTML = document.getElementById('apellido').value;
 });

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })