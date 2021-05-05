var canvas;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
block1=createSprite(80,590,150,20);
block1.shapeColor=("red");

block2=createSprite(260,590,150,20);
block2.shapeColor="orange";

block3=createSprite(440,590,150,20);
block3.shapeColor="yellow";

block4=createSprite(620,590,150,20);
block4.shapeColor="pink";

ball=createSprite(random(20,650),100,20,20);
ball.shapeColor="white";
ball.velocityY=10;
ball.velocityX=-5;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();


if(block1.isTouching(ball)&& ball.bounceOff(block1)){
    music.play();
    ball.shapeColor="red";
}

if(block3.isTouching(ball)&& ball.bounceOff(block3)){
    
    ball.shapeColor="yellow";
}
if(block4.isTouching(ball)&& ball.bounceOff(block4)){
    
    ball.shapeColor="pink";
}


if(block2.isTouching(ball)){
    ball.shapeColor="orange";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}
    
ball.bounceOff(edges);
    //create edgeSprite


drawSprites();
    //add condition to check if box touching surface and make it box
}
