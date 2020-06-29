$(document).ready(function () {

    $('#cart').hover(function () {
        $('#list-cart').show(function(){
            $('#list-cart').slideDown();
        });
    },function(){
        $('#list-cart').hide();
    });

    $('#search').hover(function(){
        $("#search-form").show(function(){
        })
    },function(){
        $("#search-form").hide();
    });

    $('#slider-home').owlCarousel({
        autoPlay: true,
        navigation: true,
        navigationText: true,
        paginationNumbers: false,
        stopOnHover: true,
        items: 1 ,//10 items above 1000px browser widt
        itemsDesktop: [770, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: false , // betweem 900px and 601px
        itemsTablet: false , //2 items between 600 and 0
        itemsMobile: [375, 1] // itemsMobile disabled - inherit from itemsTablet option
    })

    $('#product-new').owlCarousel({
        autoPlay: true,
        navigation: true,
        navigationText: true,
        paginationNumbers: false,
        stopOnHover: true,
        pagination : false,
        navigationText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [770, 3] , //5 items between 1000px and 901px
        itemsDesktopSmall: [600,2] , // betweem 900px and 601px
        itemsTablet: false, //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    })

    $('#post-new').owlCarousel({
        autoPlay: true,
        navigation: true,
        navigationText: false ,
        paginationNumbers: false,
        stopOnHover: true,
        pagination : false,
        items: 3, //10 items above 1000px browser width
        itemsDesktop: false , //5 items between 1000px and 901px
        itemsDesktopSmall: [600, 2] , // betweem 900px and 601px
        itemsTablet: false, //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    })


    $('#img-click').click(function(){
        let img = $('#img-click').attr('src');
        
        var arr = $('.page-product-col a img');

        for(let i = 0; i < arr.length; i++){
            arr.eq(i).attr('src',img);
        }
    });

});