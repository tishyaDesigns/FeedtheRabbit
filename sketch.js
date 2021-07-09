var garden,rabbit;
var grassImg, leavesImg;
var gardenImg,rabbitImg;
var rImg, applesImg;
var apple,leaves;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  grassImg= loadImage ('grass.png');
  leavesImg= loadImage ('leaf.png');
  applesImg= loadImage('apple.png');
  redImg = loadImage ('redImage.png')
  orangeLeafImg= loadImage ('orangeLeaf.png');
}

 function setup(){
  
  createCanvas(400,400);
  
 // Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

  
   
    grass= createSprite(120,300,10,10);
  grass.scale=0.1;
  grass.addImage(grassImg);
   
 //creating rabbit running
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
  
 
  
   
   
  
}

function draw() {
  background(0);
  
  
  
   rabbit.x=mouseX;
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  
  createApples();
  createLeaves();
  createRedLeaf();
  createOrangeLeaf();
  drawSprites();
  if( keyDown('E')){
    fill ('red');
    textSize (30)
     text('Apples Eaten', 140,200);
     }
}
function createApples (){
  if(frameCount% 80==0){
     apple= createSprite (random(50,350),70,15,15);
   apple.scale=0.05;
   apple.addImage(applesImg); 
    apple.velocityY=3;
    apple.lifetime= 200; 
     }
}
function createLeaves (){
  if(frameCount% 100==0){
 leaves=createSprite (random(50,350),20,15,15);
   leaves.scale=0.08;
  leaves.addImage(leavesImg);
  leaves.velocityY=3;
  leaves.lifetime= 200;
}
}
function createRedLeaf (){
  if(frameCount% 40==0){
 redLeaf=createSprite (random(50,350),20,15,15);
    redLeaf.scale=0.06;
   redLeaf.addImage(redImg);
   redLeaf.velocityY=3;
   redLeaf.lifetime= 200;
}
}
function createOrangeLeaf (){
  if(frameCount% 60==0){
   orangeLeaf=createSprite (random(50,350),20,15,15);
     orangeLeaf.scale=0.08;
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.velocityY=3;
    orangeLeaf.lifetime= 200;
}
}

