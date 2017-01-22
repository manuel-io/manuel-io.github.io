(function($) {
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
    }, 800);
  });
	
	function adjustWindow() {
    winH = $window.height();
    
    if (winH <= 550) {
      winH = 550;
		} 
  
    $slide.height(winH);
	}
		
})(jQuery);
