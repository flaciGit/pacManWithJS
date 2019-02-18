function Enemies() {

    this.aXC = -1;
    this.aYC = -1;
    this.aXD = -1;
    this.aYD = 0;

    this.setXC = function (xCoord) {
        this.aXC = xCoord;
    }
    this.setYC = function (yCoord) {
        this.aYC = yCoord;
    }

    this.setXD = function (xDir) {
        this.aXD = xDir;
    }
    this.setYD = function (yDir) {
        this.aYD = yDir;
    }

    this.getXC = function () {
        return this.aXC;
    }
    this.getYC = function () {
        return this.aYC;
    }
    this.getXD = function () {
        return this.aXD;
    }
    this.getYD = function () {
        return this.aYD;
    }
    
    this.chooseRandomDirForA = function () {

        var xDir = Math.floor(Math.random()*4);
        if (xDir == 0)
            this.down();
        if (xDir == 1)
            this.up();
        if (xDir == 2)
            this.left();
        if (xDir == 3)
            this.right();
            
    }

    this.up = function () {
        this.aXD = 0;
        this.aYD = -1;
    }
    this.down = function () {
        this.aXD = 0;
        this.aYD = 1;
    }
    this.left = function () {
        this.aXD = -1;
        this.aYD = 0;
    }
    this.right = function () {
        this.aXD = 1;
        this.aYD = 0;
    }



    this.handleEnemyMovement = function() {

        if (enemies.getXC() == -1 && enemies.getYC() == -1 || !enemySpawned || gameover)
            return;
        var axC = enemies.getXC();
        var ayC = enemies.getYC();
        var axD = enemies.getXD();
        var ayD = enemies.getYD();


        enemies.chooseRandomDirForA();

        while (axC + axD < 0 || axC + axD > w - 1 || enemyMap[axC + axD][ayC + ayD] == 'w' || ((axC + axD == 9) && (ayC + ayD) == 9)) {
            enemies.chooseRandomDirForA();
            axC = enemies.getXC();
            ayC = enemies.getYC();
            axD = enemies.getXD();
            ayD = enemies.getYD();
        }


        if (axC + axD >= 0 && axC + axD <= w - 1 && enemyMap[axC + axD][ayC + ayD] != 'w' && ((axC + axD != 9) || (ayC + ayD) != 9)) {
            enemyMap[axC][ayC] = ' ';
            enemyMap[axC + axD][ayC + ayD] = 'A';
            enemies.setXC(axC + axD);
            enemies.setYC(ayC + ayD);
        }

    }


}
