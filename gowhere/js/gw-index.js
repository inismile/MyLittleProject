// JavaScript Document<script type="text/javascript">
window.onload=function(){
    nav();          // 导航框tab切换
    bookchange();   // book选项卡切换
    borderchange(); // 添加边框
    picplay();      // 轮播图函数
    showTab();
    traShow();     //travl旅行攻略
    // 登录框
    var a=document.getElementById("enter");
        a.onclick=function(){
            show();
        }
        function show(){
        //获取页面的高度和宽度
            var sHeight=document.documentElement.scrollHeight;
            var sWidth=document.documentElement.scrollWidth;
            //获取可视区域的高度
            var wHeight=document.documentElement.clientHeight;
            //创建遮罩层
            var omask=document.createElement("div");
                omask.id="mask";
            //插入遮罩层
            omask.style.height=sHeight+"px";
            omask.style.width=sWidth+"px";
            document.body.appendChild(omask);
            //创建登陆层
            var ologon=document.createElement("div");
                ologon.id="logon";
                ologon.innerHTML="<div class='logon-top'>登陆<span id='close'></span></div><form  class='logon-f'>账号：<input type='text' name='账号' placeholder='请输入你的用户名/手机/邮箱' /><br/>密码：<input type='password' name='密码'/></form><div class='ring' ><input    type='checkbox' value='自动登陆' checked='checked'/> 自动登陆<a href='#'>忘记密码？</a></    div><br/><button class='logon-btn'>登陆</button><button class='logon-btn'>注册</button>"
            //插入登陆层
            document.body.appendChild(ologon);
                //获取元素当前的宽高
            var dHeight=ologon.offsetHeight;
            var dWidth=ologon.offsetWidth;
            ologon.style.top=(wHeight-dHeight)/2+"px";
            ologon.style.left=(sWidth-dWidth)/2+"px";
            var oclose=document.getElementById("close");
            oclose.onclick=omask.onclick=function(){
                document.body.removeChild(omask);
                document.body.removeChild(ologon);
                }
        }
            
// 导航框tab切换
	function nav(){
		var oli=document.getElementById("nav").getElementsByTagName("li"),
			odiv=document.getElementsByClassName("r-con");
		if(oli.length!=odiv.length)
			return;
			for(var i=0;i<oli.length;i++){
				oli[i].id=i;
				oli[i].onclick=function(){
					for(var j=0;j<odiv.length;j++){
						odiv[j].style.display="none";
						oli[j].className="";
						}
						odiv[this.id].style.display="block";
						oli[this.id].className="lefton";
					}		
			}
	}
// book选项卡切换
    function bookchange(){
            var oli=document.getElementById("book-nav").getElementsByTagName("li"),
            obook=document.getElementsByClassName("book-main");
        //alert(oli.length);
        if(oli.length!=obook.length)
            return;
        //实行遍历
        for(var i=0;i<oli.length;i++){
            oli[i].id=i;
            //添加鼠标划过事件
            oli[i].onmouseover=function(){
                for(var j=0;j<obook.length;j++){
                    oli[j].className="";
                    obook[j].style.display="none";
                    }
                    oli[this.id].className="book-on";
                    obook[this.id].style.display="block";
                }
           oli[i].onmouseout=function(){
                    obook[this.id].style.display="block";
                }
            }    
        var obox=document.getElementsByClassName("box"),
            oshade=document.getElementsByClassName("shade");
        if(obox.length!=oshade.length)
            return;
        for(var i=0;i<obox.length;i++){
            // alert("ok");
            obox[i].id=i;
            obox[i].onmouseover=function(){
                for(var j=0;j<oshade.length;j++){
                    oshade[j].style.display="none";
                    }
                    oshade[this.id].style.display="block";
                }
            obox[i].onmouseout=function(){
                oshade[this.id].style.display="none";
               }
            }
        } 
// borderchange添加边框
    function borderchange(){
        var oB1=document.getElementsByClassName("content2mainleftwrap");
        for(var i=0;i<oB1.length;i++){
            oB1[i].id=i;
            oB1[i].onmouseover=function(){
                oB1[this.id].className="content2mainleftwrap border-on";
            }
             oB1[i].onmouseout=function(){
                oB1[this.id].className="content2mainleftwrap border-default";
            }
        };
        // 
        var oB2=document.getElementsByClassName("content2mainrightwrap");
        for(var i=0;i<oB2.length;i++){
            oB2[i].id=i;
            oB2[i].onmouseover=function(){
                oB2[this.id].className="content2mainrightwrap border-on";
            }
             oB2[i].onmouseout=function(){
                oB2[this.id].className="content2mainrightwrap border-default";
            }
        };
        // 
        var oB3=document.getElementsByClassName("cont3rightmain");
        for(var i=0;i<oB3.length;i++){
            oB3[i].id=i;
            oB3[i].onmouseover=function(){
                oB3[this.id].className="cont3rightmain border-on";
            }
             oB3[i].onmouseout=function(){
                oB3[this.id].className="cont3rightmain border-default";
            }
        }
    }
// 轮播图函数
    function picplay(){
        var wrap=document.getElementById("wrap"),
            list=document.getElementById("list"),
            btns=document.getElementById("buttons").getElementsByTagName("span"),
            pre=document.getElementById("pre"),
            next=document.getElementById("next");
            index=1;
            timer=null;
        var animated=false;
            //小圆点亮起
            function showBtn(){
                for(var i=0;i<btns.length;i++){
                    if (btns[i].className="on") {
                        btns[i].className=""
                    }
                    btns[index-1].className="on"
                }
            }
            //图片切换
            function animate(offset){
                animated=true;
                var newLeft=parseInt(list.style.left)+offset;
                var time=1000;//位移总时间
                var interval=100;//位移间隔时间
                var speed=offset/(time/interval);//每次位移量
                var left=parseInt(list.style.left);
                // 自动播放
                function go(){
                    animated=true;
                    if ( (speed <0 && parseInt(list.style.left) >newLeft) || (speed >0 && parseInt(list.style.left) < newLeft)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';

                        setTimeout(go, interval);
                    }
                    else{
                        animated=false;
                        list.style.left=newLeft+"px";
                        if(newLeft>-945){
                        list.style.left = -4725+"px";
                        }
                        if(newLeft<-4725){
                        list.style.left = -945+"px";
                        }
                    }
                }
                go();
            }
            //右箭头点击
            next.onclick=function(){
                if(index==5){
                    index=1
                }else{
                    index+=1;
                }
                showBtn();
                if(!animated)
                {animate(-945);
                }
            }
            //左箭头点击
            pre.onclick=function(){
                if(index==1){
                    index=5
                }else{
                    index-=1;
                }
                showBtn();
                if(!animated){
                animate(945);
                }
            }
            // 小圆点点击
            for(var i=0;i<btns.length;i++){
                btns[i].onclick=function(){
                    var myIndex=parseInt(this.getAttribute("index"));
                    var offset =-945*(myIndex-index);
                    animate(offset);
                    index=myIndex;
                    showBtn();
                }
            }
            //自动播放
            function play(){
                timer=setInterval(function(){
                    next.onclick();
                },3000)
            }
            // 停止
            function stop(){
                clearInterval(timer);
            }
            wrap.onmouseover=stop;
            wrap.onmouseout=play;
            play();
    }	
    function showTab(){
        var oli=document.getElementById("content2leftlist").getElementsByTagName("li");
        var otab=document.getElementsByClassName("con2-tab");
        for(var i=0;i<oli.length;i++){
            oli[i].id=i;
            oli[i].onmouseover=function(){
                for(var j=0;j<otab.length;j++){
                    oli[j].className="";
                    oli[this.id].className="content2lefton";
                    otab[j].style.display="none";
                    otab[this.id].style.display="block"
                }
            }
        }
    }
    //Travel旅行攻略
    function traShow(){
        // setTimeout(traTab,1500);
            var traLi=document.getElementById("travel-head").getElementsByTagName("li"),
                traCenter=document.getElementsByClassName("travel-center"),
                timer=null;
                if(traLi.length!=traCenter.length)
                    return;
                for(var i=0;i<traLi.length;i++){
                    traLi[i].id=i;
                    traLi[i].onmouseover=function(){
                        var that=this;
                        if(timer){
                            clearTimeout(timer);
                            timer=null;
                        }
                        timer=setTimeout(function (){
                            for(var j=0;j<traCenter.length;j++){
                                traLi[j].className="";
                                traCenter[j].style.display="none";
                        }
                            traLi[that.id].className="travel-head-on";
                            traCenter[that.id].style.display="block";
                    
                    },500);
                    }
                }
                    
        
        var up=document.getElementsByClassName("tabUp"),
            box=document.getElementsByClassName("box-left");
            // up.style.top=-35+"px";
            for(var i=0;i<box.length;i++){
            box[i].id=i;
            box[i].onmouseover=function(){
                up[this.id].style.top=-100+"px";
            }
            box[i].onmouseout=function(){
                up[this.id].style.top=-38+"px";
            }
        }
        var oboxTra=document.getElementsByClassName("box-right-main");
        var oboxUp=document.getElementsByClassName("box-right-tabUp");
        for(var i=0;i<oboxTra.length;i++){
            oboxTra[i].id=i;
            oboxTra[i].onmouseover=function(){
                oboxUp[this.id].style.top=-80+"px";
            }
            oboxTra[i].onmouseout=function(){
                oboxUp[this.id].style.top=-30+"px";
            }
        }
    }       

}