function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
  /*======header__menu=============*/
  $(".header__burger").on("click", function() {
    $(".mobile-menu").slideToggle();
  });
  /*==========/header__menu=========*/

  /*======Header__dropdown=============*/
  $(".header-menu__item").hover( function(event) {
    event.preventDefault();
    if ($(window).width() > 1024){
      $(this).find(".header-menu__dropdown").fadeToggle(222);   
    }
  });
  $(".header-menu__item").on("click", function(event) {
    event.preventDefault();
    if ($(window).width() <= 1024 && $(window).width() > 900){
      $(this).find(".header-menu__name").toggleClass("dropdown");
      $(this).find(".header-menu__dropdown").fadeToggle();   
      $(".header-menu__item").not(this).find(".header-menu__dropdown").fadeOut();   
      $(".header-menu__item").not(this).find(".header-menu__name").removeClass("dropdown");   
      $(".header-menu__item").not(this).removeClass('dropdown');   
    }
  });
  $(".header-menu__item").on("click", function(event) {
    event.preventDefault();
    if ($(window).width() <=900){
      $(this).find(".header-menu__name").toggleClass("dropdown");
      $(this).find(".header-menu__dropdown").slideToggle();   
      $(".header-menu__item").not(this).find(".header-menu__dropdown").slideUp();   
      $(".header-menu__item").not(this).find(".header-menu__name").removeClass("dropdown");   
      $(".header-menu__item").not(this).removeClass('dropdown');   
    }
  });
  /*==========/header__dropdown=========*/

  /*======faq=============*/
  $(".faq__question").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
  /*==========/faq=========*/

  /*======Reviews=============*/
  $(".reviews__more").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $(this).prev().find('.reviews__hide').toggleClass("active");
  });
  /*==========/reviews=========*/

    /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

     /*=====Add-file=======*/
  var dropZone = $('.add-container');

  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
     return false;
  });

  dropZone.on('dragover dragenter', function() {
     dropZone.addClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     dropZone.removeClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     let dx = e.pageX - dropZone.offset().left;
     let dy = e.pageY - dropZone.offset().top;
     if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
          dropZone.removeClass('dragover');
     };
  });

  dropZone.on('drop', function(e) {
     dropZone.removeClass('dragover');
     let files = e.originalEvent.dataTransfer.files;
     sendFiles(files);
  });

  $('#file-input').change(function() {
     let files = this.files;
     sendFiles(files);
  });

  function sendFiles(files) {
     let maxFileSize = 5242880;
     let Data = new FormData();
     $(files).each(function(index, file) {
          if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
               Data.append('images[]', file);
          }
     });
};
  /*=====/add-file=======*/


  /*========page-slider========*/
  new Swiper('.page-slider-main', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.slider-arrow_next',
      prevEl: '.slider-arrow_prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: {
        el: '.page-slider-min',
        //loop: true,
        slidesPerView: 10,
        spaceBetween: 8,
      },
      autoScrollOffset: 1,
    },
  });
/*=======/page-slider========*/

 /*========photo-slider========*/
  new Swiper('.photo-slider__container', {
    slidesPerView: 3,
    spaceBetween: 32,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      547: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });
/*=======/page-slider========*/
});
 