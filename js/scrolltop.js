
$(function () {
    $("#top").css("cursor", "pointer");
    $("#top").on("click", function () {
        $("html").animate({ scrollTop: 0 }, 500);
    });
    // 처음 탑 초기화
    var scrollNum = $(window).scrollTop();
    if (scrollNum > 200) {
        $("#top").css("display", "block");
    } else {
        $("#top").css("display", "none");
    }

    $(window).on("scroll", function () {
        scrollNum = $(window).scrollTop();
        console.log(scrollNum);

        if (scrollNum < 200) {
            $("#top").css("display", "none");
        } else if (scrollNum >= 200 && scrollNum < 550) {
            $("#top").css("display", "block");
            $("#top").css("color", "white");
        } else {
            $("#top").css("color", "black");
        }

        if(window.innerWidth < 700){
            $("#top").css("display","none")
        } else {
            $("#top").css("display","block")
        }
    });
});