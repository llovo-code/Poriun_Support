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

function Countdown() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Febr 20, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("days").innerText = Math.floor(distance / day)),
            (document.getElementById("hours").innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
                (distance % minute) / second
            ));

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0);
};

$(document).ready(
    function() {
        mouseoutcards();
        mouseovercards();
        Countdown();

    }
);


function mouseoutcards() {
    $('.transition').on('mouseout', function() {

        var img = $(this).find('img');
        //alert(img.length);
        for (var i = 0; i < img.length; i++) {
            if (i != 0) {
                $(this).find('img').eq(i).hide();
            } else {
                $(this).find('img').eq(i).attr('src', '../views/images/seguridad-blanco.png');
            }

        }
        $(this).find('img').css({
            'height': '50px',
            'width': '50px',
            'margin-left': '-20px',

        });
        $(this).find('.card').css({
            'background': '#ffffff00',
            'border': '0px',
            'box-shadow': 'none'
        });
        $(this).css('height', '150px');
        $(this).find('p').css('display', 'none');
    });

}


function mouseovercards() {

    $('.transition').on('mouseover', function() {

        $(this).css({
            'margin-top': '0px',
        });

        var img = $(this).find('img');
        //alert(img.length);
        for (var i = 0; i < img.length; i++) {
            if (i != 0) {
                $(this).find('img').eq(i).show();
            } else {
                $(this).find('img').eq(i).attr('src', '../views/images/seguridad.png');
            }
        }

        $(this).find('img').css({
            'height': '50px',
            'width': '50px',
            'margin-left': '20px',
            'margin-top': '20px'

        });
        $(this).find('.card').css({
            'background': 'white',
            'border': '0px'
        });
        $(this).css('height', 'auto');
        $(this).find('p').css('display', 'block');
    });
}