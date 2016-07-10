var canvas = document.querySelector("#canvas");
var ctx    = canvas.getContext('2d');
var posX   = 0;
var toRight = true;
var speed  = 3;

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

function loop() {

	window.requestAnimationFrame(loop);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
		ctx.fillStyle = '#f26c4f';
		ctx.rect(posX, canvas.height / 2 - 50, 100, 100);
		ctx.fill();
	ctx.closePath();

	if (toRight) 
		posX+=speed;
	else
		posX-=speed;

	if (posX > canvas.width - 100)
		toRight = false;
	if (posX < 0)
		toRight = true;
}

loop();