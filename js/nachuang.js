
$(function () {
	
/*²Ëµ¥°´Å¥*/
	$(".nav2_5_cont").click(function(){
		$(this).stop(true,false).toggleClass("nav2_5_cont_act");
		$(".in_tc").stop(true,false).fadeToggle();
	});
	
	
	$(".nav2_5_cont").click(function(){
		$(this).stop(true,false).toggleClass("nav2_5_cont_act");
		$(".in_tc1").stop(true,false).fadeToggle();
	});
	
	
	
	//banner
	jQuery(".banner").hover(function() {
	jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",0.5) }
	,function() {
		jQuery(this).find(".prev,.next").fadeOut() }
	);
		jQuery(".banner").slide( {
		titCell:".hd ul", mainCell:".bd ul", effect:"fold", autoPlay:true, autoPage:true,interTime:"4000",delayTime:"2000", trigger:"click",	startFun:function(i) {
		var curLi = jQuery(".banner .bd li").eq(i);
		if( !!curLi.attr("_src") ) {
		curLi.css("background-image",curLi.attr("_src")).removeAttr("_src")	}
	}	}
	);
	
	
	
		//video
	$(document).ready(function($){
		$('.video').click(function(){
		$('.theme-mask').show();
		$('.theme-mask').height($(document).height());
		$('.popover_video').slideDown(200);
	})
		$('.close').click(function(){
		$('.theme-mask').hide();
		$('.popover_video').slideUp(200);
	    })
	})
	
		//video
	$(document).ready(function($){
		$('.f-wx').click(function(){
		$('.mask').show();
		$('.mask').height($(document).height());
		$('.over_fwx').slideDown(200);
	})
		$('.close').click(function(){
		$('.mask').hide();
		$('.over_fwx').slideUp(200);
	    })
	})
	
	
		//f-wx1
	$(document).ready(function($){
		$('.f-wx1').click(function(){
		$('.mask1').show();
		$('.mask1').height($(document).height());
		$('.over_fwx1').slideDown(200);
	})
		$('.close1').click(function(){
		$('.mask1').hide();
		$('.over_fwx1').slideUp(200);
	    })
	})
	
	
	
	//branch_map
	jQuery(".branch_map").slide({trigger:"click"});
	
})


