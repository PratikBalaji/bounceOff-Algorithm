var movingRect,fixedRect
function setup() {
  createCanvas(800,400);
 Rect1=createSprite(100,200,20,80);
 Rect2=createSprite(200,200,20,80);
 Rect3=createSprite(400,200,20,80);
 Rect4=createSprite(400,100,20,80);
 Rect1.velocityX=3;
 Rect2.velocityX=-3;
 Rect3.velocityY=-3;
 Rect4.velocityY=3;
}

function draw() {
  background("BLACK");  
  console.log(Rect2.x-Rect1.x);
  bounceOff(Rect1,Rect2);
  bounceOff(Rect3,Rect4);
  drawSprites();
}
