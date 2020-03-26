
var carousel_autoplay;
function initProductCarousel(selector) {
  console.log('doing carousel');
  carousel_autoplay = true;
  jQuery('.carousel').carousel({
    dist: 5,
    shift: 0,
    padding: 1,
    indicators: true,
    fullWidth: false
  });
  setTimeout(carouselAutorotate, 3500)
}


function carouselAutorotate() {
  jQuery('.carousel').carousel('next');
  if (carousel_autoplay) {
    setTimeout(carouselAutorotate, 3500)
  }
}
