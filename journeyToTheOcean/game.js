let walls = [];
let eren;
let isUpKeyPressed = false;
let isDownKeyPressed = false;
let isLeftKeyPressed = false;
let isRightKeyPressed = false;
let wings;
let wingsObstacle;
let endingScene;
let displayEndingScene = false;

function preload() {
  erenSprite = loadImage('images/erenSprite.png'); 
  wings = loadImage('images/wof.png')
  endingScene = loadImage('images/endingScene.jpg');
}

function setup() {
  let cw = createCanvas(800,500);
  cw.parent("canvasWrapper"); 
  walls.push(new MazeWall(2, 2, 2, 500));
  walls.push(new MazeWall(2, 2, 370, 2));
  walls.push(new MazeWall(425, 2, 745, 2));
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

  wingsObstacle = new WingsObstacle(700, 400);
  eren = new Eren();
}

function draw() {
  background(255, 210, 231);

  for (let wall of walls) {
    wall.display();
  }

  eren.update();
  eren.display();
  
    // Check if the ending scene should be displayed
  if (displayEndingScene) {
    // Display the ending scene
    image(endingScene, 0, 0, width, height);
  } else {
    // Display the walls
    for (let wall of walls) {
      wall.display();
    }

    // Display the wings obstacle
    wingsObstacle.display();

    // Check collision with the wings obstacle
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
    stroke(191, 107, 153);
    strokeWeight(5);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}


// key pressed and key released instead of just keypressed because i didn't
// like having to continously press one key over and over again for movement
// when i can press and hold a key
function keyPressed() {
  if (keyCode === UP_ARROW) {
    isUpKeyPressed = true;
  } else if (keyCode === DOWN_ARROW) {
    isDownKeyPressed = true;
  } else if (keyCode === LEFT_ARROW) {
    isLeftKeyPressed = true;
  } else if (keyCode === RIGHT_ARROW) {
    isRightKeyPressed = true;
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    isUpKeyPressed = false;
  } else if (keyCode === DOWN_ARROW) {
    isDownKeyPressed = false;
  } else if (keyCode === LEFT_ARROW) {
    isLeftKeyPressed = false;
  } else if (keyCode === RIGHT_ARROW) {
    isRightKeyPressed = false;
  }
}







// eren sprite 

class Eren {
  constructor() {
    this.radius = 15;
    this.x = 395;
    this.y = 30;
  }

  update() {
    this.checkCollision();
    if (isUpKeyPressed) {
      this.y -= 2;
    }
    if (isDownKeyPressed) {
      this.y += 2;
    }
    if (isLeftKeyPressed) {
      this.x -= 2;
    }
    if (isRightKeyPressed) {
      this.x += 2;
    }
  }
  
  // check if eren sprite is touching wall object
  checkCollision() {
    let erenLeft = this.x - this.radius;
    let erenRight = this.x + this.radius;
    let erenTop = this.y - this.radius;
    let erenBottom = this.y + this.radius;

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
  }

  // make eren go back to where he was before user touched walls
  resetPosition() {
    if (isUpKeyPressed) {
      this.y += 2;
    }
    if (isDownKeyPressed) {
      this.y -= 2;
    }
    if (isLeftKeyPressed) {
      this.x += 2;
    }
    if (isRightKeyPressed) {
      this.x -= 2;
    }
    isUpKeyPressed = isDownKeyPressed = isLeftKeyPressed = isRightKeyPressed = false;
  }

  display() {
    fill(255, 0, 0);
    image(erenSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
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
    image(wings, this.x, this.y, this.width, this.height);
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
      displayEndingScene = true;
    }
  }
}