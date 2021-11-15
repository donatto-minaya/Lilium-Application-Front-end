import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../shared/auth.service';


//const jwt2 = require('jsonwebtoken');
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faLock = faLock;

  user = {
    email: '',
    password: ''
  }

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.logear();
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
