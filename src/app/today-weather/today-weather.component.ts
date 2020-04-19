import { Component, OnInit, Input } from '@angular/core';
import { TodayWeatherService } from '../today-weather.service';
import { Model } from '../model';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component'

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})

export class TodayWeatherComponent implements OnInit {
  
  @Input() acessaWeatherData
  
  todayApi
  todayInfo  
  nomeDaCidade = 'São Paulo'
  morning

  constructor(private today:TodayWeatherService) { }
  
   ngOnInit(){
      this.today.todayHour(this.nomeDaCidade).subscribe((resposta) => {
      this.todayApi = resposta;
      this.morning = this.todayApi.data[0];
      console.log(this.nomeDaCidade);
    })
  }
}