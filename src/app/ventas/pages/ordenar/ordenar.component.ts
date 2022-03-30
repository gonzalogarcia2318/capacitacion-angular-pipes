import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
    selector: 'app-ordenar',
    templateUrl: './ordenar.component.html',
    styles: [
    ]
})
export class OrdenarComponent {

    mostrarEnMayusculas: boolean = true;

    heroes: Heroe[] = [
        { nombre: 'Superman', vuela: true, color: Color.ROJO },
        { nombre: 'Batman', vuela: false, color: Color.NEGRO },
        { nombre: 'Flash', vuela: false, color: Color.ROJO },
        { nombre: 'Linterna Verde', vuela: true, color: Color.VERDE }];

    criterioOrden: string = '';

    constructor() { }

    ordenarPor(criterio: string){
        this.criterioOrden = criterio;
    }

}
