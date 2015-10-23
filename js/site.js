$(function(){
	// Gallery slider
	var swiper2 = new Swiper('#gallery', {
	    slidesPerView: 'auto',
	    resistanceRatio: 0
	});

	// Gallery slider arrows
	var $slider = $('.gallery-slider');
	var $slidePrev = $('.slidePrev');
	var $slideNext = $('.slideNext');

	$slidePrev.on('click', function(){
		swiper2.slidePrev();
		checkBeginEndSlider();
	});

	$slideNext.on('click', function(){
		swiper2.slideNext();
		checkBeginEndSlider();
	});

	function checkBeginEndSlider() {
		if(swiper2.isBeginning) {
			$slidePrev.addClass('hide');
			$slider.addClass('hide-before');
		}
		else {
			$slidePrev.removeClass('hide');
			$slider.removeClass('hide-before');
		}

		if(swiper2.isEnd) {
			$slideNext.addClass('hide');
			$slider.addClass('hide-after');
		}
		else {
			$slideNext.removeClass('hide');
			$slider.removeClass('hide-after');
		}
	}

	if(swiper2.isBeginning) console.log('isBeginning');


	// Scroll animation for Gallery
	var anim = true;

	$(window).scroll(function(){
		var galleryTop = $("#gallery").offset().top;
		

	  if($(window).scrollTop() + $(window).height() > galleryTop && anim)
	  {
			var centeredSlide = Math.floor(swiper2.slides.length/2) - 2;
			setTimeout(function(){
				swiper2.slideTo(centeredSlide, 1000);
			}, 100);
			anim = false;
	  }
	});

	// Gallery item hover effect
	$(' #gallery .swiper-slide a').each( function() { $(this).hoverdir(); } );
});