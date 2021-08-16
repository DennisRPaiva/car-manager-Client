import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private _httpClient: HttpClient) { }

  public get(_url: string): Observable<any> {
    const response = this._httpClient.get(`${environment.config.tagmeApi.host}${_url}`)
    return response
  }

  public post(_url: string, body: Object): Observable<any> {
    const response = this._httpClient.post(`${environment.config.tagmeApi.host}${_url}`, body)
    return response
  }

  public put(_url: string, body: Object): Observable<any> {
    const response = this._httpClient.put(`${environment.config.tagmeApi.host}${_url}`, body)
    return response
  }

  public delete(_url: string): Observable<any> {
    const response = this._httpClient.delete(`${environment.config.tagmeApi.host}${_url}`)
    return response
  }
}
