function Player() {

    this.xC = 9;
    this.yC = 16;
    this.xD = -1;
    this.yD = 0;


    this.setXC = function (xCoord) {
        this.xC = xCoord;
    }
    this.setYC = function (yCoord) {
        this.yC = yCoord;
    }

    this.setXD = function (xDir) {
        this.xD = xDir;
    }
    this.setYD = function (yDir) {
        this.yD = yDir;
    }

    this.getXC = function () {
        return this.xC;
    }
    this.getYC = function () {
        return this.yC;
    }
    this.getXD = function () {
        return this.xD;
    }
    this.getYD = function () {
        return this.yD;
    }


    this.up = function () {
        this.xD = 0;
        this.yD = -1;
    }
    this.down = function () {
        this.xD = 0;
        this.yD = 1;
    }
    this.left = function () {
        this.xD = -1;
        this.yD = 0;
    }
    this.right = function () {
        this.xD = 1;
        this.yD = 0;
    }
}

function handlePlayerMovement() {
    if (gameover)
        return;

    var xC = p.getXC();
    var yC = p.getYC();
    var xD = p.getXD();
    var yD = p.getYD();


    if (xC + xD < 0 || xC + xD > w - 1) {

        if (xC + xD > w - 1) {
            canv[xC][yC] = ' ';
            canv[0][yC + yD] = 'P';
            p.setXC(0);
        } else {

            if (xC + xD < 0) {
                canv[xC][yC] = ' ';
                canv[w - 1][yC + yD] = 'P';
                p.setXC(w - 1);
            }
        }
    } else {
        if (xC + xD >= 0 && xC + xD <= w && canv[xC + xD][yC + yD] != 'w' && ((xC + xD != 9) || (yC + yD) != 9)) {
            if (canv[xC + xD][yC + yD] == '.') {
                score++;
                pointsLeft--;
            }
            if (canv[xC + xD][yC + yD] == 'p') {
                chaseMode = true;

                var timeleft = chaseTime;
                clearInterval(chaseTimer);
                chaseTimer = setInterval(function () {
                    timeleft -= 1;
                    if (timeleft <= 0) {
                        clearInterval(chaseTimer);
                        chaseMode = false;
                    }
                }, 1000);

            }

            canv[xC][yC] = ' ';
            canv[xC + xD][yC + yD] = 'P';
            p.setXC(xC + xD);
            p.setYC(yC + yD);

        }
    }
}
