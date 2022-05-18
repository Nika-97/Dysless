$(document).ready(function () {


  // SLIDER REVIEWS
  $("#reviews-slider").owlCarousel({
    responsive: {
      0: {
        items: 1,
        margin: 50,
      },
      700: {
        items: 2,
        margin: 180,
        dots: false,
      },
      1000: {
        items: 3,
        margin: 350,
        dots: false,
      },
      1050: {
        items: 3,
        dots: false,
      },
    }
  });

  // SLIDER CERTIFICATES (SPECIALIST PAGE)

  $("#certificates-slider").owlCarousel({
    items: 4
  });

  // SLIDER SPECIALISTS 

  $("#specialists-slider").owlCarousel({

  });

  // TABS
  $('.dyslexia-signs__content-wrap .dyslexia-signs__list').css('display', 'none');
  $('.dyslexia-signs__content-wrap .dyslexia-signs__list').eq(0).css('display', 'block');
  $('.dyslexia-signs__tab:first-child').addClass('active');

  $('.dyslexia-signs__tab').click(function () {
    $('.dyslexia-signs__tab').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $('.dyslexia-signs__list').css('display', 'none');
    $('.dyslexia-signs__list').eq(index).fadeIn(600);
  })

  // TABS - MOBILE SCROLL

  function anchorScrollMobile(to) {
    let container = document.getElementById(to);

    function getCoords(elem) { // кроме IE8-
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }
    document.body.parentNode.scrollTo({
      top: getCoords(container).top - 200,
      left: 0,
      behavior: 'smooth'
    });
  }

  if ($(window).width() < 576) {

    $('.dyslexia-signs__content-wrap').attr("id", "dyslexia-signs__content-wrap");

    $('.dyslexia-signs__tab').click(function () {
      anchorScrollMobile('dyslexia-signs__content-wrap')
    })
  }


  // ACCORDION
  $(".accordion__expand-btn").on("click", function () {
    let speed = 400;
    let parentElem = $(this).parent().parent()
    if (!$(this).hasClass("active")) {
      $(".accordion__content").slideUp(speed);
      $(".accordion__expand-btn").removeClass("active");
      $(".accordion__item").removeClass("active");

      $(this).parent().next().slideDown(speed);
      $(this).addClass("active");
      parentElem.addClass("active");
    } else if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      parentElem.removeClass("active");
      $(this).parent().next().slideUp(speed);
    }
  })


  $(".menu__item.dropdown").mouseenter(function () {
    $(this).css('z-index', 999)
  })
  $(".menu__item.dropdown").mouseleave(function () {
    $(this).css('z-index', 0)
  })


  // PAGINATION - ACTIVE ITEM HIGHLIGHT

  $(".pagination__item").click(function () {
    $(".pagination__item").removeClass("active")
    $(this).addClass("active")
  })

  //SLIDER PHOTO 

  $('.photo-slider').owlCarousel({
    nav: true,
    items: 7,
    center: true,
    loop: true,
  });
  // появление стрелочек для слайдера
  $('.photo-slider').mouseenter(function (e) {
    let pos = getPosition(e)
    if (pos.x < 600) {
      $('.photo-slider .owl-prev').addClass('active')
    }
    if (pos.x > 900) {
      $('.photo-slider .owl-next').addClass('active')
    }
  })
  $('.photo-slider').mouseleave(function (e) {
    $('.photo-slider .owl-prev').removeClass('active')
    $('.photo-slider .owl-next').removeClass('active')
  })

  /**
   * Координаты курсора
   */
  function getPosition(e) {
    var x = y = 0;

    if (!e) {
      var e = window.event;
    }

    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    } else if (e.clientX || e.clientY) {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return { x: x, y: y }
  }



  //BURGER MENU
  $('.burger-menu-btn').click(function () {
    $('.burger-menu-dark').addClass('active')
    $('.burger-menu').addClass('active')

    $('.burger-menu__slide-menu').click(function () {
      let listItems = $(this).find('ul').html()
      let listName = $(this).attr('data-text')

      $('.burger-menu').removeClass('active')
      setTimeout(() => {
        $('.burger-submenu__list').html(listItems)
        $('.burger-submenu__item-name').text(listName)
        $('.burger-submenu').addClass('active')
      }, 300)
    })
  })

  $('.burger-menu__close').click(function () {
    $('.burger-menu-dark').removeClass('active')
    $('.burger-menu').removeClass('active')
    $('.burger-submenu').removeClass('active')
  })

  $('.burger-submenu__back').click(function () {
    $('.burger-submenu').removeClass('active')
    setTimeout(() => {
      $('.burger-menu').addClass('active')
    }, 300)
  })

  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.burger-menu') && !target.closest('.burger-submenu') && !target.closest('.burger-menu-btn')) {
      $('.burger-menu-dark').removeClass('active')
      $('.burger-menu').removeClass('active')
      $('.burger-submenu').removeClass('active')
    }
  });


  // Fixed header (шапка на главной странице и странице специалиста отличается от остальных)

  if (!$(".header").hasClass('main-page-header')) {
    setInterval(() => {

      if ($(document).scrollTop() > 50 && $(".header").hasClass('fixed') == false) {
        $(".header").toggleClass("fixed");


      } else if ($(document).scrollTop() < 50 && $(".header").hasClass('fixed') == true) {
        $(".header").toggleClass("fixed");

      }

    }, 100)


  } else {
    setInterval(() => {

      if ($(document).scrollTop() > 50 && $(".header").hasClass('fixed') == false) {
        $(".header").toggleClass("fixed");
        $(".header__logo-text").css('color', '#001A49');

      } else if ($(document).scrollTop() < 50 && $(".header").hasClass('fixed') == true) {
        $(".header").toggleClass("fixed");
        $(".header__logo-text").css('color', '#fff');
      }

    }, 100);
  }


});