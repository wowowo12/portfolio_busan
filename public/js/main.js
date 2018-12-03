$('.movie_bg').tubular({videoId:'SC2zteloma4'});

$(".artist>li").hover(function(){
    $(this).find(".img").css({"transform":"scale(1.2)","opacity":"0.6"});
    $(this).find(".art_logo").stop().fadeIn(100);
},function(){
    $(this).find(".img").css({"transform":"scale(1)","opacity":"1",});
    $(this).find(".art_logo").stop().fadeOut(100);
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