window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // 移动端导航栏汉堡菜单
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // 初始化结果视频轮播（Results 区）
    var carouselOptions = {
        slidesToScroll: 1,
        slidesToShow: 3,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    };
    bulmaCarousel.attach('.carousel', carouselOptions);
});
