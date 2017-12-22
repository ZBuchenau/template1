$('.carousel').carousel({
  interval: 7000
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


$(document).ready(function() {
  var elem = '.bannerContainer';
  var bottom_of_object = $(elem).offset().top + $(elem).outerHeight();
  var object_height = $(elem).height();
  var bottom_of_window = $(window).height();
  var position = $(window).scrollTop() + (bottom_of_window + (object_height/2));
  console.log(position);
  if( position > (bottom_of_object - object_height)){
      $(elem).animate({'opacity': 1}, 1000);
      // $(elem).show( "slide", {direction: "up" }, 2000 );
      console.log('scrollTop: ', position);
      console.log('bottom_of_object: ', bottom_of_object);

      console.log("here we are");
  } else {
      $(window).scroll( function(){
        var scroll = $(window).scrollTop() + (bottom_of_window + (object_height));
          if(scroll >= (bottom_of_object)){
              $(elem).animate({'opacity': 1}, 1000);
              // $(elem).show( "slide", {direction: "up" }, 2000 );
              console.log("here we are");
          }
      });
  }
});

//
