import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    effect: "fade",
    breakpoints: {
        575: {
            // slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            // slidesPerView: 4,
            spaceBetween: 30,
        },
        992: {
            // slidesPerView: 5,
            spaceBetween: 44,
        },
    },
});
