
/**
 *  [Initialize actions for Brand Selector ]
 *  @method initProductBrandSorter
 *  @see products.html
 * @return {[void]}
 */
function initProductBrandSorter() {

  jQuery('.brand-sorter li').click(function(){
    var btn = jQuery(this);

    if( btn.hasClass('active')) {
      return false;
    } else {
      // UPDATE SELECTOR BUTTON
      jQuery('.brand-sorter li.active').removeClass('active');
      btn.addClass('active');

      // UPDATE CONTENT
      var target = btn.attr('data-target');
      jQuery('.products-grid.active').removeClass('active');
      jQuery('#' + target + '.products-grid' ).addClass('active');
    }
  });
}
