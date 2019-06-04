function append_html(e, t, i) {
  e && "" !== e || (e = "body");
  var a = "div"
    , n = ""
    , o = "";
  i && "" !== i && (i.tag && (a = i.tag),
  i.class && (n = i.class),
  i.id && (o = i.id));
  var r = document.createElement(a);
  return r.className += n,
  r.id = o,
  r.innerHTML = t,
  document.querySelector(e).appendChild(r),
  !0
}

function create_node(e) {
  if (e.tag_name)
    t = e.tag_name;
  else
    var t = "div";
  var i = document.createElement(t);
  return e.class_name && (i.className = e.class_name),
  e.id && (i.id = e.id),
  e.html_content && (i.innerHTML = e.html_content),
  i
}
function get_node(e) {
  return document.querySelector(e)
}
function get_all_nodes(e) {
  return document.querySelectorAll(e)
}
function is_node(e) {
  return get_node(e) || !1
}
function has_class(e, t) {
  return e.classList.contains(t)
}
function add_class(e, t) {
  if (e.classList.contains(t))
    return !1;
  e.classList.add(t)
}
function remove_class(e, t) {
  if (!e.classList.contains(t))
    return !1;
  e.classList.remove(t)
}
// function scrollToTop() {
//   jQuery("html, body").animate({
//     scrollTop: 0
//   }, 1e3)
// }
// function glideTo(e) {
//   var t = document.querySelector(e);
//   jQuery("html, body").animate({
//     scrollTop: t.offsetTop - window.window.innerHeight / 3
//   }, 1e3)
// }
function get_time_hash() {
  return btoa(Date.now().toLocaleString().split(",").reverse()).substring(0, 10)
}

var carousel_autoplay, resizeLock;

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




function initCategorySlider() {
  initSliderIndicator(),
  initSlideArray(),
  initSliderSelectorButtons(),
  initSliderSeletorOnHoverInidcator()
}
function sliderAutoResize() {
  return setSliderRailMinHeight(),
  !1
}
function setOnResiveListener() {
  window.addEventListener("resize", sliderAutoResize, !1)
}
function getActiveSliderHeight() {
  return jQuery("#category-product-slider .slider-block.active").outerHeight()
}
function getSliderSlidesMaxHeight() {
  var e = 0;
  return jQuery("#category-product-slider .slider-block").each(function() {
    jQuery(this).outerHeight() > e && (e = jQuery(this).outerHeight())
  }),
  e
}
function moveSliderIndicator() {
  caret && "undefined" != typeof caret ? caret.css({
    left: getActiveSliderBtnLeft(),
    width: getActiveSliderBtnWidth()
  }) : caret = jQuery("#solutions-slider-indicator")
}
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
function initSlideArray() {
  slideArray = [],
  jQuery("#slider-selector li").each(function(e) {
    var t = jQuery(this).attr("data-target");
    parseInt(e),
    slideArray.push(t),
    jQuery("#" + t).attr("slide-order", e)
  })
}
function getActiveSliderBtnWidth() {
  return jQuery("#slider-selector ul .active").outerWidth()
}
function getActiveSliderBtnLeft() {
  return jQuery("#slider-selector ul .active").position().left
}
function sliderBtnSetActive(e) {
  jQuery("#slider-selector .active").removeClass("active"),
  e.addClass("active")
}
function sliderContentSetActive(e) {
  jQuery("#category-product-slider .slider-block.active").toggleClass("exiting entering").removeClass("active"),
  jQuery("#" + e + ".slider-block").addClass("active entering")
}
function sliderUpdateHeight(e) {
  jQuery("#category-product-slider .slide-container").css({
    height: e
  })
}
function setSliderRailMinHeight() {
  jQuery("#category-product-slider .slide-container").css({
    "min-height": getSliderSlidesMaxHeight()
  })
}
function updateSlidePos(e, t) {
  e.classList.remove("slide-left", "slide-right", "slide-center"),
  e.classList.add(t)
}
function setSlideEntryExit(e, t) {
  var i;
  (i = document.querySelector("#category-product-slider .slider-block.exiting")) && i.classList.remove("exiting"),
  e.classList.remove("entering"),
  e.classList.add("exiting"),
  t.classList.add("entering")
}
function updateSliderContent(e) {
  var t = document.querySelector("#" + e + ".slider-block");
  if (t.classList.contains("active"))
    return !1;
  for (var i, a = document.querySelector("#category-product-slider .slider-block.active"), n = parseInt(t.getAttribute("slide-order")), o = parseInt(a.getAttribute("slide-order")), r = document.querySelectorAll("#category-product-slider .slider-block"), l = 0; l < r.length; l++)
    (i = r[l]).classList.contains("active") ? updateSlidePos(a, n > o ? "slide-left" : "slide-right") : updateSlidePos(i, n > i.getAttribute("slide-order") ? "slide-left" : "slide-right"),
    setSlideEntryExit(a, t),
    updateSlidePos(t, "slide-center"),
    t.classList.add("active"),
    a.classList.remove("active")
}
function initTabs() {
  document.querySelectorAll(".tab-container .tab-menu li")[0].className += " active",
  document.querySelectorAll(".tab-container .tab-panels .tab-panel-heading")[0].className += " active",
  document.querySelectorAll(".tab-container .tab-panels .tab-panel-content")[0].className += " active",
  jQuery(".tab-container .tab-menu li").click(function() {
    tabs_update_active(jQuery(this).attr("data-target"))
  }),
  jQuery(".tab-container .tab-panels label").click(function() {
    tabs_update_active(jQuery(this).attr("for"))
  })
}
function tabs_update_active(e) {
  var t;
  (t = is_node(".tab-container .tab-menu li.active")) && t.removeClassName("active"),
  (t = is_node(".tab-container .tab-panel-content.active")) && t.removeClassName("active"),
  (t = is_node(".tab-container .tab-panel-heading.active")) && t.removeClassName("active"),
  document.querySelector(".tab-container .tab-menu li[data-target='" + e + "']").className += " active",
  document.querySelector(".tab-container .tab-panel-heading[for='" + e + "']").className += " active",
  document.querySelector(".tab-panels #" + e).className += " active"
}
function initTabsGotoReviews() {
  jQuery("#goto-reviews, #goto-reviews-form").click(function() {
    gotoReviewsTab()
  })
}
function gotoReviewsTab() {
  glideTo("#product-tabs"),
  tabs_update_active("tab_tabreviews")
}
function initProductBrandSorter() {
  jQuery(".brand-sorter li").click(function() {
    var e = jQuery(this);
    if (e.hasClass("active"))
      return !1;
    jQuery(".brand-sorter li.active").removeClass("active"),
    e.addClass("active");
    var t = e.attr("data-target");
    jQuery(".products-grid.active").removeClass("active"),
    jQuery("#" + t + ".products-grid").addClass("active")
  })
}
