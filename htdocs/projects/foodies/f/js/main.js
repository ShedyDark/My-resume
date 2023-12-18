$(".menu-item").click(function() {
  var item = $(this).attr("href");
    console.log(item);
    $([document.documentElement, document.body]).animate({
        scrollTop: $(item).offset().top
    }, 2000);
});



