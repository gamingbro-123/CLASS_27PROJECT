
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;                   
var roof;





function preload()
{ 
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	bobObject1 = new Bob(450,400,50);
	// bobObject2 = new Bob(400,400,50);
	// bobObject3 = new Bob(350,400,50);
	// bobObject4 = new Bob(300,400,50);
	// bobObject5 = new Bob(250,400,50);


	roof = new Roof(370,100,100,10);
	
	rope1 = new Rope(bobObject1.ball,roof.body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  

  // push();
  fill("#FF00FE");
  bobObject1.display();
  // bobObject2.display();
  // bobObject3.display();
  // bobObject4.display();
  // bobObject5.display();
  // pop();

  roof.display();
  rope1.display();
 

  
  

  drawSprites();

 

 
}


