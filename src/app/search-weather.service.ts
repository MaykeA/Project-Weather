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
  private dailyUrl = 'https://www.weatherbit.io/api/weather-history-daily'
  private cityComplement = "city="

  private key = 'Country=BR&lang=pt&key=b82c610ef5a14f3aad5a1e81c9c137ad'

  getWeather(searchValue): Observable<Model[]>{
    //retornando agora
    console.log(this.baseUrl+this.cityComplement+`${searchValue}&${this.key}`);
    return this.apiUrl.get<Model[]>(this.baseUrl+this.cityComplement+`${searchValue}&${this.key}`)
  }

  // getDaily(initial, final): Observable<ModelFuture[]>{
  //   return this.dailyUrl.get<ModelFuture[]>(this.dailyUrl+`${initial}${final}&${this.key}`)
  // }
}

