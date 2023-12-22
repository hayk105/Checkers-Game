import Board from './board.js';
import Item from "./item.js"

class Game{
    constructor() {
        this.board =null;
    }
    start(){
        this.board = new Board();
        for(let i = 0; i < 8; i++){

        }
    }
}
const game = new Game();
game.start();