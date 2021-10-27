import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerSuscriptionService } from 'src/app/shared/customer-suscription.service';

@Component({
  selector: 'app-customer-suscription-form',
  templateUrl: './customer-suscription-form.component.html',
  styles: [
  ]
})
export class CustomerSuscriptionFormComponent implements OnInit {

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
