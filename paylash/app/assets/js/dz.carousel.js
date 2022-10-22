/**
	Template Name 	 : Soziety
	Author			 : DexignZone
	Version			 : 1.0
	File Name		 : dz.carousel.js
	Author Portfolio : https://themeforest.net/user/dexignzone/portfolio
	
	Core script to handle the entire theme and core functions
	
**/

/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';
	
    // Get Started ==========
    if(jQuery('.get-started').length > 0){
		var swiperGetStarted = new Swiper('.get-started', {
			speed: 500,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 0,
			loop: false,
			navigation: {
				nextEl: '.swiper-btn-next',
				prevEl: '.swiper-btn-prev',
            },
			pagination: {
                el: ".swiper-pagination",
                clickable: true,
			},
		});
	}
    
    // Categorie Swiper ==========
	if(jQuery('.categorie-swiper').length > 0){
		var swiper4 = new Swiper('.categorie-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: "auto",
			spaceBetween: 15,
			loop:false,
		});
	}
	
	// Story Swiper ==========
    if(jQuery('.story-swiper').length > 0){
		var storySwiper = new Swiper('.story-swiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: false,
			autoplay:{
				delay: 5000,
			},
			pagination:{
				el: ".swiper-pagination",
			},
		});
	}
	
    // Reels Swiper ==========
	if(jQuery('.mySwiper').length > 0){
		var swiper = new Swiper(".mySwiper",{
			direction: "vertical",
			mousewheel: true,
		});
	}

});
/* Document .ready END */