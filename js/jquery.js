(function($) {
$(function() {

	$('ul.tabs').on('click', 'li:not(.active)', function() {
		$(this).addClass('active ').siblings().removeClass('active')
			.closest('div.forall').find('div.tabtext').removeClass('active animated fadeIn').eq($(this).index()).addClass('active animated fadeIn');
	})

})
})(jQuery)