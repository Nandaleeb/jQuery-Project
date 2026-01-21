// Clean and Simple jQuery JavaScript
$(document).ready(function() {
  
    // Mobile Navigation Toggle
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });

    // Close mobile menu when clicking on a link
    $('.nav-link').click(function() {
        $('.hamburger').removeClass('active');
        $('.nav-menu').removeClass('active');
    });
    
    // Remove loading screen
    $('#loading-screen').fadeOut(5000);
    
    // Simple fade-in effects for hero text
    $('.hero-text h1').css('opacity', 0).animate({opacity: 1}, 1000);
    $('.hero-text p').css('opacity', 0).delay(300).animate({opacity: 1}, 2000);
    $('.btn-primary').css('opacity', 0).delay(600).animate({opacity: 1}, 2000);
    
    // Feature card hover effects - WORKING
    $('.feature-card').hover(function() {
        $(this).css({
            'transform': 'translateY(-10px)',
            'background-color': '#3b7caaff',
            'color': '#ffffff',
            'box-shadow': '0 10px 25px 10px rgba(0, 0, 0, 0.2)'
        });
    }, function() {
        $(this).css({
            'transform': 'translateY(10px)',
            'background-color': '#a07899b2',
            'box-shadow': '0 5px 15px 10px rgba(0, 0, 0, 0.1)'
        });
    });
    
    // Simple button click effect - WORKING
    $('.btn-primary').click(function(e) {
        var $btn = $(this);
        var originalHref = $(this).attr('href');
        
        // Brief visual feedback
        $btn.css('background-color', '#21c948ff').text('Loading...');
        
        // Navigate to the page after brief delay
        setTimeout(function() {
            window.location.href = originalHref;
        }, 800);
        
        return false;
    });
    
    // Logo color change - WORKING
    setInterval(function() {
        var colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('.logo').css('color', randomColor);
    }, 2000);
    
    // Scroll effects for header and back-to-top button
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        // Header background change
        if (scroll > 50) {
            $('header').css('background', 'rgba(25, 106, 79, 0.52)');
        } else {
            $('header').css('background', 'rgba(225, 221, 221, 0.95)');
        }
        
        // Back to top button
        if (scroll > 200) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Back to top button click handler
    $('#back-to-top').click(function() {
        console.log('Back to top button clicked!'); // Debug message
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    
});