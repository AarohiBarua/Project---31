const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles;
var plinko1,plinko2,plinko3,plinko4,plinko5;
var plinko6,plinko7,plinko8,plinko9,plinko10;
var division;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,height,800,20);
  division = new Ground(150,305,10,300);
  plinko1 = new Plinko(800,300,70,70);
  plinko2 = new Plinko(800,300,70,70);
  plinko3 = new Plinko(700,300,70,70);
  plinko4 = new Plinko(600,300,70,70);
  plinko5 = new Plinko(500,300,70,70);
  plinko6 = new Plinko(400,300,70,70);
  plinko7 = new Plinko(300,300,70,70);
  plinko8 = new Plinko(200,300,70,70);
  plinko9 = new Plinko(100,300,70,70);
  plinko10 = new Plinko(100,300,70,70);
}

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  division.display();
  ground.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
}