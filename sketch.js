var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 400, 50, 80);
  movingRect=createSprite(400,200,80,30);
  fixedRect.shapeColor= "green";
  movingRect.shapeColor= "green";
}

function draw() {
  background(25,25,25);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 console.log(movingRect.x-fixedRect.x);

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.x - fixedRect.x < fixedRect.height/2 + movingRect.height/2
    && fixedRect.x-movingRect.x < fixedRect.height/2 + movingRect.height/2 )
   {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor="red";
  }
  else{
   movingRect.shapeColor = "green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}