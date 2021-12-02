import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisements } from './advertisements.model';
import { Jornadas } from './jornadas.model';
import { CompanySuscription } from './company-suscription.model';
import { Tasks } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  readonly AdvertisementsURL = 'http://localhost:47474/api/Advertisements';
  readonly JornadasURL = 'http://localhost:47474/api/Jornadas';
  readonly EmpresasURL = 'http://localhost:47474/api/Company';
  readonly ActividadesURL = 'http://localhost:47474/api/Task';

  list: Advertisements[];
  jornadas: Jornadas[];
  empresas: CompanySuscription[];
  actividades: Tasks[];
  actividadesCompletas: Tasks[];

  formData:Advertisements = new Advertisements();
  data2:Tasks = new Tasks();
  
  obtenerAnunciosPorCuenta(id:string) {
    this.http.get(`${this.AdvertisementsURL}/${id}`).toPromise().then(res => this.list = res as Advertisements[])
  }

  obtenerJornadas() {
    this.http.get(this.JornadasURL).toPromise().then(res => this.jornadas = res as Jornadas[])
  }

  obtenerEmpresas() {
    this.http.get(this.EmpresasURL).toPromise().then(res => this.empresas = res as CompanySuscription[])
  }

  obtenerActividadesPorEmpresa(id:string) {
    this.http.get(`${this.ActividadesURL}?id=${id}`).toPromise().then(res => this.actividades = res as Tasks[]);
  }

  obtenerActividadesCompletasPorEmpresa(id:string) {
    this.http.get(`${this.ActividadesURL}/completas?id=${id}`).toPromise().then(res => this.actividadesCompletas = res as Tasks[]);
  }

  postAnuncio() {
    return this.http.post(this.AdvertisementsURL, this.formData);    
  }

  postActividad() {
    return this.http.post(this.ActividadesURL, this.data2);    
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
  
  completarActividad(id:number) {
    fetch(`${this.ActividadesURL}/${id}`, {
      method: 'PUT'
    })
    .then(res => {
      this.obtenerActividadesPorEmpresa(JSON.stringify(JSON.parse(localStorage.getItem('id') || '{}')));
      this.obtenerActividadesCompletasPorEmpresa(JSON.stringify(JSON.parse(localStorage.getItem('id') || '{}')));
    })
    .then(res => null)
  }

  vaciarActividadesEmpresa(id:string) {
    fetch(`${this.ActividadesURL}?id=${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      this.obtenerActividadesPorEmpresa(JSON.stringify(JSON.parse(localStorage.getItem('id') || '{}')));
    })
    .then(res => null)
  }

  vaciarActividadesCompletasEmpresa(id:string) {
    fetch(`${this.ActividadesURL}/completas?id=${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      this.obtenerAnunciosPorCuenta(JSON.stringify(JSON.parse(localStorage.getItem('id') || '{}')));
      this.obtenerActividadesCompletasPorEmpresa(JSON.stringify(JSON.parse(localStorage.getItem('id') || '{}')));
    })
    .then(res => null)
  }

}

