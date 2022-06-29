import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>
        
        <button (click)="contador(-base)">-{{ base }}</button>
        <span>{{ number }}</span>
        <button (click)="contador(base)">+{{ base }}</button>
    `
})
export class ContadorComponent {
    public title: string = 'Contador App';
    public number: number = 0;
    public base: number = 5;
    contador = (value: number) => this.number += value;
}