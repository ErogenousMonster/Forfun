window.onload = function(){
	var oButton = document.getElementById('toTop');
	var oHeight = document.documentElement.clientHeight || document.body.clientHeight;
	window.onscroll = function(){
		var oToTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(oToTop >= oHeight){
			oButton.style.display = 'block';
		} else{
			oButton.style.display = 'none';
		}
	}
	oButton.onclick = function(){
		toTop();
	};
}
var timer = null;
function toTop(){
	clearInterval(timer);
	timer = setInterval(function(){
		var oToTop = document.documentElement.scrollTop || document.body.scrollTop;
		var speed = Math.ceil(oToTop/10);
		document.documentElement.scrollTop = document.body.scrollTop -=speed;
		window.onmousewheel=function(){clearInterval(timer);};
		/*if(oToTop >= oHeight/2){
			oButton.style.display = 'block';
		} else{
			oButton.style.display = 'none';
		}*/
		if(oToTop <= 0){
			clearInterval(timer);
		} else{
			oToTop -= speed;
		}
	},30);
}