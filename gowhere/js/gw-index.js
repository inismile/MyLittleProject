// JavaScript Document<script type="text/javascript">
window.onload=function(){
    nav();          // ������tab�л�
    bookchange();   // bookѡ��л�
    borderchange(); // ��ӱ߿�
    picplay();      // �ֲ�ͼ����
    showTab();
    traShow();     //travl���й���
    // ��¼��
    var a=document.getElementById("enter");
        a.onclick=function(){
            show();
        }
        function show(){
        //��ȡҳ��ĸ߶ȺͿ��
            var sHeight=document.documentElement.scrollHeight;
            var sWidth=document.documentElement.scrollWidth;
            //��ȡ��������ĸ߶�
            var wHeight=document.documentElement.clientHeight;
            //�������ֲ�
            var omask=document.createElement("div");
                omask.id="mask";
            //�������ֲ�
            omask.style.height=sHeight+"px";
            omask.style.width=sWidth+"px";
            document.body.appendChild(omask);
            //������½��
            var ologon=document.createElement("div");
                ologon.id="logon";
                ologon.innerHTML="<div class='logon-top'>��½<span id='close'></span></div><form  class='logon-f'>�˺ţ�<input type='text' name='�˺�' placeholder='����������û���/�ֻ�/����' /><br/>���룺<input type='password' name='����'/></form><div class='ring' ><input    type='checkbox' value='�Զ���½' checked='checked'/> �Զ���½<a href='#'>�������룿</a></    div><br/><button class='logon-btn'>��½</button><button class='logon-btn'>ע��</button>"
            //�����½��
            document.body.appendChild(ologon);
                //��ȡԪ�ص�ǰ�Ŀ��
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
            
// ������tab�л�
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
// bookѡ��л�
    function bookchange(){
            var oli=document.getElementById("book-nav").getElementsByTagName("li"),
            obook=document.getElementsByClassName("book-main");
        //alert(oli.length);
        if(oli.length!=obook.length)
            return;
        //ʵ�б���
        for(var i=0;i<oli.length;i++){
            oli[i].id=i;
            //�����껮���¼�
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
// borderchange��ӱ߿�
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
// �ֲ�ͼ����
    function picplay(){
        var wrap=document.getElementById("wrap"),
            list=document.getElementById("list"),
            btns=document.getElementById("buttons").getElementsByTagName("span"),
            pre=document.getElementById("pre"),
            next=document.getElementById("next");
            index=1;
            timer=null;
        var animated=false;
            //СԲ������
            function showBtn(){
                for(var i=0;i<btns.length;i++){
                    if (btns[i].className="on") {
                        btns[i].className=""
                    }
                    btns[index-1].className="on"
                }
            }
            //ͼƬ�л�
            function animate(offset){
                animated=true;
                var newLeft=parseInt(list.style.left)+offset;
                var time=1000;//λ����ʱ��
                var interval=100;//λ�Ƽ��ʱ��
                var speed=offset/(time/interval);//ÿ��λ����
                var left=parseInt(list.style.left);
                // �Զ�����
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
            //�Ҽ�ͷ���
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
            //���ͷ���
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
            // СԲ����
            for(var i=0;i<btns.length;i++){
                btns[i].onclick=function(){
                    var myIndex=parseInt(this.getAttribute("index"));
                    var offset =-945*(myIndex-index);
                    animate(offset);
                    index=myIndex;
                    showBtn();
                }
            }
            //�Զ�����
            function play(){
                timer=setInterval(function(){
                    next.onclick();
                },3000)
            }
            // ֹͣ
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
    //Travel���й���
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