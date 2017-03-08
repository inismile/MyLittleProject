$(function(){
    //导航
    $("#head-list").bind("mouseover",function(){
        $(".listson-wrap").show();
    });
    $(".listson-wrap").bind("mouseleave",function(){
        $(".listson-wrap").hide();
    });

    picChange($("#main-wrap"),$(".con>li"),$('.main-content'),$(".main-f"));

    picChange($(".pic"),$(".list>li"),$('.pic-wrap'),$(".pic>li>img:first"));
    
    //滚动广告
    function picChange(pic,list,wrap,firstobj){
        var len = list.length;
        var index = 0;  //图片序号
        var adTimer;
        list.mouseover(function() {
            index = list.index(this);  //获取鼠标悬浮 li 的index
            showImg(index);
        }).eq(0).mouseover();
        //滑入停止动画，滑出开始动画.
        wrap.hover(function() {
            clearInterval(adTimer);
        }, function() {
            adTimer = setInterval(function() {
                showImg(index)
                index++;
                if (index == len) {//最后一张图片之后，转到第一张
                    index = 0;
                }
            }, 3000);
        }).trigger("mouseleave");
        //图片切换
        function showImg(index) {
            var adWidth = firstobj.width();
            pic.animate({
                "marginLeft": -adWidth * index + "px" 
            }, 1000);
            list.removeClass("bg-on")
                .eq(index).addClass("bg-on");
        }
    }

    picScale($(".pic>li>img"),"1.2","1","2s");
    picScale($(".main-pic"),"1.2","1","1.5s");

    //main2图片缩放
    $(".main2 img").each(function(){
        picScale($(this),"1.2","1","1.5s");
    })
    //main3图片缩放
    $(".main3 img").each(function(){
        picScale($(this),"1.1","1","1s");
    })
	//图标旋转
	$(".rota").each(function(){
		$(this).bind('mouseover',function(){
			move(this).rotate('360').duration('.5s').end();
		})
		$(this).bind('mouseout',function(){
			move(this).rotate('0').duration('.5s').end();
		})
	})

    var timer=null;
    timer=setInterval(topChange,2000)
    function topChange(){
        $(".arrow").animate({
            top:"+=15px"
        },200,function(){
            $(this).animate({
                top:"-=20px"
            },100,function(){
                $(this).animate({
                    top:"+=5px"},200)
            })
        })
    }
	//图片缩放
	function picScale(event,bmul,smul,time){
		event.each(function(){
		$(this).on('mouseover',function(){
			move(this).scale(bmul).duration(time).end();
		})
		$(this).on('mouseout',function(){
			move(this).scale(smul).duration(time).end();
		})
	})
	}
	

    var main3box=$(".mian3-box");
        main3list=$(".main3-list >li");
    for(var i=0;i<main3list.length;i++){
        main3list[i].id=i;
        main3list[i].onmouseover=function(){
            for(var j=0;j<main3box.length;j++){
                main3box[j].style.display="none";
                main3list[j].className="";
            }
                main3box[this.id].style.display="block";
                main3list[this.id].className="bg-on";
        }
    }
    //回到顶部
    var timer=null,
        obtn=document.getElementById("obtn"),
        isTop=true,
        clientHeight=document.documentElement.clientHeight;//获取可视区域高度
    window.onscroll=function(){
        var osTop=document.documentElement.scrollTop||document.body.scrollTop;//获取当前距顶部的高度
        if(!isTop){
            clearInterval(timer);
        }
        isTop=false;
        if(clientHeight<=osTop){
            obtn.style.display="block"
        }else{
            obtn.style.display="none";
        }
    }
    obtn.onclick=function(){
        timer=setInterval(function(){
            var osTop=document.documentElement.scrollTop||document.body.scrollTop;
            var oSpeed=Math.floor(-osTop/6);
            isTop= true;
            document.documentElement.scrollTop=document.body.scrollTop=osTop+oSpeed;
            if(osTop==0){
                clearInterval(timer);
            }
        },30)
    }


})