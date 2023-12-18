

$(document).ready(function () {
    
    $('.header__menu-sandvich').on('click', function (e) {
        $('.mobile-menu').addClass("active")
    });
    $('.mobile-menu__close-cross').on('click', function (e) {
        $('.mobile-menu').removeClass("active")
    });
    $('.header__menu-item, .mobile-menu__item').on('click', function (e) {
        var href = $(this).attr("href");
        console.log(href)
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 500);
        $('.mobile-menu').removeClass("active")
    });
    $('.end__sidebar').on('click', function (e) {
        var href = $(this).attr("href");
        console.log(href)
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 500);
    });
    $('.btn').on('click', function (e) {
        var href = $(this).attr("href");
        console.log(href)
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 500);
    });
    $('.header__email-icon').on('click', function (e) {
        $('.menu-email').addClass("active")
    });
    $('.menu-email__info-close-cross').on('click', function (e) {
        $('.menu-email').removeClass("active")
    });
});

$(window).scroll(function() {

});


