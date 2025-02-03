"use client"
import React from 'react';
import { useEffect } from "react";
import { Lenis } from "@studio-freight/lenis";
import $ from 'jquery';
export default function Home() {
  useEffect(() => {

    $(document).ready(function () {
      $('.tab-slider--trigger').on('click', function () {
        $('.tab-slider--trigger').removeClass('active');
        $(this).addClass('active');
        $('.content').removeClass('active');
        const rel = $(this).attr('rel');
        $('#' + rel).addClass('active');
      });
    });


    $(document).ready(function () {

      //attach div to cursor each time mouse moves
      $(document).mousemove(function (e) {
        $(".custom-cursor").css({ left: e.pageX, top: e.pageY });
      });

      //attempt to attach div to cursor each time window scrolls
      $(document).on('scroll', function (e) {
        $(".custom-cursor").css({ left: e.pageX, top: e.pageY });
      });


      //change cursor over projects
      $('.thumbnail').mouseenter(function () {
        $('.custom-cursor').addClass('activeproject');
      });

      $('.thumbnail').mouseleave(function () {
        $('.custom-cursor').removeClass('activeproject');
      });

      //change cursor over menu
      $('body a').mouseenter(function () {
        $('.custom-cursor').addClass('activemenu');
      });

      $('body a').mouseleave(function () {
        $('.custom-cursor').removeClass('activemenu');
      });

      //change cursor over menu
      $('body p, body h1, body h2, body h3, body h4, body h5, body h6, body span, body li').mouseenter(function () {
        $('.custom-cursor').addClass('activemenu');
      });

      $('body p, body h1, body h2, body h3, body h4, body h5, body h6, body span, body li').mouseleave(function () {
        $('.custom-cursor').removeClass('activemenu');
      });

    });

    $(window).on('load', function () {
      $('#ctn-preloader').addClass('loaded');
      // Enable scrolling once the preloader is loaded
      $('body').removeClass('no-scroll-y');

      if ($('#ctn-preloader').hasClass('loaded')) {
        // Remove the preloader section after a delay
        $('#preloader').delay(1000).queue(function () {
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

    $(document).ready(function () {
      const $scrollToTopBtn = $(".scrollToTop");
      const $rootElement = $(document.documentElement);
      const $bodyElement = $(document.body);
      const $progressBar = $("#progress-bar");
      const pathLength = $("#progress-bar > svg > path")[0].getTotalLength();

      $scrollToTopBtn.on("click", function () {
        $rootElement.animate({ scrollTop: 0 }, "smooth");
      });

      $(document).on("scroll", function () {
        const scrollAmount = pathLength / 100;
        const scrollPosition = Math.round(
          (($rootElement.scrollTop() || $bodyElement.scrollTop()) /
            (($rootElement[0].scrollHeight || $bodyElement[0].scrollHeight) -
              $(window).height())) *
          100 *
          scrollAmount
        );

        if (scrollPosition > 5) {
          $scrollToTopBtn.addClass("showBtn");
          $progressBar.css("--scrollAmount", scrollPosition + "px");
        } else {
          $scrollToTopBtn.removeClass("showBtn");
        }
      });
    });

    $(".hamburger").each(function () {
      $(this).on("click", function () {
        $(this).toggleClass("is-active");
      });
    });

    $(document).ready(function () {
      $(".hamburger").click(function () {
        $(".navSection").animate({
          width: "toggle"
        });
      });
    });

    $(function () {
      $(window).scroll(function () {


      }).scroll();
      $('.navibtn').click(function () {
        var target = $(this).data('target'); // Get the target section ID from data attribute
        $('html, body').animate({
          scrollTop: $(target).offset().top - 50 // Scroll to the top of the target section with an offset of 100px
        }, 1000); // Adjust the duration of the animation as needed
      });

    })

    $(document).ready(function () {
      $(window).on('scroll', function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
          $('.sectionTop').each(function () {
            var sectionID = $(this).attr('id');
            if ($(this).position().top <= windscroll + 140) {
              $('.navWrapper ul li a.active').removeClass('active');
              $('.navWrapper ul li a[href="#' + sectionID + '"]').addClass('active');
            }
          });
        } else {
          $('.navWrapper ul li a.active').removeClass('active');
          $('.navWrapper ul li a:first').addClass('active');
        }
      });

    });

    

  }, []);


  return (

    <div>
      <>
      
      </>

      {/* <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
          <div className="animation-preloader">
            <div className="spinner" />
            <div className="txt-loading">
              <span data-text-preloader="L" className="letters-loading">
                L
              </span>
              <span data-text-preloader="O" className="letters-loading">
                O
              </span>
              <span data-text-preloader="A" className="letters-loading">
                A
              </span>
              <span data-text-preloader="D" className="letters-loading">
                D
              </span>
              <span data-text-preloader="I" className="letters-loading">
                I
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
              <span data-text-preloader="G" className="letters-loading">
                G
              </span>
            </div>
          </div>
          <div className="loader-section section-left" />
          <div className="loader-section section-right" />
        </div>
      </div> */}
      <div className="box">
        <div className="custom-cursor"><div className="ball" /></div>
      </div>
      <section className="wrapper">
        {/* :: Header :: */}
        <div className="headerBanner">
          <header className="headerSection">
            <div className="site-width">
              <div className="mainHeader">
                <div className="logoSection">
                  <a href="/webdevmrmoon" alt="Webdev Mrmoon" title="Webdev Mrmoon"><img src="assets/img/logo.svg" alt="img" /></a>
                </div>
                <div className="navSection">
                  <div className="navWrapper">
                    <ul>
                      <li><a className="navibtn" data-target="#Portfolio" href="#Portfolio">Portfolio</a></li>
                      <li><a className="navibtn" data-target="#Services" href="#Services">Services</a></li>
                      <li><a className="navibtn" data-target="#About" href="#About">About</a></li>
                      <li><a className="navibtn" data-target="#Contact" href="#Contact">Contact</a></li>
                    </ul>
                  </div>
                  <div className="headerBtns">
                    <ul>
                      <li>
                        <div className="heademail">
                          <a href="mailto:webdevmrmoon@gmail.com"><img src="assets/img/icons/email.svg" alt="ico" width={24} /> Let’s work together!</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hamburger is-md">
                  <span className="hamburger-line" />
                  <span className="hamburger-line" />
                  <span className="hamburger-line" />
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* :: Banner :: */}
        <section className="bannerSection">
          {/* <canvas id="nokey" width="100%" height="100%"></canvas> */}
          <div className="video-wrapper">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="assets/img/banner-video2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="site-width">
            <div className="bannerWrapper">
              <div className="bannerSlider">
                <div className="bannerContent">
                  <div className="bnrText">
                    <h1>Web Dev Mr Moon</h1>
                    <h2>Crafting Stunning Designs, Websites, and Brands That Shine</h2>
                    <p>
                      I take your business to new heights with cutting-edge design, web development, and branding solutions.
                    </p>
                    <a href="javascript:void(0)" data-target="#About" className="navibtn bannerBtn">About Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="myRecentWorks pt-50 pb-50 sectionTop" id="Portfolio">
          <div className="site-width" style={{ "position": "relative", "z-index": "2" }}>
            <div className="titleSection">
              <h2>
                Our Recent Projects
              </h2>
              <p>
                We transform your ideas and thus your wishes into a unique web project that inspires you and your customers.
              </p>
            </div>
            <div className="portfolio">
              <div className="tab-slider--nav">
                <ul className="tab-slider--tabs tabs">
                  <li className="tab-slider--trigger active" rel="WebDev">Web Development</li>
                  <li className="tab-slider--trigger " rel="UI_UX">UI/UX</li>
                  <li className="tab-slider--trigger" rel="Logo">Logo Design</li>
                  <li className="tab-slider--trigger" rel="Branding">Branding</li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="content active" id="WebDev">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/1.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Globe Optimizers
                            </h3>
                            <p>
                              Globe Optimizers is an SEO website with a responsive frontend (HTML, CSS, JS) and Laravel backend. It offers SEO tools, analytics, and user-friendly dashboards to boost online visibility and organic traffic, ensuring scalability and security for businesses.
                            </p>
                          </div>
                          <div className="portCTA">
                            <a href="https://globeoptimizers.com/" target="_blank"><i className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/physiosense.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Physiosense
                            </h3>
                            <p>
                              Physiosense is a Physio Care website designed and developed with HTML, CSS, and JavaScript for the frontend. I contributed to creating a responsive, user-friendly interface, while the backend was powered by Laravel for seamless functionality.
                            </p>
                          </div>
                          <div className="portCTA">
                            <a href="https://www.physiosense.co.in/" target="_blank"><i className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/amit-celebration.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Amit Celebration
                            </h3>
                            <p>
                              Amit Celebration is a static website developed using HTML, CSS, and JavaScript during my tenure at my previous company. It showcases event decoration services (birthdays, baby welcomes, anniversaries) and generates inquiries, featuring a custom-designed logo.
                            </p>
                          </div>
                          {/* <div class="portCTA">
                                          <a href="https://www.physiosense.co.in/" target="_blank"><i class="fa-solid fa-arrow-right"></i></a>
                                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/sns-enterprises.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              SNS Enterprises
                            </h3>
                            <p>
                              SNS Enterprises is a static website developed using HTML, CSS, and JavaScript, with banners and illustrations created using Adobe Suites. It showcases the company’s large-scale printing services, highlighting their expertise and capabilities.
                            </p>
                          </div>
                          <div className="portCTA">
                            <a href="https://snsenterprises.co/" target="_blank"><i className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/impomed.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Impomed
                            </h3>
                            <p>
                              ImpoMed is a medical awareness and medicine sales website developed using HTML, CSS, and JavaScript, with banners and illustrations designed in Adobe Suite. Created during my tenure at a previous company, it facilitates medicine inquiries and purchases.
                            </p>
                          </div>
                          <div className="portCTA">
                            <a href="https://www.impomedhealthcare.com/" target="_blank"><i className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/feathermedia.de.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Feather Media
                            </h3>
                            <p>
                              Feathermedia is a portfolio website developed using HTML, CSS, and JavaScript during my tenure at a previous company. It showcases the IT company’s services, projects, and expertise, highlighting their capabilities and achievements.
                            </p>
                          </div>
                          <div className="portCTA">
                            <a href="https://feathermedia.de/" target="_blank"><i className="fa-solid fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content " id="UI_UX">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/3.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Hourlee
                            </h3>
                            <p>
                              Hourlee is a user-centric app design (UI/UX) tailored for employers and job seekers. It features intuitive navigation, seamless job matching, and interactive dashboards, enhancing the hiring experience for businesses and career opportunities for seekers.
                            </p>
                          </div>
                          {/* <div class="portCTA">
                                          <a href="javascript:void(0)"><i class="fa-solid fa-arrow-right"></i></a>
                                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/2.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Precised Talent
                            </h3>
                            <p>
                              Precised Talent is a recruitment-focused static website built with HTML, CSS, and JavaScript. It offers a clean, responsive design for seamless job postings, Employer interactions, streamlining the hiring process for businesses and job seekers.
                            </p>
                          </div>
                          {/* <div class="portCTA">
                                          <a href="javascript:void(0)"><i class="fa-solid fa-arrow-right"></i></a>
                                      </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content" id="Logo">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/logo1.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Logo Designs
                            </h3>
                            <p>
                              I designed Logos for company related to Manufacturing, Recruitment, ERP, Etc.
                            </p>
                          </div>
                          {/* <div class="portCTA">
                                          <a href="javascript:void(0)"><i class="fa-solid fa-arrow-right"></i></a>
                                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/logo2.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Logo Designs
                            </h3>
                            <p>
                              I designed Logos for company related to Manufacturing, Recruitment, ERP, Etc.
                            </p>
                          </div>
                          {/* <div class="portCTA">
                                          <a href="javascript:void(0)"><i class="fa-solid fa-arrow-right"></i></a>
                                      </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content" id="Branding">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/harsanpharmacy-banner.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Harsan Pharmacy
                            </h3>
                            <p>
                              Harsan Pharmacy: Designed service showcase banners using Adobe Photoshop to highlight pharmacy offerings. The visuals were tailored to enhance brand appeal and effectively communicate services to customers.
                            </p>
                          </div>
                          {/* <div class="portCTA">
                                          <a href="javascript:void(0)"><i class="fa-solid fa-arrow-right"></i></a>
                                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/UmangCIty_Brochure.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Umang City
                            </h3>
                            <p>
                              Umang City: Designed a professional brochure using Adobe Photoshop to showcase residential society plots and flats. The brochure highlights amenities, layouts, effectively attracting potential buyers and investors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/2.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Sterlight Camotech Brochure
                            </h3>
                            <p>
                              Sterlight Camotech Brochure
                            </p>
                          </div>
                          {/* <div class="portCTA">
                                          <a href="javascript:void(0)"><i class="fa-solid fa-arrow-right"></i></a>
                                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="portfolioCard">
                        <div className="portImg">
                          <img src="assets/img/portfolio/banners-design1.jpg" alt="project" />
                        </div>
                        <div className="portContent">
                          <div className="portcontText">
                            <h3>
                              Post Design for Product Branding
                            </h3>
                            <p>
                              Post Design for Product Branding
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glow-container">
            <div className="ball" />
            <div className="ball" style={{ "--delay": "-12s", "--size": "0.35", "--speed": "25s" }} />
            <div className="ball" style={{ "--delay": "-10s", "--size": "0.3", "--speed": "15s" }} />
          </div>
        </section>
        <section className="ourServices pt-50 pb-50 sectionTop" id="Services">
          <div className="site-width">
            <div className="titleSection">
              <h2>
                Our Quality Services
              </h2>
              <p>
                Providing creative and effective solutions designed to help your business grow and succeed.
              </p>
            </div>
            <div className="serviceWrapper">
              <button>
                <div className="serviceCard">
                  <div className="serTitle">
                    <h3>UI/UX</h3>
                  </div>
                  <div className="serContent">
                    <p>
                      Crafting intuitive and visually appealing user interfaces that enhance user experience. From wireframes to prototypes, I ensure seamless navigation and engaging interactions for your digital products.
                    </p>
                  </div>
                  <div className="serCTA">
                    <a href="javascript:void(0)">
                      <img src="assets/img/icons/arrow.svg" alt="icon" />
                    </a>
                  </div>
                </div>
              </button>
              <button>
                <div className="serviceCard">
                  <div className="serTitle">
                    <h3>Web Development</h3>
                  </div>
                  <div className="serContent">
                    <p>
                      Building responsive, high-performance websites tailored to your business needs. Using the latest technologies, I create dynamic and scalable web solutions that drive growth and user engagement.
                    </p>
                  </div>
                  <div className="serCTA">
                    <a href="javascript:void(0)">
                      <img src="assets/img/icons/arrow.svg" alt="icon" />
                    </a>
                  </div>
                </div>
              </button>
              <button>
                <div className="serviceCard">
                  <div className="serTitle">
                    <h3>Graphic Designing</h3>
                  </div>
                  <div className="serContent">
                    <p>
                      Designing stunning visuals that communicate your brand’s story. From logos to marketing materials, I create eye-catching designs that leave a lasting impression on your audience.
                    </p>
                  </div>
                  <div className="serCTA">
                    <a href="javascript:void(0)">
                      <img src="assets/img/icons/arrow.svg" alt="icon" />
                    </a>
                  </div>
                </div>
              </button>
              <button>
                <div className="serviceCard">
                  <div className="serTitle">
                    <h3>Branding</h3>
                  </div>
                  <div className="serContent">
                    <p>
                      Developing unique brand identities that resonate with your target audience. I create cohesive branding strategies, including logos, color schemes, and messaging, to elevate your market presence.
                    </p>
                  </div>
                  <div className="serCTA">
                    <a href="javascript:void(0)">
                      <img src="assets/img/icons/arrow.svg" alt="icon" />
                    </a>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
        <section className="technologies sectionTop pb-50" id="About">
          <div className="site-width">
            <div className="titleSection">
              <h2>
                Technologies we work on
              </h2>
              <p>
                I take your business to new heights with cutting-edge design, web development, and branding solutions. With a passion for innovation and a keen eye for detail, I specialize in creating visually stunning and highly functional digital experiences that captivate audiences and drive results.
              </p>
            </div>
            <div className="technoWrapper">
              <div className="row justify-center">
                <div className="col-md-2">
                  <div className="technoCard">
                    <div className="techImg">
                      <img src="assets/img/techs/skills-1.svg" alt="html" />
                    </div>
                    <div className="techContext">
                      <h4>HTML</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="technoCard">
                    <div className="techImg">
                      <img src="assets/img/techs/css.svg" alt="html" />
                    </div>
                    <div className="techContext">
                      <h4>CSS</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="technoCard">
                    <div className="techImg">
                      <img src="assets/img/techs/javaScript.svg" alt="html" />
                    </div>
                    <div className="techContext">
                      <h4>Javascript</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="technoCard">
                    <div className="techImg">
                      <img src="assets/img/techs/Laravel.svg" alt="html" />
                    </div>
                    <div className="techContext">
                      <h4>Laravel</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="technoCard">
                    <div className="techImg">
                      <img src="assets/img/techs/photoshop.svg" alt="html" />
                    </div>
                    <div className="techContext">
                      <h4>Photoshop</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="technoCard">
                    <div className="techImg">
                      <img src="assets/img/techs/figma.svg" alt="html" />
                    </div>
                    <div className="techContext">
                      <h4>Figma</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contactUs pt-50 pb-50 sectionTop" id="Contact">
          <div className="site-width">
            <div className="contactWrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="contactForm">
                    <h3>Let’s work together!</h3>
                    <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                    <form action="https://api.web3forms.com/submit" method="POST">
                      <input type="hidden" name="access_key" defaultValue="2f7ad476-2956-4621-9738-80fa7266b92f" />
                      <div className="row">
                        <div className="col-md-12">
                          <label htmlFor="FullName">Full Name</label>
                          <input type="text" name="name" placeholder="Enter Name" required />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="Email">Enter Email</label>
                          <input type="email" name="email" placeholder="Enter Email" required />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="Phone">Enter Phone</label>
                          <input type="number" name="number" required placeholder="Enter Phone" />
                        </div>
                        <div className="col-md-12">
                          <label htmlFor="Message">Your Message</label>
                          <textarea rows={5} name="message" required placeholder="Your Message" defaultValue={""} />
                        </div>
                        <input type="checkbox" name="botcheck" className="hidden" style={{ "display": "none" }} />
                        <button type="submit" className="formBtn">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contactInfo">
                    <div className="contactInfoWrapper">
                      <div className="ctinfoCard">
                        <div className="ctinfoImg">
                          <img src="assets/img/icons/call-icon.svg" alt="img" width={24} />
                        </div>
                        <div className="ctinfoText">
                          <h4>Phone</h4>
                          <a href="tel:9569514757">+91 9569514757</a>
                        </div>
                      </div>
                      <div className="ctinfoCard">
                        <div className="ctinfoImg" style={{ "padding": "8px" }}>
                          <img src="assets/img/icons/whatsApp.svg" alt="img" width={30} />
                        </div>
                        <div className="ctinfoText">
                          <h4>WhatsApp</h4>
                          <a href="https://wa.me/+919569514757">+919569514757</a>
                        </div>
                      </div>
                      <div className="ctinfoCard">
                        <div className="ctinfoImg">
                          <img src="assets/img/icons/email.svg" alt="img" width={24} />
                        </div>
                        <div className="ctinfoText">
                          <h4>Email</h4>
                          <a href="mailto:webdevmrmoon@gmail.com">webdevmrmoon@gmail.com</a>
                        </div>
                      </div>
                      <div className="ctinfoCard">
                        <div className="ctinfoImg">
                          <img src="assets/img/icons/skype.svg" alt="img" width={30} />
                        </div>
                        <div className="ctinfoText">
                          <h4>Skype ID</h4>
                          <a href="https://join.skype.com/invite/uPcpchvQ6o6G" target="_blank">Contact On Skype</a>
                        </div>
                      </div>
                      <div className="ctinfoCard">
                        <div className="ctinfoImg">
                          <img src="assets/img/icons/location.svg" alt="img" width={24} />
                        </div>
                        <div className="ctinfoText">
                          <h4>Location</h4>
                          <a href="javascript:void(0)">Noida, Uttar Pradesh, India 201301</a>
                        </div>
                      </div>
                      <div className="ctinfoCard">
                        <div className="ctinfoImg">
                          <img src="assets/img/icons/share.svg" alt="img" width={24} />
                        </div>
                        <div className="ctinfoText">
                          <h4>Follow me on</h4>
                          <a href="https://www.instagram.com/webdevmrmoon/" target="_blank">Instagram</a> | <a href="https://www.linkedin.com/in/webdevmrmoon" target="_blank">LinkedIn</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="pt-50 pb-50">
          <div className="site-width">
            <div className="footerLogo">
              <div className="text-center">
                <a href="javascript:void(0)"><img src="assets/img/logo.svg" alt="logo" /></a>
              </div>
            </div>
            <div className="footerLinks navWrapper">
              <ul>
                <li><a className="navibtn" data-target="#Portfolio" href="#Portfolio">Portfolio</a></li>
                <li><a className="navibtn" data-target="#Services" href="#Services">Services</a></li>
                <li><a className="navibtn" data-target="#About" href="#About">About</a></li>
                <li><a className="navibtn" data-target="#Contact" href="#Contact">Contact</a></li>
              </ul>
            </div>
            <div className="footerCopyright">
              <p>©  All rights reserved by <a href="index.html">Webdev Mrmoon</a></p>
            </div>
          </div>
        </footer>
      </section>
      <button className="scrollToTop">
        <span id="progress-bar">
          <svg width={48} height={48} viewBox="-5 -5 60 60" fill="none">
            <path stroke="#ff9727" strokeWidth={2} d="M0.5,25a24.5,24.5 0 1,0 49,0a24.5,24.5 0 1,0 -49,0" />
          </svg>
        </span>
      </button>



   
    </div>

  );
}
