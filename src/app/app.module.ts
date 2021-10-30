import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerSuscriptionComponent } from './customer-suscription/customer-suscription.component';
import { HttpClientModule } from '@angular/common/http';
import { SuscripcionesComponent } from './suscripciones/suscripciones.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { ProfesionalSuscriptionComponent } from './profesional-suscription/profesional-suscription.component';
import { CompanySuscriptionComponent } from './company-suscription/company-suscription.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CustomerSuscriptionComponent,
    SuscripcionesComponent,
    ProfesionalSuscriptionComponent,
    CompanySuscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
