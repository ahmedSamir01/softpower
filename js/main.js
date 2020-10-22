/*global $, alert, console*/

$(function () {
    
    "use strict";
    
    // adjust header height
    
    var myHeader = $(".header"),
        myBx = $(".bxslider"),
        sc = $('.scrollToTop');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        $(".bxslider").each(function () {
            $(this).css('paddingTop', ($(window).height() - $(".bxslider li").height()) / 2);
        
        
        });
    });
    
    // links active class
    
    $(".links li a").on("click", function () {
        
        $(this).parent().addClass("active").siblings().removeClass("active");
        
    });
    
    // smooth scroll
    
    
    $(".navbar ul li a").on("click", function (e) {
        
        e.preventDefault();
        
        if ($(this).data('scroll') === "home") {
            
            $("html, body").animate({
            
                scrollTop: 0
           
            }, 1000);
            
        } else if ($(this).data('scroll') === "about") {
            
            $("html, body").animate({
            
                scrollTop: $("#" + $(this).data('scroll')).offset().top - 120
           
            }, 1000);
            
        } else if ($(this).data('scroll') === "testimonials") {
            
            $("html, body").animate({
            
                scrollTop: $("#" + $(this).data('scroll')).offset().top - 110
           
            }, 1000);
        
        } else if ($(this).data('scroll') === "services") {
            
            $("html, body").animate({
            
                scrollTop: $("#" + $(this).data('scroll')).offset().top
           
            }, 1000);
            
        } else if ($(this).data('scroll') === "contact") {
            
            $("html, body").animate({
            
                scrollTop: $("#" + $(this).data('scroll')).offset().top
           
            }, 1000);
        
        }
    });
    
    // sync home link
    
    
    $(window).scroll(function () {
        
        $(".block").each(function () {
        
            if ($(window).scrollTop() > $(this).offset().top - 120) {
                
                var blockID = $(this).attr("id");
                
                $(".navbar a").removeClass("active");
                
                $(".navbar li a[data-scroll='" + blockID + "']").addClass("active");
                
            }
        
        });
        
        // create top icon
        
        var sc = $('.scrollToTop');
        
        if ($(window).scrollTop() >= 1000) {
            
            if (sc.is(':hidden')) {
                
                sc.fadeIn();
            
            }
            
        } else {
            
            sc.fadeOut();
            
        }
        
    });
    
    sc.on("click", function (e) {
            
        e.preventDefault();
            
        $("html, body").animate({
               
            scrollTop: 0
               
        }, 2000);
            
    });
    
    //  trigger the bx slider
    
    $(document).ready(function () {
        
        myBx.bxSlider({
            pager: false
            
        });
    });

    
    // put bxslider in center
    
    $(".bxslider").each(function () {
      
        $(this).css('paddingTop', ($(window).height() - $(".bxslider li").height()) / 2.5);
        
    });
    
    $(".body").ready(
        
        $(".header .bxslider li h2").fadeIn(2200, function () {
            
            $(".header .bxslider li p").fadeIn(800, function () {
                
                $(".header .bxslider li button").fadeIn(800);
                
            });
            
        })
    
    );
    
    // fade in&out team
    
    
    $(".pub").on("mouseover", function () {
    
        $(this).find(".pic .overlay").fadeIn(700);
        $(this).find("h2").fadeIn(700);
        $(this).find("span").fadeIn(700);
                
            
    });
                        
    
    $(".pub").on("mouseleave", function () {
    
        $(this).find("span").fadeOut(300, function () {
            
            $(this).siblings("h2").fadeOut(300, function () {
            
                $(this).parents(".pub").find(".pic .overlay").fadeOut(300);
            
            });
            
        });
          
    });
    
    
    
    (function mytest() {
        
        $(".testi .active").each(function () {
           
            if (!$(this).is(":last-child")) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass("active").next().addClass("active").fadeIn(1000);
                    
                    mytest();
                    
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass("active");
                    
                    $(".testi .opin").eq(0).addClass("active").fadeIn(1000);
                    
                    mytest();
                    
                });
                
            }
            
        });
        
    }());
    
    // trigger nice scroll
    
    $("html").niceScroll({
        
        cursorborder: 0,
        cursorborderradius: '25px',
        cursorwidth: '7px',
        cursorcolor: 'rgba(250, 155, 87, 0.87)'
        
    });
    

});


