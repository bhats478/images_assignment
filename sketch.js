//PINK SLUMBER BY SANJANA BHATIA

var silk;
var uploadButton;
var uploadedImage;
var sleepinglady;

function preload(){
	silk = loadImage("file:///Users/sanjanabhatia/Dropbox/spring%202016/creative%20computing/images_assignment/images/silk.jpg");
	sleepinglady = loadImage("file:///Users/sanjanabhatia/Dropbox/spring%202016/creative%20computing/images_assignment/images/sleepinglady2.png")
}

function setup(){
  uploadButton = createFileInput(imageUploaded);
  imageMode(LEFT);

	createCanvas(silk.width, silk.height);
	background(silk)

	image(sleepinglady, 0, 0);
  blend(sleepinglady, 0, 0, 33, 100, 67, 0, 33, 100, MULTIPLY);
	//Could not get the blend to work for some reason - i will see you about this
}

function draw() {
if (uploadedImage){
  image(uploadedImage,mouseX,mouseY);
	}
	stroke("Lavender");
	line(mouseX, 0, mouseX,windowHeight);



}

function imageUploaded(file){
	uploadedImage = loadImage(file.data, drawImg);
}

function drawImg(){
  image(uploadedImage,0,0);
}
