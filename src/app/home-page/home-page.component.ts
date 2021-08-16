import { cars } from './shared/car';
import { CarService } from './../services/car.service';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  Cars: any[] = [];
  data = new Date();
  horaDia = this.data.getHours()


  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    let carsList: any;
    if (sessionStorage.getItem('carsList')) {
      carsList = sessionStorage.getItem('carsList')
      this.Cars = JSON.parse(carsList)
    }
    console.log(this.horaDia)
  }

  mudaCor() {
    this.horaDia = 1;
    setTimeout(() => {
      this.horaDia = 2
    }, 3000)
  }


  searchButton() {
    this.carService.getInformation().subscribe(response => {
      this.Cars = response
      sessionStorage.setItem('carsList', JSON.stringify(this.Cars))
    })
  }

  criaCarro() {
    this.router.navigate(['/new'])
  }

  updateCar(car: any) {
    let carId = car._id
    this.router.navigate(['/update'], { state: { carID: carId } })
  }

  deleteCar(car: any) {
    //MODO 1
    this.carService.deleteCar(car._id).subscribe(response => {
      this.searchButton()
      console.log(response)
    })
  }

  loginPage() {
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }

}
