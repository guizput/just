// Intro

var vid = document.getElementById("intro-video"),
		skip = $('#skip');

vid.onloadeddata = function() {
  setTimeout(function(){
		skip.addClass('on');
	},8000);
};

var sections = $('section').not('#intro'),
		introSection = $('#intro');

// Hide sections when page loads
sections.css('width', 0);

function hideIntro(){

	$('#intro-video').animate({volume: 0}, 2000).addClass('out');
	sections.css('width', '100%');
	$('#intro').addClass('out');
	$('.overlay').addClass('on');

	setTimeout(function(){
		introSection.remove();
	},2000);

}

// Hide intro at the end of video
vid.addEventListener('ended',hideIntro,false);

// Hide intro on click
skip.click(function(e){

	hideIntro();
	e.preventDefault();

});

// Scroll to section when click on menu

$('.menu-item').click(function(e){

	var id = $(this).attr('data-id'),
			section = $(id),
			listItems = $('.menu-item').parent(),
			speaker = $('.speaker'),
			contact = $('#contact'),
			phone = $('.phone'),
			dates = $('.dates ul li'),
			square = $('.square'),
			icons = $('.icon');

	listItems.removeClass('active');
	$(this).parent().addClass('active');		

	$('html, body').animate( { scrollLeft: $(section).offset().left}, 750);

	e.preventDefault();

	if(id === '#music'){

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

	}else if(id === '#dates'){

		speaker.addClass('on');
		phone.removeClass('on');
		square.removeClass('on');
		icons.removeClass('on');

		dates.each(function(i){

			setTimeout(function(){

				dates.eq(i).addClass('on');

			}, 150 * (i+1));

		});

		setTimeout(function(){

			contact.css('z-index', '10');
			
		},1500);
		
	}else if(id === '#contact'){

		contact.css('z-index', '20');

		// Hide dates content
		speaker.removeClass('on');
		phone.addClass('on');

		dates.each(function(i){

			setTimeout(function(){

				dates.eq(i).removeClass('on');

			}, 150 * (i+1));

		});

		// Show contact content
		setTimeout(function(){
			square.addClass('on');
			icons.addClass('on');
		},1500);

	}

});

$('#logo').click(function(){

	location.reload();

});

// Souncloud handlers

var iframeElement   = document.querySelector('iframe'),
		widget1         = SC.Widget(iframeElement),
		isLoaded				= false;

function showSoundCloud(){

	if($('section.active').attr('id') === 'music'){

		$('.headphones').addClass('on');
		$('.soundcloud iframe').addClass('on');

		setTimeout(function(){

			$('.soundcloud .cta').addClass('on');
			$('.wouldyou').addClass('on');

		}, 1500);

	}

}

function soundCloudLoaded(){

	isLoaded = true;
	showSoundCloud();

}		

widget1.bind(SC.Widget.Events.PLAY, function(){

	$('.wouldyou').removeClass('on');

	setTimeout(function(){
		$('.wouldyou').html('Turn the<br>volume up!').addClass('on vert');
	}, 300);

});

widget1.bind(SC.Widget.Events.PAUSE, function(){

	$('.wouldyou').removeClass('on');

	setTimeout(function(){
		$('.wouldyou').html('Play me Again!').addClass('on').removeClass('vert');
	}, 300);

});

// Popup on click

var thumbnails = $('.video-thumbnail');

thumbnails.click(function(){

	var id = $(this).attr('id'),
			menu = $('#menu');

	$('#video').append('<div class="pop-up"><div class="close"><span></span></div><div class="video-player"><div class="spinner"></div><iframe width="100%" height="360" src="https://www.youtube.com/embed/'+id+'?rel=0" frameborder="0" allowfullscreen></iframe></div></div>');

	setTimeout(function(){
		$('section#video .pop-up').addClass('on');
		menu.addClass('out');
	}, 100);

	$('.pop-up').click(function(){

		$(this).removeClass('on');
		menu.removeClass('out');
		setTimeout(function(){
			$('.pop-up').remove();
		}, 800);

	});

});

