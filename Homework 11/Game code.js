var playerX = 100;
var playerY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var enemyX = 30;
var enemyY = 50;
var enemyXspeed;
var enemyYspeed;

var enemy2X = 30;
var enemy2Y = 50;
var enemy2Xspeed;
var enemy2Yspeed;

var mouseshapeX;
var mouseshapeY;
function setup()
{
    createCanvas(500, 600);
    enemyXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    enemyYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(600,600,600);
    stroke(0);
    fill(0);
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);

    textSize(10);
    text("EXIT", width-50,height-50)

    fill(0,0,800);
    circle(playerX,playerY,25);

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

    fill(150,0,0);
    circle(enemyX, enemyY, 40);

    enemyXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    enemyYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    enemyX += enemyXspeed;
    enemyY += enemyYspeed;
    if(enemyX > width)
    {
        enemyX = 0;
    }
    if(enemyX < 0)
    {
        enemyX = width;
    }
    if(enemyY > height)
    {
        enemyY = 0;
    }
    if(enemyY < 0)
    {
        enemyY = height;
    }

    fill(10,200,20);
    circle(enemy2X, enemy2Y, 20);

    enemy2Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    enemy2Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

    enemy2X += enemy2Xspeed;
    enemy2Y += enemy2Yspeed;
    if(enemy2X > width)
    {
        enemy2X = 0;
    }
    if(enemy2X < 0)
    {
        enemy2X = width;
    }
    if(enemy2Y > height)
    {
        enemy2Y = 0;
    }
    if(enemy2Y < 0)
    {
        enemy2Y = height;
    }

    if(playerX > width && playerY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(20);
        text("You are a Winner!", width/2-50, height/2-50);
    }

    fill(0,0,0);
    circle(mouseshapeX, mouseshapeY, 50);
}

function mouseClicked()
{
    mouseshapeX = mouseX;
    mouseshapeY = mouseY;
}