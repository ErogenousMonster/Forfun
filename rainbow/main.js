window.onload = function(){
	var oRed = document.getElementById("colorRed");
	var oOrange = document.getElementById("colorOrange");
	var oYellow = document.getElementById("colorYellow");
	var oGreen = document.getElementById("colorGreen");
	var oBlue = document.getElementById("colorBlue");
	var oCyan = document.getElementById("colorCyan");
	var oPurple = document.getElementById("colorPurple");
	var oDiv = [oRed,oOrange,oYellow,oGreen,oBlue,oCyan,oPurple];
	var oNum = [-900,-850,-800,-750,-700,-650,-600];

	for (var i = 0; i < oDiv.length; i++){
		oDiv[i].timer = null;
		oDiv[i].index = i;
		oDiv[i].onmouseover = function(){
			console.log(oNum[this.index]);
			startMove(this,oNum[this.index] + 600);
			console.log(oNum[this.index]);
		}
		oDiv[i].onmouseout = function(){
			startMove(this,oNum[this.index]);
		}
	}
}

function startMove(obj,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = (target - obj.offsetLeft)/10;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if(target == obj.offsetLeft){
			clearInterval(obj.timer);
		} else{
			obj.style.left = obj.offsetLeft + speed + 'px';
		}
	},30)
}