'use strict'
{
  /* 変数宣言 */
  

  $(function () {
    $(".slider").slick({
      autoplay: true, 
      adaptiveHeight: true,
      prevArrow: '<img src="./img/main/our_strong/slider_btn_l.png" class="slide-arrow prev-arrow">',
      nextArrow: '<img src="./img/main/our_strong/slider_btn_r.png" class="slide-arrow next-arrow">',
      centerMode: true,
      centerPadding: "10px",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 992, // 992px以下のサイズに適用
          settings: {
            autoplay: true, 
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: "50px",
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  // $(document).ready(function(){
  //   $(".slider").slick({
  //     autoplay: true, 
  //     adaptiveHeight: true,
  //     prevArrow: '<img src="./img/our_strong/slider_btn_l.png" class="slide-arrow prev-arrow">',
  //     nextArrow: '<img src="./img/our_strong/slider_btn_r.png" class="slide-arrow next-arrow">',
  //   });
  // });
}