import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClientService) { }


  public getInformation(): Observable<any> {
    return this.httpClient
      .get(`/cars/search/info`) as Observable<any>; //url decidida no BackEnd
  }

  public createCar(body: Object): Observable<any> {
    return this.httpClient.post(`/cars/create`, body)
  }

  public getCarById(_id: string): Observable<any> {
    return this.httpClient.get(`/cars/search/${_id}`)
  }

  public updateCar(_id: string, body: Object): Observable<any> {
    return this.httpClient.put(`/cars/update/${_id}`, body)
  }

  public deleteCar(_id: string): Observable<any> {
    return this.httpClient.delete(`/cars/delete/${_id}`)
  }
}
