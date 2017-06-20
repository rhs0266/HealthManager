var Observable = require("FuseJS/Observable");

var URLList=["http://cfile224.uf.daum.net/image/24544D46543DD90B11DE12",
			"http://cythumb.cyworld.com/810x0/c2down.cyworld.co.kr/download?fid=642241fcc9cc8587919b422bcd417b80&name=06bf1a20125511e285a622000a1d039f_7_large.jpg"];

var imageURL=Observable(URLList[0]);
var idx=0;
var imageNum=7;

setInterval(function(){
	// imageURL.value = "../Assets/bg_"+cnt+".jpg";
	idx += Math.floor(Math.random()*7);
	idx %= imageNum;
	imageURL.value = "https://github.com/rhs0266/HealthManager/blob/master/Assets/bg_"+(idx+1)+".jpg?raw=true";
},10000);


module.exports={imageURL:imageURL};