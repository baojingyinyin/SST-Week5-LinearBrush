let d=1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color('#0F4C81'));
}

function draw() {
  
  if(mouseIsPressed){
    strokeWeight(1);
    stroke(254, 197, 208);
    noFill();
     // fill(254, 197, 208, 0.5,0.5);
  ellipse(mouseX, mouseY, d, d);
  // prevent default
  return false;
  }

  if (d>windowWidth){
    d=1;
  }
  
  }

function mousePressed() {
  d = d + 10;
}
  

  
