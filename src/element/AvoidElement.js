import { Element } from './Element.js';
import { Color } from './Color.js';
import { Shape } from './Shape.js';
export class AvoidElement extends Element {
    constructor(container) {
        super(Shape.Rectangle, Color.Green);
        container.appendChild(this.htmlElement);
        this.addClass();
        this.addOnClick();
    }
    addClass() {
        this.htmlElement.classList.add('avoid');
    }
    addOnClick() {
        this.htmlElement.onclick = () => {
            alert("Game Over");
        };
    }
}
