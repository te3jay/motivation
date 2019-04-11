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





      
      $("#contactform").on('submit',function(){

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if( document.contactform.name.value == "" ) {
          $(".form-feedback-name").text("Please provide your name!");
          document.contactform.name.focus() ;
          return false;
       }
       else {
        $(".form-feedback-name").text("");
      }
       if( document.contactform.email.value == "" ) {
        $(".form-feedback-email").text("Please provide a correct email");
          document.contactform.email.focus() ;
          return false;
       }
       else {
        $(".form-feedback-email").text("");
      }

       if (document.contactform.email.value.match(mailformat)){
        $(".form-feedback-email").text("");
        document.contactform.email.focus() ;
       }
       else {
        $(".form-feedback-email").text("Please provide a correct email");
        return false;
      }

       if( document.contactform.message.value == "" ) {
        $(".form-feedback-message").text("You did not enter a message");
          document.contactform.message.focus() ;
          return false;
       }
       else {
        $(".form-feedback-message").text("");
      }

      return( true );

      })
});






