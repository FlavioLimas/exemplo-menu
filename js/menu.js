$(function(){
	$("#menu a").mouseover(function(){
		var menu = $(this).parent().children('.submenu');
		var submenu = $(this).parent().parent();

		if(menu.length > 0 && menu.is(':Hidden')){
			$("#menu a").removeClass('ativo');
			$(this).addClass('ativo');
			$('.submenu').slideUp();
			menu.slideDown();
		}
		if(!submenu.hasClass('submenu') && menu.length == 0){
			$("#menu a").removeClass('ativo');
			$(this).addClass('ativo');
			$('.submenu').slideUp();
		}
	});
});