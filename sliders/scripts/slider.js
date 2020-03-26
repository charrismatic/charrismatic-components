

/****************************************
 * FEATURE CATEGORY SLIDER FUNCTIONS  * *
 ****************************************/

// TODO: SET ALL CONTAINER TO MIN HEIGHT OF LARGEST
// TODO SET TIMEOUT ON RESIZE

var resizeLock;
function initCategorySlider() {
  initSliderIndicator();
  initSlideArray();
  initSliderSelectorButtons();
  initSliderSeletorOnHoverInidcator();

  // sliderAutoResize();
  // setOnResiveListener();
}

function sliderAutoResize(){

  // DEPRECATED
  // sliderUpdateHeight( getActiveSliderHeight() );

  // NOW WE SET MIN HEIGHT TO LARGEST SLIDER TO PREVENT JUMPING
  setSliderRailMinHeight();

  return false

  if (resizeLock){
    return false;
  }

  resizeLock = true;
  window.setTimeout(function(){
    console.log('window size timer reset');
    resizeLock = false;
  }, 100);
}


function setOnResiveListener() {
  window.addEventListener('resize', sliderAutoResize, false );
}


function getActiveSliderHeight() {
  return jQuery('#category-product-slider .slider-block.active').outerHeight();
}


function getSliderSlidesMaxHeight() {
  var maxH = 0;
  jQuery('#category-product-slider .slider-block').each( function(){
    if (jQuery(this).outerHeight() > maxH ){
      maxH = jQuery(this).outerHeight();
    }
  });
  return maxH;
}


// MOVE TO ACTIVE BUTTON POSTION AND UPDATE TO MATCH SIZE FOR CENTERING
function moveSliderIndicator(){
  if(!caret || typeof caret === 'undefined'){
    caret = jQuery('#solutions-slider-indicator');
  } else {

    caret.css({
      'left' : getActiveSliderBtnLeft(),
      'width' : getActiveSliderBtnWidth()
      });
  }
}


// SLIDER FOLLOW MOUSEY
function sliderIndicatorFollowMouse(movL,newW) {
  if(!caret || typeof caret === 'undefined'){
    caret = jQuery('#solutions-slider-indicator');
  } else {

    caret.css({
      'left' : movL,
      'width' : newW
      });
  }
}


// SET INITIAL SLIDER INDICATOR AND SET POS/SIZE
function initSliderIndicator(){
  caret = jQuery('#solutions-slider-indicator');
  moveSliderIndicator();
}


// SLIDER BUTTON EVENT REGISTER
function initSliderSelectorButtons(){
  jQuery('#category-product-slider .slider-nav-btn').click(function(){
    sliderBtnSetActive( jQuery(this) );
    moveSliderIndicator();
    updateSliderContent(jQuery(this).attr('data-target'))
  });
}


// INIT HOVER ACTION FOR SELECTOR
function initSliderSeletorOnHoverInidcator() {
  jQuery('#category-product-slider .slider-nav-btn').hover(function(){
    var movL = jQuery(this).position().left;
    var newW = jQuery(this).outerWidth();
    sliderIndicatorFollowMouse(movL,newW);
  }, function(){
    moveSliderIndicator();
  });
}


// INIT ARRAY AND SET ORDER
function initSlideArray() {
  slideArray = [];
  jQuery('#slider-selector li').each(function(i){
    var slideID = jQuery(this).attr('data-target');
    var slidePos = parseInt(i) * 100;

    slideArray.push(slideID);

    jQuery('#'+slideID)
      .attr('slide-order',i);
  });
}


// GET ACTIVE BUTTON SIZE
function getActiveSliderBtnWidth() {
  return jQuery('#slider-selector ul .active').outerWidth();
}


// GET ACTIVE BUTTON POSITION
function getActiveSliderBtnLeft() {
   return jQuery('#slider-selector ul .active').position().left;
}


// SET THIS BUTTON ACTIVE
function sliderBtnSetActive( newActive ){
  jQuery('#slider-selector .active').removeClass('active');
  newActive.addClass('active');
}


// UPDATE FEATURED SLIDER CONTENT
function sliderContentSetActive( targetID ){
  jQuery('#category-product-slider .slider-block.active')
    .toggleClass('exiting entering')
    .removeClass('active');

  jQuery( '#'+targetID+'.slider-block' ).addClass('active entering');
}


// GET NEXT CONTAINERS HEIGHT BEFORE ABS POSITIONING
function sliderUpdateHeight(h) {
  jQuery('#category-product-slider .slide-container').css({
    'height': h
  });
}


function setSliderRailMinHeight(){
  jQuery('#category-product-slider .slide-container').css({
    'min-height': getSliderSlidesMaxHeight()
  });
}


function updateSlidePos(target, pos) {
  target.classList.remove('slide-left', 'slide-right', 'slide-center');
  target.classList.add(pos);
}


// RESET PREVIOUSLY ANIMATED SLIDE AND SET STATES
// FOR INCOMING AND OUTGOING SLIDES
function setSlideEntryExit(outgoing, incoming){
  var prev;
  // PREVIOUS SLIDE
  if ( prev = document.querySelector('#category-product-slider .slider-block.exiting') ){
    prev.classList.remove('exiting');
  }

  // CURRENT ACTIVE SLIDE
  outgoing.classList.remove('entering');
  outgoing.classList.add('exiting');

  // NEXT ACTIVE SLIDE
  incoming.classList.add('entering');
}


// @CHANGED REPLACED JQUERY WITH NATIVE QUERY SELECTOR
// @DATE 7/31/2017, 10:07:30 PM
// EXAMPLE:
// var curActive = jQuery('#category-product-slider .slider-block.active');
// BECOMES:
// var curActive = document.querySelector('#category-product-slider .slider-block.active');
// TODO: RENAME SLIDE-LEFT/SLIDE-RIGHT -> FROM/TO-LEFT/RIGHT;

// MOVE TO ACTIVE BUTTON POSTION AND UPDATE TO MATCH SIZE FOR CENTERING
function updateSliderContent( targetID ) {

  var newActive = document.querySelector( '#'+targetID+'.slider-block' );

  if (newActive.classList.contains('active')) {
    return false;
  }

  var curActive = document.querySelector('#category-product-slider .slider-block.active');

  var newPos = parseInt(newActive.getAttribute('slide-order'));
  var oldPos = parseInt(curActive.getAttribute('slide-order'));

  var posX, slide;
  var slides = document.querySelectorAll('#category-product-slider .slider-block');
  // documentdocument.querySelectorAll('#category-product-slider .slider-block:not(.active)')
  for (var i=0; i < slides.length; i++ ) {

    slide = slides[i];
    if (!slide.classList.contains('active')){

      posX = slide.getAttribute('slide-order');

      if ( newPos > posX ){
        updateSlidePos( slide, 'slide-left');
      } else {sliderBtnSetActive
        updateSlidePos( slide, 'slide-right');
      }

    } else {

      if ( newPos > oldPos ) {
        updateSlidePos(curActive, 'slide-left');
      } else {
        updateSlidePos(curActive, 'slide-right');
      }
    }

    // SET SLIDE POSITION
    setSlideEntryExit(curActive, newActive);

    // SET NEW TARGET TO ACTIVE
    updateSlidePos(newActive, 'slide-center');

    // FIRE ANIMATION
    newActive.classList.add('active');
    curActive.classList.remove('active');
  }
}
