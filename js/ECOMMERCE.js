var myNav = document.querySelectorAll('header .container Ul li');


myNav.forEach(li => {
    li.addEventListener('click',function(){
        myNav.forEach(myLi => {
            myLi.classList.remove('click');
        });
        this.classList.add('click');
    });
});


var my_Btn_nav = document.getElementById('click'),

    my_Menu = document.querySelector('ul');

    my_Btn_nav.addEventListener('click',function(){

        my_Menu.classList.toggle('height-click');

    });

$(document).ready(function(){

    

   $("li a").on("click",function(event){
    
        event.preventDefault();
        var C = $(this).parent().data('scroll'),
            X = $('#'+C).offset();
         
        $('html,body').animate({
            scrollTop : X.top+2
        },1000);
   });

   $(window).scroll(function(){

       if($(this).scrollTop() > 100){
            $('nav').css({
                "position" : "fixed",
                "top" : "0",
                "left" : "0",
                "backgroundColor" : "rgba(240, 240, 240,.9)"
            });
            $('nav').animate({
                height : "50"
            },400);
            $('body').css(
                "paddingTop",
                $('nav').innerHeight()
            );
       }else{
            $('nav').css("position","static");
            $('body').css("paddingTop",0);
       }

       

       $(".JQ").each(function(){
           if($(this).offset().top <= $('html').scrollTop() ){
                

               var idJ = $(this).attr('id');
                $('ul li').each(function(){
                     if($(this).data('scroll') === idJ){
                        $(this).addClass('click').siblings().removeClass('click');
                     }
                });



           }
       });

       if($(window).scrollTop() > $(".header").innerHeight()){

            if( $(".scroll-to-top").is(":hidden")) {
                $(".scroll-to-top").fadeIn(400);
            }
       }else{
            if( $(".scroll-to-top").is(":visible")) {
                $(".scroll-to-top").fadeOut(400);
            }
       }



   })

   $(".scroll-to-top").on('click',function(){

       $('html').animate({
           scrollTop : '0'
       })

   });




});    


$(document).ready(function(){


    $('.main img:not(:first-of-type)').on('click',function(){

           $(this).addClass('active').siblings().removeClass('active')
           $('.main img:first-of-type').hide().attr('src',$(this).attr('src')).fadeIn(500)

    })

    $('i.fa-chevron-right').on('click',function(){
            
        if( $('.active').is(':last-child') ){
            $('img').eq(1).click();
        }else{
            $('.active').next().click()
        }

    })

    $('i.fa-chevron-left').on('click',function(){

        $('.active').prev().click()

    })

})