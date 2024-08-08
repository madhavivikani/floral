$(document).ready(function(){
    $('#one').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        animateIn:true,
        animateOut:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
    new WOW().init();
    
$('#two').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        animateIn:true,
        animateOut:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
})
    new WOW().init();
    
    $('#three').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        animateIn:true,
        animateOut:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
    new WOW().init();
    
    $('#four').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        animateIn:true,
        animateOut:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
    new WOW().init();
$('#five').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        animateIn:true,
        animateOut:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
})
    

    $('#gallery_slider').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    new WOW().init();
    var owl = $('.owl-carousel');
    owl.owlCarousel();
owl.on('changed.owl.carousel', function(event) {
    new WOW().init();
})
    new WOW().init();
    var owl = $('.owl-carousel');
    owl.owlCarousel();
owl.on('changed.owl.carousel', function(event) {
    new WOW().init();
})



});
