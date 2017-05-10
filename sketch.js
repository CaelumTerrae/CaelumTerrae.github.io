function setup() {
	createCanvas(1000,800);
}

function draw() {
	if (mouseIsPressed){
		fill(0);
	}else{
		var red = random(255);
		var green = random(255);
		var blue = random(255);
		fill(red, green, blue);
	}
  ellipse(mouseX,mouseY,80,80);
}

function touchMoved() {
	return false;
}