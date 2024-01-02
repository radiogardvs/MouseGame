import { AvoidElement } from "../element/AvoidElement.js";
import { ChangeElement } from "../element/ChangeElement.js";
import { CollectElement } from "../element/CollectElement.js";
export class Game {
    status;
    timer;
    score;
    playerName;
    elements = [];
    container;
    constructor(_container) {
        this.container = _container;
        this.status = "ongoing";
        this.timer = 0;
        this.score = 0;
        this.generateElements();
        this.addEventOnContainer();
    }
    gameFinished() {
        this.elements.forEach(element => {
            if (element instanceof CollectElement || element instanceof ChangeElement)
                return false;
        });
        return true;
    }
    moveAvoidElements() {
    }
    moveCollectElements() {
    }
    moveChangeElements() {
    }
    startGame() {
        this.status = "ongoing";
    }
    endGame() {
        this.status = "ended";
    }
    gameOver() {
        return this.status === "ended";
    }
    generateElements() {
        for (let i = 0; i < 10; i++) {
            let element;
            if (i % 3 == 0)
                element = new AvoidElement(this.container);
            else if (i % 3 == 1)
                element = new CollectElement(this.container);
            else
                element = new ChangeElement(this.container);
            this.elements.push(element);
        }
    }
    addEventOnContainer() {
        this.container.onclick = () => {
            setTimeout(() => {
                if (this.elements.every(e => e.hidden || e instanceof AvoidElement)) {
                    this.endGame();
                    alert("You Won!");
                }
            }, 100);
        };
    }
    getStatus() {
        return this.status;
    }
    setStatus(_status) {
        this.status = _status;
    }
    getTimer() {
        return this.timer;
    }
    setTimer(timer) {
        this.timer = timer;
    }
    getScore() {
        return this.score;
    }
    setScore(_score) {
        this.score = _score;
    }
}
