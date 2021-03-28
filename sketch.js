var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingSprite;
var music;

function preload(){
    music=loadSound("music.mp3");
}

function setup(){
    createCanvas(800,600);


    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite(300,590,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite(500,590,180,20);
    fixSprite1.shapeColor="blue";

    fixSprite4=createSprite(700,590,180,20);
    fixSprite4.shapeColor="yellow";

}

function draw(){
    background(rgb(10,10,10));

    if(movingSprite.x<0){
        music.stop()
        movingSprite.velocityX=3
    }else if(movingSprite.X<800){
        music.stop()
        movingSprite.velocityX=-3
    }
ifisTouching((movingSprite,fixSprite4))

    musicplay();
    movingSprite.shapeColor="yellow";
    bounceOff(movingSprite,fixedSprite4);
}
elseif(isTouching(movingSprite,fixedSprite3));
music.stop()
movingSprite.shapeColor="blue";
bounceOff(movingSprite,fixedsprite3);


elseif(isTouching(movingSprite,fixedsprite2));
music.stop()
movingSprite.shapeColor="green";
bounceOff(movingSprite,fixedsprite2);
movingSprite.velocityX=0;
movingSprite.velocityY=0;

elseif(isTouching(movingSprite,fixedSprite1));
music.stop()
movingSprite.velocityX=3;


drawSprites()
