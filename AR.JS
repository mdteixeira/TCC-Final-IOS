
 // SLIDE DO CARROSSEL...
var myCarousel = document.getElementById('Carousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
 
})

///rolagem utilizando jquery 
  $(document).ready(function() {
    // Rolagem suave ao clicar no link da navbar
    $('a[href^="#"]').on('click', function(event) {
      var target = $($(this).attr('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 6000); // Velocidade da rolagem 
      }
    });
  });



//SCROLL REVEAL ELEMENTOS
