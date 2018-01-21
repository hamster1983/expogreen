$(document).ready(function(){

	//вылетающее меню на мобильных
	$('.burger').click(function(){
		$('.sub-menu').toggleClass('sub-menu-visible');
		$('.burger').toggleClass('cross');
	});
});