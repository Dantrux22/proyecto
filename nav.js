// NAVEGADOR
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
// TITULO
const Titulo = document.querySelector("#titulo");
Titulo.onclick = () => {Titulo.style.color = 'brown'}

// INPUT
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const boton = document.querySelector('#boton')


nombre.onchange = () => { console.log("cambio el valor del input: " + nombre.value);}
apellido.addEventListener('input', ()=> {console.log(apellido.value)})
 
let formuario = document.querySelector ('#formulario')
formuario.addEventListener("submit", (e) =>{
    e.preventDefault();
     let form = e.target;
     document.getElementById ('rnombre').innerHTML = form.children[0]. value
     document.getElementById ('rapellido').innerHTML = form.children[1]. value
})

boton.onclick = () =>{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Nombre agregado",
        showConfirmButton: false,
        timer: 1500
      });
}
// ARVHICOS
const archivo = document.querySelectorAll ('.archivos-des');
console.log(archivo)
 archivo.onclick = () => {
     Swal.fire("listo para descargar!");
 }
