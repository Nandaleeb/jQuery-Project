// Simple Weather JavaScript
$(document).ready(function() {

    var apiKey = "7bac3e6bfb3b31486f43c0367de3c519";
    
    // Get weather function
    function getWeather(city) {
        $('.loading').show();
        $('.weather-widget').hide();
        
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
        console.log(url);
        
        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                $('.loading').hide();
                $('#city-name').text(data.name + ', ' + data.sys.country);
                $('#temperature').text(Math.round(data.main.temp) + '°F');
                $('#humidity').text(data.main.humidity + '%');
                $('#wind-speed').text(Math.round(data.wind.speed) + ' mph');
                $('#condition').text(data.weather[0].description);
                $('.weather-widget').fadeIn();
            },
            error: function() {
                $('.loading').hide();
                alert('Weather data not found for ' + city);
            }
        });
    }
    
    // Form submit
    $('#weather-form').submit(function(e) {
        e.preventDefault();
        var city = $('#city-input').val().trim();
        if (city) {
            getWeather(city);
        }
    });
    
    // Quick buttons
    $('.city-button').click(function() {
        getWeather($(this).text());
    });

    // Hamburger menu toggle
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });

 // Logo color change - WORKING
    setInterval(function() {
        var colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('.logo').css('color', randomColor);
    }, 2000);
    

});