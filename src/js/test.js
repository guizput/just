var test = document.querySelectorAll('.test');

for(i=0; i < test.length; i++){
	test[i].addEventListener('click', function(e){
		e.preventDefault();
		alert('clicked');
	});
}