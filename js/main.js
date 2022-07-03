(function($) {
	'use strict';
	

	jQuery(document).ready(function(){
		
		/*PRELOADER JS*/
		$(window).load(function() { 
			$('.status').fadeOut();
			$('.preloader').delay(450).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
	}); 
	

})(jQuery);	