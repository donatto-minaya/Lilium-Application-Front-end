import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerSuscriptionComponent } from './customer-suscription/customer-suscription.component';
import { CustomerSuscriptionFormComponent } from './customer-suscription/customer-suscription-form/customer-suscription-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SuscripcionesComponent } from './suscripciones/suscripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CustomerSuscriptionComponent,
    CustomerSuscriptionFormComponent,
    SuscripcionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
