import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllComponent } from './all/all.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { AccordionComponent } from './accordion/accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllComponent,
    PruebasComponent,
    AccordionComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
