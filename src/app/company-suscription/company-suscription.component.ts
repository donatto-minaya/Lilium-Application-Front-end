import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faAddressCard, faLock, faPhone, faPortrait, faUser } from '@fortawesome/free-solid-svg-icons';
import { CompanySuscriptionService } from '../shared/company-suscription.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-suscription',
  templateUrl: './company-suscription.component.html',
  styles: [
  ]
})
export class CompanySuscriptionComponent implements OnInit {
  faPortrait = faPortrait;
  faPhone = faPhone;
  faUser = faUser;
  faAddressCard = faAddressCard;
  faLock = faLock;

  constructor(public service: CompanySuscriptionService) { }

  accountCreated() {
    if((<HTMLInputElement>document.getElementById("empresa")).value == "" ||
    (<HTMLInputElement>document.getElementById("correo")).value == "" ||
    (<HTMLInputElement>document.getElementById("clave")).value == "") {
      Swal.fire({
        icon: 'error',
        title: 'Datos Incompletos :(',
        text: 'Tal vez te falta un campo..',
        footer: 'Aunque el telefono y la edad son opcionales',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#1B3C59'
      })
    }

    else {
      Swal.fire({
        icon: 'success',
        title: 'Cuenta creada',
        text: 'Inicia sesión ahora mismo para configurar y activar tu cuenta!',
        confirmButtonText: 'Ingresar',
        confirmButtonColor: '#1B3C59'
      });

      (<HTMLInputElement>document.getElementById("empresa")).value = "";
      (<HTMLInputElement>document.getElementById("correo")).value = "";
      (<HTMLInputElement>document.getElementById("clave")).value = "";
    }    
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postCompany().subscribe(
      res => {
        
      },
      err => {
        console.log(err);
      }
    );
  }

}
