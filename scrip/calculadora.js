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

function mostrarCampos() {
    var tipoAlquiler = document.getElementById("tipo-alquiler").value;
    var horarioDia = document.getElementById("horario-dia");
    var horarioHospedaje = document.getElementById("horario-hospedaje");

    if (tipoAlquiler === "dia") {
        horarioDia.style.display = "block";
        horarioHospedaje.style.display = "none";
    } else if (tipoAlquiler === "hospedaje") {
        horarioDia.style.display = "none";
        horarioHospedaje.style.display = "block";
    }

    calcularTotal();
}

function calcularTotal() {
    var tipoAlquiler = document.getElementById("tipo-alquiler").value;
    var totalInput = document.getElementById("TOTAL");
    var total = 0;
    var selectedHorario = null;

    if (tipoAlquiler === "dia") {
        var cantidadPersonasDia = parseInt(document.getElementById("cantidad-personas-dia").value) || 0;
        var precioDia1 = 4600;
        var precioDia2 = 5000;

        var horarioDiaCheckboxes = document.getElementsByName("horario-dia"); 

        for (var i = 0; i < horarioDiaCheckboxes.length; i++) {
            if (horarioDiaCheckboxes[i].checked) {
                if (!selectedHorario) { 
                    selectedHorario = horarioDiaCheckboxes[i].id;
                    if (selectedHorario === "horario-dia-1") {
                        total = cantidadPersonasDia * precioDia1;
                    } else if (selectedHorario === "horario-dia-2") {
                        total = cantidadPersonasDia * precioDia2;
                    }
                    for (var j = 0; j < horarioDiaCheckboxes.length; j++) {
                        if (i !== j) {
                            horarioDiaCheckboxes[j].checked = false;
                        }
                    }
                }
            }
        }

        document.getElementById("mensaje-personas-dia").style.display = (cantidadPersonasDia < 20 || cantidadPersonasDia > 80) ? "block" : "none";
    } else if (tipoAlquiler === "hospedaje") {
        var cantidadPersonasHospedaje = parseInt(document.getElementById("cantidad-personas-hospedaje").value) || 0;
        var cantidadDias = parseInt(document.getElementById("cantidad-dias").value) || 0;
        var precioHospedaje = 16000;

        total = cantidadPersonasHospedaje * cantidadDias * precioHospedaje;

        document.getElementById("mensaje-dias").style.display = (cantidadDias < 2 || cantidadDias > 15) ? "block" : "none";
        document.getElementById("mensaje-personas-hospedaje").style.display = (cantidadPersonasHospedaje < 2 || cantidadPersonasHospedaje > 5) ? "block" : "none";
    }

    totalInput.value = total.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'});
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarCampos();
});

document.getElementById("cantidad-personas-dia").addEventListener("input", calcularTotal);
document.getElementById("horario-dia-1").addEventListener("change", calcularTotal);
document.getElementById("horario-dia-2").addEventListener("change", calcularTotal);
document.getElementById("cantidad-personas-hospedaje").addEventListener("input", calcularTotal);
document.getElementById("cantidad-dias").addEventListener("input", calcularTotal);

