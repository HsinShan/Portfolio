//用於鏈式運動，加入回掉函數(endfn)
function startmove(obj,attJSON){
    clearInterval(obj.timer);

    var currentVal=0;
    var speed=0;
    

    obj.timer=setInterval(function(){
        var isStop=true;
        
        for(key in attJSON){
            //加入opacity
            if(key=="opacity"){
                currentVal=parseInt(getStyle(obj,key)*100);

            }else{
                currentVal=parseInt(getStyle(obj,key));

            }

            speed=(attJSON[key]-currentVal)/7;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            currentVal+=speed;

            if(key=="opacity"){
                obj.style[key]=currentVal/100;
                obj.style.filter="alpha(opacity="+currentVal+")";
            }else{
                obj.style[key]=currentVal+"px";
            }
            
            
            if(currentVal!=attJSON[key]){
                isStop=false;
            }

        }
        //判斷是否停止時鐘，若有意條件沒有完成，就沒有等於true，則不停止時鐘，繼續執行。
        if(isStop){
            clearInterval(obj.timer);
        }
    },20)
}

function getStyle(obj,att){
    //必須把取整拿掉，否則獲取不到opacity
    return window.getComputedStyle ? getComputedStyle(obj)[att]: obj.currentStyle[att];

}
