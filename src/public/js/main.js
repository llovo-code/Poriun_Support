(function($) {

    "use strict";

    $(window).on('load', function() {

        var location = window.location.pathname

        var dir = location.split('/');
        if (location != '/') {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
        /*Page Loader active
        ========================================================*/
        $('#preloader').fadeOut();

        // Sticky Nav
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
                // $('.scrolling-navbar').find('button').removeClass('.navbar-toggler');
                // $('.scrolling-navbar').find('button').addClass('.navbar-toggler-collapse');

            } else {

                if (location === '/') {
                    $('.scrolling-navbar').removeClass('top-nav-collapse');
                }

                // $('.scrolling-navbar').find('button').removeClass('.navbar-toggler-collapse');
                // $('.scrolling-navbar').find('button').addClass('.navbar-toggler');

            }
        });


        // one page navigation 
        $('.navbar-nav').onePageNav({
            currentClass: 'active'
        });

        /* Auto Close Responsive Navbar on Click
        ========================================================*/
        function close_toggle() {


            if ($(window).width() <= 766) {
                $('.navbar-collapse a').on('click', function() {
                    $('.navbar-collapse').collapse('hide');
                    console.log(`colapse hire `)
                });
            } else {
                $('.navbar .navbar-inverse a').off('click');
            }



        }
        close_toggle();
        $(window).resize(close_toggle);

        /* WOW Scroll Spy
        ========================================================*/
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });

        wow.init();

        /* Testimonials Carousel 
    ========================================================*/
        var owl = $("#testimonials");
        owl.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            center: true,
            margin: 15,
            slideSpeed: 1000,
            stopOnHover: true,
            autoPlay: true,
            responsiveClass: true,
            responsiveRefreshRate: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });


        /* Back Top Link active
        ========================================================*/
        var offset = 200;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });

}(jQuery));

$(function() {

    $(".progress").each(function() {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }

    })

    function percentageToDegrees(percentage) {

        return percentage / 100 * 360

    }

});

$(function() {

    var imageSlider = new Swiper('.image-slider', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        loop: true,
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            // when window is <= 580px
            580: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window is <= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window is <= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window is <= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            },

        }
    });
});