import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerSuscriptionService } from 'src/app/shared/customer-suscription.service';
import { faUser, faPhone, faAddressCard, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-suscription',
  templateUrl: './customer-suscription.component.html',
  styles: [
  ]
})
export class CustomerSuscriptionComponent implements OnInit {
  faPhone = faPhone;
  faUser = faUser;
  faAddressCard = faAddressCard;
  faLock = faLock;

  constructor(public service: CustomerSuscriptionService) { }

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
