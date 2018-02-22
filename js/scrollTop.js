$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 150){
            $('#scroll_cont').fadeIn(),
            $('#scroll_cont').css({'display':'flex'});
        } else{
            $('#scroll_cont').fadeOut();
        }
    });
    $('#scroll_cont').click(function(){
        $('html, body').animate({scrollTop:0}, 500);
    });
});

