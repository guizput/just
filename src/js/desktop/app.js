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

		$('.speaker').addClass('on');

		$('.dates ul li').each(function(i){

			setTimeout(function(){

				$('.dates ul li').eq(i).addClass('on');

			}, 150 * (i+1));

		});
		
	}else if(id === '#music'){

		$('.headphones').addClass('on');
		$('.soundcloud iframe').addClass('on');

		setTimeout(function(){

			$('.soundcloud .cta').addClass('on');
			$('.wouldyou').addClass('on');

		}, 1500);
		
	}else if(id === '#video'){

		function showVideos(){

			$('.video-thumbnail').each(function(i){

				setTimeout(function(){

					$('.video-thumbnail').eq(i).addClass('on');

				}, 150 * (i+1));

			});

		}

		setTimeout(showVideos, 300);

		
		
	}

	var iframeElement   = document.querySelector('iframe');
	var widget1         = SC.Widget(iframeElement);

	widget1.bind(SC.Widget.Events.PLAY, function(){

		$('.wouldyou').removeClass('on');

		setTimeout(function(){
			$('.wouldyou').css({'text-indent': '0', 'animation': 'none', 'transform': 'scale(1.3)'}).html('Turn the<br>volume up!').addClass('on');
		}, 1000);

	});

	widget1.bind(SC.Widget.Events.PAUSE, function(){

		$('.wouldyou').removeClass('on');

		setTimeout(function(){
			$('.wouldyou').css({'text-indent': '-2.2rem', 'animation': 'pulse 2s linear infinite', 'transform': 'scale(1)'}).html('...Play me Again!').addClass('on');
		}, 1000);

	});

});

// Popup on click

var thumbnails = $('.video-thumbnail');

thumbnails.click(function(){

	var id = $(this).attr('id');

	$('#video').append('<div class="pop-up"><div class="close"><span></span></div><div class="video-player"><div class="spinner"></div><iframe width="100%" height="360" src="https://www.youtube.com/embed/'+id+'?rel=0" frameborder="0" allowfullscreen></iframe></div></div>');

	setTimeout(function(){
		$('section#video .pop-up').addClass('on');
	}, 100);

	$('.pop-up').click(function(){

		$(this).removeClass('on');
		setTimeout(function(){
			$('.pop-up').remove();
		}, 800);

	});

});


