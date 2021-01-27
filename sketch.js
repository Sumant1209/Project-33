const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var score;
var particle;
var turn, gameState;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  l = createSprite(400, 480, 800, 5)    


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    score = 0
    turn = 0
    gameState = "start"
    

    
}
 


function draw() {
  background("black");
  textSize(22)
  text("Score : "+score,20,30);
  text(mouseX+":"+mouseY, 200, 30)
  text("500", 23, 512)
  text("400", 103, 512)
  text("300", 183, 512)
  text("200", 263, 512)
  text("100", 343, 512)
  text("100", 423, 512)
  text("200", 503, 512)
  text("300", 583, 512)
  text("400", 663, 512)
  text("500", 743, 512)
  Engine.update(engine);

  drawSprites()


  if(particle!=null){
    particle.display()

    if(particle.body.position.y>760){
      if(particle.body.position.x<208){
        score=score+500
        particle=null
        if(turn>=5){
          gameState="end"
          text("Game Over", 408, 256)
        }
      }
    }
  }

  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   mousePressed()
}
function mousePressed(){
  if(gameState!=="end"){
    push()
    turn++
    particle=new Particle(mouseX,10, 10, 10)
    console.log("hello")
    pop()
  }
}