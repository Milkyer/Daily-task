function getstyle(obj,name)
  {
if(obj.currentStyle)
{
return obj.currentStyle;
}
else
{
return getComputedStyle(obj,false)[name];
}
  }
      function move(obj,json,fnEnd)
{
clearInterval(obj.timer);
obj.timer=setInterval(function()
{
 var bBox=true;//假设所有值都已经到了
 for(var strr in json)
 {
 if(strr=='opacity')
 {
  var cur=Math.round(parseFloat(getstyle(obj,strr))*100);
 }
 else
 {
  var cur=parseInt(getstyle(obj,strr));
 }
 var speed=(json[strr]-cur)/10;
 speed=speed>0?Math.ceil(speed):Math.floor(speed);
 
 if(cur!=json[strr])
 bBox=false;
 if(strr=='opacity')
            {
            obj.style.filter='alpha(opacity:'+(cur+speed+')');
            obj.style.opacity=(cur+speed)/100;
            }
 else
 {
 obj.style[strr]=cur+speed+'px';
 }
 }
 if(bBox)
 {
 clearInterval(obj.timer);
 if(fnEnd)fnEnd();
 }
},30);
};