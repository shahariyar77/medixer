$(document).ready(function(){
    
  $(".features-carousel").owlCarousel({
  loop:true,
  nav:true,
  dots:false,
  margin: 30,
  autoplay: true,
  navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
}
});
    
});