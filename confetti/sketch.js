let confettis = [];
let numConfetti = 200;
let backgroundHue = 0;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasWrapper");
  for (let i = 0; i < numConfetti; i++) {
    confettis.push(new Confetti(width / 2, height / 2));
  }

  colorMode(HSB);
  backgroundHue = random(0, 360);
}

function draw() {
  background(backgroundHue, 10, 150);

  
  // Add new confettis on mouse press
  for (let i = 0; i < 3; i++) {
    confettis.push(new Confetti(width / 2, height / 2));
  }

  for (let i = confettis.length - 1; i >= 0; i--) {
    confettis[i].update();
    confettis[i].display();

    /*
    if (confettis.length > 30 ) {
      let index = 0 // which index to delete
      let numDelete = 1; //number of confetti to delete
      confettis.splice(index, numDelete);
    }
    */
  }
  while (confettis.length > 500) {
    let index = 0; // which index to delete
    let numDelete = 10; //number of confetti to delete
    confettis.splice(index, numDelete);
  }
  console.log(confettis.length);
}

class Confetti {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);
    this.hue = random(0, 360);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY = this.speedY + 0.1;
    this.speedX = this.speedX * 0.99;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.hue, 255, 255);
    noStroke();
    circle(0, 0, this.size);
    pop();
  }
}

function mousePressed() {
  for (let i = 0; i < numConfetti; i++) {
    confettis.push(new Confetti(mouseX, mouseY));
  }

}


