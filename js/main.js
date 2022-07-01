
$(function() {

  // swiperオプション
  let options = {
    loop: true,
    effect: 'fade',
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
  };
   
  //上記オプションを使って初期化
  let mySwiper = new Swiper ('.swiper', options);


  // タブ切り替え
  $tabList = $('.tab li span');
  $tabList.on('click', function() {
    var index = $tabList.index(this);
    $tabList.removeClass('active');
    $(this).addClass('active');
    $('.tab_cnt__item').removeClass('show').eq(index).addClass('show');
  });

  // モーダルオープン
  $('.header__btn').on('click', function() {
    var scrollTop = $(window).scrollTop();
    var $modal = $('.modal');
    var $modalBg = $('.modal__bg');
    var $modalClose = $('.modal__close');
    var $body = $('body');

    function modalOpen() {
      $modal.addClass('modal--open');
      $modalBg.addClass('active');
      $body.addClass('scroll-prevent');
      $body.css({ top: -scrollTop});
    }
    function modalClose() {
      $modal.removeClass('modal--open');
      $modalBg.removeClass('active');
      $body.removeClass('scroll-prevent');
      $body.css({ top: ''});
      $(window).scrollTop(scrollTop);
    }
    
    modalOpen();

    $modalClose.click(function() {
      modalClose();
    });
    $modalBg.click(function() {
      modalClose();
    });
  });

  // スクロールでヘッダーを固定
  function stickyHeader() {
    var headerH = $('.header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if(scroll >= headerH) {
      $('.header:not(.sub_header)').addClass('fixed');
      $('.sub_header').addClass('fixed_white')
    }else {
      $('.header').removeClass('fixed');
      $('.sub_header').removeClass('fixed_white');
    }
  }

  // ハンバーガーメニュー
  $flg = false;
  $('.sp_hamburger'). on('click', function() {
    $(this).toggleClass('open');
    $('.sp_nav').fadeToggle(300);
    
    if($flg == false) {
      $('body').css('overflow', 'hidden');
      $flg = true;
    } else {
      $('body').css('overflow', 'visible');
      $flg = false;
    }
  });

  $(window).scroll(function() {
    stickyHeader();
  })

  flatpickr('#js-datepicker', {
    locale     : 'ja',
    dateFormat : 'Y.m.d（D）', 
    minDate: "today",
    mode: 'multiple',
    static: true
  });

  // aos.js起動
  AOS.init({
    offset: 300,
    delay: 200,
    duration: 700,
    easing: 'ease-out',
    anchorPlacement:'top-center',
    once: true,
    });

});