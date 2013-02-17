jQuery -> 
	
	console.log('woohoo');

	$('.photoExander .photoFrame').hover(
		->
			$(this).addClass('lrg')
		->
			$(this).removeClass('lrg')
	);
