import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(array: Heroe[], ordenarPor?: string): Heroe[] {

        switch (ordenarPor) {
            case 'nombre':
                return array.sort((a, b) => {
                    return a.nombre > b.nombre ? 1 : -1;
                });
            case 'vuela':
                return array.sort((a, b) => {
                    return a.vuela > b.vuela ? -1 : 1;
                });
            case 'color':
                return array.sort((a, b) => {
                    return a.color > b.color ? 1 : -1;
                });

            default: return array;
        }


    }

}
