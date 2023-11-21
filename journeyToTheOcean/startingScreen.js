console.log("js file is linked");

let backgroundImage;

function preload(){
    backgroundImage = loadImage("images/triobg.jpg");
}

function setup(){
    let cw = createCanvas(600,300);
    cw.parent("canvasWrapper");
}

function draw(){
    background(0,50);
    image(backgroundImage,0,0,600,300);
}
