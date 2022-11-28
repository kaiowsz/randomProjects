// basics elements
let player, cpu, ball, scoreBoard, btnStart

// animation control
let game, frames 

//positions
let posBallX, posBallY
let posPlayerX, posplayerY
let posCpuX, posCpuY

//directions with keyboard
let dirPlayerY

//start positions
let playerStartY = 180;
let cpuStartY = 180;
let ballStartY = 240, ballStartX = 475;

//sizes
let barW = 20
let barH = 140
let campoX = 0, campoY = 0;
let campoW = 960, campoH = 500;
let ballW, ballH = 20;

// ball direction
let ballX, ballY
let cpuY = 0;

// speed
let speedBall, speedCpu, speedPlayer

// scoreBoard 
let pointsPlayer;
let pointsCpu;
let key;
let gameState = false; // true - running / false - stopped

function controlPlayer() {
    if(gameState) {
        posplayerY += speedPlayer * dirPlayerY
        if(posplayerY + barH >= campoH || posplayerY <= 0) {
            posplayerY += (speedPlayer * dirPlayerY)*(-1)
        }
        player.style.top = posplayerY+"px"
    }
}

function controlBall() {
    posBallY+= speedBall * ballY
    posBallX+= speedBall * ballX

    if ((posBallX <= posPlayerX + barW) && ((posBallY+ballH >= posplayerY) && (posBallY <= posplayerY+barH))) {
        ballY = (((posBallY+(ballH / 2)) - (posplayerY + (barH/2)))/16);
        ballX *= -1;
    }
    if ((posBallX >= posCpuX - barW) && 
    ((posBallY+ballH >= posCpuY) && (posBallY <= posCpuY+barH))) {
        ballY = (((posBallY+(ballH / 2)) - (posCpuY + (barH/2)))/16);
        ballX *=-1;
    }

    ball.style.top = posBallY+"px"
    ball.style.left = posBallX+"px"
}


function keyDown(event) {
    key = event.keyCode
    if (key == 38) { // arrow up
        dirPlayerY = -1;
    } else if (key == 40) { // arrow down
        dirPlayerY = 1;
    }
}

function keyUp(event) {
    key = event.keyCode
    if (key == 38) { // arrow up
        dirPlayerY = 0;
    } else if (key == 40) { // arrow down
        dirPlayerY = 0;
    }
}





function jogo() { // controls of player, ball and cpu;
    if(gameState) {
        controlPlayer()
        controlBall()
    }

    frames = requestAnimationFrame(jogo);
}

function startGame() {
    if (gameState == false) {
        cancelAnimationFrame(frames)
        gameState = true;
        dirPlayerY = 0;
        ballY = 0;
        if((Math.random()*10) < 5) {
            ballX = -1
        } else {
            ballX = 1
        }
        posBallX = ballStartX
        posballY = ballStartY
        posplayerY = playerStartY;
        posCpuY = cpuStartY
        jogo()
    }
}

window.addEventListener('load', startingConfigs)


function startingConfigs() {
    btnStart = document.querySelector('.start').addEventListener('click', startGame)

    player = document.querySelector('.left-bar')
    cpu = document.querySelector('.right-bar')
    ball = document.querySelector('.ball')

    pointsPlayer = document.querySelector('.score-user')
    pointsCpu = document.querySelector('.score-cpu')
    document.addEventListener('keydown', keyDown)
    document.addEventListener('keyup', keyUp)
    
    speedBall = 8
    speedCpu = 8
    speedPlayer = 8
}





