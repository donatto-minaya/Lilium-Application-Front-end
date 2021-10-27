import { Injectable } from '@angular/core';
import { CustomerSuscription } from './customer-suscription.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerSuscriptionService {

  constructor(private http: HttpClient) { }
  
  readonly baseURL = 'http://localhost:47474/api/Customers';
  formData:CustomerSuscription = new CustomerSuscription();

  postCustomer() {
    return this.http.post(this.baseURL, this.formData);
  }
}
