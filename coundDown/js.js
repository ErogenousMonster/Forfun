window.onload = function(){
	countDown();
}

function checkTime(i){
	if(i < 10){
		i = '0' + i;
	} else {
		return i;
	}
}

function countDown(){
	var nowTime = new Date();
	var deadTime = new Date(2017,1,21,);
	var innerTime = parseInt((deadTime - nowTime)/1000);

	var iDay = parseInt(innerTime/(24*60*60));
	var iHours = parseInt(innerTime/(60*60)%24);
	var iMinutes = parseInt(innerTime/60%60);
	var iSeconds = parseInt(innerTime%60);

	var iTime = '离2017年2月21日还剩：' + iDay + '天' + iHours + '时' + iMinutes + '分' + iSeconds + '秒';

	var oDiv = document.getElementById('container');
	oDiv.innerHTML = iTime;
	if(innerTime == 0){
		clearTimeout();
	}

	setTimeout(countDown,500);
}
