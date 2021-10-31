import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerSuscriptionService } from 'src/app/shared/customer-suscription.service';
import { faUser, faPhone, faAddressCard, faLock, faPortrait } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer-suscription',
  templateUrl: './customer-suscription.component.html',
  styles: [
  ]
})
export class CustomerSuscriptionComponent implements OnInit {
  faPortrait = faPortrait;
  faPhone = faPhone;
  faUser = faUser;
  faAddressCard = faAddressCard;
  faLock = faLock;

  constructor(public service: CustomerSuscriptionService) { }
  
  accountCreated() {
    if((<HTMLInputElement>document.getElementById("nombre")).value == "" ||
    (<HTMLInputElement>document.getElementById("apellido")).value == "" ||
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

      (<HTMLInputElement>document.getElementById("nombre")).value = "";
      (<HTMLInputElement>document.getElementById("apellido")).value = "";
      (<HTMLInputElement>document.getElementById("edad")).value = "";
      (<HTMLInputElement>document.getElementById("telefono")).value = "";
      (<HTMLInputElement>document.getElementById("correo")).value = "";
      (<HTMLInputElement>document.getElementById("clave")).value = "";
    }    
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    this.service.postCustomer().subscribe(
      res => {
        
      },
      err => {
        console.log(err);
      }
    );
  }

}
