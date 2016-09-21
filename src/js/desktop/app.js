// Scroll to section when click on menu

$('.menu-item').click(function(e){

	var id = $(this).attr('href'),
			section = $(id),
			listItems = $('.menu-item').parent();

	listItems.removeClass('active');
	$(this).parent().addClass('active');		

	$('html, body').animate( { scrollLeft: $(section).offset().left}, 750);

	e.preventDefault();

});

