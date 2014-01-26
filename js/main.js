(function() {
	$(".related-content a").fancybox({
		type: 'iframe',
		maxWidth	: 800,
		maxHeight	: 800,
		fitToView	: false,
		width		: '70%',
		height		: '80%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$('#search')
        .textext({
            plugins : 'autocomplete'
        })
        .bind('getSuggestions', function(e, data) {
        var list = [
			'Verizon customer service',
			'Comcast bundles',
			'Chevy deal days',
			'Volkswagen sign and drive',
			'Coke Rewards',
			'Pepsi Cindy Crawford commercial',
			'McDonald&#39;s breakfast menu',
			'Apple store',
			'Cheerios commercial',
			'AT&T coverage area',
			'The Oscars Awards 2014',
			'Subway Jared',
			'Amazon.com promo codes',
			'Android phones',
			'History Channel shows',
			'Obamacare website',
			'Monster.com login',
			'Mastercard credit card offers',
			'Marlboro healthy cigarettes',
			'Louis Vuitton collections'
        ],
        textext = $(e.target).textext()[0],
        query = (data ? data.query : '') || '';

        $(this).trigger(
            'setSuggestions',
            { result : textext.itemManager().filter(list, query) }
        );
    });

	var content = $('#infinite-content').html(),
		$window = $(window);

	$window.scroll(function() {
		if($window.scrollTop() + $window.height() == $(document).height()) {
			$('#infinite-ads').append(content);
		}
	});

	$('.back').click(function(evt) {
		evt. preventDefault();

		history.go(-1);
	});

	$('#overlay-dunkin').click(function(evt) {
		evt. preventDefault();

		window.location.href = 'http://skipthisad.net/gif-2.html';
	});
})();