console.log('%c Hello from /scripts/script.js ', 'background: lemonchiffon; border: 1px solid #fff');
console.log('%c Welcome to tris-webpack-boilerplate! ', 'background: lavenderblush; border: 1px solid #fff');


// add custom js below
// external js: masonry.pkgd.js
$( document ).ready( function() {

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 15,
    percentPosition: true
});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

/*function toggle_visibility(id) {
  var e = document.getElementsByClassName(id);
  if(e.style.display == 'flex')
     e.style.display = 'none';
  else
     e.style.display = 'flex';
}*/

  $("#mobile-nav").click(function(){
    $("ul").toggle(500);
    $("ul").css({
      'z-index' : '9'
    });
    $("li").css({
      'display' : 'block',
      'width' : '100%',
      'text-align' : 'center'

    })
    $(".navigation").css({
      'width' : '100%',
      'justify-content' : 'flex-start',
      'align-items' : 'flex-start'
    });
  });

  $('#contactform').validate({ // initialize the plugin
    rules: {
        name: {
            required: true,
            minlength: 2,
        },
        email: {
            required: true,
            email: true,
        },
        message: {
          required: true,
          minlength: 10,
        }
    }
});

function validateForm() {
  var x = document.forms["contactform"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

});