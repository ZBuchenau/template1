$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyTop = $('.blogSide').offset().top;
    var headerHeight = $('header').height();
    console.log("stickyTop: ", stickyTop);

    //If window is loaded already scrolled down, position header fixed at top.
    if($(window).scrollTop() > (stickyTop - headerHeight)){
      $('.blogSide').css({position: 'fixed', top: headerHeight + 2, right: 0});
      // $('.headerPlaceholder').css({display: 'block'});
    }

    // // Set sticky header once the header hits the top of the window
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyTop - headerHeight) {
            $('.blogSide').css({position: 'fixed', top: headerHeight, right: 0, height: '100%'});
            // $('.blogSidePlaceHolder').css({display: 'block'});
        } else {
            $('.blogSide').css({position: 'absolute', top: 0});
            // $('.blogSidePlaceholder').css({display: 'none'});
        }
    });
});
