import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-no-comunes',
    templateUrl: './no-comunes.component.html',
    styles: [
    ]
})
export class NoComunesComponent {

    personas = [{
        nombre: 'Gonzalo',
        genero: 'masculino'
    },
    {
        nombre: 'Susana',
        genero: 'femenino'
    }];

    invitacionMap = {
        'masculino': 'invitarlo',
        'femenino': 'invitarla'
    }

    indicePersona: number = 0;

    //

    clientes: number[] = [1, 2, 3];

    // clientes: string[] = []

    clientesMap = {
        '=0': 'no hay nadie esperando',
        '=1': 'tenemos un cliente esperando',
        'other': 'tenemos # clientes esperando' 
    }

    constructor() { }

    cambiarPersona() {
        this.indicePersona = this.indicePersona == 0 ? 1 : 0;
    }

    removerClientes(){
        this.clientes.pop();
    }

    agregarCliente(){
        this.clientes.push(this.clientes.length)
    }

    // Key value pipe

    persona = {
        nombre: 'Gonzalo',
        edad: 21,
        pais: 'Argentina'
    }

    // Async pipe
    unObservable = interval(1000);

    unaPromise = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Datos de la promesa')
        }, 3000)
    })
}
