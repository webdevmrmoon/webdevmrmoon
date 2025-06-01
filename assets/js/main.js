



document.querySelectorAll('.tab-slider--trigger').forEach(tab => {
  tab.addEventListener('click', function () {
      // Remove active class from all tabs
      document.querySelectorAll('.tab-slider--trigger').forEach(item => item.classList.remove('active'));
      this.classList.add('active');

      // Remove active class from all contents
      document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));

      // Show the corresponding content
      const rel = this.getAttribute('rel');
      document.getElementById(rel).classList.add('active');
  });
});




// Cursor script

$( document ).ready(function() {

	//attach div to cursor each time mouse moves
	$(document).mousemove(function(e){
	    $(".custom-cursor").css({left:e.pageX, top:e.pageY});
	});

	//attempt to attach div to cursor each time window scrolls
	$(document).on('scroll', function(e){
   		$(".custom-cursor").css({left:e.pageX, top:e.pageY});
	});


	//change cursor over projects
	$('.thumbnail').mouseenter(function() {
	    $('.custom-cursor').addClass('activeproject');
	});

	$('.thumbnail').mouseleave(function() {
	    $('.custom-cursor').removeClass('activeproject');
	});

	//change cursor over menu
	$('body a').mouseenter(function() {
	    $('.custom-cursor').addClass('activemenu');
	});

	$('body a').mouseleave(function() {
	    $('.custom-cursor').removeClass('activemenu');
	});
	
    //change cursor over menu
	$('body p, body h1, body h2, body h3, body h4, body h5, body h6, body span, body li').mouseenter(function() {
	    $('.custom-cursor').addClass('activemenu');
	});

	$('body p, body h1, body h2, body h3, body h4, body h5, body h6, body span, body li').mouseleave(function() {
	    $('.custom-cursor').removeClass('activemenu');
	});

});


$(window).on('load', function() {
  $('#ctn-preloader').addClass('loaded');
  // Enable scrolling once the preloader is loaded
  $('body').removeClass('no-scroll-y');

  if ($('#ctn-preloader').hasClass('loaded')) {
      // Remove the preloader section after a delay
      $('#preloader').delay(1000).queue(function() {
          $(this).remove();
      });
  }
});



$(document).ready(function () {
  var lastScrollTop = 0;

  function handleScroll() {
      if ($(window).width() >= 768) { // Check if the viewport width is >= 768px
          var st = $(window).scrollTop(); // Get the scroll position of the window
          
          if (st > lastScrollTop && st >= 100) {
              // downscroll code
              $('.headerSection').addClass('scroll-down').removeClass('scroll-up');
          } else if (st < lastScrollTop) {
              // upscroll code
              $('.headerSection').addClass('scroll-up').removeClass('scroll-down');
          }

          if (st <= 1) {
              // Reset classes when at the top of the page
              $('.headerSection').removeClass('scroll-down scroll-up');
          }

          lastScrollTop = st; // Update last scroll position
      } else {
          // For screens smaller than 768px, reset classes
          $('.headerSection').removeClass('scroll-down scroll-up');
      }
  }

  // Call the handleScroll function on scroll
  $(window).scroll(handleScroll);

  // Reapply logic when resizing window
  $(window).resize(function () {
      if ($(window).width() < 768) {
          // Reset classes when the viewport is smaller than 768px
          $('.headerSection').removeClass('scroll-down scroll-up');
      }
  });
});



// Scroll Top Button
document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.querySelector(".scrollToTop");
  const rootElement = document.documentElement;
  const bodyElement = document.body;
  const progressBar = document.getElementById("progress-bar");
  const pathLength = document
    .querySelector("#progress-bar > svg > path")
    .getTotalLength();

  scrollToTopBtn.addEventListener("click", () => {
    rootElement.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("scroll", () => {
    const scrollAmount = pathLength / 100;
    const scrollPosition = Math.round(
      ((rootElement.scrollTop || bodyElement.scrollTop) /
        ((rootElement.scrollHeight || bodyElement.scrollHeight) -
          innerHeight)) *
        100 *
        scrollAmount
    );

    if (scrollPosition > 5) {
      scrollToTopBtn.classList.add("showBtn");
      progressBar.style.setProperty("--scrollAmount", scrollPosition + "px");
    } else {
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
});


// menu Button
document.querySelectorAll(".hamburger").forEach((element) => {
  element.addEventListener("click", (event) => {
    element.classList.toggle("is-active");
  });
});

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(".navSection").animate({
      width: "toggle"
    });
  });
});


// go to top with side bar nav
$(function(){
  $(window).scroll(function() {
  
  
  }).scroll();
  $('.navibtn').click(function() {
      var target = $(this).data('target'); // Get the target section ID from data attribute
      $('html, body').animate({
        scrollTop: $(target).offset().top - 50 // Scroll to the top of the target section with an offset of 100px
      }, 1000); // Adjust the duration of the animation as needed
    });
  
  })
  

//   $(document).ready(function() {
//     $(window).on('scroll', function() {
//         var windscroll = $(window).scrollTop();
//         if (windscroll >= 100) {
//             $('.sectionTop').each(function() {
//                 var sectionID = $(this).attr('id');
//                 if ($(this).position().top <= windscroll + 140) {
//                     $('.navWrapper ul li a.active').removeClass('active');
//                     $('.navWrapper ul li a[href="#' + sectionID + '"]').addClass('active');
//                 }
//             });
//         } else {
//             $('.navWrapper ul li a.active').removeClass('active');
//             $('.navWrapper ul li a:first').addClass('active');
//         }
//     });

// });


$(function(){
  $('.technoSlider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

})