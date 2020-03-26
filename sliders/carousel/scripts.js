var carousel_autoplay;

function initProductCarousel() {
  let options = {
    dist: 5,
    shift: 0,
    padding: 1,
    indicators: !0,
    fullWidth: !1
  };
  console.log("doing carousel"),

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });
}


function carouselAutorotate() {
  jQuery(".carousel").carousel("next"),
  carousel_autoplay && setTimeout(carouselAutorotate, 3500)
}
