$(function(){
    console.log($(".nav-item").find(".selected"));
    $(".nav-item").on('click',function(){

       $(this).addClass('selected').siblings().removeClass('selected');
       navIndex = $(this).index();
       $($(".content-item").get(navIndex)).css("display","block")
         .siblings().css("display","none");
       
    })
    /* $("#left").on('click',function(){
        $(".nav-item").hasClass("selected").index();
    }) */
})