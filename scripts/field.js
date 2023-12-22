import Item from "./item.js";
export default class Field{
    constructor(row, col) {
        this.el = document.createElement('div');
        this.el.className = "field";
        this.el.id = `${row}_${col}`
        this.x = row;
        this.y = col;
        const r = !(row % 2);
        if(col % 2 !== 0){
            if(r){
                this.el.style.backgroundColor = 'black'
                this.add(row)
                return;
            }
            this.el.style.backgroundColor = ' white'
            return;
        }
        if(r){
            this.el.style.backgroundColor = ' white'
            return;
        }
        this.el.style.backgroundColor = 'black'
        this.add(row)
    }
    add(row){
        if(row < 3) {
            this.el.appendChild(new Item('black').el)
        }
        if(row > 4){
            this.el.appendChild(new Item("white").el)
        }
    }

}