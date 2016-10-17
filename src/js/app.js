// Navigation Toggle

var nav = document.querySelector('#menu'),
		navToggle = document.querySelectorAll('.nav-toggle'),
		menuElement = document.querySelectorAll('#menu ul li');

function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

function activeToggle (){

	if(hasClass(nav, 'active')){

		nav.className = '';
		navToggle[0].className = 'nav-toggle';

	}else{

		nav.className = 'active';
		navToggle[0].className = 'nav-toggle open';

	}

}


navToggle[0].addEventListener('click', function(e){

	activeToggle();

});

for(i=0; i < menuElement.length; i++){

	menuElement[i].addEventListener('click', function(e){

		activeToggle();

	});

}

// Scroll to section when click on menu

$('.menu-item').click(function(){

	var id = $(this).attr('href'),
			section = $(id);

	if($('.tablet').length > 0){

		$('html, body').animate( { scrollTop: $(section).offset().top - 100}, 750);

	}else{	

		$('html, body').animate( { scrollTop: $(section).offset().top - 50}, 750);

	}	
	
	$('#menu').toggleClass('active');
	$('.nav-toggle').toggleClass('open');

	return false;

});


// Video Slider

var leftArrow = $('#left-arrow'),
		rightArrow = $('#right-arrow'),
		thumbnails = $('.video-thumbnail'),
		thumbHeight = thumbnails[0].clientHeight;

$('#video-slider').height(thumbHeight);


leftArrow.click(function(){

	var prev = $('.video-thumbnail.active').prev();

	if(prev.length > 0){
		prev.addClass('active');
		var active = $('.video-thumbnail.active')[1].id;
		$('#'+active).removeClass('active');
	}

	if($('.video-thumbnail').first().hasClass('active')){

		leftArrow.removeClass('on');
		rightArrow.addClass('on');

	}else{

		leftArrow.addClass('on');
		rightArrow.addClass('on');

	}

});

rightArrow.click(function(){

	var next = $('.video-thumbnail.active').next();

	if(next.length > 0){
		$('.video-thumbnail.active').next().addClass('active');
		var active = $('.video-thumbnail.active')[0].id;
		$('#'+active).removeClass('active');
	}

	if($('.video-thumbnail').last().hasClass('active')){

		rightArrow.removeClass('on');
		leftArrow.addClass('on');

	}else{

		rightArrow.addClass('on');
		leftArrow.addClass('on');

	}

});

// Popup on click

thumbnails.click(function(){

	var id = $(this).attr('id');

	$('#video-slider').append('<div class="pop-up"><div class="close"><span></span></div><div class="video-player"><div class="spinner"></div><iframe width="100%" height="360" src="https://www.youtube.com/embed/'+id+'?rel=0" frameborder="0" allowfullscreen></iframe></div></div>');

	$('.close').click(function(){

		$('.pop-up').remove();

	});

});

// Showing stuff when scrolling

function appearing(){

	var wScroll = $(window).scrollTop(),
			musicians = $('.musicians');

	if (wScroll > (musicians.offset().top - 300) && $('.trio.on').length < 3){

		setTimeout(function(){

			if($('.soundcloud iframe').length === 0){

				$('.soundcloud').append('<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/31996585&amp;amp;color=ff5500&amp;amp;auto_play=false&amp;amp;hide_related=false&amp;amp;show_comments=true&amp;amp;show_user=true&amp;amp;show_reposts=false"></iframe>');

			}

		}, 500);

	}
	
}

document.addEventListener('touchmove', appearing);
document.addEventListener('scroll', appearing);


// Interacting with SoundCloud player

var iframeElement   = document.querySelector('iframe'),
		widget1         = SC.Widget(iframeElement);

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

