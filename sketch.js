var Box1;
var Box2;


function setup() {
  createCanvas(800,400);
  Box2=createSprite(400, 200, 50, 50);
  Box2.shapeColor="blue"
  Box1=createSprite(300,200,50,50);
  Box1.shapeColor="red"
  Box1.debug="true";
  Box2.debug=true;

}

function draw() {
  background(255,255,255);  
  Box1.x=World.mouseX
  Box1.y=World.mouseY
  console.log(Box1.x-Box2.x)
  if(Box1.x-Box2.x<Box1.width/2+Box2.width/2 &&
     Box2.x-Box1.x<Box1.width/2+Box2.width/2 &&
    Box1.y-Box2.y<Box1.height/2+Box2.height/2 &&
    Box2.y-Box1.y<Box1.height/2+Box2.height/2){
    Box1.shapeColor="orange"
    Box2.shapeColor="green"
  }
  else{
    Box1.shapeColor="red"
    Box2.shapeColor="blue"
  }
  drawSprites();
}
