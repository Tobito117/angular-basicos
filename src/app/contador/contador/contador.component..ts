import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>

        <button (click) ="acomular(base)"> +5 </button>

        <span>{{ numero }}</span>

        <button (click)="acomular(-base)"> -5 </button>
    `
})

export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acomular(valor: number){
            this.numero += valor;
    }

}