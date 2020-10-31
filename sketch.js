const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, engine, world;//missing variables

function setup() {
 
  createCanvas(800,400);
  engine = Engine.create(); //missed engine creation
  world = engine.world; //missed world creation
  Engine.run(engine); //missed engine run
  //create the sprite for the first stand
  stand1 = new Ground (200, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  stand1.display();  
  drawSprites();
}