jQuery(function($) {'use strict',

	
	// all Parallax Section
	$(window).load(function(){'use strict',
		$("#services").parallax("50%", 0.3);
		$("#clients").parallax("50%", 0.3);
	});
	


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});


	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
		return false;
	});

});

// Preloder script
jQuery(window).load(function(){'use strict';
	$(".preloader").delay(1600).fadeOut("slow").remove();
});

//Preloder script
jQuery(window).load(function(){'use strict';

	// Slider Height
	var slideHeight = $(window).height();
	$('#home .carousel-inner .item, #home .video-container').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home .carousel-inner .item, #home .video-container').css('height',slideHeight);
	});

});


// User define function
function Scroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.navbar-collapse').find('.scroll a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top);
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop ){
			$('.navbar-collapse li.scroll')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	})

};



//Nav Swapper

  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });
	









