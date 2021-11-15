harrypotter = "music.mp3";
peterpan = "music2.mps"  ;
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function preload() {
    loadSound = "music.mp3";
    loadSound = "music2.mp3";
}

function setup() {
    video = createCapture(VIDEO)
    video.size(550,550);
    video.hide();

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function draw() {
    image(video,0,0,600,500);
}

function gotPoses() {
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristY = results[0].pose.rightWrist.y;
    }
}