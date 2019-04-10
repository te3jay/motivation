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

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item'
});

$grid.on( 'click', '.grid-item', function() {
  // change size of item via class
  //$( '.grid-item' ).removeClass('grid-item--gigante');
  if($( '.grid-item' ).hasClass('grid-item--gigante')){
      $( '.grid-item' ).removeClass('grid-item--gigante');
      }
  
    $( this ).addClass('grid-item--gigante');
    var $window = $(window),
    $element = $('.grid-item--gigante'),
    elementTop = $element.offset().top,
    elementHeight = $element.height(),
    viewportHeight = $window.height(),
    scrollIt = elementTop; - ((viewportHeight - elementHeight) / 2);

    $window.scrollTop(scrollIt);
      
  // trigger layout
  $grid.masonry();



});

$grid.on( 'layoutComplete', function( event, laidOutItems ) {
  console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
});

});



