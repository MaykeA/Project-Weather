import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelToday } from './today-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodayWeatherService {

  morn = '06'
  after = '13'
  night = '19'

  constructor(private todayApi: HttpClient) { }


  private baseUrl = 'https://api.weatherbit.io/v2.0/history/hourly?city='

  private todayKey = 'a61705b3be7e460d86cf63927a1dea1b'

 mornHour(city): Observable<ModelToday[]> {
  return this.todayApi.get<ModelToday[]>(this.baseUrl + `${city}&Country=BR&start_date=2020-04-18:${this.morn}&end_date=2020-04-19&key=${this.todayKey}`)
  }

  afterHour(city): Observable<ModelToday[]> {
    return this.todayApi.get<ModelToday[]>(this.baseUrl + `${city}&Country=BR&start_date=2020-04-18:${this.after}&end_date=2020-04-19&key=${this.todayKey}`)
  }

  nightHour(city): Observable<ModelToday[]> {
    return this.todayApi.get<ModelToday[]>(this.baseUrl + `${city}&Country=BR&start_date=2020-04-18:${this.night}&end_date=2020-04-19&key=${this.todayKey}`)
  }
}