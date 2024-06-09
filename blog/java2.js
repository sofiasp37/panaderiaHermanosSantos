$(document).ready(function(){

    $("#read-more1").click(function(){
	  
	   $("#masa_madre").slideDown();
	   /* $("#masa_madre").css("margin-top","30%"); */
	   $(".container").hide();
   	
	});

     $("#ocultar1").click(function(){
	  
	   $("#masa_madre").slideUp();
   	    $(".container").show();
		
		});
	
    $("#read-more2").click(function(){
	  
	   $("#panaderia").slideDown();
	   /* $("#masa_madre").css("margin-top","30%"); */
	   $(".container").hide();
   	
	});

     $("#ocultar2").click(function(){
	  
	   $("#panaderia").slideUp();
   	    $(".container").show();





	});




        document.getElementById('commentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            var name = document.getElementById('name').value;
            var comment = document.getElementById('comment').value;

            if (name && comment) {
                var commentsSection = document.getElementById('commentsSection');
                
                var commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');

                var namePara = document.createElement('p');
                namePara.innerHTML = '<strong>' + name + '</strong>';
                commentDiv.appendChild(namePara);

                var commentPara = document.createElement('p');
                commentPara.textContent = comment;
                commentDiv.appendChild(commentPara);

                commentsSection.appendChild(commentDiv);

                document.getElementById('commentForm').reset();
            }
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