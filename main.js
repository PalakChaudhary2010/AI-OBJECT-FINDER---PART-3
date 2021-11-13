var Status = "";
objects = [];

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

}

function draw() {
    image(video, 0, 0, 300, 300);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Is Loaded!");
    Status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}