const engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies;
var eng , wor , drop1,man;
var dr= [];
function preload(){
    thunderimg1 = loadImage("thunderbolt/1.png");
    thunderimg2 = loadImage("thunderbolt/2.png");
    thunderimg3 = loadImage("thunderbolt/3.png");
    thunderimg4 = loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(400,800);
  
   eng = engine.create();
   wor = eng.world;

   man = new umbrella(200,500);
  
    
}

function draw(){
  engine.update(eng);
  background(0);
  if(frameCount%5 === 0){
      drop1 = new drop(random(0,400), -10);
      dr.push(drop1);
  }

  if(frameCount%80 === 0 ){
    thunderbolt = createSprite(random(0,400), random(50,100));
     var r = Math.round(random(1,4));
     switch(r){ 
       case 1 : thunderbolt.addImage("anything", thunderimg1);
       break;
       case 2 : thunderbolt.addImage("anything", thunderimg2);
       break;
       case 3 : thunderbolt.addImage("anything", thunderimg3);
       break;
       case 4 : thunderbolt.addImage("anything", thunderimg4);
       break;
     }
     thunderbolt.lifetime = 40;
     thunderbolt.scale = 0.5;
  }
  

  for(var i=0; i<dr.length; i++){
    dr[i].display();
  }
  console.log(dr[i]);
  man.display();
  drawSprites();


}   

