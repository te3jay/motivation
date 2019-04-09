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

  $(".burger").click(function(){
    $(".burger").toggleClass("open")
    $(".navbar").toggleClass("navbar--open")
    $(".navbar__ul").toggleClass("navbar__ul--open")
    $(".navbar__menu").toggleClass("navbar__menu--open")
   /* $(".navbar__menu").css({
      'display' : 'flex'
    })*/
    
  });

});


