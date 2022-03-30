import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'booleanToSiNoPipe'
})
export class BooleanToSiNoPipe implements PipeTransform {

    transform(value: boolean) {
        return value ? 'Si' : 'No';
    }

}