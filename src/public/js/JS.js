AOS.init({
    duration: 800,
    ease: 'ease-in-out-sine'
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    speedAsDuration: true
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        1000: {
            items: 3
        },
    }
});
/*JS DE Countdown*/

// function Countdown() {
//     const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;

//     let birthday = "Febr 20, 2021 00:00:00",
//         countDown = new Date(birthday).getTime(),
//         x = setInterval(function() {
//             let now = new Date().getTime(),
//                 distance = countDown - now;

//             (document.getElementById("days").innerText = Math.floor(distance / day)),
//             (document.getElementById("hours").innerText = Math.floor(
//                 (distance % day) / hour
//             )),
//             (document.getElementById("minutes").innerText = Math.floor(
//                 (distance % hour) / minute
//             )),
//             (document.getElementById("seconds").innerText = Math.floor(
//                 (distance % minute) / second
//             ));

//             //do something later when date is reached
//             if (distance < 0) {
//                 let headline = document.getElementById("headline"),
//                     countdown = document.getElementById("countdown"),
//                     content = document.getElementById("content");

//                 headline.innerText = "It's my birthday!";
//                 countdown.style.display = "none";
//                 content.style.display = "block";

//                 clearInterval(x);
//             }
//             //seconds
//         }, 0);
// };

$(document).ready(
    function() {
        // mouseoutcards();
        // mouseovercards();
        Countdown();
        mouse_hover_out_cards()
    }
);


function mouse_hover_out_cards() {


    $('.transition').mouseenter(() => {

        $('#transicon').css('visibility', 'hidden')
        $('.card').fadeIn('slow', () => {
            $(this).show();
        });

        let ventana = $(window).width();

        console.log(`Ventana px width `, ventana);
        let height_v;
        if (ventana < 576) {
            height_v = 990;
        } else if (ventana >= 576 && ventana <= 767) {
            height_v = 930
        } else if (ventana >= 768 && ventana <= 992) {
            height_v = 360
        } else {
            height_v = 350
        }


        $(this).animate({
            height: height_v
        }, 1500);

    }).mouseleave(() => {

        $('#transicon').css('visibility', 'visible')
        $('.card').fadeOut('slow', () => {
            $(this).hide();
        });

        $(this).animate({
            height: "40"
        }, 1500);

    });



    // $('.transition').hover(() => {
    //     $('#transicon').css('visibility', 'hidden')
    //     $('.card').fadeIn('slow', () => {
    //         $(this).show();
    //     });
    //     $(this).mouseenter(function() {
    //         let ventana = $(window).width();
    //         console.log(`Ventana px width `, ventana);
    //         let height_v;
    //         if (ventana < 576) {
    //             height_v = 990;
    //         } else if (ventana >= 576 && ventana <= 767) {
    //             height_v = 930
    //         } else if (ventana >= 768 && ventana <= 992) {
    //             height_v = 360
    //         } else {
    //             height_v = 350
    //         }
    //         $(this).animate({
    //             height: height_v
    //         }, 'slow');
    //     })
    // }, () => {
    //     $('#transicon').css('visibility', 'visible')
    //     $('.card').fadeOut('slow', () => {
    //         $(this).hide();
    //     });
    //     $(this).mouseleave(function() {
    //         $(this).animate({
    //             height: "40"
    //         }, 'slow');
    //     });
    // });

    // $(window).resize(function() {
    //     vetana = $(window).width();

    //     console.log(`Ventana  width `, ventana);
    //     let height_v;
    //     if (ventana < 576) {
    //         height_v = 930;
    //     } else if (ventana >= 576 && ventana <= 767) {
    //         height_v = 930
    //     } else if (ventana >= 768 && ventana <= 992) {
    //         height_v = 600
    //     } else {
    //         height_v = 330
    //     }
    //     $(".transition").mouseenter(function() {
    //         $(this).animate({
    //             height: height_v
    //         });
    //     }).mouseleave(function() {
    //         $(this).animate({
    //             height: "70"
    //         });
    //     });
    //     // }

    // }

    // let ventana_ancho = $(window).width();
    // console.log(ventana_ancho)
    // let hight_V = 0;
    // if (ventana_ancho < 576) {
    //     hight_V = 930;
    // } else {
    //     hight_V = 300;
    // }
    //var boxHeight = $(".transition").height();


}





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