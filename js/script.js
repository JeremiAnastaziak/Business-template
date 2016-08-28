  $(document).ready(function(){

    

    $(document).on("scroll resize",function() {

        $("nav").toggleClass("shrink", ($(this).scrollTop() > 50) && ($(window).width() > 750));

        var scrollPos = $(document).scrollTop()+230;
        $('.navbar-nav > li > a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-nav > ul > li > a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
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
            scrollTop: $(".scroll_destination").offset().top -80
        }, 1500);
    });

    //smoothscroll
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        $(document).off("scroll");
        
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
});

    
