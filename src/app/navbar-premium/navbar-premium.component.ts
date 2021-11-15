import { Component, OnInit } from '@angular/core';
import { Advertisements } from '../shared/advertisements.model';
import { AdvertisementsService } from '../shared/advertisements.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-premium',
  templateUrl: './navbar-premium.component.html',
  styleUrls: ['./navbar-premium.component.css']
})

export class NavbarPremiumComponent implements OnInit {

  constructor(public service: AdvertisementsService) { }

  ngOnInit(): void {
  }
}
