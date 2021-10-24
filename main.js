function setup(){
    var canvas =  createCanvas(700,600);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log('Model Loaded Successfully');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
    }
}
function draw() {
    image(video, 0, 0, 700, 600);
}
