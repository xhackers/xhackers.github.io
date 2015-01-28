$(document).ready(function(){
	var $doctht = $(window).height();
	var $doctwt = $(window).width();
	$("div.firstscreen").height($doctht);
	
	var len = $('.fs-text li').length;
	var i = 0;
	$(".fs-text li").hide();
	var mytimer = setInterval(function(){
		console.log(i + " " + len);
		$(".fs-text li:eq(" + i + ")").fadeIn();
		console.log(i + " - " + len);
		if(i<len){ i++;}
		else if(i==len) clearInterval(mytimer);
	}, 1000);
	
	
});