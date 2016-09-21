// Scroll to section when click on menu

$('.menu-item').click(function(e){

	var id = $(this).attr('href'),
			section = $(id),
			listItems = $('.menu-item').parent();

	listItems.removeClass('active');
	$(this).parent().addClass('active');		

	$('html, body').animate( { scrollLeft: $(section).offset().left}, 750);

	e.preventDefault();

	if(id === '#dates'){

		$('.dates ul li').each(function(i){

			setTimeout(function(){

				$('.dates ul li').eq(i).addClass('on');

			}, 150 * (i+1));

		});
		
	}

});

