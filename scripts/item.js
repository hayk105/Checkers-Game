export default class Item{
    constructor(color, col, row) {
        this.el = document.createElement('div');
        this.el.className =  "item " + color;
        this.el.cord = [];
        this.color = color
        this.x = col;
        this.y = row;
        this.king = false; //damka
        this.cordStep();
        this.el.onclick = function () {
            console.dir(this)
        }
    }
    cordStep(){
        const cordsB = [[1, 1], [1, -1]]
        const cordsW = [[-1, -1], [-1, 1]]
        if(!this.king){
            const cord = (this.color == "white" ? cordsW : cordsB);
            for(let i= 0;i < cordsW.length; i++){
                const elm = cord[i];
                const step1 = this.y + elm[0];
                const step2 = this.x + elm[1]
                // console.log(step1, " ", step2)
                setTimeout( () =>{
                    const el = document.getElementById(`${step1}_${step2}`);
                    if(el && !el.firstChild){
                        this.el.cord.push([step1, step2])
                    }
                }, 200)
            }

        }

    }
}