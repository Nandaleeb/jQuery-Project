// Simple Services JavaScript
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

    // Service card click effect
   $('.service-card').click(function() {
        var service = $(this).data('service');
        showServiceModal(service);
    });

    // Close modal
    $('.close').click(function() {
        $('#serviceModal').fadeOut();
    });

  
    
    // Modal content function
    function showServiceModal(service) {
        const content = {
            web: {
                title: 'Web Development',
                description: 'Full-stack web development with modern technologies and responsive design.'
            },
            mobile: {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile app development for iOS and Android.'
            },
            design: {
                title: 'UI/UX Design', 
                description: 'User-centered design process to create intuitive and engaging interfaces.'
            },
            seo: {
                title: 'SEO Optimization',
                description: 'Search engine optimization to improve your website visibility and ranking.'
            },
            support: {
                title: 'Support & Maintenance',
                description: '24/7 technical support and ongoing maintenance for your digital assets.'
            },
            consulting: {
                title: 'Business Consulting',
                description: 'Strategic consulting to help grow your business with technology solutions.'
            }
        };
        
        $('#modal-title').text(content[service].title);
        $('#modal-description').text(content[service].description);
        $('#serviceModal').fadeIn();
    }


    // Star Rating Widget
    let currentRating = 0;
    
    $('.star').hover(function() {
        const rating = $(this).data('rating');
        highlightStars(rating);
    }, function() {
        highlightStars(currentRating);
    });
    
    $('.star').click(function() {
        currentRating = $(this).data('rating');
        highlightStars(currentRating);
        $('#rating-value').text(currentRating);
        
        // Add feedback animation
        $('.rating-display').css({
            'transform': 'scale(1.2)',
            'color': '#28a745'
        });
        
        setTimeout(function() {
            $('.rating-display').css({
                'transform': 'scale(1)',
                'color': '#007bff'
            });
        }, 500);
    });
    
    function highlightStars(rating) {
        $('.star').each(function(index) {
            if (index < rating) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    // Progress Bar Animation
    $('#update-progress').click(function() {
        $('.progress-fill').each(function() {
            const progress = $(this).data('progress');
            $(this).css('width', progress + '%');
        });
        
        $(this).text('Updated!').css('background', '#28a745');
        setTimeout(() => {
            $(this).text('Update Progress').css('background', '#314dcaff');
        }, 2000);
    });

    // Service card hover effects
    $('.service-card').hover(function() {
        $(this).find('i').addClass('bounce');
    }, function() {
        $(this).find('i').removeClass('bounce');
    });

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
