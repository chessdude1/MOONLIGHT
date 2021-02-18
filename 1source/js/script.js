var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    slidesPerView: 'auto',
    spaceBetween: 20,
  });

  $(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
    });
});