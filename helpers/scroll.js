function scrollToTop() {
  jQuery("html, body").animate({
    scrollTop: 0
  }, 1e3)
}
function glideTo(e) {
  var t = document.querySelector(e);
  jQuery("html, body").animate({
    scrollTop: t.offsetTop - window.window.innerHeight / 3
  }, 1e3)
}
