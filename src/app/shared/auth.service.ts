import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  logear() {
      var lista=[];
      fetch("http://localhost:47474/api/Sectors").then(res => res.json())
      .then((data) => {
        lista = data
        var sector = lista.length ? lista[0].sector_description : null;
        console.log(sector);
        localStorage.setItem('logged', 'true')
      })
  }

  logout() {
    localStorage.removeItem('logged');
    this.router.navigate(['/login'])
  }

  loggedIn() {
    return !!localStorage.getItem('logged');
  }
  
}
