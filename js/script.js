let howB = document.getElementById('buttonHow');
let buttonUl = document.getElementById('buttons');

howB.addEventListener('click', howToPlay);

function howToPlay() {
    console.log('How to play');
    let instruct = document.createElement('article');
    buttonUl.replaceChild(instruct, buttonUl.childNodes[1]);
    instruct.innerHTML = 'Click to destroy the astroids on the screen before the clock runs out!</br></br> If any are left after the timer ends, the game is over!';
    document.getElementById('screen').style.margin= '40px 0px 20px 0px';
};