
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
