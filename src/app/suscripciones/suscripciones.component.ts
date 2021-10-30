import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.css']
})
export class SuscripcionesComponent implements OnInit {
  faCoffee = faCoffee;
  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
