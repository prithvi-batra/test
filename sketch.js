
var player;
var score=0;
var wormGroup;

function preload(){
  wormImage = loadImage("images/worm.png");
  swampImage = loadImage("images/swampImg.png");
  frogImage = loadImage("images/frog.png");
}

function setup() {
createCanvas(600,600);
swamp = createSprite(300,300);
player = createSprite(40,550,30,30); 
wormGroup= new Group();
swamp.scale = 2.5;
player.scale = 0.2;
}

function draw() {
background("black");  
swamp.addImage(swampImage);
stroke("red")
//noFill();
//ellipse(100,350,40,30);
player.addImage(frogImage);
player.x= mouseX;
player.y= mouseY;
/*
if(player.x<150 && player.x>90 && player.y<380 && player.y>320 ){
  text("NO CHEATING!!",200,200);
  player.x=30;
  player.y=30;
}*/
generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 30===0){
  console.log(frameCount);
  var worm = createSprite(random(50,400),random(200,400),40,5);
  
  worm.addImage(wormImage);
  worm.scale = 0.3;
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}
