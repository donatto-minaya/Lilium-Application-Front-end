import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisements } from './advertisements.model';
import { Jornadas } from './jornadas.model';
import { CompanySuscription } from './company-suscription.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  readonly AdvertisementsURL = 'http://localhost:47474/api/Advertisements';
  readonly JornadasURL = 'http://localhost:47474/api/Jornadas';
  readonly EmpresasURL = 'http://localhost:47474/api/Company';

  list: Advertisements[];
  jornadas: Jornadas[];
  empresas: CompanySuscription[];

  formData:Advertisements = new Advertisements();
  
  obtenerAnunciosPorCuenta(id:string) {
    this.http.get(`${this.AdvertisementsURL}/${id}`).toPromise().then(res => this.list = res as Advertisements[])
  }

  obtenerJornadas() {
    this.http.get(this.JornadasURL).toPromise().then(res => this.jornadas = res as Jornadas[])
  }

  obtenerEmpresas() {
    this.http.get(this.EmpresasURL).toPromise().then(res => this.empresas = res as CompanySuscription[])
  }

  postAnuncio() {
    return this.http.post(this.AdvertisementsURL, this.formData);    
  }

  eliminarAnuncio(id:string) {
    fetch(`${this.AdvertisementsURL}/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      this.obtenerAnunciosPorCuenta(JSON.stringify(JSON.parse(localStorage.getItem('id') || '{}')));
    })
    .then(res => null)
  }
}

