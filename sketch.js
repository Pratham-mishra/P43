const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ball1,ball2,ball3,ball5,ball6;
var border1,border2,border3,border4;
var log1,log2,


function setup(){
var canvas = createCanvas(600,600);
engine = Engine.create(engine);
world= engine.world;

border1 = new Border(10,300,10,600);
border2 = new Border(300,10,600,10);
border3 = new Border(590,300,10,600);
border4 = new Border(300,590,600,10);

ball1 = new Ball(200,10,5);

log1 = new Log(200,100,350,10,-PI/7);
log2 = new Log(400,200,450,10,PI/7);
}




function draw(){
background(0); 
Engine.update(engine);

border1.display();
border2.display();
border3.display();
border4.display();

ball1.display();

log1.display();

}