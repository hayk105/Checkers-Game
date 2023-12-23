let elms = [];
export default class Item{
    constructor(color, row, col) {
        this.el = document.createElement('div');
        this.el.className =   "item " + color;
        this.el.cord = [];
        this.color = color
        this.x = row;
        this.y = col;
        this.king = false; //damka
        this.el.onclick = () => {
            this.clearStep();
            this.cordStep();
        }
    }
    cordStep(first = true){
        const cordsB = [[1, 1], [1, -1]]
        const cordsW = [[-1, -1], [-1, 1]]
        this.el.cord = [];
        if(!this.king){
            const cord = (this.color == "white" ? cordsW : cordsB);
            for(let i= 0;i < cordsW.length; i++){
                const elm = cord[i];
                const step1 = this.y + elm[0];
                const step2 = this.x + elm[1]
                const el = document.getElementById(`${step1}_${step2}`);
                if(el && !el.firstChild){
                    this.visualStep(step1, step2, el);
                }
            }

        }
    }
    clearStep(){
        for(let i = 0; i < elms.length; i++){
            elms[i].classList.remove("step");
        }
        elms=[];
    }
    visualStep(y, x, el){
        el.classList.add("step")
        el.onclick = ()=>{
            el.appendChild(this.el);
            this.clearStep()
            this.y = y;
            this.x = x;
        }
        elms.push(el)
        //     for(let i = 0; i < this.el.cord.length; i++){
        //         const temp = this.el.cord[i];
        //         temp.classList.add("step")
        //         temp.onclick = ()=>{
        //             const id= temp.id.split('_');
        //             temp.appendChild(this.el);
        //             this.clearStep()
        //             this.y = +id[0];
        //             this.x = +id[1];
        //             this.el.cord = [];
        //         }
        //         elms.push(temp)
        //     }
        // }, 100)
    }
}