import { Component, OnInit } from '@angular/core';
import { SearchWeatherService } from '../search-weather.service';
import { GeolocationService } from '../geolocation.service';
import { Model } from '../model';
import { TodayWeatherService } from '../today-weather.service';
import { ModelToday } from '../today-model';
import { DaysWeatherService } from '../days-weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  hora
  model: Model[]

  geo: any;//recebe o objeto
  cityName: any//recebe o nome da cidade do objeto
  
  infoApi: any;
  weatherData


  morn = '06'
  after = '13'
  night = '19'

  
  todayApi
  morning

  weekApi
  weekData
  initialDate = '2020-04-19'
  finalDate = '2020-04-20'

  constructor(private weatherApi: SearchWeatherService, private locale: GeolocationService, private today: TodayWeatherService, private week:DaysWeatherService) { }

  ngOnInit() {
    let data = new Date()
    this.hora = data.getTime()

    this.geoLocale();
  }
  // Geolocalização usando API //
  geoLocale() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locale.geoLoc(position.coords.latitude, position.coords.longitude).subscribe((result) => {
          this.geo = result;
          this.cityName = this.geo.results[0].address_components[3].long_name
          this.getCity(event);
          this.showToday();
        })
      }, this.showError)
    }
  }

  showError(error) {
    if (error.PERMISSION_DENIED) {
      alert('Usuário rejeitou a solicitação de Geolocalização')
      alert('Por favor insira um CEP ou nome de uma cidade')
    }
  }
  // Input salva nome da cidade //
  saveValue(event) {
    this.cityName = event.target.value
  }
  // Submit que envia o nome da cidade //
  getCity(event) {
    this.weatherApi.getWeather(this.cityName).subscribe((resposta) => {
      this.infoApi = resposta;
      let resp = this.infoApi.data[0];
      this.weatherData = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd,
        resp.rh, resp.sunrise, resp.sunset)
      this.showToday()
      this.showWeek()
    })
  }
  // Altera dados do componente irmão
  showToday() {
    this.today.todayHour(this.cityName, this.night).subscribe((resposta) => {
      this.todayApi = resposta;
      let resp = this.todayApi.data[0];
      this.morning = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd,
        resp.rh, resp.sunrise, resp.sunset)
    })
  }

  showWeek() {
    this.week.fDayWeek(this.cityName, this.initialDate, this.finalDate).subscribe((resposta) => {
      this.weekApi = resposta;
      let resp = this.todayApi.data[0];
      this.weekData = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd,
        resp.rh, resp.sunrise, resp.sunset)
      console.log(this.weekData.temperature);
    })
  }





  
}