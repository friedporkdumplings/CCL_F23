let walls = [];
let time = 0;

let eren;
let UpKeyPressed = false;
let DownKeyPressed = false;
let LeftKeyPressed = false;
let RightKeyPressed = false;
let displayEndingScene = false;
let endingScene;
let wingsObstacle;

let titan1;
let titan2;
let titan3;

let doorUnlocked = false;
let door;
let key;

let flower;
let bird;
let scarf;
let knife;
let glove;
let baseball;


function preload() {
  erenSprite = loadImage('images/erenSprite.png'); 
  wingsSprite = loadImage('images/wof.png')
  endingScene = loadImage('images/endingScene.jpg');
  titanSprite = loadImage('images/titanSprite.png');
  beastSprite = loadImage('images/beastSprite.png');
  flowerSprite = loadImage('images/flower.png');
  birdSprite = loadImage('images/bird.png');
  doorSprite = loadImage('images/door.png');
  keySprite = loadImage('images/key.png');
  mapASprite = loadImage('images/map.jpg');
  jawSprite = loadImage('images/jawSprite.png');
  scarfSprite = loadImage('images/scarf.png');
  knifeSprite = loadImage('images/knife.png');
  gloveSprite = loadImage('images/glove.png');
  baseballSprite = loadImage('images/baseball.png');

  gameMusic = loadSound('sounds/gameMusic.mp3');
  titanTouched = loadSound('sounds/titanTouched.wav');
  keyCollected = loadSound('sounds/keyCollected.wav');
  teleported = loadSound('sounds/teleported.wav');
  footSteps = loadSound('sounds/footSteps.mp4');
  oceanWaves = loadSound('sounds/oceanWaves.mp3');
  win = loadSound('sounds/win.mp3');
}

function setup() {
  let cw = createCanvas(800,500);
  cw.parent("canvasWrapper"); 

  gameMusic.loop();

  walls.push(new MazeWall(2, 2, 2, 500));
  walls.push(new MazeWall(2, 2, 370, 2));
  walls.push(new MazeWall(320, 2, 745, 2));
  walls.push(new MazeWall(425, 2, 800, 2));
  walls.push(new MazeWall(798, 0, 798, 500));
  walls.push(new MazeWall(428, 498, 800, 498));
  walls.push(new MazeWall(371, 498, 0, 498));
  walls.push(new MazeWall(0, 100, 55, 100));
  walls.push(new MazeWall(0, 200, 55, 200));
  walls.push(new MazeWall(55, 200, 55, 150));
  walls.push(new MazeWall(0, 300, 110, 300));
  walls.push(new MazeWall(0, 445, 160, 445));
  walls.push(new MazeWall(55, 50, 160, 50));
  walls.push(new MazeWall(160, 50, 160, 150));
  walls.push(new MazeWall(160, 150, 375, 150));
  walls.push(new MazeWall(215, 150, 215, 50));
  walls.push(new MazeWall(215, 50, 270, 50));
  walls.push(new MazeWall(110, 100, 110, 250));
  walls.push(new MazeWall(55, 250, 165, 250));
  walls.push(new MazeWall(165, 250, 165, 300));
  walls.push(new MazeWall(55, 350, 55, 395));
  walls.push(new MazeWall(55, 350, 215, 350));
  walls.push(new MazeWall(110, 200, 270, 200));
  walls.push(new MazeWall(215, 200, 215, 350));
  walls.push(new MazeWall(105, 395, 215, 395));
  walls.push(new MazeWall(215, 395, 215, 500));
  walls.push(new MazeWall(265, 350, 265, 500));
  walls.push(new MazeWall(215, 300, 375, 300));
  walls.push(new MazeWall(320, 300, 320, 445));
  walls.push(new MazeWall(320, 150, 320, 250));
  walls.push(new MazeWall(265, 250, 425, 250));
  walls.push(new MazeWall(375, 300, 375, 500));
  walls.push(new MazeWall(425, 250, 425, 500));
  walls.push(new MazeWall(375, 200, 375, 250));
  walls.push(new MazeWall(425, 350, 480, 350));
  walls.push(new MazeWall(425, 450, 480, 450));
  walls.push(new MazeWall(370, 0, 370, 50));
  walls.push(new MazeWall(370, 50, 430, 50));
  walls.push(new MazeWall(320, 50, 320, 100));
  walls.push(new MazeWall(265, 100, 530, 100));
  walls.push(new MazeWall(480, 100, 480, 50));
  walls.push(new MazeWall(480, 50, 690, 50));
  walls.push(new MazeWall(430, 100, 430, 150));
  walls.push(new MazeWall(430, 150, 480, 150));
  walls.push(new MazeWall(530, 100, 530, 150));
  walls.push(new MazeWall(425, 200, 480, 200));
  walls.push(new MazeWall(480, 200, 480, 300));
  walls.push(new MazeWall(480, 250, 530, 250));
  walls.push(new MazeWall(533, 250, 533, 445));
  walls.push(new MazeWall(480, 400, 530, 400));
  walls.push(new MazeWall(535, 445, 690, 445));
  walls.push(new MazeWall(535, 300, 585, 300));
  walls.push(new MazeWall(585, 350, 585, 395));
  walls.push(new MazeWall(585, 395, 635, 395));
  walls.push(new MazeWall(635, 200, 635, 395));
  walls.push(new MazeWall(585, 50, 585, 250));
  walls.push(new MazeWall(530, 200, 585, 200));
  walls.push(new MazeWall(585, 250, 635, 250));
  walls.push(new MazeWall(585, 150, 690, 150));
  walls.push(new MazeWall(690, 150, 690, 200));
  walls.push(new MazeWall(690, 200, 800, 200));
  walls.push(new MazeWall(745, 0, 745, 150));
  walls.push(new MazeWall(640, 100, 740, 100));
  walls.push(new MazeWall(630, 250, 745, 250));
  walls.push(new MazeWall(745, 250, 745, 400));
  walls.push(new MazeWall(635, 345, 690, 345));
  walls.push(new MazeWall(690, 345, 690, 300));
  walls.push(new MazeWall(690, 445, 690, 400));
  walls.push(new MazeWall(690, 400, 745, 400));
  walls.push(new MazeWall(745, 445, 800, 445));

  
  eren = new Eren();
  titan1 = new Titan1();
  titan2 = new Titan2();
  titan3 = new Titan3();

  wingsObstacle = new WingsObstacle(700, 400);

  bird = new Bird();
  flower = new Flower();
  key = new Key();
  door = new Door();
  mapA = new MapA();

  scarf = new Scarf();
  knife = new Knife();
  glove = new Glove();
  baseball = new Baseball();
}

function draw() {
  let initialBgColor = color(255, 210, 231);
  let oscillatingBgColor = lerpColor(color(224, 174, 230), initialBgColor, 0.5 + 0.5 * sin(time));
   background(oscillatingBgColor);
   
  for (let wall of walls) {
    wall.display();
  }

  eren.update();
  eren.displaySparkles();
  eren.display();

  titan1.update();
  titan1.display();

  titan2.update();
  titan2.display();

  titan3.update();
  titan3.display();

  time += 0.01;

  bird.display();
  bird.update();
  flower.display();
  flower.update(); 
  key.display();
  key.update();
  door.display();
  door.update();
  mapA.display();

  scarf.display();
  scarf.update();
  knife.display();
  knife.update(); 
  glove.display();
  glove.update();
  baseball.display();
  baseball.update();


  if (displayEndingScene) {
    image(endingScene, 0, 0, width, height);
  } else {
    // display the walls
    for (let wall of walls) {
      wall.display();
    }
    wingsObstacle.display();
    // check collision with the wings obstacle (trigger for ending scene)
    wingsObstacle.checkCollisionWithEren(eren);
}
}






// maze 
class MazeWall {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  display() {
    // continuously change the color of the walls from one to another and back
    let initialColor = color(191, 107, 153);
    let oscillatingColor = lerpColor(color(140, 57, 153), initialColor, 0.5 + 0.5 * sin(time+3)); 
    stroke(oscillatingColor);
    strokeWeight(5);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}

function keyPressed() {
  if (keyCode === 87) { // w
    UpKeyPressed = true;
  } else if (keyCode === 83) { // s
    DownKeyPressed = true;
  } else if (keyCode === 65) { // a
    LeftKeyPressed = true;
  } else if (keyCode === 68) { // d
    RightKeyPressed = true;
  }
}

function keyReleased() {
  if (keyCode === 87) { 
    UpKeyPressed = false;
  } else if (keyCode === 83) { 
    DownKeyPressed = false;
  } else if (keyCode === 65) { 
    LeftKeyPressed = false;
  } else if (keyCode === 68) {
    RightKeyPressed = false;
  }
}







// eren sprite 
class Eren {
  constructor() {
    this.radius = 15;
    this.x = 395;
    this.y = 32;
    this.sparkleRows = [];
    this.numRows = 5; 
    this.maxSparklesPerRow = 50; 

    // initialize sparkle trail rows
    for (let i = 0; i < this.numRows; i++) {
      this.sparkleRows.push([]);
    }
  }
  

  update() {
    this.checkCollision();
    if (UpKeyPressed) {
      this.y -= 2;
    }
    if (DownKeyPressed) {
      this.y += 2;
    }
    if (LeftKeyPressed) {
      this.x -= 2;
    }
    if (RightKeyPressed) {
      this.x +=2;
    }

    if (UpKeyPressed || DownKeyPressed || LeftKeyPressed || RightKeyPressed) {
      this.playFootstepsSound();
    }

    this.sparkleRows.forEach((row, index) => {
      row.push(createVector(this.x, this.y-10 + index * 5)); 

      if (row.length > this.maxSparklesPerRow) {
        row.shift(); // delete oldest sparkle
      }
    });
  }
  
  
  checkCollision() {
    let erenLeft = this.x - this.radius;
    let erenRight = this.x + this.radius;
    let erenTop = this.y - this.radius;
    let erenBottom = this.y + this.radius;

    // check walls
    for (let wall of walls) {
      let wallLeft = min(wall.x1, wall.x2);
      let wallRight = max(wall.x1, wall.x2);
      let wallTop = min(wall.y1, wall.y2);
      let wallBottom = max(wall.y1, wall.y2);
      if (
        erenLeft < wallRight &&
        erenRight > wallLeft &&
        erenTop < wallBottom &&
        erenBottom > wallTop
      ) {
        this.resetPosition();
      }
    }

    // check titan 1
    let titan1Left = titan1.x - titan1.radius;
    let titan1Right = titan1.x + titan1.radius;
    let titan1Top = titan1.y - titan1.radius;
    let titan1Bottom = titan1.y + titan1.radius;
    if (
      erenLeft < titan1Right &&
      erenRight > titan1Left &&
      erenTop < titan1Bottom &&
      erenBottom > titan1Top
    ) {
      this.playTitanTouchedSound();
      this.restart();
    }

    // check titan 2
    let titan2Left = titan2.x - titan2.radius;
    let titan2Right = titan2.x + titan2.radius;
    let titan2Top = titan2.y - titan2.radius;
    let titan2Bottom = titan2.y + titan2.radius;
    if (
      erenLeft < titan2Right &&
      erenRight > titan2Left &&
      erenTop < titan2Bottom &&
      erenBottom > titan2Top
    ) {
      this.playTitanTouchedSound();
      this.restart();
    }

    // check titan 3
    let titan3Left = titan3.x - titan3.radius;
    let titan3Right = titan3.x + titan3.radius;
    let titan3Top = titan3.y - titan3.radius;
    let titan3Bottom = titan3.y + titan3.radius;
    if (
      erenLeft < titan3Right &&
      erenRight > titan3Left &&
      erenTop < titan3Bottom &&
      erenBottom > titan3Top
    ) {
      this.playTitanTouchedSound();
      this.restart();
    }

    // check flower
    let flowerLeft = flower.x - flower.radius;
    let flowerRight = flower.x + flower.radius;
    let flowerTop = flower.y - flower.radius;
    let flowerBottom = flower.y + flower.radius;
    if (
      erenLeft < flowerRight &&
      erenRight > flowerLeft &&
      erenTop < flowerBottom &&
      erenBottom > flowerTop
    ) {
      this.playTeleportedSound(); 
      this.x = bird.x;
      this.y = bird.y;
    }

    // check key
    let keyLeft = key.x - key.radius;
    let keyRight = key.x + key.radius;
    let keyTop = key.y - key.radius;
    let keyBottom = key.y + key.radius;
    if (
      erenLeft < keyRight &&
      erenRight > keyLeft &&
      erenTop < keyBottom &&
      erenBottom > keyTop
    ) {
      // unlock the door
      this.doorUnlocked = true;
      this.playKeyCollectedSound();
      key.collect();
    }

    // check door
    let doorLeft = door.x - door.radius;
    let doorRight = door.x + door.radius;
    let doorTop = door.y - door.radius;
    let doorBottom = door.y + door.radius;
    if (
      erenLeft < doorRight &&
      erenRight > doorLeft &&
      erenTop < doorBottom &&
      erenBottom > doorTop
    ) {
      if (this.doorUnlocked) {
        this.playTeleportedSound(); 
        this.x = mapA.x;
        this.y = mapA.y;
        this.keyUsed();
      }
    }

    // check knife
    let knifeLeft = knife.x - knife.radius;
    let knifeRight = knife.x + knife.radius;
    let knifeTop = knife.y - knife.radius;
    let knifeBottom = knife.y + knife.radius;
    if (
      erenLeft < knifeRight &&
      erenRight > knifeLeft &&
      erenTop < knifeBottom &&
      erenBottom > knifeTop
    ) {
      this.playTeleportedSound(); 
      this.x = scarf.x;
      this.y = scarf.y;
    }

    // check ball
    let baseballLeft = baseball.x - baseball.radius;
    let baseballRight = baseball.x + baseball.radius;
    let baseballTop = baseball.y - baseball.radius;
    let baseballBottom = baseball.y + baseball.radius;
    if (
      erenLeft < baseballRight &&
      erenRight > baseballLeft &&
      erenTop < baseballBottom &&
      erenBottom > baseballTop
    ) {
      this.playTeleportedSound(); 
      this.x = glove.x;
      this.y = glove.y;
    }
  }

  // make eren go back to where he was before user touched walls
  resetPosition() {
    if (UpKeyPressed) {
      this.y += 10;
    }
    if (DownKeyPressed) {
      this.y -= 10;
    }
    if (LeftKeyPressed) {
      this.x +=10;
    }
    if (RightKeyPressed) {
      this.x -= 10;
    }
    UpKeyPressed = DownKeyPressed = LeftKeyPressed = RightKeyPressed = false;
  }

  restart(){
    doorUnlocked = false;
    key.collected = false;
    this.x = 395;
    this.y = 32;
  }

  keyUsed() {
    key.hide(); 
  }

  displaySparkles() {
    noStroke();
    fill(255); 

    // display sparkles for each row
    this.sparkleRows.forEach((row, index) => {
      fill(255); 

      row.forEach((sparkle) => {
        ellipse(sparkle.x, sparkle.y, random(1,5), random(1,5)); 
      });
    });
  }

  playTitanTouchedSound() {
    titanTouched.play();
  }

  playTeleportedSound() {
    teleported.play();
  }

  playFootstepsSound() {
    if (!footSteps.isPlaying()) {
      footSteps.play();
    }
  }

  playKeyCollectedSound() {
    keyCollected.play();
  }
  

  display() {
    fill(255, 0, 0);
    image(erenSprite, this.x - this.radius, this.y - this.radius, this.radius * 1.3, this.radius * 2);

    if (key.hidden){
    }
    else if (key.collected && !doorUnlocked) {
      let radius = 20;
      image(keySprite, this.x - this.radius / 2, this.y - this.radius - this.radius, this.radius * 1, this.radius * 1);
    }

  }
}







// wings obstacle  
class WingsObstacle {
  constructor(x, y) {
    this.x = 380;
    this.y = 450;
    this.width = 40; 
    this.height = 50;
  }
  display() {
    image(wingsSprite, this.x, this.y, this.width, this.height);
  }

  // check if eren is touching wings 
  checkCollisionWithEren(eren) {
    if (
      eren.x - eren.radius < this.x + this.width &&
      eren.x + eren.radius > this.x &&
      eren.y - eren.radius < this.y + this.height &&
      eren.y + eren.radius > this.y
    ) {
      // once eren touches the wings the display will change to the ending scene
      win.play();
      displayEndingScene = true;
      footSteps.stop();
      gameMusic.stop();
      oceanWaves.play();
    }
  }
}




// colossal titan
class Titan1 {
  constructor() {
    this.radius = 21;
    this.x = 10;
    this.y = 26;
    this.speed = 2.8;
  }

  update() {
    this.x += this.speed; 
    if(this.x>=350 || this.x<0 ){
      this.speed = this.speed*-1;
    }
  }

  display() {
    fill(255, 0, 0);
    image(titanSprite, this.x - this.radius, this.y - this.radius, this.radius * 1.5, this.radius * 2);
  }
}




// beast titan
class Titan2 {
  constructor() {
    this.radius = 22;
    this.x = 240;
    this.y = 277;
    this.speed = 3;
  }

  update() {
    this.x += this.speed; 
    if(this.x>=400|| this.x<240 ){
      this.speed = this.speed*-1;
    }
  }

  display() {
    fill(255, 0, 0);
    image(beastSprite, this.x - this.radius, this.y - this.radius, this.radius * 1.5, this.radius * 2);
  }
}

class Titan3 {
  constructor() {
    this.radius = 20;
    this.x = 346.5;
    this.y = 177;
    this.speed = .6;
  }

  update() {
    this.x += this.speed; 
    if(this.x>=559.5|| this.x<346.5 ){
      this.speed = this.speed*-1;
    }
  }

  display() {
    fill(255, 0, 0);
    image(jawSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}


class Bird {
  constructor() {
    this.radius = 16;
    this.x = 79;
    this.y = 180;
    this.noiseOffsetX = random(0, 1000);
    this.noiseOffsetY = random(0, 1000);
    this.initialX = this.x; 
    this.initialY = this.y;
  }
  update() {
    const maxWiggle = 10; 
    const noiseX = noise(this.noiseOffsetX) * maxWiggle;
    const noiseY = noise(this.noiseOffsetY) * maxWiggle;

    this.x = this.initialX + noiseX;
    this.y = this.initialY + noiseY;

    this.noiseOffsetX += 0.01;
    this.noiseOffsetY += 0.01;
  }
  display() {
    fill(255, 0, 0);
    image(birdSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}

class Flower {
  constructor() {
    this.radius = 23;
    this.x = 605;
    this.y = 90;
    this.noiseOffsetX = random(0, 1000);
    this.noiseOffsetY = random(0, 1000);
    this.initialX = this.x; 
    this.initialY = this.y;
  }
  update() {
    const maxWiggle = 20; 
    const noiseX = noise(this.noiseOffsetX) * maxWiggle;
    const noiseY = noise(this.noiseOffsetY) * maxWiggle;

    this.x = this.initialX + noiseX;
    this.y = this.initialY + noiseY;

    this.noiseOffsetX += 0.01;
    this.noiseOffsetY += 0.01;
  }
  display() {
    fill(255, 0, 0);
    image(flowerSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}

class Key {
  constructor() {
    this.radius = 23;
    this.x = 720;
    this.y = 325;
    this.collected = false;
    this.hidden = false; 
    this.noiseOffsetX = random(0, 1000);
    this.noiseOffsetY = random(0, 1000);
    this.initialX = this.x; 
    this.initialY = this.y;
  }
  update() {
    const maxWiggle = 20; 
    const noiseX = noise(this.noiseOffsetX) * maxWiggle;
    const noiseY = noise(this.noiseOffsetY) * maxWiggle*1.5;

    this.x = this.initialX + noiseX;
    this.y = this.initialY + noiseY;

    this.noiseOffsetX += 0.01;
    this.noiseOffsetY += 0.05;
  }

  collect() {
    this.collected = true;
  }

  hide() {
    this.hidden = true;
  }

  display() {
    if (!this.collected && !this.hidden) {
      fill(255, 0, 0);
      image(keySprite, this.x - this.radius, this.y - this.radius, this.radius * 1, this.radius * 2);
    }
  }
}

class Door {
  constructor() {
    this.radius = 15;
    this.x = 289;
    this.y = 380;
  }
  update() {

  }
  display() {
    fill(255, 0, 0);
    image(doorSprite, this.x - this.radius, this.y - this.radius, this.radius * 2.5, this.radius * 3);
  }
}

class MapA {
  constructor() {
    this.radius = 20;
    this.x = 400;
    this.y = 320;
  }
  display() {
    fill(255, 0, 0);
    image(mapASprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}

class Scarf {
  constructor() {
    this.radius = 15;
    this.x = 580;
    this.y = 273;
    this.noiseOffsetX = random(0, 1000);
    this.noiseOffsetY = random(0, 1000);
    this.initialX = this.x; 
    this.initialY = this.y;
  }
  update() {
    const maxWiggle = 2; 
    const noiseX = noise(this.noiseOffsetX) * maxWiggle*2;
    const noiseY = noise(this.noiseOffsetY) * maxWiggle;

    this.x = this.initialX + noiseX;
    this.y = this.initialY + noiseY;

    this.noiseOffsetX += 0.03;
    this.noiseOffsetY += 0.01;
  }
  display() {
    fill(255, 0, 0);
    image(scarfSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}

class Knife {
  constructor() {
    this.radius = 16;
    this.x = 145;
    this.y = 220;
    this.noiseOffsetX = random(0, 1000);
    this.noiseOffsetY = random(0, 1000);
    this.initialX = this.x; 
    this.initialY = this.y;
  }
  update() {
    const maxWiggle = 20; 
    const noiseX = noise(this.noiseOffsetX) * maxWiggle*1.3;
    const noiseY = noise(this.noiseOffsetY) * maxWiggle/2;

    this.x = this.initialX + noiseX;
    this.y = this.initialY + noiseY;

    this.noiseOffsetX += 0.05;
    this.noiseOffsetY += 0.01;
  }
  display() {
    fill(255, 0, 0);
    image(knifeSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}

class Glove {
  constructor() {
    this.radius = 18;
    this.x = 70;
    this.y = 465;
    this.noiseOffsetX = random(0, 1000);
    this.noiseOffsetY = random(0, 1000);
    this.initialX = this.x; 
    this.initialY = this.y;
  }
  update() {
    const maxWiggle = 13; 
    const noiseX = noise(this.noiseOffsetX) * maxWiggle;
    const noiseY = noise(this.noiseOffsetY) * maxWiggle;

    this.x = this.initialX + noiseX;
    this.y = this.initialY + noiseY;

    this.noiseOffsetX += 0.01;
    this.noiseOffsetY += 0.01;
  }
  display() {
    fill(255, 0, 0);
    image(gloveSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}

class Baseball {
  constructor() {
    this.radius = 18;
    this.x = 620;
    this.y = 468;
    this.noiseOffsetX = random(0, 1000);
    this.noiseOffsetY = random(0, 1000);
    this.initialX = this.x; 
    this.initialY = this.y;
  }
  update() {
    const maxWiggle = 25; 
    const noiseX = noise(this.noiseOffsetX) * maxWiggle*1.5;
    const noiseY = noise(this.noiseOffsetY) * maxWiggle/2;

    this.x = this.initialX + noiseX;
    this.y = this.initialY + noiseY;

    this.noiseOffsetX += 0.03;
    this.noiseOffsetY += 0.01;
  }
  display() {
    fill(255, 0, 0);
    image(baseballSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}

