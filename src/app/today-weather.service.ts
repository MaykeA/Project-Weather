import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelToday } from './today-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodayWeatherService {

  constructor(private todayApi: HttpClient) { }


  private baseUrl = 'https://api.weatherbit.io/v2.0/history/hourly?city='

  private todayKey = 'b82c610ef5a14f3aad5a1e81c9c137ad'

 todayHour(city, morn,after,nigth): Observable<ModelToday[]> {
  return this.todayApi.get<ModelToday[]>(this.baseUrl + `${city}&Country=BR&start_date=2020-04-18:${morn}&end_date=2020-04-19&key=${this.todayKey}`)
}
}