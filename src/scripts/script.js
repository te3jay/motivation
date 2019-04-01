console.log('%c Hello from /scripts/script.js ', 'background: lemonchiffon; border: 1px solid #fff');
console.log('%c Welcome to tris-webpack-boilerplate! ', 'background: lavenderblush; border: 1px solid #fff');


// add custom js below

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });