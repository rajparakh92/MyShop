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

  let mobileNumber = '9375980133';

  $('#mob').text(mobileNumber);

  var items = [
    { id: "1", name: "Dulhan Lehenga", image: "Dulhan Lehnga - 6499.png", price: "5999", type: "Lehengas" },
    { id: "2", name: "Net Party wear Lehenga", image: "Net Party wear Lehnga - 3999.png", price: "3999", type: "Lehengas" },
    { id: "3", name: "Party wear Lehenga", image: "Party Wear Lehenga - 6499.png", price: "6499", type: "Lehengas" },
    { id: "4", name: "Weightless Chex Saree", image: "Weightless - 399.png", price: "449", type: "Sarees" },
    { id: "5", name: "Weightless Green Saree", image: "Weightless 1 - 399.png", price: "449", type: "Sarees" },
    { id: "6", name: "Weightless Marron Saree", image: "Weightless 2 - 399.png", price: "449", type: "Sarees" },
    { id: "7", name: "Weightless Red Saree", image: "Weightless 3 - 399.png", price: "449", type: "Sarees" },

    { id: "8", name: "Ashwika Net Lehenga", image: "Ashwika_Net_Lehenka_-_3999.png", price: "3999", type: "Lehengas" },
    { id: "9", name: "Laddu Brown Saree", image: "Laddu_Brown_-_299.png", price: "299", type: "Sarees" },
    { id: "10", name: "Laddu Purple Saree", image: "Laddu_Purple_-_299.png", price: "299", type: "Sarees" },
    { id: "11", name: "Lehenga Saree", image: "Lehenga_Saree_-_4999.png", price: "4999", type: "Lehengas" },
    { id: "12", name: "Madhuri Dark Blue Saree", image: "Madhuri_Dark_Blue-_499.png", price: "499", type: "Sarees" },
    { id: "13", name: "Mristha Lehenga", image: "Mristha_Lehenga_-_6999.png", price: "6999", type: "Lehengas" },
    { id: "14", name: "Shreedevi Gold 60 gm", image: "Shreedevi_Gold_60_gm_-_499.png", price: "499", type: "Sarees" },
    { id: "15", name: "Chiffon Ginni Gold Saree", image: "Sifon_Ginni_Gold_-_599.png", price: "599", type: "Sarees" },
    { id: "16", name: "Sonakhi Blue 60 gm Saree", image: "Sonakhi_Blue_60_gm_-_599.png", price: "599", type: "Sarees" },
    { id: "17", name: "Weightless Dark Mehendi", image: "Weightless_Dark_Mehendi_60_gm_-_399.png", price: "399", type: "Sarees" },
    { id: "18", name: "Weightless Padding Saree", image: "Weightless_Padding_-_299.png", price: "299", type: "Sarees" },

    { id: "19", name: "Weightless Diamond", image: "Weightless - Diamod - 249.png", price: "299", type: "Sarees" },
    { id: "20", name: "Weightless Titli Saree", image: "Weightless Titli - 299.png", price: "349", type: "Sarees" },
    { id: "21", name: "Bengali Buta Saree", image: "Bengali Buta - 299.png", price: "349", type: "Sarees" },
    { id: "22", name: "Weightless Sarika Saree", image: "Weightless Sarika 249.png", price: "299", type: "Sarees" },
    { id: "23", name: "Cotton Print Saree", image: "Cotton Print - 349.png", price: "399", type: "Sarees" },
    { id: "24", name: "Cotton Print New Saree", image: "Cotton Print 1 - 349.png", price: "399", type: "Sarees" },
    { id: "25", name: "Weightless with Less", image: "Weightless with Less - 249.png", price: "349", type: "Sarees" },
    { id: "26", name: "Foam Work Saree", image: "Foam Work - 499.png", price: "549", type: "Sarees" },
    { id: "27", name: "Diamond Work Saree", image: "Diamond - 499.png", price: "549", type: "Sarees" },
    { id: "28", name: "Weightless Work Saree", image: "Weightless Work - 449.png", price: "499", type: "Sarees" },
    { id: "29", name: "Kajal Saree", image: "Kajal Saree - 349.png", price: "399", type: "Sarees" },
    { id: "30", name: "Weightless Dark Blue", image: "Weightless Dark Blue - 499.png", price: "499", type: "Sarees" }
  ]

  for (let i = 0; i < items.length; i++) {
    $("#items").append('<div class="col-lg-2 col-6 portfolio-item ' + items[i].type +
      '" data-wow-delay="0.1s"> <div class="portfolio-wrap"> <img src="img/portfolio/' + items[i].image
      + '" class="img-fluid" alt=""> <div class="portfolio-info"><div> <a href="img/portfolio/' +
      items[i].image + '" data-lightbox="portfolio" data-title="' + items[i].name + '" class="link-preview" title="Preview"><i class="ion ion-eye"></i>' +
      '</a></div></div></div><p class="item-label text-center">' +
      items[i].name + '<br/><b style="font-size:15px">&#x20b9; ' + items[i].price + '  </b><br/>' +
      '<button name="' + items[i].name + '" class="btn btn-danger buy-btn">Buy</button></p></div>');
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

