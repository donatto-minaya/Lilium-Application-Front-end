import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertisements } from './advertisements.model';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {
  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:47474/api/Advertisements';
  formData:Advertisements = new Advertisements();
  formData2:Advertisements = new Advertisements();
  list: Advertisements[];

  refreshList() {
    this.http.get(this.baseURL).toPromise().then(res => this.list = res as Advertisements[])
  }

  postAnuncio(){
    return this.http.post(this.baseURL, this.formData2);    
  }
}