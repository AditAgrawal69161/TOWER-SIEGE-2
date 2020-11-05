const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;
var box13,box14;
var box15;

var bbox1,bbox2,bbox3,bbox4,bbox5;
var bbox6,bbox7,bbox8,bbox9;
var bbox10,bbox11,bbox12;
var bbox13,bbox14;
var bbox15;

var polyImg;

var slingshot;

function preload(){
  polyImg = loadImage("images/polygon.png")

}

function setup() {
  createCanvas(1360,600);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(450,600,1360,20);

  platform1 = new Ground(580,530,260,20); 
  platform2 = new Ground(1100,270,260,20); 

  box1 = new Box(580,498,30,40);
  box2 = new Box(620,498,30,40);
  box3 = new Box(660,498,30,40);
  box4 = new Box(540,498,30,40);
  box5 = new Box(500,498,30,40);

  box6 = new Box(560,458,30,40);
  box7 = new Box(600,458,30,40);
  box8 = new Box(640,458,30,40);
  box9 = new Box(520,458,30,40);

  box10 = new Box(540,418,30,40);
  box11 = new Box(580,418,30,40);
  box12 = new Box(620,418,30,40);

  box13 = new Box(560,378,30,40);
  box14 = new Box(600,378,30,40);

  box15 = new Box(580,338,30,40);

  bbox1 = new Box(1080,250,30,40);
  bbox2 = new Box(1120,250,30,40);
  bbox3 = new Box(1160,250,30,40);
  bbox4 = new Box(1040,250,30,40);
  bbox5 = new Box(1000,250,30,40);

  bbox6 = new Box(1060,200,30,40);
  bbox7 = new Box(1100,200,30,40);
  bbox8 = new Box(1140,200,30,40);
  bbox9 = new Box(1020,200,30,40);

  bbox10 = new Box(1040,170,30,40);
  bbox11 = new Box(1080,170,30,40);
  bbox12 = new Box(1120,170,30,40);

  bbox13 = new Box(1060,130,30,40);
  bbox14 = new Box(1100,130,30,40);

  bbox15 = new Box(1080,90,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new SlingShot(this.ball,{x:100, y:200})


}

function draw() {
background(20,100,100);  
textSize(20);
fill(255);
text("drag the hexagon and launch it towards the boxes.",100,30)

  platform1.display();
  platform2.display();


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

  bbox1.display();
  bbox2.display();
  bbox3.display();
  bbox4.display();
  bbox5.display();

  bbox6.display();
  bbox7.display();
  bbox8.display();
  bbox9.display();

  bbox10.display();
  bbox11.display();
  bbox12.display();

  bbox13.display();
  bbox14.display();

  bbox15.display();


  imageMode(CENTER);
  image(polyImg,ball.position.x,ball.position.y,40,40)
  slingshot.display();

  drawSprites();
  

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
if(keyCode === 32){
 slingshot.attach(ball); 
}
}