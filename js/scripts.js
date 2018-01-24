$(document).ready(function(){

	//вылетающее меню на мобильных
	$('.burger').click(function(){
		$('.sub-menu').toggleClass('sub-menu-visible');
		$('.burger').toggleClass('cross');
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
	
	$('.com-items').slick({
	  infinite: true,
	  autoplay: true,
	  speed: 1500,
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
	
});