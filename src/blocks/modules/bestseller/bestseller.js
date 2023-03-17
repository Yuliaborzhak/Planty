import Swiper from 'swiper';

document.addEventListener("DOMContentLoaded", () => {

    console.log(1);

    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        slidesPerView: "auto",
        breakpoints: {
            768: {
                spaceBetween: 22,
            },
            992: {
                spaceBetween: 32,
            },
        },
    });
});

