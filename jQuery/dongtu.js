$(function(){
	var l =1;
	var timer =null;
	$(".yiru").mouseenter(function(){
		timer=setInterval(function(){
			l++;
		if(l>50){
			l=50;
		}
		$(".jiazai").html(l);
		},30)
		
	})
	var c =999;
	$(".yiru").mouseenter(function(){
		timer=setInterval(function(){
		c--;
		if(c<950){
			c=950;
		}
		$(".jiazai1").html(c);
		},30)
	})
	var r =1056;
	$(".yiru").mouseenter(function(){
		timer=setInterval(function(){
		r--;
		if(r<1007){
			r=1007;
		}
		$(".jiazai2").html(r);
		},30)
	})
	
	//pc网站
$(window).scroll(function(){
	var height1 = $(this).scrollTop();
	if(height1>649 && height1<1298){
		$(".fade1").fadeIn(2500);
	}
	console.log(height1);
})
//一键建站
$(window).scroll(function(){
	var height2 = $(this).scrollTop();
	if(height2>1298 && height2<1947){
		$(".fade2").fadeIn(2500);
	}
	console.log(height2);
})
//千套成品

$(window).scroll(function(){
	var height3 = $(this).scrollTop();
	if(height3>1947 && height3<2596){
		$(".fade3").fadeIn(2500);
	}
	console.log(height3);
})
//百度气球 
$(window).scroll(function(){
	var height4 = $(this).scrollTop();
	if(height4>2596 && height4<3245){
		$(".fade4").fadeIn(2500);
	}
	console.log(height4);
})
//免费搭建
$(window).scroll(function(){
	var height5 = $(this).scrollTop();
	if(height5>3245 && height5<3894){
		$(".fade5").fadeIn(2500);
	}
	console.log(height5);
})
//最后一部分

$(window).scroll(function(){
	var height6 = $(this).scrollTop();
	if(height6>3294){
		$(".fade6").fadeIn(3500);
		$(".fade7").fadeIn(3500);
		console.log("000")
	}

})
})