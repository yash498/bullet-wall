var bullet,wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
 bullet=createSprite(50,200,50,50);
 bullet.shapeColor="purple";
 bullet.velocityX=speed;
 wall=createSprite(800,200,thickness,height/2);
// wall.shapeColor=color(230,230,230);
 
}



function draw() {
  background(0,0,0);  



if (hascollided(bullet,wall)){  
bullet.velocityX=0;
var damage=0.5 * weight*speed*speed/(thickness*thickness*thickness);
if (damage>10) 
{ 

wall.shapeColor=color(255,0,0);
}
if (damage<10)
{ 

wall.shapeColor=color(0,255,0);


}



}

drawSprites();
}




function hascollided(ibullet,iwall){ 
bulletRightEdge=ibullet.x+ibullet.weight;
wallLeftEdge=iwall.x;
if (bulletRightEdge>=wallLeftEdge){ 

return true;


}
else { 
  return false;

}



}
 



































