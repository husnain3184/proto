 $(document).ready(function(){
      $('.projects-list').slick({
          dots: true,
		  infinite: true,
		  fade: true,
		  cssEase: 'linear'
      });
      $(window).scroll(function() {
	var height = $(window).scrollTop();
  if(height > 100) {
		$('header').addClass('active');
	} else {
		$('header').removeClass('active');
	}
});
    });