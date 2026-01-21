// Simple Contact JavaScript
$(document).ready(function() {
    // Mobile Navigation Toggle
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });
    // Logo color change
    setInterval(function() {
        var colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('.logo').css('color', randomColor);
    }, 2000);
    // Form validation
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        
        var isValid = true;
        $('.error').hide();
        
        // Validate name
        var name = $('#name').val();
        if (name.length < 2) {
            $('#name-error').text('Name must be at least 2 characters').show();
            isValid = false;
        }
        
        // Validate email
        var email = $('#email').val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#email-error').text('Please enter a valid email').show();
            isValid = false;
        }
        
        // Validate phone
        var phone = $('#phone').val();
        if (phone.length < 10) {
            $('#phone-error').text('Phone must be at least 10 digits').show();
            isValid = false;
        }
        
        // Validate message
        var message = $('#message').val();
        if (message.length < 10) {
            $('#message-error').text('Message must be at least 10 characters').show();
            isValid = false;
        }
        
        if (isValid) {
            alert('Thank you! Your message has been sent.');
            $(this)[0].reset();
        }
    });
    
    // Focus effects
    $('input, textarea, select').focus(function() {
        $(this).parent().addClass('focused');
    }).blur(function() {
        $(this).parent().removeClass('focused');
    });

    // Back to Top Button
    var backToTop = $('#back-to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            backToTop.addClass('show');
        } else {
            backToTop.removeClass('show');
        }
    });

    backToTop.click(function() {
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});