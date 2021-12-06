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
function setup()
    createCanvas(500, 600);
    for (var i = 0; i < 50; i++) {
        enemyXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemyXs[i] = getRandomNumber(500);
        enemyYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
}

function draw()
{
    background(600,600,600);
    stroke(0);
    fill(0);

    createborders();

    createcharacter();

    charactermovement();

    createtext();

    createmouseshape();

    displayyouwin();
    
}

function displayyouwin()
{
    if(playerX > width && playerY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(20);
        text("You are a Winner!", width/2-50, height/2-50);
    }
}

function createmouseshape()
{
    fill(0,0,0);
    circle(mouseshapeX, mouseshapeY, 50);
}

function createtext()
{
    textSize(10);
    text("EXIT", width-50,height-50)
}

function createcharacter()
{
    fill(0,0,800);
    circle(playerX,playerY,25);
}

function charactermovement()
{
    if(keyIsDown(w))
    {
        playerY -= 5;   
    }
    if(keyIsDown(s))
    {
        playerY += 5;   
    }
    if(keyIsDown(a))
    {
        playerX -= 5;   
    }
    if(keyIsDown(d))
    {
        playerX += 5;   
    }
}

function createborders()
{
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);
}

function mouseClicked()
{
    mouseshapeX = mouseX;
    mouseshapeY = mouseY;
}