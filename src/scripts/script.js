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

  /*function toggle_visibility(id) {
    var e = document.getElementsByClassName(id);
    if(e.style.display == 'flex')
      e.style.display = 'none';
    else
      e.style.display = 'flex';
  }*/
  var newWindowWidth = $(window).width();
  if(newWindowWidth < 969){
    $(".burger").click(function(){
      $(".burger").toggleClass("open")
      $(".navbar").toggleClass("navbar--open")
      $(".navbar__ul").toggleClass("navbar__ul--open")
      $(".navbar__menu").toggleClass("navbar__menu--open")
      
    /* $(".navbar__menu").css({
        'display' : 'flex'
      })*/
    
    });

    $(".navbar__menu__a").click(function(){
      $(".burger").toggleClass("open")
      $(".navbar").toggleClass("navbar--open")
      $(".navbar__ul").toggleClass("navbar__ul--open")
      $(".navbar__menu").toggleClass("navbar__menu--open")
    })

}

/*$(".grid-item").click(function(){
  $(this).toggleClass("grid-item--active")
})*/
    function openModal() {
      $("#modal").show("5000").fadeIn();
    }

    function closeModal() {
      $("#modal").hide("1000").fadeOut();
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

     /* $(".submit").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name.length > 0){
          $(".form-feedback-name").text(name)
        }
      })*/

      function validate() {
      
        if( document.contactform.name.value == "" ) {
           alert( "Please provide your name!" );
           document.myForm.Name.focus() ;
           return false;
        }
        if( document.contactform.email.value == "" ) {
           alert( "Please provide your Email!" );
           document.myForm.EMail.focus() ;
           return false;
        }
        
        return( true );

      }



});






