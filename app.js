// Declaração de variaveis
const life = document.getElementById('info-life');
const score = document.getElementById('info-score');
const level = document.getElementById('info-level');
const exp = document.getElementById('info-exp');

const enemy = document.getElementById('enemy');

const lifeOutput = document.getElementById('vida-output');
const scoreOutput = document.getElementById('score-output');
const levelOutput = document.getElementById('level-output');
const expOutput = document.getElementById('exp-output');
const timeOutput = document.getElementById('time-output');

const start = document.getElementById('start');
const canv = document.getElementById('canv');
const info = document.getElementById('info');
const time = document.getElementById('time');
const gameName = document.getElementById('game-name');

loadEventListeners();
moveEnemy();



function loadEventListeners() {
    start.addEventListener('click', startGame);
    enemy.addEventListener('click', killEnemy);
    enemy.addEventListener('click', points);
};

score.value = 0;
life.value = 100;
exp.value = 0;
level.value = 1;
time.value = 0;
var max = 80;
var min = 20;

// Começar o jogo
function startGame() {
    document.body.style.opacity = 1;
    start.style.display = "none";
    canv.style.display = "block";
    info.style.display = "flex";
    time.style.display = "flex";
    gameName.style.display = "none";

// Timer
    setInterval(function timeCountDown() {
        time.innerHTML = time.value++;
        }, 1000); // 1000 milisegundos = 1 segundo de intervalo  
}





function killEnemy() {
 life.value -= 100;
 lifeOutput.innerHTML = life.value;
    
 if(life.value < 1) {
        expUp();
        moveEnemy();
   
    }

}

function expUp() {
    life.value = 100;
    exp.value += 20;
    expOutput.innerHTML = `${exp.value}%`;
     if(exp.value === 100) {
    levelUp();
    }
}


function levelUp () {
    exp.value = 0,
    level.value += 1,
    levelOutput.innerHTML = `LEVEL ${level.value}`
    if (level.value = 2) {
        levelTwo();
    }
}


function moveEnemy() {
    const posY = Math.floor(Math.random() * (max - min)+ 10);
    const posX = Math.floor(Math.random() * (max - min)+ 10);
    enemy.style.transform = `translate(${posX}vw, ${posY}vh`;
    enemy.style.transition = "0.3s";

}


function points () {
    score.value++;
    console.log(score.value);
    scoreOutput.innerHTML = `${score.value}`;
}


function levelTwo() {
    level.value = 2;
    enemy.style.animation = "animeStart2 2s infinite";

}

