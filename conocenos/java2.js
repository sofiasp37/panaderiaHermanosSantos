// Array de URLs de las imágenes
var images = ['imagenes/imagen1.jpg', 'imagenes/imagen2.jpg', 'imagenes/imagen3.jpg', 'imagenes/imagen4.jpg', 'imagenes/imagen5.jpg', 'imagenes/imagen6.jpg', 'imagenes/imagen7.jpg', 'imagenes/imagen8.jpg', 'imagenes/imagen9.jpg', 'imagenes/imagen10.jpg'];

// Índice actual de la imagen
var currentIndex = 0;

// Función para cambiar la imagen cada 2 segundos
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice
    var imageUrl = images[currentIndex]; // Obtiene la URL de la imagen actual
    var img = document.getElementById('carouselImage'); // Obtiene el elemento de la imagen
    img.src = imageUrl; // Cambia la URL de la imagen
}

// Llama a la función changeImage cada 2 segundos
setInterval(changeImage, 2000);



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
	
	    $("#menu-icono").click(function() { 
	     $("#menu-icono").hide();
         $(".menu2").css("right","0");
		
    });

    $("#contenedor").dblclick(function() {
         $(".menu2").css("right","-300px");
		 $("#menu-icono").show();
    });

	
});

	document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const leftButton = document.getElementById('leftButton');
    const rightButton = document.getElementById('rightButton');
    const slides = document.querySelectorAll('.store-slide');
    const slideWidth = slides[0].offsetWidth + 20; // Ancho del slide + margen
    let autoScroll;

    const startAutoScroll = () => {
        autoScroll = setInterval(() => {
            carousel.scrollBy({ left: slideWidth, behavior: 'smooth' });
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            }
        }, 2000);
    };

    const stopAutoScroll = () => {
        clearInterval(autoScroll);
    };

    leftButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        carousel.scrollBy({ left: slideWidth, behavior: 'smooth' });
    });

    carousel.addEventListener('mouseover', stopAutoScroll);
    carousel.addEventListener('mouseout', startAutoScroll);

    startAutoScroll();


    $("#menu-icono").click(function() { 
	     $("#menu-icono").hide();
         $(".menu2").css("right","0");
		
    });

    $("#contenedor").dblclick(function() {
         $(".menu2").css("right","-300px");
		 $("#menu-icono").show();
    });
});
	