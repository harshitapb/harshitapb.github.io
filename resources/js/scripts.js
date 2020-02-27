$(document).ready(function() {

    // appear-dissapear of the sticky header
    $('.section-features').waypoint(function(direction) {
      
        if (direction == 'down'){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }
    
    // , {
    //     offset: '60px;'
    // }
);

    $('.section_chatbot').waypoint(function(direction) {
        
        if (direction == 'down'){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    });

    // scroll to paymemt/plans section
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });

    //scroll to view more section
    $('.js--scroll-to-showmore').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    // Adding animations
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset : '50%;'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset : '50%;'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset : '50%;'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset : '50%;'
    });

    // mobile navigation
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        nav.slideToggle(200)
    });

    var navstickyevent = document.getElementsByClassName('sticky');  

    
});

function sendemail()
    {
        var email = document.getElementById("emailID").value;
        var subject = ('My permanent subject line');
        var body = ('My permanent body contents');
        document.write('<a href="mailto:' + email + '?subject=' +subject+ '&body=' +body+ '">' + 'Click here to send email as well' + '<'+'/a>');
    }

    function change() {
        var imgopenElement = document.getElementById('open_img');
        var imgcloseElement = document.getElementById('close_img');
        if(imgopenElement){
            imgopenElement.id = "close_img";
            imgopenElement.src = "resources/images/menu-close.png";
            $('.mobile_nav_icon_image').addClass('mobile_nav_icon_closeimage');
            $('.top_nav').addClass('top_nav_background');
            $('.sticky').addClass('sticky_open ');

        } else {
            imgcloseElement.id = "open_img";
            imgcloseElement.src = "resources/images/menu-open.png";
            $('.mobile_nav_icon_image').removeClass('mobile_nav_icon_closeimage');
            $('.top_nav').removeClass('top_nav_background');
            $('.sticky').removeClass('sticky_open');
        }
     }

