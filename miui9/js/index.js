$(function(){
    var start=0;
	window.onscroll = function(){
        lazyLoadDivBgImg();
        var scroll = $(window).scrollTop();
        if ($(".current_nav").length) {
        	$(".current_nav").removeClass("current_nav");
        };
        //console.log(scroll);
        if (scroll < 1120) {
        	$(".float_nav").hide();
        }else if(scroll >= 1120 && scroll < 13300){
			$(".float_nav").show();
			$(".float_nav ul li").eq(0).addClass("tab_0_hover");
			$(".float_nav ul li").eq(1).removeClass("tab_1_hover");
			$(".float_nav ul li").eq(2).removeClass("tab_2_hover");
        }else if (scroll >= 13300 && scroll < 16900) {
        	$(".float_nav").show();
        	$(".float_nav ul li").eq(0).removeClass("tab_0_hover");
			$(".float_nav ul li").eq(2).removeClass("tab_2_hover");
        	$(".float_nav ul li").eq(1).addClass("tab_1_hover");
        }else if (scroll >= 16900) {
        	$(".float_nav").show();
        	$(".float_nav ul li").eq(0).removeClass("tab_0_hover");
        	$(".float_nav ul li").eq(1).removeClass("tab_1_hover");
        	$(".float_nav ul li").eq(2).addClass("tab_2_hover");
        }
        if (window["movingIconFlag"] && scroll >= 18223) {
            showMovingIcon();
        };
    };
    $(window).on("scroll",showAnimate);
    $(".float_nav>ul>li").click(function(){
    	var index = $(".float_nav>ul>li").index($(this));
    	console.log(index);
    	$(".current_nav").removeClass("tab_" + index + "_hover");
    	var scrollPosition = ["1120px","13400","16900px"]
    	$("body,html").animate({scrollTop:scrollPosition[index]},1000);
    });
    $(".to_top").click(function(event) {
    	$("body,html").animate({scrollTop: "0px"},300);
    });
    $(".share_weixin").hover(function(){
    	$(".share_weixin img").show();
    },function(){
    	$(".share_weixin img").hide();
    });
    $(".share_weibo").click(function(){
    	shareWeibo();
    });
    $(".share_weibo").hover(function(){
    	$(".share_weibo img").show();
    },function(){
    	$(".share_weibo img").hide();
    });

    function shareWeibo(){
    	var title = "【#MIUI9#正式发布，全新MIUI系统“快如闪电”！】①小米超10项黑科技打造闪电MIUI9，持续使用不卡顿；②全新发布传送门、信息助手、查找照片、分屏等功能，全面提升手机“快体验”；③7月27日启动开发版内测，未来升级计划支持几乎所有小米机型！更多新变化戳下图↓";
        var rLink = 'http://www.miui.com/zt/miui9/index.html';
        var site = '';
        var pic = 'http://www.miui.com/zt/miui9/images/miui_show_268.png';
        window.open('http://service.weibo.com/share/share.php?title=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(rLink) + '&appkey=' + encodeURIComponent(site) + '&pic=' + encodeURIComponent(pic), '_blank', 'scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');
    }

    function showAnimate(){
        $(window).off("scroll",showAnimate);
        var bottom = 3087 - document.documentElement.clientHeight;
        var scroll = $(window).scrollTop();
        if ((scroll>2290 - document.documentElement.clientHeight) && (scroll<bottom-100) && (start<scroll)) {
            $("body,html").animate({scrollTop: bottom + "px"},100,function(){
                var callback = function(){
                    $(window).on("scroll",showAnimate);
                    start = scroll;
                }
                showImages();
            });
        }else{
            $(window).on("scroll",showAnimate);
            setTimeout(function(){start = scroll},0);
        }
    }

    window["animateFlag"] = true;
    window["movingIconFlag"] = true;

    function pictureShow(){
        if (window["animateFlag"]) {
            window["animateFlag"] = false;
            $(".press").attr("src","images/miui_show_280.png").show();
            setTimeout(function(){
                $(".press").hide().attr("src","");
                $(".blue_bg").animate({"opacity":"1"},600);
                $(".circle").show().animate({
                    width: "900px",
                     height: "900px",
                    left: "170px",
                    top: "971px"
                },800,function(){
                    $(".circle").hide();
                    $(".tips").fadeIn("400", function() {
                        $(".press").css("top","1710px");
                        $(".press").attr("src","images/miui_show_280.png").show();
                        setTimeout(function(){
                            $(".press").hide().attr("src","");
                            $(".part_3 h2,.part_3 p").fadeOut("fast");
                            $(".tips").hide();
                            
                            $(".animate_1").animate({
                                backgroundPositionY: "400px"
                            },600,function(){
                                $(".picture").show();
                                $(".picture").animate({
                                    backgroundPositionY: "100px"
                                },400,function(){
                                    $(".picture").css("backgroundColor","rgba(0,0,0,0.3)");
                                    $(".result").fadeIn();
                                });
                            });
                        },200)
                    });
                })
            },200);
        };
    }
    var circle;

    function showImages(){
        if (window["animateFlag"]) {
            window["animateFlag"] = false;
            $(".press").attr("src","new_images/miui_show_280.png").show();
            $(".press").on("click",press_1);
            $(".bg_circle").show();
            circle = setInterval(function(){
                $(".bg_circle").animate({
                    left: "512px",
                    top: "1208px",
                    width: "84px",
                    height: "84px",
                    opacity: "0"
                },1000,function(){
                    $(".bg_circle").css({
                        left: "534px",
                        top: "1230px",
                        width: "40px",
                        height: "40px",
                        opacity: "0.6"
                    });
                });
            },1000)
        }
    }

    function press_1(){
        $(".press").attr("src","").hide();
        $(".bg_circle").hide();
        clearInterval(circle);
        $(".bg_circle").stop();
        $(".bg_circle").hide();
        $(".tips").show().animate({
            backgroundPositionX: "-54px"
        },"400", function() {
            $(".press").css("top","1461px");
            $(".press").off("click",press_1);
            $(".press").attr("src","new_images/miui_show_280.png");
            $(".press").fadeIn("fast");
            $(".press").on("click",press_2);
            $(".bg_circle").css({
                left: "534px",
                top: "1461px",
                width: "40px",
                height: "40px",
                opacity: "0.6"
            }).show();
            circle = setInterval(function(){
                $(".bg_circle").animate({
                    left: "512px",
                    top: "1439px",
                    width: "84px",
                    height: "84px",
                    opacity: "0"
                },1000,function(){
                    $(".bg_circle").css({
                        left: "534px",
                        top: "1461px",
                        width: "40px",
                        height: "40px",
                        opacity: "0.6"
                    });
                });
            },1000)
        });
    }

     function press_2(){
        $(".press").hide().attr("src","");
        $(".press").off("click",press_2);
        $(".bg_circle").hide();
        $(".bg_circle").stop();
        clearInterval(circle);
        $(".tips").hide();
        $(".picture").show();
        $(".picture").animate({
            backgroundPositionY: "90px"
        },400,function(){
            $(".picture").css("backgroundColor","rgba(0,0,0,0.3)");
        });
     }

    $(".part_22_p_0").click(function(){
    	$(".part_22_img_0").css("backgroundImage","url(images/miui_show_94_small.png)");
    	$(".part_22_img_1").css("backgroundImage","url(images/miui_show_93.png)");
    	$(".part_22_img_2").css("backgroundImage","url(images/miui_show_95_small.png)");
    	$(".tags p").removeClass("part_22_current_p");
    	$(".part_22_p_0").addClass("part_22_current_p");
    });
    $(".part_22_p_1").click(function(){
    	$(".part_22_img_0").css("backgroundImage","url(images/miui_show_95_small.png)");
    	$(".part_22_img_1").css("backgroundImage","url(images/miui_show_94.png)");
    	$(".part_22_img_2").css("backgroundImage","url(images/miui_show_93_small.png)");
    	$(".tags p").removeClass("part_22_current_p");
    	$(".part_22_p_1").addClass("part_22_current_p");
    });
    $(".part_22_p_2").click(function(){
    	$(".part_22_img_0").css("backgroundImage","url(images/miui_show_93_small.png)");
    	$(".part_22_img_1").css("backgroundImage","url(images/miui_show_95.png)");
    	$(".part_22_img_2").css("backgroundImage","url(images/miui_show_94_small.png)");
    	$(".tags p").removeClass("part_22_current_p");
    	$(".part_22_p_2").addClass("part_22_current_p");
    });

    function dialogClose() {
        $(".z_index_dialog").hide();
        $(".dialog_content").hide();
        $(".dialog_content .dialog_close").unbind("click", dialogClose);
        var miui9_0 = document.getElementById("miui9_0");
        miui9_0.pause();
    }

    $(".part_0 h3").click(function(){
        $(".z_index_dialog").show();
        var content_width = $(".z_index_dialog").width() / 2 - 400;
        var content_height = $(".z_index_dialog").height() / 2 - 225;
        $(".dialog_content").css("width", "800px");
        $(".dialog_content").css("height", "450px");
        $(".dialog_content").css("left", content_width);
        $(".dialog_content").css("top", content_height);
        $(".dialog_content").show();
        $(".dialog_content .dialog_close").bind("click", dialogClose);
        var miui9_0 = document.getElementById("miui9_0");
        miui9_0.load();
        miui9_0.play();
    })

    $(".part_17 button").click(function(){
        $(".part_17 button").hide();
        $(".part_17 .dialog_close").show();
        $(".part_17 video").show();
        $("#part_17_video_1").get(0).play();
        $(".part_17 .dialog_close").bind("click", function(){
            $(".part_17 .dialog_close").hide();
            // $(".part_17 video").hide();
            $(".part_17 video").get(0).load();
            $(".part_17 button").show();
        });
    })
    $(".part_18 button").click(function(){
        $(".part_18 button").hide();
        $(".part_18 .dialog_close").show();
        $(".part_18 video").show();
        $("#part_18_video_1").get(0).play();
        $(".part_18 .dialog_close").bind("click", function(){
            $(".part_18 .dialog_close").hide();
            // $(".part_18 video").hide();
            $(".part_18 video").get(0).load();
            $(".part_18 button").show();
        });
    })
    $(".part_19 button").click(function(){
        $(".part_19 button").hide();
        $(".part_19 .dialog_close").show();
        $(".part_19 video").show();
        $("#part_19_video_1").get(0).play();
        $(".part_19 .dialog_close").bind("click", function(){
            $(".part_19 .dialog_close").hide();
            // $(".part_19 video").hide();
            $(".part_19 video").get(0).load();
            $(".part_19 button").show();
        });
    })

    function lazyLoadDivBgImg(){
        var windowHeight = $(window).height();
        var divImgs = $(".imgLazyLoad").not(".img_loaded");
        var scrollTop = $(window).scrollTop();
        $.map(divImgs, function(item, index) {
            var divImg = divImgs.eq(index);
            var offset = divImg.offset();
            if (offset.top < windowHeight + scrollTop + 500) {
                divImg.addClass('img_loaded');
                divImg.css("backgroundImage",divImg.data("url"));
            };
            return "";
        })
    }
    lazyLoadDivBgImg();

    function showMovingIcon(){
        if (window["movingIconFlag"]) {
            window["movingIconFlag"] = false;
            $(".part_21_li_0 img").attr("src","images/miui_show_108.gif");
            $(".part_21_li_1 img").attr("src","images/miui_show_109.gif");
            $(".part_21_li_2 img").attr("src","images/miui_show_110.gif");
            $(".part_21_li_3 img").attr("src","images/miui_show_111.gif");
            $(".part_21_li_4 img").attr("src","images/miui_show_112.gif");
        };
    }
})