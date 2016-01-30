$(document).ready(function(){
		$('#text-desa').hide();
		$('#text-app').hide();
		$('#text-mant').hide();
	
	$('#desa-web').click(function(){
		$('#text-desa').slideToggle();
	})
	$('#app-web').click(function(){
		$('#text-app').slideToggle();
	})
	$('#mant-web').click(function(){
		$('#text-mant').slideToggle();
	})
})

$(document).ready(function() {
	$('#home1').click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	$('#servicios1').click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:700}, 'slow');
		return false;
	});
	$('#works1').click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:1200}, 'slow');
		return false;
	});
	$('#contact1').click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});