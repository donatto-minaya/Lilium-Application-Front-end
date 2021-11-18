import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisements } from './advertisements.model';
import { Jornadas } from './jornadas.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  readonly AdvertisementsURL = 'http://localhost:47474/api/Advertisements';
  readonly JornadasURL = 'http://localhost:47474/api/Jornadas';
  list: Advertisements[];
  jornadas: Jornadas[];
  formData:Advertisements = new Advertisements();
  

  obtenerJornadas() {
    this.http.get(this.JornadasURL).toPromise().then(res => this.jornadas = res as Jornadas[])
  }

  postAnuncio() {
    return this.http.post(this.AdvertisementsURL, this.formData);    
  }
}

