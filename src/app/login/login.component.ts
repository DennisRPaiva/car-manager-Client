import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string = "";
  senha: string = "";



  cadastrados = [
    { user: "teste", pass: "teste" },
    { user: "admin", pass: "admin" }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homePage() {
    this.cadastrados.find(cadas => {
      if (cadas.user === this.usuario && cadas.pass === this.senha) {
        this.router.navigate(['/'])
      }
    })
  }

}
