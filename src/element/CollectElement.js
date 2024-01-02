import { Element } from './Element.js';
import { Color } from './Color.js';
import { Shape } from './Shape.js';
export class CollectElement extends Element {
    constructor(container) {
        super(Shape.Rectangle, Color.Green);
        container.appendChild(this.htmlElement);
        this.addClass();
        this.addOnClick();
    }
    addClass() {
        this.htmlElement.classList.add('collect');
    }
    addOnClick() {
        this.htmlElement.onclick = () => {
            this.htmlElement.style.visibility = 'hidden';
            this.hidden = true;
        };
    }
}
