import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ModelFuture } from '../app/modelFuture'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DaysWeatherService {

  constructor(private todayApi: HttpClient) { }

  private baseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city='
  private weekKey = 'a61705b3be7e460d86cf63927a1dea1b'

  fDayOne(city): Observable<ModelFuture[]> {
    return this.todayApi.get<ModelFuture[]>(this.baseUrl + `${city}&Country=BR&key=${this.weekKey}`)
  }

  fDayTwo(city): Observable<ModelFuture[]> {
    return this.todayApi.get<ModelFuture[]>(this.baseUrl + `${city}&Country=BR&key=${this.weekKey}`)
  }

  fDayThree(city): Observable<ModelFuture[]> {
    return this.todayApi.get<ModelFuture[]>(this.baseUrl + `${city}&Country=BR&key=${this.weekKey}`)
  }
}