"use strict";

function append_html(target, html_content, options) {

  if (!target || target === "") { target = "body"; }
  var id = "";
  var tagName = "div";
  var className = "";

  if (options && options !== "") {
    if (options.tag) { tagName = options.tag; }
    if (options.class) { className = options.class; }
    if (options.id) { id = options.id; }
  }

  var node = document.createElement(tagName);
  node.id = id;
  node.className += className;
  node.innerHTML = html_content;
  document.querySelector(target).appendChild(node);
  return true;
}

function create_node(node_attr) {
  if (!node_attr.tag_name) {
    var tagName = "div";
  } else {
    tagName = node_attr.tag_name;
  }

  var node = document.createElement(tagName);
  if (node_attr.class_name) {
    node.className = node_attr.class_name;
  }
  if (node_attr.id) {
    node.id = node_attr.id;
  }
  if (node_attr.html_content) {
    node.innerHTML = node_attr.html_content;
  }
  return node;
}

function get_node(selector) {
  return document.querySelector(selector);
}

function get_all_nodes(selector) {
  return document.querySelectorAll(selector);
}

function is_node(selector) {
  var node = get_node(selector);
  if (node) {
    return node;
  } else {
    return false;
  }
}

function has_class(node, class_name) {
  return node.classList.contains(class_name);
}

function add_class(node, class_name) {
  if (node.classList.contains(class_name)) {
    return false;
  } else {
    node.classList.add(class_name);
  }
}


function remove_class(node, class_name) {
  if (!node.classList.contains(class_name)) {
    return false;
  } else {
    node.classList.remove(class_name);
  }
}

function scrollToTop() {
  jQuery("html, body").animate({scrollTop: 0}, 1000);
}

function glideTo(selector) {
  var node = document.querySelector(selector);
  jQuery("html, body").animate({scrollTop: node.offsetTop - window.window.innerHeight /3}, 1000);
}

function get_time_hash() {
  return btoa(
    Date.now()
      .toLocaleString()
      .split(",")
      .reverse()
  ).substring(0, 10);
}

const form_setup_tag = form_data => {
  return `<form id="${form_data.form_id}"
       onsubmit="${form_data.submit_function}"
       data-success-url="${form_data.success_url}"
       data-send-url="${form_data.send_url}"
       method="${form_data.method}"
       enctype="${form_data.enctype}">`;
};


const InputFieldTools = {

  get_field_key_data: ((key) => {
    let input_fields = {
      first_name: {
        name: 'first_name',
        type: 'text',
        label: 'First Name',
        validation: 'required',
        class: 'required',
        id: '',
        maxlength: '100'
      },
      last_name: {
        name: 'last_name',
        type: 'text',
        label: 'Last Name',
        validation: 'required',
        class: 'required',
        id: '',
        maxlength: '100'
      },
      email: {
        name: 'email',
        type: 'text',
        label: 'Email',
        validation: 'email',
        class: 'required',
        id: '',
        maxlength: '100'
      },
      phone: {
        name: 'phone',
        type: 'text',
        label: 'Phone',
        validation: 'phone',
        class: 'required',
        id: '',
        maxlength: "20"
      },
      msg: {
        name: "msg",
        type: "textarea",
        label: "Message",
        validation: "required",
        class: "required",
        id: "",
        maxlength: "",
        rows: "2"
      },
      slforce_msg: {
        name: "00N40000002auOo",
        type: "textarea",
        label: "What are your needs?",
        validation: "required",
        class: "materialize-textarea",
        id: "00N40000002auOo",
        maxlength: "",
        rows: "2"
      },
      name_field_row: {
        type: "field_row",
        fields: ["first_name", "last_name"]
      }
    };
    return input_fields[key];
  }),
  get_textarea_html: function (field) {
    return `
      <div class="input-field">
        <textarea type="text"
           id="${field.id}"
           class="${field.class}"
           name="${field.name}"
           maxlength="${field.maxlength}"
           data-validation="${field.validation}"
           rows="${field.rows}">
        </textarea>
        <label for="${field.name}">${field.label}</label>
      </div>`;
  },
  get_text_input_html: function (field) {
    return `
    <div class="input-field">
      <input type="text"
         id="${field.id}"
         class="${field.class}"
         name="${field.name}"
         maxlength="${field.maxlength}"
         data-validation="${field.validation}">
       <label for="${field.name}">${field.label}</label>
    </div>`;
  },

  get_hidden_input_html: function (field) {
    return `<input type="hidden" name="${field.name}" value="${field.value}">`;
  },

  get_multi_field_row_html: function (field_row) {
    var html = '<div class="flex-row">';
    for (var i = 0; i < field_row.length; i++) {
      html += this.get_field_html(field_row[i]);
    }
    html += "</div>";
    return html;
  },

  get_field_html: function get_field_html(field_key) {
    var field = this.get_field_key_data(field_key);
    switch (field.type) {
      case "text": return this.get_text_input_html(field); break;
      case "textarea": return this.get_textarea_html(field); break;
      case "select": return this.get_input_text_field_html(field); break;
      case "hidden": return this.get_hidden_input_html(field); break;
      case "field_row": return this.get_multi_field_row_html(field.fields); break;
      default:
    }
  }
};

function get_form_html(options) {
  var input_fields_hidden_default = {
    oid: "000000000000000",
    form_id: "modal_form",
    referring_url: location.href,
    comment: "",
    retURL: "/thank-you"
  };

  const get_input_fields_hidden_html = (fields) => {
    var html = "";
    for (var field in fields) {
      html += InputFieldTools.get_hidden_input_html({
        name: field,
        value: fields[field]
      });
    }
    return html;
  };

  var get_form_fields_html = function get_form_fields_html(fields) {
    var html = "";
    for (var i = 0; i < fields.length; i++) {
      html += InputFieldTools.get_field_html(fields[i]);
    }
    return html;
  };
  var hidden_fields_html = get_input_fields_hidden_html(
    input_fields_hidden_default
  );
  var fields_html = get_form_fields_html(options.fields);
  return [hidden_fields_html, fields_html].join("");
}


function submit_contact_form(formID) {
  var form = get_node(`#${formID}`);
  if (has_class(form, "disabled")) {
    return false;
  }
  var valid_mesg = is_node("#validation-message");
  if (valid_mesg) {
    add_class(valid_mesg, "in-progress");
  }
  var valid = validate_form(formID);
  if (!valid) {
    if (valid_mesg) {
      remove_class(valid_mesg, "in-progress");
      add_class(valid_mesg, "has-error");
    }
  } else {
    if (valid_mesg) {
      remove_class(valid_mesg, "has-error");
      remove_class(valid_mesg, "in-progress");
      add_class(valid_mesg, "is-sending");
    }
    send_form(formID);
  }
}

function send_form(formID) {
  var form = get_node("#" + formID);
  var send_url = form.attributes["data-send-url"].value;
  var form_data = jQuery("#" + formID).serialize();

  add_class(form, "disabled");

  form_data = form_data + "&is_ajax=true&no_redirect=true";
  var validation_message = is_node("#validation-message");

  jQuery.ajax({
      method: "POST",
      url: send_url,
      data: form_data
    })
    .done(function(msg) {
      if (validation_message) {
        remove_class(validation_message, "is-sending");
        add_class(validation_message, "send-successful");
      }
      console.log("Form send status: " + msg);
      window.location = form.attributes["data-success-url"].value;
    })
    .fail(function(jqXHR, textStatus) {
      if (validation_message) {
        remove_class(validation_message, "is-sending");
        add_class(validation_message, "send-failure");
      }
      console.log("Request failed: " + textStatus);
    });
}

function submit_web_to_lead(event) {
  event.preventDefault();
  submit_contact_form(event.target.id);
  return false;
}



// function validate_form(formID) {
//   var inputs = ["input", "select", "textarea"];
//   var selctor = inputs.map(function(el) {
//     return "#" + formID + " " + el;
//   });
//   var fields = get_all_nodes(selctor);
//   var form_is_valid = true;
//   var field;
//   for (field of fields) {
//     if (field.attributes["data-validation"]) {
//       form_is_valid = handle_validate_field(field);
//     }
//   }
//   return form_is_valid;
// }

function validate_form(formID) {
  var inputs = ["input", "select", "textarea"];
  var selctor = inputs.map(function(el) {
    return "#" + formID + " " + el;
  });
  var fields = get_all_nodes(selctor);
  var form_is_valid = true;
  var field;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;
  try {
    for (
      var _iterator = fields[Symbol.iterator](), _step;
      !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
      _iteratorNormalCompletion = true
    ) {
      field = _step.value;
      if (field.attributes["data-validation"]) {
        form_is_valid = handle_validate_field(field);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
  return form_is_valid;
}

function handle_validate_field(field) {
  var validation_type = field.attributes["data-validation"].value;
  var validation_status = false;
  if (validation_type === "required") {
    validation_status = validate_field_required(field.value);
  } else if (validation_type === "email") {
    validation_status = validate_field_email(field.value);
  } else if (validation_type === "phone") {
    validation_status = validate_field_phone(field.value);
  }
  if (validation_status === false) {
    if (has_class(field.parentNode, "input-field")) {
      if (has_class(field.parentNode, "has-success")) {
        field.parentNode.classList.remove("has-success");
      }
      field.parentNode.classList.add("has-error");
    }
    if (has_class(field, "valid")) {
      field.classList.remove("valid");
    }
    field.classList.add("invalid");
    return false;
  } else {
    if (has_class(field.parentNode, "input-field")) {
      if (has_class(field.parentNode, "has-error")) {
        field.parentNode.classList.remove("has-error");
      }
      field.parentNode.classList.add("has-success");
    }
    if (has_class(field, "invalid")) {
      field.classList.remove("invalid");
    }
    field.classList.add("valid");
    return true;
  }
}

function validate_field_required(input) {
  var min_required_length = 1;
  if (input && input.length > min_required_length && input !== "") {
    return true;
  } else {
    return false;
  }
}

function validate_field_email(input) {
  var email_check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
  if (input && email_check.test(input)) {
    return true;
  } else {
    return false;
  }
}

function validate_field_phone(input) {
  var phone_check = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  if (input && phone_check.test(input)) {
    return true;
  } else {
    return false;
  }
}

function get_contact_modal(referal_url) {
  var modal_id = "contact-modal";
  var form_id = modal_id + "_form";
  var html = `<div class="modal-overlay"></div><div class="modal"><div class="modal-header"><i class="comment-bubbles"></i><span>Start A Conversation</span><i class="close"></i></div><form id=" ${form_id} " onsubmit="handle_form(event)" data-success-url="/thank-you" data-send-url="/endpoint" method="post" enctype="multipart/form-data"><div class="modal-content"><input type="hidden" name="oid" value="00D40000000MnRX"/><input type="hidden" name="form_id" value=" ${form_id}"/><input type="hidden" name="referring_url" value="${referal_url}"/><input style="display: none;" type="text" name="comment" value=""/><input type="hidden" name="retURL" value="/thank-you"/><div class="flex-row"><div class="input-field"><input type="text" name="first_name" maxlength="40" data-validation="required" class="required"/><label for="first_name">First Name</label> </div><div class="input-field"><input type="text" name="last_name" maxlength="80" data-validation="required" class="required"/><label for="last_name">Last Name</label> </div></div><div class="input-field"><input type="text" name="email" maxlength="200" data-validation="email" class="required"/><label for="email">Email</label> </div><div class="input-field"><input type="text" name="phone" maxlength="20" data-validation="phone" class="required"/><label for="phone">Phone</label> </div><div class="input-field"><textarea id="00N40000002auOo" class="materialize-textarea" data-validation="required" name="00N40000002auOo" rows="2" ></textarea><label for="00N40000002auOo">What are your needs?</label> </div></div><div class="modal-footer"><button class="submit">Lets Talk</button> </div></form><p class="modal-confirmation" id="thank-you-quote-message">Thanks for requesting a quote! For immediate assistance call our team at <span class="gnumber">1-866-867-0306</span> or click Live Chat. <br/> <br/>Special pricing on quantities and responses to RFQ\u2019s and RFP\u2019s vary by brand. We appreciate your patience!</p></div>`;

  modal_load_content(modal_id, html);
  jQuery("#contact-modal-button").click(function() {
    modal_set_active(modal_id);
    jQuery('#contact-modal input[name="first_name"]').focus();
  });
  jQuery(".modal .close").click(function() {
    modal_close();
  });
  jQuery(".modal-overlay").click(function() {
    modal_close();
  });
}

function get_special_pricing_modal(sku, referal_url) {
  var modal_id = "special-pricing";
  var html = `<div class="modal-overlay"></div><div class="modal"><div class="modal-header"><i class="comment-bubbles"></i><span>Get Special Pricing</span><i class="close"></i></div><form id="special-pricing-form" onsubmit="handle_form(event)" data-success-url="/thank-you" data-send-url="/endpoint" method="post" enctype="multipart/form-data"><div class="modal-content"><input type="hidden" name="oid" value="00D40000000MnRX"/><input type="hidden" name="form_id" value="special-pricing-form"/><input type="hidden" name="product_sku" value="${sku}"/><input type="hidden" name="referring_url" value=" ${referal_url} "/><input style="display: none;" type="text" name="comment" value=""/><input type="hidden" name="retURL" value="/thank-you"/><div class="flex-row"><div class="input-field"><input type="text" name="first_name" maxlength="40" data-validation="required" class="required"/><label for="first_name">First Name</label></div><div class="input-field"><input type="text" name="last_name" maxlength="80" data-validation="required" class="required"/><label for="last_name">Last Name</label></div></div><div class="input-field"><input type="text" name="email" maxlength="200" data-validation="email" class="required"/><label for="email">Email</label></div><div class="input-field"><input type="text" name="phone" maxlength="20" data-validation="phone" class="required"/><label for="phone">Phone</label></div><div class="input-field"><input type="text" name="company" maxlength="100" data-validation="required" /><label for="company">Company</label></div><div class="input-field"><textarea id="00N40000002auOo" class="materialize-textarea" data-validation="required" name="00N40000002auOo" rows="2" ></textarea><label for="00N40000002auOo">What are your needs?</label></div><input type="checkbox" id="is_attachment"/><label for="is_attachment">Click Here to attach an RFQ</label><div class="file-field input-field"><div class="btn"><input type="file"></div><div class="file-path-wrapper"><input class="file-path validate" type="text" id="rfq_attachment" name="attachment"></div></div></div><div class="modal-footer"><button class="submit">Submit</button></div></form><p class="modal-confirmation" id="thank-you-quote-message">Thanks for requesting a quote! For immediate assistance call  our team at <span class="gnumber">1-866-867-0306</span> or click Live Chat. <br/><br/>Special pricing on quantities and responses to RFQ\u2019s and RFP\u2019s vary by brand. We appreciate your patience!</p></div>`;

  modal_load_content(modal_id, html);
  jQuery("#get-pricing-button").click(function() {
    modal_set_active(modal_id);
    jQuery('#quote-only input[name="first_name"]').focus();
  });
  jQuery('#quote-only input[type="file"]').change(function() {
    jQuery("#quote-only span#filename").html(
      jQuery('#quote-only input[type="file"]')
        .val()
        .replace(/C:\\fakepath\\/i, "")
    );
  });

  jQuery(".modal .close").click(function() {
    modal_close();
  });

  jQuery(".modal-overlay").click(function() {
    modal_close();
  });
}

function modal_load_content(tag_id, content) {
  var options = {
    tagName: "div",
    class: "modal-container",
    id: tag_id
  };
  append_html("body", content, options);
  register_modal_events();
}

function modal_set_active(id) {
  var modal = document.querySelector("#" + id);
  var body = document.querySelector("body");
  if (modal.classList.contains("active")) {
    return false;
  }
  modal.classList.add("active");
  return true;
}

function modal_close() {
  document.querySelector(".modal-container.active").classList.remove("active");
}

var modal_handle_scroll = function modal_handle_scroll(event) {
  event.preventDefault();
  if (this.classList.contains("active")) {
    return false;
  } else {
    return true;
  }
};

function register_modal_events() {
  document.querySelector(".modal-container").onmousewheel = modal_handle_scroll;
  document.querySelector(".modal-container").ontouchmove = modal_handle_scroll;
  document
    .querySelector(".modal-container")
    .addEventListener("touchmove", modal_handle_scroll, false);
}

function modal_submit() {
  jQuery("#quote-only .required").each(function() {
    if (!jQuery.trim(jQuery(this).val())) {
      empty_fields++;
      jQuery(this).addClass("validation-failed");
    }
  });

  if (empty_fields > 0) {
    empty_fields = 0;
    return false;
  }

  jQuery("#thank-you-spinner").show();
  var form_data = jQuery("#quote-only").serialize();
  console.log(form_data);

  jQuery
    .ajax({
      type: "POST",
      url: "/endpoint",
      data: form_data
    })
    .done(function(data) {
      if (data == "1") {
        jQuery("#thank-you-spinner").hide();
        jQuery("#thank-you-quote-message").show();
      }
    });
  return true;
}

function get_modal_is_loaded(modal_id) {
  var exists = get_node(modal_id);
  return exists;
}

function modal_parse_data_attr(data) {
  var key;
  var modal_key;
  var out = {};
  for (var i = 0; i < data.length; i++) {
    key = data[i].name;
    if (key.substring(0, 4) === "data") {
      modal_key = key
        .substring(5)
        .split("-")
        .join("_");
      out[modal_key] = data[i].value;
    }
  }
  return out;
}

function launch_modal(node) {
  var data = node.attributes;
  var modal_data = modal_parse_data_attr(data);
  var modal_container_id = modal_data.modal_id + "_container";
  var modal_is_loaded = get_modal_is_loaded(modal_container_id);
  if (!modal_is_loaded) {
    init_modal(modal_data);
    setTimeout(function() {
      modal_set_active(modal_container_id);
    }, 300);
  } else {
    modal_set_active(modal_container_id);
  }
}

function init_modal() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var defaults = {
    container_label: "modal_container",
    form_label: "modal_form",
    modal_label: "modal",
    header_icon: "comment-bubbles",
    header_title: "Start A Conversation",
    html_content: "",
    has_form: true,
    form_name: "modal_contact_form",
    form_fields: ["name_field_row", "email", "phone", "slforce_msg"],
    footer_action_text: "Submit"
  };

  if (data.modal_id === undefined) {
    var time_hash = get_time_hash();
    var modal_container_id = defaults.container_label + "_" + time_hash;
    var modal_form_id = defaults.form_label + "_" + time_hash;
    var modal_id = defaults.modal_label + "_" + time_hash;
  } else {
    modal_container_id = data.modal_id + "_container";
    modal_form_id = data.modal_id + "_form";
    modal_id = data.modal_id + "_modal";
  }

  if (data.use_existing === undefined) { data.use_existing = false; }
  if (data.debug === undefined) { data.debug = false; }
  if (data.header_icon === undefined) { data.header_icon = defaults.header_icon; }
  if (data.header_title === undefined) { data.header_title = defaults.header_title; }
  if (data.footer_action_text === undefined) { data.footer_action_text = defaults.footer_action_text; }
  if (data.has_form === undefined) { data.has_form = defaults.has_form; }
  if (data.form_name === undefined) { data.form_name = defaults.form_name; }
  if (data.form_fields === undefined) { data.form_fields = defaults.form_fields; }


  function debug_log(info) {
    if (!data.debug) {
      return false;
    } else {
      console.log(info);
    }
  }

  function get_modal_overlay_html() {
    return '<div class="modal-overlay"></div>';
  }

  function get_modal_header_html() {
    return `<div class="modal-header">\n<i class="${data.header_icon}"></i>\n<span>${data.header_title}</span>\n<i class="close"></i>\n<div>`;
  }

  function get_modal_content_html() {
    var form_html = get_form_html({
      name: data.form_name,
      fields: data.form_fields
    });
    return '<div class="modal-content">' + form_html + "</div>";
  }

  function get_modal_footer_html() {
    return (`<div class="modal-footer">
      <button class="submit">${data.footer_action_text}</button>
      </div>`);
  }


function handle_form(event) {
  event.preventDefault();
  submit_contact_form(event.target.id);
  return false;
}


  function get_modal_form_start_html() {
    return form_setup_tag({
      form_id: modal_form_id,
      submit_function: "handle_form(event)",
      success_url: "/thank-you",
      send_url: "",
      method: "post",
      enctype: "multipart/form-data"
    });
  }

  function get_modal_html() {
    var modal_html = "";
    if (data.has_form) { modal_html += get_modal_form_start_html(); }
    modal_html += get_modal_header_html();
    modal_html += get_modal_content_html();
    modal_html += get_modal_footer_html();
    if (data.has_form) { modal_html += "</form>" }
    modal_html += "</div>";
    return '<div id="' + modal_id + '" class="modal">' + modal_html + "</div>";
  }

  function modal_unset_active(id) {
    var modal = document.querySelector("#" + id);
    var body = document.querySelector("body");
    if (!modal.classList.contains("active")) {
      return false;
    }
    modal.classList.remove("active");
    return true;
  }

  function register_modal_click_events(cid) {
    var close_button_selector = ["#", cid, " ", ".modal", " ", ".close"].join(
      ""
    );
    var modal_overlay_selector = ["#", cid, " ", ".modal-overlay"].join("");
    document.querySelector(close_button_selector).addEventListener(
      "click",
      function() {
        modal_unset_active(cid);
      },
      false
    );
    document.querySelector(modal_overlay_selector).addEventListener(
      "click",
      function() {
        modal_unset_active(cid);
      },
      false
    );
  }
  function get_modal_container_html() {
    return "" + get_modal_overlay_html() + get_modal_html();
  }
  var modal_container_html = get_modal_container_html();
  append_html("body", modal_container_html, {
    tag: "div",
    class: "modal-container",
    id: modal_container_id
  });
  register_modal_click_events(modal_container_id);
}

function getViewportSize() {
  return {
    width: window.document.documentElement.clientWidth,
    height: window.document.documentElement.clientHeight
  };
}

function getCurrentScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}

function getElemInfo(elem) {
  var offsetTop = 0;
  var offsetLeft = 0;
  var offsetHeight = elem.offsetHeight;
  var offsetWidth = elem.offsetWidth;
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
    if (!isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft;
    }
  } while ((elem = elem.offsetParent) !== null);
  return {
    top: offsetTop,
    left: offsetLeft,
    height: offsetHeight,
    width: offsetWidth
  };
}

function checkVisibility(elem) {
  var viewportSize = getViewportSize();
  var currentScroll = getCurrentScroll();
  var elemInfo = getElemInfo(elem);
  var spaceOffset = 0.2;
  var elemHeight = elemInfo.height;
  var elemWidth = elemInfo.width;
  var elemTop = elemInfo.top;
  var elemLeft = elemInfo.left;
  var elemBottom = elemTop + elemHeight;
  var elemRight = elemLeft + elemWidth;

  function checkBoundaries() {
    var top = elemTop + elemHeight * spaceOffset;
    var left = elemLeft + elemWidth * spaceOffset;
    var bottom = elemBottom - elemHeight * spaceOffset;
    var right = elemRight - elemWidth * spaceOffset;
    var wTop = currentScroll.y + 0;
    var wLeft = currentScroll.x + 0;
    var wBottom = currentScroll.y - 0 + viewportSize.height;
    var wRight = currentScroll.x - 0 + viewportSize.width;
    return top < wBottom && bottom > wTop && left > wLeft && right < wRight;
  }
  return checkBoundaries();
}

function toggleElement() {
  for (var i = 0; i < revealer.length; i++) {
    if (checkVisibility(revealer[i])) {
      revealer[i].classList.add("revealed");
    } else {
      revealer[i].classList.remove("revealed");
    }
  }
}

function isScrolledIntoView(target) {
  var elemTop = target.getBoundingClientRect().top;
  var elemBottom = target.getBoundingClientRect().bottom;
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}

function throttleExamples() {
  var scrollHandler = throttle(function() {
    _requestAnimationFrame(toggleElement);
  }, 300);
  var resizeHandler = throttle(function() {
    _requestAnimationFrame(toggleElement);
  }, 300);

  if (window.addEventListener) {
    addEventListener("scroll", scrollHandler, false);
    addEventListener("resize", resizeHandler, false);
  } else if (window.attachEvent) {
    window.attachEvent("onscroll", scrollHandler);
    window.attachEvent("onresize", resizeHandler);
  } else {
    window.onscroll = scrollHandler;
    window.onresize = resizeHandler;
  }
}
