$(document).ready(function(){
    $('.carrusel-inicio').slick({
        infinite: true,
        speed: 00,
        fade: true,
        cssEase: 'linear',
        autoplaySpeed: 2000,

    });
});

$('.section-beneficios-contenedor').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: Infinity,
    autoplaySpeed: 2000,
  });
  
  sal({one: false});