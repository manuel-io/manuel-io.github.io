(function($) {
  $(".loaded").css("opacity", "0");

  $window = $(window);
  $slide = $('.homeSlide');
  $body = $('body');
  
  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
  });

  $body.imagesLoaded(function() {
    setTimeout(function() {
      adjustWindow();
      $body.removeClass('loading').addClass('loaded');
      $(".loaded").css("opacity", "1");
    }, 800);
  });

	function adjustWindow() {
    winH = $window.height();
    if (winH <= 10) winH = 10;
    $slide.height(winH);
	}
})(jQuery);
