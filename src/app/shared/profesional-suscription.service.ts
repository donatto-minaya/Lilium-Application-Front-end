import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfesionalSuscription } from './profesional-suscription.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalSuscriptionService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:47474/api/Profesional';

  formData:ProfesionalSuscription = new ProfesionalSuscription();

  postProfesional() {
    return this.http.post(this.baseURL, this.formData);
  }
}
