window.onload = function(){
	showTime();
}

function checkTime(i){
	if (i < 10){
		i = '0' + i;
	} else{
		return i;
	}
}

function showTime(){
	var iTime = new Date();
	var iYear = iTime.getFullYear();
	var iMon = iTime.getMonth() + 1;
	var iDay = iTime.getDate();
	var iWk = iTime.getDay();
	var iHour = iTime.getHours();
	var iMinute = iTime.getMinutes();
	var iSecond = iTime.getSeconds();

	var weekday = ['天','一','二','三','四','五','六'];

	iHour = checkTime(iHour);
	iMinute = checkTime(iMinute);
	iSecond = checkTime(iSecond);

	var iDiv = document.getElementById('container');
	var iItem = iYear + '年' + iMon + '月' + iDay + '日' + ' ' + '星期' + weekday[iWk] + ' ' + iHour + ':' + iMinute + ':' + iSecond;
	iDiv.innerHTML = iItem;

	setTimeout(showTime,500);
}