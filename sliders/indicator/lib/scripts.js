
function sliderIndicatorFollowMouse(e, t) {
  caret && "undefined" != typeof caret ? caret.css({
    left: e,
    width: t
  }) : caret = jQuery("#solutions-slider-indicator")
}
function initSliderIndicator() {
  caret = jQuery("#solutions-slider-indicator"),
  moveSliderIndicator()
}

function initSliderSelectorButtons() {
  jQuery("#category-product-slider .slider-nav-btn").click(function() {
    sliderBtnSetActive(jQuery(this)),
    moveSliderIndicator(),
    updateSliderContent(jQuery(this).attr("data-target"))
  })
}
function initSliderSeletorOnHoverInidcator() {
  jQuery("#category-product-slider .slider-nav-btn").hover(function() {
    sliderIndicatorFollowMouse(jQuery(this).position().left, jQuery(this).outerWidth())
  }, function() {
    moveSliderIndicator()
  })
}
