window.onload = function() {
	

	//请求本地的json数据
	$.get("json/login.json", function(msg) {
		addLogin(msg);
		defaultA();
		swiper();

	})

	function addLogin(json) {

		for(var key in json) {
			var loginImg = json[key].loginImg.split("|");
			var loginName = json[key].loginName.split("|");
			var computerUrl = json[key].computerUrl.split("|");
			var $loginList = $(".partnerImg");

			var $wrapper = $("<ul class='swiper-slide'></ul>")
			$wrapper.appendTo($loginList);

			for(var i = 0; i < loginImg.length; i++) {

				var loginImgli = $('<li class="col-md-2">' +
					'<div class="loginl"><img src="img/login/' + loginImg[i] + '" alt="航天科技" /></div><span>' + loginName[i] + '</span>' +
					'<a class="overlay"  target="_blank" href="' + computerUrl[i] + '"><i class="info iconfont icon-iconchaolianjie"></i></a>' +
					'</li>');
				loginImgli.appendTo($wrapper); //通过循环将每次json里面的内容加载到ul中	
			}

		}

	}

	function defaultA() {
		$(".partnerImg a").each(function() {

			if($(this).attr('href') == "#") {
				$(this).css("cursor", "default");
				$(this).find("i").remove();

				$(this).click(function(event) {
					event.preventDefault();
				});
			}
		});
	}

	function swiper() {

			var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay: 4000,
			loop: true,
			effect: 'fade'
		});
		
		$(".swiper-slide").hover(function(){
			swiper.stopAutoplay();
		},function(){
			swiper.startAutoplay();
		});
	}

};

