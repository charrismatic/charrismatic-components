// VALIDATE FIELDS FROM CUSTOM FORM
function validator(formID, fieldArr) {
  var obj = {};
  var validArr = [];
  var valid = "";
  var form = document.querySelector("form#" + formID);

  for (i = 0; i < fieldArr.length; i++) {
    obj[fieldArr[i].name] = fieldArr[i].value;
    var field = form.find("[name='" + fieldArr[i].name + "']");

    // REQUIRED FIELDS ONLY
    if (field.hasClass("required")) {

      // CHECK VALID NAME
      if (field.hasClass("name")) {
        valid = validateName(fieldArr[i].value);
      }

      // CHECK VALID EMAIL
      else if (field.hasClass("email")) {
        valid = validateEmail(fieldArr[i].value);
      }

      // CHECK VALID PHONE NUMBER
      else if (field.hasClass("phone")) {
        valid = validatePhone(fieldArr[i].value);
      }

      // VALIDATE GENERIC TEXT MESSAGE
      else if (field.hasClass("text")) {
        valid = validateMsg(fieldArr[i].value);
      }

      // VALIDATE GENERIC TEXT MESSAGE
      else {
        valid = validateMsg(fieldArr[i].value);
      }

      validArr.push(valid);

      if (valid === true) {
        field.removeClass("bad");
        field.addClass("good");
      } else {
        field.removeClass("good");
        field.addClass("bad");
      }
    }
  }

  var requiredCount = form.find(".required:not(abbr)").length;

  var validCount = 0;
  for (var i = 0; i < validArr.length; i++) {
    if (validArr[i] === true) {
      validCount = validCount + 1;
    }
  }

  // RETURN FORM STATUS
  var out = {};
  if (validCount == requiredCount) {
    out.status = true;
    out.data = obj;
  } else {
    out.status = false;
    out.data = "";
  }

  return out;
}



/* CHECK VALID EMAIL FORMAT
----------------------------------------------- */
function validateEmail(email) {
  // !#$%&'*+-/=?^_`{|}~ are legal
  var emailPattern = /^[\w\-!#$%&'*+-/=?^_`{|}~]+@[\w-]+\.[\w]+$/;

  if (!emailPattern.test(email)) {
    return false;
  } else {
    return true;
  }
}


/* 	CHECK VALID PHONE FORMAT
*	Requires a US phone number WITH area code.
*	Users  can enter whatever delimiters they want or no delimiters at all
*	i.e. 111-222-3333, or 111.222.3333, or (111) 222-3333, or 1112223333
----------------------------------------------- */
function validatePhone(phone) {
  // !#$%&'*+-/=?^_`{|}~ are legal
  var phonePattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
  if (!phonePattern.test(phone)) {
    return false;
  } else {
    return true;
  }
}


/* VALIDATE NAME
----------------------------------------------- */
function validateName(name) {
  var namePattern = /[a-zA-Z.'\-_\s]{1,40}/;
  if (!namePattern.test(name)) {
    return false;
  } else {
    return true;
  }
}


/* VALIDATE MESSAGE
----------------------------------------------- */
function validateMsg(msg) {
  if (msg.length > 0) {
    return true;
  } else {
    return false;
  }
}

function resetForm() {
  document.querySelector('input[type="reset"]').click()
  document.querySelector('textarea').classList.remove('bad' ,'good')
}

/* VALIDATE EMAIL FORM AND SEND TO MAILER
 *********************************************** */
function sendMail(formID) {
  fields = jQuery("form#" + formID).serializeArray();
  validform = validator(formID, fields);

  console.log(validform);
  if (validform.status === true) {
    // SEND MAIL
    jQuery.ajax({
      method: "POST",
      url: "/",
      data: {
        data: validform.data
      },
      success: function(data) {
        console.log(data);
        jQuery("#note").fadeIn();
        resetForm();
        window.setTimeout(function() {
          jQuery("#note").fadeOut();
        }, 2000);
      },
      error: function() {
        console.log("error");
      }
    });
  }
}

jQuery(document).ready(function() {
  jQuery("form").submit(function(event) {
    event.preventDefault();
    formID = jQuery(this).attr("id");
    sendMail(formID);
    return false;
  });
});

function validateForm(obj) {
  valid = {
    fname: validateName(obj.fname),
    lname: validateName(obj.lname),
    email: validateEmail(obj.email),
    msg: validateMsg(obj.msg)
  };

  greenBorder = "";
  redBorder = "";

  // CREATE DYNAMIC FUNCTION - REMOVE IF STATEMENT LOGIC
  total = 0;
  if (valid.fname == true) {
    $("input[name='fname']").removeClass("bad");
    $("input[name='fname']").addClass("good");
    total = total + 1;
  } else {
    $("input[name='fname']").removeClass("good");
    $("input[name='fname']").addClass("bad");
  }

  if (valid.lname == true) {
    $("input[name='lname']").removeClass("bad");
    $("input[name='lname']").addClass("good");
    total = total + 1;
  } else {
    $("input[name='lname']").removeClass("good");
    $("input[name='lname']").addClass("bad");
  }

  if (valid.email == true) {
    $("input[name='email']").removeClass("bad");
    $("input[name='email']").addClass("good");
    total = total + 1;
  } else {
    $("input[name='email']").removeClass("good");
    $("input[name='email']").addClass("bad");
  }

  if (valid.msg == true) {
    $("textarea[name='msg']").removeClass("bad");
    $("textarea[name='msg']").addClass("good");
    total = total + 1;
  } else {
    $("textarea[name='msg']").removeClass("good");
    $("textarea[name='msg']").addClass("bad");
  }

  if (total == 4) {
    return true;
  } else {
    return false;
  }
}
