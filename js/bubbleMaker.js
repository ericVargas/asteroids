class Bubblemaker {
       constructor(num) {
           this.lvl = [];
       }

       getBubbles(num) {
           console.log('making these bubbles lol');
           for (let i = 0; i < num; i++) {
               this.lvl.push(i);
           }
       }

        printBubbles() {
            console.log('print');
             for(let i = 0; i < this.lvl.length; i++){
                let bubble = document.createElement('div');
                bubble.setAttribute('class', 'bubble');
                bubble.setAttribute('id', i);
                bubble.addEventListener('click', function gameOver() {
                    console.log('GAMEOVER!!!');
                    bubble.remove();
                    let finished = document.createElement('div');
                    finished.setAttribute('id', 'gameover');
                    screen2.appendChild(finished);
                    let expl = document.createElement('div');
                    expl.setAttribute('class', 'explosion');
                    finished.appendChild(expl);
                    let over = document.createElement('div');
                    over.setAttribute('class', 'over');
                    finished.appendChild(over);  
                });
                screen2.appendChild(bubble);
                 }
            }
    
        gameOver() {
            console.log('GAMEOVER!!!');
            bubble.remove();
            let finished = document.createElement('div');
            finished.setAttribute('id', 'gameover');
            screen2.appendChild(finished);
            let expl = document.createElement('div');
            expl.setAttribute('class', 'explosion');
            finished.appendChild(expl);
            let over = document.createElement('div');
            over.setAttribute('class', 'over');
            expl.appendChild(over);  
        }
};