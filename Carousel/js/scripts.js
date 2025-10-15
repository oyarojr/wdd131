document.addEventListener('DOMContentLoaded', () => {
    if (typeof Swiper === 'undefined') {
        console.error('Swiper is not loaded. Check that swiper-bundle.min.js is included before js/scripts.js');
        return;
    }

    const container = document.querySelector('.slide-container');
    if (!container) {
        console.error('Slide container (.slide-container) not found in the DOM');
        return;
    }

    try {
        const swiper = new Swiper('.slide-container', {
            // show three cards per view and move by groups of 3
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // responsive breakpoints
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            },
        });

        console.log('Swiper initialized:', swiper);
    } catch (err) {
        console.error('Error initializing Swiper:', err);
    }
});