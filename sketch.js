var canvas;
var music;
var go1 ,go2,go3,go4
var box

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(800,600);
go1 = createSprite(100,400,50,2)
go1.shapeColor = "orange";
go2 = createSprite(200,400,50,2)
go2.shapeColor = "green"    
go3 = createSprite(300,400,50,2);
go3.shapeColor = "blue";
go4 = createSprite(400,400,50,2);
go4.shapeColor = "purple";
box = createSprite(100,100,20,20);
box.x = createSprite(random(20,75))
box.shapeColor = "white";
box.velocityX = 2;

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
  box.bounceOff(topEdge);
  box.bounceOff(bottomEdge);
  box.bounceOff(rightEdge);
  box.bounceOff(leftEdge);
  
if (go1.isTouching(box)&& box.isTouching(go1))
{
    box.shapeColor = "orange";
}
if (go2.isTouching(box)&& box.isTouching(go2))
{
    box.shapeColor = "green";
}
if (go3.isTouching(box)&& box.isTouching(go3))
{
    box.shapeColor = "blue";
}
if (go4.isTouching(box)&& box.isTouching(go4))
{
    box.shapeColor = "purple";
}
drawSprites();
}


