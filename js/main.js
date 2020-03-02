(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function () {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

  let mobileNumber = '6359005218';

  $('#mob').text(mobileNumber);

  var items = [
    { id: "1", name: "Dulhan Lehenga", image: "Dulhan Lehnga - 6499", price: "6499", type: "new-arrival" },
    { id: "2", name: "Net Party wear Lehenga", image: "Net Party wear Lehnga - 3999", price: "3999", type: "festive" },
    { id: "3", name: "Party wear Lehenga", image: "Party wear Lehnga - 6999", price: "6999", type: "new-arrival" },
    { id: "4", name: "Weightless 1", image: "Weightless - 399", price: "399", type: "festive" },
    { id: "5", name: "Weightless 2", image: "Weightless 1 - 399", price: "399", type: "offers" },
    { id: "6", name: "Weightless 3", image: "Weightless 2 - 399", price: "399", type: "new-arrival" },
    { id: "7", name: "Weightless 4", image: "Weightless 3 - 399", price: "399", type: "offers" }
  ]

  for (let i = 0; i < items.length; i++) {
    $("#items").append('<div class="col-lg-2 col-6 portfolio-item ' + items[i].type +
      '" data-wow-delay="0.1s"> <div class="portfolio-wrap"> <img src="img/portfolio/' + items[i].image
      + '.jpg" class="img-fluid" alt=""> <div class="portfolio-info"><div> <a href="img/portfolio/' +
      items[i].image + '.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i>' +
      '</a></div></div></div><p class="item-label text-center">' +
      items[i].name + ' <br/><b>&#x20b9;' + items[i].price + ' </b><br/>' +
      '<button name="' + items[i].name + '" class="btn btn-primary buy-btn">Buy</button></p></div>');
  }

  $('.buy-btn').click(function () {
    let url = 'https://api.whatsapp.com/send?phone=91' + mobileNumber + '&text=Hello, I am interested in buying '
      + this.name + '. Please send me details. Thank you.';
    window.location.href = url;
  });

  $("#menu").on("click", ".portf", function (event) {
    console.log('testing');
  });
})(jQuery);

