$(document).ready(function() {
	if($(window).width()<765){
		    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        spaceBetween: 10,
		autoplay: 1000,
			loop: true
    });
	}else{
			var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: false,
			slidesPerView: 'auto',
			autoplay: 2000,
			loop: true,
			speed: 300,
			coverflow: {
				rotate: 25,
				stretch: 0,
				depth: 50,
				modifier: 1,
				slideShadows: true
			}
		});
	}

	var $timeline_block = $('.cd-timeline-block');
	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function() {
		if($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});
	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function() {
		$timeline_block.each(function() {
			if($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});

	$('.accordion').gridAccordion({
		width: 960,

		height: 480,

		columns: 5,

		distance: 2,

		closedPanelWidth: 10,

		closedPanelHeight: 10,

		alignType: 'centerCenter',

		slideshow: true,

		panelProperties: {

			0: {
				captionWidth: 200,
				captionHeight: 35,
				captionTop: 30,
				captionLeft: 30
			},

			4: {
				captionWidth: 150,
				captionHeight: 100,
				captionTop: 30,
				captionLeft: 650
			},

			7: {
				captionWidth: 310,
				captionHeight: 35,
				captionTop: 350,
				captionLeft: 40
			},

			8: {
				captionWidth: 300,
				captionHeight: 40,
				captionTop: 150,
				captionLeft: 35
			},

			11: {
				captionWidth: 150,
				captionHeight: 120,
				captionTop: 300,
				captionLeft: 30
			},

			14: {
				captionWidth: 300,
				captionHeight: 40,
				captionTop: 30,
				captionLeft: 50
			},

			16: {
				captionWidth: 150,
				captionHeight: 120,
				captionTop: 150,
				captionLeft: 10
			},

			18: {
				captionWidth: 300,
				captionHeight: 40,
				captionTop: 130,
				captionLeft: 50
			}

		}
	});
	
	
	
	

});

