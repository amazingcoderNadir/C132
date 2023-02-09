img = "";
status ="";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload() {
    img = loadImage('dog_cat.jpg');
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("black");
    text("Dog", 45, 75);
    noFill();
    stroke("yellow")
    rect(30, 60, 450, 350);

    fill("black");
    text("Cat", 320, 120);
    noFill();
    stroke("yellow")
    rect(300, 90, 270, 320);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}