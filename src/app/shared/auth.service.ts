import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  logear(correo:string, clave:string) {
      var lista=[];
      fetch(`http://localhost:47474/api/Login/${correo}/${clave}`).then(res => res.json())
      .then((data) => {
        lista = data
        if(lista.length > 0) {
          localStorage.setItem('logged', 'true')

          lista[0].rol_id != '3' ? this.UserStorage(lista): this.CompanyStorage(lista);  

          this.router.navigate(['/profile'])
        }

        else {
          Swal.fire({
            icon: 'error',
            title: 'No.. te encuentro..',
            text: 'Tus datos son correctos? O aún no te has creado una cuenta?',
            confirmButtonText: 'Intentar de nuevo',
            confirmButtonColor: '#1B3C59'
          });
        }
      })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  loggedIn() {
    return !!localStorage.getItem('logged');
  }

  CompanyStorage(lista:any) {
    localStorage.setItem('id', lista[0].company_id);
    localStorage.setItem('rol_id', lista[0].rol_id);
    localStorage.setItem('correo', lista[0].company_email);
    localStorage.setItem('nombre', lista[0].company_name);
    localStorage.setItem('edad', lista[0].company_age);
    localStorage.setItem('clave', lista[0].company_password);
    localStorage.setItem('telefono', lista[0].company_phone);
  }

  UserStorage(lista:any) {
    localStorage.setItem('id', lista[0].user_id);
    localStorage.setItem('rol_id', lista[0].rol_id);
    localStorage.setItem('correo', lista[0].user_email);
    localStorage.setItem('nombre', lista[0].user_name);
    localStorage.setItem('edad', lista[0].user_age);
    localStorage.setItem('clave', lista[0].user_password);
    localStorage.setItem('telefono', lista[0].user_phone);
  }
  
}
