import { Component, OnInit } from '@angular/core';
import { CustomerSuscriptionService } from 'src/app/shared/customer-suscription.service';

@Component({
  selector: 'app-customer-suscription',
  templateUrl: './customer-suscription.component.html',
  styles: [
  ]
})
export class CustomerSuscriptionComponent implements OnInit {

  constructor(public service: CustomerSuscriptionService) { }

  ngOnInit(): void {
  }

}
