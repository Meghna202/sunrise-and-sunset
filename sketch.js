const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png"
var hour;

function preload() {
  getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
   if(backgroundImg){
      background(backgroundImg);
   }
   textSize(20)
   if(hour>=12){
     text("time "+ hour % 12 + "pm", 900, 60);
   }
   else if(hour===0){
      text("time 12am", 900, 60);
   }
   else {
      text("time "+ hour%12 + "am", 900, 60);
   }
    Engine.update(engine);
}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson = await response.json();
    var datetime = responsejson.datetime;
    hour = datetime.slice(11, 13);
    console.log(hour);

     // add conditions to change the background images from sunrise to sunset
     if(hour==0 && hour<=02){
       bg="sunrise1.png";
    }
    else if(hour>=02 && hour<=04){
        bg="sunrise3.png";
     }
     else if(hour>=04 && hour<=06){
        bg="sunrise4.png";
     }
     else if(hour>=08 && hour<=10){
        bg="sunrise5.png";
     }
     else if(hour>=10 && hour<=12){
        bg="sunrise6.png";
     }
     else if(hour>=12 && hour<=14){
        bg="sunset7.png";
     }
     else if(hour>=14 && hour<=16){
        bg="sunset8.png";
     } 
     else if(hour>=16 && hour<=18){
        bg="sunset9.png";
     } 
     else if(hour>=18 && hour<=20){
        bg="sunset10.png";
     }
     else if(hour>=20 && hour<=22){
        bg="sunset11.png";
     }  
     else {
        bg="sunset12.png";
      }  

     //load the image in backgroundImg variable here
     backgroundImg = loadImage(bg)

}
