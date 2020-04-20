import { Component, OnInit, Input } from '@angular/core';
import { DaysWeatherService } from '../days-weather.service';



@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.scss']
})
export class FutureWeatherComponent implements OnInit {

  @Input() future

  @Input() dayOne

  @Input() dayTwo

  @Input() dayThree

  dia
  dias

  day1Name = 'Terça'
  day2Name = 'Quarta'
  day3Name = 'Quinta'

  constructor(private historical: DaysWeatherService) { }

  ngOnInit(): void {
      
  }

}
