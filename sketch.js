
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,400,400)
  sea.addImage("sea", seaImg);
  sea.scale = 0.4;
  sea.velocityX = 5;
  ship1 = createSprite(130,250,10,10)
  ship1.addAnimation("ship",shipImg1)
  ship1.scale = 0.3;
}

function draw() {
  background("blue");
 if(seaImg.x < 0){
   seaImg.x = sea.width/2;
 }

drawSprites();
}