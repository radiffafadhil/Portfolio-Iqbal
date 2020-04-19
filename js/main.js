$(function() {
	$(document).scroll(function() {
		var $nav = $('#navbarUtama');
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

var onePageClick = function() {
	$(document).on('click', '#navku a[href^="#"]', function(event) {
		event.preventDefault();

		var href = $.attr(this, 'href');

		$('html, body').animate(
			{
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			},
			500,
			function() {
				// window.location.hash = href;
			}
		);
	});
};

onePageClick();
