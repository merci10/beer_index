// jQuery

$(function(){
	$('.mini-btn').click(function() {
		var $brand = $(this).next();
		if ($(this).hasClass('open')) {
			$brand.slideUp();
			$(this).removeClass('open');
			$(this).text('銘柄を表示');
		} else {
			$brand.slideDown();
			$(this).addClass('open');
			$(this).text('銘柄を隠す');
		}
	});

	$('a[href^=#]').click(function(){
		var speed = 500;
		var href = $(this).attr('href');
		var target = $(href === '#' || href === '' ? 'html' : href);
		var position = target.offset().top;
		$('html, body').animate({scrollTop:position}, speed, "swing");
		return false;
	});
});