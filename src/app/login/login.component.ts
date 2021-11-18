import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../shared/auth.service';
import Swal from 'sweetalert2';


//const jwt2 = require('jsonwebtoken');
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faLock = faLock;

  user = {
    email: '',
    password: ''
  }

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  contador:number = 0;
  login() {
    
    if(((<HTMLInputElement>document.getElementById("correoLogin")).value == '' ||
    (<HTMLInputElement>document.getElementById("claveLogin")).value == '' ) && this.contador == 0) {
      this.contador++;
          Swal.fire({
            icon: 'error',
            title: 'Espera..',
            text: 'Acaso eres un fantasma?...',
            confirmButtonText: 'No',
            confirmButtonColor: '#1B3C59'
          });
        }
      else if(((<HTMLInputElement>document.getElementById("correoLogin")).value == '' ||
      (<HTMLInputElement>document.getElementById("claveLogin")).value == '' ) && this.contador == 1) {
        this.contador++;
        Swal.fire({
          icon: 'error',
          title: 'Deja de hacer Eso!',
          text: '...',
          confirmButtonText: 'Lo siento',
          confirmButtonColor: '#1B3C59'
        });
      }

      else if(((<HTMLInputElement>document.getElementById("correoLogin")).value == '' ||
      (<HTMLInputElement>document.getElementById("claveLogin")).value == '' ) && this.contador > 1) {
        Swal.fire({
          icon: 'error',
          title: '...',
          text: '...',
          showConfirmButton: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          allowOutsideClick: false,
          focusConfirm: false,
          returnFocus: false
        });
      }
      
      else {
        this.authService.logear(this.user.email, this.user.password);
      }
      
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
