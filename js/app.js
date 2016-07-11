var canvas = document.querySelector("#canvas");
var ctx    = canvas.getContext('2d');

var image = new Image();
	image.src = 'img/googlelogo.png';

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

function loop() {

	window.requestAnimationFrame(loop);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(image, 119, 25, 45, 45, 0, 0, 119, 100);
}

loop();

	 /*sx = source x
	   sy = source y
	   sw = source width
	   sh = source height
	   dx = destination x
	   dy = destination y
	   dw = destination width
	   dh = destination height
	   (obj, sx, sy, sw, sh, dx, dy, dw, dh)*/

window.onresize = function() {
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;

	console.log('redimension');
}
