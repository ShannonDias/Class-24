const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    log1 = new Log (810,260,320,PI/2)
    pig1 = new Pig(810,350)
    box3 = new Box(700,250,70,70);
    box4 = new Box(920,250,70,70);
    log2 = new Log (810,180,320,PI/2)
    pig2 = new Pig(810,225)
    box5 = new Box(810,160,70,70);
    log3 = new Log (740,150,170,PI/4)
    log4 = new Log (840,150,170,-PI/4)
    ground = new Ground(600,height,1200,20)
    bird = new Bird(100,100)
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    log1.display();
    pig1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    ground.display();
    bird.display();
    
    
}