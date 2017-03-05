window.onload = function(){
	var oButton = document.getElementById('login');
	// var oClose = document.getElementById('close');
	
	

	oButton.onclick = function(){
		var sHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
		var sWidth = document.documentElement.scrollWidth || document.body.scrollWidth;

		var pHeight = document.documentElement.clientHeight || document.body.clientHeight;
		var pWidth = document.documentElement.clientWidth || document.body.clientWidth;
		//创建遮挡层
		oShadow = document.createElement('div');
		oShadow.id = 'shadow';
		//创建登录窗口
		oPopUp = document.createElement('div');
		oPopUp.id = 'popUp';
		oShadow.style.height = sHeight + 'px';
		oPopUp.style.top = (pHeight - 200)/2 + 'px';
		oPopUp.style.left = (pWidth - 200)/2 + 'px';
		oPopUp.innerHTML = '<span id="close">X</span>';
		document.body.appendChild(oShadow);
		document.body.appendChild(oPopUp);
		var oClose = document.getElementById('close');
		oClose.onclick = function(){
			document.body.removeChild(oShadow);
			document.body.removeChild(oPopUp);
		}
	}
	
/*
	oClose.onclick = function(){
		document.body.removeChild('oShadow');
		document.body.removeChild('oPopUp');
	}*/
}