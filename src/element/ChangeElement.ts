import { Element } from './Element.js';
import { Color } from './Color.js';
import { Shape } from './Shape.js';
export class ChangeElement extends Element {

    constructor(container: HTMLElement) {
        super(Shape.Square, Color.Red);
        container.appendChild(this.htmlElement)

        this.addClass()
        this.addChangingColor()
    }

    private addClass(): void {
        this.htmlElement.classList.add('change')
        if (Math.random() < 0.5) {
            this.htmlElement.classList.add('green')
            this.setColor(Color.Green)
            this.htmlElement.onclick = () => {
                this.htmlElement.style.visibility = 'hidden'
                this.hidden = true
            }
        }
        else {
            this.htmlElement.classList.add('red')
            this.setColor(Color.Red)
            this.htmlElement.onclick = () => {
                alert("Game Over")
            }
        }
    }

    private addChangingColor(): void {
        setInterval(() => {
            if (this.getColor() === Color.Red) {
                this.setColor(Color.Green)
                this.htmlElement.onclick = () => {
                    this.htmlElement.style.visibility = 'hidden'
                    this.hidden = true
                }
            }
            else {
                this.setColor(Color.Red)
                this.htmlElement.onclick = () => {
                    alert("Game Over")
                }
            }
            this.htmlElement.classList.toggle("red");
            this.htmlElement.classList.toggle("green");
        }, 2500)
    }

}