$(document).ready(function($){
    $(function() {
        var a, e, t;
        return $("ul.navbar-nav li a[href*=#]").click(function() {
            var a, e;
            return location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname && (a = $(this.hash),
                a = a.length && a || $("[name=" + this.hash.slice(1) + "]"),
                a.length) ? (e = a.offset().top - 98,
                $("html,body").animate({
                    scrollTop: e
                }, 1e3),
                !1) : void 0
        }),
            t = window.location.href.split("#"),
            window.location.href[1] && (a = $("#" + t[1]),
                a.length) ? (e = a.offset().top - 0,
                $("html,body").animate({
                    scrollTop: e
                }, 1e3),
                !1) : void 0
    });
    $('.slider_intro').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000
    });
    $('.slider_intro--about').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000

    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider_intro',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false
    });
    $('.slider_recommend').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            }
        ]
    });
    //.slider_quote_people
    $('.slider_quote_people').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider_quote_medios').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        eautoplaySpeed: 5000,
    });
    $('.slider_about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        eautoplaySpeed: 4000,
    });
    $(document).on("scroll", function(){
        if
        ($(document).scrollTop() > 50){
            $("#header").addClass("navbar_onscroll");
            $("#header").addClass("fixed-top");
        }
        else
        {
            $("#header").removeClass("navbar_onscroll");
            $("#header").removeClass("fixed-top");
        }
    });
    $(document).on("scroll", function(){
        if
        ($(document).scrollTop() > 50){
            $("#logo").addClass("logo_size");
        }
        else
        {
            $("#logo").removeClass("logo_size");
        }
    });
    // Validacion FF
    $('#submit').click(function(){
        var name        = $("#name").val();
        var email       = $("#email").val();
        var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var asunto     = $("#asunto").val();
        var message    = $("#message").val();

        if(name == "" || email == "" || asunto == "" || message == "" ){
            if(name == ""){
                $(".name + .error").addClass("i");
                $("#name").focus();
                return false;
            }else{
                $(".name + .error").removeClass("i");
            }
            if(email == "" || !validacion_email.test(email)){
                $(".email + .error").addClass("i");
                $("#email").focus();
                return false;
            }else{
                $(".email + .error").removeClass("i");
            }
            if(asunto == ""){
                $(".asunto + .error").addClass("i");
                $("#asunto").focus();
                return false;
            }else{
                $(".asunto + .error").removeClass("i");
            }
            if(message == ""){
                $(".message + .error").addClass("i");
                $("#message").focus();
                return false;
            }else{
                $(".message + .error").removeClass("i");
            }
        }else{
            $(".message + .error").removeClass("i");
            var datos = '&name=' + name +
                '&email=' + email +
                '&asunto=' + asunto +
                '&message=' + message;
            $.ajax({
                method:"Post",
                url:"contact.php",
                dataType:"json",
                data:datos,
            }).done(function( msg ){
                if(msg.success){
                    $('.alerta p').fadeIn("slow");
                    $('.alerta p').html('Muchas Gracias por contáctarnos, pronto nos estaremos comunicando contigo.');
                    $('#name').val("");
                    $('#email').val("");
                    $('#asunto').val("");
                    $('#message').val("");
                }else{
                    $('.alerta p').fadeIn("slow");
                    $('.alerta p').html('Error, intente más tarde por favor.');
                }
            });
            return false;
        }
    });
});
AOS.init();