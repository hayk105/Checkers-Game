export default class Item{
    constructor(color) {
        this.el = document.createElement('div');
        this.el.className =  "item " + color;
    }

}