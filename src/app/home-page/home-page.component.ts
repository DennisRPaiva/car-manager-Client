import { cars } from './shared/car';
import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  Cars: cars[] = [];


  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
  }

  searchButton() {
    this.carService.getInformation().subscribe(response => {
      this.Cars = response
    })
  }

  criaCarro() {
    this.router.navigate(['/new'])
    // let body = {
    //   size: "medium",
    //   color: "chrome"
    // }

    // this.carService.createCar(body).subscribe(response => {
    //   console.log('Criei um  carro!')
    //   console.log(response)
    // })
  }

}
