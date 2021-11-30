import { NgModule } from '@angular/core';
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
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { PortalComponent } from './portal/portal.component';
import { NavbarPremiumComponent } from './navbar-premium/navbar-premium.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AuthGuard} from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './profile/edit/edit.component';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerSuscriptionComponent,
    SuscripcionesComponent,
    ProfesionalSuscriptionComponent,
    CompanySuscriptionComponent,
    LoginComponent,
    HomeComponent,
    PrincipalComponent,
    FooterComponent,
    PortalComponent,
    NavbarPremiumComponent,
    ProfileComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],

  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
