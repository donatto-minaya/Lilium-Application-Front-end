import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompanySuscriptionComponent } from './company-suscription/company-suscription.component';
import { HomeComponent } from './home/home.component';
import { CustomerSuscriptionComponent } from './customer-suscription/customer-suscription.component';
import { PortalComponent } from './portal/portal.component';
import { ProfesionalSuscriptionComponent } from './profesional-suscription/profesional-suscription.component';
import {AuthGuard} from './auth.guard'
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './profile/edit/edit.component';

const routes : Routes = [
  {path:'portal', component: PortalComponent, canActivate: [AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'profile/edit', component: EditComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'company', component: CompanySuscriptionComponent},
  {path:'customer', component: CustomerSuscriptionComponent},
  {path:'profesional', component: ProfesionalSuscriptionComponent},
  {path:'', component: HomeComponent, pathMatch: 'full'}
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
