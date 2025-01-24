$(function(){
  const body = document.body,
      jsScroll = document.getElementsByClassName('wrapper')[0],
      height = jsScroll.getBoundingClientRect().height - 1,
      speed = 0.05

var offset = 0

body.style.height = Math.floor(height) + "px"

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed
    
    var scroll = "translateY(-" + offset + "px) translateZ(0)"
    jsScroll.style.transform = scroll
    
    raf = requestAnimationFrame(smoothScroll)
}
smoothScroll()

})



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
      if ($(window).width() >= 768) { // Check if the viewport width is greater than or equal to 768px
          var st = $(this).scrollTop();
          if (st > lastScrollTop && st >= 100) {
              // downscroll code
              $('.headerBanner').addClass('scroll-down').removeClass('scroll-up');
          } else {
              // upscroll code
              $('.headerBanner').addClass('scroll-up').removeClass('scroll-down');
          }

          if (Math.abs($('.headerBanner').offset().top) <= 1) {
              $('.headerBanner').removeClass('scroll-down scroll-up');
          }

          lastScrollTop = st;
      } else {
          // Remove sticky behavior and classes in responsive view
          $('.headerBanner').removeClass('scroll-down scroll-up');
      }
  }

  $(window).scroll(handleScroll);

  // Reapply logic when resizing window
  $(window).resize(function () {
      if ($(window).width() < 768) {
          $('.headerBanner').removeClass('scroll-down scroll-up');
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