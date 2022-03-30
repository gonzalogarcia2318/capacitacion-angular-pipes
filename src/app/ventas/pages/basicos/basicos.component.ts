import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

    toUpper: string = 'nombre';
    toLower: string = 'NOMBRE';
    toTitle: string = 'noMbre apEllido';

    fecha: Date = new Date();

  constructor() { }
}
