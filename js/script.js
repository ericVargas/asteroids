let howB = document.getElementById('buttonHow');
let buttonUl = document.getElementById('buttons');

howB.addEventListener('click', howToPlay);

function howToPlay() {
    console.log('How to play');
    let instruct = document.createElement('article');
    buttonUl.replaceChild(instruct, buttonUl.childNodes[1]);
    instruct.innerHTML = 'Click to destroy the astroids on the screen before the clock runs out!</br></br> If any are left after the timer ends, the game is over!';
    document.getElementById('title').style.margin= '40px 0px 20px 0px';
};

let startB = document.getElementById('buttonStart');
let title = document.getElementById('titleP');

startB.addEventListener('click', startGame);

function startGame() {
    console.log('Start the game!');
    document.getElementById('screen').id = 'screen2';
    title.setAttribute('class', 'off');
    let bubble = document.createElement('div');
    bubble.setAttribute('class', 'bubble');
    screen2.appendChild(bubble);
};