$(document).ready(function() {
		
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
  //Animations
  if ($(".wow").length > 0) {
    new WOW().init();
  }

	var hearderLink = function() {
		var strUrl = location.href;
		var arrUrl = strUrl.split("/");
		var strPage = arrUrl[arrUrl.length - 1];
		$(".yhq_nav li a").each(function(index) {
			
			if($(this).attr('href') == strPage) {
				$(".yhq_nav li a").removeClass("active");
				$(this).addClass("active");
				if($(this).attr('href') == "about.html" || $(this).attr('href') == "News.html") {
					$(this).parent().parent().prev().addClass("active")
				}
				if($(this).attr('href') == "antonC.html" || $(this).attr('href') == "matchC.html" || $(this).attr('href') == "WarningC.html" || $(this).attr('href') == "polyC.html") {

					$(this).parent().parent().prev().addClass("active")
				}

			}
		})

	}
	var mobileMenuOutsideClick = function() {
		$(document).click(function(e) {
			var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
			if(!container.is(e.target) && container.has(e.target).length === 0) {

				if($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-fh5co-nav-toggle').removeClass('active');

				}
			}
		});
	}
	var offcanvasMenu = function() {
		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function() {
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'swing');
		}).mouseleave(function() {

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'swing');
		});

		$(window).resize(function() {

			if($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-fh5co-nav-toggle').removeClass('active');

			}
		});
	};

	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event) {
			var $this = $(this);

			if($('body').hasClass('overflow offcanvas')) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function() {

			var $win = $(window);
			if($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};
	var helpAnmain = function() {
		var viewHeight = (window.innerHeight) ? window.innerHeight : document.body.clientHeight;
		var oTop = $(".con-header").length ? $(".con-header").offset().top : false;
		var hTop = !!$('.wqd-menu ').length;
		$(document).on('mouseenter wqd-menu', '.wqd-menu', function(e) {
			if(e.type === 'mouseenter') {
				$(this).addClass('menu-hover')
			}
		})

		$(window).scroll(function() {
			var b = $(window).scrollTop() + $(window).height();
			var p = $(this).scrollTop();
			if(oTop) {
				if($(this).scrollTop() >= oTop) {
					$('.wqd-menu').addClass('wqd-menu-fix');
					$(".con-header").addClass("con-header-fixed");
				} else {
					$('.wqd-menu').removeClass('wqd-menu-fix');
					$(".con-header").removeClass("con-header-fixed");
				}
			} else if(hTop) {
				if(p > viewHeight / 5) {
					if($('.wqd-menu-other').length) {
						$('.wqd-menu').addClass('wqd-menu-fix');
					} else {
						$('.wqd-menu').addClass('wqd-menu-fix');
					}
				}
				if(p < viewHeight / 5) {
					if($('.wqd-menu-other').length) {
						$('.wqd-menu').removeClass('wqd-menu-fix');
					} else {
						$('.wqd-menu').removeClass('wqd-menu-fix');
					}
				}
			}
			//到下一屏，客服动画
			if(p > viewHeight / 2) {
				$('.wqd-help').addClass('wqd-help-top');
			} else {
				$('.wqd-help').removeClass('wqd-help-top');
			}
		})

		var help = $('.js-animated-circles');
		$(document).on('mouseenter mouseleave', '.wqd-help-icon,.wqd-information', function(e) {
			if(e.type === 'mouseenter') {
				help.addClass('stop').removeClass('animated');
			} else {
				help.removeClass('stop');
			}
		});
		help.addClass('animated');
		setInterval(function() {
			if(help.hasClass('stop')) return false;
			help.toggleClass('animated');
		}, 2800)
	};

	$(function() {
		hearderLink();
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		goToTop();
		helpAnmain()
	});

});