var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
  delay: 1,
  disableOnInteraction: false
},
speed: 2000,
    pagination: {
      el: '.p .swiper-pagination',
    },
  });
  var swiper = new Swiper(".p .swiper-container", swiperOptions);