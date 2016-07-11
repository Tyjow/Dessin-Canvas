var canvas = document.querySelector("#canvas");
var ctx    = canvas.getContext('2d');
var posX   = 0;
var toRight = true;
var speed  = 0.7;

var image = new Image();
	image.src = 'img/hero.png';

var height = image.height / 4;
var width = image.width / 4;
var frame = 0;
var count = 0;

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

function loop() {

	window.requestAnimationFrame(loop);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
		var perso = ctx.drawImage(image, frame * width, 95, width, height, posX, canvas.height / 2 - 50, width, height);

		count++;
		if (count > 60)
			count = 0;
		if (count % 9 == 0)
			frame++;
		if (frame > 3)
			frame = 0;

	ctx.closePath();

	if (toRight) 
		posX+=speed;
	else
		posX-=speed;

	if (posX > canvas.width - width)
		toRight = false;
	if (posX < 0)
		toRight = true;
	
}

loop();

(function resizeCanvas() {

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	window.addEventListener("resize", resizeCanvas);

})();
