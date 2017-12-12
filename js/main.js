$('.carousel').carousel({
  interval: 7000
});

$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('header').offset().top;

    //If window is loaded already scrolled down, position header fixed at top.
    if($(window).scrollTop() > stickyHeaderTop){
      $('header').css({width: '100%', margin: 0, position: 'fixed', top: 0, left: 0, "z-index": 20});
      $('.headerPlaceholder').css({display: 'block'});
    }

    // Set sticky header once the header hits the top of the window
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop) {
            $('header').css({width: '100%', margin: 0, position: 'fixed', top: 0, left: 0, "z-index": 20});
            $('.headerPlaceholder').css({display: 'block'});
        } else {
            $('header').css({position: 'static', top: 0});
            $('.headerPlaceholder').css({display: 'none'});
        }
    });
});

$("#testimonialSlideShow > div:gt(0)").hide();

setInterval(function() {
  $('#testimonialSlideShow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#testimonialSlideShow');
},  7000);


// $(window).scroll(function(){
//   // This is then function used to detect if the element is scrolled into view
//   function elementScrolled(elem){
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemHeight = $(elem).height();
//     // console.log(elemTop);
//     // console.log(elemHeight);
//     if((elemTop + (elemHeight)) <= docViewBottom){
//       console.log(true);
//     }
//     // return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
//   }
//
//   // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
//   if(elementScrolled('#bannerLeft')) {
//
//     console.log("in view");
//   // Your function here
//
//   }
// });


$(document).ready(function() {
  var elem = '.bannerContainer';
  var bottom_of_object = $(elem).offset().top + $(elem).outerHeight();
  var object_height = $(elem).height();
  var bottom_of_window = $(window).height();
  var position = $(window).scrollTop()+bottom_of_window;
  console.log(position);
  if( position > bottom_of_object){
      $(elem).animate({'opacity': 1}, 2000);
      console.log('scrollTop: ', position);
      console.log('bottom_of_object: ', bottom_of_object);

      console.log("here we are");
  } else {
      $(window).scroll( function(){
        var scroll = $(window).scrollTop() + (bottom_of_window + (object_height / 2));
          if(scroll >= (bottom_of_object)){
              $(elem).animate({'opacity': 1}, 1500);
              console.log("here we are");
              $(elem).finish();
          }
          $(elem).finish();
      });
  }
});

//
