window.onload = function(){
	var oDiv = document.getElementsByClassName('block');

		//链式运动
		oDiv[0].timer = null;
		oDiv[0].onmouseover = function(){
			startMove(oDiv[0],'width',200,function(){
				startMove(oDiv[0],'height',200,function(){
					startMove(oDiv[0],'opacity',100);
				});
			});
		}
		oDiv[0].onmouseout = function(){
			startMove(oDiv[0],'opacity',30,function(){
				startMove(oDiv[0],'height',100,function(){
					startMove(oDiv[0],'width',100);
				})
			});
		}

		//同时运动
		/*oDiv[1].timer = null;
		oDiv[1].onmouseover = function(){

		}*/
}

function getStyle(obj,attr){
	//IE
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else{//其他
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,attr,target,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var icur = 0;
		if(attr == 'opacity'){
			icur = Math.round(parseFloat(getStyle(obj,attr))*100);
		} else {
			icur = parseInt(getStyle(obj,attr));	
		}
		var speed = (target - icur)/8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(icur == target){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		} else {
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity=' + icur + speed + ')';
				obj.style.opacity = (icur + speed)/100;
			} else {
				obj.style[attr] = icur + speed + 'px';
			}
		}
	},30);
}