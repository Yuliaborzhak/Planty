import Swiper from 'swiper';
//
document.addEventListener("DOMContentLoaded", () => {

    console.log(1);

    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        // effect: "fade",
        // centeredSlides: true,
        slidesPerView: "auto",
        breakpoints: {
            // 575: {
            //     // slidesPerView: 2,
            //     spaceBetween: 20,
            // },
            768: {
                // slidesPerView: 4,
                spaceBetween: 22,
                // slidesPerView: 34,
                // centeredSlides: false,
            },
            992: {
                // slidesPerView: 5,
                spaceBetween: 32,
                // slidesPerView: 3.5,
                // centeredSlides: false,
            },
        },
    });
});

