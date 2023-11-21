console.log("js is linked!");

let karateChop;
let readyToChop;

let backgroundImage;

let fruit1;

function preload(){
    karateChop = loadSound("sounds/karate.m4a");
    backgroundImage = loadImage("images/gradient-bkg.png")
}

function setup(){   
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
    
    fruit1 = new Fruit (width/2, height/2);
}

function draw(){
    background(0,50);
    image(backgroundImage,0,0,400,400);

    let distance = dist(pmouseX, pmouseY, mouseX, mouseY);
    if(distance > 50 && readyToChop == true){
        karateChop.play();
        readyToChop = false;
    } else if (distance < 10){
        readyToChop = true;
    }
    stroke (255);
    line (pmouseX, pmouseY, mouseX, mouseY);

    fill(255);
    //text(dist,100,100);

    //fruit section
    fruit1.display();
}

function mousePressed(){
    karateChop.play();
}

class Fruit{
    constructor(startX,startY){
        this.x = startX;
        this.y = startY;
    }
    display(){
        push();

        translate(this.x,this.y);

        circle(0,0,50);

        pop();
    }
}