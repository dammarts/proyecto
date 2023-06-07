import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllComponent } from './all/all.component';
import { PruebasComponent } from './pruebas/pruebas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllComponent,
    PruebasComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
