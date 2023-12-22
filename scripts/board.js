import Field from './field.js';
export default class Board{
    constructor() {
        this.elms = [];
        this.createEl();
    }
    createEl(){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                this.elms.push((new Field(i, j)));
            }
        }
    }
}