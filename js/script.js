  $(document).ready(function(){

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
            scrollTop: $(".scroll_destination").offset().top -80
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
});

    
