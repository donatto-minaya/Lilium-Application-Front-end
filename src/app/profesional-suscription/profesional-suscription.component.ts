import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfesionalSuscriptionService } from '../shared/profesional-suscription.service';
import { faUser, faPhone, faAddressCard, faLock, faPortrait } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profesional-suscription',
  templateUrl: './profesional-suscription.component.html',
  styles: [
  ]
})
export class ProfesionalSuscriptionComponent implements OnInit {
  faPortrait = faPortrait;
  faPhone = faPhone;
  faUser = faUser;
  faAddressCard = faAddressCard;
  faLock = faLock;

  constructor(public service: ProfesionalSuscriptionService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postProfesional().subscribe(
      res => {
        
      },
      err => {
        console.log(err);
      }
    );
  }

}
