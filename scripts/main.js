// cash
var doc = document;

// add event
$(document).ready(function() {
    
    $(document).on("scroll", onScroll);
    
    $("a").click(function(e) {
        
        if($(this).attr("href").indexOf("#") === 0)
        {
            var hash = $(this).attr("href");
        
            var target = $(hash);

            $("html, body").animate( 
                {
                    scrollTop: target.offset().top
                }, 
                700, 
                function() 
                {
                    window.location.hash = hash;  
                }
            );
        }
        
        return true;
    });

    $('.bxslider').bxSlider();
    
});

// change active with scrolling
function onScroll() {
    
    var scroll_top = $(document).scrollTop();

    $("#main-menu a").each(function () {
        
        var hash = $(this).attr("href");
        
        var target = $(hash);
        
        if ((target.position().top <= scroll_top + (target.outerHeight())/2) && (target.offset().top + target.outerHeight() > scroll_top)) 
        {
            
            $("a.active").removeClass("active");
            
            $(this).addClass("active"); 
            
        } 
        else 
        {
            $(this).removeClass("active");
        }
    });
}