var thehour;
var theminute;
var thesecond;
var hangle,mangle,sangle
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);  
  translate(200,200);
  rotate(-90)
  thehour = hour()
  theminute = minute()
  thesecond = second()
  sangle = map(thesecond,0,60,0,360)
  mangle = map(theminute,0,60,0,360)
  hangle = map(thehour%12, 0,12, 0, 360);
  push()
  rotate(hangle);
  strokeWeight(6);
  stroke("yellow");
  noFill();
  arc(0,0,240,240,-hangle,0);
  line(0,0,60,0);
  pop();
  push()
  rotate(mangle);
  strokeWeight(4);
  stroke("orange");
  noFill();
  arc(0,0,240,240,-mangle,0);
  line(0,0,80,0);
  pop()
  push()
  rotate(sangle);
  strokeWeight(2);
  stroke("red");
  noFill();
  arc(0,0,240,240,-sangle,0);
  line(0,0,100,0);
  pop()
  
  //line()
  //line()
  stroke("white");
  strokeWeight(10)
  point(0,0);
}