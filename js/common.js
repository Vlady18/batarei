$(function(){
    $('.actions-slider-wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#prevFir'),
        nextArrow: $('#nextFir'),
    });
    $('#sliderwrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#prevSec'),
        nextArrow: $('#nextSec'),
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
    $('.acard_ul li').on('click', function(){
        $('.acard_ul li').removeClass('active');
        $(this).addClass('active');
    });
    $('.call-back-wrapper button').click(function(){
        $('#popup').toggleClass('dpn');
    });
    $('.close_popup').click(function(){
       $(this).closest('#popup').addClass('dpn');
    });
    new WOW().init();

    $('.services-item').click(function() {
    // $('.services-item').removeClass('sim');
    // $('.services-item .services-item-hidden').addClass('dpn');
        $(this).siblings('.services-item').removeClass('sim');
        $(this).siblings('.services-item').find('.services-item-hidden').addClass('dpn');
        $(this).find('.services-item-hidden ').toggleClass('dpn');
        $(this).toggleClass('sim');

        //
        // const visiblePart = this.children[0];
        // const hiddenPart = this.children[1];
        //
        // $(hiddenPart).toggleClass('dpn');
        // $(this).toggleClass('sim');

    });

    $('.menu-button').click(function() {
        $('body').toggleClass('bdovhidden');
        $('#side-menu').toggleClass('dpn');
    });
    $('#menuExit').click(function() {
        $('body').toggleClass('bdovhidden');
        $('#side-menu').toggleClass('dpn');
    });
    $('#side-menu ul li').click(function () {
        $('body').toggleClass('bdovhidden');
        $('#side-menu').toggleClass('dpn');
    });
});

