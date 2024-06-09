$(document).ready(function(){

const checkboxSi = document.getElementById('checkbox-si');
const checkboxNo = document.getElementById('checkbox-no');
const textareaContainer = document.getElementById('textarea-container');

checkboxSi.addEventListener('change', function() {
    if (this.checked) {
        textareaContainer.style.display = 'block';
        checkboxNo.checked = false;
    } else {
        textareaContainer.style.display = 'none';
    }
});

checkboxNo.addEventListener('change', function() {
    if (this.checked) {
        checkboxSi.checked = false;
        textareaContainer.style.display = 'none';
    }
});



document.getElementById("enviar2").addEventListener("click", function() {
    var nombre = document.getElementById("nombreEstablecimiento").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var estado = document.getElementById("checkbox-si").checked ? "Sí" : document.getElementById("checkbox-no").checked ? "No" : "";
    var comentario = document.getElementById("comentario").value;

    document.getElementById("nombreMostrado").textContent = "Nombre del establecimiento: " + nombre;
    document.getElementById("direccionMostrado").textContent = "Dirección: " + direccion;
    document.getElementById("telefonoMostrado").textContent = "Teléfono: " + telefono;
    document.getElementById("estadoMostrado").textContent = "Es un nuevo establecimiento: " + estado;
    document.getElementById("comentarioMostrado").textContent = "Comentario: " + comentario;

    document.getElementById("datosIntroducidos").style.display = "block";
});

document.getElementById("volverAtras").addEventListener("click", function() {
    document.getElementById("datosIntroducidos").style.display = "none";
});

    $("#menu-icono").click(function() { 
	     $("#menu-icono").hide();
         $(".menu2").css("right","0");
		
    });

    $("#contenedor").dblclick(function() {
         $(".menu2").css("right","-300px");
		 $("#menu-icono").show();
    });
});


	document.addEventListener("DOMContentLoaded", function() {
    // Obtén la referencia del elemento de la flecha
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    // Mostrar/ocultar el botón basado en el desplazamiento de la página
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Añadir el evento de clic para desplazar hacia arriba
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});