function is_weixin() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq" || ua.match(/WeiBo/i) == "weibo") {
		return true;
	} else {
		return false;
	}
}
var isWeixin = is_weixin();
var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
function loadHtml(){
	var div = document.createElement('div');
	div.id = 'weixin-tip';
	div.innerHTML = '<p> <img src="//img13.360buyimg.com/u/jfs/t1/181097/17/24642/11148/62754da2Efb70067e/c5b2347874fbbd5d.png" width="95%"> </p>';
	document.body.appendChild(div);
}

function loadStyleText(cssText) {
	var style = document.createElement('style');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	try {
		style.appendChild(document.createTextNode(cssText));
	} catch (e) {
		style.styleSheet.cssText = cssText; //ie9以下
	}
	var head=document.getElementsByTagName("head")[0]; //head标签之间加上style样式
	head.appendChild(style); 
}
var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;} .body {overflow: hidden;}";
if(isWeixin){
	loadHtml();
	loadStyleText(cssText);
}
