$(function(){
    // $('body').toggleClass('loaded');
   // $(document).ready(function() {
   setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 2500);     
   // });
   //$('.drop-toggle').dropdown();
   // console.log($(".nav-item").find(".selected"));
    $(".nav-item").on('click',function(){
        console.log($(this).index())
       $(this).addClass('selected').siblings().removeClass('selected');
       navIndex = $(this).index();
       $($(".content-item").get(navIndex)).css("display","block")
         .siblings().css("display","none");
       
    })
    /* $("#left").on('click',function(){
        $(".nav-item").hasClass("selected").index();
    }) */
})