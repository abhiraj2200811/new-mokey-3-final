var
player,obstaclegroup,background1,score,foodGroup

var backDrop,player_running,bananaImage,obstacleImage



function preload(){

  bananaImage= loadImage("banana.png")
  
  obstacleImage= loadImage("stone.png")

  backDrop= loadImage("jungle.png")

  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

}


function setup() {
  createCanvas(400, 400);

  background1 = createSprite(400,0,800,500);
  background1.addImage("jungle.png",backDrop);
  background1.x = background1.width /2;
  background1.velocityX = -10;

  invisibleGround = createSprite(200,380,400,10);
  invisibleGround.visible = false;
  
  player = createSprite(50,375,20,50);
  player.addAnimation(player_running);
  player.scale=0.5
  
  score=0

  
  
  
}

function draw() {
  background("green");

  if(player.isTouching(fruitGroup)){
     score=score+2
     fruitGroup.destroyEach()
  
  }
  
  if(player.isTouching(obstacleGroup)){
     score=score-1
    player.scale=0.5
  
  }
 
  
  
      
  fruitGroup.setVelocity(0,0)
   obstacleGroup.setVelocity(0,0)
  background1.velocityX=0
  
  
  
  
  
  
  
  
  
  
  spawnObstacles();
  spawnFruits();
  
  drawSprites();

  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,100,50)

}

function spawnFruits() {
  if(frameCount % 60 === 0) {
    banana =createSprite(400,Math.round(random(375,350)),10,40);
    banana.addImage(bananaImage)
    banana.velocityX = -4;
    
    
    switch(score) {
      case 10: player.scale=player.scale+0.5
              break;
      case 20: player.scale=player.scale+0.5
              break;
      case 30: player.scale=player.scale+0.5
              break;
      case 40: player.scale=player.scale+0.5
              break;
      
      default: break;
    }
    
           
    banana.scale = 0.5;
    banana.lifetime = 300;
    
    fruitGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,380,10,40);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -4;
    
              
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
  }
}