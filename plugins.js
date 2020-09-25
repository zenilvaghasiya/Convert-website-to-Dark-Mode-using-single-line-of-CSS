//JQuery code

$('.am').on('click', function(){
    
    $('.circle').addClass('toggle')  
    $('.night').fadeOut();
    $('.switch').css('background','#84d8fc');
    $('.circle span').addClass('light');
    $(this).addClass('active').siblings().removeClass('active');
})

$('.pm').on('click', function(){
    $('.circle').removeClass('toggle')    
    $('.night').fadeIn();
    $('.switch').css('background','#0a0b0c');
    $('.circle span').removeClass('light');
    $(this).addClass('active').siblings().removeClass('active');
})
