window.onload =function(){
	scollUp();
}

function scollUp(){
	var area = document.getElementById('container');
	var iHeight = 25;
	var speed = 50;
	var timer;
	area.scrollTop = 0;
	
	area.innerHTML += area.innerHTML;

	function startUp(){
		timer = setInterval(addUp,speed);
		area.scrollTop++;
	}

	function addUp(){
		if(area.scrollTop % iHeight == 0){
			clearInterval(timer);
			setTimeout(startUp,300);
		} else{
			area.scrollTop ++; 
			if(area.scrollTop >= area.scrollHeight/2){
				area.scrollTop = 5;
			}
		}
	}

	setTimeout(startUp,300);
}
