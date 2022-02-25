function slideSwitch() {
   var $active = $('.header_disp img.active');

   if ( $active.length == 0 ) $active = $('.header_disp img:last');

   var $next =  $active.next().length ? $active.next()
      : $('.header_disp img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "slideSwitch()", 1000 );
});

$(function() {
    $('.slider').slick({
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '20%',
        slideToShow: 1,
        focusOnSelect: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false
                }
            }
        ]
    });
});

$(function(){
 $('.js-reserveAccess_tel').on('click',function(){
      $('.js-modal-phone-reserve').fadeIn(1000);
    });
$('.js-reserveAccess_web').on('click',function(){
        $('.js-modal-web-reserve').fadeIn(1000);
    });
            $('.js-btn-close').on('click',function(){
            $('.js-modal-phone-reserve').hide();
            $('.js-modal-web-reserve').hide();
        });
});

//Modal for products
$(function(){    
    $('.js-products-item').hover(   
        function(){
        console.log($(this));    
        $(this).children('.modal').show();
    },
        function(){
        $(this).children('.modal').hide();
    });
});

$(function(){    
    $('.js-kitsuke-item').hover(   
        function(){
        console.log($(this));    
        $(this).children('.modal').show();
    },
        function(){
        $(this).children('.modal').hide();
    });
});

$(function(){
    $('.js-kitsuke-item-1').hover(function(){
        $('.js-kitsuke-desc-1').show();
    },function(){
        $('.js-kitsuke-desc-1').hide();
    });
    
    $('.js-kitsuke-item-2').hover(function(){
        $('.js-kitsuke-desc-2').show();
    },function(){
        $('.js-kitsuke-desc-2').hide();
    });
    
      $('.js-kitsuke-item-3').hover(function(){
        $('.js-kitsuke-desc-3').show();
    },function(){
        $('.js-kitsuke-desc-3').hide();
    });
    
     $('.js-kitsuke-item-4').hover(function(){
        $('.js-kitsuke-desc-4').show();
    },function(){
        $('.js-kitsuke-desc-4').hide();
    });
    
     $('.js-kitsuke-item-5').hover(function(){
        $('.js-kitsuke-desc-5').show();
    },function(){
        $('.js-kitsuke-desc-5').hide();
    });
    
     $('.js-kitsuke-item-6').hover(function(){
        $('.js-kitsuke-desc-6').show();
    },function(){
        $('.js-kitsuke-desc-6').hide();
    });
});
$(function(){
　$(window).scroll(function (){
    $('.js-effect-fade').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
            $(this).addClass('js-effect-scroll');
        }
    });
　});
});



