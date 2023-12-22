export default class Field{
    constructor(row, col) {
        this.el = document.createElement('div');
        this.el.className = "field";
        this.el.id = `${row}_${col}`
        if(col % 2 != 0){
            if(row % 2 == 0){
                this.el.style.backgroundColor = 'black'
                return;
            }
            this.el.style.backgroundColor = 'white'
            return;
        }
        if(row % 2 == 0){
            this.el.style.backgroundColor = 'white'
            return;
        }
        this.el.style.backgroundColor = 'black'
    }
}