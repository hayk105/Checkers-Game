import Field from './field.js';
const board = document.getElementById("board")
export default class Board{
    constructor() {
        this.createEl();
    }
    createEl(){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                board.appendChild((new Field(i, j)).el);
            }
        }
    }
}