
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine;
var world;
var bg;
var girl,girlImg,girl2,girl3,girl4 ;
var snowmanImg,snowman;
var boy,boy1;

var snowcount=50;
var snow = []
function preload(){
  bg = loadImage("pixel.png");
  girlImg = loadImage("girl1.png");
  girl2 = loadImage("girl2.png");
  girl3 = loadImage("girl3.png");
  girl4 = loadImage("girl4.png");
  snowmanImg = loadImage("snowman.png");
  boy1 = loadImage("w.png");

}
function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  girl = createSprite(190,190,10,20);
  girl.addImage(girlImg)

  snowman = createSprite(500,200,50,50);
  snowman.addImage(snowmanImg)
  snowman.scale = 0.3;
   boy = createSprite(290,190,10,10);
   boy.addImage(boy1)
   boy.scale = 0.3;
}

function draw() {
  background(bg); 
  Engine.update(engine);
  girl.display(); 
  snowman.display();
  
  textSize(20);
  fill("Black");
  text("If you press space the girl will happy. ",300,30);
  text("If you press right arrow key the will be more happy.",300,50);
  text("If you press left arrow key the girl will angry.",300,70)
  
  if(keyDown("space")){
   girl.addImage(girl3)
  }

  if(keyDown("right")){
    girl.addImage(girl4)
    boy.display();
  }
  
  if(keyDown("left")){
    girl.addImage(girl2)
  
  }
 
if(frameCount%60===0){
  snow.push(new Snow(random(10,700), 10,50));

}

for (var j = 0; j < snow.length; j++) {

  snow[j].display();
}


  boy.display();
}


  