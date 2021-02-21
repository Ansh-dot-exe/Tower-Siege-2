const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9;
var ball, slingShot;
var polygon_img;
var ground;

function preload(){
    polygon_img = loadImage("polygon.png");

}


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);


    ground = new floor(600,height,1200,20);
    b1 = new block(300,275,30,40);
    b2 = new block(330,275,30,40);
    b3 = new block(360,275,30,40);
    b4 = new block(390,275,30,40);
    b5 = new block(420,275,30,40);
    b6 = new block(450,275,30,40);
    b7 = new block(480,275,30,40);

    
    b8 = new block(330,235,30,40);
    b9 = new block(360,235,30,40);
    b10 = new block(390,235,30,40);
    b11 = new block(420,235,30,40);
    b12 = new block(450,235,30,40);

    b13 = new block(360,195,30,40);
    b14 = new block(390,195,30,40);
    b15 = new block(420,195,30,40);

    b16 = new block(390,155,30,40);


    bl1 = new block(640,175,30,40);
  bl2 = new block(670,175,30,40);
  bl3 = new block(700,175,30,40);
  bl4 = new block(730,175,30,40);
  bl5 = new block(760,175,30,40);
  
  bl6 = new block(670,135,30,40);
  bl7 = new block(700,135,30,40);
  bl8 = new block(730,135,30,40);
  
  bl9 = new block(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new sling(this.ball,{x:100,y:200});
    
    
    
}



function draw(){
    background(56,44,44); 
    Engine.update(engine);

    ground.display;
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();

    b13.display();
    b14.display();
    b15.display();

    b16.display();

    bl1.display();
    bl2.display();
    bl3.display();
    bl4.display();
    bl5.display();
    bl6.display();
    bl7.display();
    bl8.display();
    bl9.display();

    stand1.display();
    stand2.display();

    
    slingShot.display();

    image(polygon_img ,ball.position.x,ball.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }

  