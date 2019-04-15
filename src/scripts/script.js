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

  
  const bodyScrollLock = require('./bodyScrollLock.js');
  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll; 


  var newWindowWidth = $(window).width();
  if(newWindowWidth < 969){
    $(".burger").click(function(){
      $(".burger").toggleClass("open")
      $(".navbar").toggleClass("navbar--open")
      $(".navbar__ul").toggleClass("navbar__ul--open")
      $(".navbar__menu").toggleClass("navbar__menu--open")
      $(".navbar__img").toggleClass("navbar__img--down")
      if ($(".burger").hasClass("open")){
        disableBodyScroll()
      }
      else if (!$(".burger").hasClass("open")){
        enableBodyScroll()
      }
      

    });
  

    $(".navbar__menu__a").click(function(){
      $(".burger").toggleClass("open")
      $(".navbar").toggleClass("navbar--open")
      $(".navbar__ul").toggleClass("navbar__ul--open")
      $(".navbar__menu").toggleClass("navbar__menu--open")
      $(".navbar__img").toggleClass("navbar__img--down")
     if ($(".burger").hasClass("open")){
      disableBodyScroll()
    }
    else if (!$(".burger").hasClass("open")){
      enableBodyScroll()
    }
    })

}


    function openModal() {
      $("#modal").show()
      $("#modal").css({
        'opacity' : '1'
      })
     // $("#modal").fadeOut("slow")
    }

    function closeModal() {
      $("#modal").hide("1000").fadeOut()
      $("#modal").css({
        'opacity' : '0'
      })
    }

    $(".grid-item").click(function(){
      openModal();
      var background = $(this).css("background-image");
      $(".modal-content__image").css({
        'background-image' : background
      });

      var caption = $(this).find("p").text();
      $(".modal-content__caption").text(caption);

    });
      $(".close-cursor").click(closeModal);

      // Form-validation


      var validateForm = function() {

        $('.validate-form').on('submit', function(e){

            var valid = false, // Form valid?
                errCount = 0, // Aantal errors
                fields = document.querySelectorAll('form .required'), // Target de required velden
                checkMail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm; // Check voor valid email
    
            if (!fields.length) { return true; } // Check om te zien of er velden required zijn, zoniet return true;
    
            // Loopen door alle velden
            [].forEach.call(fields, function(field) {

                removeErroField(field);
              
                // Als een veld een lege value heeft of null:
                if(field.value == '' || field.value == null) {
    
                    field.classList.add('error'); // Aan het veld class 'error' toevoegen
                    errCount ++; // Aantal errors +1
                    createErrorField(field, field.dataset.required);
    
                // Check if field type is email en of emailadres wel degelijk een emailadres is
                } else if (field.type == 'email' && !checkMail.test(field.value)) {
                    
                    field.classList.add('error'); // Aan het veld class 'error' toevoegen
                    errCount ++; // Aantal errors +1
                    createErrorField(field, field.dataset.requiredMail);
    
                // Anders:
                } else {
                    
                    field.classList.remove('error'); // 'error' class verwijderen van veld
                    removeErroField(field);
    
                }
    
            });
    
            // Als er 0 errors zijn, zet valid op true zodat form kan submitten
            if (errCount === 0) { valid = true; }
    
            return valid;
    
        });

        // Create een error message
        var createErrorField = function(fld, msg) {

            var errorMsg = document.createElement('span');
                errorMsg.classList.add('error-msg'),
                errorMsg.innerHTML = msg;

            fld.parentNode.appendChild(errorMsg);

        }

        // Verwijder error messages
        var removeErroField = function(fld) {

            var errorMsg = fld.parentNode.querySelector('.error-msg');
            if (!errorMsg) { return; }
            fld.parentNode.querySelector('.error-msg').remove();

        }

    }

    validateForm();


    //Smooth scroll

      // Add smooth scrolling to all links
  $(".navbar__menu__a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
       // window.location.hash = hash;
      });
    } // End if
  });
  
});






