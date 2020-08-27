
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(380,200,340,20);
	bobObject1 = new Bob(250,400);
	rope1= new Rope(bobObject1.body,roof.body,20,0);
	bobObject2 = new Bob(300,400);
	bobObject3 = new Bob(350,400);
	bobObject4 = new Bob(400,400);
	bobObject5 = new Bob(450,400);
	bobObject6 = new Bob(500,400);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();
  rope1.display();
  
  drawSprites();
 
}



