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

});

rightArrow.click(function(){

	var next = $('.video-thumbnail.active').next();

	if(next.length > 0){
		$('.video-thumbnail.active').next().addClass('active');
		var active = $('.video-thumbnail.active')[0].id;
		$('#'+active).removeClass('active');
	}

});

// Popup on click

thumbnails.click(function(){

	var id = $(this).attr('id');

	$('#video-slider').append('<div class="pop-up"><div class="close"><span></span></div><div class="video-player"> <iframe width="100%" height="360" src="https://www.youtube.com/embed/'+id+'?rel=0" frameborder="0" allowfullscreen></iframe></div></div>');

	$('.close').click(function(){

		$('.pop-up').remove();

	});

});



//<div class="pop-up"><div class="close"><span></span></div><div class="video-player"> <iframe width="100%" height="360" src="https://www.youtube.com/embed/SFmha1nJKhY?rel=0" frameborder="0" allowfullscreen></iframe></div></div>

