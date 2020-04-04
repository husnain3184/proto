 $(document).ready(function(){

      $(window).scroll(function() {
	var height = $(window).scrollTop();
  if(height > 100) {
		$('header').addClass('active');
	} else {
		$('header').removeClass('active');
	}
});
    });