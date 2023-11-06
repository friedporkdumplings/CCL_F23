/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(600, 400);
  // ...except to adjust the dancer's name on the next line:
  dancer = new JaeDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class JaeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.radius = 40; // no face character size
    this.blobOffset = 0;
    this.numShapes = 10;
  }
  update() {
    this.x = this.x + sin(this.blobOffset) * 2.5;
    this.y = this.y + cos(this.blobOffset) * 0.2;
    this.blobOffset += 0.03; // bobbing motion speed
  }

  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    
    // body
    push();
    translate(this.x, this.y);
    strokeWeight(1);
    fill(0, 127); // white with 50% opacity
    stroke(200, 100); // light gray with 40% opacity
    beginShape();
    curveVertex(-38, 200);
    curveVertex(-37, 170);
    curveVertex(-37, 130);
    curveVertex(-37, 125);
    curveVertex(-35, 100);
    curveVertex(-32, 75);
    curveVertex(-30, 50);
    curveVertex(-25, 10);
    curveVertex(-10, -20);
    curveVertex(10, -20);
    curveVertex(25, 10);
    curveVertex(30, 50);
    curveVertex(32, 75);
    curveVertex(35, 100);
    curveVertex(37, 125);
    curveVertex(37, 130);
    curveVertex(37, 150);
    curveVertex(38, 170);
    curveVertex(28, 160);
    line(-38,170,38,170);
    endShape();

    // mask 
    fill("white");
    translate(0,15);
    push();
    rect(
      -this.radius * 0.5,
      -this.radius,
      this.radius * 1,
      this.radius * 1.8, 
      20
    );
    pop();
    
    noStroke();
    fill(200, 150, 255);
    triangle(11, -25, 15, -16, 6, -16);
    triangle(-9, -25, -5, -16, -14, -16);
    triangle(11, 4, 6, -5, 15, -5);
    triangle(-9, 4, -14, -5, -5, -5);

    // eyes (two ellipses)
    fill(0);
    ellipse(10,-10,10,6);
    ellipse(-10,-10,10,6);

    // mouth 
    fill("black");
    ellipse(1,10,22,5) ;   
    pop();
  }
  
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/
