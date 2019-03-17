import { Component } from '@angular/core';

@Component({
    selector: 'app-learning-bindings',
    templateUrl: './learning-bindings.component.html'
})

export class LearningBindingsComponent  {
    mouseClickCount: number;
    mouseOverCount: number;
    userName: string;
    userEmail: string;

    constructor() {
        this.mouseClickCount = 0;
        this.mouseOverCount = 0;
        this.userName = 'Nome Inicial';
        this.userEmail = 'Email Inicial';
    }

    // mouse events
    onClick() {
        console.log('Evento onClick disparado');
        this.mouseClickCount++;
    }

    onMouseOver() {
        console.log('Evento onMouseOver disparado');
        this.mouseOverCount++;
    }

    //key events
    onKeyDown(event: any) {
        console.log('Evento onKeyDown disparado');
        console.log(event);
        this.userName = event.target.value;
    }

    onKeyUp(event: any) {
        console.log('Evento onKeyUp disparado');
        console.log(event);
        this.userEmail = event.target.value;
    }
}
