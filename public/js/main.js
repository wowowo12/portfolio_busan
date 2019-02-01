$('#header').tubular({videoId:'YDRygCRbOg8'});

$(".artist>li").hover(function(){
    $(this).find(".img").css({"transform":"scale(1.2)","opacity":"0.6"});
    $(this).find(".art_logo").stop().fadeIn(100);
},function(){
    $(this).find(".img").css({"transform":"scale(1)","opacity":"1",});
    $(this).find(".art_logo").stop().fadeOut(100);
});
$(".bars").click(function(){
    $(".nav").stop().slideToggle();
});
function autoHeight(){
    $(".hei_wrap").imagesLoaded().done(heiCalc);
    $(window).resize(heiCalc);
    function heiCalc(pa, me){
        $(".hei_wrap").each(function(){
            $(this).height($(this).find(".hei_elem").height());
        });
       
    }
}
autoHeight();
var wid=$(window).width()
if(wid<480){
$("#time_table .btn").click(function(){
    $(".time_rt").css({"display":"none"});
    $(".time_lt").css({"display":"block"});
});
}

$(window).scroll(function(){
    $(".samrock").addClass("samrock_ani");
});
var scTop = $(window).scrollTop();
console.log(scTop);
var gap = [];
var now = 0;
$(window).resize(function(){
    $(".page").each(function(i){
        gap[i] = $(this).offset().top;
    });
}).trigger("resize");
$(window).on("mousewheel DOMMouseScroll", wheelFn);
function wheelFn(e){
    var dir = e.originalEvent.wheelDelta;
    scTop= $(window).scrollTop();

    for(var i = 0; i <gap.length; i++){
        if(scTop <= gap[i]){
            now= i;
            break;
        }
    }
    if(dir>0){
        if(now>0)now--;
    } else{
        if (now< gap.length - 1) now++;
     }
     if(now=4){
         $(".news_img1").addClass("news_img1_ani");  
         $(".news_img2").addClass("news_img2_ani");       
     }
   
     if (scTop + 300 > gap[0]) {
        $(".ab_ban_txt>hr:nth-of-type(1)").addClass("samrock_hr_ani");
        $(".ab_ban_txt>hr:nth-of-type(2)").addClass("samrock_hr2_ani");
        $(".ab_ban_txt>h2:nth-of-type(1)").addClass("samrock_txt_ani");
        $(".ab_ban_txt>h2:nth-of-type(2)").addClass("samrock_txt_ani");
        $(".ab_ban_txt>h2:nth-of-type(3)").addClass("samrock_txt_ani");
    }
}
