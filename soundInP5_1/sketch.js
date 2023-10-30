console.log("js file is linked");
let clickSound;
// undefined but here as global variable 

function preload(){
    clickSound = loadSound("sounds.beat.mp3");
}

function setup(){
    let cw = createCanvas(400,400);
    cw.parent("canvasWrapper");
}

function draw(){
    background("blue");
}

function mousePressed(){
    clickSound.play();
}