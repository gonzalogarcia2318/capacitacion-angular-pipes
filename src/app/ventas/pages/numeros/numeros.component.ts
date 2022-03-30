import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-numeros',
    templateUrl: './numeros.component.html',
    styles: [
    ]
})
export class NumerosComponent implements OnInit {

    cantidadVentas: number = 1543879;
    totalVentas: number = 64543879.436;

    porcentaje: number = 0.328;

    constructor() { }

    ngOnInit(): void {
    }

}
