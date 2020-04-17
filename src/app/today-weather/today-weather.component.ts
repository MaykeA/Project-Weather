import { Component, OnInit, Input } from '@angular/core';
import { SearchWeatherService } from '../search-weather.service';
import { Model } from '../model';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})
export class TodayWeatherComponent implements OnInit {

  constructor(private weatherApi: SearchWeatherService) { }

  model: Model[]
  
<<<<<<< HEAD
  @Input() weatherDatas;
=======
  @Input() weatherDatas
>>>>>>> 42cfcbb77a55e5dc964c27caf59aded18025ab78

  ngOnInit(): void {
  }
  
}
