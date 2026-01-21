// Simple About JavaScript
$(document).ready(function() {
    // Mobile Navigation Toggle
   
        $('.hamburger').click(function() {
            $(this).toggleClass('active');
            $('.nav-menu').toggleClass('active');
        });
        setInterval(function() {
            var colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            $('.logo').css('color', randomColor);
        }, 2000);
      

    // Tabs functionality
    $('.tab-button').click(function() {
        var tabId = $(this).data('tab');
        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('active');
        $(this).addClass('active');
        $('#' + tabId).addClass('active');
    });
    
    // Accordion functionality
    $('.accordion-header').click(function() {
        var $item = $(this).parent();
        var $content = $(this).next();
        
        if ($item.hasClass('active')) {
            $item.removeClass('active');
            $content.slideUp();
        } else {
           // $('.accordion-item').removeClass('active');
           // $('.accordion-content').slideUp();
            $item.addClass('active');
            $content.slideDown();
        }
    });
    
    // Fade in animations - Hide first, then fade in
    $('.about-text').hide().fadeIn(3000);
    $('.about-image').hide().delay(500).fadeIn(3000);

   // Back to top button functionality
    // Show/hide button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    });

    // Back to top button click handler
    $('#back-to-top').click(function() {
        console.log('Back to top button clicked!'); // Debug message
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });


});
