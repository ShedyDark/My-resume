
$(document).ready(function(){
  $('.section-img').slick({
    dots: true,
    infinite: false, 
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
     responsive: [
            {
                breakpoint: 736,
                settings: {
                  arrows: false,
                  dots: false,

                }
            },
        ]
  });

    var maxHeight = -1;
  $('.slick-slide').each(function() {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $('.slick-slide').each(function() {
    if ($(this).height() < maxHeight) {
      $(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px 0');
    }
  });

// end
});


$( ".feature" ).on( "click", function() {
  $(".feature").removeClass('active')
  $(this).addClass('active');
  $(".feature").next(".sub-text").toggleClass('active');
  });



/* slick reinit */
$(window).on('resize orientationchange', function() {
    setTimeout(function () {
        $('.section-vdpo, .characteristic, .phone-texts').slick('setPosition');
    }, 300);
}); 



