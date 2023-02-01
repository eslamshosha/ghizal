$(window).load(function () {
  $(".preloader").fadeOut();
  // $("body").removeClass("overflow");
});

$(document).ready(function () {
  new WOW().init();
  $(".fixed-search").click(function (e) {
    e.preventDefault();
    $(".overlay-box").fadeToggle(300);
    $(".search-section").toggleClass("search-open");
    $(".fixed-search .open-search").toggleClass("close-search");
    $("body").toggleClass("overflow");
  });

  //phone size menu onclick
  // if ($(window).width() <= 991) {
  // }
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
    $(".menu-bars").toggleClass("open-bars");
  });
  $(".nav-head .close-btn").click(function () {
    $(".navgition").removeClass("reset-left");
    $(".menu-bars .bars").toggleClass("open-bars");
    $("body").removeClass("overflow");
  });
  //fixed nav
  $stickyNav = $("header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav");
    } else {
      $stickyNav.removeClass("fixed-nav");
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav");
    }
  });
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyNav.addClass("fixed-header");
    } else {
      $stickyNav.removeClass("fixed-header");
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-header");
    }
  });
  ///////// ** product slider** /////////
  var specialsO = new Swiper(".product-slider .swiper-container", {
    loop: true,
    autoplay: true,
    centeredSlides: true,
    pagination: {
      el: ".product-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-slider .swiper-btn-next",
      prevEl: ".product-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });

  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});
