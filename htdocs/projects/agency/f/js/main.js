

$(document).ready(function () {
    
    $('.header__menu').on('click', function (e) {
        $('.mobile-menu').addClass("active")
    });
    $('.mobile-menu__close-cross').on('click', function (e) {
        $('.mobile-menu').removeClass("active")
    });

});

$(window).scroll(function() {

});


