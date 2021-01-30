
var mountainbg, mt;
var plr, plrAn;
var edges;
var sb, sbGroup, sbAn
var score;
var o2CanistersImg;
var coin, coinImg, coinsGroup;
var monster, monsterAn, monsterGroup;

function preload(){
  mountainbg = loadImage("mt.png");
  plrAn = loadAnimation("player1.png","player2.png","player3.png","player4.png","player5.png","player6.png","player7.png","player8.png","player9.png");
  sbAn = loadAnimtion("sb1.png","sb2.png","sb3.png","sb4.png","sb5.png");
  monsterAn = loadAnimation("monster1.png","monster2.png","monster3.png","monster4.png","monster5.png","monster6.png","monster7.png","monster8.png","monster9.png");
}

function setup(){
  createCanvas(800, 800);
  mt = createSprite(420, 400, 200, 200);
  mt.addImage(mountainbg);
  mt.scale = 4;
  //mt.x = mt.width/2
  mt.y = mt.height/2;
  
  plr = createSprite(300, 500, 40, 40)
  plr.addAnimation("climbing_player",plrAn);
  plr.scale = 0.5

  score = 0;

  edges = createEdgeSprites();

  sbGroup = new Group();
  monsterGroup = new Group();
}

function draw(){
  background("white");
  mt.velocityY = 3;
  if(mt.y > 500){
    mt.y = mt.height/2;
  }

  if(keyDown("right")){
    plr.x +=  10;
  }
  if(keyDown("left")){
    plr.x -= 10;
  }
  
  createSnowBalls();

  plr.collide(edges[0]);
  plr.collide(edges[1]);
  drawSprites();
}

function createSnowBalls(){
   if(frameCount%100 === 0){
     sb = createSprite(400, 0, 50, 50);
     sb.velocityY = 5;
     sb.addAnimation("moving_snowball", sbAn);
   }
}
function demon(){
  
  if(frameCount%200 === 0){
     monster = createSprite(400, 350, 50, 50);
      var rand = Math.round(random(1,2));
      monster.addAnimation("running_monster", monsterAn);
    }
     monster.velocityX = -(10 + score/1000)     
     monster.setLifetime = 100    
     monsterGroup.add(monster);
     }
}