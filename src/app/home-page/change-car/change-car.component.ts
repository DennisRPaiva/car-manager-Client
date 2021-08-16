import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { cars } from './../shared/car';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from './../../services/car.service';
import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-change-car',
  templateUrl: './change-car.component.html',
  styleUrls: ['./change-car.component.css']
})
export class ChangeCarComponent implements OnInit {

  size: string = "";
  color: string = "";
  selectedId!: string;

  state$!: Subscription;
  selectedCar: any;

  changedCar = {
    size: "changeCarSize",
    color: "changeCarColor"
  }

  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //Pode fazer por session storage tb
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state)).subscribe(state => {
        this.selectedId = state.carID
      })

    this.carService.getCarById(this.selectedId).subscribe(response => {
      this.selectedCar = response
    })
  }

  voltar() {
    this.router.navigate(['/'])
  }

  update() {
    this.changedCar.size = this.size
    this.changedCar.color = this.color

    this.carService.updateCar(this.selectedId, this.changedCar).subscribe(response => {
      console.log(response)
    })
  }

}
