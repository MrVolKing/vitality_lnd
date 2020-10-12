$(document).ready(() => {

// scrol menu
    // $(document).on('click', '.header__item a', function() {
    //     event.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({
    //         scrollTop: top
    //     }, 500);
	// })
	

//burger
//     $('.burger').click(function() {
//         $('.adaptmenu').addClass('adaptmenu_active');
//         $('body').css('overflow', 'hidden');
//     });

//     $('.close').click(function() {
//         $('.adaptmenu').removeClass('adaptmenu_active');
//         $('body').css('overflow', 'visible');
//         $('body').css('overflow-x', 'hidden');
//     });

//     $('.header__item').click(function() {
//         $('.adaptmenu').removeClass('adaptmenu_active');
//         $('body').css('overflow', 'visible');
//         $('body').css('overflow-x', 'hidden');
//     });



// $(function(){

//     $("#typing").typed({
//         strings: [" В Африке гориллы.", " В Африке большие.", " Злые крокодилы."],
//         typeSpeed: 70,
//         backDelay: 1500,
//         startDelay: 2500,
//         loop: true,
//         loopCount: 2,
//         contentType: 'html',      
//     });

// });




// Переключение иконок и тайтлов
    $('#icn1').click(function() {
        $('.topBlock__iconItem').removeClass('active');
        $(this).addClass('active');
        $('.topBlock__titleItemText').removeClass('active');
        $('#title1').addClass('active');
    });

    $('#icn2').click(function() {
        $('.topBlock__iconItem').removeClass('active');
        $(this).addClass('active');
        $('.topBlock__titleItemText').removeClass('active');
        $('#title2').addClass('active');
    });

    $('#icn3').click(function() {
        $('.topBlock__iconItem').removeClass('active');
        $(this).addClass('active');
        $('.topBlock__titleItemText').removeClass('active');
        $('#title3').addClass('active');
    });
    


// slider
    var swiper = new Swiper('.slider1', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        // noSwiping: true,
        breakpoints: {
            500: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            }
        }
    });


    //2
    var swiper = new Swiper('.slider2', {
        // loop: false,
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        // centeredSlidesBounds: true,
        // centerInsufficientSlides: true,
        // slidesOffsetBefore
        // spaceBetween: 18,
        // noSwiping: true,
        // breakpoints: {
        //     500: {
        //         slidesPerView: 1,
        //         // pagination: {
        //         //     el: '.swiper-pagination',
        //         //     clickable: true,
        //         // },
        //     }
        // }
    });




});                  




// typed
var $text = "Що входить до складу?";
var $count = 0;
var $maxspeed = 1200;

function character(start, end, text) {
    return text.substring(start,end);
}

function type() {
    var $random = Math.floor(Math.random()* $maxspeed);
    setTimeout(type, $random);
    $('#typing').append(character($count, $count+1, $text));
    $count++;
}
window.addEventListener('scroll', function(e) {
    var el = document.querySelector('.secondBlock');
    if (window.scrollY > el.offsetTop) {
        type();
        
    }
});