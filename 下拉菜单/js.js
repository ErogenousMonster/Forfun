$(function(){

	$('.firstMenu').children('li').mouseenter(function(){
		$(this).children('ul').slideDown('1000');
	})
	$('.secondMenu').children('li').mouseenter(function(){
		$(this).children('ul').slideDown('1000');
	})

	$('.firstMenu').children('li').mouseleave(function(){
		$(this).children('ul').slideUp('1000');
	})

	$('.secondMenu').children('li').mouseleave(function(){
		$(this).children('ul').slideUp('1000');
	})

})