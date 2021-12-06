// x and y for my character
var playerX = 100;
var playerY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
    createcanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getrandomnumber(500);
        shapeYs[i] = getrandomnumber(600);
        diameters[i] = getrandomnumber(30);
    }

    createplayer(200, 350);
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    // call createBorders function
    createborders(10);

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,350);
    drawplayer();
    playermovement();


    // potential enemy
    fill(13, 145, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
    // check to see if the character has left the exit
    if (playerX > width && playerY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    // create the shape based on the mouse click
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function playermovement() {
    // handle the keys
    if (keyIsDown(w)) {
        playerY -= 10;
    }
    if (keyIsDown(s)) {
        playerY += 10;
    }
    if (keyIsDown(a)) {
        playerX -= 10;
        console.log("movement: " + playerX);
    }
    if (keyIsDown(d)) {
        playerX += 10;
    }
}

function createplayer(x, y) {
    playerX = x;
    playerY = y;
}

function drawplayer() {
    fill(23, 40, 123);
    circle(playerX, playerY, 25);
}

function createborders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseclicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getrandomnumber(number) {
    return Math.floor(Math.random() * number) + 10;
}