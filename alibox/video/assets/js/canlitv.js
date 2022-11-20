$(function(){
	var $window = $(window);
	
	if ($window.width() > 1023) {
		$("#nav li").hover(function(){
			$("#nav li span").stop(true, true).fadeOut("fast");
			$(this).find("span").stop(true, true).fadeIn("normal");
		}, function(){
			$("#nav li span").stop(true, true).hide();
		});
		
	}
	
	$(".nav-icon").click(function () {
		
		if ($(this).hasClass("nav-icon-close")) {
		$(this).removeClass('nav-icon-close');
		} else { 
		$(this).addClass('nav-icon-close');
		}
		$(".navigation").stop(true , true).slideToggle();
		return false;
	});
	
	$(".top-search-icon").click(function () {
		if ($(this).hasClass("top-search-close")) {
		$(this).removeClass('top-search-close');
		} else { 
		$(this).addClass('top-search-close');
		}
		$(".top-search-out").stop(true , true).slideToggle();
		return false;
	});
	
	$(".top-avatar span").click(function () {
		$(".top-menu").stop(true , true).slideToggle();
		return false;
	});

});

$(document).ready(function() {
	
	$('.fancybox').fancybox();
	
	$("input[type=checkbox],input[type=radio]").iCheck({
		checkboxClass: 'icheckbox_minimal-pink',
		radioClass: 'iradio_minimal-pink',
	});
	
});

$(document).ready(function(){
	
	$('.main-slider').slick({
		dots:true,
		centerMode:true,
		pauseOnHover:true,
		autoplaySpeed:3000,
		autoplay:false,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false
			}
		}
		]
	});
	
	$('.slider-pro').slick({
		dots:true,
		pauseOnHover:true,
		autoplaySpeed:3000,
		autoplay:true,
		responsive: [
		{
			breakpoint: 479,
			settings: {
				arrows: false
			}
		}
		]
	});
	
});

$(document).ready(function(){
	$('div#nav ul li.nav-multi > a').click(function(event){
		
		if ($(window).width() < 1023) {
			event.preventDefault();
			
			$(this).parent().parent().children('li').children('span').not($(this).parent().children("span")).slideUp();
			$(this).parent().children('span').stop(true , true).slideToggle();
			return false;
		}
	})
});

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});