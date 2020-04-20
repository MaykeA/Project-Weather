import { Component, OnInit } from '@angular/core';
import { SearchWeatherService } from '../search-weather.service';
import { GeolocationService } from '../geolocation.service';
import { Model } from '../model';
import { TodayWeatherService } from '../today-weather.service';
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

  todayApi
  morning
  aft
  ngt

  weekApi
  weeksData1
  weeksData2
  weeksData3


  constructor(private weatherApi: SearchWeatherService, private locale: GeolocationService, private today: TodayWeatherService, private week: DaysWeatherService) { }

  ngOnInit() {
    let data = new Date()
    this.hora = data.getTime()

    this.geoLocale();
    this.showMorning()
    this.showAfter()
    this.showNight()
    this.showDayOne()
    this.showDayTwo()
    this.showDayThree()
  }
  // Geolocalização usando API //
  geoLocale() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locale.geoLoc(position.coords.latitude, position.coords.longitude).subscribe((result) => {
          this.geo = result;
          this.cityName = this.geo.results[0].address_components[3].long_name
          this.getCity(event);
          this.showMorning();
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
      this.weatherData = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
      this.showMorning()
      this.showAfter()
      this.showNight()
      this.showDayOne()
      this.showDayTwo()
      this.showDayThree()
    })
  }

  // Altera dados do componente today//
  showMorning() {
    this.today.mornHour(this.cityName).subscribe((resposta) => {
      this.todayApi = resposta;
      let resp = this.todayApi.data[0];
      this.morning = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
    })
  }
  showAfter() {
    this.today.afterHour(this.cityName).subscribe((resposta) => {
      this.todayApi = resposta;
      let resp = this.todayApi.data[0];
      this.aft = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
    })
  }
  showNight() {
    this.today.nightHour(this.cityName).subscribe((resposta) => {
      this.todayApi = resposta;
      let resp = this.todayApi.data[0];
      this.ngt = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
    })
  }

  // Altera dados do Componente Future //
  showDayOne() {
    this.week.fDayOne(this.cityName).subscribe((resposta) => {
      this.weekApi = resposta;
      let resp = this.todayApi.data[1];
      this.weeksData1 = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
    })
  }
  showDayTwo() {
    this.week.fDayTwo(this.cityName).subscribe((resposta) => {
      this.weekApi = resposta;
      let resp = this.todayApi.data[2];
      this.weeksData2 = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
    })
  }
  showDayThree() {
    this.week.fDayThree(this.cityName).subscribe((resposta) => {
      this.weekApi = resposta;
      let resp = this.todayApi.data[3];
      this.weeksData3 = new Model(resp.temp, resp.city_name, resp.weather.description, resp.wind_spd, resp.rh, resp.sunrise, resp.sunset)
    })
  }
}