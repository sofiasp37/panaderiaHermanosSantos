
document.addEventListener('DOMContentLoaded', () => {
    // Carousel code
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

    if (carousel) {
        leftButton.addEventListener('click', () => {
            carousel.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });

        rightButton.addEventListener('click', () => {
            carousel.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });

        carousel.addEventListener('mouseover', stopAutoScroll);
        carousel.addEventListener('mouseout', startAutoScroll);

        startAutoScroll();
    }

    $(".store-card").click(function() {
        var content = $(this).html();
        var mapa = $(this).find(".mapa").html();
        $("#overlay-content").html(content + mapa);
        $("#overlay").css("display", "flex").hide().fadeIn();
    });

    $("#overlay").click(function() {
        $(this).fadeOut();
    });

    $("#overlay-content").click(function(event) {
        event.stopPropagation();
    });
	
	
    $("#menu-icono").click(function() { 
	     $("#menu-icono").hide();
         $(".menu2").css("right","0");
		
    });

    $("#contenedor").dblclick(function() {
         $(".menu2").css("right","-300px");
		 $("#menu-icono").show();
    });
	//nose
	
	
 
	
	
	
	
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