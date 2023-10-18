// variables for the creature
let numHeads = 5; // number of creatures
let headSize;
let maxSize;
let xPosition;
let growing = true;
let spacing = 200;
let headPosition = [500, 50, 350, 100, 420];

// variabls for bubbles
let bubbleCount = 20; // number of bubbles
let bubbleX = [];
let bubbleY = [];
let bubbleRadius = [];
let bubbleSpeed = [];
let bubbleColor = [];

// variables for food
let foodButton;
let foodEaten = 0;
let ySpeedMultiplier = 1; // going to be changed to control creature speedgoing up later
let foodFlakes = [];

// variables for magnifying glass
let magnifyingGlassRadius = 100;
let magnifyingGlassX = 400;
let magnifyingGlassY = 250;
let zoomedIn = false;

function setup() {
  createCanvas(800, 500);
  maxSize = 80;
  headSize = maxSize;
  noStroke();

  // creates bubbles
  for (let i = 0; i < bubbleCount; i++) {
    bubbleX.push(random(width));
    bubbleY.push(random(height));
    bubbleRadius.push(random(5, 15));
    bubbleSpeed.push(random(1, 2));
    bubbleColor.push(color(107, 214, 253, 50));
  }

  // create food button
  foodButton = createButton("Food");
  foodButton.position(10, 10);
  foodButton.mousePressed(feedCreatures);

  // create the magnifying glass
  createMagnifyingGlass();
}

function draw() {
  background(0);

  if (zoomedIn) {
     displayCreatures();
  } else {
    displayMagnifyingGlass();
  }
}

  // i wanted to generate some random points inside the magnifying glass but didn't know how to constrain it to stay only within the circle area so i used chatgpt to create my boundaries 
function createMagnifyingGlass() {
  fill(0);
  stroke(255);
  strokeWeight(3);
  ellipse(magnifyingGlassX, magnifyingGlassY, magnifyingGlassRadius * 2);
  ellipse(magnifyingGlassX, magnifyingGlassY, magnifyingGlassRadius * 1.8);
  rect(500, 245, 80, 20);
  textAlign(CENTER, CENTER);
  fill(255);
  noStroke();
  textSize(20);
  text("Click to Zoom In", magnifyingGlassX, magnifyingGlassY);
  
  let leftBound = 350;
  let rightBound = 460;
  let topBound = 180;
  let bottomBound = 320;

  for (let i = 0; i < 5; i++) {
    let x = random(leftBound, rightBound);
    let y = random(topBound, bottomBound);

    let pointColor = color(random(255), random(255), random(255));

    let r = random(255);
    let g = random(255);
    let b = random(255);

    strokeWeight(5);
    stroke(r, g, b); // Set stroke color to random RGB values
    point(x, y);
  }
}

function displayMagnifyingGlass() {
  // display the magnifying glass effect
  fill(0, 150);
  rect(0, 0, width, height);

  // create the magnifying glass effect
  createMagnifyingGlass();
}

function displayCreatures() {
  // displays the creatures

  // Display bubbles
  for (let i = 0; i < bubbleCount; i++) {
    bubbleY[i] -= bubbleSpeed[i];
    if (bubbleY[i] < -bubbleRadius[i]) {
      bubbleY[i] = height;
      bubbleX[i] = random(width);
    }

    fill(100, 150, 255, 100);
    noStroke();
    ellipse(bubbleX[i], bubbleY[i], bubbleRadius[i] * 2, bubbleRadius[i] * 2);
  }
  stroke(141, 95, 223);

  // Pulsing motion
  for (let i = 0; i < numHeads; i++) {
    if (growing) {
      headSize += 0.05;
      if (headSize >= maxSize) {
        growing = false;
      }
    } else {
      headSize -= 1;
      if (headSize <= 65) {
        growing = true;
      }
    }

    headPosition[i] -= 0.5 * ySpeedMultiplier;
    if (headPosition[i] < -headSize) {
      headPosition[i] = height + maxSize;
    }

    drawCreature(
      width / 2 + i * spacing - ((numHeads - 1) * spacing) / 2,
      headPosition[i],
      headSize
    );
  }

  // Display scattered food flakes
  for (let i = 0; i < foodFlakes.length; i++) {
    let flake = foodFlakes[i];
    fill(flake.color);
    noStroke();
    ellipse(flake.x, flake.y, 10, 10);
  }
}

function drawCreature(xPosition, headPosition, headSize) {
  let radius = headSize;
  let tailWidth = 30;
  let tailHeight = 150;

  let r = sin(frameCount * 0.01) * 127 + 128;
  let g = sin(frameCount * 0.02) * 127 + 128;
  let b = sin(frameCount * 0.03) * 127 + 128;

  strokeWeight(3);
  fill(r, g, b);
  stroke(255);
  beginShape();
  for (let i = 0; i <= tailHeight; i += 10) {
    let x = xPosition - tailWidth / 2 + sin(i / 10) * 10;
    let y = headPosition + i;
    vertex(x, y);
  }
  endShape();
  beginShape();
  for (let i = 0; i <= tailHeight; i += 10) {
    let x = xPosition - tailWidth - 10 / 2 + sin(i / 10) * 10;
    let y = headPosition + i - 10;
    vertex(x, y);
  }
  endShape();
  beginShape();
  for (let i = 0; i <= tailHeight; i += 10) {
    let x = xPosition - tailWidth + 70 / 2 + sin(i / 10) * 10;
    let y = headPosition + i - 20;
    vertex(x, y);
  }
  endShape();
  beginShape();
  for (let i = 0; i <= tailHeight; i += 10) {
    let x = xPosition - tailWidth + 110 / 2 + sin(i / 10) * 10;
    let y = headPosition + i - 10;
    vertex(x, y);
  }
  endShape();
  // End of tail shapes

  // Head shape
  beginShape();
  fill(r, g, b);
  for (let angle = PI; angle >= 0; angle -= 0.01) {
    let x = xPosition + radius * cos(angle) * (headSize / maxSize);
    let y = headPosition - radius * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Head detail shape
  beginShape();
  fill(r + 50, g + 50, b + 50); // Slightly lighter colors
  for (let angle = PI; angle >= 0; angle -= 0.01) {
    let x = xPosition + radius * cos(angle) * (headSize / 150);
    let y = headPosition + 12 - radius * sin(angle) - 10;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function feedCreatures() {
  ySpeedMultiplier += 0.5;
  createFoodFlakes();
}

// a bunch of food flakes appear at top of canvas
function createFoodFlakes() {
  for (let i = 0; i < 200; i++) {
    let x = random(0, width);
    let y = random(-20, 30);
    let foodColor = color(random(255), random(255), random(255));
    foodFlakes.push({
      x: x,
      y: y,
      color: foodColor,
      speed: random(1, 2),
    });
  }

  // move food flakes slightly downwards
  setInterval(moveFoodFlakes, 100);

  // food disappears after 1 second
  setTimeout(clearfoodFlakes, 1000);
}

// moves food flakes slightly downwards
function moveFoodFlakes() {
  for (let i = 0; i < foodFlakes.length; i++) {
    foodFlakes[i].y += foodFlakes[i].speed;
  }
}

// empties the foodFlakes array which removes the food flakes
function clearfoodFlakes() {
  foodFlakes = [];
}

function mousePressed() {
  let d = dist(mouseX, mouseY, magnifyingGlassX, magnifyingGlassY);
  if (d < magnifyingGlassRadius) {
    zoomIn();
  }
}

function zoomIn() {
  zoomedIn = true;
}
