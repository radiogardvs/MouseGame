import { Element } from "../element/Element.js";
import { AvoidElement } from "../element/AvoidElement.js";
import { ChangeElement } from "../element/ChangeElement.js";
import { CollectElement } from "../element/CollectElement.js";

export class Game {

  private status: string;
  private timer: number;
  private score: number;
  private playerName: string | undefined;
  private elements: Element[]  = [];
  private container: HTMLElement;
  constructor(_container: HTMLElement) {
    this.container = _container;
    this.status = "ongoing";
    this.timer = 0;
    this.score = 0;
    this.generateElements();
    this.addEventOnContainer();
  }

  public gameFinished(): boolean {
    this.elements.forEach(element => {
      if (element instanceof CollectElement || element instanceof ChangeElement)
        return false;
    });
    return true;
  }

  public moveAvoidElements(){
    
  }
  public moveCollectElements(){

  }
  public moveChangeElements(){
  }

  public startGame(): void {
    this.status = "ongoing";

  }
  public endGame(): void {
    this.status = "ended";
  }
  public gameOver(): boolean {
    return this.status === "ended";
  }

  private generateElements(): void {
    for (let i = 0; i < 10; i++) {
      let element
      if( i % 3 == 0)
        element = new AvoidElement(this.container)
      else if( i % 3 == 1)
        element = new CollectElement(this.container);
      else
        element = new ChangeElement(this.container)

      this.elements.push(element)
    }
  }

  private addEventOnContainer(): void {
    this.container.onclick = () => {
      setTimeout( () => {

        if(this.elements.every( e => e.hidden || e instanceof AvoidElement )){
          this.endGame()
          alert("You Won!")
        }
      }, 100)
    }
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(_status: string): void {
    this.status = _status;
  }

  public getTimer(): number {
    return this.timer;
  }

  public setTimer(timer: number): void {
    this.timer = timer;
  }

  public getScore(): number {
    return this.score;
  }

  public setScore(_score: number): void {
    this.score = _score;
  }

}
