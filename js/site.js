$(function(){
	// top slider

	var swiper1 = new Swiper('#topSlider', {
	    loop: true,
	    autoplay: false,
	    //autoplay: 4000,
	    speed: 600
	});

	// Gallery slider

	var $slider = $('.gallery-slider');
	var $slidePrev = $('.slidePrev');
	var $slideNext = $('.slideNext');

	var swiper2 = new Swiper('#gallerySlider', {
	    slidesPerView: 'auto',
	    centeredSlides: true,
	    loop: true
	});

	$slidePrev.on('click', function(){
		swiper2.slidePrev();
	});

	$slideNext.on('click', function(){
		swiper2.slideNext();
	});

	// Scroll animation for Gallery
	var centeredSlide = Math.floor(swiper2.slides.length/2) - 2;
	swiper2.slideTo(centeredSlide, 0);

	// Nav

	$('header').onePageNav({
		'scrollSpeed': 600
	});

	// header video LT

	$('#playVideo1').on('click', function(event){
		event.preventDefault();
		var videoSrc = 'https://www.youtube.com/embed/B3Dubc--Wik?rel=0&amp;showinfo=0&autoplay=1';

		$('.top-video').addClass('open');
		$('#video1').attr('src', videoSrc);
		swiper1.stopAutoplay();
	});

	$('#closeVideo1').on('click', function(event){
		event.preventDefault();

		$('.top-video').removeClass('open');
		$('#video1').attr('src', '');
		swiper1.startAutoplay();
	});

	// participate video LT

	$('#playVideo2').on('click', function(event){
		event.preventDefault();
		var videoSrc = 'https://www.youtube.com/embed/xsmSyoPv5_w?rel=0&amp;showinfo=0&autoplay=1';

		$('.fixed-video').addClass('open');
		$('#video2').attr('src', videoSrc);
	});

	$('#closeVideo2').on('click', function(event){
		event.preventDefault();

		$('.fixed-video').removeClass('open');
		$('#video2').attr('src', '');
	});
	
	// header video EN

	$('#playVideo3').on('click', function(event){
		event.preventDefault();
		var videoSrc = 'https://www.youtube.com/embed/9BFA7fRTzfI?rel=0&amp;showinfo=0&autoplay=1';

		$('.top-video').addClass('open');
		$('#video3').attr('src', videoSrc);
		swiper1.stopAutoplay();
	});

	$('#closeVideo3').on('click', function(event){
		event.preventDefault();

		$('.top-video').removeClass('open');
		$('#video3').attr('src', '');
		swiper1.startAutoplay();
	});

	// participate video EN

	$('#playVideo4').on('click', function(event){
		event.preventDefault();
		var videoSrc = 'https://www.youtube.com/embed/TsYDoxL0wc4?rel=0&amp;showinfo=0&autoplay=1';

		$('.fixed-video').addClass('open');
		$('#video4').attr('src', videoSrc);
	});

	$('#closeVideo4').on('click', function(event){
		event.preventDefault();

		$('.fixed-video').removeClass('open');
		$('#video4').attr('src', '');
	});
	

	// lightbox

	lightbox.option({
    'showImageNumberLabel': false,
    'wrapAround': true
  });

  // footer tabs

  $('.contacts-tab').on('click', function(){
  	var self = $(this);
  	var id = self.attr('id');

  	if(self.hasClass('active')) return;

  	$('.contacts-tab').removeClass('active');
  	$('.contacts-tab__content').removeClass('active');

  	$('#'+id).addClass('active');
  	$('div[data-tab="'+ id +'"]').addClass('active');
  });

  // Sign btn
  $('#signIn').on('click', function(event){
  	event.preventDefault();
  	window.open('http://www.herculestrophy.com/#&&PageNum=3&PageSet=Logon', '_blank');
  });


  // REGISTER
  $('#reg').on('click', function(event){
  	event.preventDefault();
  	var name = $("#name").val();
  	var surname = $("#surname").val();
  	var company = $("#company").val();
  	var email = $("#email").val();
  	var check = $("#check").is(':checked') ? 'Yes' : 'No';
  	var phone = $("#phone").val();
  	var form = 1;

  	if (name == '') 
  	{
  		$("#name").addClass("error");
  		form = 0;
  	}

  	if (surname == '') 
  	{
  		$("#surname").addClass("error");
  		form = 0;
  	}

  	if (phone == '') 
  	{
  		$("#phone").addClass("error");
  		form = 0;
  	}

  	if (company == '') 
  	{
  		$("#company").addClass("error");
  		form = 0;
  	}

  	if (email == '') 
  	{
  		$("#email").addClass("error");
  		form = 0;
  	}			

  	var reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i); 
  	if (!reg.test(email))
  	{
  		$("#email").addClass("error");
  		form = 0;
  	}

  	if (form == 1)
  	{
  		$.ajax({
  			type: "POST",
  			url: "mail.php",
  			data: {
  				name: name,
  				surname: surname,
  				phone: phone,
  				company: company,
  				email: email,
  				check: check,
  				form: form
  			},
  			success: function(data) {
  				console.log(data);
  				alert("Registration done");
  			}
  		});
  	}		
  });

  $("input").focus(function(){
  	$(this).removeClass("error");
  });


});