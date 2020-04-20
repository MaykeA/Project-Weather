import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Model } from '../app/model'
import { ModelFuture } from '../app/modelFuture'

@Injectable({
  providedIn: 'root'
})
export class SearchWeatherService {

  constructor(private apiUrl: HttpClient) { }

  private baseUrl = 'http://api.weatherbit.io/v2.0/current?'
  private cityComplement = "city="

  private key = 'Country=BR&lang=pt&key=b82c610ef5a14f3aad5a1e81c9c137ad'

  getWeather(searchValue): Observable<Model[]> {
    return this.apiUrl.get<Model[]>(this.baseUrl + this.cityComplement + `${searchValue}&${this.key}`)
  }
}