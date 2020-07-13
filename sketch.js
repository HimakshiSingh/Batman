

const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
var  raindrop=[]

var symbol
var maxDrops = 100
var umb

function setup() {
  createCanvas(1200,400);
  engine= Engine.create();
  world=engine.world;

  umb = new Umbrella (200,350)
  

 
for(i=0;i<maxDrops;i++)
{
  raindrop.push(new Drop(random(0,1200),random(0,1200)));
}

  
}

function draw() {
  
  background("black");  
  Engine.update(engine)

  for(i=0;i<raindrop.length;i++)
  {
    raindrop[i].display();
    raindrop[i].update();
   
  }
  
  umb.display()

  
 // raindrop.display()
 // drawSprites();
}