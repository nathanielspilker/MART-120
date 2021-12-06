var playerX = 100;
var playerY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var enemyX = 30;
var enemyY = 50;

var enemyXs = [];
var enemyYs = [];
var diameters = [];

var enemyXSpeeds = [];
var enemyYSpeeds = [];

var mouseshapeX;
var mouseshapeY;
function setup() {
    createcanvas(500, 600);

    for (var i = 0; i < 50; i++) {
        enemyXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyXs[i] = getRandomNumber(500);
        enemyYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createcharacter(200, 350);
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    createborders(10);

    textSize(16);
    text("EXIT", width - 50, height - 50)

    drawcharacter();
    
    charactermovement();

    fill(13, 145, 14);

    for (var i = 0; i < enemyXs.length; i++) {
        circle(enemyXs[i], enemyYs[i], diameters[i]);
        enemyXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        enemyXs[i] += enemyXSpeeds[i];
        enemyYs[i] += enemyYSpeeds[i];

        if (enemyXs[i] > width) {
            enemyXs[i] = 0;
        }
        if (enemyXs[i] < 0) {
            enemyXs[i] = width;
        }
        if (enemyYs[i] > height) {
            enemyYs[i] = 0;
        }
        if (enemyYs[i] < 0) {
            enemyYs[i] = height;
        }
    }

    if (playerX > width && playerY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    fill(120, 130, 140);
    circle(mouseshapeX, mouseshapeY, 25);
}

function charactermovement() {

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

function createcharacter(x, y) {
    playerX = x;
    playerY = y;
}

function drawcharacter() {
    fill(23, 40, 123);
    circle(playerX, playerY, 25);
}

function createborders(thickness) {

    rect(0, 0, width, thickness);

    rect(0, 0, thickness, height);

    rect(0, height - thickness, width, thickness);

    rect(width - thickness, 0, thickness, height - 50);
}

function mouseclicked() {
    mouseshapeX = mouseX;
    mouseshapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}