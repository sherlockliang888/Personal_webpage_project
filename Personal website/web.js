$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20)
			$(".navbar").addClass("out");
		else
			$(".navbar").removeClass("out");
	});


	$('.menu-toggler').click(function(){
		$(this).toggleClass("activate");
		$(".navbar-menu").toggleClass("activate");
	});
});



