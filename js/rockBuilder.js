class Rockbuilder {
       constructor(num) {
           this.lvl = [];
       }

       getRocks(num) {
           console.log('making these bubbles lol');
           for (let i = 0; i < num; i++) {
               this.lvl.push(i);
           }
       }

        printRocks() {
            console.log('print');
             for(let i = 0; i < this.lvl.length; i++){
                let rock = document.createElement('div');
                rock.setAttribute('class', 'rock');
                rock.setAttribute('id', i);
                rock.addEventListener('click', function gameOver() {
                    console.log('GAMEOVER!!!');
                    rock.remove();
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
                screen2.appendChild(rock);
                 }
            }
};