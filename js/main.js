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
