"use strict";
// requires(dom_utilities)'
// requires(functions.get_time_hash)
// requires(forms.forms_html)



function get_modal_is_loaded(modal_id) {
 var exists = get_node(modal_id);
 return exists;
}



function modal_parse_data_attr(data){
  var key;
  var modal_key;
  var out = {};
  for (var i=0;i<data.length;i++) {

    key = data[i].name;

    if (key.substring(0,4) === "data") {
      modal_key = key.substring(5).split('-').join('_');
      out[modal_key] = data[i].value;
    }
  }
  return out ;
}


/** get_modal
 *  dynamic modal function prints html and shows modal
 *  simultaneously
 */
var launch_modal = function(node) {
  var data = node.attributes;
  var modal_data = modal_parse_data_attr(data);

  var modal_container_id = modal_data.modal_id + '_container';
  var modal_is_loaded = get_modal_is_loaded( modal_container_id );

  if (!modal_is_loaded) {
    init_modal( modal_data );
    setTimeout(function () {
      modal_set_active( modal_container_id);
    }, 300);
  } else {
    modal_set_active( modal_container_id);
  }
};

function init_modal(data={}) {

  // SET DEFAULT VALUES
  var modal_defaults = {
    container_label: 'modal_container',
    form_label: 'modal_form',
    modal_label: 'modal',
    header_icon: 'comment-bubbles',
    header_title: 'Start A Conversation',
    html_content: '',
    has_form: true,
    form_name: 'modal_contact_form',
    form_fields: ['name_field_row', 'email', 'phone', 'slforce_msg'],
    footer_action_text: 'Submit'
  };

  // IDENTIFIERS
  if (data.modal_id === undefined) {
    var time_hash = get_time_hash();
    var modal_container_id = modal_defaults.container_label +'_'+ time_hash;
    var modal_form_id = modal_defaults.form_label +'_'+ time_hash;
    var modal_id = modal_defaults.modal_label +'_'+ time_hash;
  } else {
    var modal_container_id = data.modal_id + "_container";
    var modal_form_id = data.modal_id + "_form";
    var modal_id  = data.modal_id + "_modal";
  }

  // CONFIG
  if (data.use_existing === undefined) { data.use_existing = false; }
  if (data.debug === undefined) { data.debug = false; }

  // CONTENT
  if (data.header_icon === undefined) { data.header_icon = modal_defaults.header_icon }
  if (data.header_title === undefined) { data.header_title = modal_defaults.header_title }
  if (data.footer_action_text === undefined) { data.footer_action_text = modal_defaults.footer_action_text }

  // FORM CONFIG
  if (data.has_form === undefined) { data.has_form = modal_defaults.has_form }
  if (data.form_name === undefined) { data.form_name = modal_defaults.form_name }
  if (data.form_fields === undefined) { data.form_fields = modal_defaults.form_fields }

  var debug_log = function( info ) {
    if (!data.debug){
      return false;
    } else {
      console.log( info );
    }
  }

  var get_modal_overlay_html = function() {
    return '<div class="modal-overlay"></div>';
  }

  var get_modal_header_html = function() {
    return ''+
      '<div class="modal-header">'+
        '<i class="'+data.header_icon+'"></i>'+
        '<span>'+data.header_title+'</span>'+
        '<i class="close"></i>'+
      '</div>';
  };

  var get_modal_content_html = function() {
    var form_html = get_form_html({
      name: data.form_name,
      fields: data.form_fields,
    });

    return '<div class="modal-content">'+form_html+'</div>';
  };

  var get_modal_footer_html = function() {
   return ''+
     '<div class="modal-footer">'+
       '<button class="submit">'+data.footer_action_text+'</button>'+
     '</div>';
  };

  var get_modal_form_start_html = function(){
    return form_setup_tag({
      form_id: modal_form_id,
      submit_function: 'handle_form(event)',
      success_url: FORM_SUCCESS,
      send_url: FORM_URL,
      method: 'post',
      enctype: 'multipart/form-data',
    });
  }

  var get_modal_html = function(){
    var modal_html = '';

    // SETUP MODAL FORM IF TRUE
    if (data.has_form){
      modal_html += get_modal_form_start_html();
    }

    modal_html += get_modal_header_html();
    modal_html += get_modal_content_html();
    modal_html += get_modal_footer_html();

    if (data.has_form){ modal_html += '</form>' }

    modal_html += '</div>';

    debug_log(modal_html);
    return '<div id="'+modal_id+'" class="modal">'+modal_html+'</div>';
  }



  // SET MODAL INACTIVE
  function modal_unset_active(id){
    var modal = document.querySelector('#' + id);
    var body = document.querySelector('body');

    if (!modal.classList.contains('active')){
      return false;
    }

    modal.classList.remove('active');
    // body.classList.add('noscroll');
    return true;
  }


  var register_modal_click_events = function(cid) {
    var close_button_selector = ['#',cid,' ','.modal',' ','.close'].join('');
    var modal_overlay_selector = ['#',cid,' ','.modal-overlay'].join('');
    document.querySelector(close_button_selector).addEventListener("click", function() {
      modal_unset_active(cid);
    }, false );

    document.querySelector(modal_overlay_selector).addEventListener("click", function() {
      modal_unset_active(cid)
    }, false );
  };

  var get_modal_container_html = function() {
    return ''+
      get_modal_overlay_html() +
      get_modal_html();
  }

  var modal_container_html = get_modal_container_html();

  // debug_log( "modal", modal_container_html );
  append_html('body', modal_container_html, {
    tag:'div',
    class:'modal-container',
    id:modal_container_id,
  });

  register_modal_click_events( modal_container_id );
}
