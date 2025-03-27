$(document).ready(function(){
  $('#mobile_btn').on('click', function(){
      $('#mobile_menu').toggleClass('active');
      $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  const sections = $('section');
  const navItems = $('.nav-item');

  $(window).on('scroll', function(){
      const header = $('header');
      const scrollPosition = $(window).scrollTop() - header.outerHeight();

      let activeSectionIndex = 0;

      if (scrollPosition <= 0){
          header.css('box-shadow', 'none');
      } else {
          header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
      }

      sections.each(function(i){
          const section = $(this);
          const sectionTop = section.offset().top - 96;
          const sectionBottom = sectionTop + section.outerHeight();

          if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
              activeSectionIndex = i;
              return false;
          }
      });

      navItems.removeClass('active');
      $(navItems[activeSectionIndex]).addClass('active');
  });

  ScrollReveal().reveal('.description', {
      origin: 'right',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('.section-title, .title', {
      origin: 'left',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('.text-car, .footer-text', {
      origin: 'top',
      duration: 2000,
      distance: '20%'
  });

  ScrollReveal().reveal('.service p, .card-testimonials p', {
      origin: 'bottom',
      duration: 2000,
      distance: '20%'
  });
});

var swiper1 = new Swiper(".mySwiper1", {
    observer: true,
    observeParents: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  

  var swiper2 = new Swiper(".mySwiper2", {
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 480px
      550: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      // when window width is >= 480px
      800: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      // when window width is >= 640px
      1100: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });
