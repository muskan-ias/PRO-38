var tower,towerImg;
var door,doorImg,doorGroup;
var climber,climberImg,climberGroup;
var ghoststandImg,ghost;
var gameState = "play";
//var play = 1;
//var END = 0;
var invisibleblock,invisibleGroup;

function preload() {
towerImg = loadImage("tower.png");  
doorImg = loadImage("door.png");  
climberImg = loadImage("climber.png");
ghoststandImg = loadImage("ghost-standing.png")

}


function setup() {
 createCanvas(600,400);
  
  tower = createSprite(200,300,10,10);
  tower.addImage(towerImg);
  tower.velocityY = 1;
  tower.scale = 0.75;
 
  ghost = createSprite(100,200,10,10);
  ghost.addImage(ghoststandImg);
  ghost.scale = 0.3;
  //ghost.velocityY = -2;
  
  
  
  doorGroup = createGroup();
  climberGroup = createGroup();
 invisibleGroup = createGroup();
}


function draw() {

background("black");
if (gameState === "play") {
   //console.log(tower.y);
   if (tower.y> 400){
   tower.y = 300; 
    
    }   
  
  if (keyDown("right_arrow")){
      ghost.x = ghost.x+1;
      
      }

  if (keyDown("left_arrow")){
      ghost.x = ghost.x + (-1);
      
      }
  
      
  if (keyDown("space")) {
      ghost.velocityY = -4;
  } 

   
  
  
  ghost.velocityY = ghost.velocityY + 0.8;
 
    if (ghost.isTouching(climberGroup)){
        ghost.velocityY = 0;
        
        }
  
  if (ghost.isTouching(invisibleGroup) || ghost.y > 400){
        ghost.velocityY = 0;
        gameState = "end";
        ghost.destroy();
  tower.destroy();
  }
  
  
  
  spawndoor();
  
}
  
 if (gameState === "end") {
     stroke("yellow");
    fill ("yellow");
   textSize(30);
   
   text("gameover",200,200)
     
     }
  
 
      
    
     
    
      
      
     
  
  
  
  
  
  
  
  
//edges = createEdgeSprites();
//ghost.collide(edges[3])
  
  drawSprites();
  

}

function spawndoor() {
 if (frameCount % 240 === 0) {
   door = createSprite(200,-50);
   door.addImage(doorImg);
   door.scale = 0.4;
   door.velocityY = 1;
   door.x = Math.round(random(120,300));
   doorGroup.add(door);
  door.lifetime = 800;
 ghost.depth = door.depth;
// ghost.depth = ghost.depth+1;
   ghost.depth += 1;
   
 climber = createSprite(200,-20,10,10);
 climber.addImage(climberImg);
 climber.x = door.x; 
 climber.velocityY = 1;
  climberGroup.add(climber);
 climber.scale = 0.3;
 climber.lifetime = 800;
 
 invisibleblock = createSprite(200,-10)
 invisibleblock.width = 20;
 invisibleblock.height = 2;
 invisibleblock.x = door.x;
 invisibleblock.velocityY = 1;
 invisibleGroup.add(invisibleblock);
//invisibleblock.debug = true;
 }
     
}
  

  
  

