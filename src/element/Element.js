export class Element {
    htmlElement;
    shape;
    color;
    hidden = false;
    constructor(_shape, _color) {
        this.shape = _shape;
        this.color = _color;
        this.htmlElement = this.generateElement();
    }
    generateElement() {
        const elem = document.createElement("div");
        const delay = (Math.random() * 3).toString() + 's';
        elem.classList.add('grid-item');
        elem.style.animationDelay = delay;
        return elem;
    }
    getShape() {
        return this.shape;
    }
    setShape(_shape) {
        this.shape = _shape;
    }
    getColor() {
        return this.color;
    }
    setColor(_color) {
        this.color = _color;
    }
}
