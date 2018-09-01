function startmove(obj,att,target,endFn){
    clearInterval(obj.timer);

    var currentVal=0;
    var speed=0;
    
    obj.timer=setInterval(function(){

        if(att=="opacity"){
            currentVal=parseInt(getStyle(obj,att)*100);
           
        }else{
            currentVal=parseInt(getStyle(obj,att));
            
        }

        speed=(target-currentVal)/7;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);

        currentVal+=speed;
        if(Math.abs(currentVal-target)<Math.abs(speed)){
            currentVal=target;
            if(att=="opacity"){
                obj.style.opacity=currentVal/100;
                obj.style.filter="alpha(opacity="+currentVal+")";
            }else{
                obj.style[att]=currentVal+"px";
            }
            clearInterval(obj.timer);
            
            if(endFn) endFn();
            
        }else{
            if(att=="opacity"){
                obj.style[att]=currentVal/100;
                obj.style.filter="alpha(opacity="+currentVal+")";
            }else{
                obj.style[att]=currentVal+"px";
            }
        }
    },20)
}

function getStyle(obj,att){
    return window.getComputedStyle ? getComputedStyle(obj)[att]: obj.currentStyle[att];
   
}
