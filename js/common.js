$(function(){
    $('.actions-slider-wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $('.photo_sertificate').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#sertific .prev'),
        nextArrow: $('#sertific .next'),
    });
    $('.work_wrap').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('#our_works .prev'),
        nextArrow: $('#our_works .next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });
});

    $('.services-item').click(function() {
        const visiblePart = this.children[0];
        const hiddenPart = this.children[1];

        $(hiddenPart).toggleClass('dpn');
        $(this).toggleClass('sim');

    });