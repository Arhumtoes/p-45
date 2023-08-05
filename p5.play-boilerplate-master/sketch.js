var bgimage
var zombieimg
var bg
var shooterimg
var shooterimg2
var shooter
function preload(){
bgimage=loadImage("12-graveyard-at-night-background-cartoon.jpg")
zombieimg=loadImage("zombie-clipart-3.png")
shooterimg=loadImage("shooter_3.png")
shooterimg2=loadImage("shooter_2.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(1400,600,50,150)
  bg.scale=1.5
  bg.addImage(bgimage)
  shooter=createSprite(250,1000,15,10)
  shooter.addImage(shooterimg2)
}

function draw() {
  background(255,255,255);  
  if(keyWentDown("space")){
  shooter.addImage(shooterimg)
  }
  else if(keyWentUp("space")){
  shooter.addImage(shooterimg2)
  }

  drawSprites();

}
