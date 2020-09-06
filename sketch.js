var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  background("black");
  bullet=createSprite(50, 200, 70, 5);
  bullet.shapeColor="black";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="yellow";
  speed=random(100,150);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  if(  wall.x-bullet.x   < (wall.width  +  bullet.width)/2  &&  
   bullet.x-wall.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(damage<10){
      wall.shapeColor="green";
    }
    else if(damage=>10){
      wall.shapeColor="red";
   
    }
  }
  drawSprites();
}