$(document).ready(() => {

// Переключение иконок и тайтлов
    $('#icn1').click(function() {
        $('.topBlock__iconItem').removeClass('active');
        $(this).addClass('active');
        $('.topBlock__titleItemText').removeClass('active');
        $('.title1').addClass('active');
    });

    $('#icn2').click(function() {
        $('.topBlock__iconItem').removeClass('active');
        $(this).addClass('active');
        $('.topBlock__titleItemText').removeClass('active');
        $('.title2').addClass('active');
    });

    $('#icn3').click(function() {
        $('.topBlock__iconItem').removeClass('active');
        $(this).addClass('active');
        $('.topBlock__titleItemText').removeClass('active');
        $('.title3').addClass('active');
    });

// slider
    var swiper = new Swiper('.slider1', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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
    var tswiper = new Swiper('.slider2', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 0,
            }
        }
    });


    tswiper.on('slideChange', function () {
        var r = "";
        $(".fifthBlock__ring").css("filter", "grayscale(1)");

        setTimeout(function() {
            r = document.querySelector(".sliderSecond .swiper-slide-active").getAttribute("data-swiper-slide-index");

            if(r == "0"){
                $(".fifthBlock__ring--0").css("filter", "unset");
            }
            else if(r == "1"){
                $(".fifthBlock__ring--1").css("filter", "unset");
            }
            else if(r == "2"){
                $(".fifthBlock__ring--2").css("filter", "unset");
            }
            else if(r == "3"){
                $(".fifthBlock__ring--3").css("filter", "unset");
            }
            else if(r == "4"){
                $(".fifthBlock__ring--4").css("filter", "unset");
            }
            else if(r == "5"){
                $(".fifthBlock__ring--5").css("filter", "unset");
            }
            else if(r == "6"){
                $(".fifthBlock__ring--6").css("filter", "unset");
            }
        }, 0);
    });

    // popaps
    // let r = document.querySelector(".topBlock .button");

    // $(".topBlock .button").click(function() {
    //     $('.p').show();
       
    // });

    // popaps img
    
    $("#price2").click(function() {
        $(".popapWrapper__blockImg").css("backgroundImage", "url(../images/slide4.png");
    });
    $("#price1").click(function() {
        $(".popapWrapper__blockImg").css("backgroundImage", "url(../images/slide5.png");
    });


    // quantity plus minus

    $(function() {
 
        (function quantityProducts() {
            var $quantityArrowMinus = $(".quantity-arrow-minus");
            var $quantityArrowPlus = $(".quantity-arrow-plus");
            var $quantityNum = $(".quantity-num");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });

    //popaps
    //1
    
    setTimeout(function() {
        $(".popap_prom").show();
        $("body").css("overflow", "hidden");
    }, 5000)

    $(".button--blue").click(function() {
        $(".popap_prom").show();
        $("body").css("overflow", "hidden");
    });

    $(".button--submit").click(function() {
        if($(".popapWrapper__emailBlock input").val().length > 0){
            $(".popap_prom--1").hide();
            $(".popap_prom--2").css("display", "flex");
        }
    });

    $(".button--close, .button--thanks").click(function() {
        $(".popap_prom").hide();
        $("body").css("overflow", "visible");
        
    });

    //2
    $(".button--buy").click(function() {
        $(".popap_ordering").show();
        $("body").css("overflow", "hidden");
    });

    $(".button--next").click(function() {
        $(".popap_ordering--1").hide();
        $(".popap_ordering--2").show();
        
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
    var el2 = $('.secondBlock__search').offset().top;
    var el3 = $('.secondBlock__descBlock--2').offset().top;
    var el4 = $('.secondBlock__descBlock--3').offset().top;
    
    if (window.scrollY > el.offsetTop) {
        type(); 
        $(".secondBlock__num--1").css("opacity", "1");  
    }
    
    if (window.scrollY > el3) { 
        $(".secondBlock__num--2").css("opacity", "1");
    }
    if (window.scrollY > el4) { 
        $(".secondBlock__num--3").css("opacity", "1");
    }
});