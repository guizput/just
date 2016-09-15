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

