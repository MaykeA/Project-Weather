import { Component, OnInit, Input } from '@angular/core';
import { TodayWeatherService } from '../today-weather.service';
import { Model } from '../model';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})
export class TodayWeatherComponent implements OnInit {
  
  @Input() acessaWeatherData
  @Input() acessaCity

  todayApi
  todayInfo
  xD = this.acessaCity
  morning

  constructor(private today:TodayWeatherService) { }

  // cityName = 
  
   ngOnInit(){
      this.today.todayHour(this.xD).subscribe((resposta) => {
      this.todayApi = resposta;
      this.morning = this.todayApi.data[0];
      console.log(this.morning.temp)
    })
  }
}
