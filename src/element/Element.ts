import { Color } from "./Color";
import { Shape } from "./Shape";

export abstract class Element {
    protected htmlElement: HTMLElement;
    protected shape: Shape;
    protected color: Color;
    public hidden: boolean = false;

    constructor(_shape: Shape, _color: Color) {
        this.shape = _shape;
        this.color = _color;
        this.htmlElement = this.generateElement();
    }

    private generateElement(): HTMLElement {
        const elem = document.createElement("div");
        const delay = (Math.random() * 3).toString() + 's';

        elem.classList.add('grid-item')
        elem.style.animationDelay = delay

        return elem
    }
    public getShape(): Shape {
        return this.shape;
    }
    public setShape(_shape: Shape): void {
        this.shape = _shape;
    }
    public getColor(): Color {
        return this.color;
    }
    public setColor(_color: Color): void {
        this.color = _color;
    }
}