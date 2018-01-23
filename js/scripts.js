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
	
});