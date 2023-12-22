import Board from './board.js';
const board = document.getElementById("board")

class Game{
    constructor() {
        this.board =null;
    }
    start(){
        this.board = new Board();
        this.board.elms.forEach((el) => {
            board.appendChild(el.el);
        })
    }
}
const game = new Game();
game.start();