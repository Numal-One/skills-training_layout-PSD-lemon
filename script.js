"use strict";

$(document).ready(function(){
	
	$('.get-recipe-btn').on('click', function(){
		let target = $('.section-recipe-detailed');
		$('.section-recipe-detailed').fadeToggle();
	});
	
	$(".change-slide").on('click',function(){
			
			var thisSlideElement = $(".recipe-article--visible");
			var thisSlidePosition = +(thisSlideElement.attr('data-slide-position'));
			var nextSlidePosition;
			if (thisSlidePosition === 5) {nextSlidePosition = 1;} else {nextSlidePosition = thisSlidePosition + 1;}
			var nextSlideElement = $('.recipe-article--nmb'+ nextSlidePosition +'');
			var prevSlidePosition;
			if (thisSlidePosition === 1) { prevSlidePosition = 5;} else {prevSlidePosition = thisSlidePosition - 1;}
			var prevSlideElement = $('.recipe-article--nmb'+ prevSlidePosition +'');
		
			thisSlideElement.fadeOut(400, function(){
				thisSlideElement.removeClass('recipe-article--visible').addClass('recipe-article--invisible');
			});
		
			if ($(this).hasClass('change-slide--next')) {
					nextSlideElement.delay(200).fadeIn(400, function(){
						nextSlideElement.removeClass('recipe-article--invisible').addClass('recipe-article--visible');
					});
				
					$(".section-recipe").animate({
						backgroundPositionX: "+=2000"
						}, 400,function(){
						$(".section-recipe").css('background-image','url(img/recipe_slide'+ nextSlidePosition + '.png)');
					});
					$(".section-recipe").animate({
						backgroundPositionX: "50%"
						}, 200);
					$('.slider-points__itm--' + thisSlidePosition).removeClass('slider-points__itm--active');
					$('.slider-points__itm--' + nextSlidePosition).addClass('slider-points__itm--active');
				} else if ($(this).hasClass('change-slide--prev')) {
					prevSlideElement.delay(200).fadeIn(400, function(){
						prevSlideElement.removeClass('recipe-article--invisible').addClass('recipe-article--visible');
					});
				
					$(".section-recipe").animate({
						backgroundPositionX: "-=2000"
						}, 400,function(){
						$(".section-recipe").css('background-image','url(img/recipe_slide'+ prevSlidePosition + '.png)');
					});
					$(".section-recipe").animate({
						backgroundPositionX: "50%"
						}, 200);
					$('.slider-points__itm--' + thisSlidePosition).removeClass('slider-points__itm--active');
					$('.slider-points__itm--' + prevSlidePosition).addClass('slider-points__itm--active');
				}

			
			
			
			
//			
			
			
			
		
	});
	
});