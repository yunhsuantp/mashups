var js = document.createElement("script");
js.type = "text/javascript";
js.src =  'scripts.js';
 
js.onreadystatechange = function(){ var s = new MyObject(); } //callback
js.onload = function(){} //callback
 
document.body.appendChild(js);



function setup(){

  createCanvas(500,500);
  image(theImage, 0, 0);
}

function draw(){
  arc(width /2, height / 2, 50,50, radians(180), TWO_PI);
  ellipse(width /2 , height / 2, 50, 50);
}