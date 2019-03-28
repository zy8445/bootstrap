$(function(){
	var l =1;
	$(".yiru").mouseenter(function(){
		l++;
		if(l>15){
			l=1;
		}
		$(".jiazai").html(l);
	})
	var c =999;
	$(".yiru").mouseenter(function(){
		c--;
		if(c<645){
			c=999;
		}
		$(".jiazai1").html(c);
	})
	var r =1056;
	$(".yiru").mouseenter(function(){
		r--;
		if(r<645){
			r=1056;
		}
		$(".jiazai2").html(r);
	})
	
	//pc网站
$(window).scroll(function(){
	var height1 = $(this).scrollTop();
	if(height1>649 && height1<1298){
		$(".fade1").fadeIn(1500);
	}
	console.log(height1);
})
$(window).load(function(){
	$(".fade1").show(1500);
})

//一键建站
$(window).scroll(function(){
	var height2 = $(this).scrollTop();
	if(height2>1298 && height2<1947){
		$(".fade2").fadeIn(1500);
	}
	console.log(height2);
})
$(window).load(function(){
	$(".fade2").show(1500);
})

//千套成品

$(window).scroll(function(){
	var height3 = $(this).scrollTop();
	if(height3>1947 && height3<2596){
		$(".fade3").fadeIn(1500);
	}
	console.log(height3);
})
$(window).load(function(){
	$(".fade3").show(1500);
})

//百度气球 
$(window).scroll(function(){
	var height4 = $(this).scrollTop();
	if(height4>2596 && height4<3245){
		$(".fade3").fadeIn(1500);
	}
	console.log(height4);
})
$(window).load(function(){
	$(".fade4").show(1500);
})

//免费搭建

$(window).scroll(function(){
	var height5 = $(this).scrollTop();
	if(height5>3245 && height5<3894){
		$(".fade5").fadeIn(1500);
	}
	console.log(height5);
})
$(window).load(function(){
	$(".fade5").show(1500);
})
//最后一部分

$(window).scroll(function(){
	var height6 = $(this).scrollTop();
	if(height6>3894 && height6<4543){
		$(".fade6").fadeIn(1500);
		$(".fade7").fadeIn(1500);
	}
	console.log($(".fade7"));
})
$(window).load(function(){
	$(".fade6").show(1500);
	$(".fade7").show(1500);
})









})
