function lp_handle_featured_image(){
  var checkbox = document.querySelector('input[name="_landing_page_sections[0][_landing_page_section_has_featured_image]');
  if (checkbox.value) {
    console.log('show featured image');
  } else {
    console.log('dont show featured image');
  }
}

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  document.querySelector('input[name="_landing_page_sections[0][_landing_page_section_has_featured_image]').onclick = lp_handle_featured_image;
});
