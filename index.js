$(document).ready(function(){
	$('header').on('click', function(){
		$('header').remove();
	})
	$('.jumbotron').on('click', function(){
		$('.jumbotron').slideUp();
	})
	$('.row1').on('click', function() {
		$('#row1img1').fadeOut('slow');
	})
	
})