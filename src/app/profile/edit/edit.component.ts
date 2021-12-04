import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanySuscriptionService } from '../../shared/company-suscription.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public service: CompanySuscriptionService, public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  //Perfil
  onEdit(form: NgForm) {
    if((<HTMLInputElement>document.getElementById("nombre_empresa")).value == '' || 
    (<HTMLInputElement>document.getElementById("correo_empresa")).value == '' ||
    (<HTMLInputElement>document.getElementById("edad_empresa")).value == '' ||
    (<HTMLInputElement>document.getElementById("telefono_empresa")).value == '' ||
    (<HTMLInputElement>document.getElementById("clave_empresa")).value == '' ||
    (<HTMLInputElement>document.getElementById("clave_confirmar")).value == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Uhm..',
        text: 'Parece que falta algún campo..'
      })
    }

    else if((<HTMLInputElement>document.getElementById("clave_empresa")).value != 
    (<HTMLInputElement>document.getElementById("clave_confirmar")).value) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña erronea',
        text: 'Las contraseñas deben coincidir'
      })
    }
    
    else {
      this.service.editarPerfil().subscribe(
        res => {
          var correo = (<HTMLInputElement>document.getElementById("correo_empresa")).value
          var clave = (<HTMLInputElement>document.getElementById("clave_empresa")).value
          this.auth.logear(correo, clave)
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
