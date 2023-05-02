$(document).ready(function () {
  $(".header__nav-burger").click(function (event) {
    $(".header__nav-ul, .overlay, overlay-xrest").toggleClass("active");
  });
});
$(document).ready(function () {
  $(".overlay-xrest").click(function (event) {
    $(".overlay, .overlay-xrest, .header__nav-ul").removeClass("active");
  });

  $(".header__nav-burger").click(function (event) {
    $(
      ".header__nav-ul, .about__right-button, .overlay, .overlay-xrest"
    ).addClass("active");
  });

  $(".header__nav-burger").click(function (event) {
    $(".header__nav-ul").show();
    $(".overlay").show();
    $("overlay-xrest").show();
  });
});

$(".photo__box-slider").slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});
