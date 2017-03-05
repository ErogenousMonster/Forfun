window.onload = function(){
	var oDiv = document.getElementsByTagName('div');
/*	oDiv[0].timer = null;
	oDiv[0].onmouseover = function(){
		startMove(oDiv[0],{'width':200},function(){
			startMove(oDiv[0],{'height':200},function(){
				startMove(oDiv[0],{'opacity':100});
			});
		});
	}
	oDiv[0].onmouseout = function(){
		startMove(oDiv[0],{'opacity':30},function(){
			startMove(oDiv[0],{'height':100},function(){
				startMove(oDiv[0],{'width':100});
			});
		});
	}*/
	oDiv[1].timer = null;
	oDiv[1].onmouseover = function(){
		startMove(this,{'width':200,'height':200,'opacity':100});
	}
	oDiv[1].onmouseout = function(){
		startMove(this,{'width':100,'height':100,'opacity':30});
	}
}

function getStyle(obj,attr){
	//IE浏览器
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
	//其他浏览器
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(attr in json){
			var iCur = 0;
			if(attr =='opacity'){
				iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
			} else {
				iCur = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - iCur)/8;
			speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);
			if(iCur != json[attr]){
				flag = false;
			} 
			if(attr == 'opacity'){
				obj.style.opacity = (iCur + speed)/100;
				obj.style.filter = 'alpha(opacity=' + iCur + speed + ')';
			} else{
				obj.style[attr] = iCur + speed + 'px';
			}

			if(flag){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		}
	},30);

}