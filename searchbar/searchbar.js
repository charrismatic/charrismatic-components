

/* ***************************** */
// MAGENTO FUNCTIONS
// function setLocation(url){
//     window.location.href = url;
// }

// DO MAGENTO SEARCH
function searchHasInput() {
  if (jQuery('#search_mini_form input.input-text').val()){
    return jQuery('#search_mini_form input.input-text').val();
  } else {
    return false;
  }
}

function seachbarIsActive() {
  if (jQuery('#search_mini_form .search.submit').hasClass('active')){
    return jQuery('#search_mini_form .search.submit').hasClass('active');
  } else {
    return false;
  }
}

function handleSearchFocusIn() {
  if (seachbarIsActive()){
    jQuery('.form-search .input-text, .search-wrapper button').addClass('active');
    return true;
  } else {
    return false;
  }
}


function handleSearchFocusOut() {
  if (seachbarIsActive()){
    if (searchHasInput()){
      return false;
    } else {
      jQuery('.form-search .input-text, .search-wrapper button').removeClass('active');
    }
  } else {

  }
}

// TODO: CLEAR SEARCHBAR ON LOAD
// -- PREVIOUS SEARCH INPUT IS STILL PRESENT ON NAVIGATION
function initMageSearch() {
  console.log('initializing search');
  jQuery('#search_mini_form').submit(function(e){

    if (seachbarIsActive()){
      if (searchHasInput()){
        //submitSearch();
      } else {
        e.preventDefault();
        // CANCEL SEARCH
      }
    } else {
      // ACTIVATE SEARCH
      e.preventDefault();
      jQuery('.form-search .input-text, .search-wrapper button').addClass('active');
      jQuery('.form-search .input-text').focus();
    }
  });


  jQuery('.form-search .input-text').focusout(function(){
    handleSearchFocusOut()
  });

  jQuery('.form-search .input-text, .search-wrapper button').focus(function(){
    handleSearchFocusIn();
  });

  // jQuery('search_mini_form .search.submit').click(function(){
  // });
}
