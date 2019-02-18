
var w = 19;
var h = 22;

var textHeight = 20;
var textRow = 2;
var tileSize = 20;

var frameRateNumber = 8;

var playerXCoord = 9;
var playerYCoord = 16;

var playerXDir = -1;
var playerYDir = 0;

var score = 0;

var enemySpawned = false;
var pointsLeft = -1;
var gameover = false;

var chaseMode = false;

var chaseTime = 10;
var chaseTimer = {};

function setup() {
    frameRate(frameRateNumber);
    createCanvas(w * tileSize + 1, h * tileSize + 1 + textHeight * textRow);
    canv = createCanv();
    canv = transpose(canv);

    enemyMap = createCanv();
    enemyMap = transpose(enemyMap);
    
    p = new Player();

    enemies = new Enemies();

    calcPointsLeft();

}

function draw() {

    handleGameOver();
    handlePlayerMovement();
    handleGameOver();
    spawnEnemies();
    enemies.handleEnemyMovement();
    
    background(255);
    text("Score: " + score, 0, h * tileSize + textHeight);
    handleGameOver();
    
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            if (canv[i][j] === 'w') {
                fill(0, 0, 255);
            }
            else {
                fill(0, 0, 0);
            }
            
            square(i * tileSize, j * tileSize, tileSize, tileSize);

            if (canv[i][j] === '.') { //score point circles
                fill(255, 255, 255);
                circle(i * tileSize + (tileSize / 2), j * tileSize + (tileSize / 2), tileSize / 9);
            }
            if (canv[i][j] === 'p') { //big circles
                fill(255, 255, 255);
                circle(i * tileSize + (tileSize / 2), j * tileSize + (tileSize / 2), tileSize / 5);
            }

            if (canv[i][j] === 'P') { //pacman
                fill(255, 255, 0);
                circle(i * tileSize + (tileSize / 2), j * tileSize + (tileSize / 2), tileSize / 3);
            }

            //enemies
            if (enemyMap[i][j] === 'A') {
                
                fill(255, 0, 0);
                if (chaseMode)
                    fill(0, 0, 200);
                text("A",i * tileSize + (tileSize / 2), j * tileSize + (tileSize / 2));
            }
        }
    }
    
    if (pointsLeft == 0) {
        createNewMap();
        calcPointsLeft();
    }

    if (gameover)
        frameRate(0);

    console.log("pointsLeft: "+pointsLeft);
}

function calcPointsLeft() {
    pointsLeft = 0;
    for (var i = 0; i < w; i++)
        for (var j = 0; j < h; j++)
            if (canv[i][j] === '.')
                pointsLeft++;
}

function spawnEnemies() {
    //spawn enemy A
    if (score % 10 == 0 && enemies.getXC() == -1 && enemies.getYC() == -1)  {

        canv[8][10] = ' ';
        enemyMap[8][10] = ' ';
        enemyMap[9][8] = 'A';

        enemies.setXC(9);
        enemies.setYC(8);
        
        enemies.setXD(0);
        enemies.setYD(0);

        enemySpawned = true;
    }
}

function handleGameOver() {
    handleEatingEnemies();

    if (enemies && p.getXC() == enemies.getXC() && p.getYC() == enemies.getYC() && !chaseMode) {
        this.gameover = true;
        text("GAME OVER", 0, h * tileSize + textHeight * 2);
    }
}

function handleEatingEnemies() {
    var xC = p.getXC();
    var yC = p.getYC();
    var xD = p.getXD();
    var yD = p.getYD();

    if (chaseMode && enemyMap[xC][yC] == 'A' && xC == enemies.getXC() &&
        yC == enemies.getYC() ){
        score += 10;
        enemyMap[xC][yC] = ' ';
        enemies.setXC(-1);
        enemies.setYC(-1);

    }

}

function keyPressed() {

    if (keyCode === UP_ARROW) {
        p.up();
    }
    if (keyCode === DOWN_ARROW) {
        p.down();
    }
    if (keyCode === LEFT_ARROW) {
        p.left();
    }
    if (keyCode === RIGHT_ARROW) {
        p.right();
    }

}