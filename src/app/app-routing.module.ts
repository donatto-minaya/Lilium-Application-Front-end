import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSuscriptionComponent } from './customer-suscription/customer-suscription.component';
import { SuscripcionesComponent } from './suscripciones/suscripciones.component';

const routes : Routes = [
  {path:'customer', component: CustomerSuscriptionComponent},
  {path:'', component: SuscripcionesComponent, pathMatch: 'full'}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
