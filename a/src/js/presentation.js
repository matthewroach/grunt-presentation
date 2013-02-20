$(document).ready(function() {

	$('.slide:first-child').addClass('current');
	presentation.progress(1);


	$(document.documentElement).on('keyup click', function(e) {

		switch( e.keyCode ) {
			case 39:
				presentation.nextSlide();
				break;

			case 37:
				presentation.prevSlide();
				break;
		}

	});


	/* --- Syntax Highlighter Plugin --- */
	$("pre").snippet("css",{
		style:"ide-eclipse",
		showNum:false,
		menu:false
	});


});


presentation = {

	totalSlides : $('.slide').length,

	nextSlide : function( ) {

		var $current = $('.current')
			, slideNo = $current.attr('data-slide')
			, nextSlideNo = $current.next('.slide').attr('data-slide');

		if ( slideNo < presentation.totalSlides ) {
			$current.removeClass('current').fadeOut().next('.slide').fadeIn().addClass('current');
			presentation.progress( nextSlideNo );
		}

	},

	prevSlide : function( ) {

		var $current = $('.current')
			, slideNo = $current.attr('data-slide')
			, prevSlideNo = $current.prev('.slide').attr('data-slide');

		if ( slideNo != 1 ) {
			$current.removeClass('current').fadeOut().prev('.slide').fadeIn().addClass('current');
			presentation.progress( prevSlideNo );
		}

	},

	progress : function( slideNo ) {

		var progressWidth = 0;

		if ( slideNo !== presentation.totalSlides ) {
			progressWidth = Math.round( ( parseInt(slideNo, 10) / parseInt(presentation.totalSlides, 10) ) * 100 );
		} else {
			progressWidth = 100;
		}

		$('#progress').css({ 'width' : progressWidth+'%'});

	}

};
