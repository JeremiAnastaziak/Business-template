  $(document).ready(function(){

    $('#clients__block__slider').flexslider({
        animation: "slide",
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: false,
        pauseOnHover: true,
        start: function() {
            $.waypoints('refresh');
        }
    });

    $(".flex-control-nav a").text("").html("<i class='fa fa-circle' aria-hidden='true'></i>");

    $(document).on("scroll resize", function() {

        $("nav").toggleClass("shrink", ($(this).scrollTop() > 50) && ($(window).width() > 750));
    });

    $(window).resize(function () { //put your code in window.resize so that it runs when ever window is resized
        if($(window).width() < 750){
        $("nav").addClass("navbar-inverse");
     } else {
        $("nav").removeClass("navbar-inverse");
    }
    }).resize();
        
    $("#arrow_down").on("click", function() {
        $('html,body').animate({
            scrollTop: $("#features").offset().top -80
        }, 1500);
    });

    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        
        $('a').each(function () {
            $(this).removeClass('active');
        })

        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInDown');
    }, {
        offset: '55%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function() {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function() {
        $('.wp8').addClass('animated pulse');
    }, {
        offset: '75%'
    });
});

    
