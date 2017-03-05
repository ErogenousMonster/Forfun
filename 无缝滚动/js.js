window.onload = function(){
	scrollUp();
}

function scrollUp(){
	var area = document.getElementById('container');
	var oLi1 = document.getElementById('li1');
	var oLi2 = document.getElementById('li2');
	area.scrollTop = 0;
	oLi2.innerHTML = oLi1.innerHTML;

	function addUp(){
		if(area.scrollTop >= oLi1.offsetHeight){
			area.scrollTop = 0;
		} else{
			area.scrollTop ++;
		}
	}
	var myTimer =  setInterval(addUp,50);
	area.onmouseover = function(){
		clearInterval(myTimer);
	}
	area.onmouseout = function(){
		myTimer =  setInterval(addUp,50);
	}
}