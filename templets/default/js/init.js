/* 代码整理：懒人之家 www.lanrenzhijia.com */
$(function(){
	
	$('.slider').mobilyslider({
		content: '.sliderContent',
		children: 'div',
		transition: 'horizontal',
		animationSpeed: 150,
		autoplay: false,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		bullets: true,
		arrows: true,
		arrowsHide: true,
		prev01: 'prev',
		next01: 'next',
		animationStart: function(){},
		animationComplete: function(){}
	});
	
});
/* 代码整理：懒人之家 www.lanrenzhijia.com */