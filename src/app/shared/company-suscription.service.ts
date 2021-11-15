import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanySuscription } from './company-suscription.model';

import * as jwt from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class CompanySuscriptionService {

  constructor(private http: HttpClient  ) { }

  readonly baseURL = 'http://localhost:47474/api/Company';
  formData:CompanySuscription = new CompanySuscription()

  postCompany() {
    return this.http.post(this.baseURL, this.formData);

  }
}
