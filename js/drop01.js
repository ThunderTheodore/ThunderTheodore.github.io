var bg = document.getElementById("bg");
if(null!=bg){
	var ctx = bg.getContext("2d");
	bg.width = window.innerWidth;
//	bg.height = window.innerHeight;
	bg.height = document.body.scrollHeight;
	var cntnts = "01";
	cntnts.split("");
	var fontsize = 20;
	columns = bg.width / fontsize;
	var drop = [];
	for (var i = 0; i < columns; ++i) {
		drop[i] = -columns;
	}
//	ctx.fillStyle = "rgba(0,0,0,1)";
//	ctx.fillRect(0, 0, bg.width, bg.height);
	function drop01() {
		ctx.fillStyle = "rgba(0,0,0,0.03)";
		ctx.fillRect(0, 0, bg.width, bg.height);
		ctx.fillStyle = "rgba(0,255,0,0.2)"; //数字颜色
		ctx.font = fontsize + "px arial";
		for (var i = 0; i < drop.length; ++i) {
			var ctn = cntnts[Math.floor(Math.random() * cntnts.length)];
			ctx.fillText(ctn, i * fontsize, drop[i] * fontsize);
			drop[i]++;
			if ((drop[i] < 0 || drop[i] * fontsize > bg.height) && Math.random() > 0.9) {
				drop[i] = 0;
			}
		}
	}
	setInterval(drop01, 100);
}

