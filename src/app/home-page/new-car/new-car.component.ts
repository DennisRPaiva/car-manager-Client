import { Router } from '@angular/router';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  size: string = "Colossal";
  color: string = "Void";


  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
  }

  criaCarro() {
    if (confirm("Criar um carro " + this.size + " e " + this.color + " ?")) {
      let body = {
        size: this.size,
        color: this.color
      }

      this.carService.createCar(body).subscribe(response => {
        console.log(response)
      })
      alert("Carro criado")
    }

    this.router.navigate(['/'])
  }

  voltar() {
    this.router.navigate(['/'])
  }

}
