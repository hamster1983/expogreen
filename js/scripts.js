$(document).ready(function(){

	new WOW().init();

	//вылетающее меню на мобильных
	$('.burger').click(function(){
		$('.sub-menu').toggleClass('sub-menu-visible');
		$('.burger').toggleClass('cross');
	});
	
	//скролл из меню к элементам
	function scrollToDiv(elem){
		$('body,html').animate({
			scrollTop: elem.offset().top
		}, 1000);
	}
	
	$('.menu a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped);
		return false;
	});
	
	$('.sub-menu a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped);
		$('.sub-menu').toggleClass('sub-menu-visible');
		$('.burger').toggleClass('cross');
		return false;
	});
	
	//стилизуем картинки в тематических разделах
	$('.theme-item').hover(
		function(){
			var dataTitle = $(this).attr('data-title');
			$('.pics img').each(function(){
				if($(this).attr('name') == dataTitle) {
					$(this).css('opacity', 0.4);
				}
			});
		},function(){
			$('.pics img').css('opacity', 1);
	});
	
	//кнопка "наверх"
	$('.up').click(function(){
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
	
	//слайдер отзывов
	$('.com-items').slick({
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  speed: 2000,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 680,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
	//слайдер партнеров
	$('.part-items').slick({
	  infinite: true,
	  autoplay: true,
	  speed: 1500,
	  slidesToShow: 7,
	  slidesToScroll: 2,
	  rtl: true,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 5,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 4,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
		  }
		}
	  ] 
	});
	
});