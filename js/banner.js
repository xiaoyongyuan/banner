$(function () {
    var ul = $(".container").find("ul");
    var oneWidth = $(".container").find("ul li").eq(0).width();//获取ul宽度
    var number = $(".container").find(".pointer span");
    var timer = null;
    var sw = 0;//设置图片的初始大小
    /*控制小图片的切换样式*/
    number.on("click",function (){
        $(this).addClass("on").siblings("span").removeClass("on");
        sw=$(this).index();
        ul.animate({
            "right":oneWidth*sw,    //ul标签的动画为向左移动；
        });
    });
    /*自动切换图片*/
    timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
    },2000);

    /*左右按钮的控制*/
    $(".next").stop(true,true).click(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
    });
    $(".prev").stop(true,true).click(function (){
        sw--;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
    });
    /*小图片的触发事件*/
    $(".container").hover(function(){
        $(".next,.prev").animate({
            "opacity":1,
        },1000);
        clearInterval(timer);
    },function(){
        $(".next,.prev").animate({
            "opacity":0.5,
        },1000);
        timer = setInterval(function (){
            sw++;
            if(sw==number.length){sw=0};
            number.eq(sw).trigger("click");
        },2000);
    })

});