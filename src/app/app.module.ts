import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';



registerLocaleData(localeEsAr);
registerLocaleData(localeFr);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        
        SharedModule,
        AppRouterModule,
        VentasModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es-AR' } // Idioma por defecto
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
