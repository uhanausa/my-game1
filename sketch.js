var sword,swordImg
var fruitImg
var fruitGroup
var score

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
swordImg=loadImage("sword.jpg")
fruitImg=loadImage("apple.webp")
gameOverImg=loadImage("gameOverImg.jfif")
}
function setup() 
{
  createCanvas(400,400);

  sword=createSprite(200,350,20,20);
  sword.addImage(swordImg)
  sword.scale=0.01

  fruitGroup=createGroup()

  score=0

  gameOver = createSprite(200,200);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.8;
  gameOver.visible = false;
}

function draw() 
{
background("white");

text ("Score :"+score,350,50)

sword.x=mouseX

if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach()

  score=score+5
}

createFruit()
drawSprites()

}

function createFruit(){
  if(frameCount%100==0){
    var fruit=createSprite(Math.round(random(10,390)),0)
    fruit.velocityY=+2
    fruit.addImage(fruitImg)
    fruit.scale=0.05
    fruitGroup.add(fruit)
  }
}

if(gameState===PLAY){
    
  distance = distance + Math.round(getFrameRate()/50);
  path.velocityX = -(6 + 2*distance/150);
 
  mainCyclist.y = World.mouseY;
 
  edges= createEdgeSprites();
  mainCyclist .collide(edges);
    
}else if (gameState === END) {
   gameOver.visible = true;
 
    if(keyDown("UP_ARROW")) {
      reset();
    }
}
