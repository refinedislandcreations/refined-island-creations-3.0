$(document).ready(function() {
    $('.hamburger-wrapper').click(function() {
        $('.mobile-menu').fadeToggle(500);
        $('.hamburger-menu').toggleClass('active');
    });
});




console.log (document.querySelector('.dd'))
$('.accordion .dd').hide();

	$('.accordion .dt a').click(function() {
		// allPanels.slideUp();

        
   // $(this).filter('.open').removeClass('open').addClass('closing')
   // $('.accordion > .dt > a').removeClass('open');
 // $(this).not(".closing").addClass('open').parent().next().slideDown();
   // $('.accordion > .dt > a').removeClass('closing');
    
   $(this).toggleClass('open') 
   $(this).parent().next().slideToggle() 

   return false; 
	});






// AOS

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




// lightgallery

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    getCaptionFromTitleOrAlt: false,
     download: false    
});

lightGallery(document.getElementById('lg-1'), {
  speed: 500,
  getCaptionFromTitleOrAlt: false,
   download: false    
});

lightGallery(document.getElementById('lg-2'), {
  speed: 500,
  getCaptionFromTitleOrAlt: false,
   download: false    
});

lightGallery(document.getElementById('lg-3'), {
  speed: 500,
  getCaptionFromTitleOrAlt: false,
   download: false    
});


//type

if (document.querySelector('#typed-location-1')) {


var typed = new Typed('#typed-location-1', {
  stringsElement: '#typed-strings-1',
  typeSpeed: 100,
  backSpeed: 50,
  smartBackspace: true,
});

}


if (document.querySelector('#typed-location-2')) {


  var typed = new Typed('#typed-location-2', {
    stringsElement: '#typed-strings-2',
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: true,
  });
  
  }