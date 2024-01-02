import { Element } from './Element.js';
import { Color } from './Color.js';
import { Shape } from './Shape.js';
export class AvoidElement extends Element{

    constructor(container: HTMLElement){
        super(Shape.Rectangle, Color.Green);
        container.appendChild(this.htmlElement)

        this.addClass()
        this.addOnClick()
    }

    private addClass(): void{
        this.htmlElement.classList.add('avoid')
    }

    private addOnClick(): void{
        this.htmlElement.onclick = () =>{
            alert("Game Over")
        }
    }
}