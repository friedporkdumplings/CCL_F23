let meteors = [];
let numOfStars = 400;
let stars = [];
// two classes meteor and star

function setup() {
  createCanvas(600, 400);
  // generate star particles
  for (let i = 0; i < numOfStars; i++) {
    stars[i] = new Star(random(width), random(height));
  }
}

function draw() {
  background(0);
  let blue = color(19, 16, 84);
  let purple = color(47, 4, 66);
  let orange = color(255, 109, 0);

  // gradient effect using lerp to merge between colors
  for (let i = 0; i < height; i++) {
    let mergeColor = lerpColor(blue, purple, i / height);
    mergeColor = lerpColor(mergeColor, orange, i / height);
    stroke(mergeColor);
    line(0, i, width, i);
  }

  // for meteors
  for (let i = meteors.length - 1; i >= 0; i--) {
    meteors[i].update();
    meteors[i].display();

    if (meteors[i].y > height || meteors[i].x > width) {
      meteors.splice(i, 1);
    }
  }

  if (meteors.length < 20) {
    meteors.push(new Meteor());
  }

  // check if splice when offscreen works 
  // console.log(meteors.length);


  // for stars
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    s.display();
    fill("white");
  }
}

class Meteor {
  constructor() {
    this.x = random(-200, 0);
    this.y = random(-500,200);
    this.speed = random(1, 4);
    this.length = random(80, 100);
  }

  update() {
    this.y += this.speed;
    this.x += this.speed;
  }

  display() {
    stroke(255);
    strokeWeight(2);
    line(this.x, this.y, this.x + this.length, this.y + this.length);

  }

  offscreen() {
    return this.y > height;
  }
}

class Star {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.dia = random(2, 5);
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255);
    circle(0, 0, this.dia);
    pop();
  }
}
