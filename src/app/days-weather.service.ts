import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ModelFuture } from '../app/modelFuture'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DaysWeatherService {

  constructor(private todayApi: HttpClient) { }

  private baseUrl = 'https://api.weatherbit.io/v2.0/history/daily?city='
  private weekKey = 'b82c610ef5a14f3aad5a1e81c9c137ad'

  fDayWeek(city, initial, final): Observable<ModelFuture[]> {
    console.log(this.baseUrl + `${city}&Country=BR&start_date=${initial}&end_date=${final}&key=${this.weekKey}`);
    return this.todayApi.get<ModelFuture[]>(this.baseUrl + `${city}&Country=BR&start_date=${initial}&end_date=${final}&key=${this.weekKey}`)
  }
}