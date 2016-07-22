
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function ()
{
    $('a.page-scroll').bind('click', function (event)
    {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //Progress bar animation
    $(window).scroll(function ()
    {
        var win = $(window),
            scrolled = win.scrollTop();
        if (scrolled > 600) {
            $.each($('div.progress-bar'), function ()
            {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });            
        }
    });

    // Initialize WOW for element animation
    new WOW().init();

});
$(function ()
{
    $(window).on("load resize", function ()
    {
        $(".fill-screen").css("height", window.innerHeight);
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function ()
{
    $('.navbar-toggle:visible').click();
});

// Closes the Responsive Menu on Click outside Menu
$('body > *').not('nav').click(function ()
{
    if (!$('button.navbar-toggle').hasClass('collapsed')) {
        $('.navbar-toggle:visible').click();
    }  
});

// Parallex scrolling with stellar.js
//$(window).stellar();