$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        mode: 'fade',
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 300,
        slideHight: 300,
        pause: 3000,
        captions: true,
        pagerType: 'short',
        infiniteLoop: true
    });
});