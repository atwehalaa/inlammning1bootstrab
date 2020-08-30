$(document).ready(function() {



    $('#carouselSlick').slick({
      autoplay:true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 5,
      autoplaySpeed:1000,
      adaptiveHeight:false,
  
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 5
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 5
          }
        }
      ]
    });
    $('#logomono12').slick({
     
      autoplay:true,
      autoplaySpeed:1000,
      slidesToShow: 4,
      centerMode: true,
      centerPadding: '40px',
      infinite:true,
      centerPadding: '4px'       
      
    });

   

const counter = document.querySelectorAll('.counter');
$('.counter').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
})

