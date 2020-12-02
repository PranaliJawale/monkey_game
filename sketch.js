
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(50,350,20,20)
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,380,800,10);
  ground.velocityX = -2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("lightgreen");
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY = -14;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  console.log(frameCount);
  
  survivalTime= Math.ceil(frameCount/getFrameRate());
  text("survivalTime:"+survivalTime,250,100);
  
  /*if (bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
  }
  if (obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
    monkey.velocityY = 0;
  }*/
  drawSprites();
}

function spawnFood(){
  if(frameCount%80 === 0){
    banana = createSprite(200,200,10,10);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(50,200));
    banana.velocityX = -4;
    banana.lifetime = 300;
    
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if (frameCount%300 === 0){
    obstacle = createSprite(300,350,50,50);
    obstacle.velocityX = -4;
    obstacle.addImage("stones",obstaceImage);
    obstacle.scale= 0.15;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}



