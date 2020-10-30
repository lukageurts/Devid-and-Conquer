function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);

  noStroke();
  fill(255,0,0);
  rect(width/4*2,0,width/4,height/3);
  rect(width/4,height/3,width/4,height/3);
  rect(width/4*3,height/3*2,width/4,height/3);

  stroke(0);
  strokeWeight(1);
  line(0,0,0,windowHeight);
  line(width/4,0,width/4,windowHeight);
  line(width/4*2,0,width/4*2,windowHeight);
  line(width/4*3,0,width/4*3,windowHeight);
  line(width/4*4,0,width/4*4,windowHeight);
 
  line(0,0,windowWidth,0);
  line(0,height/3,windowWidth,height/3);
  line(0,height/3*2,windowWidth,height/3*2);
  line(0,height/3*3,windowWidth,height/3*3);
}

function draw() {
}