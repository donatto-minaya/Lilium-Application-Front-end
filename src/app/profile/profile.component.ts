import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../shared/profile.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    id: localStorage.getItem('id'),
    email: localStorage.getItem('correo'),
    password: localStorage.getItem('clave'),
    rol_id: localStorage.getItem('rol_id')
  }

  data = {
    fecha : new Date().toJSON().slice(0,10).replace(/-/g,'-')
  }

  constructor(public service: ProfileService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    if((localStorage.getItem('rol_id') || '') == '3') {
      this.service.obtenerJornadas();
      this.service.obtenerActividadesPorEmpresa(this.user.id || '');
      this.service.obtenerAnunciosPorCuenta(JSON.stringify(JSON.parse(this.user.id || '{}')));
    }

    else {
      this.service.obtenerEmpresas();
    }
  }

  nuevaActividad(form:NgForm) {
    if((<HTMLInputElement>document.getElementById("titulo")).value == '') {
      this.toastr.error('No ha colocado un título', 'Error')
    }
    else {
      this.service.postActividad().subscribe(
        res => {
          this.service.obtenerActividadesPorEmpresa(this.user.id || '');
        },
  
        err => {
          console.log(err);
        }
      );
    }
  }

  onSubmit(form: NgForm) {
    this.service.postAnuncio().subscribe(
      res => {
        this.service.obtenerAnunciosPorCuenta(JSON.stringify(JSON.parse(this.user.id || '{}')));
      },
      err => {
        console.log(err);
      }
    );
  } 

  eliminarAnuncio(id:string) {
    this.service.eliminarAnuncio(id);
  }

  completarActividad(id:number) {
    this.service.completarActividad(id);
    this.toastr.success('Se ha completado una actividad', 'Actividades')
  }
}
