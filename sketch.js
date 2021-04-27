
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
backgroundImg = loadImage("GamingBackground.png")

}

function setup() {
	createCanvas(1200, 800);
  

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground = new Ground(600,770,1200,10);
	wreckball = new Ball(550,350,60);
	chain = new Rope(wreckball.body, {x: 550,y: 100});

	box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    box16 = new Box(700,100,70,70);
    box17 = new Box(700,100,70,70);
    box18 = new Box(700,100,70,70);
    box19 = new Box(700,100,70,70);
    box20 = new Box(700,100,70,70);

	Engine.run(engine);
  
}
 



function draw() {
  background(backgroundImg);
 ground.display();
 wreckball.display();
chain.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 
}

function mouseDragged() {
	Matter.Body.setPosition(wreckball.body, {x: mouseX,y: mouseY });
}


