/**
 *
 * @requires main/utilities/append_html
 */
function modal_load_content(tag_id, content){

  var options = {
    tagName: "div",
    class: "modal-container",
    id: tag_id
  }
  append_html('body', content, options);
  register_modal_events();
}



// SET MODAL ACTIVE
function modal_set_active(id){
  var modal = document.querySelector('#' + id);
  var body = document.querySelector('body');

  if (modal.classList.contains('active')){
    return false;
  }

  modal.classList.add('active');
  // body.classList.add('noscroll');

  return true;
}



function modal_close() {
  document.querySelector('.modal-container.active').classList.remove('active');
}

// REJECT SCROLLING WHEN MODAL IS ACTIVE
var modal_handle_scroll = function( event ) {
  // console.log(event);
  event.preventDefault();

  if(this.classList.contains('active')){
    return false;
  } else {
    return true;
  }
}

function register_modal_events() {
  document.querySelector('.modal-container').onmousewheel = modal_handle_scroll;
  document.querySelector('.modal-container').ontouchmove = modal_handle_scroll;
  document.querySelector('.modal-container').addEventListener("touchmove", modal_handle_scroll, false);
}


// deprecated;
function modal_submit() {
  console.log('test submit');

  jQuery('#quote-only .required').each(function() {
    if(!jQuery.trim(jQuery(this).val())) {
      empty_fields++;
      jQuery(this).addClass('validation-failed');
    }
  });

  if(empty_fields > 0){
    empty_fields = 0;
    return false;
  }

  jQuery("#thank-you-spinner").show();

  var form_data = jQuery("#quote-only").serialize();
  console.log(form_data);

  jQuery.ajax({
    type: 'POST',
    url: FORM_URL,
    data: form_data,
  }).done(function(data) {
    console.log(data);
    if(data == "1"){
      jQuery("#thank-you-spinner").hide();
      jQuery("#thank-you-quote-message").show();
    }
  });

  return true;
}
