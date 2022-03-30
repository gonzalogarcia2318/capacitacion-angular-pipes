import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { BooleanToSiNoPipe } from './pipes/boolean-to-si-no.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
    declarations: [
        NumerosComponent,
        NoComunesComponent,
        BasicosComponent,
        OrdenarComponent,

        MayusculasPipe,
        BooleanToSiNoPipe,
        SortPipe
    ],
    imports: [
        CommonModule,
        PrimeNgModule
    ],
    exports: [
        NumerosComponent,
        NoComunesComponent,
        BasicosComponent,
        OrdenarComponent
    ]
})
export class VentasModule { }
