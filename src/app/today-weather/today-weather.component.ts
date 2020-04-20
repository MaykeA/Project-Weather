import { Component, OnInit, Input } from '@angular/core';
import { TodayWeatherService } from '../today-weather.service';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})

export class TodayWeatherComponent implements OnInit {
  
  @Input() status

  @Input() morning

  @Input() after

  @Input() night

  constructor(private today:TodayWeatherService) { }
  
   ngOnInit(){
  }
}