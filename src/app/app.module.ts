import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
// <<<<<<< HEAD
// =======
import { HeaderComponent } from './header/header.component';
import { AccordionComponent } from './accordion/accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FooterComponent } from './footer/footer.component';

// >>>>>>> qa


@NgModule({
  declarations: [
    AppComponent,
// <<<<<<< HEAD
   
// =======
    HeaderComponent,
    AccordionComponent,
    FooterComponent,
    
// >>>>>>> qa
  ],
  imports: [
    BrowserModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
