"use strict";

$(document).ready(function(){
	
	
	$(".change-slide").on('click',function(){
		
		if ($(this).hasClass('change-slide--next')) {
			
			var thisSlideElement = $(".recipe-article--visible");
			var thisSlidePosition = +(thisSlideElement.attr('data-slide-position'));
			var nextSlidePosition;
			if (thisSlidePosition === 5) {nextSlidePosition = 1;} else {nextSlidePosition = thisSlidePosition + 1;}
			var nextSlideElement = $('.recipe-article--nmb'+ nextSlidePosition +'');
			
			thisSlideElement.fadeOut(400, function(){
				thisSlideElement.removeClass('recipe-article--visible').addClass('recipe-article--invisible');
			});
			nextSlideElement.delay(200).fadeIn(400, function(){
				nextSlideElement.removeClass('recipe-article--invisible').addClass('recipe-article--visible');
			});
//			thisSlideElement.next().removeClass('recipe-article--invisible').addClass('recipe-article--visible');
			
			$(".section-recipe").animate({
				backgroundPositionX: "+=2000"
			}, 400,function(){
				$(".section-recipe").css('background-image','url(img/recipe_slide'+ nextSlidePosition + '.png)');
			});
			
			
//			
			$(".section-recipe").animate({
				backgroundPositionX: "50%"
			}, 200);
			$('.slider-points__itm--' + thisSlidePosition).removeClass('slider-points__itm--active');
			$('.slider-points__itm--' + nextSlidePosition).addClass('slider-points__itm--active');
			
			
		}
	});
	
});