$(function(){
	$(".bzucb").eq(0).show().css("height","30px");
	$(".bzuc ul li").click(function(){
		var a=$(".bzuc ul li").index(this);
		$(".bzucb").eq(a).show().parent().siblings().children(".bzucb").hide();
		$(".bzucb").eq(a).animate({"height":"auto"},500);
		
		});
	})



$(function(){
	$(".jxcszc ul li").mouseenter(function(){
		$(this).find(".sbfaq").stop().animate({"top":"-68px"},600);
	});
	
	$(".jxcszc ul li").mouseleave(function(){
		$(this).find(".sbfaq").stop().animate({"top":"132px"},600);
	});
	
	

	});







function voids(id){
	$(".ars").attr("class","ars");
	$(".ars").eq(id).attr("class","ars on");
	if(parseInt($('.swaplist').css('left')) == 1072 || parseInt($('.swaplist').css('left')) == $(".ars").length * -1072)
	$('.mainlist').animate({left: id * -1072 + 'px'},'slow');
	else
	$('.swaplist').animate({left: id * -1072 + 'px'},'slow');
}

$(function(){


	/***不需要自动滚动，去掉即可***/
	linum = $('.mainlist li').length;//图片数量
	w = linum * 268;//ul宽度
	$('.piclist').css('width', w + 'px');//ul宽度
	$('.swaplist').html($('.mainlist').html());//复制内容

	$('.onhcb').click(function(){
		$(".ars").attr("class","ars");
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		if($('.mainlist li').length>4){//多于4张图片
			ml = parseInt($('.mainlist').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w*-1){//默认图片显示时
				$('.swaplist').css({left: '1072px'});//交换图片放在显示区域右侧
				$('.mainlist').animate({left: ml - 1072 + 'px'},'slow');//默认图片滚动			
				//
				$as = parseInt($('.mainlist').css('left')) / -1072 + 1*1;
				$(".ars").eq($as).attr("class","ars on");
				if(ml==(w-1072)*-1){//默认图片最后一屏时
					$('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
					$(".ars").eq(0).attr("class","ars on");
				}
			}else{//交换图片显示时
				$('.mainlist').css({left: '1072px'})//默认图片放在显示区域右
				$('.swaplist').animate({left: sl - 1072 + 'px'},'slow');//交换图片滚动
				//
				$as = parseInt($('.swaplist').css('left')) / -1072 + 1*1;
				$(".ars").eq($as).attr("class","ars on");
				
				if(sl==(w-1072)*-1){//交换图片最后一屏时
					$('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
					$(".ars").eq(0).attr("class","ars on");
				}
			}
		}
	})
	$('.onhca').click(function(){
		$(".ars").attr("class","ars");
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		if($('.mainlist li').length>4){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));
			if(ml<=0 && ml>w*-1){
				$('.swaplist').css({left: w * -1 + 'px'});
				$('.mainlist').animate({left: ml + 1072 + 'px'},'slow');		
				//
				$as = parseInt($('.mainlist').css('left')) / -1072 - 1 * 1;
				$(".ars").eq($as).attr("class","ars on");				
				if(ml==0){
					$('.swaplist').animate({left: (w - 1072) * -1 + 'px'},'slow');
					//
					$as = parseInt($('.swaplist').css('left')) / -1072 - 1 * 1;
					$(".ars").eq($as).attr("class","ars on");
				}
			}else{
				$('.mainlist').css({left: (w) * -1 + 'px'});
				$('.swaplist').animate({left: sl + 1072 + 'px'},'slow');
				//
				$as = parseInt($('.swaplist').css('left')) / -1072 - 1 * 1;
				$(".ars").eq($as).attr("class","ars on");
				if(sl==0){
					$('.mainlist').animate({left: (w - 1072) * -1+'px'},'slow');
					//
					$as = parseInt($('.mainlist').css('left')) / -1072 - 1 * 1;
					$(".ars").eq($as).attr("class","ars on");
				}
			}
		}
	})    


	$(".jta").click(function(){
		var as = $(".tab_b").length;
		as = as * 1 - 1;
		var dangqian = $(".geshu").val();
		$(".tab_b").hide();
		if(dangqian == 0)
			var e = as;
		else
		 var e = dangqian*1 - 1;
		$(".tab_b").eq(e).show();
		$(".geshu").val(e);
	})
	$(".jtb").click(function(){
		var as = $(".tab_b").length;
		as = as * 1 - 1;
		var dangqian = $(".geshu").val();
		
		$(".tab_b").hide();
		if(dangqian == as)
			var e = 0;
		else
		 var e = dangqian*1 + 1;
		$(".tab_b").eq(e).show();
		$(".geshu").val(e);
	})


	//公共选项卡切换
	$(".tab_list").each(function(q){
		$(".tab_list").eq(q).find(".tab_a").each(function(e){
			$(this).mouseenter(function(){
				$(".tab_list").eq(q).find(".tab_a").removeClass("on")
				$(this).addClass("on")
				$(".tab_list").eq(q).find(".tab_b").hide()
				$(".tab_list").eq(q).find(".tab_b").eq(e).show()
				
				$(".geshu").val(e);
			})
			
		})	
		$(".tab_list").eq(q).find(".tab_a").eq(0).mouseenter();
	})
	
	//
	
	$(".tab_click").each(function(q){
		$(".tab_click").eq(q).find(".tab_a").each(function(e){
			$(this).click(function(){

				$(".tab_click").eq(q).find(".tab_a").removeClass("on")
				$(this).addClass("on")
				$(".tab_click").eq(q).find(".tab_b").hide()
				$(".tab_click").eq(q).find(".tab_b").eq(e).show()
				
				
				$(".zfz .wos").css("color","#000");
				$(".zfz .wos span").css("display","none");
				$(".zfz .wos span").eq(e).css("display","block");
				$(".zfz .wos").eq(e).css("color","#ea5819");
				
				
			})
			
		})	
		$(".tab_click").eq(q).find(".tab_a").eq(0).click();
	})
	//
			
});




$(function(){
	$(".ondcz ul li a").hover(function(){
		$(this).children(".ondcz ul li a span").show();
		},function(){
			$(this).children(".ondcz ul li a span").hide(1000);
			})
})


$(function(){
	$(".ongcz ul li a").hover(function(){
		$(this).children(".ongcz ul li a p").animate({"top":"0"},1000);
		},function(){
			$(this).children(".ongcz ul li a p").animate({"top":"159"},1000);
			})
})





$(function(){
	$(".proc ul li").hover(function(){
		$(this).children(".procs").show(1000);
		},function(){
			$(this).children(".procs").hide(1000);
			})
})





$(function(){
	$(".onec .tab_b").hover(function(){
		$(this).children(".table").animate({"left":"0px"},1000);
		},function(){
			$(this).children(".table").animate({"left":"2000px"},1000);
			})
})




$(function(){
	$(".youxcyx ul li").hover(function(){
		$(this).children(".youxcyx ul li span").show();
		},function(){
			$(this).children(".youxcyx ul li span").hide();
			})
	
})




function zfz(id){
	$(".tab_a").removeClass("on");
	$(".tab_a").eq(id).attr("class","tab_a on");
	$(".tab_b").hide();
	$(".tab_b").eq(id).show();
	$(".zfz .wos").css("color","#000");
	$(".zfz .wos span").css("display","none");
	$(".zfz .wos span").eq(id).css("display","block");
	$(".zfz .wos").eq(id).css("color","#ea5819");
}









